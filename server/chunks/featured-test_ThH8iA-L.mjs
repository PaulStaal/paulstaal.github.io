globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_KNe951u6.mjs";
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead, c as addAttribute } from "./worker-entry_BvOOjRSE.mjs";
import { $ as $$EmptyLayout } from "./EmptyLayout_B-w9CryG.mjs";
import { $ as $$Navigation } from "./Navigation_CuXaFptD.mjs";
/* empty css                 */
/* empty css                     */
const $$FeaturedTest = createComponent(($$result, $$props, $$slots) => {
  const coverage = [
    {
      outlet: "Designboom",
      logoSrc: "/images/press/designboom.svg",
      domain: "designboom.com",
      date: "March 18, 2026",
      headline: "Design studio Watt IV recreates the 1979 LEGO brick into a 3D‑printed workstation with a hidden Apple Mac mini M4 inside.",
      link: "https://www.designboom.com/technology/space-inspired-mini-apple-workstation-classic-lego-computers-watt-iv-m2x2/",
      views: "250,000+"
    },
    {
      outlet: "Yanko Design",
      logoSrc: "/images/press/yankodesign.png",
      domain: "yankodesign.com",
      date: "March 18, 2026",
      headline: "An inventive reinterpretation of a classic LEGO element into a fully working desktop computer.",
      link: "https://www.yankodesign.com/2026/03/18/this-classic-1979-lego-computer-brick-hides-a-fully-functional-mac-mini-workstation-inside/",
      views: "180,000+"
    },
    {
      outlet: "The Verge",
      logoSrc: "/images/press/theverge.svg",
      domain: "theverge.com",
      date: "March 8, 2026",
      headline: "What if your real computer was a supersized Lego computer brick?",
      link: "https://www.theverge.com/gadgets/890047/what-if-your-real-computer-was-a-super-sized-lego-computer-brick",
      views: "350,000+"
    },
    {
      outlet: "Gizmodo",
      logoSrc: "/images/press/gizmodo.svg",
      domain: "gizmodo.com",
      date: "March 10, 2026",
      headline: "Retrofuturism done right: a custom Lego‑inspired Mac mini case that looks super cool and houses the computer its designer uses every day.",
      link: "https://gizmodo.com/this-custom-lego-inspired-mac-mini-case-is-retrofuturism-done-right-2000731897",
      views: "180,000+"
    },
    {
      outlet: "Macworld",
      logoSrc: "/images/press/macworld.svg",
      domain: "macworld.com",
      date: "March 11, 2026",
      headline: "This giant Lego brick is an actual working Mac.",
      link: "https://www.macworld.com/article/3080490/this-giant-lego-brick-is-an-actual-working-mac.html",
      views: "55,000+"
    },
    {
      outlet: "Hackaday",
      logoSrc: "/images/press/hackaday.svg",
      domain: "hackaday.com",
      date: "March 5, 2026",
      headline: "LEGO Space computer made full size, 47 years on.",
      link: "https://hackaday.com/2026/03/05/lego-space-computer-made-full-size-47-years-on/",
      views: "60,000+"
    },
    {
      outlet: "Tweakers (NL)",
      logoSrc: "/images/press/tweakers.png",
      domain: "tweakers.net",
      date: "March 6, 2026",
      headline: "Tweaker propt Mac mini in zelfontworpen, 3D‑geprint schaalmodel van LEGO‑steen.",
      link: "https://tweakers.net/nieuws/245468/tweaker-propt-mac-mini-in-zelfontworpen-3d-geprint-schaalmodel-van-lego-steen.html",
      views: "95,000+"
    }
  ];
  const featuredReview = coverage[0];
  return renderTemplate`${renderComponent($$result, "EmptyLayout", $$EmptyLayout, { "title": "Watt IV - Coverage Variations", "description": "Test page for 'As Featured On' components" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})} ${maybeRenderHead()}<main class="project-page" style="padding-top: 140px;"> <header class="project-hero" style="max-width: 1000px; margin: 0 auto;"> <div class="hero-content"> <h1>Coverage Patterns</h1> <p class="intro">
Based on modern editorial and D2C (Direct-to-Consumer) trends, here are the most effective
                    ways to display press features.
</p> </div> </header> <!-- ONLINE TREND 1: The Logo Band --> <section class="project-section component-test-section"> <h2 class="section-title">Pattern 1: The Logo Band</h2> <p class="variation-desc"> <strong>Why it works:</strong> The most common pattern online. Placed immediately below the hero
                section, it instantly borrows credibility (social proof) from established brands before the user
                even reads the project details.
</p> <div class="logo-band-container"> <p class="band-label">As featured in</p> <div class="logo-band"> ${coverage.map((item) => renderTemplate`<div class="mock-logo">${item.outlet}</div>`)} </div> </div> </section> <!-- ONLINE TREND 2: The Hero Pull-Quote --> <section class="project-section component-test-section"> <h2 class="section-title">Pattern 2: The Hero Pull-Quote</h2> <p class="variation-desc"> <strong>Why it works:</strong> Used by brands like Teenage Engineering. It singles out the single
                best piece of press and turns it into a massive, undeniable statement of quality, pairing it with
                a specific validation quote.
</p> <div class="hero-quote-container"> <div class="quote-mark">"</div> <h3 class="giant-quote">${featuredReview.headline}</h3> <div class="quote-attribution"> <span class="attrib-line"></span> <span class="attrib-outlet">${featuredReview.outlet}</span> <a href="#" class="read-link">Read full review</a> </div> </div> </section> <!-- ONLINE TREND 3: The Editorial Ledger (Refined Table) --> <section class="project-section component-test-section"> <h2 class="section-title">Pattern 3: The Editorial Ledger</h2> <p class="variation-desc"> <strong>Why it works:</strong> A Watt-IV stylized spin on the "Wall of Love". By showing the high
                reach numbers and specific dates, it frames the project as a documented historical event/release
                rather than just a portfolio piece.
</p> <div class="coverage-table-container"> <table class="coverage-table"> <thead> <tr> <th>Outlet</th> <th class="hide-mobile">Date</th> <th>Review Headline</th> <th class="align-right hide-mobile">Estimated Reach</th> </tr> </thead> <tbody> ${coverage.map((item) => renderTemplate`<tr> <td class="outlet-name">${item.outlet}</td> <td class="hide-mobile date-cell">${item.date}</td> <td class="headline-cell"> <a href="#">"${item.headline}"</a> </td> <td class="align-right hide-mobile reach-cell">${item.views}</td> </tr>`)} </tbody> </table> </div> </section> <!-- ONLINE TREND 4: Horizontal Press Cards (Mentraglass Style) --> <section class="project-section component-test-section" style="max-width: 100%; padding-left: 0; padding-right: 0;"> <h2 class="section-title" style="text-align: center; margin-bottom: 1rem;">
Pattern 4: Horizontal Scroll Cards (Mentraglass style)
</h2> <p class="variation-desc" style="margin: 0 auto 3rem auto; text-align: center; padding: 0 20px;"> <strong>Why it works:</strong> The horizontal card stack allows you to pack a lot of quotes into
                a very compact vertical space without overwhelming the user.
</p> <div class="news-cards-container"> <div class="news-cards-track"> ${coverage.map((item) => renderTemplate`<a${addAttribute(item.link || "#", "href")} class="news-card" target="_blank" rel="noopener noreferrer"> <div class="news-logo"> <img${addAttribute(item.logoSrc, "src")} class="brand-logo-wide" loading="lazy"${addAttribute(`${item.outlet} Logo`, "alt")} onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"> <span class="brand-text" style="display:none;"> ${item.outlet} </span> </div> <p class="news-quote">"${item.headline}"</p> <span class="news-read">Read article &rarr;</span> </a>`)} </div> </div> </section> <div style="height: 100px;"></div> </main> ` })}`;
}, "/Users/paul/Documents/wattiv.nl/WattIV-website-dev/src/pages/tests/featured-test.astro", void 0);
const $$file = "/Users/paul/Documents/wattiv.nl/WattIV-website-dev/src/pages/tests/featured-test.astro";
const $$url = "/tests/featured-test";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$FeaturedTest,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
