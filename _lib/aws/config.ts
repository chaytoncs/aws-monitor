import { fromIni } from "@aws-sdk/credential-providers"

// AWS SDK Configuration
export const AWS_CONFIG = {
  region: process.env.AWS_REGION || "us-west-2",
  credentials: fromIni(),
}
