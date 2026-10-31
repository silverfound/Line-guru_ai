const key = process.env.OPENCRICKET_API_KEY?.trim();

function report(status, message, exitCode = 0) {
  const line = `OpenCricket API key check: ${status} — ${message}`;
  console.log(line);
  if (process.env.GITHUB_STEP_SUMMARY) {
    import("node:fs/promises").then(({ appendFile }) =>
      appendFile(process.env.GITHUB_STEP_SUMMARY, `## OpenCricket API key check\n\n${line}\n`)
    ).catch(() => {});
  }
  process.exitCode = exitCode;
}

if (!key) {
  report("NOT CONFIGURED", "GitHub Secret OPENCRICKET_API_KEY is empty or unavailable.", 1);
} else {
  try {
    // One low-cost Starter-tier request. Never print the key, headers, URL query, or response body.
    const response = await fetch("https://opencricketapi.com/v1/matches?limit=1", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${key}`
      },
      signal: AbortSignal.timeout(15000)
    });

    if (response.status === 200) {
      await response.json();
      report("VALID", "HTTP 200 received from the Starter-tier matches endpoint.");
    } else if (response.status === 401) {
      report("INVALID", "HTTP 401: OpenCricket rejected the API key.", 1);
    } else if (response.status === 403) {
      report("AUTHENTICATED / RESTRICTED", "HTTP 403: request is forbidden by an account or plan restriction; this does not prove the key is invalid.", 1);
    } else if (response.status === 429) {
      report("KEY RECOGNIZED / QUOTA EXHAUSTED", "HTTP 429: monthly or rate quota is exhausted; authentication was accepted.", 1);
    } else if (response.status >= 500) {
      report("INCONCLUSIVE", `OpenCricket returned HTTP ${response.status}; provider-side failure prevents a reliable key check.`, 1);
    } else {
      report("INCONCLUSIVE", `Unexpected HTTP ${response.status}; inspect OpenCricket account status.`, 1);
    }
  } catch (error) {
    const message = error?.name === "TimeoutError" || error?.name === "AbortError"
      ? "Request timed out; key validity could not be determined."
      : "Network or response error; key validity could not be determined.";
    report("INCONCLUSIVE", message, 1);
  }
}
