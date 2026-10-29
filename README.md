# Line Guru AI — Cricket Statistics Prediction

The interface and built-in team/captain data are English-only. The existing prediction formula remains unchanged by this API workflow.

## Automated cricket-data refresh

GitHub Actions workflow: `.github/workflows/cricket-data-refresh.yml`

- Runs four times per UTC day (every six hours, at minute 23) and can also be started manually.
- Each run makes at most one Big Balls request, two OpenCricket requests, and one CricketData.org request.
- A local guard skips runs that occur less than 5 hours 45 minutes after the last feed write. Failed API calls are not retried.
- Feed output is written to `data/cricket-feed.json`; API keys are never included in that file.
- Pitch reports are not fabricated when no verified report is supplied.

### Add API keys as repository Actions secrets

Open repository **Settings → Secrets and variables → Actions → New repository secret** and add these exact names:

- `BIGBALLSDATA_API_KEY`
- `OPENCRICKET_API_KEY`
- `CRICKETDATA_API_KEY`

Paste each provider's key into the GitHub secret value field. Never put keys in `script.js`, HTML, committed JSON, screenshots, or chat messages.

Then open **Actions → Refresh free cricket data → Run workflow**. Check the run logs for provider status. Logs deliberately avoid printing keys and request URLs that might contain keys.

## Quota planning

The scheduled cadence is 4 runs/day, or about 120 runs in a 30-day month. The maximum scheduled request estimate is about 120 Big Balls requests/month, 240 OpenCricket requests/month, and 120 CricketData requests/month. These are below the published free quotas: Big Balls lists 250/day (500/day with GitHub), OpenCricket lists 5,000/month, and CricketData.org lists 100/day. Manual dispatch is also protected by a 5h45m minimum interval. Provider-side limits always take precedence.

## Current limitations

- This workflow creates a public feed but does not yet auto-fill the website's manual form fields.
- Team form and ground averages need reliable completed-match results and venue/innings totals; those derived values are intentionally marked unavailable until response shapes and venue coverage are verified.
- The configured endpoints do not provide a verified match-day pitch report, so the app must not invent one.
- Provider data should only be republished in accordance with each provider's terms and source licence.
- GitHub Pages is static hosting. Do not put API keys in frontend code. The generated feed is public because it is committed to this public repository.
