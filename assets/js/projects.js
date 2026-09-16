/* ============================================================
   CRIMSON ORES — projects.js
   Single source of truth for project data. The project grid,
   featured cards and project-detail view are all rendered from
   this file, so adding a project only requires editing the
   `projects` array below.

   HOW TO ADD A PROJECT:
   1. Duplicate one object in `projects`.
   2. Give it a unique `id` (e.g. "project-004").
   3. Fill in the text fields and point `coverImage` / `gallery`
      at images in assets/images/projects/<your-id>/.
   4. Set `featured: true` to also show it on the Home page.
   ============================================================ */

(function () {
  'use strict';

  /* ---------- Project data ---------- */
  var projects = [
    {
      id: 'project-001',
      title: 'Project 01 — Title to Be Added',
      category: 'Mine Planning',
      shortDescription:
        'Placeholder. Replace this with a short, one-line summary of this mine-planning project, system or prototype.',
      fullDescription:
        'Placeholder overview. Use this space to describe the purpose, scope and objectives of this project in a few sentences.',
      problem:
        'Placeholder. Describe the specific mining problem, challenge or inefficiency this project sets out to address.',
      solution:
        'Placeholder. Describe the proposed solution, or the solution currently being developed, and how it tackles the problem above.',
      howItWorks:
        'Placeholder. Explain how the solution works in practice — its workflow, core mechanism or how the technology is applied.',
      features: [
        'Placeholder feature',
        'Placeholder feature',
        'Placeholder feature',
        'Placeholder feature'
      ],
      technologies: ['To be confirmed', 'To be confirmed'],
      miningApplication:
        'Placeholder. Describe how this project applies to real-world mining operations and where it fits into the mining value chain.',
      safetyBenefits: ['Placeholder safety benefit.'],
      efficiencyBenefits: ['Placeholder efficiency benefit.'],
      sustainabilityBenefits: ['Placeholder sustainability benefit.'],
      status: 'Concept',
      statusDescription:
        'Concept — this project is currently at the idea and early planning stage.',
      featured: true,
      coverImage: 'assets/images/projects/project-001/cover.svg',
      gallery: [
        { src: 'assets/images/projects/project-001/cover.svg', caption: 'Mine planning and design dashboard' },
        { src: 'assets/images/projects/project-001/screenshot-01.svg', caption: 'Production scheduling dashboard' },
        { src: 'assets/images/projects/project-001/screenshot-02.svg', caption: '3D resource block model' },
        { src: 'assets/images/projects/project-001/screenshot-03.svg', caption: 'Geological cross-section — drillholes and ore intercepts' }
      ]
    },
    {
      id: 'project-002',
      title: 'Project 02 — Title to Be Added',
      category: 'Environmental Monitoring',
      shortDescription:
        'Placeholder. Replace this with a short summary of this environmental-monitoring project, system or prototype.',
      fullDescription:
        'Placeholder overview. Use this space to describe the purpose, scope and objectives of this project in a few sentences.',
      problem:
        'Placeholder. Describe the specific environmental or monitoring challenge this project addresses.',
      solution:
        'Placeholder. Describe the proposed solution, or the solution currently being developed, and how it tackles the problem above.',
      howItWorks:
        'Placeholder. Explain how the solution works in practice — its workflow, core mechanism or how the technology is applied.',
      features: [
        'Placeholder feature',
        'Placeholder feature',
        'Placeholder feature'
      ],
      technologies: ['To be confirmed', 'To be confirmed'],
      miningApplication:
        'Placeholder. Describe how this project applies to real-world mining operations and where it fits into the mining value chain.',
      safetyBenefits: ['Placeholder safety benefit.'],
      efficiencyBenefits: ['Placeholder efficiency benefit.'],
      sustainabilityBenefits: ['Placeholder sustainability benefit.'],
      status: 'Prototype',
      statusDescription:
        'Prototype — an early working model of this solution is being developed and refined.',
      featured: true,
      coverImage: 'assets/images/projects/project-002/cover.svg',
      gallery: [
        { src: 'assets/images/projects/project-002/cover.svg', caption: 'Environmental monitoring dashboard' },
        { src: 'assets/images/projects/project-002/screenshot-01.svg', caption: 'Sensor node assembly and live telemetry' }
      ]
    },
    {
      id: 'project-003',
      title: 'Project 03 — Title to Be Added',
      category: 'Drilling & Blasting',
      shortDescription:
        'Placeholder. Replace this with a short summary of this drilling-and-blasting project, system or prototype.',
      fullDescription:
        'Placeholder overview. Use this space to describe the purpose, scope and objectives of this project in a few sentences.',
      problem:
        'Placeholder. Describe the specific drilling or blasting challenge this project addresses.',
      solution:
        'Placeholder. Describe the proposed solution, or the solution currently being developed, and how it tackles the problem above.',
      howItWorks:
        'Placeholder. Explain how the solution works in practice — its workflow, core mechanism or how the technology is applied.',
      features: [
        'Placeholder feature',
        'Placeholder feature'
      ],
      technologies: ['To be confirmed', 'To be confirmed'],
      miningApplication:
        'Placeholder. Describe how this project applies to real-world mining operations and where it fits into the mining value chain.',
      safetyBenefits: ['Placeholder safety benefit.'],
      efficiencyBenefits: ['Placeholder efficiency benefit.'],
      sustainabilityBenefits: ['Placeholder sustainability benefit.'],
      status: 'Research',
      statusDescription:
        'Research — this project is being investigated and scoped before full development.',
      featured: true,
      coverImage: 'assets/images/projects/project-003/cover.svg',
      gallery: [
        { src: 'assets/images/projects/project-003/cover.svg', caption: 'Drill and blast design — blast pattern' }
      ]
    }
  ];

  /* Available filter categories (order = filter button order). */
  var categories = [
    'All',
    'Mine Planning',
    'Drilling & Blasting',
    'Ventilation',
    'Environmental Monitoring',
    'Rock Mechanics',
    'Ore Handling',
    'Other Innovation'
  ];

  /* ---------- Reusable inline icons ---------- */
  var ICON_ARROW =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  var ICON_BACK =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5M11 18l-6-6 6-6"/></svg>';
  var ICON_CHECK =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>';
  var ICON_SHIELD =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z"/><path d="M9 12l2 2 4-4"/></svg>';
  var ICON_GAUGE =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 15l3.5-5.5"/><path d="M20.2 15a8.5 8.5 0 1 0-16.4 0"/></svg>';
  var ICON_LEAF =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 20A7 7 0 0 1 4 13c0-4 3-9 16-9-1 8-5 13-9 13z"/><path d="M4 21c2-4 6-7 10-9"/></svg>';
  /* ---------- Helpers ---------- */
  function getProjectById(id) {
    return projects.filter(function (p) { return p.id === id; })[0] || null;
  }

  function cardHTML(p) {
    return (
      '<article class="project-card reveal">' +
        '<div class="project-card__media">' +
          '<img src="' + p.coverImage + '" alt="' + p.title + ' — ' + p.category + '" loading="lazy" width="800" height="533">' +
          '<span class="project-card__status"><span class="badge">' + p.status + '</span></span>' +
        '</div>' +
        '<div class="project-card__body">' +
          '<span class="project-card__category">' + p.category + '</span>' +
          '<h3 class="project-card__title">' + p.title + '</h3>' +
          '<p class="project-card__desc">' + p.shortDescription + '</p>' +
          '<div class="project-card__foot">' +
            '<a class="project-card__link" href="projects.html?id=' + p.id + '">View Project ' + ICON_ARROW + '</a>' +
          '</div>' +
        '</div>' +
      '</article>'
    );
  }

  function listHTML(items) {
    return items.map(function (item) {
      return '<li>' + ICON_CHECK + '<span>' + item + '</span></li>';
    }).join('');
  }

  /* ---------- Render: grid ---------- */
  function renderGrid(list) {
    var grid = document.getElementById('projects-grid');
    var empty = document.getElementById('projects-empty');
    if (!grid) return;

    if (!list.length) {
      grid.innerHTML = '';
      if (empty) empty.classList.add('is-visible');
      return;
    }
    if (empty) empty.classList.remove('is-visible');

    grid.innerHTML = list.map(cardHTML).join('');
    attachReveal(grid.querySelectorAll('.reveal'));
  }

  /* ---------- Render: filters ---------- */
  function renderFilters() {
    var bar = document.getElementById('filter-bar');
    if (!bar) return;

    bar.innerHTML = categories.map(function (cat, i) {
      return (
        '<button type="button" class="filter-btn' + (i === 0 ? ' is-active' : '') + '" data-filter="' + cat + '">' +
          cat +
        '</button>'
      );
    }).join('');

    var buttons = bar.querySelectorAll('.filter-btn');
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        buttons.forEach(function (b) { b.classList.remove('is-active'); });
        btn.classList.add('is-active');
        var filter = btn.getAttribute('data-filter');
        var filtered = filter === 'All'
          ? projects.slice()
          : projects.filter(function (p) { return p.category === filter; });
        renderGrid(filtered);
      });
    });
  }

  /* ---------- Render: featured (home) ---------- */
  function renderFeatured(container, limit) {
    if (!container) return;
    var featured = projects.filter(function (p) { return p.featured; });
    var list = featured.length ? featured : projects.slice(0, 3);
    list = list.slice(0, limit || 3);
    container.innerHTML = list.map(cardHTML).join('');
  }
  /* ---------- Render: detail ---------- */
  function renderDetail(project) {
    var indexEl = document.getElementById('projects-index');
    var detailEl = document.getElementById('project-detail');
    var inner = document.getElementById('project-detail-inner');
    if (!detailEl || !inner) return;

    var benefits =
      '<div class="pd-benefit"><h4>' + ICON_SHIELD + 'Safety Benefits</h4><ul>' + listHTML(project.safetyBenefits) + '</ul></div>' +
      '<div class="pd-benefit"><h4>' + ICON_GAUGE + 'Efficiency Benefits</h4><ul>' + listHTML(project.efficiencyBenefits) + '</ul></div>' +
      '<div class="pd-benefit"><h4>' + ICON_LEAF + 'Sustainability Benefits</h4><ul>' + listHTML(project.sustainabilityBenefits) + '</ul></div>';

    var gallery = project.gallery.map(function (g, i) {
      return (
        '<figure class="gallery-item" role="button" tabindex="0" data-index="' + i + '" data-src="' + g.src + '" data-caption="' + g.caption + '">' +
          '<img src="' + g.src + '" alt="' + g.caption + '" loading="lazy" width="800" height="600">' +
          '<figcaption>' + g.caption + '</figcaption>' +
        '</figure>'
      );
    }).join('');

    inner.innerHTML =
      '<div class="project-detail">' +
        '<a class="pd-back" href="projects.html">' + ICON_BACK + 'All Projects</a>' +
        '<div class="pd-head">' +
          '<div>' +
            '<span class="eyebrow">' + project.category + '</span>' +
            '<h1 class="pd-title">' + project.title + '</h1>' +
            '<div class="pd-meta">' +
              '<span class="badge">' + project.status + '</span>' +
              '<span class="tech-chip">' + project.category + '</span>' +
            '</div>' +
          '</div>' +
          '<div class="pd-cover"><img src="' + project.coverImage + '" alt="' + project.title + ' cover image" width="800" height="533"></div>' +
        '</div>' +

        '<section class="pd-section"><h3>Overview</h3><p>' + project.fullDescription + '</p></section>' +

        '<div class="pd-two-col">' +
          '<div class="pd-box"><h4>The Problem</h4><p>' + project.problem + '</p></div>' +
          '<div class="pd-box"><h4>The Proposed Solution</h4><p>' + project.solution + '</p></div>' +
        '</div>' +

        '<section class="pd-section"><h3>How It Works</h3><p>' + project.howItWorks + '</p></section>' +

        '<section class="pd-section"><h3>Key Features</h3><ul class="feature-list">' + listHTML(project.features) + '</ul></section>' +

        '<section class="pd-section"><h3>Technologies Used</h3><div class="tech-list">' +
          project.technologies.map(function (t) { return '<span class="tech-chip">' + t + '</span>'; }).join('') +
        '</div></section>' +

        '<section class="pd-section"><h3>Mining Application</h3><p>' + project.miningApplication + '</p></section>' +

        '<div class="pd-benefits">' + benefits + '</div>' +

        '<section class="pd-section"><h3>Project Status</h3>' +
          '<div class="pd-status"><span class="badge">' + project.status + '</span><p>' + project.statusDescription + '</p></div>' +
        '</section>' +

        '<section class="pd-section"><h3>Gallery</h3><div class="pd-gallery">' + gallery + '</div></section>' +
      '</div>';
    if (indexEl) indexEl.hidden = true;
    detailEl.hidden = false;

    document.title = project.title + ' | Crimson Ores';
    window.scrollTo(0, 0);

    attachReveal(detailEl.querySelectorAll('.reveal'));
    attachGalleryKeyboard(detailEl.querySelectorAll('.gallery-item'));
  }

  /* ---------- Reveal helper (also used by main.js) ---------- */
  function attachReveal(nodes) {
    if (!('IntersectionObserver' in window)) {
      nodes.forEach(function (n) { n.classList.add('in-view'); });
      return;
    }
    nodes.forEach(function (node) {
      if (node.classList.contains('in-view') || node.dataset.revealed) return;
      node.dataset.revealed = 'true';
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
      io.observe(node);
    });
  }

  /* ---------- Gallery keyboard (role=button figures) ---------- */
  function attachGalleryKeyboard(nodes) {
    nodes.forEach(function (node) {
      node.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          node.click();
        }
      });
    });
  }

  /* ---------- Init ---------- */
  function init() {
    var grid = document.getElementById('projects-grid');
    var detailEl = document.getElementById('project-detail');

    if (grid) {
      renderFilters();
      renderGrid(projects.slice());
    }

    if (detailEl) {
      var params = new URLSearchParams(window.location.search);
      var id = params.get('id');
      var project = id ? getProjectById(id) : null;

      if (project) {
        renderDetail(project);
      } else {
        detailEl.hidden = true;
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  /* ---------- Public API ---------- */
  window.CrimsonOres = window.CrimsonOres || {};
  window.CrimsonOres.projects = projects;
  window.CrimsonOres.categories = categories;
  window.CrimsonOres.renderFeatured = renderFeatured;
  window.CrimsonOres.getProjectById = getProjectById;
  window.CrimsonOres.attachReveal = attachReveal;
})();




