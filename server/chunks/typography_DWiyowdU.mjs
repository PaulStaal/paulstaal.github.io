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
const $$Typography = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "EmptyLayout", $$EmptyLayout, { "title": "Watt IV - Guidelines", "description": "Guidelines pages", "bodyClass": "guidelines-page" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})} ${maybeRenderHead()}<div class="scroll-container"> <main class="guideline-container"> <div class="guidelines-wrapper"> <a href="/guidelines/" class="back-link">← Back to Dashboard</a> <article class="guideline-page"> <h1>Typography</h1> <p>Our typography pairs the elegance of a serif with the utilitarian nature of a monospace font, creating a
                unique tension between classic design and engineering.</p> <h2>Primary Headings</h2> <div class="type-preview"> <span class="type-name">Instrument Serif</span> <span style="font-family: 'Instrument Serif', serif; font-size: 4rem; line-height: 1.1;">All great ideas
                    started with a blank canvas...</span> </div> <h2>Body Copy & Technical Data</h2> <div class="type-preview"> <span class="type-name">OGcourier</span> <span style="font-family: 'OGcourier', Courier, monospace; font-size: 1.125rem;">The quick brown fox
                    jumps over the lazy dog. 1234567890</span> </div> <h2>Handwritten Notes</h2> <div class="type-preview"> <span class="type-name">PS Regular (Custom)</span> <span style="font-family: 'PS_regular', cursive; font-size: 2rem;">Personal touch</span> </div> </article> </div> </main> </div> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/paul/Documents/wattiv.nl/WattIV-website-dev/src/pages/guidelines/typography.astro", void 0);
const $$file = "/Users/paul/Documents/wattiv.nl/WattIV-website-dev/src/pages/guidelines/typography.astro";
const $$url = "/guidelines/typography";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Typography,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
