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

    if (!toggle || !menu || !header) return;

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
    var links = document.querySelectorAll('.nav__link[data-page]');
    links.forEach(function (link) {
      link.classList.toggle('is-active', link.getAttribute('data-page') === page);
    });
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
    try {
      window.CrimsonOres.renderFeatured(grid, 3);
    } catch (error) {
      grid.innerHTML = '<p>Project information is currently unavailable. <a href="projects.html">View Innovations</a></p>';
      if (window.CO_DEV) console.warn('Featured projects unavailable', error);
      return;
    }
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
      var input = field.querySelector('input,textarea');
      if (input) input.setAttribute('aria-invalid', message ? 'true' : 'false');
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


    var button = form.querySelector('[type="submit"]');
    var pending = false;
    var endpoint = (form.dataset.endpoint || '').trim();
    var netlify = form.dataset.netlify === 'true';
    var configured = false;
    try { configured = !!endpoint && new URL(endpoint).protocol === 'https:'; } catch (_) {}
    configured = configured || netlify;
    var note = form.querySelector('.form-note');
    if (note) note.hidden = configured;
    form.querySelectorAll('.field').forEach(function(field) {
      var input = field.querySelector('input,textarea'), error = field.querySelector('.error-msg');
      if (input && error) { error.id = input.id + '-error'; input.setAttribute('aria-describedby', error.id); }
    });
    function showStatus(type, text) {
      if (!statusEl) return;
      statusEl.className = 'form-status is-visible form-status--' + type;
      statusEl.textContent = text;
      if (type === 'error') {
        var link = document.createElement('a'); link.href = 'mailto:crimsonores@gmail.com'; link.textContent = 'crimsonores@gmail.com';
        statusEl.append(' ', link, '.');
      }
    }
    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      if (pending) return;
      if (!validate()) { showStatus('error', 'Please fix the highlighted fields. You can also email'); form.querySelector('[aria-invalid="true"]').focus(); return; }
      if (!configured) { showStatus('error', 'Online messaging is currently unavailable. Please email'); return; }
      pending = true;
      var original = button.textContent; button.disabled = true; button.textContent = 'Sending…'; form.setAttribute('aria-busy','true');
      showStatus('pending', 'Sending your message…');
      var controller = new AbortController();
      var timer = setTimeout(function() { controller.abort(); }, 15000);
      try {
        var data = new FormData(form), headers = {Accept:'application/json'}, body = data;
        if (netlify && !endpoint) {
          data.set('form-name', form.getAttribute('name') || 'contact');
          body = new URLSearchParams(data).toString(); headers['Content-Type'] = 'application/x-www-form-urlencoded';
        }
        var response = await fetch(endpoint || form.getAttribute('action') || '/', {method:'POST', body:body, headers:headers, signal:controller.signal});
        if (!response.ok) throw new Error('rejected');
        if (endpoint) {
          if (!(response.headers.get('content-type') || '').includes('application/json')) throw new Error('format');
          var result = await response.json();
          if (!result || (result.ok !== true && result.success !== true) || result.errors) throw new Error('format');
        }
        form.reset(); showStatus('success', 'Thank you — your message has been sent. Crimson Ores will get back to you shortly.');
      } catch(error) {
        showStatus('error', error.name === 'AbortError' ? 'Sending timed out. Please try again or email' : 'Your message could not be confirmed as sent. Please try again or email');
        if (window.CO_DEV) console.warn('Contact submission failed:', error);
      } finally {
        clearTimeout(timer); pending = false; button.disabled = false; button.textContent = original; form.removeAttribute('aria-busy');
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

