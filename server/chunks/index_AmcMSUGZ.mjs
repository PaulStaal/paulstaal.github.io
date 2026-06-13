globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_KNe951u6.mjs";
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead } from "./worker-entry_BvOOjRSE.mjs";
import { $ as $$EmptyLayout } from "./EmptyLayout_B-w9CryG.mjs";
/* empty css                 */
/* empty css               */
import { $ as $$Footer } from "./Footer_DeQQDIvF.mjs";
import { $ as $$ProjectsSection } from "./ProjectsSection_DWl-mqiU.mjs";
import { $ as $$Navigation } from "./Navigation_CuXaFptD.mjs";
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "EmptyLayout", $$EmptyLayout, { "title": "Watt IV", "description": "Portfolio of Watt IV, a creative technologist and innovator specializing in digital and physical prototypes, custom electronic solutions, and interactive experiences.", "bodyClass": "homepage" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(["  ", " ", `<div class="scroll-container"> <!-- Hero Section --> <!-- Famous Ideas Content Sections --> <div class="famous_ideas-container"> <!-- Hero Section as first card --> <section class="hero hero_intro famous_ideas"> <div class="famous_ideas_content hero_content_wrapper"> <p class="huge"> <span style="--n:72" class="newtype">Every breakthrough begins with a blank canvas and a spark of curiosity...</span> </p> <a href="#van_gogh" class="arrow_down"><svg xmlns="http://www.w3.org/2000/svg" fill="none" transform="rotate(270)" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m15 7-5 5 5 5"></path></svg></a> </div> </section> <section class="famous_ideas" id="van_gogh"> <div class="famous_ideas_content"> <div class="image"> <img src="/images/final_gogh_empty.png" class="image-empty" alt="Van Gogh empty sketch"> <img src="/images/final_gogh_sketch.png" class="image-sketch" alt="Van Gogh masterpiece sketch"> </div> <p class="text">...transforming a vision into a masterpiece...</p> </div> </section> <section class="famous_ideas"> <div class="famous_ideas_content"> <div class="image"> <img src="/images/final_darwin_empty.png" class="image-empty" alt="Darwin empty sketch"> <img src="/images/final_darwin_sketch.png" class="image-sketch" alt="Darwin theory sketch"> </div> <p class="text">...evolving a simple observation into a new reality...</p> </div> </section> <section class="famous_ideas"> <div class="famous_ideas_content"> <div class="image"> <img src="/images/final_jobs_empty.png" class="image-empty" alt="Jobs empty sketch"> <img src="/images/final_jobs_sketch.png" class="image-sketch" alt="Jobs device sketch"> </div> <p class="text">...shaping the magic we didn't know we needed.</p> </div> </section> </div> <!-- Final Logo Section --> <section class="hero hero2 hero_logo" id="hero_logo"> <div class="payoff-container"> <!-- <div class="final-logo-wrapper">
                    <svg
                        class="logo final-logo"
                        xmlns="http://www.w3.org/2000/svg"
                        xml:space="preserve"
                        style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"
                        viewBox="0 0 582 357"
                    >
                        <path
                            d="m209.399 134.03-1.16-2.051-1.02-2.067-.421-1.056-.341-1.08-.247-1.11-.136-1.102-.025-1.022.066-.942.137-.863.191-.792.531-1.482.702-1.349.865-1.238.571-.659.688-.671.814-.657.939-.61.972-.496.97-.381.957-.283.935-.203 1.892-.241 1.941-.089 1.989-.013h99.122l1.795.004 1.718.029 1.648.079 1.582.153 1.523.252 1.469.377 1.401.517 1.309.658 1.226.806 1.152.958 1.059 1.083.979 1.192.923 1.293.891 1.386.883 1.472.9 1.55 22.153 38.369 1.197 2.03 1.28 1.917.704.892.765.836.838.769.886.668.873.532.849.414.816.313.781.231 1.549.281 1.519.067 1.504-.13.856-.165.925-.26.975-.376.998-.508.915-.594.815-.65.724-.687.644-.708 1.155-1.518 1.048-1.637 1.005-1.716L475.374 9.927l1.666-2.802.871-1.312.932-1.231 1.022-1.137.584-.556.655-.548.729-.526.807-.489.889-.437.941-.359.966-.268.988-.176 1.005-.084.997.008.955.09.91-.158 1.674.463 1.566.613 1.546.743 3.114 1.735 73.355 42.352 2.802 1.666 1.312.871 1.231.932 1.137 1.022.556.584.548.655.526.729.489.807.437.889.359.941.268.966.176.988.084 1.005-.008.997-.09.955-.158.91-.463 1.674-.613 1.566-.743 1.546-1.735 3.114L417.2 346.908l-1.666 2.802-.871 1.312-.932 1.231-1.022 1.137-.584.556-.655.548-.729.526-.807.489-.889.437-.941.359-.966.268-.988.176-1.005.084-.997-.008-.955-.09-.91-.158-1.674-.463-1.566-.613-1.546-.743-3.114-1.735-77.231-44.59-2.983-1.74-1.34-.814-1.251-.802-1.173-.808-1.104-.833-1.045-.876-.996-.938-.938-.996-.876-1.045-.833-1.104-.808-1.173-.802-1.251-.814-1.34-1.74-2.983L209.4 134.029ZM266.562 287.855l1.594 2.844.7 1.41.6 1.422.473 1.453.189.784.147.841.091.895.02.944-.066.988-.16.994-.251.971-.341.944-.43.913-.505.86-.555.782-.591.709-1.238 1.219-1.314 1.049-1.416.967-3.06 1.83-73.355 42.352-2.844 1.594-1.41.7-1.422.6-1.453.473-.784.189-.841.147-.895.091-.944.02-.988-.066-.994-.16-.971-.251-.944-.341-.913-.43-.86-.505-.782-.555-.709-.591-1.219-1.238-1.049-1.314-.967-1.416-1.83-3.06L3.814 68.986 2.22 66.142l-.7-1.41-.6-1.422-.473-1.453-.189-.784-.147-.841-.091-.895-.02-.944.066-.988.16-.994.251-.971.341-.944.43-.913.505-.86.555-.782.591-.709 1.238-1.219 1.314-1.049 1.416-.967 3.06-1.83L83.282 3.815l2.844-1.594 1.41-.7 1.422-.6 1.453-.473.784-.189.841-.147.895-.091.944-.02.988.066.994.16.971.251.944.341.913.43.86.505.782.555.709.591 1.219 1.238 1.049 1.314.967 1.416 1.83 3.06 160.461 277.927Z"
                            style="fill-rule:nonzero"></path>
                    </svg>
                </div> --> <p class="huge"> <span style="--n:54" class="newtype payoff"><span class="glitch-effect" data-text="Watt IV:"><span data-text="Watt IV:">&nbsp;What if</span></span> <span class="payoff-text">we could create the next breakthrough together?</span></span> </p> <div class="buttons"> <a href="/projects" class="button button-outline">See my work</a> <a href="/contact" class="button button-reveal">Say hello</a> </div> </div> </section> `, ` <!-- Lab Notes Section --> <!-- <section class="hero lab-notes" id="lab-notes">
            <div class="content">
                <h2>Lab Notes</h2>
                <p>
                    A "Side-B" feed of <span class="has-annotation"
                        >small experiments<span class="annotation right"
                            >Sometimes the best ideas start small</span
                        ></span
                    >, curious observations, and unfinished thoughts.
                </p>
            </div>
            <div class="curiosity-feed">
                <div class="feed-item">
                    <span class="date">Jan 20, 2026</span>
                    <h3>What if a lamp reacted to the mood of the music?</h3>
                    <p>Exploring MIDI-to-DMX scripts for ambient lighting.</p>
                    <div
                        style="height: 200px; background: rgba(0,0,0,0.05); border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-top: 20px;"
                    >
                        <span
                            style- "font-size: 0.7rem; opacity: 0.4;"
                            >[ 3D Prototype Placeholder ]</span
                        >
                    </div>
                </div>
                <div class="feed-item">
                    <span class="date">Jan 15, 2026</span>
                    <h3>The physics of a perfect "click".</h3>
                    <p>
                        Analyzing force curves of vintage mechanical switches.
                    </p>
                </div>
                <div class="feed-item">
                    <span class="date">Jan 08, 2026</span>
                    <h3>Generative art from CPU temperature.</h3>
                    <p>Turning system heat into visual landscapes.</p>
                </div>
            </div>
        </section> --> <!-- About Section --> <section class="hero about" id="about"> <h2>Watt IV</h2> <p>
Watt IV is a synthesis of digital logic and physical craft—where the golden age of exploration
                meets modern technology. We believe that technology shouldn't just be functional; it should
                feel intentional, tactile, human. <br><br>
Driven by curiosity and industrial craftsmanship, we bridge the gap between human intuition and
                machine precision to create products and prototypes that bring joy and wonder into the world.
</p> <div class="buttons"> <a href="/about" class="button">Learn More</a> </div> </section> </div> `, '  <script src="/shine.min.js"><\/script> <script src="https://unpkg.com/lenis@1.3.13/dist/lenis.min.js"><\/script> <script>\n        document.addEventListener("DOMContentLoaded", () => {\n            const glitch = document.querySelector(".glitch-effect");\n            const payoffText = document.querySelector(".payoff-text");\n\n            if (glitch && payoffText) {\n                const hoverText = "We could create the next breakthrough together.";\n\n                glitch.addEventListener(\n                    "mouseenter",\n                    () => {\n                        payoffText.textContent = hoverText;\n                    },\n                    { once: true },\n                );\n            }\n        });\n    <\/script> '])), renderComponent($$result2, "Navigation", $$Navigation, {}), maybeRenderHead(), renderComponent($$result2, "ProjectsSection", $$ProjectsSection, {}), renderComponent($$result2, "Footer", $$Footer, {})), "head": ($$result2) => renderTemplate(_b || (_b = __template(['<fragment> <link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=block" rel="stylesheet"> <script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js"><\/script> <link rel="icon" type="image/svg+xml" href="/images/favicon.svg"> <link rel="apple-touch-icon" href="/images/apple-touch-icon.png"> </fragment>']))) })}`;
}, "/Users/paul/Documents/wattiv.nl/WattIV-website-dev/src/pages/index.astro", void 0);
const $$file = "/Users/paul/Documents/wattiv.nl/WattIV-website-dev/src/pages/index.astro";
const $$url = "";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
