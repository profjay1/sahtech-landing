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

// HTML POST remains the fallback when AJAX capabilities are unavailable.
const enquiryForm = document.querySelector('.contact-form');
const enquiryStatus = document.querySelector('#form-status');

if (enquiryForm && enquiryStatus && 'fetch' in window && 'FormData' in window && 'AbortController' in window) {
  const submitButton = enquiryForm.querySelector('button[type="submit"]');
  const ordinaryControls = Array.from(enquiryForm.querySelectorAll('fieldset input, fieldset select, fieldset textarea'));
  let sending = false;

  enquiryForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (sending || !enquiryForm.reportValidity()) return;

    sending = true;
    submitButton.setAttribute('aria-disabled', 'true');
    submitButton.textContent = 'Sending…';
    enquiryStatus.textContent = 'Sending your enquiry…';

    const previousDisabled = ordinaryControls.map((control) => control.disabled);
    let timeoutId;
    let timedOut = false;

    try {
      const fields = new FormData(enquiryForm);
      // Send only the agreed fields. Keep the honeypot value for provider screening.
      const payload = {};
      ['name', 'email', 'company', 'service', 'details', '_honeypot'].forEach((name) => {
        payload[name] = fields.get(name) || '';
      });
      // Capture values first: disabled controls are excluded from FormData.
      ordinaryControls.forEach((control) => { control.disabled = true; });
      const controller = new AbortController();
      timeoutId = window.setTimeout(() => {
        timedOut = true;
        controller.abort();
      }, 15000);
      const response = await fetch(enquiryForm.action, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });
      if (timedOut) throw new Error('Confirmation timed out');
      if (!response.ok) throw new Error('Submission unsuccessful');

      enquiryForm.reset();
      enquiryStatus.textContent = "Thank you. Your enquiry has been sent successfully. We'll be in touch after reviewing your message.";
    } catch (error) {
      enquiryStatus.textContent = timedOut || error?.name === 'AbortError'
        ? "We couldn't confirm that your enquiry was sent. Please check your connection and try again if needed, or email "
        : "We couldn't send your enquiry right now. Please try again, or email ";
      const emailLink = document.createElement('a');
      emailLink.href = 'mailto:contact@sahtechlabs.com';
      emailLink.textContent = 'contact@sahtechlabs.com';
      enquiryStatus.append(emailLink, '.');
    } finally {
      window.clearTimeout(timeoutId);
      ordinaryControls.forEach((control, index) => {
        control.disabled = previousDisabled[index];
      });
      sending = false;
      submitButton.removeAttribute('aria-disabled');
      submitButton.textContent = 'Send enquiry';
    }
  });
}
