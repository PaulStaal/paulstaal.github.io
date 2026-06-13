globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_KNe951u6.mjs";
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead } from "./worker-entry_BvOOjRSE.mjs";
import { $ as $$EmptyLayout } from "./EmptyLayout_B-w9CryG.mjs";
import { $ as $$Navigation } from "./Navigation_CuXaFptD.mjs";
import { $ as $$Footer } from "./Footer_DeQQDIvF.mjs";
/* empty css               */
/* empty css                 */
/* empty css                     */
const $$Framework = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "EmptyLayout", $$EmptyLayout, { "title": "Watt IV - Guidelines", "description": "Guidelines pages", "bodyClass": "guidelines-page" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})} ${maybeRenderHead()}<div class="scroll-container"> <main class="guideline-container"> <div class="guidelines-wrapper"> <a href="/guidelines/" class="back-link">← Back to Dashboard</a> <article class="guideline-page"> <h1>Framework</h1> <p>The Watt IV framework is built on a responsive 12-column grid that allows for flexible and dynamic
                layouts. It emphasizes whitespace, alignment, and a clear hierarchy.</p> <h2>Grid System</h2> <p>We use a standard 12-column grid with a 20px gap. This structure supports both structured information
                density and expressive, asymmetrical layouts.</p> <ul> <li><strong>Max Width:</strong> 1200px</li> <li><strong>Columns:</strong> 12</li> <li><strong>Gap:</strong> 20px</li> <li><strong>Padding:</strong> 50px</li> </ul> <h2>Layout Principles</h2> <p>Our layouts are designed to guide the eye through "scrollytelling" narratives. Sections snap to focus,
                allowing each idea to inhabit its own space.</p> </article> </div> </main> </div> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/paul/Documents/wattiv.nl/WattIV-website-dev/src/pages/guidelines/framework.astro", void 0);
const $$file = "/Users/paul/Documents/wattiv.nl/WattIV-website-dev/src/pages/guidelines/framework.astro";
const $$url = "/guidelines/framework";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Framework,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
