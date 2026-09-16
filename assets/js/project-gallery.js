/* ============================================================
   CRIMSON ORES — project-gallery.js
   Lightbox for project image galleries. Works via event
   delegation so it also handles galleries rendered later by
   projects.js (e.g. the project-detail view).

   Controls:
   - Click a gallery image to open it.
   - Close: Escape key, the "X" button, or clicking the backdrop.
   - Previous / Next: on-screen buttons or ArrowLeft / ArrowRight.
   ============================================================ */

(function () {
  'use strict';

  var ICON_CLOSE =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>';
  var ICON_PREV =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg>';
  var ICON_NEXT =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>';

  var images = [];
  var current = 0;
  var lastFocused = null;
  var lightbox, imgEl, captionEl, closeBtn, prevBtn, nextBtn;

  function build() {
    if (document.getElementById('co-lightbox')) return;

    lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.id = 'co-lightbox';
    lightbox.hidden = true;
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.setAttribute('aria-label', 'Image viewer');

    lightbox.innerHTML =
      '<div class="lightbox__stage">' +
        '<div class="lightbox__frame">' +
          '<img src="" alt="" id="co-lightbox-img">' +
          '<button type="button" class="lightbox__btn lightbox__close" id="co-lightbox-close" aria-label="Close image viewer">' + ICON_CLOSE + '</button>' +
          '<button type="button" class="lightbox__btn lightbox__prev" id="co-lightbox-prev" aria-label="Previous image">' + ICON_PREV + '</button>' +
          '<button type="button" class="lightbox__btn lightbox__next" id="co-lightbox-next" aria-label="Next image">' + ICON_NEXT + '</button>' +
        '</div>' +
        '<p class="lightbox__caption" id="co-lightbox-caption"></p>' +
      '</div>';

    document.body.appendChild(lightbox);

    imgEl = document.getElementById('co-lightbox-img');
    captionEl = document.getElementById('co-lightbox-caption');
    closeBtn = document.getElementById('co-lightbox-close');
    prevBtn = document.getElementById('co-lightbox-prev');
    nextBtn = document.getElementById('co-lightbox-next');

    closeBtn.addEventListener('click', close);
    prevBtn.addEventListener('click', function () { show(current - 1); });
    nextBtn.addEventListener('click', function () { show(current + 1); });

    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) close();
    });
  }

  function open(items, index) {
    images = items;
    current = index;
    show(current);
    lightbox.hidden = false;
    document.body.classList.add('no-scroll');
    closeBtn.focus();
  }

  function show(index) {
    if (!images.length) return;
    current = (index + images.length) % images.length;
    var item = images[current];
    imgEl.src = item.src;
    imgEl.alt = item.caption || '';
    captionEl.textContent = item.caption || '';
  }

  function close() {
    lightbox.hidden = true;
    document.body.classList.remove('no-scroll');
    images = [];
    current = 0;
    imgEl.src = '';
    imgEl.alt = '';
    captionEl.textContent = '';
    if (lastFocused) {
      lastFocused.focus();
      lastFocused = null;
    }
  }

  function onKeydown(e) {
    if (lightbox.hidden) return;
    if (e.key === 'Escape') {
      e.preventDefault();
      close();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      show(current - 1);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      show(current + 1);
    }
  }

  function onClickGallery(e) {
    var item = e.target.closest('.gallery-item');
    if (!item) return;
    e.preventDefault();

    lastFocused = item;
    var gallery = item.closest('.pd-gallery');
    if (!gallery) return;

    var nodes = Array.prototype.slice.call(gallery.querySelectorAll('.gallery-item'));
    var items = nodes.map(function (n) {
      return {
        src: n.getAttribute('data-src'),
        caption: n.getAttribute('data-caption') || ''
      };
    });
    var index = nodes.indexOf(item);

    open(items, index);
  }

  function init() {
    build();
    document.addEventListener('click', onClickGallery);
    document.addEventListener('keydown', onKeydown);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
