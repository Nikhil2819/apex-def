// Procedural Three.js hero — APEX D.E.F 20 L bucket + DEF liquid particle field.
// design.md §4.1 #hero (launch art direction v1: code-built geometry, no GLB pipeline).
// Loaded ONLY on the full tier, post-idle, by HeroScene.astro. Returns a cleanup fn.
import {
  ACESFilmicToneMapping,
  AdditiveBlending,
  BufferAttribute,
  BufferGeometry,
  CanvasTexture,
  Color,
  CylinderGeometry,
  DirectionalLight,
  Group,
  HemisphereLight,
  LatheGeometry,
  Mesh,
  MeshPhysicalMaterial,
  MeshStandardMaterial,
  PerspectiveCamera,
  PointLight,
  Points,
  PointsMaterial,
  Scene,
  SRGBColorSpace,
  TorusGeometry,
  Vector2,
  WebGLRenderer,
} from 'three';

const DEF_BLUE = 0x2fb6e9;
const BODY_BLUE = 0x1b4f9c;
const NAVY = 0x0a1b3d;

/* Label texture drawn in-code (no image assets). */
function makeLabelTexture() {
  const c = document.createElement('canvas');
  c.width = 1024;
  c.height = 512;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#f6f9fc';
  ctx.fillRect(0, 0, c.width, c.height);
  // Droplet mark
  ctx.fillStyle = '#1b4f9c';
  ctx.beginPath();
  ctx.moveTo(512, 96);
  ctx.bezierCurveTo(568, 168, 588, 204, 588, 236);
  ctx.bezierCurveTo(588, 280, 552, 306, 512, 306);
  ctx.bezierCurveTo(472, 306, 436, 280, 436, 236);
  ctx.bezierCurveTo(436, 204, 456, 168, 512, 96);
  ctx.fill();
  ctx.textAlign = 'center';
  ctx.fillStyle = '#0a1b3d';
  ctx.font = '600 72px "Clash Display", "Arial Narrow", sans-serif';
  ctx.fillText('APEX D.E.F', 512, 396);
  ctx.font = '600 30px Inter, sans-serif';
  ctx.fillStyle = '#5b6b7f';
  const spaced = 'D I E S E L   E X H A U S T   F L U I D';
  ctx.fillText(spaced, 512, 444);
  ctx.font = '700 40px Inter, sans-serif';
  ctx.fillStyle = '#1b4f9c';
  ctx.fillText('AUS 32  ·  20 L', 512, 492);
  const tex = new CanvasTexture(c);
  tex.colorSpace = SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

function buildBucket() {
  const group = new Group();

  // Body: lathe profile (radius, height) — base → tapered wall → lid rim.
  const pts = [
    [0.0, 0.0], [0.78, 0.0], [0.84, 0.02], [0.86, 0.08],
    [0.98, 1.5], [1.0, 1.54], [1.06, 1.56], [1.07, 1.66],
    [1.02, 1.7], [0.98, 1.72], [0.0, 1.72],
  ].map(([x, y]) => new Vector2(x, y));
  const body = new LatheGeometry(pts, 72);
  const bodyMat = new MeshPhysicalMaterial({
    color: BODY_BLUE,
    roughness: 0.38,
    metalness: 0.0,
    clearcoat: 0.55,
    clearcoatRoughness: 0.35,
    sheen: 0.2,
    sheenColor: new Color(DEF_BLUE),
  });
  const bodyMesh = new Mesh(body, bodyMat);
  group.add(bodyMesh);

  // Lid disc accent
  const lid = new CylinderGeometry(1.0, 1.0, 0.06, 72);
  const lidMesh = new Mesh(
    lid,
    new MeshStandardMaterial({ color: NAVY, roughness: 0.5, metalness: 0.1 })
  );
  lidMesh.position.y = 1.72;
  group.add(lidMesh);

  // Cap
  const cap = new CylinderGeometry(0.22, 0.24, 0.12, 32);
  const capMesh = new Mesh(
    cap,
    new MeshStandardMaterial({ color: DEF_BLUE, roughness: 0.35 })
  );
  capMesh.position.set(0.5, 1.8, 0);
  group.add(capMesh);

  // Bail handle: half torus laid over the top
  const handle = new TorusGeometry(1.02, 0.035, 12, 48, Math.PI);
  const handleMesh = new Mesh(
    handle,
    new MeshStandardMaterial({ color: 0xdde7f0, roughness: 0.3, metalness: 0.6 })
  );
  handleMesh.position.y = 1.6;
  group.add(handleMesh);

  // Label band (open cylinder slightly proud of the wall)
  const labelGeo = new CylinderGeometry(0.965, 0.925, 0.82, 72, 1, true, 0, Math.PI * 2);
  const labelMat = new MeshStandardMaterial({ map: makeLabelTexture(), roughness: 0.5 });
  const labelMesh = new Mesh(labelGeo, labelMat);
  labelMesh.position.y = 0.82;
  group.add(labelMesh);

  group.position.y = -0.86; // center vertically
  return group;
}

function buildParticles(count = 350) {
  const positions = new Float32Array(count * 3);
  const speeds = new Float32Array(count);
  for (let i = 0; i < count; i++) {
    const r = 1.6 + Math.random() * 2.2;
    const theta = Math.random() * Math.PI * 2;
    positions[i * 3] = Math.cos(theta) * r;
    positions[i * 3 + 1] = Math.random() * 4 - 2;
    positions[i * 3 + 2] = Math.sin(theta) * r - 0.4;
    speeds[i] = 0.1 + Math.random() * 0.25;
  }
  const geo = new BufferGeometry();
  geo.setAttribute('position', new BufferAttribute(positions, 3));
  const mat = new PointsMaterial({
    color: DEF_BLUE,
    size: 0.035,
    transparent: true,
    opacity: 0.75,
    blending: AdditiveBlending,
    depthWrite: false,
    sizeAttenuation: true,
  });
  const points = new Points(geo, mat);
  points.userData.speeds = speeds;
  return points;
}

export function init(container) {
  const canvas = container.querySelector('canvas');
  const renderer = new WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.outputColorSpace = SRGBColorSpace;

  const scene = new Scene();
  const camera = new PerspectiveCamera(32, 1, 0.1, 30);
  camera.position.set(0, 0.25, 6.2);

  scene.add(new HemisphereLight(0xbfd9ee, 0x0a1b3d, 1.15));
  const key = new DirectionalLight(0xffffff, 2.2);
  key.position.set(-3, 4, 4);
  scene.add(key);
  const rim = new PointLight(DEF_BLUE, 14, 12);
  rim.position.set(3.2, 1.2, -2.4);
  scene.add(rim);
  const fill = new PointLight(0xffffff, 4, 10);
  fill.position.set(2.4, -1.2, 3);
  scene.add(fill);

  const bucket = buildBucket();
  scene.add(bucket);
  const particles = buildParticles();
  scene.add(particles);

  // State: idle rotation + pointer parallax + scroll offset
  let raf = 0;
  let running = false;
  let targetRX = 0;
  let targetRY = 0;
  let scrollRY = 0;
  const baseTiltX = 0.08;

  const onPointer = (e) => {
    const rect = container.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    targetRY = nx * 0.14;
    targetRX = ny * 0.07;
  };
  container.addEventListener('pointermove', onPointer, { passive: true });

  const onScroll = () => {
    const h = container.offsetHeight || innerHeight;
    scrollRY = Math.min(scrollY / h, 1.4) * 0.9; // rotate up to ~52° across the hero
  };
  addEventListener('scroll', onScroll, { passive: true });

  const resize = () => {
    const { clientWidth: w, clientHeight: h } = container;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };
  const ro = new ResizeObserver(resize);
  ro.observe(container);
  resize();

  let t0 = performance.now();
  const tick = (now) => {
    const dt = Math.min((now - t0) / 1000, 0.05);
    t0 = now;
    bucket.rotation.y += (targetRY + scrollRY - bucket.rotation.y + 0.35) * 0.06 + 0.0016;
    bucket.rotation.x += (baseTiltX + targetRX - bucket.rotation.x) * 0.06;
    particles.rotation.y += dt * 0.05;
    const pos = particles.geometry.attributes.position;
    const speeds = particles.userData.speeds;
    for (let i = 0; i < speeds.length; i++) {
      let y = pos.getY(i) + speeds[i] * dt;
      if (y > 2.2) y = -2.2;
      pos.setY(i, y);
    }
    pos.needsUpdate = true;
    renderer.render(scene, camera);
    if (running) raf = requestAnimationFrame(tick);
  };

  const start = () => {
    if (running) return;
    running = true;
    t0 = performance.now();
    raf = requestAnimationFrame(tick);
  };
  const stop = () => {
    running = false;
    cancelAnimationFrame(raf);
  };

  // Pause off-screen (design.md §3.2)
  const io = new IntersectionObserver(([entry]) => (entry.isIntersecting ? start() : stop()), {
    threshold: 0.05,
  });
  io.observe(container);

  // Warm-up render before reveal (avoids first-frame shader hitch)
  renderer.render(scene, camera);
  container.classList.add('is-3d-ready');
  start();

  return () => {
    stop();
    io.disconnect();
    ro.disconnect();
    container.removeEventListener('pointermove', onPointer);
    removeEventListener('scroll', onScroll);
    renderer.dispose();
    scene.traverse((o) => {
      o.geometry?.dispose?.();
      if (o.material) (Array.isArray(o.material) ? o.material : [o.material]).forEach((m) => m.dispose());
    });
  };
}
