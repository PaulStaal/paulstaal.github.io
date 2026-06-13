globalThis.process ??= {};
globalThis.process.env ??= {};
const prerender = false;
async function POST({ request }) {
  try {
    const { email } = await request.json();
    if (!email || !email.includes("@")) {
      return new Response(JSON.stringify({ error: "Invalid email" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const res = await fetch(
      `https://api.resend.com/audiences/${"225e9584-b7a0-4884-8ec1-817d9186e110"}/contacts`,
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${"re_XB7Pw4DT_4YUZuhT816ejNYghdYv9mVv9"}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, unsubscribed: false })
      }
    );
    if (!res.ok) {
      const errorData = await res.json();
      console.error("Resend error:", errorData);
      return new Response(JSON.stringify({ error: "Failed to subscribe" }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    console.error("Subscription exception:", err);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
