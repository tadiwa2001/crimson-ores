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
      title: 'Smart Ventilation System',
      category: 'Ventilation',
      shortDescription: 'Underground air, intelligently managed.',
      fullDescription:
        'Our Smart Ventilation System is a complete package built for safety and efficiency: gas sensors, temperature and humidity sensors, booster and main fans, connectivity infrastructure, SCADA software, and wiring — all working together to monitor conditions and automatically adjust airflow in real time. It replaces guesswork with live data, cutting the risk of gas buildup and heat stress while reducing the energy costs of running ventilation around the clock.',
      problem:
        'Underground ventilation is often run on guesswork, exposing miners to the risk of gas buildup and heat stress while wasting energy on fans that run around the clock.',
      solution:
        'A complete, connected ventilation package that monitors conditions and automatically adjusts airflow in real time.',
      howItWorks:
        'Gas, temperature and humidity sensors feed live data through connectivity infrastructure into SCADA software, which automatically adjusts booster and main fans to match airflow to the actual conditions underground.',
      features: [
        'Gas, temperature and humidity sensors',
        'Booster and main fans',
        'Connectivity infrastructure',
        'SCADA software for real-time monitoring',
        'Automatic airflow adjustment'
      ],
      technologies: ['Gas sensors', 'SCADA software', 'IoT connectivity', 'Booster fans'],
      miningApplication:
        'Underground mine ventilation — monitoring and controlling air quality and airflow to keep working conditions safe.',
      safetyBenefits: [
        'Reduces the risk of gas buildup',
        'Reduces the risk of heat stress',
        'Replaces guesswork with live, accurate condition data'
      ],
      efficiencyBenefits: [
        'Automatic airflow adjustment reduces wasted ventilation energy',
        'Live data supports faster, better operational decisions'
      ],
      sustainabilityBenefits: [
        'Lowers the energy consumption of round-the-clock ventilation'
      ],
      status: 'Prototype',
      statusDescription:
        'Prototype — the Smart Ventilation System is being developed and refined by Crimson Ores.',
      featured: true,
      coverImage: 'assets/images/projects/project-001/cover.jpeg',
      gallery: [
        { src: 'assets/images/projects/project-001/cover.jpeg', caption: 'Smart Ventilation System' },
        { src: 'assets/images/projects/project-001/screenshot-01.jpeg', caption: 'Smart Ventilation System — component view' }
      ]
    },
    {
      id: 'project-002',
      title: 'Smart Torch',
      category: 'Other Innovation',
      shortDescription: 'More than light — a lifeline.',
      fullDescription:
        'The Smart Torch is a miner\'s torch built with a personnel tracker, giving real-time visibility into a miner\'s location, environment temperature, and gas levels. It turns a basic safety tool into a connected safety system, helping teams respond faster when something goes wrong underground.',
      problem:
        'A basic torch gives light but offers no way to locate a miner or monitor the conditions around them if something goes wrong underground.',
      solution:
        'A miner\'s torch with a built-in personnel tracker that reports location, temperature and gas levels in real time.',
      howItWorks:
        'The torch combines lighting with an embedded tracker that continuously reports the miner\'s location and surrounding environment, so teams can locate and respond faster when something goes wrong.',
      features: [
        'Built-in personnel tracker',
        'Real-time location visibility',
        'Environment temperature monitoring',
        'Gas-level monitoring',
        'Connected safety system'
      ],
      technologies: ['Personnel tracking', 'Environmental sensors', 'Wireless connectivity'],
      miningApplication:
        'Underground mining — personal safety and personnel tracking for faster emergency response.',
      safetyBenefits: [
        'Real-time visibility into a miner\'s location',
        'Faster response when something goes wrong underground',
        'Turns a basic safety tool into a connected safety system'
      ],
      efficiencyBenefits: [
        'Teams can locate personnel and respond faster'
      ],
      sustainabilityBenefits: [
        'A durable, integrated device that consolidates safety and tracking'
      ],
      status: 'Prototype',
      statusDescription:
        'Prototype — the Smart Torch is being developed and refined by Crimson Ores.',
      featured: true,
      coverImage: 'assets/images/projects/project-002/cover.jpeg',
      gallery: [
        { src: 'assets/images/projects/project-002/cover.jpeg', caption: 'Smart Torch' },
        { src: 'assets/images/projects/project-002/screenshot-01.jpeg', caption: 'Smart Torch — additional view' }
      ]
    },
    {
      id: 'project-003',
      title: 'Solar Windlass',
      category: 'Ore Handling',
      shortDescription: 'Powering up small-scale mining, safely.',
      fullDescription:
        'Solar Windlass is a solar-powered mechanized windlass that replaces manual hand-cranked winching for lowering and raising people, equipment, and broken rock in mining shafts. Built for miners sinking shafts up to 30 metres, it cuts physical strain and risk while keeping operations compliant with the Mining (Management and Safety) Regulations.',
      problem:
        'Lowering and raising people, equipment and broken rock by hand-cranked winching is physically demanding and risky for miners sinking shafts.',
      solution:
        'A solar-powered mechanized windlass that replaces manual hand-cranking for shaft hoisting.',
      howItWorks:
        'A solar-powered motor drives a windlass drum to raise and lower a kibble in the shaft, removing manual cranking while keeping operations compliant with the Mining (Management and Safety) Regulations.',
      features: [
        'Solar-powered drive',
        'Mechanized winching',
        'Raises and lowers people, equipment and broken rock',
        'Built for shafts up to 30 metres',
        'Compliant with Mining (Management and Safety) Regulations'
      ],
      technologies: ['Solar power', 'Electric winch motor', 'Hoisting drum'],
      miningApplication:
        'Small-scale shaft sinking and hoisting — lowering and raising people, equipment and broken rock.',
      safetyBenefits: [
        'Cuts physical strain on miners',
        'Reduces risk compared to manual hand-cranking'
      ],
      efficiencyBenefits: [
        'Mechanizes a slow, manual task'
      ],
      sustainabilityBenefits: [
        'Runs on solar power instead of manual or fuel-driven effort'
      ],
      status: 'Prototype',
      statusDescription:
        'Prototype — the Solar Windlass is being developed and refined by Crimson Ores.',
      featured: true,
      coverImage: 'assets/images/projects/project-003/cover.svg',
      gallery: [
        { src: 'assets/images/projects/project-003/cover.svg', caption: 'Solar Windlass' }
      ]
    },
    {
      id: 'project-004',
      title: 'Solar Powered Water Recycling System',
      category: 'Environmental Monitoring',
      shortDescription: 'Turning waste water into a working resource.',
      fullDescription:
        'This solar-powered system pumps water reached at the water table during shaft sinking, filters it, and recycles it for drilling, dust suppression after blasting, water blasting, and blowpipe use. It gives small-scale miners a self-sufficient water source, solving a problem many can\'t afford to fix with boreholes or built water facilities.',
      problem:
        'Small-scale miners often cannot afford boreholes or built water facilities, leaving the water reached at the water table during shaft sinking unused.',
      solution:
        'A solar-powered system that pumps, filters and recycles shaft water for operational use.',
      howItWorks:
        'A solar-powered pump lifts water reached at the water table during shaft sinking, passes it through filtration, and recycles it for drilling, dust suppression after blasting, water blasting and blowpipe use.',
      features: [
        'Solar-powered pumping',
        'Water filtration',
        'Recycled for drilling',
        'Dust suppression after blasting',
        'Water blasting and blowpipe use',
        'Self-sufficient water source'
      ],
      technologies: ['Solar power', 'Water pump', 'Filtration'],
      miningApplication:
        'Small-scale mining — a self-sufficient water supply and recycling system for shaft-sinking operations.',
      safetyBenefits: [
        'Supports dust suppression after blasting',
        'Provides a reliable water source for safer operations'
      ],
      efficiencyBenefits: [
        'Provides a self-sufficient water source without boreholes or built facilities'
      ],
      sustainabilityBenefits: [
        'Recycles waste water instead of drawing on external sources',
        'Runs on solar power'
      ],
      status: 'Prototype',
      statusDescription:
        'Prototype — the Solar Powered Water Recycling System is being developed and refined by Crimson Ores.',
      featured: false,
      coverImage: 'assets/images/projects/project-004/cover.svg',
      gallery: [
        { src: 'assets/images/projects/project-004/cover.svg', caption: 'Solar Powered Water Recycling System' }
      ]
    },
    {
      id: 'project-005',
      title: 'Shot Exploder',
      category: 'Drilling & Blasting',
      shortDescription: 'Distance is safety.',
      fullDescription:
        'The Shot Exploder is a self-generating electric blasting initiation device that lets miners fire charges from a safe distance, replacing the dangerous practice of manually lighting fuses and running. It directly tackles one of the biggest daily risks facing artisanal miners in Zimbabwe: premature detonation.',
      problem:
        'Manually lighting fuses and running exposes artisanal miners to the risk of premature detonation.',
      solution:
        'A self-generating electric blasting initiation device that fires charges from a safe distance.',
      howItWorks:
        'The self-generating device produces its own electrical charge to initiate blasting remotely, letting miners fire charges from a safe distance instead of lighting fuses by hand.',
      features: [
        'Self-generating (no battery needed)',
        'Electric blasting initiation',
        'Firing from a safe distance',
        'Replaces manual fuse lighting'
      ],
      technologies: ['Self-generating blasting unit', 'Electric initiation circuit'],
      miningApplication:
        'Artisanal and small-scale blasting — safe remote initiation of charges.',
      safetyBenefits: [
        'Lets miners fire charges from a safe distance',
        'Directly tackles the risk of premature detonation'
      ],
      efficiencyBenefits: [
        'Faster, more controlled blasting initiation'
      ],
      sustainabilityBenefits: [
        'Self-generating design avoids disposable batteries'
      ],
      status: 'Prototype',
      statusDescription:
        'Prototype — the Shot Exploder is being developed and refined by Crimson Ores.',
      featured: false,
      coverImage: 'assets/images/projects/project-005/cover.svg',
      gallery: [
        { src: 'assets/images/projects/project-005/cover.svg', caption: 'Shot Exploder' }
      ]
    },
    {
      id: 'project-006',
      title: 'Construction Material from Waste',
      category: 'Other Innovation',
      shortDescription: 'Turning mine waste into building blocks.',
      fullDescription:
        'This Crusher crushes proven waste rock from mine development into construction material sized to client specification, ready for use in concrete, foundations, and other infrastructure.',
      problem:
        'Waste rock from mine development is often discarded instead of being put to productive use.',
      solution:
        'A crusher that turns proven waste rock into construction material sized to client specification.',
      howItWorks:
        'The crusher processes proven waste rock from mine development and sizes it into construction material ready for use in concrete, foundations and other infrastructure.',
      features: [
        'Crushes waste rock from mine development',
        'Sized to client specification',
        'Output ready for concrete and foundations',
        'Useful in other infrastructure'
      ],
      technologies: ['Crusher', 'Aggregate sizing'],
      miningApplication:
        'Mine development — converting waste rock into saleable construction material.',
      safetyBenefits: [
        'Reduces waste rock stockpiles on site'
      ],
      efficiencyBenefits: [
        'Creates value from material that would otherwise be discarded'
      ],
      sustainabilityBenefits: [
        'Turns mine waste into a reusable resource',
        'Reduces demand for virgin construction materials'
      ],
      status: 'Prototype',
      statusDescription:
        'Prototype — the Construction Material from Waste crusher is being developed and refined by Crimson Ores.',
      featured: false,
      coverImage: 'assets/images/projects/project-006/cover.svg',
      gallery: [
        { src: 'assets/images/projects/project-006/cover.svg', caption: 'Construction Material from Waste — crusher' }
      ]
    },
    {
      id: 'project-007',
      title: 'Rock Support Device',
      category: 'Rock Mechanics',
      shortDescription: 'Standing between miners and rockfalls.',
      fullDescription:
        'The Rock Support Device is a hydraulic support system installed in tunnels, extending up to 3 metres vertically to exert force against the roof and walls and prevent collapses.',
      problem:
        'Rockfalls in tunnels threaten the safety of miners underground.',
      solution:
        'A hydraulic support system that braces tunnel roofs and walls to prevent collapses.',
      howItWorks:
        'Installed in tunnels, the hydraulic support extends up to 3 metres vertically to exert force against the roof and walls, reinforcing the ground and preventing collapses.',
      features: [
        'Hydraulic support system',
        'Installed in tunnels',
        'Extends up to 3 metres vertically',
        'Exerts force against roof and walls',
        'Prevents collapses'
      ],
      technologies: ['Hydraulic support', 'Tunnel reinforcement'],
      miningApplication:
        'Underground ground control — supporting tunnel roofs and walls against rockfalls.',
      safetyBenefits: [
        'Prevents tunnel collapses',
        'Protects miners from rockfalls'
      ],
      efficiencyBenefits: [
        'Reusable, relocatable ground support'
      ],
      sustainabilityBenefits: [
        'Reinforces existing workings for safer, longer-lived tunnels'
      ],
      status: 'Prototype',
      statusDescription:
        'Prototype — the Rock Support Device is being developed and refined by Crimson Ores.',
      featured: false,
      coverImage: 'assets/images/projects/project-007/cover.svg',
      gallery: [
        { src: 'assets/images/projects/project-007/cover.svg', caption: 'Rock Support Device' }
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




