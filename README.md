# Line Guru AI — Cricket Statistics Prediction

The interface and built-in team/captain data are English-only. The existing prediction formula remains unchanged by this API workflow.

## Cricket data providers

Only two providers are enabled:

- **SportScore** — live/recent cricket matches, today's and tomorrow's fixtures, and up to 12 live-match detail requests per manual refresh.
- **CricketData.org** — current/live matches and scheduled matches, using the `currentMatches` and `matches` endpoints independently so one endpoint can still contribute if the other fails.

Big Balls Data and OpenCricket have been removed from the refresh script and workflow. Their API secrets are no longer read or required.

## Refresh workflow

GitHub Actions workflow: `.github/workflows/cricket-data-refresh.yml`

- Automatic scheduling is intentionally disabled. The workflow runs only when manually started from GitHub Actions.
- Each manual run makes up to 2 CricketData.org requests and up to 15 SportScore requests (3 base requests plus up to 12 live-match detail requests). Failed requests are not retried.
- A local guard skips healthy repeat runs that occur less than 5 hours 45 minutes after the last feed write. If the previous feed contains provider errors or invalid/undated records, one diagnostic refresh is allowed inside that interval.
- Provider errors include the HTTP status and safe error details where available; request URLs and API keys are never logged.
- The feed filters placeholder team names and matches without ISO-formatted dates before publishing, so undated fixtures do not appear as upcoming matches.
- Feed output is written to `data/cricket-feed.json`; API keys are never included in that file.
- Pitch reports are not fabricated when no verified report is supplied.

### Required GitHub Actions secrets

Open repository **Settings → Secrets and variables → Actions → New repository secret** and add:

- `CRICKETDATA_API_KEY`
- `SPORTSCORE_API_KEY`

Never put keys in `script.js`, HTML, committed JSON, screenshots, or chat messages.

When ready to spend API quota, open **Actions → Refresh free cricket data → Run workflow**. Review the generated pull request for `data/cricket-feed.json` and merge it to publish the feed. Check run logs for provider status; logs avoid printing keys and request URLs that might contain keys.

## Historical player performance research database

The model-validation workflow builds `player-performance.json` from the free Cricsheet `all_json.zip` archive. It calculates observed batting/bowling appearances, batting runs/balls/outs/boundaries, bowling balls/runs/wickets, career aggregates and last-five/last-ten match form, split by gender, format and team. Squad lists are not treated as confirmed playing XIs. Coverage depends on Cricsheet's archive and varies by competition and gender. This generated database is a research artifact only; it does not yet feed the production prediction model. Player features must pass leakage-safe, same-holdout validation before any production model change.

## Current limitations

- The website reads the sanitized public `data/cricket-feed.json` file and currently displays matches separately from the manual prediction form. The feed is only updated publicly after the generated feed pull request is reviewed and merged.
- Team form and ground averages need reliable completed-match results and venue/innings totals; those derived values remain unavailable until response shapes and venue coverage are verified.
- The configured endpoints do not currently provide a verified match-day pitch report, so the app must not invent one.
- Provider data should only be republished in accordance with each provider's terms and source licence.
- GitHub Pages is static hosting. Do not put API keys in frontend code. The generated feed is public because it is committed to this public repository.
