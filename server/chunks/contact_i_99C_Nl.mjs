globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_KNe951u6.mjs";
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead } from "./worker-entry_BvOOjRSE.mjs";
import { $ as $$EmptyLayout } from "./EmptyLayout_B-w9CryG.mjs";
/* empty css                 */
import { $ as $$Navigation } from "./Navigation_CuXaFptD.mjs";
import { $ as $$Footer } from "./Footer_DeQQDIvF.mjs";
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "EmptyLayout", $$EmptyLayout, { "title": "Watt IV – Contact", "description": "State your breakthrough. Connect with the Watt IV studio.", "bodyClass": "projects-page contact-page" }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Navigation", $$Navigation, {})} ${maybeRenderHead()}<div class="scroll-container"> <main class="contact-content"> <header> <h1>Let's talk.</h1> <p>
A question, a collaboration, or just a hello — I'm all ears. <br> Curiosity is always welcome
                    here.
</p> </header> <form action="https://formspree.io/f/xykdyvqa" method="POST"> <div class="form-group"> <label for="email">Your Email</label> <input type="email" id="email" name="email" required placeholder="human@example.com"> </div> <div class="form-group"> <label for="message">What if...?</label> <textarea id="message" name="message" required rows="5" placeholder="Share your thoughts, questions, or ideas."></textarea> </div> <button type="submit" class="button-reveal" style="--reveal-content: '→'; --reveal-size: 1.5rem;">
Send it
</button> </form> </main> </div> ${renderComponent($$result2, "Footer", $$Footer, {})} `, "head": ($$result2) => renderTemplate`<fragment> <link rel="icon" type="image/svg+xml" href="/images/favicon.svg"> <link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet"> </fragment>` })}`;
}, "/Users/paul/Documents/wattiv.nl/WattIV-website-dev/src/pages/contact.astro", void 0);
const $$file = "/Users/paul/Documents/wattiv.nl/WattIV-website-dev/src/pages/contact.astro";
const $$url = "/contact";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
