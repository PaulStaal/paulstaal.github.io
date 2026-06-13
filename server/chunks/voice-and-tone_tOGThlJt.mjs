globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_Cc_OYe2s.mjs";
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead } from "./worker-entry_DfJyFfEK.mjs";
import { $ as $$EmptyLayout } from "./EmptyLayout_CC4PKGhi.mjs";
import { $ as $$Navigation } from "./Navigation_kQTwFikQ.mjs";
import { $ as $$Footer } from "./Footer_GVC8R8Uq.mjs";
/* empty css               */
/* empty css                 */
/* empty css                     */
const $$VoiceAndTone = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "EmptyLayout", $$EmptyLayout, { "title": "Watt IV - Guidelines", "description": "Guidelines pages", "bodyClass": "guidelines-page" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})} ${maybeRenderHead()}<div class="scroll-container"> <main class="guideline-container"> <div class="guidelines-wrapper"> <a href="/guidelines/" class="back-link">← Back to Dashboard</a> <article class="guideline-page"> <h1>Voice & Tone</h1> <p>Our voice is innovative, curious, and human. We bridge the gap between technical precision and creative
                expression.</p> <h2>The "Funk" in Functional</h2> <p>We believe technology shouldn't just work; it should delight. Our tone reflects this by being
                professional yet playful, technical yet accessible.</p> <h2>Key Attributes</h2> <ul> <li><strong>Curious:</strong> Always asking "what if?"</li> <li><strong>Crafted:</strong> Attention to detail in every word.</li> <li><strong>Human:</strong> Technical concepts explained for people.</li> </ul> <h2>Examples</h2> <div style="background: var(--surface); padding: 20px; border-radius: 4px; margin: 20px 0;"> <p><em>"Putting the funk back in functional"</em></p> <p><em>"Imagine the possibilities"</em></p> <p><em>"All great ideas started with a blank canvas..."</em></p> </div> </article> </div> </main> </div> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/paul/Documents/wattiv.nl/WattIV-website-dev/src/pages/guidelines/voice-and-tone.astro", void 0);
const $$file = "/Users/paul/Documents/wattiv.nl/WattIV-website-dev/src/pages/guidelines/voice-and-tone.astro";
const $$url = "/guidelines/voice-and-tone";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$VoiceAndTone,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
