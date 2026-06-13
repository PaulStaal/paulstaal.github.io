globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_Cc_OYe2s.mjs";
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead, c as addAttribute } from "./worker-entry_DfJyFfEK.mjs";
import { $ as $$EmptyLayout } from "./EmptyLayout_CC4PKGhi.mjs";
import { $ as $$Navigation } from "./Navigation_kQTwFikQ.mjs";
import { $ as $$Footer } from "./Footer_GVC8R8Uq.mjs";
/* empty css               */
/* empty css                 */
const $$Components = createComponent(($$result, $$props, $$slots) => {
  const componentModules = /* @__PURE__ */ Object.assign({ "../../components/ArtifactSticker.astro": () => import("./ArtifactSticker_DF28n-ex.mjs").then((n) => n._), "../../components/ComparisonSlider.astro": () => import("./ComparisonSlider_BBSxPayG.mjs").then((n) => n._), "../../components/DevMenu.astro": () => import("./EmptyLayout_CC4PKGhi.mjs").then((n) => n._), "../../components/Footer.astro": () => import("./Footer_GVC8R8Uq.mjs").then((n) => n._), "../../components/Navigation.astro": () => import("./Navigation_kQTwFikQ.mjs").then((n) => n._), "../../components/PressCoverage.astro": () => import("./PressCoverage_GgkvuWQF.mjs").then((n) => n._), "../../components/ProjectsSection.astro": () => import("./ProjectsSection_BMziSnhZ.mjs").then((n) => n._), "../../components/SignupForm.astro": () => import("./SignupForm_Bnnms4Xg.mjs").then((n) => n._), "../../components/TableOfContents.astro": () => import("./TableOfContents_CdcniSuK.mjs").then((n) => n._), "../../components/Timeline.astro": () => import("./Timeline_ChgZblDE.mjs").then((n) => n._) });
  const components = Object.keys(componentModules).map((filePath) => {
    const filename = filePath.split("/").pop() || "";
    const name = filename.replace(".astro", "");
    return { name, filename };
  });
  return renderTemplate`${renderComponent($$result, "EmptyLayout", $$EmptyLayout, { "title": "Watt IV - Components", "description": "Guidelines pages", "bodyClass": "guidelines-page" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})} ${maybeRenderHead()}<div class="scroll-container"> <main class="guideline-container"> <div class="guidelines-wrapper"> <a href="/guidelines/" class="back-link">← Back to Dashboard</a> <header class="guidelines-header"> <h1>Component Library</h1> <p>An active listing of our modular workspace. Select any component to view its descriptions, options, and live preview rendering endpoints.</p> </header> <!-- Card Grid Layout following dashboard --> <div class="dashboard-grid"> ${components.map((comp) => renderTemplate`<a${addAttribute(`/guidelines/components/${comp.name}`, "href")} class="card component-card"> <div class="card-content"> <h2>${comp.name}</h2> <div class="visual-placeholder"> <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" style="opacity: 0.2"> <path d="M12 2L2 7l10 5 10-5-10-5zM2 12l10 5 10-5M2 17l10 5 10-5"></path> </svg> </div> </div> </a>`)} </div> </div> </main> </div> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/paul/Documents/wattiv.nl/WattIV-website-dev/src/pages/guidelines/components.astro", void 0);
const $$file = "/Users/paul/Documents/wattiv.nl/WattIV-website-dev/src/pages/guidelines/components.astro";
const $$url = "/guidelines/components";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Components,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
