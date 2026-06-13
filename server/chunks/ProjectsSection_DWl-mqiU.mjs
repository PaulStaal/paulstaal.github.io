globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_KNe951u6.mjs";
import { m as maybeRenderHead, c as addAttribute, b as renderTemplate } from "./worker-entry_BvOOjRSE.mjs";
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$ProjectsSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ProjectsSection;
  const { currentProject, enableFilters = false, title = "Projects & Prototypes", showDescription = true, narrowHeader = false, asH1 = false } = Astro2.props;
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
      image: "/images/arcade_lino.png",
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
  const isRealProject = (p) => p.status !== "placeholder";
  let displayedProjects = projects.filter((p) => p.id !== currentProject);
  const allTags = [...new Set(projects.filter(isRealProject).flatMap((p) => p.tags))];
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`hero projects ${narrowHeader ? "narrow-header" : ""} ${enableFilters ? "filter-enabled" : ""}`, "class")} id="projects" data-astro-cid-oyo7lhtz> <div class="content" data-astro-cid-oyo7lhtz> ${asH1 ? renderTemplate`<h1 class="projects-title" data-astro-cid-oyo7lhtz>${title}</h1>` : renderTemplate`<h2 data-astro-cid-oyo7lhtz>${title}</h2>`} ${showDescription && renderTemplate`<p data-astro-cid-oyo7lhtz>
We believe technology should spark curiosity, not noise. Bridging the gap between digital precision and physical play and creating the artifacts we once only dreamed of; where code becomes tactile and technology feels human again.
</p>`} ${enableFilters && renderTemplate`<div class="projects-controls" data-astro-cid-oyo7lhtz> <div class="custom-dropdown filter-dropdown" data-astro-cid-oyo7lhtz> <button class="dropdown-trigger" id="filter-trigger" data-astro-cid-oyo7lhtz>
Filter by Category
<svg width="10" height="6" viewBox="0 0 10 6" fill="none" class="arrow-icon" data-astro-cid-oyo7lhtz> <path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-oyo7lhtz></path> </svg> </button> <div class="dropdown-menu" id="filter-menu" data-astro-cid-oyo7lhtz> <label class="checkbox-item all-option" data-astro-cid-oyo7lhtz> <input type="checkbox" value="All" checked data-astro-cid-oyo7lhtz> <span class="checkmark" data-astro-cid-oyo7lhtz></span>
All
</label> ${allTags.map((tag) => renderTemplate`<label class="checkbox-item" data-astro-cid-oyo7lhtz> <input type="checkbox"${addAttribute(tag, "value")} data-astro-cid-oyo7lhtz> <span class="checkmark" data-astro-cid-oyo7lhtz></span> ${tag} </label>`)} </div> </div> <div class="custom-select-wrapper" data-astro-cid-oyo7lhtz> <label for="sort-by" style="margin-right: 10px;" data-astro-cid-oyo7lhtz>Sort:</label> <div class="select-container" data-astro-cid-oyo7lhtz> <select id="sort-by" data-astro-cid-oyo7lhtz> <option value="date-desc" data-astro-cid-oyo7lhtz>Newest First</option> <option value="date-asc" data-astro-cid-oyo7lhtz>Oldest First</option> <option value="name-asc" data-astro-cid-oyo7lhtz>Name A-Z</option> <option value="name-desc" data-astro-cid-oyo7lhtz>Name Z-A</option> </select> <svg width="10" height="6" viewBox="0 0 10 6" fill="none" class="select-arrow" data-astro-cid-oyo7lhtz> <path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-oyo7lhtz></path> </svg> </div> </div> </div>`} </div> <div class="projects-gallery-container" id="gallery-container" data-astro-cid-oyo7lhtz> ${displayedProjects.map((project) => renderTemplate`<a${addAttribute(project.status === "coming-soon" || project.status === "placeholder" ? "javascript:void(0)" : project.url, "href")}${addAttribute(`project-card ${project.status === "coming-soon" ? "coming-soon" : ""} ${project.status === "placeholder" ? "placeholder" : ""}`, "class")}${addAttribute(project.tags.join(","), "data-tags")}${addAttribute(project.date, "data-date")}${addAttribute(project.title, "data-title")}${addAttribute(project.status, "data-status")}${addAttribute(project.status === "coming-soon" ? "this.classList.toggle('flipped'); return false;" : project.status === "placeholder" ? "return false;" : "", "onclick")} data-astro-cid-oyo7lhtz> <div class="project-card-inner" data-astro-cid-oyo7lhtz> <div class="project-card-front"${addAttribute(project.color ? `background-color: ${project.color}` : "", "style")} data-astro-cid-oyo7lhtz> ${project.date && project.status !== "placeholder" && renderTemplate`<span class="card-date" data-astro-cid-oyo7lhtz>${project.date}</span>`} ${project.image ? renderTemplate`<img${addAttribute(project.image, "src")}${addAttribute(`${project.title} prototype`, "alt")} draggable="false" data-astro-cid-oyo7lhtz>` : project.placeholder ? renderTemplate`<p class="image-placeholder" data-astro-cid-oyo7lhtz>${project.placeholder}</p>` : null} <div class="project-card-content" data-astro-cid-oyo7lhtz> <h3 data-astro-cid-oyo7lhtz>${project.title}</h3> ${project.role && renderTemplate`<p class="role" data-astro-cid-oyo7lhtz>${project.role}</p>`} ${project.tags.length > 0 && renderTemplate`<div class="card-tags" data-astro-cid-oyo7lhtz> ${project.tags.map((tag) => renderTemplate`<span data-astro-cid-oyo7lhtz>${tag}</span>`)} </div>`} </div> </div> ${project.status === "coming-soon" && renderTemplate`<div class="project-card-back"${addAttribute(project.color ? `background-color: ${project.color}` : "", "style")} data-astro-cid-oyo7lhtz> <div class="back-content" data-astro-cid-oyo7lhtz> <h3 data-astro-cid-oyo7lhtz>Coming Soon</h3> <p data-astro-cid-oyo7lhtz>Stay tuned for updates.</p> </div> </div>`} </div> </a>`)} </div> </section> ${enableFilters && renderTemplate(_a || (_a = __template([`<script lang="ts">
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
<\/script>`])))}`;
}, "/Users/paul/Documents/wattiv.nl/WattIV-website-dev/src/components/ProjectsSection.astro", void 0);
const $$file = "/Users/paul/Documents/wattiv.nl/WattIV-website-dev/src/components/ProjectsSection.astro";
const $$url = void 0;
const __vite_glob_1_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$ProjectsSection,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
export {
  $$ProjectsSection as $,
  __vite_glob_1_6 as _
};
