/* ============================================================
   CRIMSON ORES — main.js
   Navigation, scroll effects, reveal-on-scroll, featured
   projects and contact-form handling.
   ============================================================ */

(function () {
  'use strict';

  document.documentElement.classList.add('js');

  /* ---------- Navigation ---------- */
  function initNav() {
    var header = document.querySelector('.site-header');
    var toggle = document.querySelector('.nav-toggle');
    var menu = document.querySelector('.nav__list');

    if (!toggle || !menu) return;

    function setMenu(open) {
      menu.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    toggle.addEventListener('click', function () {
      setMenu(!menu.classList.contains('is-open'));
    });

    // Close the mobile menu when a link inside it is clicked.
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false);
    });

    // Close on Escape for keyboard users.
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) {
        setMenu(false);
        toggle.focus();
      }
    });

    // Header elevation on scroll.
    var onScroll = function () {
      if (window.scrollY > 10) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Active navigation state ---------- */
  function initScrollSpy() {
    var page = document.body.getAttribute('data-page') || 'home';
    var links = document.querySelectorAll('.nav__link[data-section]');

    function setActive(section) {
      links.forEach(function (link) {
        link.classList.toggle('is-active', link.getAttribute('data-section') === section);
      });
    }

    if (page === 'projects') {
      setActive('projects');
      return;
    }

    var sections = Array.prototype.slice.call(document.querySelectorAll('main section[id]'));
    if (!sections.length) return;

    if (!('IntersectionObserver' in window)) {
      setActive('home');
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

    sections.forEach(function (s) { observer.observe(s); });
  }

  /* ---------- Reveal on scroll (static content) ---------- */
  function initReveal() {
    var nodes = document.querySelectorAll('.reveal');
    if (nodes.length && window.CrimsonOres && window.CrimsonOres.attachReveal) {
      window.CrimsonOres.attachReveal(nodes);
    }
  }

  /* ---------- Featured projects (home) ---------- */
  function initFeatured() {
    var grid = document.getElementById('featured-grid');
    if (!grid || !window.CrimsonOres) return;
    window.CrimsonOres.renderFeatured(grid, 3);
    var cards = grid.querySelectorAll('.reveal');
    if (cards.length && window.CrimsonOres.attachReveal) {
      window.CrimsonOres.attachReveal(cards);
    }
  }

  /* ---------- Contact form ---------- */
  function initForm() {
    var form = document.getElementById('contact-form');
    if (!form) return;

    var statusEl = form.querySelector('.form-status');

    function setError(name, message) {
      var field = form.querySelector('[data-field="' + name + '"]');
      if (!field) return;
      var msg = field.querySelector('.error-msg');
      field.classList.toggle('has-error', !!message);
      if (msg) msg.textContent = message || '';
    }

    function validate() {
      var valid = true;
      var name = form.elements.name;
      var email = form.elements.email;
      var subject = form.elements.subject;
      var message = form.elements.message;
      var phone = form.elements.phone;

      setError('name', name.value.trim() ? '' : 'Please enter your full name.');
      if (!name.value.trim()) valid = false;

      var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
      setError('email', emailOk ? '' : 'Please enter a valid email address.');
      if (!emailOk) valid = false;

      if (phone && phone.value.trim()) {
        var phoneOk = /^[+0-9()\-\s]{7,20}$/.test(phone.value.trim());
        setError('phone', phoneOk ? '' : 'Please enter a valid phone number.');
        if (!phoneOk) valid = false;
      } else {
        setError('phone', '');
      }

      setError('subject', subject.value.trim() ? '' : 'Please enter a subject.');
      if (!subject.value.trim()) valid = false;

      setError('message', message.value.trim() ? '' : 'Please enter your message.');
      if (!message.value.trim()) valid = false;

      return valid;
    }

    function showStatus(type, text) {
      if (!statusEl) return;
      statusEl.className = 'form-status is-visible form-status--' + type;
      statusEl.textContent = text;
    }

    function submitAjax(endpoint) {
      fetch(endpoint, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      })
        .then(function (res) {
          if (res.ok) {
            form.reset();
            showStatus('success', 'Thank you — your message has been sent. Crimson Ores will get back to you shortly.');
          } else {
            showStatus('error', 'Sorry, something went wrong while sending. Please try again or email crimsonores@gmail.com.');
          }
        })
        .catch(function () {
          showStatus('error', 'Sorry, something went wrong while sending. Please try again or email crimsonores@gmail.com.');
        });
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      if (!validate()) {
        showStatus('error', 'Please fix the highlighted fields and try again.');
        return;
      }

      var endpoint = (form.getAttribute('data-endpoint') || '').trim();
      var netlify = form.getAttribute('data-netlify') === 'true';

      if (endpoint) {
        showStatus('success', 'Sending your message…');
        submitAjax(endpoint);
      } else if (netlify) {
        showStatus('success', 'Sending your message…');
        form.submit();
      } else {
        showStatus('error', 'This form is not connected to a form provider yet. Configure Formspree or Netlify Forms as described in the README, or email crimsonores@gmail.com.');
      }
    });
  }

  function init() {
    initNav();
    initScrollSpy();
    initFeatured();
    initReveal();
    initForm();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

