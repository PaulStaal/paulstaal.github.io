globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_KNe951u6.mjs";
import { m as maybeRenderHead, b as renderTemplate, c as addAttribute } from "./worker-entry_BvOOjRSE.mjs";
const $$PressCoverage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$PressCoverage;
  const { items = [], title } = Astro2.props;
  return renderTemplate`${items.length > 0 && renderTemplate`${maybeRenderHead()}<section class="press-section" data-astro-cid-43q2awro><div class="press-content" data-astro-cid-43q2awro>${title && renderTemplate`<h2 class="press-title" data-astro-cid-43q2awro>${title}</h2>`}<div class="news-cards-container" data-astro-cid-43q2awro><div class="news-cards-track" data-astro-cid-43q2awro>${items.map((item) => renderTemplate`<a${addAttribute(item.link || "#", "href")}${addAttribute(`news-card${item.imageSrc ? " news-card--wide" : ""}`, "class")} target="_blank" rel="noopener noreferrer" data-astro-cid-43q2awro><div class="news-card-body" data-astro-cid-43q2awro><div class="news-logo" data-astro-cid-43q2awro><img${addAttribute(item.logoSrc, "src")} class="brand-logo-wide" loading="lazy"${addAttribute(`${item.outlet} Logo`, "alt")} onerror="this.style.display='none'; this.nextElementSibling.style.display='block';" data-astro-cid-43q2awro><span class="brand-text" style="display:none;" data-astro-cid-43q2awro>${item.outlet}</span></div>${item.subtitle && renderTemplate`<p class="news-subtitle" data-astro-cid-43q2awro>${item.subtitle}</p>`}<p class="news-quote" data-astro-cid-43q2awro>"${item.headline}"</p><span class="news-read" data-astro-cid-43q2awro>Read article &rarr;</span></div>${item.imageSrc && renderTemplate`<div class="news-card-image" data-astro-cid-43q2awro><img${addAttribute(item.imageSrc, "src")}${addAttribute(`${item.outlet} featured image`, "alt")} loading="lazy" data-astro-cid-43q2awro></div>`}</a>`)}</div></div></div></section>`}`;
}, "/Users/paul/Documents/wattiv.nl/WattIV-website-dev/src/components/PressCoverage.astro", void 0);
const $$file = "/Users/paul/Documents/wattiv.nl/WattIV-website-dev/src/components/PressCoverage.astro";
const $$url = void 0;
const __vite_glob_1_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$PressCoverage,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
export {
  $$PressCoverage as $,
  __vite_glob_1_5 as _
};
