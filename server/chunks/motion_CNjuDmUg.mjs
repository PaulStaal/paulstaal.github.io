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
const $$Motion = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "EmptyLayout", $$EmptyLayout, { "title": "Watt IV - Guidelines", "description": "Guidelines pages", "bodyClass": "guidelines-page" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})} ${maybeRenderHead()}<div class="scroll-container"> <main class="guideline-container"> <div class="guidelines-wrapper"> <a href="/guidelines/" class="back-link">← Back to Dashboard</a> <article class="guideline-page"> <h1>Motion</h1> <p>Motion at Watt IV is a bridge between digital logic and physical imperfection. We use purposeful,
                intentional movement to guide the narrative.</p> <h2>1. The Stamp Glitch</h2> <p>Our signature transition (used in the logo and footer) mimics a rapid RGB slice. It's used to mask
                changes in content or emphasize high-impact brand moments.</p> <code>animation: snap-slice-top 0.5s linear;</code> <h2>2. Hand-Drawn Tracing</h2> <p>Interactable elements like "Learn More" links use SVG path tracing to mimic a pen drawing on paper. These
                animations often have asymmetrical timings: slow on hover, fast on exit.</p> <code>transition: stroke-dashoffset 2s cubic-bezier(0.19, 1, 0.22, 1);</code> <h2>3. Scroll Interaction</h2> <p>Heavy elements like the "Famous Ideas" sketches draw into view as the user scrolls, controlled by
                IntersectionObservers to save performance and create a sense of discovery.</p> <h2>4. Essential Curves</h2> <p>We avoid standard easing. We prefer "weighty" curves that feel grounded.</p> <code>cubic-bezier(0.175, 0.885, 0.32, 1.275)</code> </article> </div> </main> </div> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/paul/Documents/wattiv.nl/WattIV-website-dev/src/pages/guidelines/motion.astro", void 0);
const $$file = "/Users/paul/Documents/wattiv.nl/WattIV-website-dev/src/pages/guidelines/motion.astro";
const $$url = "/guidelines/motion";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Motion,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
