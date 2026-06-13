globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_Cc_OYe2s.mjs";
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead } from "./worker-entry_DfJyFfEK.mjs";
import { $ as $$EmptyLayout } from "./EmptyLayout_CC4PKGhi.mjs";
/* empty css                 */
/* empty css               */
import { $ as $$Footer } from "./Footer_GVC8R8Uq.mjs";
import { $ as $$ProjectsSection } from "./ProjectsSection_BMziSnhZ.mjs";
import { $ as $$Navigation } from "./Navigation_kQTwFikQ.mjs";
const $$Projects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "EmptyLayout", $$EmptyLayout, { "title": "Watt IV – Projects", "description": "Explore the projects and prototypes by Watt IV.", "bodyClass": "projects-page", "data-astro-cid-aid3sr62": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, { "data-astro-cid-aid3sr62": true })} ${maybeRenderHead()}<div class="scroll-container" data-astro-cid-aid3sr62> <!-- Main Content --> ${renderComponent($$result2, "ProjectsSection", $$ProjectsSection, { "enableFilters": true, "asH1": true, "data-astro-cid-aid3sr62": true })} </div> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-aid3sr62": true })} ` })}`;
}, "/Users/paul/Documents/wattiv.nl/WattIV-website-dev/src/pages/projects.astro", void 0);
const $$file = "/Users/paul/Documents/wattiv.nl/WattIV-website-dev/src/pages/projects.astro";
const $$url = "/projects";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Projects,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
