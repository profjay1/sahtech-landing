'use strict';

const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-nav');
const mobile = window.matchMedia('(max-width: 47.99rem)');

function closeMenu(returnFocus = false) {
  toggle.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
  if (returnFocus) toggle.focus();
}

if (toggle && navigation) {
  toggle.hidden = false;
  navigation.classList.add('enhanced');
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    navigation.classList.toggle('is-open', !open);
  });
  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      closeMenu(true);
    }
  });
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.header-inner')) closeMenu();
  });
  navigation.addEventListener('focusout', (event) => {
    if (!navigation.contains(event.relatedTarget) && event.relatedTarget !== toggle) closeMenu();
  });
  mobile.addEventListener('change', () => closeMenu());
}

// Reveal once, with visible content as the baseline and no continuous animation.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let sectionObserver;

function updateSectionMotion() {
  if (sectionObserver) sectionObserver.disconnect();
  if (reducedMotion.matches) {
    document.querySelectorAll('.is-revealed').forEach((section) => {
      section.classList.remove('is-revealed');
    });
    return;
  }
  if (!('IntersectionObserver' in window)) return;
  sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        sectionObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0, rootMargin: '0px 0px -24px 0px' });
  document.querySelectorAll('.section:not(.is-revealed)').forEach((section) => {
    sectionObserver.observe(section);
  });
}

updateSectionMotion();
reducedMotion.addEventListener('change', updateSectionMotion);
