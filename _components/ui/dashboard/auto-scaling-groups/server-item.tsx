import { ChevronDown, ChevronRight, X } from "lucide-react"
import { Button } from "@/_components/ui/inputs/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/_components/ui/tooltip"
import Link from "next/link"
import { ASGWithInstances } from "@/_lib/aws/auto-scaling-groups"
import { Instance } from "@aws-sdk/client-ec2"
import { Instance as ASGInstance } from "@aws-sdk/client-auto-scaling"

interface ServerItemProps {
  server: ASGWithInstances
  expanded: boolean
  onToggle: () => void
  onDelete: () => void
}

export function ServerItem({
  server,
  expanded,
  onToggle,
  onDelete,
}: ServerItemProps) {
  return (
    <div className='bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg transition-all duration-300 hover:shadow-xl'>
      <div className='p-4 w-full flex items-center justify-between bg-gradient-to-r from-blue-500/10 to-purple-600/10'>
        <div className='flex items-center gap-2'>
          <Button
            variant='ghost'
            size='icon'
            className='text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/20 transition-colors'
            onClick={onToggle}
          >
            {expanded ? (
              <ChevronDown className='h-6 w-6' />
            ) : (
              <ChevronRight className='h-6 w-6' />
            )}
          </Button>
          <Link
            href={`/asg/${server.AutoScalingGroupName}`}
            className='text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
          >
            {server.AutoScalingGroupName}
          </Link>
        </div>
        <div className='flex items-center gap-4'>
          <span className='text-sm text-gray-600 dark:text-gray-400'>
            Min: {server.MinSize} | Max: {server.MaxSize} | Desired:{" "}
            {server.DesiredCapacity}
          </span>
          <Button
            variant='ghost'
            size='icon'
            className='text-red-500 hover:text-red-600 hover:bg-red-100 dark:hover:bg-red-900/20 transition-colors'
            onClick={onDelete}
          >
            <X className='h-5 w-5' />
          </Button>
        </div>
      </div>
      {expanded && (
        <div className='border-t border-gray-200 dark:border-gray-700'>
          <div className='p-4 grid grid-cols-2 gap-4 text-sm'>
            <div>
              <p>
                <span className='font-medium'>Launch Configuration:</span>{" "}
                {server.LaunchConfigurationName || "N/A"}
              </p>
              {server.LaunchTemplate && (
                <p>
                  <span className='font-medium'>Launch Template:</span>{" "}
                  {server.LaunchTemplate.LaunchTemplateName} (v
                  {server.LaunchTemplate.Version})
                </p>
              )}
              <p>
                <span className='font-medium'>Health Check Type:</span>{" "}
                {server.HealthCheckType}
              </p>
              <p>
                <span className='font-medium'>Health Check Grace Period:</span>{" "}
                {server.HealthCheckGracePeriod} seconds
              </p>
            </div>
            <div>
              <p>
                <span className='font-medium'>Created:</span>{" "}
                {server?.CreatedTime?.toLocaleString()}
              </p>
              <p>
                <span className='font-medium'>Availability Zones:</span>{" "}
                {server?.AvailabilityZones?.join(", ")}
              </p>
              <p>
                <span className='font-medium'>Termination Policies:</span>{" "}
                {server?.TerminationPolicies?.join(", ")}
              </p>
            </div>
          </div>
          <div className='px-4 pb-4'>
            <table className='w-full text-sm'>
              <thead>
                <tr className='text-left text-muted-foreground dark:text-gray-400'>
                  <th className='pb-2'>Instance ID</th>
                  <th className='pb-2'>State</th>
                  <th className='pb-2'>Health</th>
                  <th className='pb-2'>AZ</th>
                  <th className='pb-2'>IP</th>
                  <th className='pb-2'>Launched</th>
                </tr>
              </thead>
              <tbody>
                {server?.EC2Instances?.map((instance, index) => (
                  <InstanceItem
                    key={instance.InstanceId}
                    instance={instance}
                    index={index}
                    asgInstance={
                      server?.Instances?.find(
                        (i) => i.InstanceId === instance.InstanceId
                      ) || null
                    }
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}

function InstanceItem({
  asgInstance,
  instance,
  index,
}: {
  asgInstance: ASGInstance | null
  instance: Instance
  index: number
}) {
  // Simulating different build steps for demonstration
  const buildStepOptions = [
    "Initializing",
    "Provisioning",
    "Configuring",
    "Finalizing",
    "Ready",
  ]
  const buildStep = buildStepOptions[index % buildStepOptions.length]

  const getLifecycleStateColor = (state: string) => {
    switch (state) {
      case "InService":
        return "bg-green-500"
      case "Pending":
        return "bg-yellow-500"
      case "Terminating":
        return "bg-red-500"
      case "Terminated":
        return "bg-gray-500"
      case "Detaching":
        return "bg-orange-500"
      case "Detached":
        return "bg-purple-500"
      case "EnteringStandby":
        return "bg-blue-500"
      case "Standby":
        return "bg-indigo-500"
      default:
        return "bg-gray-500"
    }
  }

  const getHealthStatusColor = (status: string) => {
    switch (status) {
      case "Healthy":
        return "text-green-500"
      case "Initializing":
        return "text-blue-500"
      case "Impaired":
        return "text-yellow-500"
      case "Unhealthy":
        return "text-red-500"
      default:
        return "text-gray-500"
    }
  }

  const getHealthStatusDescription = (status: string) => {
    switch (status) {
      case "Healthy":
        return "The instance is running and passing health checks."
      case "Initializing":
        return "The instance is starting up and running initial checks."
      case "Impaired":
        return "The instance is running but may have performance issues."
      case "Unhealthy":
        return "The instance is not running properly or failing health checks."
      default:
        return "The health status of the instance is unknown."
    }
  }

  return (
    <tr className='border-t border-gray-200 dark:border-gray-700'>
      <td className='py-2'>
        <Link
          href={`/instance/${instance.InstanceId}`}
          className='text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
        >
          {instance.InstanceId}
        </Link>
      </td>
      <td className='py-2'>
        <div className='flex items-center gap-2'>
          <div
            className={`w-2 h-2 rounded-full ${getLifecycleStateColor(
              asgInstance?.LifecycleState || ""
            )}`}
          />
          <span className='text-xs'>{asgInstance?.LifecycleState || ""}</span>
        </div>
      </td>
      <td className='py-2'>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <span
                className={`font-medium ${getHealthStatusColor(
                  asgInstance?.HealthStatus || ""
                )}`}
              >
                {asgInstance?.HealthStatus || ""}
              </span>
            </TooltipTrigger>
            <TooltipContent>
              <p>
                {getHealthStatusDescription(asgInstance?.HealthStatus || "")}
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </td>
      <td className='py-2'>{instance?.Placement?.AvailabilityZone}</td>
      <td className='py-2'>{instance?.PrivateIpAddress}</td>
      <td className='py-2 text-xs'>{instance?.LaunchTime?.toLocaleString()}</td>
    </tr>
  )
}
