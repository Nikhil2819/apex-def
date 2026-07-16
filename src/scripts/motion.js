// Motion layer — Lenis + GSAP. Loaded post-idle on full/lite tiers only (never static).
// Phase 3 fills this out; signature pieces register themselves via data attributes.

export async function init(tier) {
  const [{ default: Lenis }, gsapModule, stModule] = await Promise.all([
    import('lenis'),
    import('gsap'),
    import('gsap/ScrollTrigger'),
  ]);
  const gsap = gsapModule.gsap ?? gsapModule.default;
  const ScrollTrigger = stModule.ScrollTrigger ?? stModule.default;
  gsap.registerPlugin(ScrollTrigger);

  // Lenis smooth scroll — full tier only (lite uses native scroll, design.md §3.2)
  if (tier === 'full') {
    const lenis = new Lenis({ autoRaf: false });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  }

  window.__apexMotion = { gsap, ScrollTrigger, tier };
  document.dispatchEvent(new CustomEvent('apex:motion-ready', { detail: { gsap, ScrollTrigger, tier } }));
}
