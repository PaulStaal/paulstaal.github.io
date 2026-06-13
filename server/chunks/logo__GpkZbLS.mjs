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
const $$Logo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "EmptyLayout", $$EmptyLayout, { "title": "Watt IV - Guidelines", "description": "Guidelines pages", "bodyClass": "guidelines-page" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})} ${maybeRenderHead()}<div class="scroll-container"> <main class="guideline-container"> <div class="guidelines-wrapper"> <a href="/guidelines/" class="back-link">← Back to Dashboard</a> <article class="guideline-page"> <h1>Logo</h1> <p>The Watt IV logo represents the intersection of digital and physical craftsmanship. It should be used
                with respect to its geometry and spacing.</p> <h2>Primary Logo</h2> <div style="background: var(--surface); padding: 50px; display: flex; justify-content: center; align-items: center; border-radius: 8px;"> <svg width="150" height="150" viewBox="0 0 91.41 55.405"> <path d="m65.73 54.103 25.345-43.9a2.5 2.5 0 0 0-.915-3.414L78.982.335a2.5 2.5 0 0 0-3.415.915L60.17 27.916a1 1 0 0 1-1.732 0l-5.108-8.849a5 5 0 0 0-4.33-2.5H35.54a2.5 2.5 0 0 0-2.166 3.75l14.912 25.83a5 5 0 0 0 1.83 1.83l12.197 7.041a2.5 2.5 0 0 0 3.415-.915zM41.19 45.2 15.843 1.302a2.5 2.5 0 0 0-3.415-.915L1.25 6.84a2.5 2.5 0 0 0-.915 3.415l25.345 43.9a2.5 2.5 0 0 0 3.415.915l11.18-6.454a2.5 2.5 0 0 0 .914-3.415z" fill="var(--text)"></path> </svg> </div> <h2>Clearspace</h2> <p>Ensure a minimum clearance around the logo equivalent to 50% of the logo's height.</p> <h2>Usage</h2> <p>Do not rotate, skew, or apply gradients to the logo mark unless specified in the motion guidelines.</p> </article> </div> </main> </div> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/paul/Documents/wattiv.nl/WattIV-website-dev/src/pages/guidelines/logo.astro", void 0);
const $$file = "/Users/paul/Documents/wattiv.nl/WattIV-website-dev/src/pages/guidelines/logo.astro";
const $$url = "/guidelines/logo";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Logo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
