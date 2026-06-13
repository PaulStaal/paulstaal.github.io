globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_KNe951u6.mjs";
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead } from "./worker-entry_BvOOjRSE.mjs";
import { $ as $$EmptyLayout } from "./EmptyLayout_B-w9CryG.mjs";
/* empty css                 */
/* empty css               */
import { $ as $$Navigation } from "./Navigation_CuXaFptD.mjs";
import { $ as $$Footer } from "./Footer_DeQQDIvF.mjs";
const $$Privacy = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "EmptyLayout", $$EmptyLayout, { "title": "Watt IV – Privacy", "description": "Privacy at Watt IV innovation studio. Intention over Intrusion.", "bodyClass": "projects-page privacy-page" }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Navigation", $$Navigation, {})} ${maybeRenderHead()}<div class="scroll-container"> <main class="privacy-content"> <header> <h1>Intention over Intrusion.</h1> <p>
Zero cookies. Zero noise. <span>Just breakthroughs.</span> </p> </header> <section class="policy-section"> <!-- The "Electric Cookies" Cereal Box Graphic --> <div class="image-wrapper"> <img src="/images/Cookies.png" alt="Watt IV Electric Cookies - Now Cookie-Free!"> </div> <!-- The Policy Text --> <div class="policy-text"> <p>
At Watt IV, we value your privacy as much as your curiosity. We find digital cookies
                        hard to digest, so we've removed them from the menu entirely.
</p> <div class="policy-box"> <p> <strong>1. Cookie-less Analytics</strong> <br>We use Google Analytics in "Goldfish Mode." No tracking data is stored on
                            your device, and we don't know who you are.
</p> <p> <strong>2. Anonymized Data</strong> <br>We only track aggregate interactions (like model rotations) to see what
                            sparks interest.
</p> <p> <strong>3. Private by Default</strong> <br>No banner, no opt-out needed. You are private from the second you arrive.
</p> </div> <p>Enjoy the site without the extra crumbs.</p> <p class="disclaimer">
P.S. For our store we are working with a partner, so unfortunately we cannot avoid a
                        cookie banner there, but feel free to reject all cookies.
</p> </div> </section> </main> </div> ${renderComponent($$result2, "Footer", $$Footer, {})} `, "head": ($$result2) => renderTemplate`<fragment> <link rel="icon" type="image/svg+xml" href="/images/favicon.svg"> <link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet"> </fragment>` })}`;
}, "/Users/paul/Documents/wattiv.nl/WattIV-website-dev/src/pages/privacy.astro", void 0);
const $$file = "/Users/paul/Documents/wattiv.nl/WattIV-website-dev/src/pages/privacy.astro";
const $$url = "/privacy";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Privacy,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
