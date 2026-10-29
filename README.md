# 📄 Samjhao - Documents, explained in your language

Upload or photograph any confusing document (bank letter, electricity bill, loan notice, 7/12 extract, government form).
Samjhao explains it in simple **Marathi, Hindi or English**, lists **what to do and by when**, reads it aloud,
and lets you **ask follow-up questions**.

Built with: HTML/CSS/JavaScript, Google Gemini API, browser speech synthesis, Netlify Functions.

## Features
- Photo, camera or PDF input (photos are compressed in the browser)
- Summary, key points, action items with deadlines, warnings
- Marathi / Hindi / English output
- Read aloud (browser voices)
- Ask follow-up questions about the same document
- Copy, share on WhatsApp, print
- API key stays on the server (Netlify Function), visitors never see it
- Light and dark mode, mobile friendly

## Project structure
```
index.html                    the whole website
netlify/functions/gemini.js   secure proxy that holds your API key
netlify.toml                  Netlify settings
PITCH.md                      demo script and judge Q&A
```

## Option A: Quick local test (2 minutes, no server)
1. Get a free key at https://aistudio.google.com (Get API key).
2. Double-click `index.html`.
3. Open "Use my own Gemini API key", paste the key, upload a document, click Explain.

## Option B: Deploy with a hidden key (recommended for the demo, ~15 minutes)
1. Create a GitHub repository and upload every file in this folder (keep the folder structure).
2. Go to https://app.netlify.com > Add new site > Import an existing project > choose your repository.
   Leave build settings as they are (netlify.toml handles them).
3. Open Site settings > Environment variables > add `GEMINI_API_KEY` with your key.
4. Trigger a redeploy (Deploys > Trigger deploy). Your public link is ready.
5. Open the link on your phone and test.

Local testing of Option B (optional): install Node.js, run `npm i -g netlify-cli`, create a `.env` file with
`GEMINI_API_KEY=your_key`, then run `netlify dev`.

## Troubleshooting
- "Server not available": you opened the file locally without a key. Paste a key (Option A) or deploy (Option B).
- "Server API key is not configured": add `GEMINI_API_KEY` in Netlify and redeploy.
- Model name error: open Google AI Studio, check the current Flash model name, then change it in
  `netlify/functions/gemini.js` (`MODEL`) and in `index.html` (`DIRECT_MODEL`).
- No voice for Marathi: use Chrome on Android or Windows, or install the language voice. Hindi and English usually work everywhere.
- Free API limits: Gemini's free tier has rate limits, so avoid spamming it during the demo.

## Privacy and safety
- Do not upload real personal documents during public demos. Use samples with names and numbers removed.
- Samjhao is an explanation tool, not legal or financial advice. The footer says so on purpose.

## Future work
WhatsApp bot, offline mode, more languages (Gujarati, Tamil, Bengali), voice questions, official-office locator, user login with history.
