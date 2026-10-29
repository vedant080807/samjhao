# Samjhao - Pitch and Demo Guide

**Tagline:** Official documents, explained in your language.

## 2-minute pitch
1. **Problem (20 sec):** Millions of people receive bank notices, bills and land records in complex language.
   They pay agents, miss deadlines, or sign things they do not understand.
2. **Solution (20 sec):** Samjhao: take a photo, choose Marathi, Hindi or English, and get a simple explanation,
   a to-do list with deadlines, and an audio reading.
3. **Live demo (60 sec):**
   - Open the site on your phone, choose Marathi.
   - Take a photo of a sample bill or notice (personal details removed).
   - Click Explain, show the summary, action items and warnings.
   - Tap Read aloud.
   - Tap a follow-up chip, for example "What is the last date?".
   - Tap Share on WhatsApp to show it can be sent to family.
4. **Impact (10 sec):** Helps elderly people, first-generation learners and rural users act on time.
5. **Next steps (10 sec):** WhatsApp bot, more languages, voice questions, offline mode.

## Backup plan if the internet fails
- Keep 2 screenshots of a finished result and a 30-second screen recording of the demo on your phone.

## Slide outline (5 slides)
1. Title and tagline
2. The problem (one real example)
3. How it works (photo, Gemini, simple explanation, audio, follow-ups)
4. Demo screenshots
5. Impact and next steps

## Likely judge questions
- **How accurate is it?** It uses Gemini to read the document and is told not to guess. It states when text is unclear,
  and the footer tells users to verify important details. We would add human review for critical documents.
- **What about privacy?** Nothing is stored by our site. Images go to the AI service only to be explained. Next step: add on-device
  processing and clear data-handling notes.
- **Why not just use a chatbot?** Samjhao is built for one job: a photo goes in, a clear action list comes out, in the user's language
  with audio. No prompt-writing is needed.
- **Is the API key safe?** Yes, it lives in a server function, not in the page.
- **How would it scale?** Add caching, rate limits and a paid API tier; serve through WhatsApp for reach.
- **What did you build in 2 to 3 hours?** The full flow: upload, explanation, audio, follow-up chat, sharing and deployment.

## Sample documents to prepare (remove real names and numbers)
- Electricity bill
- Bank loan or EMI notice
- School or college fee notice
- 7/12 extract or other land record
- Government scheme form
