globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_Cc_OYe2s.mjs";
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead, c as addAttribute } from "./worker-entry_DfJyFfEK.mjs";
import { $ as $$EmptyLayout } from "./EmptyLayout_CC4PKGhi.mjs";
/* empty css                 */
import { $ as $$Navigation } from "./Navigation_kQTwFikQ.mjs";
import { $ as $$Footer } from "./Footer_GVC8R8Uq.mjs";
const $$ButtonAnimations = createComponent(($$result, $$props, $$slots) => {
  const animations = [
    { title: "Elevate", class: "anim-elevate", code: ".anim-elevate" },
    { title: "Shine", class: "anim-shine", code: ".anim-shine" },
    { title: "Fill Right", class: "anim-fill-right", code: ".anim-fill-right" },
    { title: "Fill Up", class: "anim-fill-up", code: ".anim-fill-up" },
    { title: "Ghost", class: "anim-ghost", code: ".anim-ghost" },
    { title: "Letter Spacing", class: "anim-spacing", code: ".anim-spacing" },
    { title: "Pulse", class: "anim-pulse", code: ".anim-pulse" },
    { title: "Skew", class: "anim-skew", code: ".anim-skew" },
    { title: "Border Draw", class: "anim-border-draw", code: ".anim-border-draw" },
    { title: "Jelly", class: "anim-jelly", code: ".anim-jelly" },
    { title: "Liquid", class: "anim-liquid", code: ".anim-liquid" },
    { title: "Glitch", class: "anim-glitch", code: ".anim-glitch", dataText: "Glitch" },
    { title: "Neon", class: "anim-neon", code: ".anim-neon" },
    { title: "3D Press", class: "anim-press", code: ".anim-press" },
    { title: "Reveal Icon", class: "button-reveal", code: ".button-reveal" },
    { title: "Double Border", class: "anim-double-border", code: ".anim-double-border" },
    { title: "Grayscale", class: "anim-grayscale", code: ".anim-grayscale" },
    { title: "Ripple", class: "anim-ripple", code: ".anim-ripple" },
    { title: "Magnetic Sim", class: "anim-magnetic", code: ".anim-magnetic" },
    { title: "Glassmorphism", class: "anim-glass", code: ".anim-glass" }
  ];
  return renderTemplate`${renderComponent($$result, "EmptyLayout", $$EmptyLayout, { "title": "Button Animations Test - Watt IV", "description": "A showcase of 20 different hover animations for buttons.", "data-astro-cid-e5g25m25": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, { "data-astro-cid-e5g25m25": true })} ${maybeRenderHead()}<main data-astro-cid-e5g25m25> <header class="test-header" data-astro-cid-e5g25m25> <h1 data-astro-cid-e5g25m25>Button Animations</h1> <p data-astro-cid-e5g25m25>A collection of 20 unique hover effects for the <code data-astro-cid-e5g25m25>.button</code> component.</p> </header> <div class="test-grid" data-astro-cid-e5g25m25> ${animations.map((anim) => renderTemplate`<div class="button-card" data-astro-cid-e5g25m25> <button${addAttribute(`button ${anim.class}`, "class")}${addAttribute(anim.dataText || anim.title, "data-text")} data-astro-cid-e5g25m25> <span data-astro-cid-e5g25m25>${anim.title}</span> </button> <code data-astro-cid-e5g25m25>${anim.code}</code> </div>`)} </div> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-e5g25m25": true })} ` })}`;
}, "/Users/paul/Documents/wattiv.nl/WattIV-website-dev/src/pages/tests/button-animations.astro", void 0);
const $$file = "/Users/paul/Documents/wattiv.nl/WattIV-website-dev/src/pages/tests/button-animations.astro";
const $$url = "/tests/button-animations";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$ButtonAnimations,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
