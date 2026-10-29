// Secure proxy: keeps your Gemini API key on the server so visitors never see it.
// Set GEMINI_API_KEY in Netlify: Site settings > Environment variables.

const MODEL = "gemini-3.8-flash";
const MAX_BODY = 6 * 1024 * 1024; // Netlify's request limit is about 6 MB

const reply = (statusCode, obj) => ({
  statusCode,
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(obj),
});

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return reply(405, { error: { message: "Method not allowed" } });
  }
  const key = process.env.GEMINI_API_KEY;
  if (!key) {
    return reply(500, { error: { message: "Server API key is not configured." } });
  }
  if ((event.body || "").length > MAX_BODY) {
    return reply(413, { error: { message: "File is too large. Please use a smaller photo." } });
  }

  let payload;
  try {
    payload = JSON.parse(event.body);
  } catch (e) {
    return reply(400, { error: { message: "Invalid request." } });
  }

  // Only forward what we expect, so the proxy cannot be used for anything else.
  const body = {
    contents: payload.contents,
    generationConfig: payload.generationConfig,
  };

  try {
    const r = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-goog-api-key": key },
        body: JSON.stringify(body),
      }
    );
    const text = await r.text();
    return { statusCode: r.status, headers: { "Content-Type": "application/json" }, body: text };
  } catch (e) {
    return reply(502, { error: { message: "Could not reach the AI service." } });
  }
};
