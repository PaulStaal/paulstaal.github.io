globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_Cc_OYe2s.mjs";
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead } from "./worker-entry_DfJyFfEK.mjs";
import { $ as $$EmptyLayout } from "./EmptyLayout_CC4PKGhi.mjs";
/* empty css                 */
/* empty css                     */
import { $ as $$Footer } from "./Footer_GVC8R8Uq.mjs";
import { $ as $$ProjectsSection } from "./ProjectsSection_BMziSnhZ.mjs";
import { $ as $$Navigation } from "./Navigation_kQTwFikQ.mjs";
import { $ as $$TableOfContents } from "./TableOfContents_CdcniSuK.mjs";
import { $ as $$Timeline } from "./Timeline_ChgZblDE.mjs";
import { $ as $$SignupForm } from "./SignupForm_Bnnms4Xg.mjs";
import { $ as $$Image } from "./_astro_assets_CZ37WrLU.mjs";
import { s as store_png } from "./store_dEzadGtP.mjs";
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a, _b;
const $$Dino = createComponent(($$result, $$props, $$slots) => {
  const timelineItems = [
    {
      year: "1971",
      title: "Computer Space",
      description: "Nolan Bushnell and Ted Dabney design the first commercial arcade video game; Computer Space. Housed in the futuristic, sculpted fiberglass cabinet, it marks the birth of public interactive play.",
      side: "left"
    },
    {
      year: "1972",
      title: "Pong",
      description: "Atari releases Pong, the first commercially successful coin-operated arcade game. Housed in a warm, woodgrain cabinet, its signature combination of natural textures and clean lines serves as the primary design inspiration for the Dino.",
      side: "right"
    },
    {
      year: "1978",
      title: "Space Invaders",
      description: "Taito releases Space Invaders, sparking the golden age of arcade games. It establishes the vertical screen and cabinet layout that defined early arcades.",
      side: "left"
    },
    {
      year: "1980",
      title: "Pac-Man",
      description: "Namco introduces Pac-Man, creating a global cultural phenomenon. The cabinet ceases to be just a machine; it becomes a monument of public culture.",
      side: "right"
    },
    {
      year: "1982",
      title: "The Golden Peak",
      description: "The arcade era reaches its cultural and financial peak. Thousands of crowded arcades across the globe become the epicenter of youth culture, introducing cutting-edge graphics and stereo sound.",
      side: "left"
    },
    {
      year: "2012",
      title: "The Emulation Era",
      description: "The launch of the Raspberry Pi and RetroPie project democratizes retro emulation. A computer the size of a credit card can now hold the history of arcade gaming.",
      side: "right"
    },
    {
      year: "2014",
      title: "The Chrome Dino",
      description: "Google Chrome releases the offline dinosaur game (T-Rex Runner) designed by Sebastien Gabriel. A simple pixel art dinosaur jumping over cacti becomes a universally loved interactive mascot for billions of offline users.",
      side: "left"
    },
    {
      year: "2026",
      title: "the Dino",
      description: "Watt IV unveils the Dino—a premium, living-room ready retro cabinet. Designed from first principles, it treats emulation not as a hobbyist project, but as a design centerpiece.",
      side: "left"
    }
  ];
  const tocLinks = [
    { id: "the-vision", label: "the Vision" },
    { id: "the-origin", label: "the Origin" },
    { id: "the-hardware", label: "the Hardware" },
    { id: "the-design", label: "the Design" },
    { id: "the-build", label: "the Build" },
    { id: "the-breakthrough", label: "the Breakthrough" },
    { id: "support-our-work", label: "Support our work" }
  ];
  return renderTemplate`${renderComponent($$result, "EmptyLayout", $$EmptyLayout, { "title": "Watt IV – the Dino", "description": "A reimagined retro arcade cabinet blending timeless nostalgia with modern craftsmanship.", "bodyClass": "project-v2", "data-astro-cid-6u3yph7e": true }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(["  ", " ", '<div class="scroll-container" data-astro-cid-6u3yph7e> <main data-astro-cid-6u3yph7e> <section class="hero-v2" data-astro-cid-6u3yph7e> <h1 class="giant-title" data-astro-cid-6u3yph7e> <span class="giant-title-inner" data-astro-cid-6u3yph7e> <span class="the-prefix" data-astro-cid-6u3yph7e>the</span> <span class="main-word" data-astro-cid-6u3yph7e>Dino</span> <span class="keyboard-suffix" data-astro-cid-6u3yph7e>arcade</span> </span> </h1> <div class="model-container-v2" data-astro-cid-6u3yph7e> ', ` </div> <p class="caption-v2" data-astro-cid-6u3yph7e>
FIG 03. THE DINO ARCADE CABINET // <span class="date" data-astro-cid-6u3yph7e>MAY '26</span> </p> </section> <!-- 1. THE VISION (The Spark) --> <section class="whatif-container" data-astro-cid-6u3yph7e> <div class="whatif-quote-block" data-astro-cid-6u3yph7e> <span class="quote-mark open" data-astro-cid-6u3yph7e>“</span> <p class="whatif_intro" data-astro-cid-6u3yph7e>
What if we could bring retro gaming out of the basement and into the living room, as a
                        piece of fine furniture?
</p> <span class="quote-mark close" data-astro-cid-6u3yph7e>”</span> </div> </section> `, ' <!-- THE VISION --> <section class="v2-content-section" data-astro-cid-6u3yph7e> <h2 id="the-vision" class="narrative-tag" data-astro-cid-6u3yph7e>the Vision</h2> <p data-astro-cid-6u3yph7e>\nThe Dino is a reimagined retro arcade cabinet built not by replicating the noisy, flashing\n                    plywood boxes of the 1980s, but by translating their spirit into a piece of contemporary,\n                    interactive furniture.\n</p> <p data-astro-cid-6u3yph7e>\nDesigned to reside in a modern living space rather than a damp basement, it combines a\n                    sleek, minimalist chassis, genuine Sanwa arcade controls, and a custom CRT-tuned IPS\n                    display. It is the result of asking how we can honor the games that shaped our childhood\n                    without cluttering the aesthetic of our homes.\n</p> </section> <!-- THE ORIGIN --> <section class="v2-content-section" data-astro-cid-6u3yph7e> <h2 id="the-origin" class="narrative-tag" data-astro-cid-6u3yph7e>the Origin</h2> <p data-astro-cid-6u3yph7e>\nPersonal computing and arcade gaming share a common ancestor: the joy of simple, tactile\n                    interaction. But as screens became flat and controls went virtual, we lost the physical\n                    connection to the play. The Dino traces this history back to its roots, bringing the\n                    tactile satisfaction of physical arcade controls into the modern era.\n</p> ', ` </section> <!-- THE HARDWARE --> <section class="v2-content-section" data-astro-cid-6u3yph7e> <h2 id="the-hardware" class="narrative-tag" data-astro-cid-6u3yph7e>the Hardware</h2> <p data-astro-cid-6u3yph7e>
Emulation is easy; feel is hard. The Dino is powered by a Raspberry Pi 4 running a highly
                    customized RetroPie build, tuned for zero-latency input and pixel-perfect scaling. But the
                    magic lies in the physical interface.
</p> <ul data-astro-cid-6u3yph7e> <li data-astro-cid-6u3yph7e> <strong data-astro-cid-6u3yph7e>Sanwa Controls:</strong> We sourced genuine Japanese Sanwa joysticks and LED-backlit
                        buttons. The microswitches provide the satisfying, crisp click that defined the tactile
                        language of the 1990s.
</li> <li data-astro-cid-6u3yph7e> <strong data-astro-cid-6u3yph7e>CRT Shader:</strong> A 24-inch high-refresh IPS monitor was selected for its wide
                        viewing angles. It runs a custom CRT scanline shader to reproduce the warm, organic glow
                        and slot-mask grid of original cathode-ray tube monitors.
</li> <li data-astro-cid-6u3yph7e> <strong data-astro-cid-6u3yph7e>Stereo Sound:</strong> Integrated class-D amplifiers power dual 3-inch full-range
                        drivers, delivering the punchy, low-fidelity synthesized audio of vintage arcade boards
                        with modern clarity.
</li> </ul> </section> <!-- THE DESIGN --> <section class="v2-content-section" data-astro-cid-6u3yph7e> <h2 id="the-design" class="narrative-tag" data-astro-cid-6u3yph7e>the Design</h2> <p data-astro-cid-6u3yph7e>
A standard arcade cabinet is a massive, imposing piece of black plywood. The Dino is
                    designed to be lighter, sleeker, and more organic.
</p> <p data-astro-cid-6u3yph7e>
It features a custom laser-cut MDF chassis, featuring tight press-fit joinery and clean
                    lines. The exterior is wrapped in a matte, textured dark grey vinyl that resists
                    fingerprints and blends into any modern interior design system.
</p> <p data-astro-cid-6u3yph7e>
From the cabinet design to the emulation software configuration, every aspect of this
                    arcade machine was built from scratch. It features a custom marquee, authentic arcade
                    controls, and a powerful backend. It's not just a game console; it's a piece of
                    interactive furniture.
</p> </section> <!-- THE BUILD (Comparison) --> <section class="v2-content-section" data-astro-cid-6u3yph7e> <h2 id="the-build" class="narrative-tag" data-astro-cid-6u3yph7e>the Build</h2> <p data-astro-cid-6u3yph7e>
Designed to be elegant, tabletop-friendly, and highly precise, the Dino contrasts sharply
                    with typical bulky, raw-board arcade hobbyist cabinets.
</p> <div class="comparison-table-wrapper" data-astro-cid-6u3yph7e> <table class="comparison-table" data-astro-cid-6u3yph7e> <thead data-astro-cid-6u3yph7e> <tr data-astro-cid-6u3yph7e> <th class="feature-col" data-astro-cid-6u3yph7e></th> <th class="model-col ergo-plus" data-astro-cid-6u3yph7e>the Dino</th> <th class="model-col ergo" data-astro-cid-6u3yph7e>Typical Cabinet</th> </tr> </thead> <tbody data-astro-cid-6u3yph7e> <tr data-astro-cid-6u3yph7e> <td class="feature-name" data-astro-cid-6u3yph7e>Material</td> <td data-astro-cid-6u3yph7e>Precision Laser-cut MDF</td> <td data-astro-cid-6u3yph7e>Heavy Plywood / Chipboard</td> </tr> <tr data-astro-cid-6u3yph7e> <td class="feature-name" data-astro-cid-6u3yph7e>Controls</td> <td data-astro-cid-6u3yph7e>Genuine Japanese Sanwa</td> <td data-astro-cid-6u3yph7e>Generic OEM clones</td> </tr> <tr data-astro-cid-6u3yph7e> <td class="feature-name" data-astro-cid-6u3yph7e>CRT Shader</td> <td data-astro-cid-6u3yph7e><span class="check" data-astro-cid-6u3yph7e>✓</span> Custom scanline filter</td> <td data-astro-cid-6u3yph7e>Raw pixels / blurry stretch</td> </tr> <tr data-astro-cid-6u3yph7e> <td class="feature-name" data-astro-cid-6u3yph7e>Display</td> <td data-astro-cid-6u3yph7e>24" High-refresh IPS</td> <td data-astro-cid-6u3yph7e>Thrifted TN monitors</td> </tr> <tr data-astro-cid-6u3yph7e> <td class="feature-name" data-astro-cid-6u3yph7e>Cabinet weight</td> <td data-astro-cid-6u3yph7e>Portable / tabletop-friendly</td> <td data-astro-cid-6u3yph7e>Massive (80kg+)</td> </tr> </tbody> </table> </div> </section> <!-- GALLERY PICTURES --> <section class="project-pictures" data-astro-cid-6u3yph7e> <div class="project-pictures-content" data-astro-cid-6u3yph7e> <div class="project-picture-wrapper" data-astro-cid-6u3yph7e> <div class="project-picture-card" onclick="openGalleryModal(this, 0)" data-astro-cid-6u3yph7e> <img src="/images/Dino.png" alt="The Dino Arcade Cabinet prototype with custom typography and classic lines." data-astro-cid-6u3yph7e> </div> <p class="card-description" data-astro-cid-6u3yph7e>
The Dino Arcade Cabinet prototype with custom typography and classic lines.
</p> </div> <div class="project-picture-wrapper" data-astro-cid-6u3yph7e> <div class="project-picture-card" onclick="openGalleryModal(this, 1)" data-astro-cid-6u3yph7e> <img src="/images/arcade_lino.png" alt="A schematic linocut vector illustration of the Dino Arcade design system." data-astro-cid-6u3yph7e> </div> <p class="card-description" data-astro-cid-6u3yph7e>
A schematic linocut vector illustration of the Dino Arcade design system.
</p> </div> </div> <div id="gallery-modal" class="gallery-modal" data-astro-cid-6u3yph7e> <span class="close-modal" onclick="closeGalleryModal()" data-astro-cid-6u3yph7e>&times;</span> <div class="gallery-modal-content" data-astro-cid-6u3yph7e> <!-- Content injected via JS --> </div> </div> </section> <!-- THE BREAKTHROUGH --> <section class="v2-content-section" data-astro-cid-6u3yph7e> <h2 id="the-breakthrough" class="narrative-tag" data-astro-cid-6u3yph7e>the Breakthrough</h2> <p data-astro-cid-6u3yph7e>
By only optimizing the cabinet size, you would never create an interactive centerpiece.
                    The Dino doesn't just play retro games; it honors them as a physical, cultural artifact.
</p> <p data-astro-cid-6u3yph7e>It is retro play, refined for the modern home. tactile, beautiful, and timeless.</p> <div style="margin-top: 60px;" data-astro-cid-6u3yph7e> `, ' </div> </section> <!-- SUPPORT --> <section class="v2-content-section" data-astro-cid-6u3yph7e> <h2 id="support-our-work" class="narrative-tag" data-astro-cid-6u3yph7e>Support our work</h2> <p data-astro-cid-6u3yph7e>\nYou can support our work by <strong data-astro-cid-6u3yph7e>making a donation</strong> or by <strong data-astro-cid-6u3yph7e>purchasing one of our products from our store.</strong> Your contribution directly funds the materials and coffee needed for the next prototype.\n</p> <div class="buttons" data-astro-cid-6u3yph7e> <a class="button" href="https://store.wattiv.nl/en-eur" target="_blank" rel="noopener noreferrer" data-astro-cid-6u3yph7e>To the store</a> </div> <div class="image_container" data-astro-cid-6u3yph7e> ', " </div> </section> ", " </main> </div> ", `  <script src="/shine.min.js"><\/script> <script>
        customElements.whenDefined("model-viewer").then(() => {
            const modelViewers = document.querySelectorAll("model-viewer");
            modelViewers.forEach((mv) => {
                const style = document.createElement("style");
                style.textContent = \`
                .container { outline: none !important; }
                .container:focus { outline: none !important; }
                .container:focus-visible { outline: none !important; }
                .userInput.show { outline: none !important; }
                .userInput.show:focus { outline: none !important; }
                .userInput.show:focus-visible { outline: none !important; }
            \`;
                if (mv.shadowRoot) {
                    mv.shadowRoot.appendChild(style);
                }
            });
        });
    <\/script> <script>
        // Gallery Modal Logic
        window.openGalleryModal = function (element, index) {
            const modal = document.getElementById("gallery-modal");
            const modalContent = modal.querySelector(".gallery-modal-content");

            const parentSection = element.closest(".project-pictures");
            const originalContainer = parentSection.querySelector(".project-pictures-content");

            modalContent.innerHTML = "";

            const wrappers = originalContainer.querySelectorAll(".project-picture-wrapper");
            wrappers.forEach((wrapper) => {
                const clone = wrapper.cloneNode(true);
                const card = clone.querySelector(".project-picture-card");
                if (card) {
                    card.onclick = null;
                    card.removeAttribute("onclick");
                }
                modalContent.appendChild(clone);
            });

            modal.classList.add("show");
            document.body.style.overflow = "hidden";
            document.body.classList.add("gallery-open");

            setTimeout(() => {
                const target = modalContent.children[index];
                if (target) {
                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                    });
                }
            }, 100);
        };

        window.closeGalleryModal = function () {
            const modal = document.getElementById("gallery-modal");
            modal.classList.remove("show");
            document.body.style.overflow = "";
            document.body.classList.remove("gallery-open");
        };

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                window.closeGalleryModal();
            }
        });

        document.addEventListener("DOMContentLoaded", () => {
            document.querySelectorAll(".project-pictures").forEach((section) => {
                const container = section.querySelector(".project-pictures-content");
                if (!container) return;

                const leftArrow = document.createElement("button");
                leftArrow.className = "nav-arrow prev-arrow";
                leftArrow.innerHTML =
                    '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>';
                leftArrow.setAttribute("aria-label", "Scroll left");

                const rightArrow = document.createElement("button");
                rightArrow.className = "nav-arrow next-arrow";
                rightArrow.innerHTML =
                    '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>';
                rightArrow.setAttribute("aria-label", "Scroll right");

                leftArrow.onclick = () => {
                    const firstItem = container.querySelector(".project-picture-wrapper");
                    const scrollAmount = firstItem ? firstItem.offsetWidth + 20 : container.clientWidth * 0.5;
                    container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
                };

                rightArrow.onclick = () => {
                    const firstItem = container.querySelector(".project-picture-wrapper");
                    const scrollAmount = firstItem ? firstItem.offsetWidth + 20 : container.clientWidth * 0.5;
                    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
                };

                section.appendChild(leftArrow);
                section.appendChild(rightArrow);

                const updateArrows = () => {
                    leftArrow.style.display = container.scrollLeft > 10 ? "flex" : "none";
                    rightArrow.style.display =
                        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
                            ? "flex"
                            : "none";
                };

                container.addEventListener("scroll", updateArrows);
                window.addEventListener("resize", updateArrows);
                setTimeout(updateArrows, 100);
            });
        });
    <\/script> `], ["  ", " ", '<div class="scroll-container" data-astro-cid-6u3yph7e> <main data-astro-cid-6u3yph7e> <section class="hero-v2" data-astro-cid-6u3yph7e> <h1 class="giant-title" data-astro-cid-6u3yph7e> <span class="giant-title-inner" data-astro-cid-6u3yph7e> <span class="the-prefix" data-astro-cid-6u3yph7e>the</span> <span class="main-word" data-astro-cid-6u3yph7e>Dino</span> <span class="keyboard-suffix" data-astro-cid-6u3yph7e>arcade</span> </span> </h1> <div class="model-container-v2" data-astro-cid-6u3yph7e> ', ` </div> <p class="caption-v2" data-astro-cid-6u3yph7e>
FIG 03. THE DINO ARCADE CABINET // <span class="date" data-astro-cid-6u3yph7e>MAY '26</span> </p> </section> <!-- 1. THE VISION (The Spark) --> <section class="whatif-container" data-astro-cid-6u3yph7e> <div class="whatif-quote-block" data-astro-cid-6u3yph7e> <span class="quote-mark open" data-astro-cid-6u3yph7e>“</span> <p class="whatif_intro" data-astro-cid-6u3yph7e>
What if we could bring retro gaming out of the basement and into the living room, as a
                        piece of fine furniture?
</p> <span class="quote-mark close" data-astro-cid-6u3yph7e>”</span> </div> </section> `, ' <!-- THE VISION --> <section class="v2-content-section" data-astro-cid-6u3yph7e> <h2 id="the-vision" class="narrative-tag" data-astro-cid-6u3yph7e>the Vision</h2> <p data-astro-cid-6u3yph7e>\nThe Dino is a reimagined retro arcade cabinet built not by replicating the noisy, flashing\n                    plywood boxes of the 1980s, but by translating their spirit into a piece of contemporary,\n                    interactive furniture.\n</p> <p data-astro-cid-6u3yph7e>\nDesigned to reside in a modern living space rather than a damp basement, it combines a\n                    sleek, minimalist chassis, genuine Sanwa arcade controls, and a custom CRT-tuned IPS\n                    display. It is the result of asking how we can honor the games that shaped our childhood\n                    without cluttering the aesthetic of our homes.\n</p> </section> <!-- THE ORIGIN --> <section class="v2-content-section" data-astro-cid-6u3yph7e> <h2 id="the-origin" class="narrative-tag" data-astro-cid-6u3yph7e>the Origin</h2> <p data-astro-cid-6u3yph7e>\nPersonal computing and arcade gaming share a common ancestor: the joy of simple, tactile\n                    interaction. But as screens became flat and controls went virtual, we lost the physical\n                    connection to the play. The Dino traces this history back to its roots, bringing the\n                    tactile satisfaction of physical arcade controls into the modern era.\n</p> ', ` </section> <!-- THE HARDWARE --> <section class="v2-content-section" data-astro-cid-6u3yph7e> <h2 id="the-hardware" class="narrative-tag" data-astro-cid-6u3yph7e>the Hardware</h2> <p data-astro-cid-6u3yph7e>
Emulation is easy; feel is hard. The Dino is powered by a Raspberry Pi 4 running a highly
                    customized RetroPie build, tuned for zero-latency input and pixel-perfect scaling. But the
                    magic lies in the physical interface.
</p> <ul data-astro-cid-6u3yph7e> <li data-astro-cid-6u3yph7e> <strong data-astro-cid-6u3yph7e>Sanwa Controls:</strong> We sourced genuine Japanese Sanwa joysticks and LED-backlit
                        buttons. The microswitches provide the satisfying, crisp click that defined the tactile
                        language of the 1990s.
</li> <li data-astro-cid-6u3yph7e> <strong data-astro-cid-6u3yph7e>CRT Shader:</strong> A 24-inch high-refresh IPS monitor was selected for its wide
                        viewing angles. It runs a custom CRT scanline shader to reproduce the warm, organic glow
                        and slot-mask grid of original cathode-ray tube monitors.
</li> <li data-astro-cid-6u3yph7e> <strong data-astro-cid-6u3yph7e>Stereo Sound:</strong> Integrated class-D amplifiers power dual 3-inch full-range
                        drivers, delivering the punchy, low-fidelity synthesized audio of vintage arcade boards
                        with modern clarity.
</li> </ul> </section> <!-- THE DESIGN --> <section class="v2-content-section" data-astro-cid-6u3yph7e> <h2 id="the-design" class="narrative-tag" data-astro-cid-6u3yph7e>the Design</h2> <p data-astro-cid-6u3yph7e>
A standard arcade cabinet is a massive, imposing piece of black plywood. The Dino is
                    designed to be lighter, sleeker, and more organic.
</p> <p data-astro-cid-6u3yph7e>
It features a custom laser-cut MDF chassis, featuring tight press-fit joinery and clean
                    lines. The exterior is wrapped in a matte, textured dark grey vinyl that resists
                    fingerprints and blends into any modern interior design system.
</p> <p data-astro-cid-6u3yph7e>
From the cabinet design to the emulation software configuration, every aspect of this
                    arcade machine was built from scratch. It features a custom marquee, authentic arcade
                    controls, and a powerful backend. It's not just a game console; it's a piece of
                    interactive furniture.
</p> </section> <!-- THE BUILD (Comparison) --> <section class="v2-content-section" data-astro-cid-6u3yph7e> <h2 id="the-build" class="narrative-tag" data-astro-cid-6u3yph7e>the Build</h2> <p data-astro-cid-6u3yph7e>
Designed to be elegant, tabletop-friendly, and highly precise, the Dino contrasts sharply
                    with typical bulky, raw-board arcade hobbyist cabinets.
</p> <div class="comparison-table-wrapper" data-astro-cid-6u3yph7e> <table class="comparison-table" data-astro-cid-6u3yph7e> <thead data-astro-cid-6u3yph7e> <tr data-astro-cid-6u3yph7e> <th class="feature-col" data-astro-cid-6u3yph7e></th> <th class="model-col ergo-plus" data-astro-cid-6u3yph7e>the Dino</th> <th class="model-col ergo" data-astro-cid-6u3yph7e>Typical Cabinet</th> </tr> </thead> <tbody data-astro-cid-6u3yph7e> <tr data-astro-cid-6u3yph7e> <td class="feature-name" data-astro-cid-6u3yph7e>Material</td> <td data-astro-cid-6u3yph7e>Precision Laser-cut MDF</td> <td data-astro-cid-6u3yph7e>Heavy Plywood / Chipboard</td> </tr> <tr data-astro-cid-6u3yph7e> <td class="feature-name" data-astro-cid-6u3yph7e>Controls</td> <td data-astro-cid-6u3yph7e>Genuine Japanese Sanwa</td> <td data-astro-cid-6u3yph7e>Generic OEM clones</td> </tr> <tr data-astro-cid-6u3yph7e> <td class="feature-name" data-astro-cid-6u3yph7e>CRT Shader</td> <td data-astro-cid-6u3yph7e><span class="check" data-astro-cid-6u3yph7e>✓</span> Custom scanline filter</td> <td data-astro-cid-6u3yph7e>Raw pixels / blurry stretch</td> </tr> <tr data-astro-cid-6u3yph7e> <td class="feature-name" data-astro-cid-6u3yph7e>Display</td> <td data-astro-cid-6u3yph7e>24" High-refresh IPS</td> <td data-astro-cid-6u3yph7e>Thrifted TN monitors</td> </tr> <tr data-astro-cid-6u3yph7e> <td class="feature-name" data-astro-cid-6u3yph7e>Cabinet weight</td> <td data-astro-cid-6u3yph7e>Portable / tabletop-friendly</td> <td data-astro-cid-6u3yph7e>Massive (80kg+)</td> </tr> </tbody> </table> </div> </section> <!-- GALLERY PICTURES --> <section class="project-pictures" data-astro-cid-6u3yph7e> <div class="project-pictures-content" data-astro-cid-6u3yph7e> <div class="project-picture-wrapper" data-astro-cid-6u3yph7e> <div class="project-picture-card" onclick="openGalleryModal(this, 0)" data-astro-cid-6u3yph7e> <img src="/images/Dino.png" alt="The Dino Arcade Cabinet prototype with custom typography and classic lines." data-astro-cid-6u3yph7e> </div> <p class="card-description" data-astro-cid-6u3yph7e>
The Dino Arcade Cabinet prototype with custom typography and classic lines.
</p> </div> <div class="project-picture-wrapper" data-astro-cid-6u3yph7e> <div class="project-picture-card" onclick="openGalleryModal(this, 1)" data-astro-cid-6u3yph7e> <img src="/images/arcade_lino.png" alt="A schematic linocut vector illustration of the Dino Arcade design system." data-astro-cid-6u3yph7e> </div> <p class="card-description" data-astro-cid-6u3yph7e>
A schematic linocut vector illustration of the Dino Arcade design system.
</p> </div> </div> <div id="gallery-modal" class="gallery-modal" data-astro-cid-6u3yph7e> <span class="close-modal" onclick="closeGalleryModal()" data-astro-cid-6u3yph7e>&times;</span> <div class="gallery-modal-content" data-astro-cid-6u3yph7e> <!-- Content injected via JS --> </div> </div> </section> <!-- THE BREAKTHROUGH --> <section class="v2-content-section" data-astro-cid-6u3yph7e> <h2 id="the-breakthrough" class="narrative-tag" data-astro-cid-6u3yph7e>the Breakthrough</h2> <p data-astro-cid-6u3yph7e>
By only optimizing the cabinet size, you would never create an interactive centerpiece.
                    The Dino doesn't just play retro games; it honors them as a physical, cultural artifact.
</p> <p data-astro-cid-6u3yph7e>It is retro play, refined for the modern home. tactile, beautiful, and timeless.</p> <div style="margin-top: 60px;" data-astro-cid-6u3yph7e> `, ' </div> </section> <!-- SUPPORT --> <section class="v2-content-section" data-astro-cid-6u3yph7e> <h2 id="support-our-work" class="narrative-tag" data-astro-cid-6u3yph7e>Support our work</h2> <p data-astro-cid-6u3yph7e>\nYou can support our work by <strong data-astro-cid-6u3yph7e>making a donation</strong> or by <strong data-astro-cid-6u3yph7e>purchasing one of our products from our store.</strong> Your contribution directly funds the materials and coffee needed for the next prototype.\n</p> <div class="buttons" data-astro-cid-6u3yph7e> <a class="button" href="https://store.wattiv.nl/en-eur" target="_blank" rel="noopener noreferrer" data-astro-cid-6u3yph7e>To the store</a> </div> <div class="image_container" data-astro-cid-6u3yph7e> ', " </div> </section> ", " </main> </div> ", `  <script src="/shine.min.js"><\/script> <script>
        customElements.whenDefined("model-viewer").then(() => {
            const modelViewers = document.querySelectorAll("model-viewer");
            modelViewers.forEach((mv) => {
                const style = document.createElement("style");
                style.textContent = \\\`
                .container { outline: none !important; }
                .container:focus { outline: none !important; }
                .container:focus-visible { outline: none !important; }
                .userInput.show { outline: none !important; }
                .userInput.show:focus { outline: none !important; }
                .userInput.show:focus-visible { outline: none !important; }
            \\\`;
                if (mv.shadowRoot) {
                    mv.shadowRoot.appendChild(style);
                }
            });
        });
    <\/script> <script>
        // Gallery Modal Logic
        window.openGalleryModal = function (element, index) {
            const modal = document.getElementById("gallery-modal");
            const modalContent = modal.querySelector(".gallery-modal-content");

            const parentSection = element.closest(".project-pictures");
            const originalContainer = parentSection.querySelector(".project-pictures-content");

            modalContent.innerHTML = "";

            const wrappers = originalContainer.querySelectorAll(".project-picture-wrapper");
            wrappers.forEach((wrapper) => {
                const clone = wrapper.cloneNode(true);
                const card = clone.querySelector(".project-picture-card");
                if (card) {
                    card.onclick = null;
                    card.removeAttribute("onclick");
                }
                modalContent.appendChild(clone);
            });

            modal.classList.add("show");
            document.body.style.overflow = "hidden";
            document.body.classList.add("gallery-open");

            setTimeout(() => {
                const target = modalContent.children[index];
                if (target) {
                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                    });
                }
            }, 100);
        };

        window.closeGalleryModal = function () {
            const modal = document.getElementById("gallery-modal");
            modal.classList.remove("show");
            document.body.style.overflow = "";
            document.body.classList.remove("gallery-open");
        };

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                window.closeGalleryModal();
            }
        });

        document.addEventListener("DOMContentLoaded", () => {
            document.querySelectorAll(".project-pictures").forEach((section) => {
                const container = section.querySelector(".project-pictures-content");
                if (!container) return;

                const leftArrow = document.createElement("button");
                leftArrow.className = "nav-arrow prev-arrow";
                leftArrow.innerHTML =
                    '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>';
                leftArrow.setAttribute("aria-label", "Scroll left");

                const rightArrow = document.createElement("button");
                rightArrow.className = "nav-arrow next-arrow";
                rightArrow.innerHTML =
                    '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>';
                rightArrow.setAttribute("aria-label", "Scroll right");

                leftArrow.onclick = () => {
                    const firstItem = container.querySelector(".project-picture-wrapper");
                    const scrollAmount = firstItem ? firstItem.offsetWidth + 20 : container.clientWidth * 0.5;
                    container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
                };

                rightArrow.onclick = () => {
                    const firstItem = container.querySelector(".project-picture-wrapper");
                    const scrollAmount = firstItem ? firstItem.offsetWidth + 20 : container.clientWidth * 0.5;
                    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
                };

                section.appendChild(leftArrow);
                section.appendChild(rightArrow);

                const updateArrows = () => {
                    leftArrow.style.display = container.scrollLeft > 10 ? "flex" : "none";
                    rightArrow.style.display =
                        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
                            ? "flex"
                            : "none";
                };

                container.addEventListener("scroll", updateArrows);
                window.addEventListener("resize", updateArrows);
                setTimeout(updateArrows, 100);
            });
        });
    <\/script> `])), renderComponent($$result2, "Navigation", $$Navigation, { "data-astro-cid-6u3yph7e": true }), maybeRenderHead(), renderComponent($$result2, "model-viewer", "model-viewer", { "src": "/model_dino.glb", "poster": "/images/Dino.png", "alt": "A 3D model of the Dino Arcade Cabinet", "auto-rotate": true, "disable-zoom": true, "camera-controls": true, "touch-action": "pan-y", "shadow-intensity": "1", "shadow-softness": "1", "loading": "eager", "data-astro-cid-6u3yph7e": true }), renderComponent($$result2, "TableOfContents", $$TableOfContents, { "links": tocLinks, "data-astro-cid-6u3yph7e": true }), renderComponent($$result2, "Timeline", $$Timeline, { "items": timelineItems, "data-astro-cid-6u3yph7e": true }), renderComponent($$result2, "SignupForm", $$SignupForm, { "data-astro-cid-6u3yph7e": true }), renderComponent($$result2, "Image", $$Image, { "src": store_png, "alt": "Watt IV Store", "data-astro-cid-6u3yph7e": true }), renderComponent($$result2, "ProjectsSection", $$ProjectsSection, { "currentProject": "arcade", "title": "Other Projects", "showDescription": false, "narrowHeader": true, "data-astro-cid-6u3yph7e": true }), renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-6u3yph7e": true })), "head": ($$result2) => renderTemplate(_b || (_b = __template(['<fragment data-astro-cid-6u3yph7e> <link rel="icon" type="image/svg+xml" href="/images/favicon.svg"> <link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet"> <script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js"><\/script> </fragment>']))) })}`;
}, "/Users/paul/Documents/wattiv.nl/WattIV-website-dev/src/pages/work/dino.astro", void 0);
const $$file = "/Users/paul/Documents/wattiv.nl/WattIV-website-dev/src/pages/work/dino.astro";
const $$url = "/work/dino";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Dino,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
