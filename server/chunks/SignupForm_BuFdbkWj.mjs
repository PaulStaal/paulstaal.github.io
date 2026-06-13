globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_KNe951u6.mjs";
import { b as renderTemplate, m as maybeRenderHead } from "./worker-entry_BvOOjRSE.mjs";
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$SignupForm = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", `<div class="signup-form-container highlight-block" id="signup-container" data-astro-cid-jfgd5vnc> <div id="signup-form-state" data-astro-cid-jfgd5vnc> <h2 class="signup-label" data-astro-cid-jfgd5vnc>Don't miss what's next.</h2> <p class="signup-description mono" data-astro-cid-jfgd5vnc>
New projects, fresh ideas, and the occasional 'what if', delivered ~once a month. No noise.
</p> <form id="notify-form" class="notify-form" data-astro-cid-jfgd5vnc> <div class="input-wrapper" data-astro-cid-jfgd5vnc> <input type="email" id="notify-email" placeholder="human@example.com" required class="notify-input" data-astro-cid-jfgd5vnc> </div> <button type="submit" class="button notify-button button-reveal" style="--reveal-content: '→'; --reveal-size: 1.5rem;" data-astro-cid-jfgd5vnc>
I'm in
</button> </form> <p id="notify-msg" class="notify-msg" aria-live="polite" data-astro-cid-jfgd5vnc></p> </div> <div id="signup-success-state" data-astro-cid-jfgd5vnc> <div class="success-icon" data-astro-cid-jfgd5vnc> <svg width="40" height="40" viewBox="0 0 24 24" fill="none" class="success-checkmark" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-jfgd5vnc> <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" data-astro-cid-jfgd5vnc></path> <polyline points="22 4 12 14.01 9 11.01" data-astro-cid-jfgd5vnc></polyline> </svg> </div> <h3 class="signup-label" data-astro-cid-jfgd5vnc>YOU'RE ALL SET!</h3> <p class="success-message mono" data-astro-cid-jfgd5vnc>
Success — you've been added to our list. <br data-astro-cid-jfgd5vnc>
We'll notify you as soon as new work drops.
</p> </div> </div>  <script lang="ts">
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
<\/script>`])), maybeRenderHead());
}, "/Users/paul/Documents/wattiv.nl/WattIV-website-dev/src/components/SignupForm.astro", void 0);
const $$file = "/Users/paul/Documents/wattiv.nl/WattIV-website-dev/src/components/SignupForm.astro";
const $$url = void 0;
const __vite_glob_1_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$SignupForm,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
export {
  $$SignupForm as $,
  __vite_glob_1_7 as _
};
