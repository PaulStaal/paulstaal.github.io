globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_Cc_OYe2s.mjs";
import { b as renderTemplate, e as renderHead } from "./worker-entry_DfJyFfEK.mjs";
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$DaylightTest = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-qimpkmza> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Daylight Mode Test | Watt IV</title><link rel="stylesheet" href="shared.css"><link rel="stylesheet" href="play.css"><link rel="stylesheet" href="project.css"><link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet">', `</head> <body data-astro-cid-qimpkmza> <div class="test-content" data-astro-cid-qimpkmza> <a href="index.html" class="back-link" data-astro-cid-qimpkmza>← Back to Home</a> <div class="mode-status" data-astro-cid-qimpkmza>ACTIVE: DAYLIGHT MODE</div> <h1 data-astro-cid-qimpkmza>Color Playground</h1> <p class="subtitle" data-astro-cid-qimpkmza>Drag the slider below to simulate the sun's trajectory and see the OKLCH interpolation in
            action.</p> <div class="preview-grid" data-astro-cid-qimpkmza> <div class="preview-item" data-astro-cid-qimpkmza> <h3 data-astro-cid-qimpkmza>Typography</h3> <p data-astro-cid-qimpkmza>This text contrast with the background is calculated dynamically.</p> <div style="color: var(--primary); font-size: 2rem; font-family: var(--font-serif);" data-astro-cid-qimpkmza>Heading Style</div> </div> <div class="preview-item" data-astro-cid-qimpkmza> <h3 data-astro-cid-qimpkmza>UI Components</h3> <div style="display: flex; flex-direction: column; gap: 15px;" data-astro-cid-qimpkmza> <button class="btn-exp" style="border: 1px solid var(--text); padding: 10px; background: none; border-radius: 5px; color: var(--text);" data-astro-cid-qimpkmza>Ghost
                        Button</button> <div style="background: var(--accent-bg); padding: 15px; border-radius: 10px; text-align: center;" data-astro-cid-qimpkmza>
Accent Surface
</div> </div> </div> <div class="preview-item" data-astro-cid-qimpkmza> <h3 data-astro-cid-qimpkmza>Cards</h3> <div class="project-picture-card" style="height: 150px; background: var(--primary); color: white; display: flex; align-items: center; justify-content: center; font-weight: bold;" data-astro-cid-qimpkmza>
PRIMARY BLOCK
</div> </div> </div> <section style="margin-top: 100px;" data-astro-cid-qimpkmza> <p data-astro-cid-qimpkmza><strong data-astro-cid-qimpkmza>Logic Note:</strong> The interpolation uses <code data-astro-cid-qimpkmza>color-mix()</code> logic with
<code data-astro-cid-qimpkmza>oklch</code> constants defined in <code data-astro-cid-qimpkmza>theme.js</code>. It ensures that the perceived "white"
                point of the page shifts from cool blue (Midnight) to warm amber (Sunset) without losing legibility.</p> </section> </div> <div class="test-controls" data-astro-cid-qimpkmza> <div class="slider-header" data-astro-cid-qimpkmza> <h3 data-astro-cid-qimpkmza>Time of Day</h3> <div class="time-display" id="time-val" data-astro-cid-qimpkmza>12:00</div> </div> <input type="range" id="time-slider" min="0" max="23.9" step="0.1" value="12" data-astro-cid-qimpkmza> <div class="time-labels" data-astro-cid-qimpkmza> <span data-astro-cid-qimpkmza>Midnight</span> <span data-astro-cid-qimpkmza>Noon</span> <span data-astro-cid-qimpkmza>Midnight</span> </div> <div style="margin-top: 20px; text-align: center;" data-astro-cid-qimpkmza> <button id="resume-realtime" style="background: none; border: 1px solid var(--primary); color: var(--primary); padding: 5px 10px; border-radius: 5px; font-size: 0.8rem; cursor: pointer;" data-astro-cid-qimpkmza>Resume
                Real-time</button> </div> </div> <script lang="ts">
        const slider = document.getElementById('time-slider');
        const display = document.getElementById('time-val');
        const resumeBtn = document.getElementById('resume-realtime');
        let isOverridden = true;

        function formatTime(val) {
            const hours = Math.floor(val);
            const minutes = Math.round((val - hours) * 60);
            return \`\${hours.toString().padStart(2, '0')}:\${minutes.toString().padStart(2, '0')}\`;
        }

        function update() {
            if (!isOverridden) return;
            const val = parseFloat(slider.value);
            display.textContent = formatTime(val);

            // Call the theme.js function with override
            if (typeof updateDaylightStyles === 'function') {
                document.documentElement.classList.add('daylight-mode');
                updateDaylightStyles(val);
            }
        }

        slider.addEventListener('input', () => {
            isOverridden = true;
            update();
        });

        resumeBtn.addEventListener('click', () => {
            isOverridden = false;
            if (typeof updateDaylightStyles === 'function') {
                updateDaylightStyles(); // Resume real time
            }
            // Sync slider to current time
            const now = new Date();
            const currentTime = now.getHours() + now.getMinutes() / 60;
            slider.value = currentTime;
            display.textContent = formatTime(currentTime);
        });

        // Forced initialization
        window.addEventListener('load', () => {
            update();
        });
    <\/script> </body> </html>`], ['<html lang="en" data-astro-cid-qimpkmza> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Daylight Mode Test | Watt IV</title><link rel="stylesheet" href="shared.css"><link rel="stylesheet" href="play.css"><link rel="stylesheet" href="project.css"><link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet">', `</head> <body data-astro-cid-qimpkmza> <div class="test-content" data-astro-cid-qimpkmza> <a href="index.html" class="back-link" data-astro-cid-qimpkmza>← Back to Home</a> <div class="mode-status" data-astro-cid-qimpkmza>ACTIVE: DAYLIGHT MODE</div> <h1 data-astro-cid-qimpkmza>Color Playground</h1> <p class="subtitle" data-astro-cid-qimpkmza>Drag the slider below to simulate the sun's trajectory and see the OKLCH interpolation in
            action.</p> <div class="preview-grid" data-astro-cid-qimpkmza> <div class="preview-item" data-astro-cid-qimpkmza> <h3 data-astro-cid-qimpkmza>Typography</h3> <p data-astro-cid-qimpkmza>This text contrast with the background is calculated dynamically.</p> <div style="color: var(--primary); font-size: 2rem; font-family: var(--font-serif);" data-astro-cid-qimpkmza>Heading Style</div> </div> <div class="preview-item" data-astro-cid-qimpkmza> <h3 data-astro-cid-qimpkmza>UI Components</h3> <div style="display: flex; flex-direction: column; gap: 15px;" data-astro-cid-qimpkmza> <button class="btn-exp" style="border: 1px solid var(--text); padding: 10px; background: none; border-radius: 5px; color: var(--text);" data-astro-cid-qimpkmza>Ghost
                        Button</button> <div style="background: var(--accent-bg); padding: 15px; border-radius: 10px; text-align: center;" data-astro-cid-qimpkmza>
Accent Surface
</div> </div> </div> <div class="preview-item" data-astro-cid-qimpkmza> <h3 data-astro-cid-qimpkmza>Cards</h3> <div class="project-picture-card" style="height: 150px; background: var(--primary); color: white; display: flex; align-items: center; justify-content: center; font-weight: bold;" data-astro-cid-qimpkmza>
PRIMARY BLOCK
</div> </div> </div> <section style="margin-top: 100px;" data-astro-cid-qimpkmza> <p data-astro-cid-qimpkmza><strong data-astro-cid-qimpkmza>Logic Note:</strong> The interpolation uses <code data-astro-cid-qimpkmza>color-mix()</code> logic with
<code data-astro-cid-qimpkmza>oklch</code> constants defined in <code data-astro-cid-qimpkmza>theme.js</code>. It ensures that the perceived "white"
                point of the page shifts from cool blue (Midnight) to warm amber (Sunset) without losing legibility.</p> </section> </div> <div class="test-controls" data-astro-cid-qimpkmza> <div class="slider-header" data-astro-cid-qimpkmza> <h3 data-astro-cid-qimpkmza>Time of Day</h3> <div class="time-display" id="time-val" data-astro-cid-qimpkmza>12:00</div> </div> <input type="range" id="time-slider" min="0" max="23.9" step="0.1" value="12" data-astro-cid-qimpkmza> <div class="time-labels" data-astro-cid-qimpkmza> <span data-astro-cid-qimpkmza>Midnight</span> <span data-astro-cid-qimpkmza>Noon</span> <span data-astro-cid-qimpkmza>Midnight</span> </div> <div style="margin-top: 20px; text-align: center;" data-astro-cid-qimpkmza> <button id="resume-realtime" style="background: none; border: 1px solid var(--primary); color: var(--primary); padding: 5px 10px; border-radius: 5px; font-size: 0.8rem; cursor: pointer;" data-astro-cid-qimpkmza>Resume
                Real-time</button> </div> </div> <script lang="ts">
        const slider = document.getElementById('time-slider');
        const display = document.getElementById('time-val');
        const resumeBtn = document.getElementById('resume-realtime');
        let isOverridden = true;

        function formatTime(val) {
            const hours = Math.floor(val);
            const minutes = Math.round((val - hours) * 60);
            return \\\`\\\${hours.toString().padStart(2, '0')}:\\\${minutes.toString().padStart(2, '0')}\\\`;
        }

        function update() {
            if (!isOverridden) return;
            const val = parseFloat(slider.value);
            display.textContent = formatTime(val);

            // Call the theme.js function with override
            if (typeof updateDaylightStyles === 'function') {
                document.documentElement.classList.add('daylight-mode');
                updateDaylightStyles(val);
            }
        }

        slider.addEventListener('input', () => {
            isOverridden = true;
            update();
        });

        resumeBtn.addEventListener('click', () => {
            isOverridden = false;
            if (typeof updateDaylightStyles === 'function') {
                updateDaylightStyles(); // Resume real time
            }
            // Sync slider to current time
            const now = new Date();
            const currentTime = now.getHours() + now.getMinutes() / 60;
            slider.value = currentTime;
            display.textContent = formatTime(currentTime);
        });

        // Forced initialization
        window.addEventListener('load', () => {
            update();
        });
    <\/script> </body> </html>`])), renderHead());
}, "/Users/paul/Documents/wattiv.nl/WattIV-website-dev/src/pages/tests/daylight-test.astro", void 0);
const $$file = "/Users/paul/Documents/wattiv.nl/WattIV-website-dev/src/pages/tests/daylight-test.astro";
const $$url = "/tests/daylight-test";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$DaylightTest,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
