globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_Cc_OYe2s.mjs";
import { b as renderTemplate, d as defineScriptVars, r as renderComponent, m as maybeRenderHead, c as addAttribute } from "./worker-entry_DfJyFfEK.mjs";
import { $ as $$EmptyLayout } from "./EmptyLayout_CC4PKGhi.mjs";
import { $ as $$Navigation } from "./Navigation_kQTwFikQ.mjs";
/* empty css                 */
/* empty css                     */
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$CardDeckTest = createComponent(($$result, $$props, $$slots) => {
  const projects = [
    {
      id: "computer",
      title: "the Computer",
      type: "project",
      role: "A 10:1 scaled LEGO workstation housing an M4 Mac Mini.",
      color: "var(--sophisticated-blue)",
      href: "/work/m2x2",
      image: "/images/Computer_lino.png"
    },
    {
      id: "keyboard",
      title: "the Keyboard",
      type: "project",
      role: "A split ergonomic keyboard designed for humans.",
      color: "var(--sophisticated-blue)",
      href: "/work/cogito",
      image: "/images/cogito/cogito_lino.png"
    },
    {
      id: "keyboard_fossil",
      title: "the Keyboard Fossil",
      type: "writings",
      role: "A fossil of the keyboard.",
      color: "var(--forest-haze)",
      href: "javascript:void(0)",
      image: null
    },
    {
      id: "arcade",
      title: "the Dino",
      type: "project",
      role: "A new home for an old friend.",
      color: "var(--sophisticated-blue)",
      href: "/work/dino",
      image: "/images/arcade_lino.png"
    },
    {
      id: "rock",
      title: "the Rock",
      type: "concept",
      role: "A calm screenless smart companion with a taptic engine brain.",
      color: "var(--primary)",
      href: "javascript:void(0)",
      image: null
    },
    {
      id: "sim",
      title: "the Mini sim",
      type: "project",
      role: "Found somewhere in a barn; A racing simulator built into an actual rusted 1984 Mini.",
      color: "var(--sophisticated-blue)",
      href: "javascript:void(0)",
      image: null
    },
    {
      id: "essay",
      title: "the Essay",
      type: "writings",
      role: "Reflections on physical weight, tactile feedback, and digital fatigue.",
      color: "var(--forest-haze)",
      href: "javascript:void(0)",
      image: null
    },
    {
      id: "dashboard",
      title: "the Dashboard",
      type: "project",
      role: "A home automation dashboard built from a vintage Austin Mini speedometer.",
      color: "var(--sophisticated-blue)",
      href: "javascript:void(0)",
      image: null
    },
    {
      id: "guitar",
      title: "the Guitar",
      type: "project",
      role: "An Interstella 5555 inspired Guitar Hero controller.",
      color: "var(--sophisticated-blue)",
      href: "javascript:void(0)",
      image: null
    },
    {
      id: "blue-falcon",
      title: "the Blue Falcon",
      type: "experiment",
      role: "An F-Zero inspired custom skin for a Tesla Model Y.",
      color: "var(--perhaps-purple)",
      href: "javascript:void(0)",
      image: null
    },
    {
      id: "shifter",
      title: "the Shifter",
      type: "experiment",
      role: "A vintage flight-control stick repurposed as a Tesla gear shifter.",
      color: "var(--perhaps-purple)",
      href: "javascript:void(0)",
      image: null
    },
    {
      id: "manifesto",
      title: "the Manifesto",
      type: "writings",
      role: "A set of design tenets advocating for slow hardware and quiet computing.",
      color: "var(--forest-haze)",
      href: "javascript:void(0)",
      image: null
    },
    {
      id: "wallet",
      title: "the Wallet",
      type: "project",
      role: "A small multi-tool wallet with a built-in writing cover.",
      color: "var(--sophisticated-blue)",
      href: "javascript:void(0)",
      image: null
    },
    {
      id: "dla",
      title: "DLA",
      type: "concept",
      role: "A three-letter abbreviation system for remembering key daily tasks.",
      color: "var(--primary)",
      href: "javascript:void(0)",
      image: null
    },
    {
      id: "dock",
      title: "the Dock",
      type: "project",
      role: "A retro Nintendo-inspired horizontal/vertical Switch 2 dock.",
      color: "var(--sophisticated-blue)",
      href: "javascript:void(0)",
      image: null
    }
  ];
  const BATCH = 3;
  return renderTemplate(_a || (_a = __template(["", "  <script>(function(){", '\n    const initDeck = () => {\n        let deckIndex = 0;\n        const deckZone = document.getElementById("deck-zone");\n        const deckCount = document.getElementById("deck-count");\n        const allCards = Array.from(document.querySelectorAll(".project-card"));\n        const resetBtn = document.getElementById("reset-btn");\n\n        if (!deckZone || !deckCount || !allCards.length) return;\n\n        function remaining() {\n            return total - deckIndex;\n        }\n\n        function updateDeck() {\n            deckCount.textContent = remaining();\n            deckZone.classList.toggle("is-empty", remaining() <= 0);\n        }\n\n        // --- Attach Interaction Logic Globally to ALL CARDS ---\n        allCards.forEach((card, i) => {\n            let startX = 0;\n            let isDragging = false;\n            let startIdx = -1;\n            let wasDragging = false;\n\n            card.onpointerdown = (e) => {\n                if (!(gameArea.classList.contains("var-fan") || gameArea.classList.contains("var-stack")))\n                    return;\n                startX = e.clientX;\n                isDragging = false;\n                wasDragging = false;\n                startIdx = parseInt(card.getAttribute("data-hand-index"));\n                if (startIdx === 0) card.style.transition = "none";\n                card.setPointerCapture(e.pointerId);\n            };\n\n            card.onpointermove = (e) => {\n                if (\n                    !startX ||\n                    !(gameArea.classList.contains("var-fan") || gameArea.classList.contains("var-stack"))\n                )\n                    return;\n                const deltaX = e.clientX - startX;\n                if (Math.abs(deltaX) > 10) {\n                    isDragging = true;\n                    wasDragging = true;\n                    // Visual feedback: nudge the card\n                    if (startIdx === 0) {\n                        card.style.transform = `translateX(${deltaX}px) rotate(${deltaX * 0.05}deg)`;\n                    }\n                }\n            };\n\n            const endDrag = (e, cancel = false) => {\n                if (!(gameArea.classList.contains("var-fan") || gameArea.classList.contains("var-stack")))\n                    return;\n                const deltaX = e.clientX - startX;\n                startX = 0;\n                card.releasePointerCapture(e.pointerId);\n                if (startIdx === 0) card.style.transition = "";\n                card.style.transform = ""; // Reset visual nudge\n\n                if (isDragging) {\n                    if (!cancel && Math.abs(deltaX) > 60) {\n                        if (startIdx === 0) {\n                            cycle(deltaX < 0 ? -1 : 1);\n                        } else {\n                            cycleToBack(startIdx);\n                        }\n                    }\n                    isDragging = false;\n                } else if (!cancel) {\n                    // Click logic\n                    if (startIdx > 0) {\n                        cycleToBack(startIdx);\n                    }\n                }\n            };\n\n            card.onpointerup = (e) => endDrag(e, false);\n            card.onpointercancel = (e) => endDrag(e, true);\n\n            // Catch actual click to prevent navigation if we just did a drag or it was a back card\n            card.onclick = (e) => {\n                if (gameArea.classList.contains("var-fan") || gameArea.classList.contains("var-stack")) {\n                    // Prevent navigation if it was a back card or we were dragging\n                    if (startIdx > 0 || wasDragging) {\n                        e.preventDefault();\n                        e.stopPropagation();\n                    }\n                }\n            };\n        });\n\n        function showCards(cards) {\n            allCards.forEach((c) => {\n                c.style.display = "none";\n                c.classList.remove("is-dealing");\n                c.removeAttribute("data-hand-index");\n            });\n\n            cards.forEach((card, i) => {\n                card.style.display = "flex";\n                card.setAttribute("data-hand-index", i); // For stack mode positioning\n                void card.offsetWidth;\n                card.style.animationDelay = `${i * 90}ms`;\n                card.classList.add("is-dealing");\n\n                card.onanimationend = () => {\n                    card.classList.remove("is-dealing");\n                };\n            });\n        }\n\n        function cycleToBack(targetIdx) {\n            const visibleCards = allCards.filter((c) => c.style.display === "flex");\n            visibleCards.forEach((c) => {\n                let cIdx = parseInt(c.getAttribute("data-hand-index"));\n                // Move clicked/dragged card to back, shift others forward\n                if (cIdx < targetIdx) {\n                    c.setAttribute("data-hand-index", cIdx + 1);\n                } else if (cIdx === targetIdx) {\n                    c.setAttribute("data-hand-index", 0);\n                }\n            });\n        }\n\n        function deal() {\n            if (remaining() <= 0) {\n                reset();\n                deal();\n                return;\n            }\n            const batch = allCards.slice(deckIndex, deckIndex + BATCH);\n            deckIndex += batch.length;\n            showCards(batch);\n            updateDeck();\n        }\n\n        function reset() {\n            deckIndex = 0;\n            updateDeck();\n        }\n\n        // --- Variation Switcher ---\n        const gameArea = document.getElementById("game-area");\n        const handContainer = document.getElementById("hand");\n        const varButtons = document.querySelectorAll(".var-btn");\n\n        const fanIndicator = document.getElementById("fan-indicator");\n        const prevBtn = document.getElementById("hand-prev");\n        const nextBtn = document.getElementById("hand-next");\n\n        function updateHandIndicator() {\n            if (gameArea.classList.contains("var-fan")) {\n                const frontCard = allCards.find((c) => c.getAttribute("data-hand-index") === "0");\n                if (frontCard) {\n                    const realIndex = parseInt(frontCard.getAttribute("data-index")) + 1;\n                    fanIndicator.textContent = `${realIndex} of ${total}`;\n                }\n            }\n        }\n\n        function cycle(dir) {\n            const visibleCards = allCards.filter((c) => c.style.display === "flex");\n            if (visibleCards.length <= 1) return;\n\n            visibleCards.forEach((c) => {\n                let cIdx = parseInt(c.getAttribute("data-hand-index"));\n                let nextIdx;\n                if (dir === 1) {\n                    // Forward\n                    nextIdx = (cIdx + 1) % visibleCards.length;\n                } else {\n                    // Backward\n                    nextIdx = (cIdx - 1 + visibleCards.length) % visibleCards.length;\n                }\n                c.setAttribute("data-hand-index", nextIdx);\n            });\n\n            updateHandIndicator();\n        }\n\n        if (prevBtn) prevBtn.addEventListener("click", () => cycle(-1));\n        if (nextBtn) nextBtn.addEventListener("click", () => cycle(1));\n\n        varButtons.forEach((btn) => {\n            btn.addEventListener("click", () => {\n                const variant = btn.dataset.var;\n\n                // Update UI\n                varButtons.forEach((b) => b.classList.remove("active"));\n                btn.classList.add("active");\n\n                // Update Layout\n                gameArea.classList.remove("var-grid", "var-carousel", "var-stack", "var-fan", "var-grid-all");\n                gameArea.classList.add(`var-${variant}`);\n\n                // In Fan or Grid-All mode, show EVERYTHING. In others, go back to batch.\n                if (variant === "fan" || variant === "grid-all") {\n                    allCards.forEach((c, i) => {\n                        c.style.display = "flex";\n                        c.setAttribute("data-hand-index", i);\n                    });\n                    updateHandIndicator();\n                } else {\n                    reset();\n                    deal();\n                }\n            });\n        });\n\n        // Click a back card to bring it front\n        handContainer.addEventListener("click", (e) => {\n            if (gameArea.classList.contains("var-fan") || gameArea.classList.contains("var-stack")) {\n                const card = e.target.closest(".project-card");\n                if (!card) return;\n                const idx = parseInt(card.getAttribute("data-hand-index"));\n                if (idx > 0) {\n                    e.preventDefault();\n                    // Keep cycling until this one is front\n                    for (let i = 0; i < idx; i++) cycle(1);\n                }\n            }\n        });\n\n        // Init\n        updateDeck();\n        deal();\n\n        // Unified click handler for deck / reshuffle\n        deckZone.addEventListener("click", (e) => {\n            if (remaining() <= 0) {\n                // If empty, reshuffle to fresh start\n                reset();\n                deal();\n            } else {\n                // Otherwise normal deal\n                deal();\n            }\n        });\n    };\n\n    // Re-run on every page load (works with View Transitions)\n    document.addEventListener("astro:page-load", initDeck);\n})();<\/script>'], ["", "  <script>(function(){", '\n    const initDeck = () => {\n        let deckIndex = 0;\n        const deckZone = document.getElementById("deck-zone");\n        const deckCount = document.getElementById("deck-count");\n        const allCards = Array.from(document.querySelectorAll(".project-card"));\n        const resetBtn = document.getElementById("reset-btn");\n\n        if (!deckZone || !deckCount || !allCards.length) return;\n\n        function remaining() {\n            return total - deckIndex;\n        }\n\n        function updateDeck() {\n            deckCount.textContent = remaining();\n            deckZone.classList.toggle("is-empty", remaining() <= 0);\n        }\n\n        // --- Attach Interaction Logic Globally to ALL CARDS ---\n        allCards.forEach((card, i) => {\n            let startX = 0;\n            let isDragging = false;\n            let startIdx = -1;\n            let wasDragging = false;\n\n            card.onpointerdown = (e) => {\n                if (!(gameArea.classList.contains("var-fan") || gameArea.classList.contains("var-stack")))\n                    return;\n                startX = e.clientX;\n                isDragging = false;\n                wasDragging = false;\n                startIdx = parseInt(card.getAttribute("data-hand-index"));\n                if (startIdx === 0) card.style.transition = "none";\n                card.setPointerCapture(e.pointerId);\n            };\n\n            card.onpointermove = (e) => {\n                if (\n                    !startX ||\n                    !(gameArea.classList.contains("var-fan") || gameArea.classList.contains("var-stack"))\n                )\n                    return;\n                const deltaX = e.clientX - startX;\n                if (Math.abs(deltaX) > 10) {\n                    isDragging = true;\n                    wasDragging = true;\n                    // Visual feedback: nudge the card\n                    if (startIdx === 0) {\n                        card.style.transform = \\`translateX(\\${deltaX}px) rotate(\\${deltaX * 0.05}deg)\\`;\n                    }\n                }\n            };\n\n            const endDrag = (e, cancel = false) => {\n                if (!(gameArea.classList.contains("var-fan") || gameArea.classList.contains("var-stack")))\n                    return;\n                const deltaX = e.clientX - startX;\n                startX = 0;\n                card.releasePointerCapture(e.pointerId);\n                if (startIdx === 0) card.style.transition = "";\n                card.style.transform = ""; // Reset visual nudge\n\n                if (isDragging) {\n                    if (!cancel && Math.abs(deltaX) > 60) {\n                        if (startIdx === 0) {\n                            cycle(deltaX < 0 ? -1 : 1);\n                        } else {\n                            cycleToBack(startIdx);\n                        }\n                    }\n                    isDragging = false;\n                } else if (!cancel) {\n                    // Click logic\n                    if (startIdx > 0) {\n                        cycleToBack(startIdx);\n                    }\n                }\n            };\n\n            card.onpointerup = (e) => endDrag(e, false);\n            card.onpointercancel = (e) => endDrag(e, true);\n\n            // Catch actual click to prevent navigation if we just did a drag or it was a back card\n            card.onclick = (e) => {\n                if (gameArea.classList.contains("var-fan") || gameArea.classList.contains("var-stack")) {\n                    // Prevent navigation if it was a back card or we were dragging\n                    if (startIdx > 0 || wasDragging) {\n                        e.preventDefault();\n                        e.stopPropagation();\n                    }\n                }\n            };\n        });\n\n        function showCards(cards) {\n            allCards.forEach((c) => {\n                c.style.display = "none";\n                c.classList.remove("is-dealing");\n                c.removeAttribute("data-hand-index");\n            });\n\n            cards.forEach((card, i) => {\n                card.style.display = "flex";\n                card.setAttribute("data-hand-index", i); // For stack mode positioning\n                void card.offsetWidth;\n                card.style.animationDelay = \\`\\${i * 90}ms\\`;\n                card.classList.add("is-dealing");\n\n                card.onanimationend = () => {\n                    card.classList.remove("is-dealing");\n                };\n            });\n        }\n\n        function cycleToBack(targetIdx) {\n            const visibleCards = allCards.filter((c) => c.style.display === "flex");\n            visibleCards.forEach((c) => {\n                let cIdx = parseInt(c.getAttribute("data-hand-index"));\n                // Move clicked/dragged card to back, shift others forward\n                if (cIdx < targetIdx) {\n                    c.setAttribute("data-hand-index", cIdx + 1);\n                } else if (cIdx === targetIdx) {\n                    c.setAttribute("data-hand-index", 0);\n                }\n            });\n        }\n\n        function deal() {\n            if (remaining() <= 0) {\n                reset();\n                deal();\n                return;\n            }\n            const batch = allCards.slice(deckIndex, deckIndex + BATCH);\n            deckIndex += batch.length;\n            showCards(batch);\n            updateDeck();\n        }\n\n        function reset() {\n            deckIndex = 0;\n            updateDeck();\n        }\n\n        // --- Variation Switcher ---\n        const gameArea = document.getElementById("game-area");\n        const handContainer = document.getElementById("hand");\n        const varButtons = document.querySelectorAll(".var-btn");\n\n        const fanIndicator = document.getElementById("fan-indicator");\n        const prevBtn = document.getElementById("hand-prev");\n        const nextBtn = document.getElementById("hand-next");\n\n        function updateHandIndicator() {\n            if (gameArea.classList.contains("var-fan")) {\n                const frontCard = allCards.find((c) => c.getAttribute("data-hand-index") === "0");\n                if (frontCard) {\n                    const realIndex = parseInt(frontCard.getAttribute("data-index")) + 1;\n                    fanIndicator.textContent = \\`\\${realIndex} of \\${total}\\`;\n                }\n            }\n        }\n\n        function cycle(dir) {\n            const visibleCards = allCards.filter((c) => c.style.display === "flex");\n            if (visibleCards.length <= 1) return;\n\n            visibleCards.forEach((c) => {\n                let cIdx = parseInt(c.getAttribute("data-hand-index"));\n                let nextIdx;\n                if (dir === 1) {\n                    // Forward\n                    nextIdx = (cIdx + 1) % visibleCards.length;\n                } else {\n                    // Backward\n                    nextIdx = (cIdx - 1 + visibleCards.length) % visibleCards.length;\n                }\n                c.setAttribute("data-hand-index", nextIdx);\n            });\n\n            updateHandIndicator();\n        }\n\n        if (prevBtn) prevBtn.addEventListener("click", () => cycle(-1));\n        if (nextBtn) nextBtn.addEventListener("click", () => cycle(1));\n\n        varButtons.forEach((btn) => {\n            btn.addEventListener("click", () => {\n                const variant = btn.dataset.var;\n\n                // Update UI\n                varButtons.forEach((b) => b.classList.remove("active"));\n                btn.classList.add("active");\n\n                // Update Layout\n                gameArea.classList.remove("var-grid", "var-carousel", "var-stack", "var-fan", "var-grid-all");\n                gameArea.classList.add(\\`var-\\${variant}\\`);\n\n                // In Fan or Grid-All mode, show EVERYTHING. In others, go back to batch.\n                if (variant === "fan" || variant === "grid-all") {\n                    allCards.forEach((c, i) => {\n                        c.style.display = "flex";\n                        c.setAttribute("data-hand-index", i);\n                    });\n                    updateHandIndicator();\n                } else {\n                    reset();\n                    deal();\n                }\n            });\n        });\n\n        // Click a back card to bring it front\n        handContainer.addEventListener("click", (e) => {\n            if (gameArea.classList.contains("var-fan") || gameArea.classList.contains("var-stack")) {\n                const card = e.target.closest(".project-card");\n                if (!card) return;\n                const idx = parseInt(card.getAttribute("data-hand-index"));\n                if (idx > 0) {\n                    e.preventDefault();\n                    // Keep cycling until this one is front\n                    for (let i = 0; i < idx; i++) cycle(1);\n                }\n            }\n        });\n\n        // Init\n        updateDeck();\n        deal();\n\n        // Unified click handler for deck / reshuffle\n        deckZone.addEventListener("click", (e) => {\n            if (remaining() <= 0) {\n                // If empty, reshuffle to fresh start\n                reset();\n                deal();\n            } else {\n                // Otherwise normal deal\n                deal();\n            }\n        });\n    };\n\n    // Re-run on every page load (works with View Transitions)\n    document.addEventListener("astro:page-load", initDeck);\n})();<\/script>'])), renderComponent($$result, "EmptyLayout", $$EmptyLayout, { "title": "Watt IV – Card Deck Test", "description": "Solitaire-style project card dealing", "data-astro-cid-kf5wy3qe": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, { "data-astro-cid-kf5wy3qe": true })} ${maybeRenderHead()}<main class="deck-page" data-astro-cid-kf5wy3qe> <header class="deck-header" data-astro-cid-kf5wy3qe> <p class="deck-eyebrow" data-astro-cid-kf5wy3qe>work</p> <h1 class="deck-title" data-astro-cid-kf5wy3qe>Projects</h1> <p class="deck-hint" data-astro-cid-kf5wy3qe>Click the deck to deal the next three</p> </header> <div class="controls-group" data-astro-cid-kf5wy3qe> <div class="variation-switcher" id="variation-switcher" data-astro-cid-kf5wy3qe> <button class="var-btn active" data-var="grid" data-astro-cid-kf5wy3qe>Grid</button> <button class="var-btn" data-var="fan" data-astro-cid-kf5wy3qe>Fan</button> <button class="var-btn" data-var="grid-all" data-astro-cid-kf5wy3qe>Show All</button> </div> </div> <div class="game-area" id="game-area" data-astro-cid-kf5wy3qe> <!-- LEFT: the deck pile --> <div class="deck-zone" id="deck-zone" data-astro-cid-kf5wy3qe> <div class="deck-pile" data-astro-cid-kf5wy3qe> <div class="deck-back b3" data-astro-cid-kf5wy3qe></div> <div class="deck-back b2" data-astro-cid-kf5wy3qe></div> <div class="deck-back b1" data-astro-cid-kf5wy3qe></div> <div class="deck-top" id="reset-btn" data-astro-cid-kf5wy3qe> <span class="deck-brand-text brand-top" data-astro-cid-kf5wy3qe>Watt IV</span> <div class="deck-logo-container" data-astro-cid-kf5wy3qe> <svg class="deck-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91.41 55.405" data-astro-cid-kf5wy3qe> <path d="m65.73 54.103 25.345-43.9a2.5 2.5 0 0 0-.915-3.414L78.982.335a2.5 2.5 0 0 0-3.415.915L60.17 27.916a1 1 0 0 1-1.732 0l-5.108-8.849a5 5 0 0 0-4.33-2.5H35.54a2.5 2.5 0 0 0-2.166 3.75l14.912 25.83a5 5 0 0 0 1.83 1.83l12.197 7.041a2.5 2.5 0 0 0 3.415-.915zM41.19 45.2 15.843 1.302a2.5 2.5 0 0 0-3.415-.915L1.25 6.84a2.5 2.5 0 0 0-.915 3.415l25.345 43.9a2.5 2.5 0 0 0 3.415.915l11.18-6.454a2.5 2.5 0 0 0 .914-3.415z" fill="currentColor" data-astro-cid-kf5wy3qe></path> </svg> </div> <span class="deck-brand-text brand-bottom" data-astro-cid-kf5wy3qe>Watt IV</span> <div class="deck-reshuffle-icon" data-astro-cid-kf5wy3qe> <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-kf5wy3qe> <path d="M21 2v6h-6" data-astro-cid-kf5wy3qe></path> <path d="M3 12a9 9 0 0 1 15-6.7L21 8" data-astro-cid-kf5wy3qe></path> <path d="M3 22v-6h6" data-astro-cid-kf5wy3qe></path> <path d="M21 12a9 9 0 0 1-15 6.7L3 16" data-astro-cid-kf5wy3qe></path> </svg> </div> </div> </div> <p class="deck-count-label" data-astro-cid-kf5wy3qe> <span id="deck-count" data-astro-cid-kf5wy3qe>${projects.length}</span> remaining
</p> </div> <!-- RIGHT: the 3 visible cards (ALL rendered, JS toggles visibility) --> <div class="hand-wrapper" data-astro-cid-kf5wy3qe> <div class="hand" id="hand" data-astro-cid-kf5wy3qe> <button class="hand-nav-btn prev" id="hand-prev" aria-label="Previous" data-astro-cid-kf5wy3qe>‹</button> ${projects.map((p, i) => renderTemplate`<a${addAttribute(p.href, "href")} class="project-card"${addAttribute(i, "data-index")} style="display:none;" data-astro-cid-kf5wy3qe> <div class="project-card-inner" data-astro-cid-kf5wy3qe> <div class="project-card-front"${addAttribute(`background-color: ${p.color};`, "style")} data-astro-cid-kf5wy3qe> <span class="card-large-number" data-astro-cid-kf5wy3qe> ${String(i + 1).padStart(2, "0")} </span> ${p.type && renderTemplate`<span class="card-type-label" data-astro-cid-kf5wy3qe>${p.type}</span>`} ${p.image ? renderTemplate`<img${addAttribute(p.image, "src")}${addAttribute(p.title, "alt")} draggable="false" data-astro-cid-kf5wy3qe>` : renderTemplate`<p class="image-placeholder" data-astro-cid-kf5wy3qe>◈</p>`} <div class="project-card-content" data-astro-cid-kf5wy3qe> <h3 data-astro-cid-kf5wy3qe>${p.title}</h3> <p class="role" data-astro-cid-kf5wy3qe>${p.role}</p> </div> </div> </div> </a>`)} <button class="hand-nav-btn next" id="hand-next" aria-label="Next" data-astro-cid-kf5wy3qe>›</button> </div> <p class="fan-indicator" id="fan-indicator" data-astro-cid-kf5wy3qe></p> </div> </div> </main> ` }), defineScriptVars({ BATCH, total: projects.length }));
}, "/Users/paul/Documents/wattiv.nl/WattIV-website-dev/src/pages/tests/card-deck-test.astro", void 0);
const $$file = "/Users/paul/Documents/wattiv.nl/WattIV-website-dev/src/pages/tests/card-deck-test.astro";
const $$url = "/tests/card-deck-test";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$CardDeckTest,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
