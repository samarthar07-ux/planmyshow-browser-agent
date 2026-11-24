# Backend integration plan

The starter runs its simple demonstration recommendation locally in the extension. The following are planned integrations from the competition proposal and are not implemented here:

- Amazon API Gateway: authenticated API entry point.
- AWS Lambda: server-side recommendation endpoint.
- Amazon Bedrock: optional agent planning and explanation.
- DynamoDB: historical observations and watchlists.
- EventBridge Scheduler + SNS: scheduled re-check nudges.
- Amazon Cognito: authentication.
- ElevenLabs: voice input and spoken output.
- Amazon Bedrock AgentCore Browser: testing on the team's mock booking site.

Add one integration at a time. Keep credentials in environment variables or an appropriate secret manager; never commit credentials to GitHub.
