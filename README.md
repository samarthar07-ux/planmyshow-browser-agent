<<<<<<< HEAD
# PLAN MY SHOW – Beyond the Browser

PlanMyShow is a browser-extension prototype for movie-booking pages. It reads show and seat information from the supplied mock booking site, then displays an explainable **BUY NOW**, **WAIT**, or **SWITCH SHOW** recommendation.

**Prototype scope:** This starter project uses a local mock booking site and illustrative/simulated data. It does not connect to real ticket-booking platforms, process payments, or guarantee future prices.

=======
# Plan my Show – Beyond the Browser

**Plan my Show** is a browser-extension prototype for movie-booking pages. It reads show and seat information from the supplied mock booking site, then displays an explainable **BUY NOW**, **WAIT**, or **SWITCH SHOW** recommendation.
>>>>>>> 2e56977 (Update project branding to PlanMyShow)

> **Prototype scope:** This starter project uses a local mock booking site and illustrative/simulated data. It does not connect to real ticket-booking platforms, process payments, or guarantee future prices.

## Track alignment

**WHACKiest 2026 – Track 2: Beyond the Browser**

Plan my Show demonstrates a browser agent that can observe information on a page, reason about it, and perform a limited action on the user's behalf. The prototype stops before payment; the user remains in control of checkout.

## What works in this starter

- A local mock cinema-booking page with sample shows and seat availability.
- A Chrome Manifest V3 extension with a side panel.
- A content script that reads Plan my Show-labelled data from the active mock page.
- A basic, rule-based BUY NOW / WAIT / SWITCH SHOW recommendation with visible reasons.
- A clearly displayed simulated-data notice.

## Repository structure

```text
 2e56977 (Update project branding to PlanMyShow)
├── extension/             # Chrome extension (Manifest V3)
├── mock-booking-site/     # Local demo website; simulated listings only
├── backend/               # Notes and planned cloud integration
├── docs/                  # Product scope and architecture
├── .gitignore
└── README.md
```

## Run the local demo

### 1. Open the mock booking website

The easiest option is VS Code with the **Live Server** extension:

1. Open this repository folder in VS Code.
2. Right-click `mock-booking-site/index.html`.
3. Select **Open with Live Server**.
4. Keep the page open. Live Server commonly uses `http://127.0.0.1:5500` or `http://localhost:5500`.

If you use a different port, update the `matches` entry in `extension/manifest.json` to match your local URL, then reload the extension.

### 2. Load the Chrome extension

1. Open Chrome and visit `chrome://extensions`.
2. Turn on **Developer mode**.
3. Select **Load unpacked**.
4. Choose this repository's `extension` folder.
5. Pin the Plan my Show extension if desired.
6. Open the mock booking page, then click the Plan my Show extension icon to open its side panel.
7. Click **Analyse this booking page** in the side panel.

### 3. Test the recommendation

The mock page contains sample scenarios. Change the demand and days-to-show controls, adjust the number of seats requested (choose 7 to trigger SWITCH SHOW because only 6 are available), or toggle available seats, then analyse again. All values are simulated and are for demonstration only.

## Important implementation notes

- The extension is intentionally restricted to the local demo URL in its manifest. Do not broaden permissions or run it against third-party booking pages without checking the site's terms and obtaining any required authorisation.
- The recommendation is a transparent demonstration heuristic, not a trained forecasting model and not a claim about actual future ticket prices.
- The starter does not access payment fields or submit payment. Keep the hard stop before payment.
- Do not commit API keys, passwords, access tokens, `.env` files, or personal data.

## Planned integrations (not yet implemented in this starter)

| Service | Intended role | Current status |
|---|---|---|
| AWS API Gateway + Lambda | Host recommendation endpoint | Planned |
| Amazon Bedrock | Explain recommendations / agent reasoning | Planned |
| DynamoDB + EventBridge + SNS | Store observations and schedule re-check nudges | Planned |
| Amazon Cognito | User authentication | Planned |
| ElevenLabs Scribe / voice output | Voice input and spoken recommendations | Planned |
| Amazon Bedrock AgentCore Browser | Safe browser-agent test harness | Planned |

Only mark an integration as implemented in the presentation or demo after your team has actually configured and tested it.

## Team collaboration

- Keep this as the team's **single official repository** for the competition.
- Give each teammate a clearly assigned task.
- Commit small, meaningful changes regularly.
- Push all updates to this same repository through the ideathon presentation period.
- Add the final pitch/video links below when ready.

## Submission links

- Ideathon PPT: `https://docs.google.com/presentation/d/1Ehq3IQNcnqWbqLTJGHOdj4zcBwU23YaR/edit?usp=drivesdk&ouid=110347616832710586360&rtpof=true&sd=true`
- Video pitch: `https://youtu.be/aQjQSvQaF9Q?si=Nprjbo2AUY43Jfxl`
- Team name / ID: `SCORPIAN`
