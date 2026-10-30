/* Compact, quantized LightGBM models trained on 12,561 historical T20/ODI matches.
   Gzip payloads are decoded locally in the browser; no API key or server is required. */
(function () {
 const payloads = {chase:"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", score:"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", winner:"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"};
 let cache;
 async function decode(b64) {
   const raw = atob(b64);
   const bytes = Uint8Array.from(raw, ch => ch.charCodeAt(0));
   const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream("gzip"));
   return JSON.parse(await new Response(stream).text());
 }
 async function load() {
   if (!cache) cache = Promise.all(Object.entries(payloads).map(async ([k,v]) => [k, await decode(v)])).then(Object.fromEntries);
   return cache;
 }
 function tree(node, row) {
   if (node.length === 1) return node[0];
   return tree(row[node[0]] <= node[1] ? node[2] : node[3], row);
 }
 function raw(model, values) {
   const row = model.features.map(k => Number(values[k] || 0));
   return model.trees.reduce((sum, t) => sum + tree(t,row), 0);
 }
 function sigmoid(x) { return 100 / (1 + Math.exp(-x)); }
 function formatCode(format) { return format === "odi" ? 1 : 0; }
 async function predict(input) {
   const models = await load();
   const code = formatCode(input.format);
   const maxBalls = code ? 300 : 120;
   const balls = Math.max(0, Number(input.ballsUsed) || 0);
   const remaining = Math.max(0, maxBalls - balls);
   const runs = Math.max(0, Number(input.runs) || 0);
   const wickets = Math.max(0, Number(input.wickets) || 0);
   const currentRate = balls ? runs * 6 / balls : 0;
   const score = Math.max(runs, Math.round(raw(models.score, {
     format_code: code, runs, wickets, balls_used: balls, balls_remaining: remaining
   })));
   const winner = sigmoid(raw(models.winner, {
     format_code: code, runs, wickets, balls_used: balls, balls_remaining: remaining
   }));
   let chase = null;
   if (input.target !== undefined && input.target !== null) {
     const target = Number(input.target);
     const needed = Math.max(0, target - runs);
     const requiredRate = remaining ? needed * 6 / remaining : (needed ? 99 : 0);
     chase = needed === 0 ? 100 : (wickets >= 10 || remaining === 0) ? 0 :
       sigmoid(raw(models.chase, {
         format_code: code, target, runs, wickets, balls_used: balls,
         balls_remaining: remaining, runs_required: needed,
         current_rr: currentRate, required_rr: requiredRate
       }));
   }
   return { firstBattingWin: winner, chaseWin: chase, projectedTotal: score, modelVersion: "LightGBM-2026.10-v1" };
 }
 window.LineGuruML = { load, predict };
})();