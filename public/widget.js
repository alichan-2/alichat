/* Ask Ali widget · alivolkmar.com
   Loaded by the homepage code block. Exposes window.AskAli.mount(el). */
(function () {
  var SCRIPT = document.currentScript;
  var BASE = (SCRIPT && SCRIPT.src) ? SCRIPT.src.replace(/\/widget\.js.*$/, "") : "";
  var ASSET = BASE + "/img/";
  var SITE = "https://www.alivolkmar.com";
  var RESUME = SITE + "/s/Alison_Volkmar_Resume_Online.pdf";
  var EMAIL = "alivolkmar@gmail.com";

var CATS = [
  { id: "brand", label: "Brand & identity", role: "a brand designer", area: "brand and identity", since: "2005",
    kw: ["brand", "identity", "logo", "rebrand", "graphic design"],
    lead: "Logos, identity systems and full rebrands, carried through web, print and expo.",
    companies: ["NASA JPL", "AEgis Technologies", "Amazon Luxury", "Latinas Lead", "The Brooklyn Companies", "ITEC"],
    pages: [{ label: "Branding portfolio", href: SITE + "/branding-identity" }, { label: "Brand direction", href: SITE + "/brand-direction" }],
    work: [
      { t: "NASA JPL DSOC mission logo", d: "Official mission logo, built with engineers and scientific leadership.", tag: "client", href: SITE + "/case-studies/jplnasa-mission-logo-dsoc" },
      { t: "AEgis Elements rebrand", d: "Logo, website, print, social and expo materials.", tag: "in-house", href: SITE + "/web-digital-design" },
      { t: "Amazon Luxury templates", d: "Found the rebrand had no owner; built the Figma template system.", tag: "in-house", href: SITE + "/brand-direction" }
    ],
    gap: "Some packaging (labels and package updates at Nail Systems), but it isn't a specialty." },
  { id: "marketing", label: "Marketing", role: "a marketing designer", area: "marketing design", since: "2005",
    kw: ["marketing", "campaign", "social", "email", "expo", "booth", "trade show", "collateral"],
    lead: "Campaign assets for national brands, plus social, email, print and expo at nearly every company I've worked for.",
    companies: ["Bud Light (via AYC Media)", "NFL / NY Giants", "Nail Systems Intl.", "CGMA", "AEgis Technologies"],
    pages: [{ label: "Brand direction", href: SITE + "/brand-direction" }],
    work: [
      { t: "Bud Light sweepstakes (via AYC Media)", d: "Print POS posters and landing pages for 5 campaigns, incl. NY Giants and Super Bowl 50.", tag: "freelance", img: ASSET + "budlight-watch-the-game.jpg", href: SITE + "/brand-direction" },
      { t: "Nail Systems International", d: "Two-person team: 500+ social assets, emails, expo banners.", tag: "in-house", href: SITE + "/brand-direction" },
      { t: "CGMA", d: "Social, campaign imagery, and the CTN Expo booth.", tag: "in-house", href: SITE + "/brand-direction" }
    ],
    gap: "I don't do PR or media relations. My strength is the creative itself." },
  { id: "web", label: "Web & UX", role: "a web / UX designer", area: "web and UX", since: "2013",
    kw: ["web", "website", "ux", "ui", "wireframe", "app", "landing page", "figma"],
    lead: "Site structure and wireframes first, then the design, and often the build.",
    companies: ["Amazon", "CGMA", "AEgis Technologies", "The Brooklyn Companies"],
    pages: [{ label: "Web & digital design", href: SITE + "/web-digital-design" }],
    work: [
      { t: "CGMA website redesign", d: "3–4 wireframe rounds with the CEO, through launch.", tag: "in-house", href: SITE + "/web-digital-design" },
      { t: "Amazon prototypes", d: "amazon.com web and mobile features in Figma with UI/UX teams.", tag: "in-house", href: SITE + "/web-digital-design" },
      { t: "Lightkeeper's Journal", d: "My own app, designed and engineered end to end.", tag: "self-initiated", href: SITE + "/case-studies/lightkeepers-journal" }
    ],
    gap: "I've designed or rebuilt a site at nearly every company I've worked for, but I've never held a UX-focused role, and I'm lighter on formal UX research." },
  { id: "3d", label: "3D artist", role: "a 3D artist", area: "professional 3D", since: "2007",
    kw: ["3d", "hard surface", "modeling", "modeler", "maya", "blender", "generalist", "texturing", "unreal"],
    lead: "Models, texturing and real-time assets, from AAA games to marketplace standards.",
    companies: ["TurboSquid", "AEgis Technologies", "EA Games", "Nickelodeon", "Amazon", "OtterBox"],
    pages: [{ label: "3D work", href: SITE + "/3d-work" }],
    work: [
      { t: "TurboSquid CheckMate", d: "Proposed and spearheaded the 3D certification standard still in use.", tag: "in-house", href: SITE + "/case-studies/turbosquid-checkmate-quality-standards" },
      { t: "AEgis Technologies", d: "100+ real-time simulation assets; wrote the 3D process docs.", tag: "in-house", href: SITE + "/3d-work" },
      { t: "Fable 2 & Dragon Age: Origins", d: "Concept, texturing and hard-surface assets (Liquid Development).", tag: "freelance", href: SITE + "/3d-work" }
    ],
    gap: "" },
  { id: "spatial", label: "Spatial & experiential", role: "a spatial / experiential designer", area: "spatial and experiential", since: "2013",
    kw: ["spatial", "experiential", "experience design", "environment", "themed", "theme park", "retail", "showroom", "storefront", "wayfinding", "signage", "immersive", "exhibit", "virtual space", "digital space"],
    lead: "Spaces people walk through, from Amazon's virtual showrooms to theme-park signage, storefronts and wayfinding.",
    companies: ["Amazon", "ITEC Entertainment", "Skechers"],
    pages: [{ label: "Spatial & experiential", href: SITE + "/3d-experiences" }],
    work: [
      { t: "Amazon Showroom", d: "Led a 3-person 3D team: 150+ rooms shipped; drove the move to Unreal 5 and USD.", tag: "in-house", href: SITE + "/3d-experiences" },
      { t: "Skechers showroom pillars", d: "Photoreal looping 3D for 10-ft display pillars; directed 3–4 freelancers.", tag: "client", href: SITE + "/3d-experiences" },
      { t: "The Grotto", d: "Themed signage concepts for a hidden theme-park bar (ITEC).", tag: "concept", href: SITE + "/3d-experiences" },
      { t: "ATELIER Hotel", d: "Boutique hotel identity and wayfinding, lobby to room numbers.", tag: "self-initiated", href: SITE + "/case-studies/atelier-presentation" }
    ],
    gap: "" },
  { id: "product", label: "Product renders", role: "3D product renders", area: "3D product rendering", since: "2009",
    kw: ["product render", "keyshot", "render", "ecommerce", "e-commerce", "commerce", "photoreal"],
    lead: "Photoreal product rendering for commerce, apparel and footwear.",
    companies: ["OtterBox", "Amazon", "Skechers", "EA Games", "Adidas", "Nike"],
    pages: [{ label: "3D work", href: SITE + "/3d-work" }],
    work: [
      { t: "OtterBox", d: "~150 photoreal renders in 2–3 months; automation cut turnaround 45%.", tag: "contract", href: SITE + "/3d-work" },
      { t: "Tiger Woods PGA Tour 2011", d: "50+ photoreal apparel assets with Adidas and Nike.", tag: "contract", href: SITE + "/3d-work" },
      { t: "Skechers", d: "High-end footwear renders for marketing and trade shows.", tag: "client", href: SITE + "/3d-work" }
    ],
    gap: "" },
  { id: "games", label: "Game art", role: "a game artist", area: "game art", since: "2007",
    kw: ["game", "games", "unity", "real-time", "realtime", "aaa"],
    lead: "Shipped AAA credits plus real-time and Unity work.",
    companies: ["EA Games", "Fable 2", "Dragon Age: Origins", "Bento Box", "Keet Racer"],
    pages: [{ label: "3D work", href: SITE + "/3d-work" }, { label: "Resume", href: RESUME }],
    work: [
      { t: "Keet Racer", d: "My own game IP: story, characters, maps, 3D birds and a rigged test character.", tag: "self-initiated", href: SITE + "/3d-work" },
      { t: "Fable 2 & Dragon Age: Origins", d: "Concept, texturing and hard-surface assets (Liquid Development).", tag: "freelance", href: RESUME },
      { t: "Tiger Woods PGA Tour 2011", d: "Console-optimized apparel and accessory assets for EA.", tag: "contract", href: RESUME },
      { t: "Alicia Keys music project", d: "Hand-painted Unity environments and props for Bento Box.", tag: "contract", href: RESUME }
    ],
    gap: "" },
  { id: "present", label: "Presentations", role: "a presentation designer", area: "presentation and pitch", since: "2019",
    kw: ["presentation", "pitch", "deck", "slides", "keynote", "powerpoint"],
    lead: "Pitch decks and concept presentations that sell the idea in the room.",
    companies: ["ITEC Entertainment", "Vinpearl (pitch)"],
    pages: [{ label: "Vinpearl pitch", href: SITE + "/vinpearl" }],
    work: [
      { t: "Vinpearl competition pitch", d: "Team pitch: I built the deck, paintings and identities; teammates wrote story and maps.", tag: "team pitch", href: SITE + "/vinpearl" },
      { t: "ITEC templates", d: "PowerPoint templates used across the company's pitches.", tag: "in-house", href: SITE + "/brand-direction" },
      { t: "The Grotto", d: "Themed signage concept presentation.", tag: "concept", href: SITE + "/3d-work" }
    ],
    gap: "" },
  { id: "illus", label: "Illustration", role: "an illustrator", area: "illustration and publication", since: "2012",
    kw: ["illustrat", "publication", "book", "manual", "storyboard", "document", "editorial", "indesign"],
    lead: "Illustration, storyboards and long documents.",
    companies: ["Nail Systems Intl.", "ITEC", "Bento Box", "Astrobunny Universe"],
    pages: [{ label: "Illustration", href: SITE + "/illustration" }],
    work: [
      { t: "Illustrated training manual", d: "100+ pages with vector diagrams for Nail Systems.", tag: "in-house", href: SITE + "/illustration" },
      { t: "ITEC art book", d: "Company art book with leadership, plus brochures and posters.", tag: "in-house", href: SITE + "/illustration" },
      { t: "Astrobunny Universe", d: "My own 13-book YA fantasy series.", tag: "self-initiated", href: SITE + "/illustration" }
    ],
    gap: "" },
  { id: "video", label: "Video & compositing", role: "a video editor / compositor", area: "video and compositing", since: "2011",
    kw: ["video", "youtube", "editing", "editor", "composit", "nuke", "motion", "after effects", "premiere"],
    lead: "Broadcast compositing at Nickelodeon, live interviews, tutorials and my own channel.",
    companies: ["Nickelodeon", "CGMA", "YouTube @aliveeTV"],
    pages: [{ label: "My YouTube channel", href: "https://www.youtube.com/@aliveeTV" }, { label: "Brand direction", href: SITE + "/brand-direction" }],
    work: [
      { t: "Nickelodeon: Robot and Monster", d: "Final Nuke compositing across 13 episodes.", tag: "contract", href: SITE + "/brand-direction" },
      { t: "CGMA live interviews", d: "Produced and hosted 10+ interviews.", tag: "in-house", href: SITE + "/brand-direction" },
      { t: "My YouTube channel", d: "Filming, lighting, effects, editing and thumbnails, all by me.", tag: "self-initiated", href: "https://www.youtube.com/@aliveeTV" }
    ],
    gap: "" },
  { id: "ai", label: "AI & creative tech", role: "a creative technologist", area: "generative AI and creative tech", since: "2021",
    kw: [" ai ", "generative", "lora", "agentic", "prototype", "kiro", "creative technolog"],
    lead: "Artist first, AI second: clear sources of truth, artist control and less wasted generation.",
    companies: ["Amazon", "Kate Barton (NYFW)"],
    pages: [{ label: "Slap Comp case study", href: SITE + "/case-studies/amazon-luxury-premium-beauty-generative-commerce-imagery" }],
    work: [
      { t: "Slap Comp", d: "Built in Kiro to stop AI distorting labels; cut my production time ~50%.", tag: "in-house", href: SITE + "/case-studies/amazon-luxury-premium-beauty-generative-commerce-imagery" },
      { t: "Kate Barton NYFW teaser", d: "Team project: built the LoRA face set; Kling first/last-frame control.", tag: "team", href: SITE + "/brand-direction" },
      { t: "Model evaluation & training", d: "Tested FLUX, Kling, Midjourney and more; led cross-org AI training.", tag: "in-house", href: SITE + "/case-studies/amazon-luxury-premium-beauty-generative-commerce-imagery" }
    ],
    gap: "" },
  { id: "lead", label: "Team lead", role: "a design lead", area: "leading and teaching", since: "2008",
    kw: ["lead", "manager", "director", "manage", "team", "mentor"],
    lead: "Managed a team at Amazon, set standards at TurboSquid, and taught ~80 students a month.",
    companies: ["Amazon", "TurboSquid", "Full Sail", "Skechers"],
    pages: [{ label: "Resume", href: RESUME }],
    work: [
      { t: "Amazon 3D team", d: "Led 2 artists; got the team reclassified as 3D artists: a $20–30K/yr raise.", tag: "in-house", href: RESUME },
      { t: "Full Sail instructor", d: "Taught ~80 students a month; rewrote course materials.", tag: "teaching", href: RESUME },
      { t: "Skechers", d: "Hired and directed 3–4 freelance specialists.", tag: "freelance", href: SITE + "/3d-work" }
    ],
    gap: "" }
];

  var CSS = `
.aa{--bg:#08080b;--panel:#111116;--panel2:#16161d;--line:#26262f;--text:#ececf1;--muted:#9a9aa8;--dim:#8a8a98;--acc:#2bc4d4;--acc2:#9eecf2;--ring:#1d4c55;--ink:#03181c;
  background:var(--bg);color:var(--text);font-family:Inter,system-ui,-apple-system,"Segoe UI",sans-serif;line-height:1.55;-webkit-font-smoothing:antialiased}
.aa *{box-sizing:border-box}
.aa [hidden]{display:none!important}
.aa a{color:var(--acc2)}
.aa .mono{font-family:"JetBrains Mono",ui-monospace,Menlo,monospace}
.aa .page{max-width:1080px;margin:0 auto;padding:0 32px}
.aa .hero{display:grid;grid-template-columns:300px minmax(0,1fr);gap:56px;align-items:center;padding:64px 0 48px}
.aa .who{display:flex;flex-direction:column;gap:10px}
.aa .photo{width:220px;height:220px;border-radius:50%;object-fit:cover;border:2px solid var(--ring);display:block;background:radial-gradient(circle at 50% 40%,#123c45,#0a1315 75%)}
.aa h1{margin:6px 0 0;font-size:38px;line-height:1.05;letter-spacing:-.03em;font-weight:800}
.aa .title{font-size:16px;font-weight:500}
.aa .meta{font-size:12px;color:var(--muted)}
.aa .btns{display:flex;flex-wrap:wrap;gap:10px;margin-top:8px}
.aa .btn{display:inline-flex;align-items:center;min-height:44px;padding:0 18px;border-radius:10px;font-weight:600;font-size:15px;text-decoration:none;border:1px solid var(--line);background:var(--panel);color:var(--text);cursor:pointer;font-family:inherit}
.aa .btn.primary{background:var(--acc);border-color:var(--acc);color:var(--ink)}
.aa .ask{display:flex;flex-direction:column;gap:14px;min-width:0}
.aa .bubble{position:relative;background:var(--panel);border:1px solid var(--ring);border-radius:28px;padding:28px 30px;display:flex;flex-direction:column;gap:16px}
.aa .tail{position:absolute;left:-11px;top:60px;width:20px;height:20px;background:var(--panel);border-left:1px solid var(--ring);border-bottom:1px solid var(--ring);transform:rotate(45deg)}
.aa .hello{margin:0;font-size:26px;font-weight:650;letter-spacing:-.015em}
.aa form{display:flex;gap:8px;margin:0}
.aa input,.aa textarea{flex:1;min-width:0;border:1px solid var(--line);background:var(--bg);color:var(--text);font-size:16px;font-family:inherit}
.aa input{min-height:52px;padding:0 20px;border-radius:999px}
.aa textarea{min-height:150px;padding:14px 16px;border-radius:14px;resize:vertical;width:100%;line-height:1.5;font-size:14px}
.aa input::placeholder,.aa textarea::placeholder{color:var(--dim)}
.aa .go{min-height:52px;padding:0 22px;border-radius:999px;border:0;background:var(--acc);color:var(--ink);font-weight:600;font-size:15px;cursor:pointer;font-family:inherit}
.aa .go[disabled]{opacity:.6;cursor:wait}
.aa .link{align-self:flex-start;min-height:44px;padding:0;border:0;background:none;color:var(--acc2);font-size:14px;cursor:pointer;text-decoration:underline;font-family:inherit}
.aa .dots{display:flex;gap:8px;align-items:center;padding-left:28px}
.aa .dots span{border-radius:50%;border:1px solid var(--ring)}
.aa .chips{display:flex;flex-wrap:wrap;gap:10px}
.aa .chip{min-height:44px;padding:0 18px;font-size:14px;cursor:pointer;font-family:inherit;border-radius:26px 30px 24px 32px/24px 28px 30px 26px;border:1px solid var(--ring);background:var(--panel2);color:var(--text);font-weight:500}
.aa .chip.on{background:var(--acc);border-color:var(--acc);color:var(--ink);font-weight:600}
.aa .sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}
.aa .results{border-top:1px solid var(--line);padding:40px 0 48px;display:flex;flex-direction:column;gap:24px}
.aa .looking{font-size:14px;color:var(--muted)}
.aa .looking b{color:var(--acc2);font-weight:500}
.aa .answer{background:var(--panel);border:1px solid var(--ring);border-radius:20px;padding:20px 22px;font-size:16px}
.aa .answer .pills{margin-top:12px}
.aa .tiles{display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:12px}
.aa .tile img{max-width:78%;max-height:48px;object-fit:contain;display:block}
.aa .tile{min-height:84px;border:1px solid var(--line);border-radius:14px;background:var(--panel);display:flex;align-items:center;justify-content:center;padding:14px;text-align:center;font-weight:600;font-size:15px}
.aa .row{display:flex;flex-wrap:wrap;gap:20px;align-items:flex-start}
.aa .work{flex:1 1 320px;min-width:0;display:flex;flex-direction:column;gap:10px}
.aa .card{display:flex;gap:14px;align-items:center;padding:12px;border:1px solid var(--line);border-radius:14px;background:var(--panel);text-decoration:none;color:var(--text)}
.aa .card:hover{border-color:var(--acc)}
.aa .thumb{flex:none;width:96px;height:64px;border-radius:8px;object-fit:cover;object-position:top center}
.aa .ph{flex:none;width:96px;height:64px;border-radius:8px;padding:6px;display:flex;align-items:flex-end;font-size:10px;line-height:1.2}
.aa .card .tag{font-size:11px}
.aa .card .t{font-size:15px;font-weight:600;line-height:1.25;display:block}
.aa .card .d{font-size:13px;color:var(--muted);display:block}
.aa .summary{flex:1.3 1 380px;min-width:0;background:var(--panel);border:1px solid var(--ring);border-radius:24px;padding:24px 26px;display:flex;flex-direction:column;gap:14px}
.aa .summary .big{margin:0;font-size:20px;font-weight:600;letter-spacing:-.01em}
.aa .summary p{margin:0}
.aa .muted{color:var(--muted)}
.aa .small{font-size:12px;color:var(--dim)}
.aa .pills{display:flex;flex-wrap:wrap;gap:8px}
.aa .pill{display:inline-flex;align-items:center;min-height:44px;padding:0 16px;border-radius:999px;border:1px solid var(--acc);color:var(--acc2);font-size:14px;text-decoration:none}
.aa .note{border:1px dashed #3a3a46;border-radius:12px;padding:12px 14px;font-size:14px;color:var(--muted)}
.aa .note b{color:var(--text)}
.aa .verdict{align-self:flex-start;display:inline-flex;align-items:center;gap:8px;border:1px solid var(--line);border-radius:999px;padding:6px 14px;font-weight:600}
.aa .verdict i{width:8px;height:8px;border-radius:50%;display:inline-block}
.aa .table{border:1px solid var(--line);border-radius:14px;overflow:hidden}
.aa .table div{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;padding:12px 16px;border-bottom:1px solid var(--line);font-size:14px}
.aa .table div:last-child{border-bottom:0}
.aa .ok{color:#4ade80}
.aa .browse{border-top:1px solid var(--line);padding:40px 0 64px}
.aa .browse h2{margin:0 0 20px;font-size:28px;letter-spacing:-.02em}
.aa .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:12px}
.aa .grid a{display:flex;flex-direction:column;gap:4px;padding:18px;border:1px solid var(--line);border-radius:14px;background:var(--panel);text-decoration:none;color:var(--text)}
.aa .grid a:hover{border-color:var(--acc)}
.aa .spin{display:inline-block;width:14px;height:14px;border:2px solid var(--ring);border-top-color:var(--acc);border-radius:50%;animation:aaspin 1s linear infinite;vertical-align:-2px;margin-right:8px}
@keyframes aaspin{to{transform:rotate(360deg)}}
@media (prefers-reduced-motion:reduce){.aa .spin{animation:none}}
@media (max-width:760px){
 .aa .page{padding:0 18px}
 .aa .hero{grid-template-columns:1fr;gap:28px;padding:32px 0 36px}
 .aa .who{align-items:center;text-align:center}
 .aa .photo{width:150px;height:150px}
 .aa .btns{justify-content:center}
 .aa .bubble{padding:22px 20px}
 .aa .tail{left:50%;top:-11px;margin-left:-10px;transform:rotate(135deg)}
 .aa .hello{font-size:21px}
 .aa .dots{display:none}
 .aa .chips{justify-content:center}
 .aa .tiles{grid-template-columns:repeat(2,minmax(0,1fr))}
 .aa .table div{grid-template-columns:1fr;gap:4px}
}`;

  var LOGOS = { "Amazon": "amazon", "Amazon Luxury": "amazon", "EA Games": "ea", "NASA JPL": "nasa-jpl", "Nickelodeon": "nickelodeon",
    "TurboSquid": "turbosquid", "Skechers": "skechers", "ITEC": "itec", "ITEC Entertainment": "itec", "AEgis Technologies": "aegis" };
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function tagColor(tag) {
    if (tag === "self-initiated") return "#fbbf24";
    if (tag === "team" || tag === "team pitch") return "#60a5fa";
    return "#9eecf2";
  }
  function route(text) {
    var t = " " + String(text || "").toLowerCase() + " ";
    var best = null, score = 0;
    CATS.forEach(function (c) {
      var s = 0;
      c.kw.forEach(function (k) { if (t.indexOf(k) !== -1) s++; });
      if (s > score) { score = s; best = c.id; }
    });
    return best;
  }
  function find(id) { for (var i = 0; i < CATS.length; i++) if (CATS[i].id === id) return CATS[i]; return null; }
  function pills(links) {
    return '<div class="pills">' + (links || []).map(function (l) {
      return '<a class="pill" href="' + esc(l.href) + '" target="_blank" rel="noopener">' + esc(l.label) + ' →</a>';
    }).join("") + "</div>";
  }
  function post(path, body) {
    return fetch(BASE + path, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: (window.AbortSignal && AbortSignal.timeout) ? AbortSignal.timeout(30000) : undefined
    }).then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); });
  }
  var FALLBACK_LINKS = [
    { label: "3D work", href: SITE + "/3d-work" },
    { label: "Branding", href: SITE + "/branding-identity" },
    { label: "Resume", href: RESUME }
  ];

  function catHTML(c) {
    var hues = [180, 200, 165, 215];
    var work = c.work.map(function (w, i) {
      var h = hues[i % 4];
      var thumb = w.img
        ? '<img class="thumb" src="' + esc(w.img) + '" alt="" loading="lazy">'
        : '<span class="ph mono" aria-hidden="true" style="background:linear-gradient(135deg,hsl(' + h + ' 45% 26%),hsl(' + (h + 30) + ' 40% 12%))">' + esc(w.t.split(" ").slice(0, 2).join(" ")) + "</span>";
      return '<a class="card" href="' + esc(w.href) + '" target="_blank" rel="noopener">' + thumb +
        '<span><span class="tag mono" style="color:' + tagColor(w.tag) + '">' + esc(w.tag) + '</span><span class="t">' + esc(w.t) + '</span><span class="d">' + esc(w.d) + "</span></span></a>";
    }).join("");
    var tiles = c.companies.map(function (co) {
      var logo = LOGOS[co];
      return '<div class="tile">' + (logo ? '<img src="' + ASSET + "logos/" + logo + '.png" alt="' + esc(co) + '" loading="lazy">' : esc(co)) + "</div>";
    }).join("");
    return '<div class="looking mono">Looking for <b>' + esc(c.role) + "</b></div>" +
      '<div class="tiles">' + tiles + "</div>" +
      '<div class="row"><div class="work">' + work + '</div><div class="summary">' +
      '<p class="big">I\'ve done ' + esc(c.area) + " work since " + esc(c.since) + ".</p>" +
      '<p class="muted">' + esc(c.lead) + "</p>" +
      '<div class="small mono">see my pages here</div>' + pills(c.pages) +
      (c.gap ? '<div class="note"><b>Honest note: </b>' + esc(c.gap) + "</div>" : "") +
      "</div></div>";
  }

  function fitHTML(r) {
    var colors = { strong: "#4ade80", partial: "#fbbf24", weak: "#f87171" };
    var labels = { strong: "Strong match", partial: "Partial match", weak: "Not a close match" };
    var loc = r.location || {};
    return '<span class="verdict"><i style="background:' + (colors[r.verdict] || "#fbbf24") + '"></i>' + esc(labels[r.verdict] || "Partial match") +
      (r.role ? ' <span class="small mono">· ' + esc(r.role) + "</span>" : "") + "</span>" +
      (r.headline ? '<p style="margin:0">' + esc(r.headline) + "</p>" : "") +
      (r.matches && r.matches.length ? '<div class="small mono">where I match</div><div class="table">' + r.matches.map(function (m) {
        return '<div><span><span class="ok">✓ </span>' + esc(m.req) + '</span><span class="muted">' + esc(m.proof) + "</span></div>";
      }).join("") + "</div>" : "") +
      (r.gaps && r.gaps.length ? '<div class="small mono">honest gaps</div>' + r.gaps.map(function (g) {
        return '<div class="note"><b>' + esc(g.item) + ": </b>" + esc(g.note) + "</div>";
      }).join("") : "") +
      (loc.note ? '<div class="note"><b>Location: </b>' + esc(loc.note) + "</div>" : "") +
      (r.links && r.links.length ? '<div class="small mono">most relevant work</div>' + pills(r.links) : "") +
      '<div><a class="btn primary" href="mailto:' + EMAIL + '?subject=' + encodeURIComponent("Role: " + (r.role || "a role from your website")) + '">Looks like a fit? Email me</a></div>';
  }

  function mount(root) {
    if (!document.getElementById("aa-style")) {
      var st = document.createElement("style"); st.id = "aa-style"; st.textContent = CSS; document.head.appendChild(st);
    }
    root.innerHTML =
      '<div class="aa"><div class="page">' +
      '<section class="hero" aria-label="Ask Ali"><div class="who">' +
      '<img class="photo" src="' + ASSET + 'headshot.png" alt="Alison Volkmar">' +
      '<h1>Alison Volkmar</h1><div class="title">Creative Technologist &amp; Senior Visual Designer</div>' +
      '<div class="meta mono">20+ years · Seattle · Remote</div>' +
      '<div class="btns"><a class="btn primary" href="' + RESUME + '" target="_blank" rel="noopener">Resume</a>' +
      '<a class="btn" href="https://www.linkedin.com/in/alivolkmar" target="_blank" rel="noopener">LinkedIn</a></div></div>' +
      '<div class="ask"><div class="bubble"><div class="tail" aria-hidden="true"></div>' +
      '<p class="hello">Hey, I\'m Ali. How can I help you?</p>' +
      '<form data-ask><label class="sr" for="aa-q">What are you looking for?</label>' +
      '<input id="aa-q" maxlength="800" placeholder="e.g. Looking for a 3D artist" autocomplete="off"><button class="go" type="submit">Ask</button></form>' +
      '<button class="link" type="button" data-fittoggle>Have a job description? Check my fit</button></div>' +
      '<div class="dots" aria-hidden="true"><span style="width:8px;height:8px"></span><span style="width:12px;height:12px"></span></div>' +
      '<div class="chips">' + CATS.map(function (c) { return '<button class="chip" type="button" data-cat="' + c.id + '">' + esc(c.label) + "</button>"; }).join("") + "</div>" +
      "</div></section>" +
      '<section class="results" data-results hidden aria-live="polite"></section>' +
      '<section class="results" data-fit hidden><label for="aa-jd" style="font-size:18px;font-weight:600">Paste a job description</label>' +
      '<textarea id="aa-jd" maxlength="12000" placeholder="Paste the job description here…"></textarea>' +
      '<div class="btns" style="margin:0"><button class="go" type="button" data-fitgo>Check my fit</button></div>' +
      '<p class="small" style="margin:0">Job descriptions pasted here are saved so I can see which roles find me. Please don\'t paste anything confidential.</p>' +
      '<div data-fitout aria-live="polite" style="display:flex;flex-direction:column;gap:12px"></div></section>' +
      '<section class="browse"><h2>Or browse everything</h2><div class="grid">' +
      [["Brand & identity", "/branding-identity"], ["Web & digital", "/web-digital-design"], ["3D work", "/3d-work"], ["Spatial & experiential", "/3d-experiences"], ["Illustration", "/illustration"],
       ["Presentations", "/vinpearl"], ["Brand direction", "/brand-direction"], ["AI & creative tech", "/case-studies/amazon-luxury-premium-beauty-generative-commerce-imagery"]]
        .map(function (p) { return '<a href="' + SITE + p[1] + '"><b>' + esc(p[0]) + '</b><span class="small mono">' + esc(p[1]) + "</span></a>"; }).join("") +
      '<a href="https://www.youtube.com/@aliveeTV" target="_blank" rel="noopener"><b>Video</b><span class="small mono">YouTube @aliveeTV</span></a>' +
      "</div></section></div></div>";

    var $ = function (sel) { return root.querySelector(sel); };
    var results = $("[data-results]"), fit = $("[data-fit]"), fitToggle = $("[data-fittoggle]");
    var input = $("#aa-q"), askBtn = $("[data-ask] .go");

    function setChip(id) {
      root.querySelectorAll(".chip").forEach(function (b) { b.classList.toggle("on", b.getAttribute("data-cat") === id); });
    }
    function showFit(on) {
      fit.hidden = !on; if (on) results.hidden = true;
      fitToggle.textContent = on ? "Back to browsing by skill" : "Have a job description? Check my fit";
      if (on) { setChip(null); $("#aa-jd").focus(); }
    }
    function showCat(id, answerHTML) {
      var c = find(id);
      showFit(false);
      results.hidden = false;
      results.innerHTML = (answerHTML || "") + (c ? catHTML(c) : "");
      setChip(c ? c.id : null);
    }

    root.querySelectorAll(".chip").forEach(function (b) {
      b.addEventListener("click", function () {
        var c = find(b.getAttribute("data-cat"));
        input.value = "Looking for " + c.role;
        showCat(c.id);
      });
    });
    fitToggle.addEventListener("click", function () { showFit(fit.hidden); });

    $("[data-ask]").addEventListener("submit", function (e) {
      e.preventDefault();
      var q = input.value.trim(); if (!q) return;
      var id = route(q);
      showCat(id, '<div class="answer"><span class="spin"></span>Thinking…</div>');
      askBtn.disabled = true;
      post("/api/chat", { q: q }).then(function (r) {
        return r;
      }).catch(function () {
        return { answer: "My assistant is taking a quick break. Browse my work below, or email me at " + EMAIL + ".", links: FALLBACK_LINKS };
      }).then(function (r) {
        askBtn.disabled = false;
        var box = results.querySelector(".answer");
        if (box) box.innerHTML = esc(r.answer) + (r.links && r.links.length ? pills(r.links) : "");
      });
    });

    $("[data-fitgo]").addEventListener("click", function () {
      var jd = $("#aa-jd").value.trim();
      var out = $("[data-fitout]"), btn = $("[data-fitgo]");
      if (jd.length < 40) { out.innerHTML = '<p class="muted" style="margin:0">Paste the full job description and I\'ll compare it.</p>'; return; }
      btn.disabled = true;
      out.innerHTML = '<p style="margin:0"><span class="spin"></span>Comparing this role to my work…</p>';
      post("/api/fit", { jd: jd }).then(function (r) {
        btn.disabled = false;
        if (r.fallback || !r.verdict) throw new Error("fallback");
        out.innerHTML = fitHTML(r);
      }).catch(function () {
        btn.disabled = false;
        out.innerHTML = '<div class="note"><b>My fit checker is taking a quick break. </b>Email the role to me at <a href="mailto:' + EMAIL + '">' + EMAIL + '</a> and I\'ll tell you honestly if it\'s a match.</div>' + pills(FALLBACK_LINKS);
      });
    });
  }

  window.AskAli = { mount: mount, version: "1.0.0" };
})();
