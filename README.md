# Ask Ali

The chat and job-description fit check for alivolkmar.com.

## What's here
- `public/widget.js`: the chat UI (skill buttons, free-text questions, fit check). Category cards are built in, so they work even without the AI.
- `netlify/functions/`
  - `/api/health`: the homepage checks this before showing the chat
  - `/api/chat`: answers free-text questions from the knowledge file
  - `/api/fit`: compares a pasted job description and logs it
  - `/api/jds?key=ADMIN_KEY`: your private list of pasted job descriptions
- `netlify/functions/lib/knowledge.mjs`: the knowledge file the AI answers from
- `squarespace-code-block.html`: paste into your homepage
- `public/index.html`: a test page (open your Netlify URL to try it)

## Netlify setup (one time)
1. Netlify → Add new site → Import an existing project → GitHub → `alichat`. Keep the default settings and deploy.
2. Site configuration → Environment variables, add:
   - `ANTHROPIC_API_KEY`: your key from console.anthropic.com
   - `ADMIN_KEY`: any long password you make up (for viewing logged job descriptions)
   - Optional: `LIMIT_PER_HOUR` (default 20 per visitor), `LIMIT_PER_DAY` (default 300 site-wide), `MODEL` (default `claude-haiku-5-5`)
3. Deploys → Trigger deploy, so the keys take effect.
4. Open `https://YOUR-SITE.netlify.app`. The test page should show the chat.

## Safety
- If the AI fails or hits a limit, the chat shows a friendly fallback with links and your email.
- If Netlify is down, the Squarespace block removes itself and your normal homepage shows.
- Links the AI gives are filtered to alivolkmar.com, YouTube @aliveeTV and LinkedIn only.
- In console.anthropic.com, set a monthly spend limit on the key as a backstop.
