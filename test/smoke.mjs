// Quick checks without Netlify: functions respond, fallbacks work, AI output is cleaned.
import health from "../netlify/functions/health.mjs";
import chat from "../netlify/functions/chat.mjs";
import fit from "../netlify/functions/fit.mjs";
const req = (path, body) => new Request("https://x.test" + path, { method: body ? "POST" : "GET", headers: { "content-type": "application/json", origin: "https://www.alivolkmar.com" }, body: body ? JSON.stringify(body) : undefined });
const ok = (c, m) => { if (!c) { console.error("FAIL", m); process.exit(1); } console.log("ok ", m); };

let r = await (await health(req("/api/health"))).json(); ok(r.ok === true, "health");
delete process.env.ANTHROPIC_API_KEY;
r = await (await chat(req("/api/chat", { q: "3d artist?" }))).json(); ok(r.fallback && r.links.length, "chat falls back with no key");
process.env.ANTHROPIC_API_KEY = "test";
const realFetch = globalThis.fetch;
globalThis.fetch = async () => new Response(JSON.stringify({ content: [{ text: 'Sure! {"verdict":"strong","headline":"h","role":"Senior 3D Artist","matches":[{"req":"3D","proof":"Showroom"}],"gaps":[],"location":{"status":"match","note":"Remote"},"links":[{"label":"3D","href":"https://www.alivolkmar.com/3d-work"},{"label":"evil","href":"https://evil.com"}]}' }] }), { status: 200 });
r = await (await fit(req("/api/fit", { jd: "We need a senior 3D artist, remote, Maya and Unreal, 8+ years experience." }))).json();
ok(r.verdict === "strong" && r.links.length === 1, "fit parses and filters links");
globalThis.fetch = async () => new Response("err", { status: 500 });
r = await (await fit(req("/api/fit", { jd: "We need a senior 3D artist, remote, Maya and Unreal, 8+ years experience." }))).json();
ok(r.fallback === true, "fit falls back on AI error");
globalThis.fetch = realFetch;
