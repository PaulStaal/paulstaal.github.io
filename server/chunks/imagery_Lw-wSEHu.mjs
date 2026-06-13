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
const $$Imagery = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "EmptyLayout", $$EmptyLayout, { "title": "Watt IV - Guidelines", "description": "Guidelines pages", "bodyClass": "guidelines-page" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})} ${maybeRenderHead()}<div class="scroll-container"> <main class="guideline-container"> <div class="guidelines-wrapper"> <a href="/guidelines/" class="back-link">← Back to Dashboard</a> <article class="guideline-page"> <h1>Imagery</h1> <p>Imagery defines the mood of the brand. We use a mix of classic art references (like Van Gogh) and modern,
                clean product photography or symbolic illustrations.</p> <h2>Collage & Parallax</h2> <p>Images should feel dimensional. We often use parallax effects to give depth to static images, creating a
                "window" into another world.</p> <img src="/images/Gogh_starry.png" alt="Van Gogh Starry Night collage" style="width: 100%; height: 350px; object-fit: cover; border-radius: 12px; margin: 20px 0; border: 1px solid rgba(0,0,0,0.1); box-shadow: 0 10px 30px rgba(0,0,0,0.05);"> <h2>Treatment</h2> <p>Images often feature rounded corners (25px) and subtle drop shadows to lift them off the background.</p> </article> </div> </main> </div> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/paul/Documents/wattiv.nl/WattIV-website-dev/src/pages/guidelines/imagery.astro", void 0);
const $$file = "/Users/paul/Documents/wattiv.nl/WattIV-website-dev/src/pages/guidelines/imagery.astro";
const $$url = "/guidelines/imagery";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Imagery,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
