globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_KNe951u6.mjs";
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead } from "./worker-entry_BvOOjRSE.mjs";
import { $ as $$EmptyLayout } from "./EmptyLayout_B-w9CryG.mjs";
/* empty css                 */
/* empty css                     */
import { $ as $$Footer } from "./Footer_DeQQDIvF.mjs";
import { $ as $$ProjectsSection } from "./ProjectsSection_DWl-mqiU.mjs";
import { $ as $$Navigation } from "./Navigation_CuXaFptD.mjs";
import { $ as $$TableOfContents } from "./TableOfContents_DTYU7qZP.mjs";
import { $ as $$Timeline } from "./Timeline_BlvKircJ.mjs";
import { $ as $$SignupForm } from "./SignupForm_BuFdbkWj.mjs";
import { $ as $$Image } from "./_astro_assets_8ISsEdkt.mjs";
import { s as store_png } from "./store_dEzadGtP.mjs";
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a, _b;
const $$Cogito = createComponent(($$result, $$props, $$slots) => {
  const timelineItems = [
    {
      year: "1868",
      title: "The Typewriter",
      description: "Christopher Latham Sholes patents the first commercially successful typewriter. The QWERTY layout is designed not for human fingers, but to prevent mechanical typebars from jamming — spacing frequently paired letters apart so the metal arms have room to retract before the next one swings.",
      side: "left"
    },
    {
      year: "1873",
      title: "The Layout is Fixed",
      description: "Remington begins mass-producing the Sholes & Glidden typewriter. The QWERTY layout is cast in metal. From this moment, no subsequent generation of engineers will question whether the arrangement of the keys reflects the anatomy of the hand. It doesn't. It never did.",
      side: "right"
    },
    {
      year: "1936",
      title: "Dvorak Tries",
      description: "August Dvorak patents an alternative layout optimised for finger travel and hand alternation. It is measurably more efficient. It is adopted by almost no one. The weight of a billion trained typists proves too heavy to lift.",
      side: "left"
    },
    {
      year: "1984",
      title: "The Keyboard Goes Digital",
      description: "IBM standardises the 101-key layout for the PC keyboard. The typewriter's mechanical constraints — the stagger, the flat surface, the single spacebar — survive the transition from metal to silicon perfectly intact. The machine changes. The layout does not.",
      side: "right"
    },
    {
      year: "2006 – present",
      title: "The Ergonomic Attempts",
      description: "A wave of ergonomic keyboards — split, tented, curved — attempts to address the postural damage caused by the standard layout. Most split the rectangle in half and call it done. Few question the stagger. Almost none redesign the thumb cluster or measure the fingers.",
      side: "left"
    },
    {
      year: "2023",
      title: "The First Iteration",
      description: "Work begins on what would later become the Cogito. A very first — and very simple — 3D model is designed and sent out to be printed, since owning a 3D printer is still a prototype away.",
      side: "right"
    },
    {
      year: "2026",
      title: "The Cogito",
      description: "More than fifty 3D-printed prototypes later — each one measured against real hands, tested, and discarded — the Cogito reaches its final form(s). The first keyboard designed not to improve the typewriter, but to replace the idea of it.",
      side: "right"
    }
  ];
  const tocLinks = [
    { id: "the-vision", label: "the Vision" },
    { id: "the-origin", label: "the Origin" },
    { id: "the-switch", label: "the Switch" },
    { id: "the-name", label: "the Name" },
    { id: "the-design", label: "the Design" },
    { id: "the-fossil", label: "the Fossil" },
    { id: "the-breakthrough", label: "the Breakthrough" },
    { id: "support-our-work", label: "Support our work" }
  ];
  return renderTemplate`${renderComponent($$result, "EmptyLayout", $$EmptyLayout, { "title": "Watt IV – the Cogito", "description": "An ergonomic split keyboard built not by improving what already exists, but by discarding it entirely.", "bodyClass": "project-v2", "data-astro-cid-i4ruep3h": true }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(["  ", " ", '<div class="scroll-container" data-astro-cid-i4ruep3h> <main data-astro-cid-i4ruep3h> <section class="hero-v2" data-astro-cid-i4ruep3h> <h1 class="giant-title" data-astro-cid-i4ruep3h> <span class="giant-title-inner" data-astro-cid-i4ruep3h> <span class="the-prefix" data-astro-cid-i4ruep3h>the</span> <span class="main-word" data-astro-cid-i4ruep3h>Cogito</span> <span class="keyboard-suffix" data-astro-cid-i4ruep3h>keyboard</span> </span> </h1> <div class="model-container-v2" data-astro-cid-i4ruep3h> ', ` </div> <p class="caption-v2" data-astro-cid-i4ruep3h>
FIG 02. ONE HALF OF THE COGITO ERGO+ AND THE COGITO ERGO // <span class="date" data-astro-cid-i4ruep3h>APRIL '26</span> </p> </section> <!-- 1. THE VISION (The Spark) --> <section class="whatif-container" data-astro-cid-i4ruep3h> <div class="whatif-quote-block" data-astro-cid-i4ruep3h> <span class="quote-mark open" data-astro-cid-i4ruep3h>“</span> <p class="whatif_intro" data-astro-cid-i4ruep3h>
What if the keyboard we use every day was actually tailored to human hands?
</p> <span class="quote-mark close" data-astro-cid-i4ruep3h>”</span> </div> </section> <!-- PRESS COVERAGE --> <!-- <PressCoverage items={coverage} title="As Seen On" /> --> `, ` <section class="v2-content-section" data-astro-cid-i4ruep3h> <h2 id="the-vision" class="narrative-tag" data-astro-cid-i4ruep3h>the Vision</h2> <p data-astro-cid-i4ruep3h>
The Cogito is an ergonomic split keyboard built not by improving what already exists, but
                    by discarding it entirely. Designed from first principles — and from the actual
                    measurements of a human hand — it is the result of asking the question most keyboard
                    designers have never asked: what would this look like if the typewriter had never existed?
</p> <p data-astro-cid-i4ruep3h>
The answer, after more than fifty 3D-printed prototypes, is a keyboard that fits the hand
                    rather than a hand that accommodates the keyboard. Columnar stagger tuned to actual finger
                    lengths. A pinky cluster rotated to match the natural divergence of the fifth finger. A
                    thumb arc designed around the direction the thumb actually moves — inward, not outward.
                    And a layout compact enough that every key is reachable from a resting hand that never
                    needs to move.
</p> <p data-astro-cid-i4ruep3h>
the Cogito would have never been possible without the countless hours that other people
                    have put into designing their own 'endgame' keyboard and shared their knowledge (and code)
                    with the world. If you're looking for inspiration I highly recommend checking out the
                    following resources:
</p> <ul data-astro-cid-i4ruep3h> <li data-astro-cid-i4ruep3h><a class="link" href="https://kbd.news/" data-astro-cid-i4ruep3h>KBD.news</a></li> <li data-astro-cid-i4ruep3h> <a class="link" href="https://www.reddit.com/r/ErgoMechKeyboards/" data-astro-cid-i4ruep3h>r/ErgoMechKeyboards</a> </li> <li data-astro-cid-i4ruep3h> <a class="link" href="https://flatfootfox.com/ergogen-introduction/" data-astro-cid-i4ruep3h>
Ergogen Introduction by FlatFootFox
</a> </li> </ul> </section> <!-- 2. THE ORIGIN (The Evolution) --> <section class="v2-content-section" data-astro-cid-i4ruep3h> <h2 id="the-origin" class="narrative-tag" data-astro-cid-i4ruep3h>the Origin</h2> <p data-astro-cid-i4ruep3h>
The Cogito didn't emerge in a vacuum. It sits at the end of a long lineage of inherited
                    compromises — each one unchallenged, passed from one generation of keyboards to the next.
</p> `, ` <video autoplay loop muted playsinline class="prototype-video" data-astro-cid-i4ruep3h> <source src="/videos/animated_prototypes.mp4" type="video/mp4" data-astro-cid-i4ruep3h> </video> <p class="caption-v2" data-astro-cid-i4ruep3h>
FIG 03. MORE THAN FIFTY ITERATIONS // <span class="date" data-astro-cid-i4ruep3h>THE EVOLUTION OF THE COGITO</span> </p> </section> <!-- THE SWITCH --> <section class="v2-content-section" data-astro-cid-i4ruep3h> <h2 id="the-switch" class="narrative-tag" data-astro-cid-i4ruep3h>the Switch</h2> <p data-astro-cid-i4ruep3h>
When I started building my own keyboard, I didn't know anything about switches — I just
                    ordered some cheap MX switches. I quickly realised that my idea of a perfect keyboard was
                    mainly about versatility and portability, so I made the switch (&hellip;) to Choc, which
                    are roughly half the height.
</p> <p data-astro-cid-i4ruep3h>
At the time the main keyboard that I was using was an Apple Magic Keyboard and unlike a
                    lot of mechanical keyboard enthousiasts online, I actually really liked using it and
                    typing on it;
</p> <ul data-astro-cid-i4ruep3h> <li data-astro-cid-i4ruep3h>The integration with Mac OS is perfect</li> <li data-astro-cid-i4ruep3h>It’s flat and portable</li> <li data-astro-cid-i4ruep3h>
There is virtually no difference between typing on that keyboard or on the keyboard
                        from the Macbook itself, meaning that transitioning between the two would be
                        effortless
</li> </ul> <p data-astro-cid-i4ruep3h>
The major downside of course was that it was not very ergonomic; it’s not ortholinear and
                    it’s not a split keyboard. But what if I could use the switches that Apple used for these
                    keyboards to create my own layout and turn it into a split keyboard? The idea sounded
                    simple, but with the delicate switches and the keyboard being glued together, it was
                    actually quite the challenge to source the components. That’s when I stumbled upon a post
                    by Nemoto on my favourite subreddit <a class="link" href="https://www.reddit.com/r/ErgoMechKeyboards/comments/1lnhw4t/magic_square_keyboard/" target="_blank" rel="noopener noreferrer" data-astro-cid-i4ruep3h>r/ErgoMechKeyboards</a>. I was really impressed by the work he had done and I reached out and asked if he would
                    be willing to share the PCB footprints with me, which he was kind enough to do.
</p> <p data-astro-cid-i4ruep3h>
From those Kicad footprints I made a PCB and I really thought that if I would get this to
                    work, this was going to be my ‘endgame’ keyboard, but right around that time Framework
                    decided to reveal their <a class="link" href="https://frame.work/nl/en/products/one-key-module" target="_blank" rel="noopener noreferrer" data-astro-cid-i4ruep3h>One Key Modules</a> and they were exactly what I needed for this project:
</p> <ul data-astro-cid-i4ruep3h> <li data-astro-cid-i4ruep3h>
Not necessary to carefully tear down (broken) keyboards to get the right components
</li> <li data-astro-cid-i4ruep3h>
Switches that would actually be reliable in the longterm (unlike Apple’s butterfly
                        switches)
</li> <li data-astro-cid-i4ruep3h>Super thin profile</li> </ul> <p data-astro-cid-i4ruep3h>
So when I saw that they were looking for developers to test these switches, I didn’t
                    hesitate and immediately sent them a proposal for joining the program. <br data-astro-cid-i4ruep3h><br data-astro-cid-i4ruep3h> <em data-astro-cid-i4ruep3h>Out of all the applications they got I was actually selected as one of the first
                        people in the world to build a keyboard with these switches!</em> </p> <p data-astro-cid-i4ruep3h>
I could have just converted my PCB for the Magic Keyboard switches to the Framework
                    switches, but I actually decided to start over completely; starting with redoing the
                    measurements of my hands and fingers and adjusting the layout of the keys accordingly and
                    doing a lot of research online about how I could make this keyboard truly perfect (for
                    me).
</p> <p data-astro-cid-i4ruep3h>
Following the release of the <a class="link" href="/work/m2x2" data-astro-cid-i4ruep3h>M2x2 workstation</a>, the
                    team at <strong data-astro-cid-i4ruep3h>PCBWay</strong> reached out and was kind enough to sponsor the production of
                    the new custom PCBs. I was particularly impressed with their quality control; even though I
                    thought I had checked every connection thoroughly in KiCad, their review process flagged subtle
                    details that helped us improve the design and optimize the boards for production. Thanks to
                    their expertise, the latest prototypes were manufactured with professional-grade precision on
                    a wafer thin (.8mm!) PCB.
</p> <p data-astro-cid-i4ruep3h>
The result of all of that work are the Cogito keyboards — super thin, versatile and
                    modular, but most importantly, actually made for my hands and fingers.
</p> <!-- <div class="lab-note" style="margin-top: 60px;">
                    <h3>Status: In development</h3>
                    <p>
                        The design of the Cogito keyboards is finalized, but the 3D-models and files still
                        need some work before they are released.
                    </p>
                </div> --> </section> <!-- THE NAME --> <section class="v2-content-section" data-astro-cid-i4ruep3h> <h2 id="the-name" class="narrative-tag" data-astro-cid-i4ruep3h>the Name</h2> <p data-astro-cid-i4ruep3h>
The keyboard is called the Cogito after Descartes' <em data-astro-cid-i4ruep3h>Cogito, ergo sum</em> — "I think, therefore
                    I am." A keyboard is the most direct physical instrument through which thought becomes reality.
                    Every key pressed is an act of <em data-astro-cid-i4ruep3h>sum</em> — bringing something into being that did not exist
                    before.
</p> <p data-astro-cid-i4ruep3h>But the name carries more than the obvious reference.</p> <p data-astro-cid-i4ruep3h>
What made Descartes remarkable was not the conclusion but the method: systematically doubt
                    everything inherited, trust only what can be verified, and rebuild from first principles.
                    The Cogito keyboard is named not for the phrase but for the process — the same process
                    that produced it.
</p> <p data-astro-cid-i4ruep3h>
The middle word does double duty. <em data-astro-cid-i4ruep3h>Ergo</em> means "therefore" in Latin — but it is also
                    the root of <strong data-astro-cid-i4ruep3h>ergonomics</strong>, from the Greek <em data-astro-cid-i4ruep3h>ergon</em>, meaning work.
                    Buried in the most famous philosophical sentence ever written is the word that defines the
                    keyboard's entire design principle. <em data-astro-cid-i4ruep3h>Cogito, <strong data-astro-cid-i4ruep3h>ergo</strong> sum</em> — I think, ergonomically,
                    I am.
</p> <p data-astro-cid-i4ruep3h>
Three words. Three layers. The entire story of the keyboard compressed into a sentence
                    that was never meant to describe one.
</p> </section> <!-- THE DESIGN --> <section class="v2-content-section" data-astro-cid-i4ruep3h> <h2 id="the-design" class="narrative-tag" data-astro-cid-i4ruep3h>the Design</h2> <p data-astro-cid-i4ruep3h>
The Cogito is a split keyboard. Each half is an independent unit, designed to sit at
                    shoulder width with a slight inward tent — the natural resting position of two hands,
                    rather than the forced convergence of a flat rectangle.
</p> <p data-astro-cid-i4ruep3h> <strong data-astro-cid-i4ruep3h>Columnar stagger.</strong> The key columns are offset vertically to reflect actual finger
                    length differences. The middle finger column sits highest; the ring and index columns step down
                    from it; the pinky cluster steps down further still. Every finger rests on its home key with
                    zero extension or curl. There is no horizontal stagger — that was always the typewriter's geometry,
                    not the hand's.
</p> <p data-astro-cid-i4ruep3h> <strong data-astro-cid-i4ruep3h>The pinky cluster.</strong> The pinky column is a physically separate piece, rotated
                    outward at roughly 15° to match the natural divergence of the fifth finger from the other four.
                    This is the detail that most ergonomic keyboards never address — and the one that eliminates
                    the sustained lateral strain that accumulates in every standard layout.
</p> <p data-astro-cid-i4ruep3h> <strong data-astro-cid-i4ruep3h>The thumb arc.</strong> Each half carries a three-key thumb cluster positioned where
                    the thumb naturally falls — inward, sweeping toward the palm in the direction of natural opposition.
                    Across three keys, the deviation from the thumb's natural arc is less than the contact surface
                    of a single keycap. The horizontal arrangement is not a compromise; it is a geometric approximation
                    precise enough to make a physical curve unnecessary.
</p> <p data-astro-cid-i4ruep3h> <strong data-astro-cid-i4ruep3h>Six thumb keys, twelve inputs.</strong> Where a standard keyboard dedicates both thumbs
                    to a single 118mm bar that does exactly one thing, the Cogito gives each thumb three keys. Using
                    ZMK firmware's hold-tap behaviours, those six physical keys carry twelve distinct inputs: Space,
                    Enter, Backspace, Delete, Shift, and full layer access — all within the natural inward sweep
                    of both thumbs, without either one ever reaching outward.
</p> <p data-astro-cid-i4ruep3h> <strong data-astro-cid-i4ruep3h>36 keys total.</strong> Everything else lives in layers — accessed by holding a thumb
                    key, exactly as a musician shifts register rather than growing extra hands. The keyboard is
                    compact because the hand is compact. The keys that remain are the ones the hands can reach without
                    moving.
</p> <p data-astro-cid-i4ruep3h> <strong data-astro-cid-i4ruep3h>Flat for portability, tented for ergonomics.</strong> Each half carries a MagSafe-compatible
                    mount point — the same connector used for tenting stands, for storage on the back of the iPad
                    mini, and for attaching to the rail of the system it was designed to complete. One physical
                    detail that serves three purposes.
</p> <h3 data-astro-cid-i4ruep3h>Features</h3> <div class="comparison-table-wrapper" data-astro-cid-i4ruep3h> <table class="comparison-table" data-astro-cid-i4ruep3h> <thead data-astro-cid-i4ruep3h> <tr data-astro-cid-i4ruep3h> <th class="feature-col" data-astro-cid-i4ruep3h></th> <th class="model-col ergo-plus" data-astro-cid-i4ruep3h>Cogito+</th> <th class="model-col ergo" data-astro-cid-i4ruep3h>Cogito</th> </tr> </thead> <tbody data-astro-cid-i4ruep3h> <tr data-astro-cid-i4ruep3h> <td class="feature-name" data-astro-cid-i4ruep3h>Keys</td> <td data-astro-cid-i4ruep3h>36</td> <td data-astro-cid-i4ruep3h>36</td> </tr> <tr data-astro-cid-i4ruep3h> <td class="feature-name" data-astro-cid-i4ruep3h>Columnar stagger</td> <td data-astro-cid-i4ruep3h><span class="check" data-astro-cid-i4ruep3h>✓</span></td> <td data-astro-cid-i4ruep3h><span class="check" data-astro-cid-i4ruep3h>✓</span></td> </tr> <tr data-astro-cid-i4ruep3h> <td class="feature-name" data-astro-cid-i4ruep3h>Rotated pinky column</td> <td data-astro-cid-i4ruep3h><span class="check" data-astro-cid-i4ruep3h>✓</span></td> <td data-astro-cid-i4ruep3h><span class="check" data-astro-cid-i4ruep3h>✓</span></td> </tr> <tr data-astro-cid-i4ruep3h> <td class="feature-name" data-astro-cid-i4ruep3h>Thumb arc (3 keys per hand)</td> <td data-astro-cid-i4ruep3h><span class="check" data-astro-cid-i4ruep3h>✓</span></td> <td data-astro-cid-i4ruep3h><span class="check" data-astro-cid-i4ruep3h>✓</span></td> </tr> <tr data-astro-cid-i4ruep3h> <td class="feature-name" data-astro-cid-i4ruep3h>Wireless</td> <td data-astro-cid-i4ruep3h><span class="check" data-astro-cid-i4ruep3h>✓</span></td> <td data-astro-cid-i4ruep3h><span class="check" data-astro-cid-i4ruep3h>✓</span></td> </tr> <tr data-astro-cid-i4ruep3h> <td class="feature-name" data-astro-cid-i4ruep3h>Magnetic carrying mode</td> <td data-astro-cid-i4ruep3h><span class="check" data-astro-cid-i4ruep3h>✓</span></td> <td data-astro-cid-i4ruep3h><span class="check" data-astro-cid-i4ruep3h>✓</span></td> </tr> <tr data-astro-cid-i4ruep3h> <td class="feature-name" data-astro-cid-i4ruep3h>MagSafe mount point</td> <td data-astro-cid-i4ruep3h><span class="check" data-astro-cid-i4ruep3h>✓</span></td> <td data-astro-cid-i4ruep3h><span class="check" data-astro-cid-i4ruep3h>✓</span></td> </tr> <tr data-astro-cid-i4ruep3h> <td class="feature-name" data-astro-cid-i4ruep3h>Integrated tenting</td> <td data-astro-cid-i4ruep3h>3°</td> <td data-astro-cid-i4ruep3h>—</td> </tr> <tr data-astro-cid-i4ruep3h> <td class="feature-name" data-astro-cid-i4ruep3h>Joycon tenting capability</td> <td data-astro-cid-i4ruep3h><span class="check" data-astro-cid-i4ruep3h>✓</span></td> <td data-astro-cid-i4ruep3h>—</td> </tr> <tr data-astro-cid-i4ruep3h> <td class="feature-name" data-astro-cid-i4ruep3h>Battery life</td> <td data-astro-cid-i4ruep3h>Longer</td> <td data-astro-cid-i4ruep3h>Long</td> </tr> </tbody> </table> </div> </section> <section class="project-pictures" data-astro-cid-i4ruep3h> <div class="project-pictures-content" data-astro-cid-i4ruep3h> <div class="project-picture-wrapper" data-astro-cid-i4ruep3h> <div class="project-picture-card" onclick="openGalleryModal(this, 0)" data-astro-cid-i4ruep3h> <img src="/images/cogito/20260408_135238.jpg" alt="The Cogito keyboard" data-astro-cid-i4ruep3h> </div> </div> <div class="project-picture-wrapper" data-astro-cid-i4ruep3h> <div class="project-picture-card" onclick="openGalleryModal(this, 1)" data-astro-cid-i4ruep3h> <img src="/images/cogito/20260408_134419.jpg" alt="The Cogito keyboard" data-astro-cid-i4ruep3h> </div> </div> <div class="project-picture-wrapper" data-astro-cid-i4ruep3h> <div class="project-picture-card" onclick="openGalleryModal(this, 2)" data-astro-cid-i4ruep3h> <img src="/images/cogito/20260408_134532.jpg" alt="The Cogito keyboard" data-astro-cid-i4ruep3h> </div> </div> <div class="project-picture-wrapper" data-astro-cid-i4ruep3h> <div class="project-picture-card" onclick="openGalleryModal(this, 3)" data-astro-cid-i4ruep3h> <img src="/images/cogito/20260408_134749.jpg" alt="The Cogito keyboard" data-astro-cid-i4ruep3h> </div> </div> <div class="project-picture-wrapper" data-astro-cid-i4ruep3h> <div class="project-picture-card" onclick="openGalleryModal(this, 4)" data-astro-cid-i4ruep3h> <img src="/images/cogito/20260408_134806.jpg" alt="The Cogito keyboard" data-astro-cid-i4ruep3h> </div> </div> <div class="project-picture-wrapper" data-astro-cid-i4ruep3h> <div class="project-picture-card" onclick="openGalleryModal(this, 5)" data-astro-cid-i4ruep3h> <img src="/images/cogito/20260408_134922.jpg" alt="The Cogito keyboard" data-astro-cid-i4ruep3h> </div> </div> <div class="project-picture-wrapper" data-astro-cid-i4ruep3h> <div class="project-picture-card" onclick="openGalleryModal(this, 6)" data-astro-cid-i4ruep3h> <img src="/images/cogito/20260408_134957.jpg" alt="The Cogito keyboard" data-astro-cid-i4ruep3h> </div> </div> <div class="project-picture-wrapper" data-astro-cid-i4ruep3h> <div class="project-picture-card" onclick="openGalleryModal(this, 7)" data-astro-cid-i4ruep3h> <img src="/images/cogito/20260408_134353.jpg" alt="The Cogito keyboard" data-astro-cid-i4ruep3h> </div> </div> <div class="project-picture-wrapper" data-astro-cid-i4ruep3h> <div class="project-picture-card" onclick="openGalleryModal(this, 8)" data-astro-cid-i4ruep3h> <img src="/images/cogito/20260408_135604.jpg" alt="The Cogito keyboard" data-astro-cid-i4ruep3h> </div> </div> <div class="project-picture-wrapper" data-astro-cid-i4ruep3h> <div class="project-picture-card" onclick="openGalleryModal(this, 9)" data-astro-cid-i4ruep3h> <img src="/images/cogito/20260408_135631.jpg" alt="The Cogito keyboard" data-astro-cid-i4ruep3h> </div> </div> <div class="project-picture-wrapper" data-astro-cid-i4ruep3h> <div class="project-picture-card" onclick="openGalleryModal(this, 10)" data-astro-cid-i4ruep3h> <img src="/images/cogito/20260408_135731.jpg" alt="The Cogito keyboard" data-astro-cid-i4ruep3h> </div> </div> <div class="project-picture-wrapper" data-astro-cid-i4ruep3h> <div class="project-picture-card" onclick="openGalleryModal(this, 11)" data-astro-cid-i4ruep3h> <img src="/images/cogito/20260408_140118.jpg" alt="The Cogito keyboard" data-astro-cid-i4ruep3h> </div> </div> <div class="project-picture-wrapper" data-astro-cid-i4ruep3h> <div class="project-picture-card" onclick="openGalleryModal(this, 12)" data-astro-cid-i4ruep3h> <img src="/images/cogito/20260408_140339.jpg" alt="The Cogito keyboard" data-astro-cid-i4ruep3h> </div> </div> <div class="project-picture-wrapper" data-astro-cid-i4ruep3h> <div class="project-picture-card" onclick="openGalleryModal(this, 13)" data-astro-cid-i4ruep3h> <img src="/images/cogito/20260408_141448.jpg" alt="The Cogito keyboard" data-astro-cid-i4ruep3h> </div> </div> <div class="project-picture-wrapper" data-astro-cid-i4ruep3h> <div class="project-picture-card" onclick="openGalleryModal(this, 14)" data-astro-cid-i4ruep3h> <img src="/images/cogito/20260408_141518.jpg" alt="The Cogito keyboard" data-astro-cid-i4ruep3h> </div> </div> <div class="project-picture-wrapper" data-astro-cid-i4ruep3h> <div class="project-picture-card" onclick="openGalleryModal(this, 15)" data-astro-cid-i4ruep3h> <img src="/images/cogito/20260408_141545.jpg" alt="The Cogito keyboard" data-astro-cid-i4ruep3h> </div> </div> <div class="project-picture-wrapper" data-astro-cid-i4ruep3h> <div class="project-picture-card" onclick="openGalleryModal(this, 16)" data-astro-cid-i4ruep3h> <img src="/images/cogito/20260408_141708.jpg" alt="The Cogito keyboard" data-astro-cid-i4ruep3h> </div> </div> <div class="project-picture-wrapper" data-astro-cid-i4ruep3h> <div class="project-picture-card" onclick="openGalleryModal(this, 17)" data-astro-cid-i4ruep3h> <img src="/images/cogito/20260408_141750.jpg" alt="The Cogito keyboard" data-astro-cid-i4ruep3h> </div> </div> <div class="project-picture-wrapper" data-astro-cid-i4ruep3h> <div class="project-picture-card" onclick="openGalleryModal(this, 18)" data-astro-cid-i4ruep3h> <img src="/images/cogito/20260408_142201.jpg" alt="The Cogito keyboard" data-astro-cid-i4ruep3h> </div> </div> <div class="project-picture-wrapper" data-astro-cid-i4ruep3h> <div class="project-picture-card" onclick="openGalleryModal(this, 19)" data-astro-cid-i4ruep3h> <img src="/images/cogito/20260408_142410.jpg" alt="The Cogito keyboard" data-astro-cid-i4ruep3h> </div> </div> <div class="project-picture-wrapper" data-astro-cid-i4ruep3h> <div class="project-picture-card" onclick="openGalleryModal(this, 20)" data-astro-cid-i4ruep3h> <img src="/images/cogito/20260408_090208.jpg" alt="The Cogito keyboard" data-astro-cid-i4ruep3h> </div> </div> <div class="project-picture-wrapper" data-astro-cid-i4ruep3h> <div class="project-picture-card" onclick="openGalleryModal(this, 21)" data-astro-cid-i4ruep3h> <img src="/images/cogito/prototypes_on_desk.png" alt="Cogito prototypes on desk" data-astro-cid-i4ruep3h> </div> </div> <div class="project-picture-wrapper" data-astro-cid-i4ruep3h> <div class="project-picture-card" onclick="openGalleryModal(this, 22)" data-astro-cid-i4ruep3h> <img src="/images/cogito/20260408_134007.jpg" alt="The Cogito keyboard" data-astro-cid-i4ruep3h> </div> </div> </div> <div id="gallery-modal" class="gallery-modal" data-astro-cid-i4ruep3h> <span class="close-modal" onclick="closeGalleryModal()" data-astro-cid-i4ruep3h>&times;</span> <div class="gallery-modal-content" data-astro-cid-i4ruep3h> <!-- Content injected via JS --> </div> </div> </section> <!-- THE FOSSIL --> <section class="v2-content-section" data-astro-cid-i4ruep3h> <h2 id="the-fossil" class="narrative-tag" data-astro-cid-i4ruep3h>the Fossil</h2> <p data-astro-cid-i4ruep3h>
If an alien archaeologist dug up a standard keyboard a million years from now, they would
                    reconstruct the human hand as a flat, rigid plate with ten identical, equally-spaced
                    digit-tips — and a blunt, passive ridge where the thumb should be.
</p> <p data-astro-cid-i4ruep3h>
Every feature of the keyboard we use today is a fossil of 1870s mechanical engineering,
                    faithfully inherited but never questioned. The Cogito exists because we finally did
                    question it — starting from the hand itself, not the grid. The name says it all: Cogito,
                    ergo sum. I think, ergonomically, I am.
</p> <p data-astro-cid-i4ruep3h></p><div class="buttons" data-astro-cid-i4ruep3h> <a class="button" href="/work/writings/the_keyboard_fossil" data-astro-cid-i4ruep3h>Read the full essay</a> </div>  </section> <!-- THE SYSTEM --> <!-- <section class="v2-content-section">
                <h2 id="the-system" class="narrative-tag">the System</h2>
                <p>
                    The Cogito was designed as a keyboard. It is also the first component of something larger.
                </p>
                <p>
                    An iPad mini carries the Cogito halves on either side via a Switch-style rail standard —
                    flat for transport, pivoting to grip mode for handheld use. The iPad mini's touchscreen
                    becomes the trackpad, the canvas, and the secondary display. A MagSafe stand elevates a
                    second screen — or a Mac-iPad running full macOS — to eye level. The Cogito halves sit on
                    the desk at shoulder width, tented, exactly as ergonomics requires.
                </p>
                <p>
                    In this configuration, a device you carry in a bag transforms in seconds into a
                    workstation where every component is in exactly the right place for the body using it:
                    screen at eye level, keyboard at shoulder width, touch surface flat between the hands,
                    thumbs operating inward, fingers resting on keys tuned to their exact lengths.
                </p>
                <p>
                    The same rail standard accepts game controller halves in place of the keyboard halves. The
                    same MagSafe point mounts a tenting stand in work mode and a magnetic rear storage
                    position in transit. Nothing is loose. Nothing is separate. The system is closed, and the
                    keyboard is its spine.
                </p>
            </section> --> <!-- THE BREAKTHROUGH --> <section class="v2-content-section" data-astro-cid-i4ruep3h> <h2 id="the-breakthrough" class="narrative-tag" data-astro-cid-i4ruep3h>the Breakthrough</h2> <p data-astro-cid-i4ruep3h>
By only optimising the candle, you would never invent the lightbulb. Every generation of
                    keyboard designers since 1873 has made the rectangle thinner, quieter, and more wireless —
                    and none of them asked whether the rectangle was the right shape to begin with.
</p> <p data-astro-cid-i4ruep3h>The Cogito is not a better keyboard. It is the answer to a different question.</p> <p data-astro-cid-i4ruep3h> <em data-astro-cid-i4ruep3h>Digito, ergo sum.</em> I type, therefore I am — with every finger where it belongs, every
                    key where the hand expects it, and the lightbulb finally lit.
</p> <div style="margin-top: 60px;" data-astro-cid-i4ruep3h> `, ' </div> </section> <section class="v2-content-section" data-astro-cid-i4ruep3h> <h2 id="support-our-work" class="narrative-tag" data-astro-cid-i4ruep3h>Support our work</h2> <p data-astro-cid-i4ruep3h>\nYou can support our work by <strong data-astro-cid-i4ruep3h>making a donation</strong> or by <strong data-astro-cid-i4ruep3h>purchasing one of our products from our store.</strong> Your contribution directly funds the materials and coffee needed for the next prototype.\n</p> <div class="buttons" data-astro-cid-i4ruep3h> <a class="button" href="https://store.wattiv.nl/en-eur" target="_blank" rel="noopener noreferrer" data-astro-cid-i4ruep3h>To the store</a> </div> <div class="image_container" data-astro-cid-i4ruep3h> ', ' </div> <!-- <div\n                    class="legal-disclosure"\n                    style="margin-top: 60px; font-size: 0.7rem; opacity: 1; text-align: center; line-height: 1.4;"\n                >\n                    Watt IV is an independent creative technology studio.\n                </div> --> </section> ', " </main> </div> ", `  <script src="/shine.min.js"><\/script> <script>
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
    <\/script> `], ["  ", " ", '<div class="scroll-container" data-astro-cid-i4ruep3h> <main data-astro-cid-i4ruep3h> <section class="hero-v2" data-astro-cid-i4ruep3h> <h1 class="giant-title" data-astro-cid-i4ruep3h> <span class="giant-title-inner" data-astro-cid-i4ruep3h> <span class="the-prefix" data-astro-cid-i4ruep3h>the</span> <span class="main-word" data-astro-cid-i4ruep3h>Cogito</span> <span class="keyboard-suffix" data-astro-cid-i4ruep3h>keyboard</span> </span> </h1> <div class="model-container-v2" data-astro-cid-i4ruep3h> ', ` </div> <p class="caption-v2" data-astro-cid-i4ruep3h>
FIG 02. ONE HALF OF THE COGITO ERGO+ AND THE COGITO ERGO // <span class="date" data-astro-cid-i4ruep3h>APRIL '26</span> </p> </section> <!-- 1. THE VISION (The Spark) --> <section class="whatif-container" data-astro-cid-i4ruep3h> <div class="whatif-quote-block" data-astro-cid-i4ruep3h> <span class="quote-mark open" data-astro-cid-i4ruep3h>“</span> <p class="whatif_intro" data-astro-cid-i4ruep3h>
What if the keyboard we use every day was actually tailored to human hands?
</p> <span class="quote-mark close" data-astro-cid-i4ruep3h>”</span> </div> </section> <!-- PRESS COVERAGE --> <!-- <PressCoverage items={coverage} title="As Seen On" /> --> `, ` <section class="v2-content-section" data-astro-cid-i4ruep3h> <h2 id="the-vision" class="narrative-tag" data-astro-cid-i4ruep3h>the Vision</h2> <p data-astro-cid-i4ruep3h>
The Cogito is an ergonomic split keyboard built not by improving what already exists, but
                    by discarding it entirely. Designed from first principles — and from the actual
                    measurements of a human hand — it is the result of asking the question most keyboard
                    designers have never asked: what would this look like if the typewriter had never existed?
</p> <p data-astro-cid-i4ruep3h>
The answer, after more than fifty 3D-printed prototypes, is a keyboard that fits the hand
                    rather than a hand that accommodates the keyboard. Columnar stagger tuned to actual finger
                    lengths. A pinky cluster rotated to match the natural divergence of the fifth finger. A
                    thumb arc designed around the direction the thumb actually moves — inward, not outward.
                    And a layout compact enough that every key is reachable from a resting hand that never
                    needs to move.
</p> <p data-astro-cid-i4ruep3h>
the Cogito would have never been possible without the countless hours that other people
                    have put into designing their own 'endgame' keyboard and shared their knowledge (and code)
                    with the world. If you're looking for inspiration I highly recommend checking out the
                    following resources:
</p> <ul data-astro-cid-i4ruep3h> <li data-astro-cid-i4ruep3h><a class="link" href="https://kbd.news/" data-astro-cid-i4ruep3h>KBD.news</a></li> <li data-astro-cid-i4ruep3h> <a class="link" href="https://www.reddit.com/r/ErgoMechKeyboards/" data-astro-cid-i4ruep3h>r/ErgoMechKeyboards</a> </li> <li data-astro-cid-i4ruep3h> <a class="link" href="https://flatfootfox.com/ergogen-introduction/" data-astro-cid-i4ruep3h>
Ergogen Introduction by FlatFootFox
</a> </li> </ul> </section> <!-- 2. THE ORIGIN (The Evolution) --> <section class="v2-content-section" data-astro-cid-i4ruep3h> <h2 id="the-origin" class="narrative-tag" data-astro-cid-i4ruep3h>the Origin</h2> <p data-astro-cid-i4ruep3h>
The Cogito didn't emerge in a vacuum. It sits at the end of a long lineage of inherited
                    compromises — each one unchallenged, passed from one generation of keyboards to the next.
</p> `, ` <video autoplay loop muted playsinline class="prototype-video" data-astro-cid-i4ruep3h> <source src="/videos/animated_prototypes.mp4" type="video/mp4" data-astro-cid-i4ruep3h> </video> <p class="caption-v2" data-astro-cid-i4ruep3h>
FIG 03. MORE THAN FIFTY ITERATIONS // <span class="date" data-astro-cid-i4ruep3h>THE EVOLUTION OF THE COGITO</span> </p> </section> <!-- THE SWITCH --> <section class="v2-content-section" data-astro-cid-i4ruep3h> <h2 id="the-switch" class="narrative-tag" data-astro-cid-i4ruep3h>the Switch</h2> <p data-astro-cid-i4ruep3h>
When I started building my own keyboard, I didn't know anything about switches — I just
                    ordered some cheap MX switches. I quickly realised that my idea of a perfect keyboard was
                    mainly about versatility and portability, so I made the switch (&hellip;) to Choc, which
                    are roughly half the height.
</p> <p data-astro-cid-i4ruep3h>
At the time the main keyboard that I was using was an Apple Magic Keyboard and unlike a
                    lot of mechanical keyboard enthousiasts online, I actually really liked using it and
                    typing on it;
</p> <ul data-astro-cid-i4ruep3h> <li data-astro-cid-i4ruep3h>The integration with Mac OS is perfect</li> <li data-astro-cid-i4ruep3h>It’s flat and portable</li> <li data-astro-cid-i4ruep3h>
There is virtually no difference between typing on that keyboard or on the keyboard
                        from the Macbook itself, meaning that transitioning between the two would be
                        effortless
</li> </ul> <p data-astro-cid-i4ruep3h>
The major downside of course was that it was not very ergonomic; it’s not ortholinear and
                    it’s not a split keyboard. But what if I could use the switches that Apple used for these
                    keyboards to create my own layout and turn it into a split keyboard? The idea sounded
                    simple, but with the delicate switches and the keyboard being glued together, it was
                    actually quite the challenge to source the components. That’s when I stumbled upon a post
                    by Nemoto on my favourite subreddit <a class="link" href="https://www.reddit.com/r/ErgoMechKeyboards/comments/1lnhw4t/magic_square_keyboard/" target="_blank" rel="noopener noreferrer" data-astro-cid-i4ruep3h>r/ErgoMechKeyboards</a>. I was really impressed by the work he had done and I reached out and asked if he would
                    be willing to share the PCB footprints with me, which he was kind enough to do.
</p> <p data-astro-cid-i4ruep3h>
From those Kicad footprints I made a PCB and I really thought that if I would get this to
                    work, this was going to be my ‘endgame’ keyboard, but right around that time Framework
                    decided to reveal their <a class="link" href="https://frame.work/nl/en/products/one-key-module" target="_blank" rel="noopener noreferrer" data-astro-cid-i4ruep3h>One Key Modules</a> and they were exactly what I needed for this project:
</p> <ul data-astro-cid-i4ruep3h> <li data-astro-cid-i4ruep3h>
Not necessary to carefully tear down (broken) keyboards to get the right components
</li> <li data-astro-cid-i4ruep3h>
Switches that would actually be reliable in the longterm (unlike Apple’s butterfly
                        switches)
</li> <li data-astro-cid-i4ruep3h>Super thin profile</li> </ul> <p data-astro-cid-i4ruep3h>
So when I saw that they were looking for developers to test these switches, I didn’t
                    hesitate and immediately sent them a proposal for joining the program. <br data-astro-cid-i4ruep3h><br data-astro-cid-i4ruep3h> <em data-astro-cid-i4ruep3h>Out of all the applications they got I was actually selected as one of the first
                        people in the world to build a keyboard with these switches!</em> </p> <p data-astro-cid-i4ruep3h>
I could have just converted my PCB for the Magic Keyboard switches to the Framework
                    switches, but I actually decided to start over completely; starting with redoing the
                    measurements of my hands and fingers and adjusting the layout of the keys accordingly and
                    doing a lot of research online about how I could make this keyboard truly perfect (for
                    me).
</p> <p data-astro-cid-i4ruep3h>
Following the release of the <a class="link" href="/work/m2x2" data-astro-cid-i4ruep3h>M2x2 workstation</a>, the
                    team at <strong data-astro-cid-i4ruep3h>PCBWay</strong> reached out and was kind enough to sponsor the production of
                    the new custom PCBs. I was particularly impressed with their quality control; even though I
                    thought I had checked every connection thoroughly in KiCad, their review process flagged subtle
                    details that helped us improve the design and optimize the boards for production. Thanks to
                    their expertise, the latest prototypes were manufactured with professional-grade precision on
                    a wafer thin (.8mm!) PCB.
</p> <p data-astro-cid-i4ruep3h>
The result of all of that work are the Cogito keyboards — super thin, versatile and
                    modular, but most importantly, actually made for my hands and fingers.
</p> <!-- <div class="lab-note" style="margin-top: 60px;">
                    <h3>Status: In development</h3>
                    <p>
                        The design of the Cogito keyboards is finalized, but the 3D-models and files still
                        need some work before they are released.
                    </p>
                </div> --> </section> <!-- THE NAME --> <section class="v2-content-section" data-astro-cid-i4ruep3h> <h2 id="the-name" class="narrative-tag" data-astro-cid-i4ruep3h>the Name</h2> <p data-astro-cid-i4ruep3h>
The keyboard is called the Cogito after Descartes' <em data-astro-cid-i4ruep3h>Cogito, ergo sum</em> — "I think, therefore
                    I am." A keyboard is the most direct physical instrument through which thought becomes reality.
                    Every key pressed is an act of <em data-astro-cid-i4ruep3h>sum</em> — bringing something into being that did not exist
                    before.
</p> <p data-astro-cid-i4ruep3h>But the name carries more than the obvious reference.</p> <p data-astro-cid-i4ruep3h>
What made Descartes remarkable was not the conclusion but the method: systematically doubt
                    everything inherited, trust only what can be verified, and rebuild from first principles.
                    The Cogito keyboard is named not for the phrase but for the process — the same process
                    that produced it.
</p> <p data-astro-cid-i4ruep3h>
The middle word does double duty. <em data-astro-cid-i4ruep3h>Ergo</em> means "therefore" in Latin — but it is also
                    the root of <strong data-astro-cid-i4ruep3h>ergonomics</strong>, from the Greek <em data-astro-cid-i4ruep3h>ergon</em>, meaning work.
                    Buried in the most famous philosophical sentence ever written is the word that defines the
                    keyboard's entire design principle. <em data-astro-cid-i4ruep3h>Cogito, <strong data-astro-cid-i4ruep3h>ergo</strong> sum</em> — I think, ergonomically,
                    I am.
</p> <p data-astro-cid-i4ruep3h>
Three words. Three layers. The entire story of the keyboard compressed into a sentence
                    that was never meant to describe one.
</p> </section> <!-- THE DESIGN --> <section class="v2-content-section" data-astro-cid-i4ruep3h> <h2 id="the-design" class="narrative-tag" data-astro-cid-i4ruep3h>the Design</h2> <p data-astro-cid-i4ruep3h>
The Cogito is a split keyboard. Each half is an independent unit, designed to sit at
                    shoulder width with a slight inward tent — the natural resting position of two hands,
                    rather than the forced convergence of a flat rectangle.
</p> <p data-astro-cid-i4ruep3h> <strong data-astro-cid-i4ruep3h>Columnar stagger.</strong> The key columns are offset vertically to reflect actual finger
                    length differences. The middle finger column sits highest; the ring and index columns step down
                    from it; the pinky cluster steps down further still. Every finger rests on its home key with
                    zero extension or curl. There is no horizontal stagger — that was always the typewriter's geometry,
                    not the hand's.
</p> <p data-astro-cid-i4ruep3h> <strong data-astro-cid-i4ruep3h>The pinky cluster.</strong> The pinky column is a physically separate piece, rotated
                    outward at roughly 15° to match the natural divergence of the fifth finger from the other four.
                    This is the detail that most ergonomic keyboards never address — and the one that eliminates
                    the sustained lateral strain that accumulates in every standard layout.
</p> <p data-astro-cid-i4ruep3h> <strong data-astro-cid-i4ruep3h>The thumb arc.</strong> Each half carries a three-key thumb cluster positioned where
                    the thumb naturally falls — inward, sweeping toward the palm in the direction of natural opposition.
                    Across three keys, the deviation from the thumb's natural arc is less than the contact surface
                    of a single keycap. The horizontal arrangement is not a compromise; it is a geometric approximation
                    precise enough to make a physical curve unnecessary.
</p> <p data-astro-cid-i4ruep3h> <strong data-astro-cid-i4ruep3h>Six thumb keys, twelve inputs.</strong> Where a standard keyboard dedicates both thumbs
                    to a single 118mm bar that does exactly one thing, the Cogito gives each thumb three keys. Using
                    ZMK firmware's hold-tap behaviours, those six physical keys carry twelve distinct inputs: Space,
                    Enter, Backspace, Delete, Shift, and full layer access — all within the natural inward sweep
                    of both thumbs, without either one ever reaching outward.
</p> <p data-astro-cid-i4ruep3h> <strong data-astro-cid-i4ruep3h>36 keys total.</strong> Everything else lives in layers — accessed by holding a thumb
                    key, exactly as a musician shifts register rather than growing extra hands. The keyboard is
                    compact because the hand is compact. The keys that remain are the ones the hands can reach without
                    moving.
</p> <p data-astro-cid-i4ruep3h> <strong data-astro-cid-i4ruep3h>Flat for portability, tented for ergonomics.</strong> Each half carries a MagSafe-compatible
                    mount point — the same connector used for tenting stands, for storage on the back of the iPad
                    mini, and for attaching to the rail of the system it was designed to complete. One physical
                    detail that serves three purposes.
</p> <h3 data-astro-cid-i4ruep3h>Features</h3> <div class="comparison-table-wrapper" data-astro-cid-i4ruep3h> <table class="comparison-table" data-astro-cid-i4ruep3h> <thead data-astro-cid-i4ruep3h> <tr data-astro-cid-i4ruep3h> <th class="feature-col" data-astro-cid-i4ruep3h></th> <th class="model-col ergo-plus" data-astro-cid-i4ruep3h>Cogito+</th> <th class="model-col ergo" data-astro-cid-i4ruep3h>Cogito</th> </tr> </thead> <tbody data-astro-cid-i4ruep3h> <tr data-astro-cid-i4ruep3h> <td class="feature-name" data-astro-cid-i4ruep3h>Keys</td> <td data-astro-cid-i4ruep3h>36</td> <td data-astro-cid-i4ruep3h>36</td> </tr> <tr data-astro-cid-i4ruep3h> <td class="feature-name" data-astro-cid-i4ruep3h>Columnar stagger</td> <td data-astro-cid-i4ruep3h><span class="check" data-astro-cid-i4ruep3h>✓</span></td> <td data-astro-cid-i4ruep3h><span class="check" data-astro-cid-i4ruep3h>✓</span></td> </tr> <tr data-astro-cid-i4ruep3h> <td class="feature-name" data-astro-cid-i4ruep3h>Rotated pinky column</td> <td data-astro-cid-i4ruep3h><span class="check" data-astro-cid-i4ruep3h>✓</span></td> <td data-astro-cid-i4ruep3h><span class="check" data-astro-cid-i4ruep3h>✓</span></td> </tr> <tr data-astro-cid-i4ruep3h> <td class="feature-name" data-astro-cid-i4ruep3h>Thumb arc (3 keys per hand)</td> <td data-astro-cid-i4ruep3h><span class="check" data-astro-cid-i4ruep3h>✓</span></td> <td data-astro-cid-i4ruep3h><span class="check" data-astro-cid-i4ruep3h>✓</span></td> </tr> <tr data-astro-cid-i4ruep3h> <td class="feature-name" data-astro-cid-i4ruep3h>Wireless</td> <td data-astro-cid-i4ruep3h><span class="check" data-astro-cid-i4ruep3h>✓</span></td> <td data-astro-cid-i4ruep3h><span class="check" data-astro-cid-i4ruep3h>✓</span></td> </tr> <tr data-astro-cid-i4ruep3h> <td class="feature-name" data-astro-cid-i4ruep3h>Magnetic carrying mode</td> <td data-astro-cid-i4ruep3h><span class="check" data-astro-cid-i4ruep3h>✓</span></td> <td data-astro-cid-i4ruep3h><span class="check" data-astro-cid-i4ruep3h>✓</span></td> </tr> <tr data-astro-cid-i4ruep3h> <td class="feature-name" data-astro-cid-i4ruep3h>MagSafe mount point</td> <td data-astro-cid-i4ruep3h><span class="check" data-astro-cid-i4ruep3h>✓</span></td> <td data-astro-cid-i4ruep3h><span class="check" data-astro-cid-i4ruep3h>✓</span></td> </tr> <tr data-astro-cid-i4ruep3h> <td class="feature-name" data-astro-cid-i4ruep3h>Integrated tenting</td> <td data-astro-cid-i4ruep3h>3°</td> <td data-astro-cid-i4ruep3h>—</td> </tr> <tr data-astro-cid-i4ruep3h> <td class="feature-name" data-astro-cid-i4ruep3h>Joycon tenting capability</td> <td data-astro-cid-i4ruep3h><span class="check" data-astro-cid-i4ruep3h>✓</span></td> <td data-astro-cid-i4ruep3h>—</td> </tr> <tr data-astro-cid-i4ruep3h> <td class="feature-name" data-astro-cid-i4ruep3h>Battery life</td> <td data-astro-cid-i4ruep3h>Longer</td> <td data-astro-cid-i4ruep3h>Long</td> </tr> </tbody> </table> </div> </section> <section class="project-pictures" data-astro-cid-i4ruep3h> <div class="project-pictures-content" data-astro-cid-i4ruep3h> <div class="project-picture-wrapper" data-astro-cid-i4ruep3h> <div class="project-picture-card" onclick="openGalleryModal(this, 0)" data-astro-cid-i4ruep3h> <img src="/images/cogito/20260408_135238.jpg" alt="The Cogito keyboard" data-astro-cid-i4ruep3h> </div> </div> <div class="project-picture-wrapper" data-astro-cid-i4ruep3h> <div class="project-picture-card" onclick="openGalleryModal(this, 1)" data-astro-cid-i4ruep3h> <img src="/images/cogito/20260408_134419.jpg" alt="The Cogito keyboard" data-astro-cid-i4ruep3h> </div> </div> <div class="project-picture-wrapper" data-astro-cid-i4ruep3h> <div class="project-picture-card" onclick="openGalleryModal(this, 2)" data-astro-cid-i4ruep3h> <img src="/images/cogito/20260408_134532.jpg" alt="The Cogito keyboard" data-astro-cid-i4ruep3h> </div> </div> <div class="project-picture-wrapper" data-astro-cid-i4ruep3h> <div class="project-picture-card" onclick="openGalleryModal(this, 3)" data-astro-cid-i4ruep3h> <img src="/images/cogito/20260408_134749.jpg" alt="The Cogito keyboard" data-astro-cid-i4ruep3h> </div> </div> <div class="project-picture-wrapper" data-astro-cid-i4ruep3h> <div class="project-picture-card" onclick="openGalleryModal(this, 4)" data-astro-cid-i4ruep3h> <img src="/images/cogito/20260408_134806.jpg" alt="The Cogito keyboard" data-astro-cid-i4ruep3h> </div> </div> <div class="project-picture-wrapper" data-astro-cid-i4ruep3h> <div class="project-picture-card" onclick="openGalleryModal(this, 5)" data-astro-cid-i4ruep3h> <img src="/images/cogito/20260408_134922.jpg" alt="The Cogito keyboard" data-astro-cid-i4ruep3h> </div> </div> <div class="project-picture-wrapper" data-astro-cid-i4ruep3h> <div class="project-picture-card" onclick="openGalleryModal(this, 6)" data-astro-cid-i4ruep3h> <img src="/images/cogito/20260408_134957.jpg" alt="The Cogito keyboard" data-astro-cid-i4ruep3h> </div> </div> <div class="project-picture-wrapper" data-astro-cid-i4ruep3h> <div class="project-picture-card" onclick="openGalleryModal(this, 7)" data-astro-cid-i4ruep3h> <img src="/images/cogito/20260408_134353.jpg" alt="The Cogito keyboard" data-astro-cid-i4ruep3h> </div> </div> <div class="project-picture-wrapper" data-astro-cid-i4ruep3h> <div class="project-picture-card" onclick="openGalleryModal(this, 8)" data-astro-cid-i4ruep3h> <img src="/images/cogito/20260408_135604.jpg" alt="The Cogito keyboard" data-astro-cid-i4ruep3h> </div> </div> <div class="project-picture-wrapper" data-astro-cid-i4ruep3h> <div class="project-picture-card" onclick="openGalleryModal(this, 9)" data-astro-cid-i4ruep3h> <img src="/images/cogito/20260408_135631.jpg" alt="The Cogito keyboard" data-astro-cid-i4ruep3h> </div> </div> <div class="project-picture-wrapper" data-astro-cid-i4ruep3h> <div class="project-picture-card" onclick="openGalleryModal(this, 10)" data-astro-cid-i4ruep3h> <img src="/images/cogito/20260408_135731.jpg" alt="The Cogito keyboard" data-astro-cid-i4ruep3h> </div> </div> <div class="project-picture-wrapper" data-astro-cid-i4ruep3h> <div class="project-picture-card" onclick="openGalleryModal(this, 11)" data-astro-cid-i4ruep3h> <img src="/images/cogito/20260408_140118.jpg" alt="The Cogito keyboard" data-astro-cid-i4ruep3h> </div> </div> <div class="project-picture-wrapper" data-astro-cid-i4ruep3h> <div class="project-picture-card" onclick="openGalleryModal(this, 12)" data-astro-cid-i4ruep3h> <img src="/images/cogito/20260408_140339.jpg" alt="The Cogito keyboard" data-astro-cid-i4ruep3h> </div> </div> <div class="project-picture-wrapper" data-astro-cid-i4ruep3h> <div class="project-picture-card" onclick="openGalleryModal(this, 13)" data-astro-cid-i4ruep3h> <img src="/images/cogito/20260408_141448.jpg" alt="The Cogito keyboard" data-astro-cid-i4ruep3h> </div> </div> <div class="project-picture-wrapper" data-astro-cid-i4ruep3h> <div class="project-picture-card" onclick="openGalleryModal(this, 14)" data-astro-cid-i4ruep3h> <img src="/images/cogito/20260408_141518.jpg" alt="The Cogito keyboard" data-astro-cid-i4ruep3h> </div> </div> <div class="project-picture-wrapper" data-astro-cid-i4ruep3h> <div class="project-picture-card" onclick="openGalleryModal(this, 15)" data-astro-cid-i4ruep3h> <img src="/images/cogito/20260408_141545.jpg" alt="The Cogito keyboard" data-astro-cid-i4ruep3h> </div> </div> <div class="project-picture-wrapper" data-astro-cid-i4ruep3h> <div class="project-picture-card" onclick="openGalleryModal(this, 16)" data-astro-cid-i4ruep3h> <img src="/images/cogito/20260408_141708.jpg" alt="The Cogito keyboard" data-astro-cid-i4ruep3h> </div> </div> <div class="project-picture-wrapper" data-astro-cid-i4ruep3h> <div class="project-picture-card" onclick="openGalleryModal(this, 17)" data-astro-cid-i4ruep3h> <img src="/images/cogito/20260408_141750.jpg" alt="The Cogito keyboard" data-astro-cid-i4ruep3h> </div> </div> <div class="project-picture-wrapper" data-astro-cid-i4ruep3h> <div class="project-picture-card" onclick="openGalleryModal(this, 18)" data-astro-cid-i4ruep3h> <img src="/images/cogito/20260408_142201.jpg" alt="The Cogito keyboard" data-astro-cid-i4ruep3h> </div> </div> <div class="project-picture-wrapper" data-astro-cid-i4ruep3h> <div class="project-picture-card" onclick="openGalleryModal(this, 19)" data-astro-cid-i4ruep3h> <img src="/images/cogito/20260408_142410.jpg" alt="The Cogito keyboard" data-astro-cid-i4ruep3h> </div> </div> <div class="project-picture-wrapper" data-astro-cid-i4ruep3h> <div class="project-picture-card" onclick="openGalleryModal(this, 20)" data-astro-cid-i4ruep3h> <img src="/images/cogito/20260408_090208.jpg" alt="The Cogito keyboard" data-astro-cid-i4ruep3h> </div> </div> <div class="project-picture-wrapper" data-astro-cid-i4ruep3h> <div class="project-picture-card" onclick="openGalleryModal(this, 21)" data-astro-cid-i4ruep3h> <img src="/images/cogito/prototypes_on_desk.png" alt="Cogito prototypes on desk" data-astro-cid-i4ruep3h> </div> </div> <div class="project-picture-wrapper" data-astro-cid-i4ruep3h> <div class="project-picture-card" onclick="openGalleryModal(this, 22)" data-astro-cid-i4ruep3h> <img src="/images/cogito/20260408_134007.jpg" alt="The Cogito keyboard" data-astro-cid-i4ruep3h> </div> </div> </div> <div id="gallery-modal" class="gallery-modal" data-astro-cid-i4ruep3h> <span class="close-modal" onclick="closeGalleryModal()" data-astro-cid-i4ruep3h>&times;</span> <div class="gallery-modal-content" data-astro-cid-i4ruep3h> <!-- Content injected via JS --> </div> </div> </section> <!-- THE FOSSIL --> <section class="v2-content-section" data-astro-cid-i4ruep3h> <h2 id="the-fossil" class="narrative-tag" data-astro-cid-i4ruep3h>the Fossil</h2> <p data-astro-cid-i4ruep3h>
If an alien archaeologist dug up a standard keyboard a million years from now, they would
                    reconstruct the human hand as a flat, rigid plate with ten identical, equally-spaced
                    digit-tips — and a blunt, passive ridge where the thumb should be.
</p> <p data-astro-cid-i4ruep3h>
Every feature of the keyboard we use today is a fossil of 1870s mechanical engineering,
                    faithfully inherited but never questioned. The Cogito exists because we finally did
                    question it — starting from the hand itself, not the grid. The name says it all: Cogito,
                    ergo sum. I think, ergonomically, I am.
</p> <p data-astro-cid-i4ruep3h></p><div class="buttons" data-astro-cid-i4ruep3h> <a class="button" href="/work/writings/the_keyboard_fossil" data-astro-cid-i4ruep3h>Read the full essay</a> </div>  </section> <!-- THE SYSTEM --> <!-- <section class="v2-content-section">
                <h2 id="the-system" class="narrative-tag">the System</h2>
                <p>
                    The Cogito was designed as a keyboard. It is also the first component of something larger.
                </p>
                <p>
                    An iPad mini carries the Cogito halves on either side via a Switch-style rail standard —
                    flat for transport, pivoting to grip mode for handheld use. The iPad mini's touchscreen
                    becomes the trackpad, the canvas, and the secondary display. A MagSafe stand elevates a
                    second screen — or a Mac-iPad running full macOS — to eye level. The Cogito halves sit on
                    the desk at shoulder width, tented, exactly as ergonomics requires.
                </p>
                <p>
                    In this configuration, a device you carry in a bag transforms in seconds into a
                    workstation where every component is in exactly the right place for the body using it:
                    screen at eye level, keyboard at shoulder width, touch surface flat between the hands,
                    thumbs operating inward, fingers resting on keys tuned to their exact lengths.
                </p>
                <p>
                    The same rail standard accepts game controller halves in place of the keyboard halves. The
                    same MagSafe point mounts a tenting stand in work mode and a magnetic rear storage
                    position in transit. Nothing is loose. Nothing is separate. The system is closed, and the
                    keyboard is its spine.
                </p>
            </section> --> <!-- THE BREAKTHROUGH --> <section class="v2-content-section" data-astro-cid-i4ruep3h> <h2 id="the-breakthrough" class="narrative-tag" data-astro-cid-i4ruep3h>the Breakthrough</h2> <p data-astro-cid-i4ruep3h>
By only optimising the candle, you would never invent the lightbulb. Every generation of
                    keyboard designers since 1873 has made the rectangle thinner, quieter, and more wireless —
                    and none of them asked whether the rectangle was the right shape to begin with.
</p> <p data-astro-cid-i4ruep3h>The Cogito is not a better keyboard. It is the answer to a different question.</p> <p data-astro-cid-i4ruep3h> <em data-astro-cid-i4ruep3h>Digito, ergo sum.</em> I type, therefore I am — with every finger where it belongs, every
                    key where the hand expects it, and the lightbulb finally lit.
</p> <div style="margin-top: 60px;" data-astro-cid-i4ruep3h> `, ' </div> </section> <section class="v2-content-section" data-astro-cid-i4ruep3h> <h2 id="support-our-work" class="narrative-tag" data-astro-cid-i4ruep3h>Support our work</h2> <p data-astro-cid-i4ruep3h>\nYou can support our work by <strong data-astro-cid-i4ruep3h>making a donation</strong> or by <strong data-astro-cid-i4ruep3h>purchasing one of our products from our store.</strong> Your contribution directly funds the materials and coffee needed for the next prototype.\n</p> <div class="buttons" data-astro-cid-i4ruep3h> <a class="button" href="https://store.wattiv.nl/en-eur" target="_blank" rel="noopener noreferrer" data-astro-cid-i4ruep3h>To the store</a> </div> <div class="image_container" data-astro-cid-i4ruep3h> ', ' </div> <!-- <div\n                    class="legal-disclosure"\n                    style="margin-top: 60px; font-size: 0.7rem; opacity: 1; text-align: center; line-height: 1.4;"\n                >\n                    Watt IV is an independent creative technology studio.\n                </div> --> </section> ', " </main> </div> ", `  <script src="/shine.min.js"><\/script> <script>
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
    <\/script> `])), renderComponent($$result2, "Navigation", $$Navigation, { "data-astro-cid-i4ruep3h": true }), maybeRenderHead(), renderComponent($$result2, "model-viewer", "model-viewer", { "src": "/model_cogito.glb", "alt": "A 3D model of the Cogito", "auto-rotate": true, "disable-zoom": true, "camera-controls": true, "touch-action": "pan-y", "shadow-intensity": "1", "shadow-softness": "1", "loading": "eager", "data-astro-cid-i4ruep3h": true }), renderComponent($$result2, "TableOfContents", $$TableOfContents, { "links": tocLinks, "data-astro-cid-i4ruep3h": true }), renderComponent($$result2, "Timeline", $$Timeline, { "items": timelineItems, "data-astro-cid-i4ruep3h": true }), renderComponent($$result2, "SignupForm", $$SignupForm, { "data-astro-cid-i4ruep3h": true }), renderComponent($$result2, "Image", $$Image, { "src": store_png, "alt": "Watt IV Store", "data-astro-cid-i4ruep3h": true }), renderComponent($$result2, "ProjectsSection", $$ProjectsSection, { "currentProject": "keyboard", "title": "Other Projects", "showDescription": false, "narrowHeader": true, "data-astro-cid-i4ruep3h": true }), renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-i4ruep3h": true })), "head": ($$result2) => renderTemplate(_b || (_b = __template(['<fragment data-astro-cid-i4ruep3h> <link rel="icon" type="image/svg+xml" href="/images/favicon.svg"> <link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet"> <script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js"><\/script> </fragment>']))) })}`;
}, "/Users/paul/Documents/wattiv.nl/WattIV-website-dev/src/pages/work/cogito.astro", void 0);
const $$file = "/Users/paul/Documents/wattiv.nl/WattIV-website-dev/src/pages/work/cogito.astro";
const $$url = "/work/cogito";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Cogito,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
