import { json } from "../lib/shared.mjs";

// The homepage pings this before showing the chat. If it fails, the
// normal homepage stays.
export default async (req) => {
  if (req.method === "OPTIONS") return json(req, 204, {});
  return json(req, 200, { ok: true, ai: Boolean(process.env.ANTHROPIC_API_KEY) });
};

export const config = { path: "/api/health" };
