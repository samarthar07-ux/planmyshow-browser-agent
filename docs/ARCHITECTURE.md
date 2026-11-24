# Architecture

## Current local prototype

```text
Mock booking page
      |
      v
Chrome content script ---- reads explicitly labelled demo page data
      |
      v
Chrome side panel -------- displays sample show, price, seats and verdict
      |
      v
Rule-based decision logic - BUY NOW / WAIT / SWITCH SHOW + reasons
```

## Planned competition architecture (not implemented in this starter)

```text
Chrome Extension (Manifest V3)
  |-- Content script: observe supported page elements
  |-- Side panel: request, verdict, reasons, voice controls
  |-- Service worker: extension lifecycle and message routing
  |
  v
API Gateway + Cognito
  |
  v
AWS Lambda recommendation service
  |-- deterministic, explainable scoring
  |-- Amazon Bedrock for planning/explanation, if needed
  |
  +--> DynamoDB: user-approved observations and watchlists
  +--> EventBridge Scheduler: re-check reminders
  +--> SNS: notifications

ElevenLabs: optional speech-to-text input and spoken verdict output.
Amazon Bedrock AgentCore Browser: optional safe test harness on the mock site.
```

## Trust boundaries

- The current extension matches only the local mock website.
- Do not collect payment information.
- Do not send personal page content to a cloud service without clear user consent.
- Clearly label all simulated values.
- Follow the terms and permission requirements of any third-party site before supporting it.
