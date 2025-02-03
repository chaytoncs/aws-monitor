# dashboard-tutorial

AWS Monitor is a React-based application for monitoring AWS Auto Scaling Groups (ASGs) and their instances. It provides a user-friendly interface for viewing and managing ASGs, offering detailed information about each group and its associated instances.

## Features

- List and view details of Auto Scaling Groups
- Add and remove Auto Scaling Groups
- View detailed information about instances within each ASG
- Real-time updates of ASG and instance statuses

## Setup for AWS Integration

To integrate this application with actual AWS services, follow these steps:

1. Install NPM Install
2. Setup AWS_REGION in .env and set default region in \_lib/aws/config.ts
3. Remove mocked results and uncomment AWS SDK Code in \_lib/aws/auto-scaling-groups.ts and \_lib/aws/ec2-instances.ts
