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
const $$Iconography = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "EmptyLayout", $$EmptyLayout, { "title": "Watt IV - Guidelines", "description": "Guidelines pages", "bodyClass": "guidelines-page" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})} ${maybeRenderHead()}<div class="scroll-container"> <main class="guideline-container"> <div class="guidelines-wrapper"> <a href="/guidelines/" class="back-link">← Back to Dashboard</a> <article class="guideline-page"> <h1>Iconography</h1> <p>Our icons are lean, technical, and unobtrusive. We use a thin-stroke (1.2px) aesthetic that mimics
                architectural drawings and blueprint symbols.</p> <h2>Style Standards</h2> <ul> <li><strong>Stroke Weight:</strong> 1.2px (Standard) or 2px (Emphasis)</li> <li><strong>Color:</strong> Primary (C44324) for actions, Secondary (A0B5CB) for data.</li> <li><strong>Corner:</strong> Square for technical accuracy, subtly rounded for UI friendliness.</li> </ul> <div class="icon-grid"> <!-- Data --> <div class="icon-item" style="color: var(--secondary);"> <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"> <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5z"></path> <path d="M8 7h6"></path> <path d="M8 11h8"></path> <path d="M8 15h6"></path> </svg> </div> <!-- Logic --> <div class="icon-item" style="color: var(--quaternary);"> <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"> <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline> </svg> </div> <!-- Hardware --> <div class="icon-item" style="color: var(--primary);"> <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"> <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path> </svg> </div> </div> </article> </div> </main> </div> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/paul/Documents/wattiv.nl/WattIV-website-dev/src/pages/guidelines/iconography.astro", void 0);
const $$file = "/Users/paul/Documents/wattiv.nl/WattIV-website-dev/src/pages/guidelines/iconography.astro";
const $$url = "/guidelines/iconography";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Iconography,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
