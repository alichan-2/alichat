import { getStore } from "@netlify/blobs";

// Private log of pasted job descriptions.
// Open: https://YOUR-SITE.netlify.app/api/jds?key=YOUR_ADMIN_KEY
// (ADMIN_KEY is set in Netlify's environment variables.)
export default async (req) => {
  const url = new URL(req.url);
  const admin = process.env.ADMIN_KEY;
  if (!admin || url.searchParams.get("key") !== admin) {
    return new Response("Not found", { status: 404 });
  }
  const store = getStore("jds");
  const { blobs } = await store.list();
  const keys = blobs.map((b) => b.key).sort().reverse().slice(0, 200);
  const items = await Promise.all(keys.map((k) => store.get(k, { type: "json" })));

  if (url.searchParams.get("format") === "json") {
    return new Response(JSON.stringify(items, null, 2), { headers: { "Content-Type": "application/json" } });
  }

  const esc = (s) => String(s || "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const rows = items
    .filter(Boolean)
    .map(
      (it) => `<details><summary><b>${esc(it.role || "Untitled role")}</b> · ${esc(it.verdict)} · ${esc(it.ts.slice(0, 16).replace("T", " "))} UTC</summary><pre>${esc(it.jd)}</pre></details>`
    )
    .join("");
  const html = `<!doctype html><meta charset="utf-8"><title>Ask Ali · job descriptions</title>
<style>body{font:15px/1.5 system-ui;background:#0b0f10;color:#e6f2f3;max-width:900px;margin:40px auto;padding:0 20px}
summary{cursor:pointer;padding:10px 0;border-bottom:1px solid #1d4c55}pre{white-space:pre-wrap;background:#111819;padding:14px;border-radius:8px}</style>
<h1>Pasted job descriptions (${items.length})</h1>${rows || "<p>None yet.</p>"}`;
  return new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8" } });
};

export const config = { path: "/api/jds" };
