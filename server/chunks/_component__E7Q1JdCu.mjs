globalThis.process ??= {};
globalThis.process.env ??= {};
import { _ as __vite_glob_1_0 } from "./ArtifactSticker_BFHGE9sO.mjs";
import { _ as __vite_glob_1_1 } from "./ComparisonSlider_DjouHU9Z.mjs";
import { $ as $$EmptyLayout, _ as __vite_glob_1_2 } from "./EmptyLayout_B-w9CryG.mjs";
import { _ as __vite_glob_1_3, $ as $$Footer } from "./Footer_DeQQDIvF.mjs";
import { _ as __vite_glob_1_4, $ as $$Navigation } from "./Navigation_CuXaFptD.mjs";
import { _ as __vite_glob_1_5 } from "./PressCoverage_DSfmdKzx.mjs";
import { _ as __vite_glob_1_6 } from "./ProjectsSection_DWl-mqiU.mjs";
import { _ as __vite_glob_1_7 } from "./SignupForm_BuFdbkWj.mjs";
import { _ as __vite_glob_1_8 } from "./TableOfContents_DTYU7qZP.mjs";
import { _ as __vite_glob_1_9 } from "./Timeline_BlvKircJ.mjs";
import { c as createComponent } from "./astro-component_KNe951u6.mjs";
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead } from "./worker-entry_BvOOjRSE.mjs";
/* empty css               */
/* empty css                 */
const __vite_glob_0_0 = `---
interface Props {
  src: string;
  alt: string;
  rotation?: string;
  width?: string;
  hasTape?: boolean;
}

const { src, alt, rotation = "-3deg", width = "220px", hasTape = true } = Astro.props;

const uid = Math.random().toString(36).substring(2, 9);
const filterId = \`sticker-shadow-\${uid}\`;
---

<div class="artifact-sticker-container" style={\`--rotation: \${rotation}; --width: \${width};\`}>
  {hasTape && <div class="archival-tape" />}

  <svg width="0" height="0" style="position: absolute; pointer-events: none;">
    <filter id={filterId} x="-50%" y="-50%" width="200%" height="200%">
      <feMorphology in="SourceAlpha" operator="dilate" radius="4" result="DILATED"></feMorphology>
      <feFlood flood-color="white" flood-opacity="1" result="WHITE_FLOOD"></feFlood>
      <feComposite in="WHITE_FLOOD" in2="DILATED" operator="in" result="WHITE_BORDER"></feComposite>

      <feGaussianBlur in="DILATED" stdDeviation="6" result="SHADOW_BLUR"></feGaussianBlur>
      <feOffset in="SHADOW_BLUR" dx="0" dy="8" result="SHADOW_OFFSET"></feOffset>
      <feFlood flood-color="black" flood-opacity="0.3" result="SHADOW_COLOR"></feFlood>
      <feComposite in="SHADOW_COLOR" in2="SHADOW_OFFSET" operator="in" result="SHADOW_FINAL"></feComposite>

      <feMerge>
        <feMergeNode in="SHADOW_FINAL"></feMergeNode>
        <feMergeNode in="WHITE_BORDER"></feMergeNode>
        <feMergeNode in="SourceGraphic"></feMergeNode>
      </feMerge>
    </filter>
  </svg>

  <img src={src} alt={alt} style={\`filter: url(#\${filterId});\`} />
</div>

<style lang="scss">
  .artifact-sticker-container {
    position: relative;
    width: var(--width);
    transform: rotate(var(--rotation));
    display: inline-block;
    z-index: 10;
    transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);

    &:hover {
      transform: rotate(0deg) scale(1.1);
      z-index: 20;
    }

    img {
      width: 120px;
      height: auto;
      display: block;
    }
  }

  /* The 'Archival Tape' effect */
  .archival-tape {
    display: none;
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%) rotate(2deg);
    width: 60px;
    height: 25px;
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(2px);
    z-index: 15;
    border-radius: 2px;
    box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.2);

    /* Rough edge simulation */
    -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
    mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
      opacity: 0.1;
      pointer-events: none;
    }
  }
</style>
`;
const __vite_glob_0_1 = '---\ninterface Props {\n  beforeImage: string;\n  afterImage: string;\n  beforeLabel?: string;\n  afterLabel?: string;\n  beforePosition?: string;\n  afterPosition?: string;\n}\n\nconst {\n  beforeImage,\n  afterImage,\n  beforeLabel = "1978 Inspiration",\n  afterLabel = "MACINTOSH MINI M2X2",\n  beforePosition = "center",\n  afterPosition = "center",\n} = Astro.props;\n---\n\n<div class="comparison-slider" data-comparison-slider>\n  <div class="image-container" data-container>\n    <!-- After Image is Background (Right Side) -->\n    <img src={afterImage} alt={afterLabel} class="after-img-bg" style={`object-position: ${afterPosition}`} />\n\n    <!-- Before Image is Foreground (Left Side, Clipped) -->\n    <div class="before-img-wrapper" data-before-wrapper>\n      <img\n        src={beforeImage}\n        alt={beforeLabel}\n        class="before-img-fg"\n        style={`object-position: ${beforePosition}`}\n      />\n    </div>\n\n    <div class="labels">\n      <span class="label label-before">{beforeLabel}</span>\n      <span class="label label-after">{afterLabel}</span>\n    </div>\n\n    <!-- Range input kept for accessibility only, interaction handled by container -->\n    <input\n      type="range"\n      min="0"\n      max="100"\n      value="50"\n      class="slider-input sr-only"\n      data-slider-input\n      aria-label="Adjust image comparison"\n    />\n\n    <div class="slider-line" data-slider-line>\n      <div class="slider-button">\n        <svg\n          xmlns="http://www.w3.org/2000/svg"\n          width="24"\n          height="24"\n          viewBox="0 0 24 24"\n          fill="none"\n          stroke="currentColor"\n          stroke-width="2"\n          stroke-linecap="round"\n          stroke-linejoin="round"><path d="m15 18-6-6 6-6"></path></svg\n        >\n        <svg\n          xmlns="http://www.w3.org/2000/svg"\n          width="24"\n          height="24"\n          viewBox="0 0 24 24"\n          fill="none"\n          stroke="currentColor"\n          stroke-width="2"\n          stroke-linecap="round"\n          stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg\n        >\n      </div>\n    </div>\n  </div>\n</div>\n\n<style lang="scss">\n  .comparison-slider {\n    width: 100%;\n    position: relative;\n    overflow: hidden;\n    border-radius: 12px;\n    background: transparent;\n    aspect-ratio: 16 / 10;\n    user-select: none;\n    touch-action: pan-y; /* Allow vertical scroll */\n  }\n\n  .image-container {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    cursor: ew-resize;\n    touch-action: none; /* Block horizontal scroll while interacting */\n    margin-top: 0;\n  }\n\n  img {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    display: block;\n    pointer-events: none;\n  }\n\n  .after-img-bg {\n    z-index: 1;\n  }\n\n  .before-img-wrapper {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 50%;\n    height: 100%;\n    overflow: hidden;\n    z-index: 2;\n    border-right: 2px solid white;\n    pointer-events: none;\n  }\n\n  .before-img-fg {\n    width: 100vw;\n    max-width: none;\n    height: 100%;\n    z-index: 1;\n    filter: grayscale(50%) contrast(1.1);\n  }\n\n  /* Labels */\n  .labels {\n    position: absolute;\n    bottom: 15px;\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    padding: 0 15px;\n    z-index: 4;\n    pointer-events: none;\n  }\n\n  .label {\n    background: rgba(0, 0, 0, 0.7);\n    color: white;\n    padding: 6px 14px;\n    border-radius: 4px;\n    font-size: 0.75rem;\n    font-weight: 600;\n    letter-spacing: 0.08em;\n    text-transform: uppercase;\n    backdrop-filter: blur(8px);\n    border: 1px solid rgba(255, 255, 255, 0.1);\n  }\n\n  .slider-line {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 50%;\n    width: 2px;\n    background: white;\n    z-index: 3;\n    pointer-events: none;\n    transform: translateX(-50%);\n  }\n\n  .slider-button {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 44px;\n    height: 44px;\n    border-radius: 50%;\n    background: white;\n    border: 2px solid white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #333;\n    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);\n\n    svg {\n      width: 16px;\n      height: 16px;\n      &:first-child {\n        margin-right: -4px;\n      }\n      &:last-child {\n        margin-left: -4px;\n      }\n    }\n  }\n\n  .sr-only {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    margin: -1px;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    border-width: 0;\n  }\n</style>\n\n<script lang="ts">\n  function initSliders() {\n    const sliders = document.querySelectorAll("[data-comparison-slider]");\n\n    sliders.forEach((slider) => {\n      const container = slider.querySelector("[data-container]") as HTMLElement;\n      const wrapper = slider.querySelector("[data-before-wrapper]") as HTMLElement;\n      const line = slider.querySelector("[data-slider-line]") as HTMLElement;\n      const innerImg = wrapper.querySelector(".before-img-fg") as HTMLElement;\n      const input = slider.querySelector("[data-slider-input]") as HTMLInputElement;\n\n      let isDragging = false;\n\n      const updatePosition = (percent: number) => {\n        // Constrain percent between 0 and 100\n        const constrained = Math.max(0, Math.min(100, percent));\n\n        wrapper.style.width = `${constrained}%`;\n        line.style.left = `${constrained}%`;\n        input.value = constrained.toString();\n\n        const containerWidth = container.getBoundingClientRect().width;\n        innerImg.style.width = `${containerWidth}px`;\n      };\n\n      const handleMove = (e: PointerEvent) => {\n        if (!isDragging) return;\n\n        const rect = container.getBoundingClientRect();\n        const x = e.clientX - rect.left;\n        const percent = (x / rect.width) * 100;\n\n        updatePosition(percent);\n      };\n\n      const startDragging = () => {\n        isDragging = true;\n      };\n      const stopDragging = () => {\n        isDragging = false;\n      };\n\n      // Pointer events for broad compatibility (Mouse, Touch, Pen)\n      container.addEventListener("pointerdown", (e) => {\n        isDragging = true;\n        handleMove(e); // Allow click-to-jump\n      });\n\n      window.addEventListener("pointermove", handleMove);\n      window.addEventListener("pointerup", stopDragging);\n\n      // Initial alignment fix on resize\n      window.addEventListener("resize", () => {\n        updatePosition(parseFloat(input.value));\n      });\n\n      updatePosition(50);\n    });\n  }\n\n  initSliders();\n  document.addEventListener("astro:page-load", initSliders);\n<\/script>\n';
const __vite_glob_0_2 = `---
/**
 * DevMenu.astro
 * A development-only menu for easy access to test and guideline pages.
 */
const isDev = import.meta.env.DEV;

// Automatically discover test and guideline pages using Vite's glob import
const testPaths = Object.keys(import.meta.glob("../pages/tests/*.astro"));
const guidelinePaths = Object.keys(import.meta.glob("../pages/guidelines/*.astro"));

const getUrlFromPath = (path: string) => {
  return path.replace("../pages/", "/").replace(".astro", "").replace("/index", "");
};

const formatLabel = (str: string) => {
  return str.replace(/-/g, " ").replace(/\\b\\w/g, (c) => c.toUpperCase());
};

const tests = testPaths.map((path) => {
  const url = getUrlFromPath(path);
  const slug = url.split("/").pop() || "test";
  return {
    label: formatLabel(slug),
    href: url,
  };
});

const guidelines = guidelinePaths
  .map((path) => {
    const url = getUrlFromPath(path);
    const slug = url.split("/").pop() || "dashboard";
    return {
      label: slug === "guidelines" || slug === "" ? "Dashboard" : formatLabel(slug),
      href: url,
    };
  })
  .sort((a, b) => {
    if (a.label === "Dashboard") return -1;
    if (b.label === "Dashboard") return 1;
    return a.label.localeCompare(b.label);
  });

const groups = [
  { title: "Guidelines", links: guidelines },
  { title: "Tests", links: tests },
];
---

{
  isDev && (
    <div id="wd-dev-menu-root" class="wd-dev-menu-closed">
      <button id="wd-dev-menu-toggle" aria-label="Toggle Dev Menu">
        <span class="wd-icon">🛠️</span>
        <span class="wd-label">DEV</span>
      </button>

      <div id="wd-dev-menu-panel">
        <div class="wd-panel-header">
          <h2>Dev Tools</h2>
        </div>

        <div class="wd-panel-body">
          {groups.map((group) => (
            <div class="wd-menu-group">
              <h3>{group.title}</h3>
              <ul>
                {group.links.map((link) => (
                  <li>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

<script>
  function initDevMenu() {
    const root = document.getElementById("wd-dev-menu-root");
    const toggle = document.getElementById("wd-dev-menu-toggle");

    if (root && toggle) {
      toggle.addEventListener("click", (e) => {
        e.stopPropagation();
        root.classList.toggle("wd-dev-menu-open");
        root.classList.toggle("wd-dev-menu-closed");
      });

      document.addEventListener("click", (e) => {
        if (root.classList.contains("wd-dev-menu-open") && !root.contains(e.target as Node)) {
          root.classList.remove("wd-dev-menu-open");
          root.classList.add("wd-dev-menu-closed");
        }
      });
    }
  }

  // Initialize on first load and subsequent view transitions
  document.addEventListener("astro:page-load", initDevMenu);
<\/script>

<style>
  /* Use a prefix to avoid collisions */

  @media (max-width: 768px) {
    #wd-dev-menu-root {
      display: none;
    }
  }

  #wd-dev-menu-root {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 99999;
    font-family: "IBM Plex Mono", monospace;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    pointer-events: none;
  }

  #wd-dev-menu-toggle {
    background: var(--background, #fcf6ef);
    color: var(--text, #110a0a);
    border: 1px solid var(--text, #110a0a);
    border-radius: 20px;
    padding: 10px 18px;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    font-size: 0.75rem;
    font-weight: bold;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
    transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
    opacity: 0.8;
    pointer-events: auto;
  }

  #wd-dev-menu-toggle:hover {
    opacity: 1;
    transform: translateY(-2px);
    background: var(--text, #110a0a);
    color: var(--background, #fcf6ef);
  }

  .wd-dev-menu-open #wd-dev-menu-toggle {
    background: var(--primary, #be4b2a);
    color: white;
    border-color: var(--primary, #be4b2a);
  }

  #wd-dev-menu-panel {
    background: var(--background, #fcf6ef);
    color: var(--text, #110a0a);
    border: 1px solid var(--text, #110a0a);
    border-radius: 12px;
    width: 240px;
    margin-bottom: 12px;
    overflow: hidden;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
    transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1);
    transform-origin: bottom right;
    visibility: hidden;
    opacity: 0;
    transform: scale(0.95) translateY(10px);
    pointer-events: auto;
  }

  .wd-dev-menu-open #wd-dev-menu-panel {
    visibility: visible;
    opacity: 1;
    transform: scale(1) translateY(0);
  }

  .wd-panel-header {
    background: var(--surface, #ebecdc);
    padding: 12px 18px;
    border-bottom: 1px solid var(--text, #110a0a);
  }

  .wd-panel-header h2 {
    margin: 0;
    font-family: "Instrument Serif", serif;
    font-size: 1.4rem;
    color: var(--text, #110a0a);
    font-weight: 400;
  }

  .wd-panel-body {
    padding: 18px;
  }

  .wd-menu-group {
    margin-bottom: 20px;
  }

  .wd-menu-group h3 {
    font-size: 0.65rem;
    color: var(--primary, #be4b2a);
    text-transform: uppercase;
    margin: 0 0 10px 0;
    letter-spacing: 0.1em;
    font-weight: bold;
  }

  .wd-menu-group ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .wd-menu-group li {
    margin-bottom: 6px;
  }

  .wd-menu-group a {
    color: var(--text, #110a0a);
    text-decoration: none;
    font-size: 0.9rem;
    display: block;
    padding: 2px 0;
    transition: all 0.2s;
  }

  .wd-menu-group a:hover {
    color: var(--primary, #be4b2a);
    transform: translateX(4px);
  }

  :global(:root.dark-mode) #wd-dev-menu-panel {
    background: #2a2a2a;
    border-color: rgba(252, 246, 239, 0.2);
  }

  :global(:root.dark-mode) .wd-panel-header {
    background: #333;
    border-color: rgba(252, 246, 239, 0.2);
  }

  :global(:root.dark-mode) .wd-panel-header h2,
  :global(:root.dark-mode) .wd-menu-group a {
    color: #fcf6ef;
  }

  :global(:root.dark-mode) #wd-dev-menu-toggle {
    background: #2a2a2a;
    color: #fcf6ef;
    border-color: rgba(252, 246, 239, 0.2);
  }

  :global(:root.dark-mode) #wd-dev-menu-toggle:hover {
    background: #fcf6ef;
    color: #110a0a;
  }
</style>
`;
const __vite_glob_0_3 = '---\n---\n\n<footer class="main-footer">\n    <div class="footer-content">\n        <div class="cta-section">\n            <!-- Glitch Slogan (Replacing H2) -->\n            <div class="slogan" id="footer-slogan-container">\n                <div class="glitch-slogan" id="footer-glitch">\n                    <span class="main-text">Putting the funk back in functional.</span>\n                    <span class="glitch-layer layer-1">Putting the funk back in functional.</span>\n                    <span class="glitch-layer layer-2">Putting the funk back in functional.</span>\n                </div>\n            </div>\n\n\n\n            <div class="cta-buttons">\n                <!-- <a href="/inspiration" class="button">Insights</a> -->\n                <a href="/contact" class="button button-reveal">Say hello</a>\n            </div>\n        </div>\n\n        <div class="footer-divider"></div>\n\n        <div class="footer-bottom">\n            <div class="logo-box">\n                <svg\n                    xmlns="http://www.w3.org/2000/svg"\n                    width="40"\n                    height="40"\n                    viewBox="0 0 91.41 55.405"\n                    fill="white"\n                >\n                    <path\n                        d="m65.73 54.103 25.345-43.9a2.5 2.5 0 0 0-.915-3.414L78.982.335a2.5 2.5 0 0 0-3.415.915L60.17 27.916a1 1 0 0 1-1.732 0l-5.108-8.849a5 5 0 0 0-4.33-2.5H35.54a2.5 2.5 0 0 0-2.166 3.75l14.912 25.83a5 5 0 0 0 1.83 1.83l12.197 7.041a2.5 2.5 0 0 0 3.415-.915zM41.19 45.2 15.843 1.302a2.5 2.5 0 0 0-3.415-.915L1.25 6.84a2.5 2.5 0 0 0-.915 3.415l25.345 43.9a2.5 2.5 0 0 0 3.415.915l11.18-6.454a2.5 2.5 0 0 0 .914-3.415z"\n                    ></path>\n                </svg>\n            </div>\n\n            <div class="copyright">&copy; MMXXVI Watt IV.</div>\n\n            <div class="bottom-controls">\n                <div class="social-icons">\n                    <a\n                        href="/privacy"\n                        style="color: inherit; opacity: 0.7; text-decoration: none; margin-left: 10px; font-size: 0.8em;"\n                        >Privacy</a\n                    >\n                    <a href="https://makerworld.com/en/@WattIV" target="_blank" title="Makerworld">\n                        <svg\n                            xmlns="http://www.w3.org/2000/svg"\n                            width="20"\n                            height="20"\n                            viewBox="0 0 24 24"\n                            fill="none"\n                            stroke="currentColor"\n                            stroke-width="2"\n                            stroke-linecap="round"\n                            stroke-linejoin="round"\n                        >\n                            <path\n                                d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"\n                            ></path>\n                            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>\n                            <line x1="12" y1="22.08" x2="12" y2="12"></line>\n                        </svg>\n                    </a>\n                    <a href="https://x.com/Watt__IV" target="_blank" title="X (Twitter)">\n                        <svg\n                            xmlns="http://www.w3.org/2000/svg"\n                            width="20"\n                            height="20"\n                            viewBox="0 0 24 24"\n                            fill="currentColor"\n                        >\n                            <path\n                                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"\n                            ></path>\n                        </svg>\n                    </a>\n                    <a href="https://www.linkedin.com/company/wattiv/" target="_blank" title="LinkedIn">\n                        <svg\n                            xmlns="http://www.w3.org/2000/svg"\n                            width="20"\n                            height="20"\n                            viewBox="0 0 24 24"\n                            fill="none"\n                            stroke="currentColor"\n                            stroke-width="2"\n                            stroke-linecap="round"\n                            stroke-linejoin="round"\n                        >\n                            <path\n                                d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"\n                            ></path>\n                            <rect x="2" y="9" width="4" height="12"></rect>\n                            <circle cx="4" cy="4" r="2"></circle>\n                        </svg>\n                    </a>\n                </div>\n\n                <div class="theme-toggle" id="theme-toggle" title="Toggle dark mode">\n                    <svg class="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\n                        <circle cx="12" cy="12" r="5"></circle>\n                        <line x1="12" y1="1" x2="12" y2="3"></line>\n                        <line x1="12" y1="21" x2="12" y2="23"></line>\n                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>\n                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>\n                        <line x1="1" y1="12" x2="3" y2="12"></line>\n                        <line x1="21" y1="12" x2="23" y2="12"></line>\n                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>\n                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>\n                    </svg>\n                    <svg class="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\n                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>\n                    </svg>\n                    <span>Theme</span>\n                </div>\n            </div>\n        </div>\n    </div>\n</footer>\n';
const __vite_glob_0_4 = `---

---

<header class="header-v2">
    {
        Astro.url.pathname === "/" ? (
            <div class="nav_logo">
                <a href="#about">
                    <svg
                        class="logo"
                        xmlns="http://www.w3.org/2000/svg"
                        xml:space="preserve"
                        style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"
                        viewBox="0 0 582 357"
                    >
                        <path
                            d="m209.399 134.03-1.16-2.051-1.02-2.067-.421-1.056-.341-1.08-.247-1.11-.136-1.102-.025-1.022.066-.942.137-.863.191-.792.531-1.482.702-1.349.865-1.238.571-.659.688-.671.814-.657.939-.61.972-.496.97-.381.957-.283.935-.203 1.892-.241 1.941-.089 1.989-.013h99.122l1.795.004 1.718.029 1.648.079 1.582.153 1.523.252 1.469.377 1.401.517 1.309.658 1.226.806 1.152.958 1.059 1.083.979 1.192.923 1.293.891 1.386.883 1.472.9 1.55 22.153 38.369 1.197 2.03 1.28 1.917.704.892.765.836.838.769.886.668.873.532.849.414.816.313.781.231 1.549.281 1.519.067 1.504-.13.856-.165.925-.26.975-.376.998-.508.915-.594.815-.65.724-.687.644-.708 1.155-1.518 1.048-1.637 1.005-1.716L475.374 9.927l1.666-2.802.871-1.312.932-1.231 1.022-1.137.584-.556.655-.548.729-.526.807-.489.889-.437.941-.359.966-.268.988-.176 1.005-.084.997.008.955.09.91-.158 1.674.463 1.566.613 1.546.743 3.114 1.735 73.355 42.352 2.802 1.666 1.312.871 1.231.932 1.137 1.022.556.584.548.655.526.729.489.807.437.889.359.941.268.966.176.988.084 1.005-.008.997-.09.955-.158.91-.463 1.674-.613 1.566-.743 1.546-1.735 3.114L417.2 346.908l-1.666 2.802-.871 1.312-.932 1.231-1.022 1.137-.584.556-.655.548-.729.526-.807.489-.889.437-.941.359-.966.268-.988.176-1.005.084-.997-.008-.955-.09-.91-.158-1.674-.463-1.566-.613-1.546-.743-3.114-1.735-77.231-44.59-2.983-1.74-1.34-.814-1.251-.802-1.173-.808-1.104-.833-1.045-.876-.996-.938-.938-.996-.876-1.045-.833-1.104-.808-1.173-.802-1.251-.814-1.34-1.74-2.983L209.4 134.029ZM266.562 287.855l1.594 2.844.7 1.41.6 1.422.473 1.453.189.784.147.841.091.895.02.944-.066.988-.16.994-.251.971-.341.944-.43.913-.505.86-.555.782-.591.709-1.238 1.219-1.314 1.049-1.416.967-3.06 1.83-73.355 42.352-2.844 1.594-1.41.7-1.422.6-1.453.473-.784.189-.841.147-.895.091-.944.02-.988-.066-.994-.16-.971-.251-.944-.341-.913-.43-.86-.505-.782-.555-.709-.591-1.219-1.238-1.049-1.314-.967-1.416-1.83-3.06L3.814 68.986 2.22 66.142l-.7-1.41-.6-1.422-.473-1.453-.189-.784-.147-.841-.091-.895-.02-.944.066-.988.16-.994.251-.971.341-.944.43-.913.505-.86.555-.782.591-.709 1.238-1.219 1.314-1.049 1.416-.967 3.06-1.83L83.282 3.815l2.844-1.594 1.41-.7 1.422-.6 1.453-.473.784-.189.841-.147.895-.091.944-.02.988.066.994.16.971.251.944.341.913.43.86.505.782.555.709.591 1.219 1.238 1.049 1.314.967 1.416 1.83 3.06 160.461 277.927Z"
                            style="fill-rule:nonzero"
                        />
                    </svg>
                    <svg class="text" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <path id="circlePath" fill="none" d="M 14, 50 a 36,36 0 1,1 72,0 36,36 0 1,1 -72,0" />
                        <text id="text">
                            <textPath id="watt_iv" href="#circlePath" textLength="226">
                                Watt IV • Watt IV •&nbsp;
                            </textPath>
                        </text>
                    </svg>
                </a>
            </div>
        ) : (
            <a href="/" class="logo" aria-label="back to homepage">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 91.41 55.405">
                    <path d="m65.73 54.103 25.345-43.9a2.5 2.5 0 0 0-.915-3.414L78.982.335a2.5 2.5 0 0 0-3.415.915L60.17 27.916a1 1 0 0 1-1.732 0l-5.108-8.849a5 5 0 0 0-4.33-2.5H35.54a2.5 2.5 0 0 0-2.166 3.75l14.912 25.83a5 5 0 0 0 1.83 1.83l12.197 7.041a2.5 2.5 0 0 0 3.415-.915zM41.19 45.2 15.843 1.302a2.5 2.5 0 0 0-3.415-.915L1.25 6.84a2.5 2.5 0 0 0-.915 3.415l25.345 43.9a2.5 2.5 0 0 0 3.415.915l11.18-6.454a2.5 2.5 0 0 0 .914-3.415z" />
                </svg>
            </a>
        )
    }
    <button class="mobile-toggle" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
    </button>
    <nav>
        <a href="/">Home</a>
        <a href="/projects">Work</a>

        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="https://store.wattiv.nl/en-eur" target="_blank" rel="noopener noreferrer">Store</a>
    </nav>
</header>

<script>
    let scrollInitialized = false;

    document.addEventListener("astro:page-load", () => {
        const toggle = document.querySelector(".mobile-toggle");
        const nav = document.querySelector(".header-v2 nav");
        const header = document.querySelector(".header-v2");

        if (toggle && nav && header) {
            // Prevent duplicate listeners on the same element across transitions
            if (toggle.dataset.listenerAttached !== "true") {
                toggle.dataset.listenerAttached = "true";
                toggle.addEventListener("click", () => {
                    const isOpened = toggle.classList.toggle("is-active");
                    nav.classList.toggle("is-visible");
                    header.classList.toggle("menu-open");
                    document.body.style.overflow = isOpened ? "hidden" : "";
                });
            }

            // Close menu when a link is clicked
            nav.querySelectorAll("a").forEach((link) => {
                const linkEl = link;
                if (linkEl.dataset.listenerAttached !== "true") {
                    linkEl.dataset.listenerAttached = "true";
                    linkEl.addEventListener("click", () => {
                        toggle.classList.remove("is-active");
                        nav.classList.remove("is-visible");
                        header.classList.remove("menu-open");
                        document.body.style.overflow = "";
                    });
                }
            });
        }
    });

    // Only attach global window listeners once per session
    if (!scrollInitialized) {
        scrollInitialized = true;

        const threshold = 10;
        let lastScrollY = window.scrollY;

        const updateHeader = () => {
            const header = document.querySelector(".header-v2");
            if (!header) return;

            // Don't act if menu is open or on homepage (if intended)
            if (header.classList.contains("menu-open") || document.body.classList.contains("homepage"))
                return;

            const currentScrollY = window.scrollY;
            const scrollDelta = currentScrollY - lastScrollY;

            // 1. Handle Glassmorphism Toggle (Are we at the top?)
            if (currentScrollY > 50) {
                header.classList.add("is-scrolled");
            } else {
                header.classList.remove("is-scrolled");
            }

            // 2. Handle Hide/Show on Scroll
            if (Math.abs(scrollDelta) > threshold) {
                if (scrollDelta > 0 && currentScrollY > 90) {
                    // Scrolling Down
                    header.classList.add("is-hidden");
                } else {
                    // Scrolling Up
                    header.classList.remove("is-hidden");
                }
                lastScrollY = currentScrollY;
            }
        };

        window.addEventListener("scroll", updateHeader, { passive: true });

        // --- VIEW TRANSITION LOGIC ---
        // Ensure header is visible when starting a new page navigation
        document.addEventListener("astro:before-preparation", () => {
            const header = document.querySelector(".header-v2");
            if (header) header.classList.remove("is-hidden");
        });

        document.addEventListener("astro:after-swap", () => {
            const header = document.querySelector(".header-v2");
            if (header) {
                header.classList.remove("is-hidden");
                lastScrollY = window.scrollY; // Reset tracking
                updateHeader(); // Run immediately for current position
            }
        });
    }
<\/script>

<style>
    .header-v2 {
        padding: 30px 20px 30px 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 1000;
        width: 100%;
        box-sizing: border-box;
        position: fixed;
        max-width: 100vw !important;
        top: 0;
        left: 0;

        /* The Transition Name for persistence */
        view-transition-name: main-header;

        /* Smooth motion and background transitions */
        transition:
            transform 1s cubic-bezier(0.16, 1, 0.3, 1),
            border-color 0.3s ease;
        background-color: var(--bg);
        backdrop-filter: blur(0px);
        border-bottom: 1px solid transparent;
    }

    /* State: Scrolled down (apply glassmorphism) */
    .header-v2.is-scrolled {
        border-bottom: 1px solid rgba(128, 128, 128, 0.2);
    }

    .header-v2.is-hidden,
    :global(body.gallery-open) .header-v2 {
        transform: translateY(-100%);
    }

    .header-v2.menu-open {
        background: var(--bg);
    }

    .header-v2 .logo svg {
        width: 50px;
        height: auto;
        transition: transform 0.5s ease;
    }

    .header-v2 .logo:hover svg {
        transform: rotate(-12deg) scale(1.05);
    }

    /* Handle logo color based on context if needed, but default to text color */
    .header-v2 .logo svg path {
        fill: var(--text, #333);
    }

    /* Support dark mode text color if var--text changes, or explicit overrides */
    :global(:root.dark-mode) .header-v2 .logo svg path {
        fill: var(--text, #f1f1f1);
    }

    .header-v2 nav a {
        padding: 0 20px;
        text-decoration: none;
        font-family: var(--mono-font-bold);
        font-size: 0.85rem;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: var(--text, #333);
        transition: opacity 0.3s ease;
        font-weight: 600;
        position: relative;
    }

    :global(:root.dark-mode) .header-v2 nav a {
        color: var(--text, #f1f1f1);
    }

    .header-v2 nav a.active {
        color: var(--quaternary, #c44324);
    }
    /* 
    .header-v2 nav a:hover {
        opacity: 0.6;
    } */

    .header-v2 nav {
        display: flex;
        align-items: center;
    }

    .header-v2 nav a:hover::after,
    .header-v2 nav a.active::after {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 100%;
        height: 2px;
        background: var(--quaternary, #c44324);
    }

    /* 
     * Jhey's Magnet Menu Effect (CSS Anchor Positioning)
     * Progressive enhancement for modern browsers (Chrome 125+)
     * https://x.com/jh3yy/status/1855346126700118495
     */
    @supports (anchor-name: --a) {
        .header-v2 nav {
            position: relative;
        }

        /* Disable the old underline */
        .header-v2 nav a:hover::after,
        .header-v2 nav a.active::after {
            display: none !important;
        }

        /* Set the anchor on the active item by default */
        .header-v2 nav a.active {
            anchor-name: --magnetic-target;
        }

        /* If ANY item is hovered, disable the active anchor so it jumps to hover */
        .header-v2 nav:has(a:hover) a.active,
        .header-v2 nav:has(a:focus-visible) a.active {
            anchor-name: none;
        }

        /* Set anchor on the hovered item */
        .header-v2 nav a:hover,
        .header-v2 nav a:focus-visible {
            anchor-name: --magnetic-target;
        }

        /* The sliding pill indicator */
        .header-v2 nav::before {
            content: "";
            position: absolute;
            top: calc(anchor(--magnetic-target top) - 8px);
            bottom: calc(anchor(--magnetic-target bottom) - 8px);
            left: calc(anchor(--magnetic-target left));
            right: calc(anchor(--magnetic-target right));
            background: rgba(196, 67, 36, 0.15); /* Pill color based on var(--quaternary) */
            border-radius: 8px;
            z-index: -1;
            /* Snappy elastic transition */
            transition: all 0.35s cubic-bezier(0.25, 1, 0.3, 1);
            pointer-events: none;
        }

        /* For dark mode pill visibility */
        :global(:root.dark-mode) .header-v2 nav::before {
            background: rgba(196, 67, 36, 0.25);
        }
    }

    .mobile-toggle {
        display: none;
        flex-direction: column;
        justify-content: space-between;
        width: 30px;
        height: 20px;
        background: none;
        border: none;
        cursor: pointer;
        padding: 0;
        z-index: 1001;
    }

    .mobile-toggle span {
        display: block;
        width: 100%;
        height: 2px;
        background: var(--text);
        transition: all 0.3s ease;
    }

    /* Hamburger Animation */
    .mobile-toggle.is-active span:nth-child(1) {
        transform: translateY(9px) rotate(45deg);
    }
    .mobile-toggle.is-active span:nth-child(2) {
        opacity: 0;
    }
    .mobile-toggle.is-active span:nth-child(3) {
        transform: translateY(-9px) rotate(-45deg);
    }

    a.logo {
        display: flex;
    }

    @media (max-width: 768px) {
        .header-v2 {
            padding: 20px 25px;
        }

        .mobile-toggle {
            display: flex;
            background: none !important;
            outline: none;
        }

        .header-v2 nav {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background: var(--bg);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            opacity: 0;
            visibility: hidden;
            transition: all 0.4s ease;
            z-index: 1000;
        }

        .header-v2 nav.is-visible {
            opacity: 1;
            visibility: visible;
            width: 100vw;
        }

        .header-v2 nav a {
            margin: 20px 0;
            font-size: 1.5rem;
        }
    }
</style>
`;
const __vite_glob_0_5 = '---\ninterface CoverageItem {\n    outlet: string;\n    logoSrc: string;\n    domain: string;\n    date: string;\n    headline: string;\n    link: string;\n    views: string;\n    imageSrc?: string;\n    subtitle?: string;\n}\n\ninterface Props {\n    items?: CoverageItem[];\n    title?: string;\n}\n\nconst { items = [], title } = Astro.props;\n---\n\n{items.length > 0 && (\n<section class="press-section">\n    <div class="press-content">\n        {title && <h2 class="press-title">{title}</h2>}\n        <div class="news-cards-container">\n            <div class="news-cards-track">\n                {\n                    items.map((item) => (\n                        <a\n                            href={item.link || "#"}\n                            class={`news-card${item.imageSrc ? " news-card--wide" : ""}`}\n                            target="_blank"\n                            rel="noopener noreferrer"\n                        >\n                            <div class="news-card-body">\n                                <div class="news-logo">\n                                    <img\n                                        src={item.logoSrc}\n                                        class="brand-logo-wide"\n                                        loading="lazy"\n                                        alt={`${item.outlet} Logo`}\n                                        onerror="this.style.display=\'none\'; this.nextElementSibling.style.display=\'block\';"\n                                    />\n                                    <span class="brand-text" style="display:none;">\n                                        {item.outlet}\n                                    </span>\n                                </div>\n                                {item.subtitle && <p class="news-subtitle">{item.subtitle}</p>}\n                                <p class="news-quote">"{item.headline}"</p>\n                                <span class="news-read">Read article &rarr;</span>\n                            </div>\n                            {item.imageSrc && (\n                                <div class="news-card-image">\n                                    <img\n                                        src={item.imageSrc}\n                                        alt={`${item.outlet} featured image`}\n                                        loading="lazy"\n                                    />\n                                </div>\n                            )}\n                        </a>\n                    ))\n                }\n            </div>\n        </div>\n    </div>\n</section>\n)}\n\n<style>\n    .press-section {\n        background-color: var(--surface);\n        padding: 80px 0;\n        width: 100vw;\n        margin-left: calc(50% - 50vw);\n        margin-right: calc(50% - 50vw);\n        box-sizing: border-box;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        margin-bottom: 80px;\n        margin-top: 60px;\n        overflow: hidden;\n    }\n\n    :global(:root.dark-mode) .press-section {\n        background-color: #4d4d4d;\n    }\n\n    .press-content {\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        box-sizing: border-box;\n    }\n\n    .press-title {\n        font-family: "Instrument Serif", serif;\n        font-size: 2.5rem;\n        font-weight: 400;\n        letter-spacing: -0.02em;\n        margin-bottom: 20px;\n        margin-top: 0;\n        text-align: left;\n        width: 100%;\n        max-width: 780px;\n        box-sizing: border-box;\n        color: var(--text);\n        font-style: normal;\n    }\n\n    .press-title::after {\n        display: none;\n    }\n\n    @media (max-width: 1024px) {\n        .press-title {\n            padding: 0 20px;\n        }\n    }\n\n    .news-cards-container {\n        width: 100%;\n        overflow-x: auto;\n        padding: 20px 0;\n        scrollbar-width: none; /* Firefox */\n        -ms-overflow-style: none; /* IE/Edge */\n        scroll-snap-type: x mandatory;\n        scroll-padding-left: max(20px, calc(50% - 390px));\n    }\n\n    .news-cards-container::-webkit-scrollbar {\n        display: none; /* Chrome/Safari */\n    }\n\n    .news-cards-track {\n        display: flex;\n        gap: 1.5rem;\n        width: max-content;\n        padding-left: max(20px, calc(50% - 390px));\n        padding-right: max(20px, calc(50% - 390px));\n    }\n\n    .news-card {\n        scroll-snap-align: start;\n        width: 300px;\n        min-height: 260px;\n        background: var(--bg);\n        border: 1px solid rgba(128, 128, 128, 0.15);\n        border-radius: 12px;\n        padding: 2.5rem 2rem;\n        display: flex;\n        flex-direction: row;\n        justify-content: flex-start;\n        text-decoration: none;\n        color: var(--text);\n        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);\n        transition:\n            transform 0.3s ease,\n            box-shadow 0.3s ease;\n        overflow: hidden;\n    }\n\n    /* Wide variant — image card */\n    .news-card--wide {\n        width: min(780px, calc(100vw - 40px));\n    }\n\n    .news-card-body {\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        flex: 1;\n        min-width: 0;\n    }\n\n    .news-card-image {\n        flex: 0 0 240px;\n        margin: -2.5rem -2rem -2.5rem 2rem;\n        overflow: hidden;\n        border-radius: 0 12px 12px 0;\n        align-self: stretch;\n    }\n\n    @media (max-width: 600px) {\n        .news-card-image {\n            flex: 0 0 35%;\n        }\n\n        .news-card--wide {\n            height: auto;\n            min-height: 260px;\n        }\n    }\n\n    .news-card-image img {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n        display: block;\n    }\n\n    :global(:root.dark-mode) .news-card {\n        background: #fcf6ef !important;\n        color: #110a0a !important;\n        border-color: rgba(128, 128, 128, 0.15) !important;\n    }\n\n    :global(:root.dark-mode) .news-card .news-quote,\n    :global(:root.dark-mode) .news-card .brand-text {\n        color: #110a0a !important;\n    }\n\n    .news-card:hover {\n        transform: translateY(-5px);\n        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);\n    }\n\n    /* Don\'t inherit underline styling from parent page */\n    .news-card,\n    .news-card * {\n        text-decoration: none !important;\n    }\n\n    .news-card::after,\n    .news-card::before {\n        content: none !important;\n    }\n\n    .news-logo {\n        margin-bottom: 0.5rem;\n        height: 32px;\n        display: flex;\n        align-items: center;\n        justify-content: flex-start;\n    }\n\n    .news-subtitle {\n        font-family: var(--mono-font), monospace;\n        font-size: 1rem;\n        opacity: 1;\n        letter-spacing: 0.06em;\n        text-transform: uppercase;\n        margin: 0 0 1.5rem 0;\n        color: var(--text);\n        font-weight: bold;\n    }\n\n    .brand-logo-wide {\n        height: 28px;\n        max-width: 140px;\n        width: auto;\n        object-fit: contain;\n        object-position: left center;\n        filter: grayscale(100%) opacity(0.5);\n        transition: filter 0.4s ease;\n    }\n\n    .news-card:hover .brand-logo-wide {\n        filter: grayscale(0%) opacity(1);\n    }\n\n    /* Fallback text if image fails to load */\n    .brand-text {\n        font-size: 1.4rem;\n        font-weight: 800;\n        transition: filter 0.4s ease;\n        filter: grayscale(100%) opacity(0.5);\n        color: var(--text);\n    }\n\n    .news-card:hover .brand-text {\n        filter: grayscale(0%) opacity(1);\n    }\n\n    .news-quote {\n        font-family: var(--mono-font), monospace;\n        font-size: 0.95rem;\n        font-style: italic;\n        line-height: 1.5;\n        margin: 0 0 2rem 0;\n        opacity: 0.9;\n        flex-grow: 1;\n        text-align: left;\n        color: var(--text);\n    }\n\n    .news-read {\n        font-family: var(--mono-font), monospace;\n        font-size: 0.8rem;\n        color: var(--primary);\n        font-weight: bold;\n        margin-top: auto;\n        transition: color 0.3s ease;\n    }\n\n    .news-card:hover .news-read {\n        color: var(--quaternary);\n    }\n</style>\n';
const __vite_glob_0_6 = `---
const { currentProject, enableFilters = false, title = "Projects & Prototypes", showDescription = true, narrowHeader = false, asH1 = false } = Astro.props;

const projects = [
  {
    id: "computer",
    title: "the M2x2",
    url: "/work/m2x2",
    image: "/images/Computer_lino.png",
    role: "A playful but powerful desk-companion",
    tags: ["Industrial Design", "Cyberdeck", "3D Modeling"],
    status: "completed",
    date: "01-03-2026",
    color: "var(--quaternary)"
  },
 
  {
    id: "keyboard",
    title: "the Cogito",
    url: "/work/cogito",
    image: "/images/cogito/cogito_lino.png",
    role: "A keyboard for humans.",
    tags: ["Ergonomics", "Prototyping", "3D Modeling"],
    status: "completed",
    date: "07-04-2026",
    color: "var(--secondary)"
  },
   {
    id: "arcade",
    title: "the Dino",
    url: "/work/dino",
    image:  "/images/arcade_lino.png",
    placeholder: "🕹️",
    role: "A reimagined retro arcade cabinet",
    tags: ["Woodworking", "Electronics", "Interaction Design"],
    status: "completed",
    date: "27-05-2026",
    color: "var(--forest-haze)"
  },
  {
    id: "placeholder-1",
    title: "?",
    url: "#",
    image: null,
    role: "",
    tags: [],
    status: "placeholder",
    date: "2026-01-01"
  },
  {
    id: "placeholder-2",
    title: "?",
    url: "#",
    image: null,
    role: "",
    tags: [],
    status: "placeholder",
    date: "2026-01-01"
  },
  {
    id: "placeholder-3",
    title: "?",
    url: "#",
    image: null,
    role: "",
    tags: [],
    status: "placeholder",
    date: "2026-01-01"
  }
];

// Helper to check if a project is a real project or placeholder/coming soon for filtering purposes
const isRealProject = (p: typeof projects[number]) => p.status !== 'placeholder';

// Filter out the current project if specified
let displayedProjects = projects.filter(p => p.id !== currentProject);

// Extract all unique tags for the filter dropdown
const allTags = [...new Set(projects.filter(isRealProject).flatMap(p => p.tags))];
const allCategories = ["All", ...allTags];

const formatDate = (dateStr: string) => {
  if (dateStr === 'T.B.D.') return dateStr;
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return dateStr;
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' }).toUpperCase();
};
---

<section class={\`hero projects \${narrowHeader ? "narrow-header" : ""} \${enableFilters ? "filter-enabled" : ""}\`} id="projects">
  <div class="content">
    {asH1 ? <h1 class="projects-title">{title}</h1> : <h2>{title}</h2>}
    {showDescription && (
      <p>
We believe technology should spark curiosity, not noise. Bridging the gap between digital precision and physical play and creating the artifacts we once only dreamed of; where code becomes tactile and technology feels human again.
      </p>
    )}

    {enableFilters && (
      <div class="projects-controls">
        <div class="custom-dropdown filter-dropdown">
            <button class="dropdown-trigger" id="filter-trigger">
                Filter by Category
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" class="arrow-icon">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="dropdown-menu" id="filter-menu">
                 <label class="checkbox-item all-option">
                    <input type="checkbox" value="All" checked />
                    <span class="checkmark"></span>
                    All
                </label>
                {allTags.map((tag) => (
                    <label class="checkbox-item">
                        <input type="checkbox" value={tag} />
                         <span class="checkmark"></span>
                        {tag}
                    </label>
                ))}
            </div>
        </div>

        <div class="custom-select-wrapper">
             <label for="sort-by" style="margin-right: 10px;">Sort:</label>
            <div class="select-container">
                <select id="sort-by">
                <option value="date-desc">Newest First</option>
                <option value="date-asc">Oldest First</option>
                <option value="name-asc">Name A-Z</option>
                <option value="name-desc">Name Z-A</option>
                </select>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" class="select-arrow">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
      </div>
    )}
  </div>

  <div class="projects-gallery-container" id="gallery-container">
    {displayedProjects.map((project) => (
      <a
        href={(project.status === 'coming-soon' || project.status === 'placeholder') ? 'javascript:void(0)' : project.url}
        class={\`project-card \${project.status === 'coming-soon' ? 'coming-soon' : ''} \${project.status === 'placeholder' ? 'placeholder' : ''}\`}
        data-tags={project.tags.join(',')}
        data-date={project.date}
        data-title={project.title}
        data-status={project.status}
        onclick={project.status === 'coming-soon' ? "this.classList.toggle('flipped'); return false;" : (project.status === 'placeholder' ? "return false;" : "")}
      >
        <div class="project-card-inner">
            <div class="project-card-front" style={project.color ? \`background-color: \${project.color}\` : ''}>
                {project.date && project.status !== 'placeholder' && (
                    <span class="card-date">{project.date}</span>
                )}
                {project.image ? (
                  <img src={project.image} alt={\`\${project.title} prototype\`} draggable="false" />
                ) : project.placeholder ? (
                    <p class="image-placeholder">{project.placeholder}</p>
                ) : null}

                <div class="project-card-content">
                  <h3>{project.title}</h3>
                  {project.role && <p class="role">{project.role}</p>}
                  
                  {project.tags.length > 0 && (
                    <div class="card-tags">
                      {project.tags.map((tag) => (
                        <span>{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
            </div>
            {project.status === 'coming-soon' && (
                <div class="project-card-back" style={project.color ? \`background-color: \${project.color}\` : ''}>
                    <div class="back-content">
                        <h3>Coming Soon</h3>
                        <p>Stay tuned for updates.</p>
                    </div>
                </div>
            )}
        </div>
      </a>
    ))}
  </div>
</section>

{enableFilters && (
  <script lang="ts">
  document.addEventListener('DOMContentLoaded', () => {
    const filterTrigger = document.getElementById('filter-trigger');
    const filterMenu = document.getElementById('filter-menu');
    const sortSelect = document.getElementById('sort-by');
    const gallery = document.getElementById('gallery-container');
    
    if (!filterTrigger || !sortSelect || !gallery || !filterMenu) return;

    const checkboxes = filterMenu.querySelectorAll<HTMLInputElement>('input[type="checkbox"]');

    // Toggle Dropdown
    filterTrigger.addEventListener('click', (e) => {
        e.stopPropagation();
        filterMenu.classList.toggle('show');
        filterTrigger.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
        const targetNode = e.target as Node;
        if (!filterTrigger.contains(targetNode) && !filterMenu.contains(targetNode)) {
            filterMenu.classList.remove('show');
            filterTrigger.classList.remove('active');
        }
    });

    // Store original cards to filter from
    const originalCards = Array.from(gallery.children);

    function updateGallery() {
        // Gather selected tags
        const checkedBoxes = Array.from(checkboxes).filter(cb => cb.checked);
        let selectedTags = checkedBoxes.map(cb => cb.value);
        
        const isAllSelected = selectedTags.includes('All');
        
        // If 'All' is selected, ignore other tags or treat as "Show Everything"
        // Also if nothing is selected, arguably show everything or nothing? usually everything.
        // Let's adopt logic: If 'All' is checked, show all. If others are checked, show match.
        // Also handle the UX: if All is clicked, uncheck others. If Other is clicked, uncheck All.
        
        const sortBy = sortSelect.value;

        // Filter
        const filtered = originalCards.filter(card => {
            const status = card.getAttribute('data-status');
            const tagsAttr = card.getAttribute('data-tags');
            const tags = tagsAttr ? tagsAttr.split(',') : [];

            // Placeholder logic: Show placeholders only if ALL is selected?
            if (status === 'placeholder' && !isAllSelected) return false;

            if (isAllSelected || selectedTags.length === 0) return true;
            
            // OR LOGIC: Show if card has ANY of the selected tags
            // AND LOGIC: Show if card has ALL selected tags?
            // "Select multiple" usually implies expanding the selection (OR).
            return selectedTags.some(tag => tags.includes(tag));
        });

        // Sort
        filtered.sort((a, b) => {
            const statusA = a.getAttribute('data-status');
            const statusB = b.getAttribute('data-status');
            if (statusA === 'placeholder' && statusB !== 'placeholder') return 1;
            if (statusA !== 'placeholder' && statusB === 'placeholder') return -1;

            const dateA = a.getAttribute('data-date') || '';
            const dateB = b.getAttribute('data-date') || '';
            const titleA = (a.getAttribute('data-title') || '').toLowerCase();
            const titleB = (b.getAttribute('data-title') || '').toLowerCase();

            if (sortBy === 'date-desc') return dateB.localeCompare(dateA);
            if (sortBy === 'date-asc') return dateA.localeCompare(dateB);
            if (sortBy === 'name-asc') return titleA.localeCompare(titleB);
            if (sortBy === 'name-desc') return titleB.localeCompare(titleA);
            return 0;
        });

      // Re-render
      gallery.innerHTML = '';
      filtered.forEach(card => gallery.appendChild(card));
    }
    
    // Checkbox Logic for "All" vs Others
    checkboxes.forEach(cb => {
        cb.addEventListener('change', (e) => {
            const target = e.target;
            if (target.value === 'All') {
                if (target.checked) {
                    // Uncheck all others
                    checkboxes.forEach(c => { if(c !== target) c.checked = false; });
                }
            } else {
                // If specific tag checked, uncheck 'All'
                if (target.checked) {
                    const allCb = filterMenu.querySelector<HTMLInputElement>('input[value="All"]');
                    if (allCb) allCb.checked = false;
                }
                
                // If no tags selected, re-check 'All' so we don't show empty?
                const anyChecked = Array.from(checkboxes).some(c => c.checked);
                if (!anyChecked) {
                     const allCb = filterMenu.querySelector<HTMLInputElement>('input[value="All"]');
                    if (allCb) allCb.checked = true;
                }
            }
            updateGallery();
        });
    });

    sortSelect.addEventListener('change', updateGallery);
  });
<\/script>
)}

<style>
  /* Local styles for controls */
  .projects-controls {
    display: none;
    margin-top: 20px;
    gap: 30px;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
    z-index: 10; /* Ensure dropdowns overlay content */
  }

  /* Dropdown Styles */
  .custom-dropdown {
      position: relative;
      display: inline-block;
  }
  
  .dropdown-trigger {
      background: transparent;
      border: 1px solid var(--text, #1a1a1a);
      color: var(--text, #1a1a1a);
      padding: 8px 16px;
      border-radius: 20px;
      font-family: inherit;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 0.9rem;
      transition: all 0.2s;
  }
  
  .dropdown-trigger:hover,
  .dropdown-trigger.active {
      background: var(--text);
      color: var(--bg);
      transform: none !important;
      box-shadow: none !important;
  }
  
  .dropdown-trigger svg path {
      stroke: currentColor;
  }
  
  .dropdown-menu {
      position: absolute;
      top: 120%;
      left: 0;
      background: var(--bg);
      border: 1px solid var(--text);
      border-radius: 12px;
      padding: 10px;
      min-width: 200px;
      box-shadow: 0 10px 20px rgba(0,0,0,0.1);
      opacity: 0;
      visibility: hidden;
      transform: translateY(-10px);
      transition: all 0.2s;
      z-index: 100;
  }
  
  .dropdown-menu.show {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
  }
  
  /* Checkbox Styles */
  .checkbox-item {
      display: flex;
      align-items: center;
      padding: 8px 12px;
      cursor: pointer;
      font-size: 0.9rem;
      border-radius: 6px;
      transition: background 0.2s;
      user-select: none;
  }
  
  .checkbox-item:hover {
      background: rgba(128, 128, 128, 0.2);
  }
  
  .checkbox-item input {
      display: none;
  }
  
  .checkmark {
      width: 16px;
      height: 16px;
      border: 1px solid var(--text);
      border-radius: 3px;
      margin-right: 10px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
  }
  
  .checkbox-item input:checked + .checkmark {
      background: var(--text);
  }
  
  .checkbox-item input:checked + .checkmark::after {
      content: '✓';
      color: var(--bg);
      font-size: 12px;
      font-weight: bold;
      line-height: 1;
  }

  /* Sort Select */
  .custom-select-wrapper {
      display: flex;
      align-items: center;
  }
  
  /* Hero Projects Section Styling */
  .hero.projects {
      background-color: var(--surface);
      padding: 80px 0 0;
      margin-top: 60px; /* Separation from previous content */
      width: 100vw;
      margin-left: calc(50% - 50vw);
      margin-right: calc(50% - 50vw);
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
  }

  :global(:root.dark-mode) .hero.projects {
      background-color: #4d4d4d; /* Distinct from #1f1f1f (footer) and #2a2a2a (content) */
  }

  /* Adjust narrow header inside this section */
  .narrow-header .content {
      max-width: 840px !important;
      padding: 0 !important;
      width: 100% !important;
      margin: 0 auto;
      text-align: left; /* Keep text aligned left */
  }
  
  .select-container {
      position: relative;
      display: inline-block;
  }
  
  .select-container select {
      appearance: none;
      background: transparent;
      border: 1px solid var(--text);
      color: var(--text);
      padding: 8px 32px 8px 16px;
      border-radius: 20px;
      font-family: inherit;
      cursor: pointer;
      font-size: 0.9rem;
      transition: all 0.2s;
      outline: none;
  }

  .select-container:hover select {
      background: var(--text);
      color: var(--bg);
  }
  
  .select-arrow {
      position: absolute;
      right: 12px;
      top: 50%;
      transform: translateY(-50%);
      pointer-events: none;
      transition: color 0.2s;
  }

  .select-container:hover .select-arrow {
      color: var(--bg);
  }

  /* Layout Override for Filter Enabled (Grid Layout) */
  :global(.filter-enabled) .projects-gallery-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start; /* Align left */
      margin: 80px auto 120px !important;
      padding: 0;
      max-width: 1200px;
      width: 100%;
      overflow: visible !important;
      white-space: normal !important;
      gap: 30px;
      
  }
  
  /* Force Grid Sizing for Cards when Filter Enabled */
  :global(.filter-enabled) .project-card {
      width: calc((100% - 60px) / 3) !important; /* 3 columns with 30px gap */
      /* height: auto !important; */
      aspect-ratio: 1 / 1.414 !important;
      margin: 0 !important;
  }
  
  @media (max-width: 1024px) {
      :global(.filter-enabled) .project-card {
          width: calc((100% - 30px) / 2) !important; /* 2 columns on tablet */
      }

      :global(.filter-enabled) .projects-gallery-container {
           padding: 0 20px !important;
           justify-content: center;
           gap: 16px !important;
      }
  }
  
  /* Adjustments for mobile */
  @media (max-width: 768px) {
      :global(.filter-enabled) .project-card {
          width: 100% !important; /* 1 column */
      }
      .dropdown-menu {
          min-width: 100%;
      }
  }

  /* Narrow Header Override */
  .narrow-header .content {
      padding: 0 40px !important;
  }

  /* Make sure header matches alignment of other elements on project pages */
  .narrow-header h2,
  .narrow-header h1 {
      margin-bottom: -50px;
      margin-top: 0;
      color: var(--text);
      font-style: normal;
      &::after {
        content: none;
      }
  }

  @media (max-width: 768px) {
      .narrow-header h2 {
          font-size: 3rem;
      }
      .narrow-header .content {
          padding: 0 20px !important;
      }
  }
</style>
`;
const __vite_glob_0_7 = `---
// SignupForm.astro
---

<div class="signup-form-container highlight-block" id="signup-container">
    <div id="signup-form-state">
        <h2 class="signup-label">Don't miss what's next.</h2>
        <p class="signup-description mono">
            New projects, fresh ideas, and the occasional 'what if', delivered ~once a month. No noise.
        </p>

        <form id="notify-form" class="notify-form">
            <div class="input-wrapper">
                <input
                    type="email"
                    id="notify-email"
                    placeholder="human@example.com"
                    required
                    class="notify-input"
                />
            </div>
            <button
                type="submit"
                class="button notify-button button-reveal"
                style="--reveal-content: '→'; --reveal-size: 1.5rem;"
            >
                I'm in
            </button>
        </form>
        <p id="notify-msg" class="notify-msg" aria-live="polite"></p>
    </div>

    <div id="signup-success-state">
        <div class="success-icon">
            <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                class="success-checkmark"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
        </div>
        <h3 class="signup-label">YOU'RE ALL SET!</h3>
        <p class="success-message mono">
            Success — you've been added to our list. <br />
            We'll notify you as soon as new work drops.
        </p>
    </div>
</div>

<style>
    .signup-label {
        color: var(--text) !important;
    }

    .success-icon {
        margin-bottom: 1.5rem;
        display: flex;
        justify-content: center;
    }

    .success-checkmark {
        stroke: var(--secondary);
    }

    #signup-success-state {
        display: none;
    }

    .notify-form {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-top: 30px;
        gap: 1.25rem;
        align-items: center;

        @media (max-width: 768px) {
            flex-direction: column;
        }
    }

    .input-wrapper {
        width: 100%;
        max-width: 400px;
        border-bottom: 1px solid rgba(var(--quaternary-rgb, 0, 0, 0), 0.3);
        transition: border-color 0.3s ease;
    }

    :root:not(.dark-mode) .input-wrapper {
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    }

    .input-wrapper:focus-within {
        border-color: var(--primary);
    }

    .notify-input {
        width: 100%;
        background: transparent;
        border: none;
        color: var(--text-dark);
        font-size: 3rem;
        outline: none;
        font-family: var(--handwritten);
        text-overflow: ellipsis;

        @media (max-width: 768px) {
            font-size: 2rem;
            text-align: center;
        }
    }

    .notify-input::placeholder {
        color: var(--text-dark);
        opacity: 0.3;
    }

    .notify-button {
        width: auto;
        min-width: 200px;
    }

    .notify-button:hover {
        box-shadow: 0 8px 25px rgba(var(--quaternary-rgb, 190, 75, 42), 0.4);
    }

    .notify-msg {
        font-family: var(--mono-font), monospace;
        font-size: 0.85rem;
        color: var(--quaternary);
        transition: all 0.3s ease;
        margin-top: 40px !important;
        text-align: center;
    }

    .success-message {
        text-align: center;
    }

    .notify-msg:empty {
        display: none;
    }

    :global(.notify-msg.success) {
        color: #4ade80 !important;
    }

    :global(.notify-msg.error) {
        color: #f87171 !important;
    }
</style>

<script lang="ts">
    document.addEventListener("astro:page-load", () => {
        const form = document.getElementById("notify-form");
        const msg = document.getElementById("notify-msg");
        const formState = document.getElementById("signup-form-state");
        const successState = document.getElementById("signup-success-state");

        if (!form || !msg || !formState || !successState) return;

        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            const emailInput = document.getElementById("notify-email");
            const email = emailInput.value;

            // Simple loading state
            msg.textContent = "Processing...";
            msg.className = "notify-msg";

            try {
                const res = await fetch("/api/subscribe", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email }),
                });

                const data = await res.json();

                if (res.ok) {
                    // Hide form and show success state
                    formState.style.display = "none";
                    successState.style.display = "block";
                    form.reset();
                } else {
                    msg.textContent = data.error || "Something went wrong. Try again?";
                    msg.classList.add("error");
                }
            } catch (err) {
                msg.textContent = "Network error. Please try again.";
                msg.classList.add("error");
            }
        });
    });
<\/script>
`;
const __vite_glob_0_8 = '---\nexport interface Props {\n    links: { id: string; label: string }[];\n}\n\nconst { links = [] } = Astro.props;\n---\n\n<section class="v2-content-section toc-section">\n    <nav class="table-of-contents">\n        <p class="toc-title">Table of Contents</p>\n        <ul class="toc-list">\n            <div class="toc-indicator"></div>\n            {\n                links.map((link) => (\n                    <li>\n                        <a href={`#${link.id}`} class="toc-link">\n                            {link.label}\n                        </a>\n                    </li>\n                ))\n            }\n        </ul>\n    </nav>\n</section>\n\n<style>\n    /* Table of Contents Styling */\n    .toc-section {\n        position: relative;\n        padding-top: 0;\n        padding-bottom: 3rem;\n    }\n\n    .table-of-contents {\n        font-size: 0.85rem;\n    }\n\n    .toc-title {\n        font-family: var(--mono-font), monospace;\n        opacity: 0.4;\n        margin-bottom: 1.2rem;\n        text-transform: uppercase;\n        letter-spacing: 0.1em;\n    }\n\n    .toc-list {\n        position: relative;\n        list-style-type: none;\n        padding: 0 0 0 1.25rem;\n        margin: 0;\n        display: flex;\n        flex-direction: column;\n        gap: 0.8rem;\n        border-left: 2px solid rgba(128, 128, 128, 0.15);\n    }\n\n    .toc-indicator {\n        position: absolute;\n        left: -2px; /* Covers the border */\n        top: 0;\n        width: 2px;\n        height: 1.2rem; /* Matches link height roughly */\n        background-color: var(--primary);\n        transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1);\n        z-index: 2;\n        opacity: 0; /* Hidden until activated */\n    }\n\n    .toc-indicator.active {\n        opacity: 1;\n    }\n\n    .toc-link {\n        text-decoration: none;\n        color: inherit;\n        opacity: 0.5;\n        transition:\n            opacity 0.2s ease,\n            color 0.2s ease,\n            transform 0.2s ease;\n        display: inline-block;\n        line-height: 1.2;\n    }\n\n    .toc-link:hover {\n        opacity: 1;\n        color: var(--primary);\n    }\n\n    .toc-link.active {\n        opacity: 1;\n        font-weight: bold;\n        color: var(--primary);\n        transform: translateX(4px);\n    }\n\n    /* Side Navigation on Desktop */\n    @media (min-width: 1400px) {\n        .toc-section {\n            /* Takes it out of document flow but keeps it inside main bounds relative to nothing */\n            padding: 0;\n        }\n\n        .table-of-contents {\n            position: fixed;\n            left: 0;\n            padding: 0 50px 20px;\n            background: var(--bg);\n            border-radius: 0 10px 10px 0;\n            top: 15vh;\n            width: 310px;\n            z-index: 50; /* Ensures TOC stays clickable over other relatively positioned elements like Timelines */\n\n            /* Hidden until scrolled past quote on desktop */\n            opacity: 0;\n            visibility: hidden;\n            transform: translateY(10px);\n            transition:\n                opacity 0.3s ease,\n                visibility 0.3s ease,\n                transform 0.3s ease;\n        }\n\n        .table-of-contents.visible {\n            opacity: 1;\n            visibility: visible;\n            transform: translateY(0);\n        }\n    }\n</style>\n\n<script lang="ts">\n    document.addEventListener("astro:page-load", () => {\n        const tocLinks = document.querySelectorAll(".toc-link");\n        const indicator = document.querySelector(".toc-indicator");\n        const sections = Array.from(document.querySelectorAll(".v2-content-section")).filter((s) =>\n            s.querySelector("h2[id]"),\n        );\n\n        if (!sections.length || !tocLinks.length) return;\n\n        const observer = new IntersectionObserver(\n            (entries) => {\n                entries.forEach((entry) => {\n                    // When a section enters the top portion of the screen\n                    if (entry.isIntersecting) {\n                        const h2 = entry.target.querySelector("h2[id]");\n                        if (!h2) return;\n\n                        const id = h2.id;\n                        tocLinks.forEach((link) => link.classList.remove("active"));\n\n                        const activeLink = document.querySelector(`.toc-link[href="#${id}"]`);\n                        if (activeLink && indicator) {\n                            activeLink.classList.add("active");\n                            indicator.classList.add("active");\n\n                            const li = activeLink.closest("li");\n                            // Center the 1.2rem indicator slightly using Math\n                            if (li) {\n                                const yOffset = li.offsetTop;\n                                indicator.style.transform = `translateY(${yOffset}px)`;\n                            }\n                        }\n                    }\n                });\n            },\n            {\n                // Trigger bounds: section hits the top 20%-50% of the screen\n                rootMargin: "-20% 0px -50% 0px",\n                threshold: 0,\n            },\n        );\n\n        sections.forEach((s) => observer.observe(s));\n\n        // Desktop TOC Visibility: shown only after intro sections, hidden when \'Other Projects\' enters view\n        const topBoundaryElement =\n            document.querySelector(".press-section") ||\n            document.querySelector(".whatif-container") ||\n            document.querySelector(".hero-v2");\n        const tocNav = document.querySelector(".table-of-contents");\n        const otherProjects = document.querySelector("#projects");\n\n        if (topBoundaryElement && tocNav && otherProjects) {\n            const checkVisibility = () => {\n                const topBoundaryBottom = topBoundaryElement.getBoundingClientRect().bottom;\n                const otherProjectsTop = otherProjects.getBoundingClientRect().top;\n\n                // Show only if we scrolled past the intro section AND Other Projects hasn\'t scrolled into the viewport yet\n                if (topBoundaryBottom <= 0 && otherProjectsTop > window.innerHeight * 0.95) {\n                    tocNav.classList.add("visible");\n                } else {\n                    tocNav.classList.remove("visible");\n                }\n            };\n\n            window.addEventListener("scroll", checkVisibility, { passive: true });\n            window.addEventListener("resize", checkVisibility, { passive: true });\n            checkVisibility(); // initial check\n        }\n    });\n<\/script>\n';
const __vite_glob_0_9 = '---\nimport ArtifactSticker from "../components/ArtifactSticker.astro";\n\ninterface TimelineItem {\n  year: string;\n  title: string;\n  description: string;\n  side?: string;\n  tag?: string;\n  image?: string;\n}\n\ninterface Props {\n  items: TimelineItem[];\n}\n\nconst { items } = Astro.props;\n\n// Determine top-level tags for the columns\nconst leftTag = items.find((item, index) => {\n  const side = item.side ? item.side : index % 2 === 0 ? "left" : "right";\n  return side === "left" && item.tag;\n})?.tag;\n\nconst rightTag = items.find((item, index) => {\n  const side = item.side ? item.side : index % 2 === 0 ? "left" : "right";\n  return side === "right" && item.tag;\n})?.tag;\n---\n\n<div class="timeline-system" id="timeline-system">\n  <div class="timeline-headers">\n    <div class="timeline-header left">\n      {leftTag && <span class="timeline-tag">{leftTag}</span>}\n    </div>\n    <div class="timeline-header right">\n      {rightTag && <span class="timeline-tag">{rightTag}</span>}\n    </div>\n  </div>\n  <div class="timeline-container" id="timeline-container">\n    <div class="timeline-line-base"></div>\n    <div class="timeline-line-progress"></div>\n\n    {\n      items.map((item, index) => {\n        const isLast = index === items.length - 1;\n        const sideClass = isLast ? "center" : item.side ? item.side : index % 2 === 0 ? "left" : "right";\n        return (\n          <div class={`timeline-item ${sideClass}`} data-timeline-item>\n            <div class="timeline-marker" />\n            <div class="timeline-content">\n              {isLast ? (\n                <span class="timeline-tag center-tag">Watt IV</span>\n              ) : (\n                item.tag && <span class="timeline-tag item-tag">{item.tag}</span>\n              )}\n              <div class="year-with-sticker">\n                <h2 class="timeline-year">{item.year}</h2>\n                {item.image && (\n                  <div class="timeline-sticker-wrapper">\n                    <ArtifactSticker\n                      src={item.image}\n                      alt={item.title}\n                      hasTape={false}\n                      rotation={isLast ? "2deg" : index % 2 === 0 ? "5deg" : "-4deg"}\n                    />\n                  </div>\n                )}\n              </div>\n              <h3 class="timeline-title">{item.title}</h3>\n              <p class="timeline-desc">{item.description}</p>\n            </div>\n          </div>\n        );\n      })\n    }\n  </div>\n</div>\n\n<style lang="scss">\n  .timeline-system {\n    position: relative;\n    width: 100vw;\n    margin-left: calc(-50vw + 50%);\n    margin-right: calc(-50vw + 50%);\n    padding: 40px 0;\n    overflow: hidden;\n  }\n\n  .timeline-container {\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    max-width: 1000px;\n    margin: 0 auto;\n    padding: 0 20px;\n    z-index: 2;\n  }\n\n  .timeline-line-base {\n    position: absolute;\n    top: var(--line-start, 66px);\n    left: 50%;\n    transform: translateX(-50%);\n    width: 2px;\n    height: var(--line-height, 100%);\n    background-image: linear-gradient(to bottom, #aeaeae 50%, transparent 50%);\n    background-size: 10px 20px;\n    background-repeat: repeat-y;\n    opacity: 0.3; /* Slightly increase opacity for dashed line visibility */\n    z-index: 1;\n  }\n\n  .timeline-line-progress {\n    position: absolute;\n    top: var(--line-start, 66px);\n    left: 50%;\n    transform: translateX(-50%) scaleY(var(--scroll-progress, 0));\n    transform-origin: top center;\n    width: 2px;\n    height: var(--line-height, 100%);\n    background: var(--quaternary);\n    z-index: 2;\n    will-change: transform;\n  }\n\n  .timeline-item {\n    position: relative;\n    width: 50%;\n    padding: 40px 60px;\n    opacity: 1;\n    transition: opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1);\n\n    // &:not(:first-child) {\n    //   margin-top: 20px;\n    // }\n\n    &.left {\n      align-self: flex-start;\n      text-align: right;\n\n      .timeline-marker {\n        right: -6px;\n        left: auto;\n      }\n\n      .timeline-content {\n        transform: translateX(-30px);\n        opacity: 0.2;\n        filter: blur(2px);\n      }\n    }\n\n    &.right {\n      align-self: flex-end;\n      text-align: left;\n\n      .timeline-marker {\n        left: -6px;\n        right: auto;\n      }\n\n      .timeline-content {\n        transform: translateX(30px);\n        opacity: 0.2;\n        filter: blur(2px);\n      }\n    }\n\n    &.center {\n      align-self: center;\n      text-align: center;\n      width: 100%;\n      margin-top: 40px !important; /* Force break from overlap */\n      padding: 80px 20px 0 20px;\n\n      .timeline-marker {\n        left: 50%;\n        transform: translateX(-50%);\n        top: 20px;\n        z-index: 4;\n        // width: 18px;\n        // height: 18px;\n        // border-width: 4px;\n        // background: var(--bg);\n      }\n\n      .timeline-content {\n        transform: translateY(30px);\n        opacity: 0.2;\n        position: relative;\n        z-index: 5;\n        filter: blur(2px);\n      }\n\n      .center-tag {\n        display: inline-block;\n        margin-top: 15px;\n      }\n\n      .timeline-desc {\n        margin: 0 auto;\n      }\n    }\n\n    &.active {\n      opacity: 1;\n\n      .timeline-content {\n        transform: translate(0, 0) !important;\n        opacity: 1;\n        filter: blur(0px);\n      }\n\n      .timeline-marker {\n        background: var(--quaternary);\n        border-color: var(--quaternary);\n        box-shadow:\n          0 0 0 4px var(--quaternary),\n          0 0 12px var(--quaternary);\n      }\n\n      // &.center {\n      //   .timeline-marker {\n      //     background: var(--primary);\n      //     border-color: var(--primary);\n      //     width: 24px;\n      //     height: 24px;\n      //     box-shadow:\n      //       0 0 0 18px transparent,\n      //       0 0 24px var(--primary);\n      //   }\n      // }\n    }\n  }\n\n  .timeline-marker {\n    position: absolute;\n    top: 60px; /* Aligned with text visually */\n    width: 12px;\n    height: 12px;\n    border-radius: 50%;\n    background: var(--bg);\n    border: 2px solid #aeaeae;\n    /* FADE ONLY, no transform */\n    transition:\n      background 0.5s ease,\n      box-shadow 0.5s ease;\n    z-index: 2;\n  }\n\n  .timeline-content {\n    background: transparent;\n    padding: 0;\n    border: none;\n    color: var(--text-dark);\n    transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);\n  }\n\n  .timeline-headers {\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    position: relative;\n    z-index: 3;\n  }\n\n  .timeline-header {\n    width: 50%;\n    padding: 0 60px; /* matched timeline-item padding */\n\n    &.left {\n      text-align: right;\n    }\n\n    &.right {\n      text-align: left;\n    }\n  }\n\n  .timeline-tag {\n    font-family: var(--font-sans);\n    font-size: 0.8rem;\n    font-weight: 700;\n    text-transform: uppercase;\n    letter-spacing: 0.1em;\n    color: var(--bg);\n    background: var(--quaternary);\n    display: inline-block;\n    padding: 4px 8px;\n    border-radius: 4px;\n    margin-bottom: 10px;\n  }\n\n  .item-tag {\n    display: none;\n  }\n\n  .timeline-year {\n    font-family: "Instrument Serif", serif;\n    font-size: clamp(3rem, 6vw, 5rem);\n    line-height: 0.8;\n    color: var(--text-dark);\n    margin: 0;\n    opacity: 0.9;\n\n    &::after {\n      content: none;\n    }\n  }\n\n  .timeline-title {\n    font-family: var(--sans-font);\n    font-weight: bold;\n    font-size: 1.2rem;\n    color: var(--quaternary);\n    text-transform: uppercase;\n    letter-spacing: 0.1em;\n    margin: 0 0 15px 0;\n  }\n\n  .year-with-sticker {\n    position: relative;\n    display: block;\n    margin: 0 0 15px 0;\n  }\n\n  .timeline-sticker-wrapper {\n    position: absolute;\n    top: -50px;\n    z-index: 10;\n    opacity: 0;\n    visibility: hidden;\n    transform: scale(0.8) translateY(20px);\n    transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);\n    pointer-events: none;\n  }\n\n  .timeline-item.active .timeline-sticker-wrapper {\n    opacity: 1;\n    visibility: visible;\n    transform: scale(1) translateY(0);\n    pointer-events: auto;\n  }\n\n  /* Left item alignment */\n  .timeline-item.left:not(.center) .timeline-sticker-wrapper {\n    right: calc(100% - 200px);\n  }\n\n  /* Right item alignment */\n  .timeline-item.right:not(.center) .timeline-sticker-wrapper {\n    left: calc(100% - 100px);\n  }\n\n  /* Center item alignment */\n  .timeline-item.center .timeline-sticker-wrapper {\n    left: calc(50% + 200px);\n    transform: scale(0.8) translateY(20px);\n    top: -20px;\n  }\n\n  .timeline-item.center.active .timeline-sticker-wrapper {\n    transform: scale(1) translateY(0);\n  }\n\n  .timeline-desc {\n    font-family: var(--font-sans); /* readable font */\n    font-size: 1.05rem;\n    line-height: 1.7;\n    margin: 0;\n    color: var(--text);\n    display: inline-block;\n    max-width: 400px;\n    text-align: left;\n  }\n\n  /* Right align description block for left items */\n  .timeline-item.left .timeline-desc {\n    margin-left: auto;\n    text-align: right;\n  }\n\n  @media (max-width: 768px) {\n    .timeline-line-base {\n      left: 30px;\n      transform: none;\n    }\n\n    .timeline-line-progress {\n      left: 30px;\n      transform: scaleY(var(--scroll-progress, 0));\n    }\n\n    .timeline-headers {\n      display: none;\n    }\n\n    .item-tag {\n      display: inline-block;\n    }\n\n    .timeline-item {\n      width: 100%;\n      padding: 40px 0 0 40px;\n\n      &:not(:first-child) {\n        margin-top: 0 !important; /* Reset tight spacing on mobile */\n      }\n\n      &.left,\n      &.right,\n      &.center {\n        align-self: flex-start;\n        text-align: left;\n        padding: 40px 0 0 40px;\n\n        .timeline-content {\n          transform: translateX(-20px);\n          @media (max-width: 768px) {\n            transform: translateX(-10px);\n          }\n        }\n\n        .timeline-marker {\n          left: 5px;\n          right: auto;\n          top: 60px;\n          transform: none;\n        }\n\n        .timeline-desc {\n          margin-left: 0;\n          text-align: left;\n        }\n\n        .timeline-sticker-wrapper {\n          left: auto !important;\n          right: -100px !important;\n          top: -50px !important;\n          transform: scale(0.7) translateY(20px);\n        }\n      }\n\n      &.active {\n        .timeline-content {\n          transform: translateX(0);\n        }\n\n        .timeline-sticker-wrapper {\n          transform: scale(0.7) translateY(0);\n        }\n      }\n    }\n  }\n</style>\n\n<script lang="ts">\n  function initTimeline() {\n    const container = document.getElementById("timeline-container");\n    const items = document.querySelectorAll("[data-timeline-item]");\n\n    if (!container || !items.length) return;\n\n    function updateProgress() {\n      const cnt = document.getElementById("timeline-container");\n      if (!cnt) return;\n\n      const rect = cnt.getBoundingClientRect();\n      const center = window.innerHeight / 2;\n\n      let lineStartPos = 0;\n      const firstItem = items[0];\n      if (firstItem) {\n        const firstMarker = firstItem.querySelector(".timeline-marker");\n        if (firstMarker) {\n          const markerRect = firstMarker.getBoundingClientRect();\n          lineStartPos = markerRect.top + markerRect.height / 2 - rect.top;\n        }\n      }\n\n      // Calculate dynamically where the line should end (center of the last item margin)\n      let lineEndPos = rect.height;\n      const lastItem = items[items.length - 1];\n      if (lastItem) {\n        const lastMarker = lastItem.querySelector(".timeline-marker");\n        if (lastMarker) {\n          const markerRect = lastMarker.getBoundingClientRect();\n          lineEndPos = markerRect.top + markerRect.height / 2 - rect.top;\n        }\n      }\n\n      cnt.style.setProperty("--line-start", `${lineStartPos}px`);\n      cnt.style.setProperty("--line-height", `${lineEndPos - lineStartPos}px`);\n\n      // Calculate how far the center of the screen has traveled down the container bounded by markers\n      const totalLineLength = lineEndPos - lineStartPos;\n      const traveled = center - rect.top - lineStartPos;\n\n      let progress = traveled / totalLineLength;\n      progress = Math.max(0, Math.min(1, progress));\n\n      // Update CSS custom property natively\n      cnt.style.setProperty("--scroll-progress", progress.toString());\n\n      // The tip of the physical progress indicator currently sits exactly at `center` vertically.\n      // Activate each item exactly when the indicator tip passes its marker center.\n      items.forEach((item) => {\n        const marker = item.querySelector(".timeline-marker");\n        if (!marker) return;\n\n        const markerRect = marker.getBoundingClientRect();\n        // Trigger right in the middle of the marker dot\n        const markerCenter = markerRect.top + markerRect.height / 2;\n\n        // If the scrolling indicator tip (which is located at viewport `center`)\n        // goes beneath or equal to the marker, it implies the indicator has touched it.\n        if (center >= markerCenter) {\n          item.classList.add("active");\n        } else {\n          item.classList.remove("active");\n        }\n      });\n    }\n\n    // Smooth scroll tracking\n    let ticking = false;\n    function onScroll() {\n      if (!ticking) {\n        window.requestAnimationFrame(() => {\n          updateProgress();\n          ticking = false;\n        });\n        ticking = true;\n      }\n    }\n\n    window.addEventListener("scroll", onScroll, { passive: true });\n    window.addEventListener("resize", onScroll, { passive: true });\n\n    // Initial paint calculation\n    updateProgress();\n  }\n\n  // Run on load and astro page transitions\n  initTimeline();\n  document.addEventListener("astro:page-load", initTimeline);\n<\/script>\n';
async function getStaticPaths() {
  const rawModules = /* @__PURE__ */ Object.assign({ "../../../components/ArtifactSticker.astro": __vite_glob_0_0, "../../../components/ComparisonSlider.astro": __vite_glob_0_1, "../../../components/DevMenu.astro": __vite_glob_0_2, "../../../components/Footer.astro": __vite_glob_0_3, "../../../components/Navigation.astro": __vite_glob_0_4, "../../../components/PressCoverage.astro": __vite_glob_0_5, "../../../components/ProjectsSection.astro": __vite_glob_0_6, "../../../components/SignupForm.astro": __vite_glob_0_7, "../../../components/TableOfContents.astro": __vite_glob_0_8, "../../../components/Timeline.astro": __vite_glob_0_9 });
  return Object.keys(rawModules).map((filePath) => {
    const name = filePath.split("/").pop()?.replace(".astro", "") || "";
    return {
      params: { component: name },
      props: {
        rawContent: rawModules[filePath],
        path: filePath.replace("../../../", "src/")
      }
    };
  });
}
const $$component = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$component;
  const { component } = Astro2.params;
  const { rawContent, path } = Astro2.props;
  const modules = /* @__PURE__ */ Object.assign({ "../../../components/ArtifactSticker.astro": __vite_glob_1_0, "../../../components/ComparisonSlider.astro": __vite_glob_1_1, "../../../components/DevMenu.astro": __vite_glob_1_2, "../../../components/Footer.astro": __vite_glob_1_3, "../../../components/Navigation.astro": __vite_glob_1_4, "../../../components/PressCoverage.astro": __vite_glob_1_5, "../../../components/ProjectsSection.astro": __vite_glob_1_6, "../../../components/SignupForm.astro": __vite_glob_1_7, "../../../components/TableOfContents.astro": __vite_glob_1_8, "../../../components/Timeline.astro": __vite_glob_1_9 });
  const targetPath = Object.keys(modules).find((p) => p.endsWith(`/${component}.astro`));
  const LiveComponent = targetPath ? modules[targetPath].default : null;
  const mockData = {
    Timeline: {
      items: [
        { year: "1979", title: "Space Element", description: "The iconic 1979 space set computer tile model.", tag: "Classic", image: "/images/Apple.png" },
        { year: "2026", title: "M2X2 Project", description: "Scaling a legend setup into a desk workstation framework.", tag: "Modern", image: "/images/Apple.png" }
      ]
    },
    ArtifactSticker: {
      src: "/images/Apple.png",
      alt: "Mock Product Sticker",
      rotation: "3deg",
      hasTape: true
    },
    ComparisonSlider: {
      beforeImage: "/images/Gogh_sketch.png",
      afterImage: "/images/Gogh_starry.png"
    },
    PressCoverage: {
      items: [
        { outlet: "Designboom", logoSrc: "/images/press/designboom.svg", domain: "designboom.com", date: "2026", headline: "A modular SMART-BRICK layout setup to power up desk workflows.", link: "#", views: "1" },
        { outlet: "Yanko Design", logoSrc: "/images/press/yankodesign.png", domain: "yankodesign.com", date: "2026", headline: "Watt IV blends enchanted space aesthetics together perfectly.", link: "#", views: "1" }
      ]
    },
    Navigation: {},
    Footer: {},
    ProjectsSection: {}
  };
  const currentMock = mockData[component] || {};
  const frontmatterMatch = rawContent.match(/^\-\-\-([\s\S]*?)\-\-\-/);
  const propsConfig = frontmatterMatch ? frontmatterMatch[1].trim() : "// No explicit options/frontmatter defined";
  const cleanTemplate = rawContent.replace(/^\-\-\-[\s\S]*?\-\-\-/g, "").trim();
  const descriptionMatch = cleanTemplate.match(/<!--([\s\S]*?)-->/);
  const description = descriptionMatch ? descriptionMatch[1].trim() : "Custom layout component designed uniquely for the Watt-IV grid layout.";
  return renderTemplate`${renderComponent($$result, "EmptyLayout", $$EmptyLayout, { "title": `Component: ${component}`, "description": `Details for ${component}`, "bodyClass": "guidelines-page" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})} ${maybeRenderHead()}<div class="scroll-container"> <main class="guideline-container"> <div class="guidelines-wrapper"> <a href="/guidelines/components" class="back-link">← Back to Components</a> <article class="guideline-page"> <header class="component-header"> <div class="header-main"> <h1>${component}</h1> <span class="path-tag"><code>${path}</code></span> </div> <p class="description">${description}</p> </header> <!-- 🌟 LIVE PREVIEW SECTION --> <section class="doc-section"> <h2>Live Preview</h2> <p>Behold an active instance running loaded with mock parameters:</p> <div class="render-container"> ${LiveComponent && renderTemplate`${renderComponent($$result2, "LiveComponent", LiveComponent, { ...currentMock })}`} </div> </section> <section class="doc-section"> <h2>Options & Props Configuration</h2> <p>Inside the Astro file, the following types or let/configs are declared for parameter routes:</p> <div class="code-block"> <pre><code>${propsConfig}</code></pre> </div> </section> <section class="doc-section"> <h2>Usage Blueprint</h2> <p>To implement this in your layout templates, import relative file buffers absolute:</p> <div class="code-block"> <pre><code>${`---
import ${component} from "../../components/${component}.astro";
---

<${component} />`}</code></pre> </div> </section> </article> </div> </main> </div> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/paul/Documents/wattiv.nl/WattIV-website-dev/src/pages/guidelines/components/[component].astro", void 0);
const $$file = "/Users/paul/Documents/wattiv.nl/WattIV-website-dev/src/pages/guidelines/components/[component].astro";
const $$url = "/guidelines/components/[component]";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$component,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
