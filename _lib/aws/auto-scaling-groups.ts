import {
  AutoScalingClient,
  DescribeAutoScalingGroupsCommand,
  DescribeAutoScalingGroupsCommandOutput,
  type AutoScalingGroup,
} from "@aws-sdk/client-auto-scaling"
import { Instance } from "@aws-sdk/client-ec2"
import { getEC2Instances } from "./ec2-instances"
import { mockAutoScalingGroups } from "./mocks/mock-data"

export async function getAutoScalingGroups(
  asgName: string
): Promise<AutoScalingGroup[]> {
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
  //     console.log("No records")
  //     return []
  //   }
  //   return response?.AutoScalingGroups
  // } catch (error) {
  //   return []
  // }
  return mockAutoScalingGroups
}

export interface ASGWithInstances extends AutoScalingGroup {
  EC2Instances: Instance[]
}

export async function getASGWithInstances(
  asgName: string
): Promise<ASGWithInstances[]> {
  const asgGroups = await getAutoScalingGroups(asgName)
  const allInstanceIds = asgGroups.flatMap(
    (asg) => asg.Instances?.map((instance) => instance.InstanceId || "") || []
  )
  const ec2Instances = await getEC2Instances(allInstanceIds)

  return asgGroups.map((asg) => ({
    ...asg,
    EC2Instances: ec2Instances.filter((instance) =>
      asg.Instances?.some(
        (asgInstance) => asgInstance.InstanceId === instance.InstanceId
      )
    ),
  }))
}
