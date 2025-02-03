import type { AutoScalingGroup } from "@aws-sdk/client-auto-scaling"
import type { Instance } from "@aws-sdk/client-ec2"

export const mockAutoScalingGroups: AutoScalingGroup[] = [
  {
    AutoScalingGroupName: "WebServerGroup",
    AutoScalingGroupARN:
      "arn:aws:autoscaling:us-west-2:123456789012:autoScalingGroup:930d940e-891e-4781-a11a-7b0acd480f03:autoScalingGroupName/WebServerGroup",
    LaunchConfigurationName: "WebServerLC",
    MinSize: 1,
    MaxSize: 5,
    DesiredCapacity: 3,
    DefaultCooldown: 300,
    AvailabilityZones: ["us-west-2a", "us-west-2b"],
    HealthCheckType: "EC2",
    CreatedTime: new Date("2023-01-01T00:00:00Z"),
    Instances: [
      {
        InstanceId: "i-1234567890abcdef0",
        AvailabilityZone: "us-west-2a",
        LifecycleState: "InService",
        HealthStatus: "Healthy",
        LaunchConfigurationName: "WebServerLC",
        ProtectedFromScaleIn: false,
      },
      {
        InstanceId: "i-234567890abcdef01",
        AvailabilityZone: "us-west-2b",
        LifecycleState: "Pending",
        HealthStatus: "Initializing",
        LaunchConfigurationName: "WebServerLC",
        ProtectedFromScaleIn: false,
      },
      {
        InstanceId: "i-345678901abcdef02",
        AvailabilityZone: "us-west-2a",
        LifecycleState: "InService",
        HealthStatus: "Unhealthy",
        LaunchConfigurationName: "WebServerLC",
        ProtectedFromScaleIn: false,
      },
    ],
    TargetGroupARNs: [
      "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/WebServerTG/1234567890123456",
    ],
    HealthCheckGracePeriod: 300,
    VPCZoneIdentifier: "subnet-12345678,subnet-23456789",
    Status: "Active",
  },
  {
    AutoScalingGroupName: "DatabaseGroup",
    AutoScalingGroupARN:
      "arn:aws:autoscaling:us-west-2:123456789012:autoScalingGroup:930d940e-891e-4781-a11a-7b0acd480f04:autoScalingGroupName/DatabaseGroup",
    LaunchTemplate: {
      LaunchTemplateId: "lt-1234567890abcdef0",
      Version: "1",
    },
    MinSize: 2,
    MaxSize: 6,
    DesiredCapacity: 4,
    DefaultCooldown: 400,
    AvailabilityZones: ["us-west-2a", "us-west-2b", "us-west-2c"],
    HealthCheckType: "ELB",
    CreatedTime: new Date("2023-02-15T00:00:00Z"),
    Instances: [
      {
        InstanceId: "i-456789012abcdef03",
        AvailabilityZone: "us-west-2a",
        LifecycleState: "InService",
        HealthStatus: "Healthy",
        LaunchTemplate: {
          LaunchTemplateId: "lt-1234567890abcdef0",
          Version: "1",
        },
        ProtectedFromScaleIn: true,
      },
      {
        InstanceId: "i-567890123abcdef04",
        AvailabilityZone: "us-west-2b",
        LifecycleState: "Terminating",
        HealthStatus: "Unhealthy",
        LaunchTemplate: {
          LaunchTemplateId: "lt-1234567890abcdef0",
          Version: "1",
        },
        ProtectedFromScaleIn: false,
      },
      {
        InstanceId: "i-678901234abcdef05",
        AvailabilityZone: "us-west-2c",
        LifecycleState: "InService",
        HealthStatus: "Healthy",
        LaunchTemplate: {
          LaunchTemplateId: "lt-1234567890abcdef0",
          Version: "1",
        },
        ProtectedFromScaleIn: true,
      },
      {
        InstanceId: "i-789012345abcdef06",
        AvailabilityZone: "us-west-2a",
        LifecycleState: "Pending:Wait",
        HealthStatus: "Initializing",
        LaunchTemplate: {
          LaunchTemplateId: "lt-1234567890abcdef0",
          Version: "1",
        },
        ProtectedFromScaleIn: false,
      },
    ],
    HealthCheckGracePeriod: 600,
    VPCZoneIdentifier: "subnet-34567890,subnet-45678901,subnet-56789012",
    Status: "Updating",
  },
  {
    AutoScalingGroupName: "WorkerGroup",
    AutoScalingGroupARN:
      "arn:aws:autoscaling:us-west-2:123456789012:autoScalingGroup:930d940e-891e-4781-a11a-7b0acd480f05:autoScalingGroupName/WorkerGroup",
    MixedInstancesPolicy: {
      LaunchTemplate: {
        LaunchTemplateSpecification: {
          LaunchTemplateId: "lt-2345678901abcdef1",
          Version: "2",
        },
        Overrides: [
          { InstanceType: "c5.large" },
          { InstanceType: "c5a.large" },
          { InstanceType: "c6i.large" },
        ],
      },
      InstancesDistribution: {
        OnDemandPercentageAboveBaseCapacity: 50,
        SpotAllocationStrategy: "capacity-optimized",
      },
    },
    MinSize: 3,
    MaxSize: 10,
    DesiredCapacity: 5,
    DefaultCooldown: 200,
    AvailabilityZones: ["us-west-2a", "us-west-2b", "us-west-2c"],
    HealthCheckType: "EC2",
    CreatedTime: new Date("2023-03-30T00:00:00Z"),
    Instances: [
      {
        InstanceId: "i-890123456abcdef07",
        AvailabilityZone: "us-west-2a",
        LifecycleState: "InService",
        HealthStatus: "Healthy",
        ProtectedFromScaleIn: false,
      },
      {
        InstanceId: "i-901234567abcdef08",
        AvailabilityZone: "us-west-2b",
        LifecycleState: "Terminating:Wait",
        HealthStatus: "Unhealthy",
        ProtectedFromScaleIn: false,
      },
      {
        InstanceId: "i-012345678abcdef09",
        AvailabilityZone: "us-west-2c",
        LifecycleState: "Warmed:Pending",
        HealthStatus: "Healthy",
        ProtectedFromScaleIn: false,
      },
      {
        InstanceId: "i-123456789abcdef10",
        AvailabilityZone: "us-west-2a",
        LifecycleState: "Standby",
        HealthStatus: "Healthy",
        ProtectedFromScaleIn: true,
      },
      {
        InstanceId: "i-234567890abcdef11",
        AvailabilityZone: "us-west-2b",
        LifecycleState: "Detaching",
        HealthStatus: "Impaired",
        ProtectedFromScaleIn: false,
      },
    ],
    HealthCheckGracePeriod: 180,
    VPCZoneIdentifier: "subnet-67890123,subnet-78901234,subnet-89012345",
    Status: "DeleteInProgress",
  },
]

export const mockEC2Instances: Instance[] = [
  {
    InstanceId: "i-1234567890abcdef0",
    ImageId: "ami-1234567890abcdef0",
    InstanceType: "t3.micro",
    State: { Name: "running", Code: 16 },
    PrivateDnsName: "ip-172-31-16-1.us-west-2.compute.internal",
    PublicDnsName: "ec2-54-191-198-117.us-west-2.compute.amazonaws.com",
    StateTransitionReason: "",
    KeyName: "my-key-pair",
    AmiLaunchIndex: 0,
    ProductCodes: [],
    InstanceLifecycle: "scheduled",
    LaunchTime: new Date("2023-06-01T00:00:00Z"),
    Placement: {
      AvailabilityZone: "us-west-2a",
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
    PrivateIpAddress: "172.31.16.1",
    PublicIpAddress: "54.191.198.117",
    Architecture: "x86_64",
    RootDeviceType: "ebs",
    RootDeviceName: "/dev/xvda",
    VirtualizationType: "hvm",
    Tags: [{ Key: "Name", Value: "WebServer1" }],
  },
  {
    InstanceId: "i-234567890abcdef01",
    ImageId: "ami-1234567890abcdef0",
    InstanceType: "t3.micro",
    State: { Name: "pending", Code: 0 },
    PrivateDnsName: "ip-172-31-16-2.us-west-2.compute.internal",
    PublicDnsName: "",
    StateTransitionReason: "User initiated (2023-06-15 12:00:00 GMT)",
    KeyName: "my-key-pair",
    AmiLaunchIndex: 0,
    ProductCodes: [],
    InstanceLifecycle: "scheduled",
    LaunchTime: new Date("2023-06-15T12:00:00Z"),
    Placement: {
      AvailabilityZone: "us-west-2b",
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
    PrivateIpAddress: "172.31.16.2",
    Architecture: "x86_64",
    RootDeviceType: "ebs",
    RootDeviceName: "/dev/xvda",
    VirtualizationType: "hvm",
    Tags: [{ Key: "Name", Value: "WebServer2" }],
  },
  {
    InstanceId: "i-345678901abcdef02",
    ImageId: "ami-1234567890abcdef0",
    InstanceType: "t3.micro",
    State: { Name: "running", Code: 16 },
    PrivateDnsName: "ip-172-31-16-3.us-west-2.compute.internal",
    PublicDnsName: "ec2-54-191-198-118.us-west-2.compute.amazonaws.com",
    StateTransitionReason: "",
    KeyName: "my-key-pair",
    AmiLaunchIndex: 0,
    ProductCodes: [],
    InstanceLifecycle: "scheduled",
    LaunchTime: new Date("2023-06-01T00:00:00Z"),
    Placement: {
      AvailabilityZone: "us-west-2a",
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
    Tags: [{ Key: "Name", Value: "WebServer3" }],
  },
  {
    InstanceId: "i-456789012abcdef03",
    ImageId: "ami-2345678901abcdef1",
    InstanceType: "t3.medium",
    State: { Name: "running", Code: 16 },
    PrivateDnsName: "ip-172-31-32-1.us-west-2.compute.internal",
    PublicDnsName: "ec2-54-191-198-119.us-west-2.compute.amazonaws.com",
    StateTransitionReason: "",
    KeyName: "my-key-pair",
    AmiLaunchIndex: 0,
    ProductCodes: [],
    InstanceLifecycle: "scheduled",
    LaunchTime: new Date("2023-06-01T00:00:00Z"),
    Placement: {
      AvailabilityZone: "us-west-2a",
      GroupName: "",
      Tenancy: "default",
    },
    CpuOptions: { CoreCount: 2, ThreadsPerCore: 2 },
    CapacityReservationSpecification: { CapacityReservationPreference: "open" },
    HibernationOptions: { Configured: false },
    MetadataOptions: {
      State: "applied",
      HttpTokens: "optional",
      HttpPutResponseHopLimit: 1,
      HttpEndpoint: "enabled",
    },
    PrivateIpAddress: "172.31.32.1",
    PublicIpAddress: "54.191.198.119",
    Architecture: "x86_64",
    RootDeviceType: "ebs",
    RootDeviceName: "/dev/xvda",
    VirtualizationType: "hvm",
    Tags: [{ Key: "Name", Value: "DatabaseServer1" }],
  },
  {
    InstanceId: "i-567890123abcdef04",
    ImageId: "ami-2345678901abcdef1",
    InstanceType: "t3.medium",
    State: { Name: "shutting-down", Code: 32 },
    PrivateDnsName: "ip-172-31-32-2.us-west-2.compute.internal",
    PublicDnsName: "",
    StateTransitionReason: "User initiated (2023-06-15 13:00:00 GMT)",
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
    CpuOptions: { CoreCount: 2, ThreadsPerCore: 2 },
    CapacityReservationSpecification: { CapacityReservationPreference: "open" },
    HibernationOptions: { Configured: false },
    MetadataOptions: {
      State: "applied",
      HttpTokens: "optional",
      HttpPutResponseHopLimit: 1,
      HttpEndpoint: "enabled",
    },
    PrivateIpAddress: "172.31.32.2",
    Architecture: "x86_64",
    RootDeviceType: "ebs",
    RootDeviceName: "/dev/xvda",
    VirtualizationType: "hvm",
    Tags: [{ Key: "Name", Value: "DatabaseServer2" }],
  },
]
