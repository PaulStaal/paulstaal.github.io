globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_KNe951u6.mjs";
import { q as createRenderInstruction, c as addAttribute, b as renderTemplate, r as renderComponent, v as renderSlot, e as renderHead, w as Fragment, d as defineScriptVars } from "./worker-entry_BvOOjRSE.mjs";
async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}<\/script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Users/paul/Documents/wattiv.nl/WattIV-website-dev/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/paul/Documents/wattiv.nl/WattIV-website-dev/node_modules/astro/components/ClientRouter.astro", void 0);
const $$DevMenu = createComponent(($$result, $$props, $$slots) => {
  const isDev = false;
  const testPaths = Object.keys({ "../pages/tests/button-animations.astro": 0, "../pages/tests/card-deck-test.astro": 0, "../pages/tests/collector-card.astro": 0, "../pages/tests/daylight-test.astro": 0, "../pages/tests/dock.astro": 0, "../pages/tests/email_signature.astro": 0, "../pages/tests/featured-test.astro": 0, "../pages/tests/glitch-experiments.astro": 0, "../pages/tests/ios_notification.astro": 0, "../pages/tests/learn-more-experiments.astro": 0, "../pages/tests/pixel-wave.astro": 0, "../pages/tests/rock.astro": 0, "../pages/tests/studio_spotlight.astro": 0, "../pages/tests/swipe-test.astro": 0, "../pages/tests/watt_iv_landing.astro": 0, "../pages/tests/watt_iv_poster.astro": 0 });
  const guidelinePaths = Object.keys({ "../pages/guidelines/color.astro": 0, "../pages/guidelines/components.astro": 0, "../pages/guidelines/framework.astro": 0, "../pages/guidelines/iconography.astro": 0, "../pages/guidelines/imagery.astro": 0, "../pages/guidelines/index.astro": 0, "../pages/guidelines/logo.astro": 0, "../pages/guidelines/motion.astro": 0, "../pages/guidelines/typography.astro": 0, "../pages/guidelines/voice-and-tone.astro": 0 });
  const getUrlFromPath = (path) => {
    return path.replace("../pages/", "/").replace(".astro", "").replace("/index", "");
  };
  const formatLabel = (str) => {
    return str.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  };
  testPaths.map((path) => {
    const url = getUrlFromPath(path);
    const slug = url.split("/").pop() || "test";
    return {
      label: formatLabel(slug),
      href: url
    };
  });
  guidelinePaths.map((path) => {
    const url = getUrlFromPath(path);
    const slug = url.split("/").pop() || "dashboard";
    return {
      label: slug === "guidelines" || slug === "" ? "Dashboard" : formatLabel(slug),
      href: url
    };
  }).sort((a, b) => {
    if (a.label === "Dashboard") return -1;
    if (b.label === "Dashboard") return 1;
    return a.label.localeCompare(b.label);
  });
  return renderTemplate`${isDev}${renderScript($$result, "/Users/paul/Documents/wattiv.nl/WattIV-website-dev/src/components/DevMenu.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/paul/Documents/wattiv.nl/WattIV-website-dev/src/components/DevMenu.astro", void 0);
const $$file = "/Users/paul/Documents/wattiv.nl/WattIV-website-dev/src/components/DevMenu.astro";
const $$url = void 0;
const __vite_glob_1_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$DevMenu,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b;
const $$EmptyLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$EmptyLayout;
  const { title, description, bodyClass = "" } = Astro2.props;
  const ga_id = "G-L2G154874D";
  return renderTemplate(_b || (_b = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>', "</title>", `<!-- Inline script for zero-FOUC theme persistence across view transitions --><script>
        (function() {
            const __applyTheme = () => {
                const isTestPage = window.location.pathname.includes('daylight-test.html');
                let theme = localStorage.getItem('theme');
                if (isTestPage) {
                    theme = 'daylight';
                } else if (!theme || theme === 'daylight') {
                    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                }
                document.documentElement.classList.remove('light-mode', 'dark-mode', 'daylight-mode');
                document.documentElement.classList.add(theme + '-mode');
            };
            
            // Apply immediately
            __applyTheme();
            // Ensure listener is only added once
            if (!window.__themeListenerAdded) {
                document.addEventListener('astro:after-swap', __applyTheme);
                window.__themeListenerAdded = true;
            }
        })();
    <\/script><meta name="description"`, '><link rel="icon" type="image/svg+xml" href="/images/favicon.svg"><link rel="apple-touch-icon" media="(prefers-color-scheme: light)" href="/images/apple-touch-icon.png"><link rel="apple-touch-icon" media="(prefers-color-scheme: dark)" href="/images/apple-touch-icon_white.png"><link rel="preload" href="/ps-handwritten.otf" as="font" type="font/otf" crossorigin><link href="https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">', "", "", "</head> <body", "> ", " ", " ", " </body> </html>"])), title, renderComponent($$result, "ClientRouter", $$ClientRouter, {}), addAttribute(description, "content"), renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate(_a || (_a = __template(["<script async", "><\/script><script>(function(){", "\n                window.dataLayer = window.dataLayer || [];\n                function gtag(){dataLayer.push(arguments);}\n                gtag('js', new Date());\n                \n                // --- GOLDFISH MODE (Privacy First) ---\n                gtag('config', ga_id, {\n                    'client_storage': 'none',        // Disable GA cookies entirely\n                    'anonymize_ip': true,            // Mask IP addresses\n                    'allow_ad_personalization_signals': false, // Disable creepy tracking\n                    'allow_google_signals': false,   // No cross-device tracking\n                    'send_page_view': true           // Still track the visit\n                });\n            })();<\/script>"])), addAttribute(`https://www.googletagmanager.com/gtag/js?id=${ga_id}`, "src"), defineScriptVars({ ga_id })) })}`, renderSlot($$result, $$slots["head"]), renderHead(), addAttribute(bodyClass, "class"), renderSlot($$result, $$slots["default"]), renderComponent($$result, "DevMenu", $$DevMenu, {}), renderScript($$result, "/Users/paul/Documents/wattiv.nl/WattIV-website-dev/src/layouts/EmptyLayout.astro?astro&type=script&index=0&lang.ts"));
}, "/Users/paul/Documents/wattiv.nl/WattIV-website-dev/src/layouts/EmptyLayout.astro", void 0);
export {
  $$EmptyLayout as $,
  __vite_glob_1_2 as _,
  renderScript as r
};
