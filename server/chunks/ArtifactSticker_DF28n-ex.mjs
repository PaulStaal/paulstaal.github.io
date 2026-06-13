globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_Cc_OYe2s.mjs";
import { m as maybeRenderHead, c as addAttribute, b as renderTemplate } from "./worker-entry_DfJyFfEK.mjs";
const $$ArtifactSticker = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ArtifactSticker;
  const { src, alt, rotation = "-3deg", width = "220px", hasTape = true } = Astro2.props;
  const uid = Math.random().toString(36).substring(2, 9);
  const filterId = `sticker-shadow-${uid}`;
  return renderTemplate`${maybeRenderHead()}<div class="artifact-sticker-container"${addAttribute(`--rotation: ${rotation}; --width: ${width};`, "style")} data-astro-cid-3c37zu67> ${hasTape && renderTemplate`<div class="archival-tape" data-astro-cid-3c37zu67></div>`} <svg width="0" height="0" style="position: absolute; pointer-events: none;" data-astro-cid-3c37zu67> <filter${addAttribute(filterId, "id")} x="-50%" y="-50%" width="200%" height="200%" data-astro-cid-3c37zu67> <feMorphology in="SourceAlpha" operator="dilate" radius="4" result="DILATED" data-astro-cid-3c37zu67></feMorphology> <feFlood flood-color="white" flood-opacity="1" result="WHITE_FLOOD" data-astro-cid-3c37zu67></feFlood> <feComposite in="WHITE_FLOOD" in2="DILATED" operator="in" result="WHITE_BORDER" data-astro-cid-3c37zu67></feComposite> <feGaussianBlur in="DILATED" stdDeviation="6" result="SHADOW_BLUR" data-astro-cid-3c37zu67></feGaussianBlur> <feOffset in="SHADOW_BLUR" dx="0" dy="8" result="SHADOW_OFFSET" data-astro-cid-3c37zu67></feOffset> <feFlood flood-color="black" flood-opacity="0.3" result="SHADOW_COLOR" data-astro-cid-3c37zu67></feFlood> <feComposite in="SHADOW_COLOR" in2="SHADOW_OFFSET" operator="in" result="SHADOW_FINAL" data-astro-cid-3c37zu67></feComposite> <feMerge data-astro-cid-3c37zu67> <feMergeNode in="SHADOW_FINAL" data-astro-cid-3c37zu67></feMergeNode> <feMergeNode in="WHITE_BORDER" data-astro-cid-3c37zu67></feMergeNode> <feMergeNode in="SourceGraphic" data-astro-cid-3c37zu67></feMergeNode> </feMerge> </filter> </svg> <img${addAttribute(src, "src")}${addAttribute(alt, "alt")}${addAttribute(`filter: url(#${filterId});`, "style")} data-astro-cid-3c37zu67> </div>`;
}, "/Users/paul/Documents/wattiv.nl/WattIV-website-dev/src/components/ArtifactSticker.astro", void 0);
const $$file = "/Users/paul/Documents/wattiv.nl/WattIV-website-dev/src/components/ArtifactSticker.astro";
const $$url = void 0;
const __vite_glob_1_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$ArtifactSticker,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
export {
  $$ArtifactSticker as $,
  __vite_glob_1_0 as _
};
