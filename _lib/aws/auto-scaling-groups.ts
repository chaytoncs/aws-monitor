import {
  AutoScalingClient,
  DescribeAutoScalingGroupsCommand,
  DescribeAutoScalingGroupsCommandOutput,
  type AutoScalingGroup,
} from "@aws-sdk/client-auto-scaling"
import { Instance } from "@aws-sdk/client-ec2"
import { getEC2Instances } from "./ec2-instances"
import { mockAutoScalingGroups } from "./mocks/mock-data"

export async function getAutoScalingGroup(
  asgName: string
): Promise<AutoScalingGroup | null> {
  // Uncomment actual SDK call and remove mock data return
  // try {
  //   const client = new AutoScalingClient()
  //   const input = {
  //     AutoScalingGroupNames: [asgName],
  //     MaxRecords: 10,
  //   }

  //   const command = new DescribeAutoScalingGroupsCommand(input)
  //   const response: DescribeAutoScalingGroupsCommandOutput = await client.send(
  //     command
  //   )

  //   if (
  //     !response.AutoScalingGroups ||
  //     response.AutoScalingGroups.length === 0
  //   ) {
  //     return null
  //   }
  //   return response?.AutoScalingGroups[0]
  // } catch (error) {
  //   return null
  // }
  return (
    mockAutoScalingGroups.find((asg) => asg.AutoScalingGroupName === asgName) ||
    null
  )
}

export interface ASGWithInstances extends AutoScalingGroup {
  EC2Instances: Instance[]
}

export async function getASGWithInstances(
  asgName: string
): Promise<ASGWithInstances | null> {
  const asg = await getAutoScalingGroup(asgName)
  if (!asg) {
    return null
  }

  const allInstanceIds =
    asg.Instances?.map((instance) => instance.InstanceId || "") || []

  const ec2Instances = await getEC2Instances(allInstanceIds)

  return {
    ...asg,
    EC2Instances: ec2Instances.filter((instance) =>
      asg.Instances?.some(
        (asgInstance) => asgInstance.InstanceId === instance.InstanceId
      )
    ),
  }
}
