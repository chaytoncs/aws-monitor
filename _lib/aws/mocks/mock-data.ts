import type { AutoScalingGroup } from "@aws-sdk/client-auto-scaling"
import type { Instance } from "@aws-sdk/client-ec2"

export const mockAutoScalingGroups: AutoScalingGroup[] = [
  {
    AutoScalingGroupName: "ComprehensiveTestGroup",
    AutoScalingGroupARN:
      "arn:aws:autoscaling:us-west-2:123456789012:autoScalingGroup:930d940e-891e-4781-a11a-7b0acd480f03:autoScalingGroupName/ComprehensiveTestGroup",
    LaunchConfigurationName: "ComprehensiveTestLC",
    MinSize: 1,
    MaxSize: 20,
    DesiredCapacity: 20,
    DefaultCooldown: 300,
    AvailabilityZones: ["us-west-2a", "us-west-2b", "us-west-2c"],
    HealthCheckType: "EC2",
    CreatedTime: new Date("2023-01-01T00:00:00Z"),
    Instances: [
      {
        InstanceId: "i-00000000000000001",
        AvailabilityZone: "us-west-2a",
        LifecycleState: "Pending",
        HealthStatus: "Healthy",
        LaunchConfigurationName: "ComprehensiveTestLC",
        ProtectedFromScaleIn: false,
      },
      {
        InstanceId: "i-00000000000000002",
        AvailabilityZone: "us-west-2b",
        LifecycleState: "InService",
        HealthStatus: "Healthy",
        LaunchConfigurationName: "ComprehensiveTestLC",
        ProtectedFromScaleIn: false,
      },
      {
        InstanceId: "i-00000000000000003",
        AvailabilityZone: "us-west-2c",
        LifecycleState: "Terminating",
        HealthStatus: "Unhealthy",
        LaunchConfigurationName: "ComprehensiveTestLC",
        ProtectedFromScaleIn: false,
      },
      {
        InstanceId: "i-00000000000000004",
        AvailabilityZone: "us-west-2a",
        LifecycleState: "Terminating:Wait",
        HealthStatus: "Unhealthy",
        LaunchConfigurationName: "ComprehensiveTestLC",
        ProtectedFromScaleIn: false,
      },
      {
        InstanceId: "i-00000000000000005",
        AvailabilityZone: "us-west-2b",
        LifecycleState: "Terminating:Proceed",
        HealthStatus: "Unhealthy",
        LaunchConfigurationName: "ComprehensiveTestLC",
        ProtectedFromScaleIn: false,
      },
      {
        InstanceId: "i-00000000000000006",
        AvailabilityZone: "us-west-2c",
        LifecycleState: "Terminated",
        HealthStatus: "Unhealthy",
        LaunchConfigurationName: "ComprehensiveTestLC",
        ProtectedFromScaleIn: false,
      },
      {
        InstanceId: "i-00000000000000007",
        AvailabilityZone: "us-west-2a",
        LifecycleState: "Detaching",
        HealthStatus: "Healthy",
        LaunchConfigurationName: "ComprehensiveTestLC",
        ProtectedFromScaleIn: false,
      },
      {
        InstanceId: "i-00000000000000008",
        AvailabilityZone: "us-west-2b",
        LifecycleState: "Detached",
        HealthStatus: "Healthy",
        LaunchConfigurationName: "ComprehensiveTestLC",
        ProtectedFromScaleIn: false,
      },
      {
        InstanceId: "i-00000000000000009",
        AvailabilityZone: "us-west-2c",
        LifecycleState: "EnteringStandby",
        HealthStatus: "Healthy",
        LaunchConfigurationName: "ComprehensiveTestLC",
        ProtectedFromScaleIn: true,
      },
      {
        InstanceId: "i-00000000000000010",
        AvailabilityZone: "us-west-2a",
        LifecycleState: "Standby",
        HealthStatus: "Healthy",
        LaunchConfigurationName: "ComprehensiveTestLC",
        ProtectedFromScaleIn: true,
      },
      {
        InstanceId: "i-00000000000000011",
        AvailabilityZone: "us-west-2b",
        LifecycleState: "Pending:Wait",
        HealthStatus: "Initializing",
        LaunchConfigurationName: "ComprehensiveTestLC",
        ProtectedFromScaleIn: false,
      },
      {
        InstanceId: "i-00000000000000012",
        AvailabilityZone: "us-west-2c",
        LifecycleState: "Pending:Proceed",
        HealthStatus: "Initializing",
        LaunchConfigurationName: "ComprehensiveTestLC",
        ProtectedFromScaleIn: false,
      },
      {
        InstanceId: "i-00000000000000013",
        AvailabilityZone: "us-west-2a",
        LifecycleState: "Quarantined",
        HealthStatus: "Impaired",
        LaunchConfigurationName: "ComprehensiveTestLC",
        ProtectedFromScaleIn: false,
      },
      {
        InstanceId: "i-00000000000000014",
        AvailabilityZone: "us-west-2b",
        LifecycleState: "InService",
        HealthStatus: "Impaired",
        LaunchConfigurationName: "ComprehensiveTestLC",
        ProtectedFromScaleIn: false,
      },
      {
        InstanceId: "i-00000000000000015",
        AvailabilityZone: "us-west-2c",
        LifecycleState: "Terminating",
        HealthStatus: "Impaired",
        LaunchConfigurationName: "ComprehensiveTestLC",
        ProtectedFromScaleIn: false,
      },
      {
        InstanceId: "i-00000000000000016",
        AvailabilityZone: "us-west-2a",
        LifecycleState: "InService",
        HealthStatus: "Unhealthy",
        LaunchConfigurationName: "ComprehensiveTestLC",
        ProtectedFromScaleIn: false,
      },
      {
        InstanceId: "i-00000000000000017",
        AvailabilityZone: "us-west-2b",
        LifecycleState: "Pending",
        HealthStatus: "Initializing",
        LaunchConfigurationName: "ComprehensiveTestLC",
        ProtectedFromScaleIn: false,
      },
      {
        InstanceId: "i-00000000000000018",
        AvailabilityZone: "us-west-2c",
        LifecycleState: "Terminating",
        HealthStatus: "Initializing",
        LaunchConfigurationName: "ComprehensiveTestLC",
        ProtectedFromScaleIn: false,
      },
      {
        InstanceId: "i-00000000000000019",
        AvailabilityZone: "us-west-2a",
        LifecycleState: "InService",
        HealthStatus: "Unknown",
        LaunchConfigurationName: "ComprehensiveTestLC",
        ProtectedFromScaleIn: false,
      },
      {
        InstanceId: "i-00000000000000020",
        AvailabilityZone: "us-west-2b",
        LifecycleState: "Pending",
        HealthStatus: "Unknown",
        LaunchConfigurationName: "ComprehensiveTestLC",
        ProtectedFromScaleIn: false,
      },
    ],
    TargetGroupARNs: [
      "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/ComprehensiveTestTG/1234567890123456",
    ],
    HealthCheckGracePeriod: 300,
    VPCZoneIdentifier: "subnet-12345678,subnet-23456789,subnet-34567890",
    Status: "Active",
  },
  {
    AutoScalingGroupName: "ComprehensiveTestGroup2",
    AutoScalingGroupARN:
      "arn:aws:autoscaling:us-west-2:123456789012:autoScalingGroup:930d940e-891e-4781-a11a-7b0acd480f03:autoScalingGroupName/ComprehensiveTestGroup",
    LaunchConfigurationName: "ComprehensiveTestLC",
    MinSize: 1,
    MaxSize: 20,
    DesiredCapacity: 20,
    DefaultCooldown: 300,
    AvailabilityZones: ["us-west-2a", "us-west-2b", "us-west-2c"],
    HealthCheckType: "EC2",
    CreatedTime: new Date("2023-01-01T00:00:00Z"),
    Instances: [
      {
        InstanceId: "i-00000000000000001",
        AvailabilityZone: "us-west-2a",
        LifecycleState: "Pending",
        HealthStatus: "Healthy",
        LaunchConfigurationName: "ComprehensiveTestLC",
        ProtectedFromScaleIn: false,
      },
      {
        InstanceId: "i-00000000000000002",
        AvailabilityZone: "us-west-2b",
        LifecycleState: "InService",
        HealthStatus: "Healthy",
        LaunchConfigurationName: "ComprehensiveTestLC",
        ProtectedFromScaleIn: false,
      },
      {
        InstanceId: "i-00000000000000003",
        AvailabilityZone: "us-west-2c",
        LifecycleState: "Terminating",
        HealthStatus: "Unhealthy",
        LaunchConfigurationName: "ComprehensiveTestLC",
        ProtectedFromScaleIn: false,
      },
      {
        InstanceId: "i-00000000000000004",
        AvailabilityZone: "us-west-2a",
        LifecycleState: "Terminating:Wait",
        HealthStatus: "Unhealthy",
        LaunchConfigurationName: "ComprehensiveTestLC",
        ProtectedFromScaleIn: false,
      },
      {
        InstanceId: "i-00000000000000005",
        AvailabilityZone: "us-west-2b",
        LifecycleState: "Terminating:Proceed",
        HealthStatus: "Unhealthy",
        LaunchConfigurationName: "ComprehensiveTestLC",
        ProtectedFromScaleIn: false,
      },
      {
        InstanceId: "i-00000000000000006",
        AvailabilityZone: "us-west-2c",
        LifecycleState: "Terminated",
        HealthStatus: "Unhealthy",
        LaunchConfigurationName: "ComprehensiveTestLC",
        ProtectedFromScaleIn: false,
      },
      {
        InstanceId: "i-00000000000000007",
        AvailabilityZone: "us-west-2a",
        LifecycleState: "Detaching",
        HealthStatus: "Healthy",
        LaunchConfigurationName: "ComprehensiveTestLC",
        ProtectedFromScaleIn: false,
      },
      {
        InstanceId: "i-00000000000000008",
        AvailabilityZone: "us-west-2b",
        LifecycleState: "Detached",
        HealthStatus: "Healthy",
        LaunchConfigurationName: "ComprehensiveTestLC",
        ProtectedFromScaleIn: false,
      },
      {
        InstanceId: "i-00000000000000009",
        AvailabilityZone: "us-west-2c",
        LifecycleState: "EnteringStandby",
        HealthStatus: "Healthy",
        LaunchConfigurationName: "ComprehensiveTestLC",
        ProtectedFromScaleIn: true,
      },
      {
        InstanceId: "i-00000000000000010",
        AvailabilityZone: "us-west-2a",
        LifecycleState: "Standby",
        HealthStatus: "Healthy",
        LaunchConfigurationName: "ComprehensiveTestLC",
        ProtectedFromScaleIn: true,
      },
      {
        InstanceId: "i-00000000000000011",
        AvailabilityZone: "us-west-2b",
        LifecycleState: "Pending:Wait",
        HealthStatus: "Initializing",
        LaunchConfigurationName: "ComprehensiveTestLC",
        ProtectedFromScaleIn: false,
      },
      {
        InstanceId: "i-00000000000000012",
        AvailabilityZone: "us-west-2c",
        LifecycleState: "Pending:Proceed",
        HealthStatus: "Initializing",
        LaunchConfigurationName: "ComprehensiveTestLC",
        ProtectedFromScaleIn: false,
      },
      {
        InstanceId: "i-00000000000000013",
        AvailabilityZone: "us-west-2a",
        LifecycleState: "Quarantined",
        HealthStatus: "Impaired",
        LaunchConfigurationName: "ComprehensiveTestLC",
        ProtectedFromScaleIn: false,
      },
      {
        InstanceId: "i-00000000000000014",
        AvailabilityZone: "us-west-2b",
        LifecycleState: "InService",
        HealthStatus: "Impaired",
        LaunchConfigurationName: "ComprehensiveTestLC",
        ProtectedFromScaleIn: false,
      },
      {
        InstanceId: "i-00000000000000015",
        AvailabilityZone: "us-west-2c",
        LifecycleState: "Terminating",
        HealthStatus: "Impaired",
        LaunchConfigurationName: "ComprehensiveTestLC",
        ProtectedFromScaleIn: false,
      },
      {
        InstanceId: "i-00000000000000016",
        AvailabilityZone: "us-west-2a",
        LifecycleState: "InService",
        HealthStatus: "Unhealthy",
        LaunchConfigurationName: "ComprehensiveTestLC",
        ProtectedFromScaleIn: false,
      },
      {
        InstanceId: "i-00000000000000017",
        AvailabilityZone: "us-west-2b",
        LifecycleState: "Pending",
        HealthStatus: "Initializing",
        LaunchConfigurationName: "ComprehensiveTestLC",
        ProtectedFromScaleIn: false,
      },
      {
        InstanceId: "i-00000000000000018",
        AvailabilityZone: "us-west-2c",
        LifecycleState: "Terminating",
        HealthStatus: "Initializing",
        LaunchConfigurationName: "ComprehensiveTestLC",
        ProtectedFromScaleIn: false,
      },
      {
        InstanceId: "i-00000000000000019",
        AvailabilityZone: "us-west-2a",
        LifecycleState: "InService",
        HealthStatus: "Unknown",
        LaunchConfigurationName: "ComprehensiveTestLC",
        ProtectedFromScaleIn: false,
      },
      {
        InstanceId: "i-00000000000000020",
        AvailabilityZone: "us-west-2b",
        LifecycleState: "Pending",
        HealthStatus: "Unknown",
        LaunchConfigurationName: "ComprehensiveTestLC",
        ProtectedFromScaleIn: false,
      },
    ],
    TargetGroupARNs: [
      "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/ComprehensiveTestTG/1234567890123456",
    ],
    HealthCheckGracePeriod: 300,
    VPCZoneIdentifier: "subnet-12345678,subnet-23456789,subnet-34567890",
    Status: "Active",
  },
]

export const mockEC2Instances: Instance[] = [
  {
    InstanceId: "i-00000000000000001",
    ImageId: "ami-1234567890abcdef0",
    InstanceType: "t3.micro",
    State: { Name: "pending", Code: 0 },
    PrivateDnsName: "ip-172-31-16-1.us-west-2.compute.internal",
    PublicDnsName: "",
    StateTransitionReason: "User initiated (2023-06-15 12:00:00 GMT)",
    KeyName: "my-key-pair",
    AmiLaunchIndex: 0,
    ProductCodes: [],
    InstanceLifecycle: "scheduled",
    LaunchTime: new Date("2023-06-15T12:00:00Z"),
    Placement: {
      AvailabilityZone: "us-west-2a",
      GroupName: "",
      Tenancy: "default",
    },
    CpuOptions: { CoreCount: 1, ThreadsPerCore: 2 },
    CapacityReservationSpecification: { CapacityReservationPreference: "open" },
    HibernationOptions: { Configured: false },
    MetadataOptions: {
      State: "pending",
      HttpTokens: "optional",
      HttpPutResponseHopLimit: 1,
      HttpEndpoint: "enabled",
    },
    PrivateIpAddress: "172.31.16.1",
    Architecture: "x86_64",
    RootDeviceType: "ebs",
    RootDeviceName: "/dev/xvda",
    VirtualizationType: "hvm",
    Tags: [{ Key: "Name", Value: "PendingInstance" }],
  },
  {
    InstanceId: "i-00000000000000002",
    ImageId: "ami-1234567890abcdef0",
    InstanceType: "t3.micro",
    State: { Name: "running", Code: 16 },
    PrivateDnsName: "ip-172-31-16-2.us-west-2.compute.internal",
    PublicDnsName: "ec2-54-191-198-117.us-west-2.compute.amazonaws.com",
    StateTransitionReason: "",
    KeyName: "my-key-pair",
    AmiLaunchIndex: 0,
    ProductCodes: [],
    InstanceLifecycle: "scheduled",
    LaunchTime: new Date("2023-06-01T00:00:00Z"),
    Placement: {
      AvailabilityZone: "us-west-2b",
      GroupName: "",
      Tenancy: "default",
    },
    CpuOptions: { CoreCount: 1, ThreadsPerCore: 2 },
    CapacityReservationSpecification: { CapacityReservationPreference: "open" },
    HibernationOptions: { Configured: false },
    MetadataOptions: {
      State: "applied",
      HttpTokens: "optional",
      HttpPutResponseHopLimit: 1,
      HttpEndpoint: "enabled",
    },
    PrivateIpAddress: "172.31.16.2",
    PublicIpAddress: "54.191.198.117",
    Architecture: "x86_64",
    RootDeviceType: "ebs",
    RootDeviceName: "/dev/xvda",
    VirtualizationType: "hvm",
    Tags: [{ Key: "Name", Value: "RunningInstance" }],
  },
  {
    InstanceId: "i-00000000000000003",
    ImageId: "ami-1234567890abcdef0",
    InstanceType: "t3.micro",
    State: { Name: "shutting-down", Code: 32 },
    PrivateDnsName: "ip-172-31-16-3.us-west-2.compute.internal",
    PublicDnsName: "ec2-54-191-198-118.us-west-2.compute.amazonaws.com",
    StateTransitionReason: "User initiated (2023-06-15 14:00:00 GMT)",
    KeyName: "my-key-pair",
    AmiLaunchIndex: 0,
    ProductCodes: [],
    InstanceLifecycle: "scheduled",
    LaunchTime: new Date("2023-06-01T00:00:00Z"),
    Placement: {
      AvailabilityZone: "us-west-2c",
      GroupName: "",
      Tenancy: "default",
    },
    CpuOptions: { CoreCount: 1, ThreadsPerCore: 2 },
    CapacityReservationSpecification: { CapacityReservationPreference: "open" },
    HibernationOptions: { Configured: false },
    MetadataOptions: {
      State: "applied",
      HttpTokens: "optional",
      HttpPutResponseHopLimit: 1,
      HttpEndpoint: "enabled",
    },
    PrivateIpAddress: "172.31.16.3",
    PublicIpAddress: "54.191.198.118",
    Architecture: "x86_64",
    RootDeviceType: "ebs",
    RootDeviceName: "/dev/xvda",
    VirtualizationType: "hvm",
    Tags: [{ Key: "Name", Value: "ShuttingDownInstance" }],
  },
  {
    InstanceId: "i-00000000000000004",
    ImageId: "ami-1234567890abcdef0",
    InstanceType: "t3.micro",
    State: { Name: "terminated", Code: 48 },
    PrivateDnsName: "",
    PublicDnsName: "",
    StateTransitionReason: "User initiated (2023-06-15 15:00:00 GMT)",
    KeyName: "my-key-pair",
    AmiLaunchIndex: 0,
    ProductCodes: [],
    InstanceLifecycle: "capacity-block",
    LaunchTime: new Date("2023-06-01T00:00:00Z"),
    Placement: {
      AvailabilityZone: "us-west-2a",
      GroupName: "",
      Tenancy: "default",
    },
    Architecture: "x86_64",
    Tags: [{ Key: "Name", Value: "TerminatedInstance" }],
  },
  {
    InstanceId: "i-00000000000000005",
    ImageId: "ami-1234567890abcdef0",
    InstanceType: "t3.micro",
    State: { Name: "stopping", Code: 64 },
    PrivateDnsName: "ip-172-31-16-5.us-west-2.compute.internal",
    PublicDnsName: "ec2-54-191-198-120.us-west-2.compute.amazonaws.com",
    StateTransitionReason: "User initiated (2023-06-15 16:00:00 GMT)",
    KeyName: "my-key-pair",
    AmiLaunchIndex: 0,
    ProductCodes: [],
    InstanceLifecycle: "spot",
    LaunchTime: new Date("2023-06-01T00:00:00Z"),
    Placement: {
      AvailabilityZone: "us-west-2b",
      GroupName: "",
      Tenancy: "default",
    },
    CpuOptions: { CoreCount: 1, ThreadsPerCore: 2 },
    CapacityReservationSpecification: { CapacityReservationPreference: "open" },
    HibernationOptions: { Configured: false },
    MetadataOptions: {
      State: "applied",
      HttpTokens: "optional",
      HttpPutResponseHopLimit: 1,
      HttpEndpoint: "enabled",
    },
    PrivateIpAddress: "172.31.16.5",
    PublicIpAddress: "54.191.198.120",
    Architecture: "x86_64",
    RootDeviceType: "ebs",
    RootDeviceName: "/dev/xvda",
    VirtualizationType: "hvm",
    Tags: [{ Key: "Name", Value: "StoppingInstance" }],
  },
  {
    InstanceId: "i-00000000000000006",
    ImageId: "ami-1234567890abcdef0",
    InstanceType: "t3.micro",
    State: { Name: "stopped", Code: 80 },
    PrivateDnsName: "ip-172-31-16-6.us-west-2.compute.internal",
    PublicDnsName: "",
    StateTransitionReason: "User initiated (2023-06-15 17:00:00 GMT)",
    KeyName: "my-key-pair",
    AmiLaunchIndex: 0,
    ProductCodes: [],
    InstanceLifecycle: "scheduled",
    LaunchTime: new Date("2023-06-01T00:00:00Z"),
    Placement: {
      AvailabilityZone: "us-west-2c",
      GroupName: "",
      Tenancy: "default",
    },
    CpuOptions: { CoreCount: 1, ThreadsPerCore: 2 },
    CapacityReservationSpecification: { CapacityReservationPreference: "open" },
    HibernationOptions: { Configured: false },
    MetadataOptions: {
      State: "applied",
      HttpTokens: "optional",
      HttpPutResponseHopLimit: 1,
      HttpEndpoint: "enabled",
    },
    PrivateIpAddress: "172.31.16.6",
    Architecture: "x86_64",
    RootDeviceType: "ebs",
    RootDeviceName: "/dev/xvda",
    VirtualizationType: "hvm",
    Tags: [{ Key: "Name", Value: "StoppedInstance" }],
  },
]
