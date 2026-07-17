// Global chrome behaviors — runs on every page, every tier.
// Heavy motion (Lenis, GSAP, Three.js) lives in motion.js, dynamically imported on full/lite tiers only.

const tier = document.documentElement.dataset.tier || 'full';

/* ---------- Header: shrink + hide-on-fast-downscroll ---------- */
const header = document.querySelector('[data-header]');
if (header) {
  let lastY = window.scrollY;
  let lastT = performance.now();
  const onScroll = () => {
    const y = window.scrollY;
    const t = performance.now();
    header.classList.toggle('is-shrunk', y > 80);
    if (tier !== 'static') {
      const velocity = ((y - lastY) / Math.max(t - lastT, 1)) * 1000; // px/s
      if (velocity > 1200 && y > 200) header.classList.add('is-hidden');
      else if (y < lastY) header.classList.remove('is-hidden');
    }
    lastY = y;
    lastT = t;
  };
  addEventListener('scroll', onScroll, { passive: true });
}

/* ---------- Mobile menu ---------- */
const menuToggle = document.querySelector('[data-menu-toggle]');
const mobileMenu = document.querySelector('[data-mobile-menu]');
if (menuToggle && mobileMenu) {
  const setOpen = (open) => {
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    mobileMenu.hidden = !open;
    document.body.style.overflow = open ? 'hidden' : '';
  };
  menuToggle.addEventListener('click', () =>
    setOpen(menuToggle.getAttribute('aria-expanded') !== 'true')
  );
  addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !mobileMenu.hidden) setOpen(false);
  });
  mobileMenu.addEventListener('click', (e) => {
    if (e.target.closest('a')) setOpen(false);
  });
}

/* ---------- Floating WhatsApp button: enter after 600px ---------- */
const waFloat = document.querySelector('[data-wa-float]');
if (waFloat && tier !== 'static') {
  const onWaScroll = () => waFloat.classList.toggle('is-visible', window.scrollY > 600);
  addEventListener('scroll', onWaScroll, { passive: true });
  onWaScroll();
}

/* ---------- Mobile CTA bar: hide while inputs are focused (keyboard collision) ---------- */
const mobileBar = document.querySelector('[data-mobile-bar]');
if (mobileBar) {
  addEventListener('focusin', (e) => {
    if (e.target.matches('input, textarea, select')) mobileBar.style.display = 'none';
  });
  addEventListener('focusout', () => {
    mobileBar.style.display = '';
  });
}

/* ---------- Base reveal system (IntersectionObserver; CSS handles transition) ---------- */
if (tier !== 'static' && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          io.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.18, rootMargin: '0px 0px -8% 0px' }
  );
  document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));
  // Failsafe: content must never stay hidden if the observer misses (anchor jumps,
  // odd engines). In-view stragglers reveal at 1.2s; everything reveals by 3s.
  setTimeout(() => {
    document.querySelectorAll('[data-reveal]:not(.is-revealed)').forEach((el) => {
      if (el.getBoundingClientRect().top < innerHeight * 1.1) el.classList.add('is-revealed');
    });
  }, 1200);
  setTimeout(() => {
    document.querySelectorAll('[data-reveal]:not(.is-revealed)').forEach((el) =>
      el.classList.add('is-revealed')
    );
  }, 3000);
} else if (tier !== 'static') {
  document.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('is-revealed'));
}

/* ---------- Counters (#stats etc.) ---------- */
const counters = document.querySelectorAll('[data-counter]');
if (counters.length) {
  const setFinal = (el) => (el.textContent = el.dataset.counter);
  if (tier === 'static' || !('IntersectionObserver' in window)) {
    counters.forEach(setFinal);
  } else {
    const cio = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target;
          cio.unobserve(el);
          const target = parseFloat(el.dataset.counter);
          const dur = 1200;
          const start = performance.now();
          const tick = (now) => {
            const p = Math.min((now - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 4); // expo-ish out
            el.textContent = String(Math.round(target * eased));
            if (p < 1) requestAnimationFrame(tick);
            else setFinal(el);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.6 }
    );
    counters.forEach((el) => cio.observe(el));
  }
}

/* ---------- Click-to-copy phone numbers ---------- */
document.querySelectorAll('[data-copy]').forEach((btn) => {
  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(btn.dataset.copy);
      btn.classList.add('is-copied');
      setTimeout(() => btn.classList.remove('is-copied'), 1500);
    } catch { /* clipboard unavailable — ignore */ }
  });
});

/* ---------- Motion layer (full/lite only, loaded post-idle) ---------- */
if (tier === 'full' || tier === 'lite') {
  const load = () => import('./motion.js').then((m) => m.init(tier)).catch(() => {});
  'requestIdleCallback' in window ? requestIdleCallback(load, { timeout: 2000 }) : setTimeout(load, 300);
}
