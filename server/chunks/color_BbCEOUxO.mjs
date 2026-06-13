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
const $$Color = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "EmptyLayout", $$EmptyLayout, { "title": "Watt IV - Guidelines", "description": "Guidelines pages", "bodyClass": "guidelines-page" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})} ${maybeRenderHead()}<div class="scroll-container"> <main class="guideline-container"> <div class="guidelines-wrapper"> <a href="/guidelines/" class="back-link">← Back to Dashboard</a> <article class="guideline-page"> <h1>Color</h1> <p>Our palette is Earthy, warm, yet grounded with stark blacks and whites. It reflects a balance between
                organic and industrial.</p> <div class="dashboard-grid" style="grid-template-columns: repeat(3, 1fr); gap: 20px;"> <div class="color-group"> <div class="swatch" style="background-color: var(--primary);"></div> <div class="swatch-meta"><strong>Primary (Red)</strong><br>#be4b2a</div> </div> <div class="color-group"> <div class="swatch" style="background-color: var(--secondary);"></div> <div class="swatch-meta"><strong>Secondary (Teal)</strong><br>#5D8B8B</div> </div> <div class="color-group"> <div class="swatch" style="background-color: var(--tertiary);"></div> <div class="swatch-meta"><strong>Tertiary (Dark Brown)</strong><br>#361E1C</div> </div> <div class="color-group"> <div class="swatch" style="background-color: var(--forest-haze);"></div> <div class="swatch-meta"><strong>Forest Haze (Green)</strong><br>#4A6D56</div> </div> <div class="color-group"> <div class="swatch" style="background-color: var(--surface);"></div> <div class="swatch-meta"><strong>Surface</strong><br>#EBECDC</div> </div> <div class="color-group"> <div class="swatch" style="background-color: var(--background);"></div> <div class="swatch-meta"><strong>Background</strong><br>#fcf6ef</div> </div> </div> </article> </div> </main> </div> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/paul/Documents/wattiv.nl/WattIV-website-dev/src/pages/guidelines/color.astro", void 0);
const $$file = "/Users/paul/Documents/wattiv.nl/WattIV-website-dev/src/pages/guidelines/color.astro";
const $$url = "/guidelines/color";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Color,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
