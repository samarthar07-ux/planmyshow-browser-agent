# Product scope

## Problem
Moviegoers and groups often repeat manual booking-page checks and must decide whether to book now, wait, or switch to another show. They need an explainable helper that considers the information currently visible on the booking page.

## Proposed solution
A browser extension observes the current supported booking page, produces an explainable BUY NOW / WAIT / SWITCH SHOW recommendation, helps select a show and seats, and hands control back to the user before payment.

## 24-hour MVP
1. Chrome extension side panel.
2. Local mock booking website.
3. Page observation of show, price, demand scenario and seat availability.
4. Rule-based recommendation with reasons.
5. Simulated-data labels on every demo screen.
6. Demonstration ends before payment.

## Non-goals for the first MVP
- Real ticket purchases or payments.
- Access to private booking APIs.
- Unauthorised scraping of third-party sites.
- Guaranteed future-price prediction.
- Claims of live seat availability from cinema platforms.
