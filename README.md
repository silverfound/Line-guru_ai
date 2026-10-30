# Line Guru AI — Cricket Statistics Prediction

The interface and built-in team/captain data are English-only. The existing prediction formula remains unchanged by this API workflow.

## Automated cricket-data refresh

GitHub Actions workflow: `.github/workflows/cricket-data-refresh.yml`

- Automatic scheduling is intentionally disabled. The workflow runs only when manually started from GitHub Actions.
- Provider request budget in the current code: up to 1 Big Balls request, 0 OpenCricket requests (temporarily paused after HTTP 403), 2 CricketData.org requests (current + scheduled matches), and up to 15 SportScore requests (live/recent, today fixtures, tomorrow fixtures, plus up to 12 live-match detail requests). Failed requests are not retried.
- A local guard skips healthy repeat runs that occur less than 5 hours 45 minutes after the last feed write. If the previous feed contains provider errors or invalid/undated records, one diagnostic refresh is allowed inside that interval.
- Provider errors include the HTTP status and safe error details where available; request URLs and API keys are never logged.
- The feed filters placeholder team names and matches without ISO-formatted dates before publishing, so undated fixtures do not appear as upcoming matches.
- OpenCricket live-score and fixture endpoints are checked independently, so one endpoint can still contribute data if the other fails.
- Feed output is written to `data/cricket-feed.json`; API keys are never included in that file.
- Pitch reports are not fabricated when no verified report is supplied.

### Add API keys as repository Actions secrets

Open repository **Settings → Secrets and variables → Actions → New repository secret** and add these exact names:

- `BIGBALLSDATA_API_KEY`
- `OPENCRICKET_API_KEY`
- `CRICKETDATA_API_KEY`
- `SPORTSCORE_API_KEY`

Paste each provider's key into the GitHub secret value field. Never put keys in `script.js`, HTML, committed JSON, screenshots, or chat messages.

When ready to spend API quota, open **Actions → Refresh free cricket data → Run workflow**. Review the generated pull request for `data/cricket-feed.json` and merge it to publish the feed. The website then reads the public feed. Check run logs for provider status; logs avoid printing keys and request URLs that might contain keys.

## Quota planning

There are no automatic runs while the app is being finalized. Each manual run currently makes at most 1 Big Balls request, 0 OpenCricket requests (temporarily paused), 2 CricketData.org requests (`currentMatches` + `matches`), and 15 SportScore requests maximum (3 base requests plus up to 12 live-match detail requests). A 5h45m minimum interval guard limits healthy repeat runs. Provider-side limits always take precedence.

### SportScore provider

- SportScore is the fourth configured provider and is enabled when `SPORTSCORE_API_KEY` is present in repository Actions secrets.
- It requests live/recent cricket matches, today's fixtures, and tomorrow's fixtures; it may then request details for up to 12 live matches to enrich scores and match state.
- SportScore records are normalized and filtered through the same date, team-name, and supported-format checks before they enter the public feed.

## Current limitations

- The website reads the sanitized public `data/cricket-feed.json` file and displays matches separately from the manual prediction form. The feed is only updated publicly after the generated feed pull request is reviewed and merged.
- Team form and ground averages need reliable completed-match results and venue/innings totals; those derived values are intentionally marked unavailable until response shapes and venue coverage are verified.
- The configured endpoints do not provide a verified match-day pitch report, so the app must not invent one.
- Provider data should only be republished in accordance with each provider's terms and source licence.
- GitHub Pages is static hosting. Do not put API keys in frontend code. The generated feed is public because it is committed to this public repository.
