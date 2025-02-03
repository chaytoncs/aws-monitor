import {
  EC2Client,
  DescribeInstancesCommand,
  type Instance,
  DescribeInstancesCommandOutput,
} from "@aws-sdk/client-ec2"
import { mockEC2Instances } from "./mocks/mock-data"
import { AWS_CONFIG } from "./config"

export async function getEC2Instances(
  instanceIds: string[]
): Promise<Instance[]> {
  // Uncomment actual SDK call and remove mock data return
  // try {
  //   const client = new EC2Client(AWS_CONFIG)
  //   const command = new DescribeInstancesCommand({
  //     InstanceIds: instanceIds,
  //   })
  //   const response: DescribeInstancesCommandOutput = await client.send(command)
  //   const resInstances =
  //     response.Reservations?.flatMap(
  //       (reservation) => reservation.Instances || []
  //     ) || []
  //   const instances = resInstances.sort((a, b) => {
  //     const aState = a?.State?.Name !== undefined ? a.State.Name : 0
  //     const bState = b?.State?.Name !== undefined ? b.State.Name : 0
  //     if (aState < bState) return -1
  //     if (aState > bState) return 1
  //     return 0
  //   })
  //   return instances
  // } catch (error) {
  //   return []
  // }
  return mockEC2Instances
}
