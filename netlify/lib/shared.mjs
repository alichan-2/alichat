import { getStore } from "@netlify/blobs";

// Sites allowed to call the API from a browser. Add more if you move domains.
const ALLOWED = [
  "https://alivolkmar.com",
  "https://www.alivolkmar.com",
];

export function cors(req) {
  const origin = req.headers.get("origin") || "";
  const ok =
    ALLOWED.includes(origin) ||
    origin.endsWith(".netlify.app") ||
    origin.endsWith(".squarespace.com") ||
    origin.startsWith("http://localhost");
  return {
    "Access-Control-Allow-Origin": ok ? origin : ALLOWED[0],
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Vary": "Origin",
  };
}

export function json(req, status, body) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...cors(req) },
  });
}

// Simple spending guard: per-visitor hourly limit plus a site-wide daily cap.
export async function rateLimit(req, context, kind) {
  const perHour = Number(process.env.LIMIT_PER_HOUR || 20);
  const perDay = Number(process.env.LIMIT_PER_DAY || 300);
  let store;
  try {
    store = getStore("ratelimits");
  } catch {
    return { ok: true }; // blobs unavailable (e.g. local test): don't block
  }
  const ip = (context && context.ip) || req.headers.get("x-nf-client-connection-ip") || "anon";
  const now = new Date();
  const hourKey = `ip/${ip}/${now.toISOString().slice(0, 13)}`;
  const dayKey = `day/${now.toISOString().slice(0, 10)}`;
  const [h, d] = await Promise.all([
    store.get(hourKey, { type: "json" }).catch(() => null),
    store.get(dayKey, { type: "json" }).catch(() => null),
  ]);
  const hc = (h && h.n) || 0;
  const dc = (d && d.n) || 0;
  if (hc >= perHour || dc >= perDay) return { ok: false };
  await Promise.all([
    store.setJSON(hourKey, { n: hc + 1 }),
    store.setJSON(dayKey, { n: dc + 1, last: kind }),
  ]).catch(() => {});
  return { ok: true };
}

// Calls Claude. Returns parsed JSON from the model's reply.
export async function askClaude({ system, user, maxTokens = 900 }) {
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) throw new Error("no_key");
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": key,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model: process.env.MODEL || "claude-haiku-5-5",
      max_tokens: maxTokens,
      system,
      messages: [{ role: "user", content: user }],
    }),
    signal: AbortSignal.timeout(25000),
  });
  if (!res.ok) throw new Error("ai_" + res.status);
  const data = await res.json();
  const text = (data.content || []).map((c) => c.text || "").join("");
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start < 0 || end < 0) throw new Error("bad_json");
  return JSON.parse(text.slice(start, end + 1));
}

// Only allow links to Ali's own site, YouTube channel or LinkedIn.
export function safeLinks(links) {
  if (!Array.isArray(links)) return [];
  return links
    .filter((l) => l && typeof l.href === "string" && typeof l.label === "string")
    .filter((l) =>
      /^https:\/\/(www\.)?alivolkmar\.com\//.test(l.href) ||
      l.href.startsWith("/") ||
      l.href.startsWith("https://www.youtube.com/@aliveeTV") ||
      l.href.startsWith("https://www.linkedin.com/in/alivolkmar")
    )
    .slice(0, 4)
    .map((l) => ({ label: l.label.slice(0, 60), href: l.href.startsWith("/") ? "https://www.alivolkmar.com" + l.href : l.href }));
}

export const FALLBACK = {
  answer:
    "My assistant is taking a quick break. You can browse my work below, or email me at alivolkmar@gmail.com and I'll get back to you.",
  links: [
    { label: "3D work", href: "https://www.alivolkmar.com/3d-work" },
    { label: "Branding", href: "https://www.alivolkmar.com/branding-identity" },
    { label: "Resume", href: "https://www.alivolkmar.com/s/Alison_Volkmar_Resume_Online.pdf" },
  ],
};
