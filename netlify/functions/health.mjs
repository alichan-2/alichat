import { json, askClaude } from "../lib/shared.mjs";

// The homepage pings this before showing the chat. If it fails, the
// normal homepage stays.
export default async (req) => {
  if (req.method === "OPTIONS") return json(req, 204, {});
  const url = new URL(req.url);
  // ?deep=1 makes one tiny AI call to check the key, model and credits.
  if (url.searchParams.get("deep") === "1") {
    try {
      await askClaude({ system: 'Reply with {"ok":true}', user: "ping", maxTokens: 20 });
      return json(req, 200, { ok: true, ai: true, aiWorks: true, model: process.env.MODEL || "claude-haiku-5-5" });
    } catch (e) {
      return json(req, 200, { ok: true, aiWorks: false, model: process.env.MODEL || "claude-haiku-5-5", error: String(e.message).slice(0, 400) });
    }
  }
  return json(req, 200, { ok: true, ai: Boolean(process.env.ANTHROPIC_API_KEY) });
};

export const config = { path: "/api/health" };
