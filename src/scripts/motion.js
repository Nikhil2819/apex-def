// Motion layer — Lenis + GSAP premium pass (design.md §3). Loaded post-idle on
// full/lite tiers only (never static; app.js gates). Reduced-motion users land on
// the static tier before this file is ever requested.

export async function init(tier) {
  const [{ default: Lenis }, gsapModule, stModule, splitModule] = await Promise.all([
    import('lenis'),
    import('gsap'),
    import('gsap/ScrollTrigger'),
    import('gsap/SplitText'),
  ]);
  const gsap = gsapModule.gsap ?? gsapModule.default;
  const ScrollTrigger = stModule.ScrollTrigger ?? stModule.default;
  const SplitText = splitModule.SplitText ?? splitModule.default;
  gsap.registerPlugin(ScrollTrigger, SplitText);

  let lenis = null;
  if (tier === 'full') {
    lenis = new Lenis({ autoRaf: false });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  }

  const mm = gsap.matchMedia();

  /* ---------- SplitText blur-reveals on display headings (design.md §3.1) ----------
     Only headings still below the fold — anything already revealed by the CSS
     system stays as-is (motion.js loads post-idle; never re-animate seen content). */
  document.querySelectorAll('.display-1, .display-2').forEach((h) => {
    if (h.closest('[data-no-split]')) return;
    if (h.getBoundingClientRect().top < innerHeight * 0.92) return;
    h.classList.add('is-revealed'); // release the CSS reveal so GSAP owns it
    const split = SplitText.create(h, { type: 'lines' });
    gsap.set(h, { opacity: 1 });
    gsap.fromTo(
      split.lines,
      { yPercent: 100, opacity: 0, filter: 'blur(8px)', willChange: 'transform, filter' },
      {
        yPercent: 0,
        opacity: 1,
        filter: 'blur(0px)',
        duration: 0.9,
        ease: 'expo.out',
        stagger: 0.09,
        scrollTrigger: { trigger: h, start: 'top 88%', once: true },
        onComplete: () => gsap.set(split.lines, { clearProps: 'filter,willChange' }),
      }
    );
  });

  /* ---------- Marquee: scroll-velocity speed + skew (full tier only) ---------- */
  mm.add('(min-width: 0px)', () => {
    const marquee = document.querySelector('[data-marquee]');
    if (!marquee || tier !== 'full') return;
    const skewTo = gsap.quickTo(marquee, 'skewX', { duration: 0.4, ease: 'power3' });
    let lastScroll = scrollY;
    const onTick = () => {
      const v = scrollY - lastScroll;
      lastScroll = scrollY;
      const clamped = gsap.utils.clamp(-3, 3, v * 0.06);
      skewTo(clamped);
      const speed = 1 + Math.min(Math.abs(v) * 0.02, 3);
      marquee.style.setProperty('--marquee-rate', String(1 / speed));
    };
    gsap.ticker.add(onTick);
    return () => gsap.ticker.remove(onTick);
  });

  /* ---------- Generic single-layer parallax hooks ([data-parallax="0.08"]) ---------- */
  mm.add('(min-width: 768px)', () => {
    document.querySelectorAll('[data-parallax]').forEach((el) => {
      const depth = parseFloat(el.dataset.parallax || '0.06') * (tier === 'lite' ? 0.5 : 1);
      gsap.fromTo(
        el,
        { yPercent: depth * 100 },
        {
          yPercent: -depth * 100,
          ease: 'none',
          scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
        }
      );
    });
  });

  /* ---------- Magnetic primary buttons (desktop pointer-fine, full tier) ---------- */
  mm.add('(min-width: 1024px) and (hover: hover) and (pointer: fine)', () => {
    if (tier !== 'full') return;
    const cleanups = [];
    document.querySelectorAll('.btn--primary-dark, .btn--primary-light, .btn--whatsapp').forEach((btn) => {
      if (btn.closest('form')) return; // never on form controls (design.md §5.5)
      const xTo = gsap.quickTo(btn, 'x', { duration: 0.4, ease: 'power3' });
      const yTo = gsap.quickTo(btn, 'y', { duration: 0.4, ease: 'power3' });
      const onMove = (e) => {
        const r = btn.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const dist = Math.hypot(dx, dy);
        if (dist < 120) {
          const pull = (1 - dist / 120) * 12;
          xTo((dx / dist) * pull || 0);
          yTo((dy / dist) * pull || 0);
        } else {
          xTo(0);
          yTo(0);
        }
      };
      addEventListener('pointermove', onMove, { passive: true });
      cleanups.push(() => removeEventListener('pointermove', onMove));
    });
    return () => cleanups.forEach((fn) => fn());
  });

  window.__apexMotion = { gsap, ScrollTrigger, SplitText, lenis, tier, mm };
  document.dispatchEvent(
    new CustomEvent('apex:motion-ready', { detail: { gsap, ScrollTrigger, tier } })
  );
}
