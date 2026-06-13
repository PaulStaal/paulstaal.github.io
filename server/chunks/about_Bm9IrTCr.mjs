globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_KNe951u6.mjs";
import { b as renderTemplate, r as renderComponent, m as maybeRenderHead } from "./worker-entry_BvOOjRSE.mjs";
import { $ as $$EmptyLayout } from "./EmptyLayout_B-w9CryG.mjs";
/* empty css                 */
/* empty css                     */
import { $ as $$Footer } from "./Footer_DeQQDIvF.mjs";
import { $ as $$Navigation } from "./Navigation_CuXaFptD.mjs";
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a, _b;
const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_b || (_b = __template(["", '  <script>\n    document.addEventListener("astro:page-load", () => {\n        // Shadow DOM styling to remove outlines\n        customElements.whenDefined("model-viewer").then(() => {\n            const modelViewers = document.querySelectorAll("model-viewer");\n            modelViewers.forEach((mv) => {\n                const style = document.createElement("style");\n                style.textContent = `\n                .container { outline: none !important; }\n                .container:focus { outline: none !important; }\n                .container:focus-visible { outline: none !important; }\n                .userInput.show { outline: none !important; }\n                .userInput.show:focus { outline: none !important; }\n                .userInput.show:focus-visible { outline: none !important; }\n            `;\n                if (mv.shadowRoot) {\n                    mv.shadowRoot.appendChild(style);\n                }\n            });\n        });\n\n        // Custom color logic for the logo model\n        const logoModel = document.querySelector("#logo-model");\n        if (logoModel) {\n            const applyMaterial = () => {\n                if (!logoModel.model || !logoModel.model.materials) return;\n\n                const material = logoModel.model.materials[0];\n                if (material) {\n                    // Set to primary color #C44324\n                    material.pbrMetallicRoughness.setBaseColorFactor("#C44324");\n                    // Set metalness and roughness\n                    material.pbrMetallicRoughness.setMetallicFactor(0.19);\n                    material.pbrMetallicRoughness.setRoughnessFactor(0.35);\n                }\n            };\n\n            if (logoModel.model) {\n                applyMaterial();\n            } else {\n                logoModel.addEventListener("load", applyMaterial);\n            }\n        }\n    });\n<\/script>'], ["", '  <script>\n    document.addEventListener("astro:page-load", () => {\n        // Shadow DOM styling to remove outlines\n        customElements.whenDefined("model-viewer").then(() => {\n            const modelViewers = document.querySelectorAll("model-viewer");\n            modelViewers.forEach((mv) => {\n                const style = document.createElement("style");\n                style.textContent = \\`\n                .container { outline: none !important; }\n                .container:focus { outline: none !important; }\n                .container:focus-visible { outline: none !important; }\n                .userInput.show { outline: none !important; }\n                .userInput.show:focus { outline: none !important; }\n                .userInput.show:focus-visible { outline: none !important; }\n            \\`;\n                if (mv.shadowRoot) {\n                    mv.shadowRoot.appendChild(style);\n                }\n            });\n        });\n\n        // Custom color logic for the logo model\n        const logoModel = document.querySelector("#logo-model");\n        if (logoModel) {\n            const applyMaterial = () => {\n                if (!logoModel.model || !logoModel.model.materials) return;\n\n                const material = logoModel.model.materials[0];\n                if (material) {\n                    // Set to primary color #C44324\n                    material.pbrMetallicRoughness.setBaseColorFactor("#C44324");\n                    // Set metalness and roughness\n                    material.pbrMetallicRoughness.setMetallicFactor(0.19);\n                    material.pbrMetallicRoughness.setRoughnessFactor(0.35);\n                }\n            };\n\n            if (logoModel.model) {\n                applyMaterial();\n            } else {\n                logoModel.addEventListener("load", applyMaterial);\n            }\n        }\n    });\n<\/script>'])), renderComponent($$result, "EmptyLayout", $$EmptyLayout, { "title": "Watt IV - About", "description": "Meet Paul, the creator behind Watt IV. Bridging 14 years of code and design to build 'Enchanted Objects' in Eindhoven.", "bodyClass": "project-v2", "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate`    ${renderComponent($$result2, "Navigation", $$Navigation, { "data-astro-cid-kh7btl4r": true })} ${maybeRenderHead()}<div class="scroll-container" data-astro-cid-kh7btl4r> <main data-astro-cid-kh7btl4r> <!-- Hero V2: Focused on the Brand --> <section class="hero-v2" data-astro-cid-kh7btl4r> <h1 class="giant-title" data-astro-cid-kh7btl4r> <span class="giant-title-inner" data-astro-cid-kh7btl4r> <span class="the-prefix" data-astro-cid-kh7btl4r></span> <span class="main-word" data-astro-cid-kh7btl4r>About</span> </span> </h1> <div class="model-container-v2" data-astro-cid-kh7btl4r> ${renderComponent($$result2, "model-viewer", "model-viewer", { "id": "logo-model", "src": "/logo.glb", "alt": "A 3D model of the Watt IV Logo", "auto-rotate": true, "orientation": "0 0 20deg", "disable-zoom": true, "camera-controls": true, "touch-action": "pan-y", "shadow-intensity": "0", "shadow-softness": "1", "loading": "eager", "data-astro-cid-kh7btl4r": true })} </div> <!-- <p class="caption-v2">FIG 01. WATT IV logo.glb</p> --> </section> <!-- Intro Section --> <section class="whatif-container" data-astro-cid-kh7btl4r> <div class="whatif-quote-block" data-astro-cid-kh7btl4r> <span class="quote-mark open" data-astro-cid-kh7btl4r>“</span> <p class="whatif_intro" data-astro-cid-kh7btl4r>
Inspired by the question we asked way too often as kids, but rarely do as adults.
</p> <span class="quote-mark close" data-astro-cid-kh7btl4r>”</span> </div> </section> <section class="v2-content-section" data-astro-cid-kh7btl4r> <div class="intro-lead" data-astro-cid-kh7btl4r> <strong data-astro-cid-kh7btl4r>Hi, I'm Paul.</strong> <p data-astro-cid-kh7btl4r>
After studying Industrial Design in Eindhoven—the heart of Dutch innovation—I spent
                        nearly a decade working in different roles in the banking industry, ranging from
                        software developer to UX-designer and from business engineer to personalisation
                        marketeer. I truly liked what I did, but it always felt like something was missing.
</p> <p data-astro-cid-kh7btl4r>
Last year, the stars (and a corporate reorganisation) aligned. It gave me the silence
                        I needed to realize that my strength isn't in fitting into a role, but in connecting
                        the dots. My ambition lies at the intersection of the digital and the physical.
</p> <p data-astro-cid-kh7btl4r>
I created Watt IV to put the funk back in functional. A studio dedicated to designing
                        and building unique artifacts—from a 10:1 scale retro computer case for a Mac Mini to
                        smart objects with a sense of humor.
</p> <!-- <p>
                        <strong class="watt-iv">That is why I created Watt IV.</strong>
                    </p> --> <div class="highlight-block" data-astro-cid-kh7btl4r> <h2 data-astro-cid-kh7btl4r>the Mission</h2> <p data-astro-cid-kh7btl4r>
The mission is simple: <br data-astro-cid-kh7btl4r><strong data-astro-cid-kh7btl4r>Putting the funk back in functionality</strong>.
</p> <br data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>
We believe technology should spark curiosity, not noise. Bridging the gap between
                            digital precision and physical play and creating the artifacts we once only
                            dreamed of; where code becomes tactile and technology feels human again.
</p> </div> <!-- <div class="mission-box secondary">
                        <h3>The Tyranny of the Flat</h3>
                        <p>
                            We live in an era of disposable elegance—thin, flat, and devoid of character. At
                            Watt IV, we believe **thinness is a trap.** We are reclaiming the "chonk," the
                            weight, and the intention. Our objects don't just calculate; they inspire.
                        </p>
                    </div>

                    <div class="highlight-block secondary">
                        <h3>The Hand of the Maker</h3>
                        <p>
                            Our process is rooted in **Corrective Creativity**. We see the potential in the
                            messy corners of life. We celebrate the "Hand of the Maker"—our objects are
                            iterative, tactile, and intentionally imperfect. They are instruments, not just
                            gadgets.
                        </p>
                    </div> --> <h3 data-astro-cid-kh7btl4r>Watt IV?</h3> <p data-astro-cid-kh7btl4r>
The name is inspired by the question we asked way too often as kids, but rarely do as
                        adults. Watt IV is a reminder to keep asking "what if," to never stop being curious,
                        and to never stop creating.
</p> <p data-astro-cid-kh7btl4r>
We live in an age where anything is possible, especially with the rise of AI. But as
                        we move forward, we have to be careful not to lose the essence of what makes us human.
                        Technology must enhance our lives, not detract from them. It should be a tool for
                        creativity, not a flat pane of glass that feasts on our attention.
</p> <h3 data-astro-cid-kh7btl4r>So what can you expect?</h3> <p data-astro-cid-kh7btl4r>
This archive is a repository of my mind. You will find everything here: Whether they
                        are rough concepts, 3D-printed prototypes, or fully finished products with
                        instructions to build your own.
</p> <p data-astro-cid-kh7btl4r>
The M2x2 is the first artifact I created with Watt IV, but there are years of
                        suppressed "what-ifs" that I am really eager to share.
</p> <p data-astro-cid-kh7btl4r>
For years, I was a silent observer—absorbing the breakthroughs of others on Hackaday
                        and Reddit while keeping my own ideas in the margins. Starting Watt IV is my
                        transition from observation to orchestration. It is a giant leap for me personally,
                        but it’s time to stop watching the future and start shaping it.
</p> <p data-astro-cid-kh7btl4r>
I’m building the things I wish existed. I hope they bring a smile to your face, too.
</p> <p class="outro-tag" data-astro-cid-kh7btl4r> <strong data-astro-cid-kh7btl4r>Welcome to my mind. <br data-astro-cid-kh7btl4r><br data-astro-cid-kh7btl4r>Welcome to
<span class="watt-iv glitch-idle" data-astro-cid-kh7btl4r>Watt IV</span>.</strong> </p> <p data-astro-cid-kh7btl4r>Yours truly,<br data-astro-cid-kh7btl4r><span class="handwritten" data-astro-cid-kh7btl4r>Paul</span></p> <p class="location-stamp" data-astro-cid-kh7btl4r>
Eindhoven, NL <br data-astro-cid-kh7btl4r>
Log Update: 01-03-26
</p> </div> <!-- The Lab (Avatars) Section --> <!-- <section class="v2-content-section">
                    <h2>The Lab (How I Work)</h2>
                    <p>
                        Every breakthrough at Watt IV is handled by a different
                        side of my process. Depending on the sequence, I switch
                        between these roles to ensure every detail is
                        intentional.
                    </p>

                    <div class="team-grid">
                        <div class="team-member">
                            <h3>The Mastermind</h3>
                            <p>Defining the 'Why' behind every object.</p>
                        </div>
                        <div class="team-member">
                            <h3>The Designer</h3>
                            <p>Obsessing over form and resonance.</p>
                        </div>
                        <div class="team-member">
                            <h3>The Developer</h3>
                            <p>Writing the logic that animates the machine.</p>
                        </div>
                        <div class="team-member">
                            <h3>The Analyzer</h3>
                            <p>Testing the limits of every prototype.</p>
                        </div>
                        <div class="team-member">
                            <h3>The Dreamer</h3>
                            <p>Asking the 'What if?' without boundaries.</p>
                        </div>
                        <div class="team-member">
                            <h3>The Builder</h3>
                            <p>Hands-on construction in the Eindhoven lab.</p>
                        </div>
                        <div class="team-member">
                            <h3>The Fixer</h3>
                            <p>Troubleshooting the 'ghost in the machine'.</p>
                        </div>
                        <div class="team-member">
                            <h3>The Intern</h3>
                            <p>Learning the craft, one byte at a time.</p>
                        </div>
                    </div>
                </section> --> <!-- Inspiration Section --> <!-- <section class="v2-content-section">
                    <h2>Inspirations</h2>
                    <div class="inspirations-grid">
                        <div class="inspiration-item">Daft Punk</div>
                        <div class="inspiration-item">Home Automation</div>
                        <div class="inspiration-item">
                            Human Technology Interaction
                        </div>
                        <div class="inspiration-item">
                            Behavioral Psychology
                        </div>
                        <div class="inspiration-item">
                            3D Modeling & Printing
                        </div>
                        <div class="inspiration-item">Lego</div>
                        <div class="inspiration-item">Vintage Technology</div>
                    </div> --> </section> <!-- Mission Section --> <!-- Endorsements Section --> <!-- <section class="v2-content-section">
                <h2>In the Community</h2>
                <div class="endorsements-grid">
                    <div class="endorsement-card">
                        <p class="quote">
                            "Paul has a rare ability to think both in bits and
                            in atoms. He doesn't just build products; he builds
                            systems of meaning."
                        </p>
                        <p class="author">— Former Colleague</p>
                    </div>
                    <div class="endorsement-card">
                        <p class="quote">
                            "His 'What If' approach consistently pushed our team
                            out of our comfort zone, leading to our most
                            creative results."
                        </p>
                        <p class="author">— Design Partner</p>
                    </div>
                    <div class="endorsement-card">
                        <p class="quote">
                            "The unique intersection of software engineering and
                            industrial design makes Paul a one-man innovation
                            hub."
                        </p>
                        <p class="author">— Studio Collaborator</p>
                    </div>
                </div>
            </section> --> </main> </div>  ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-kh7btl4r": true })} `, "head": ($$result2) => renderTemplate(_a || (_a = __template(['<fragment data-astro-cid-kh7btl4r> <link rel="icon" type="image/svg+xml" href="/images/favicon.svg"> <link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet"> <script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js"><\/script> </fragment>']))) }));
}, "/Users/paul/Documents/wattiv.nl/WattIV-website-dev/src/pages/about.astro", void 0);
const $$file = "/Users/paul/Documents/wattiv.nl/WattIV-website-dev/src/pages/about.astro";
const $$url = "/about";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
