// Render-tier detection — design.md §3.2 (LOCKED). Runs inline in <head> before any asset decision.
// Tiers: 'full' (WebGL + all motion) / 'lite' (no WebGL, GSAP reveals) / 'static' (posters + CSS fades).
// Exported as a string so BaseLayout can inline it (zero request, runs pre-paint).
export const tierScript = `(function () {
  function hasWebGL2() {
    try {
      var c = document.createElement('canvas');
      return !!(window.WebGL2RenderingContext && c.getContext('webgl2'));
    } catch (e) { return false; }
  }
  var conn = navigator.connection || {};
  var saveData = !!conn.saveData;
  var slowNet = ['slow-2g', '2g', '3g'].indexOf(conn.effectiveType) !== -1;
  var lowCPU = (navigator.hardwareConcurrency || 8) <= 4;
  var lowRAM = (navigator.deviceMemory || 8) <= 4;
  var reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var tier = (saveData || slowNet || reducedMotion) ? 'static'
           : (lowCPU || lowRAM || !hasWebGL2()) ? 'lite' : 'full';
  document.documentElement.dataset.tier = tier;
})();`;
