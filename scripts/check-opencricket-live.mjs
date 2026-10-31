const key = process.env.OPENCRICKET_API_KEY?.trim();

async function report(status, message, exitCode = 0) {
  const line = `OpenCricket live endpoint check: ${status} — ${message}`;
  console.log(line);
  const summaryPath = process.env.GITHUB_STEP_SUMMARY;
  if (summaryPath) {
    try {
      const { appendFile } = await import("node:fs/promises");
      await appendFile(summaryPath, `## OpenCricket live endpoint check\n\n${line}\n`);
    } catch {
      // The console result remains available if the summary cannot be written.
    }
  }
  process.exitCode = exitCode;
}

if (!key) {
  await report("NOT CONFIGURED", "GitHub Secret OPENCRICKET_API_KEY is empty or unavailable.", 1);
} else {
  try {
    // Exactly one request to the live endpoint. Never print the key, headers, or response body.
    const response = await fetch("https://opencricketapi.com/v1/live", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${key}`
      },
      signal: AbortSignal.timeout(20000)
    });

    if (response.status === 200) {
      await report("LIVE ENDPOINT OK", "HTTP 200 received from /v1/live.");
    } else if (response.status === 401) {
      await report("AUTHENTICATION REJECTED", "HTTP 401: the live endpoint rejected the supplied API key.", 1);
    } else if (response.status === 403) {
      await report("ENDPOINT RESTRICTED", "HTTP 403: access to /v1/live is forbidden by an account, plan, or provider restriction; this alone does not prove the key is invalid.", 1);
    } else if (response.status === 429) {
      await report("QUOTA OR RATE LIMIT", "HTTP 429: the provider rate or usage limit was reached.", 1);
    } else if (response.status === 502) {
      await report("UPSTREAM PROVIDER FAILURE", "HTTP 502: OpenCricket could not obtain a successful response from its upstream live-data source. This is not evidence that the API key is invalid.", 1);
    } else if (response.status >= 500) {
      await report("PROVIDER FAILURE", `HTTP ${response.status}: a server-side error prevented the live endpoint check.`, 1);
    } else {
      await report("INCONCLUSIVE", `Unexpected HTTP ${response.status}; the live endpoint result needs provider-side investigation.`, 1);
    }
  } catch (error) {
    const timedOut = error?.name === "TimeoutError" || error?.name === "AbortError";
    await report(
      "INCONCLUSIVE",
      timedOut ? "The /v1/live request timed out; endpoint status could not be determined." : "A network or response error prevented the /v1/live check.",
      1
    );
  }
}
