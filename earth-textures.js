/**
 * High-Resolution Earth Texture Synthesizer & Progressive Texture Loader
 * Synthesizes photorealistic 2048x1024 equirectangular earth maps:
 * - Albedo Day Map (Natural geography, continental biomes, coastlines, mountain ranges)
 * - Specular Water Map (Mirrored oceans vs matte continents)
 * - Bump / Topography Map (Elevation reliefs)
 * - Atmospheric Cloud Layer (Whirling cyclones & trade wind bands)
 * Supports zero-latency instant offline startup + progressive NASA Blue Marble enhancement.
 */

class EarthTextureEngine {
  constructor() {
    this.width = 2048;
    this.height = 1024;
  }

  // 1. Procedural Realistic Earth Albedo Texture
  createAlbedoTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = this.width;
    canvas.height = this.height;
    const ctx = canvas.getContext('2d');

    // Deep Ocean Background with Bathymetric Gradients
    const oceanGrad = ctx.createLinearGradient(0, 0, 0, this.height);
    oceanGrad.addColorStop(0.0, '#0c2242'); // Arctic
    oceanGrad.addColorStop(0.2, '#0e2b54');
    oceanGrad.addColorStop(0.5, '#0a2347'); // Equatorial
    oceanGrad.addColorStop(0.8, '#0e2b54');
    oceanGrad.addColorStop(1.0, '#091c36'); // Antarctic
    ctx.fillStyle = oceanGrad;
    ctx.fillRect(0, 0, this.width, this.height);

    // Oceanic currents & subtle deep ocean variation
    ctx.fillStyle = 'rgba(20, 60, 110, 0.18)';
    for (let i = 0; i < 40; i++) {
      const cx = Math.random() * this.width;
      const cy = Math.random() * this.height;
      const rx = Math.random() * 200 + 80;
      const ry = Math.random() * 80 + 30;
      ctx.beginPath();
      ctx.ellipse(cx, cy, rx, ry, Math.random() * Math.PI, 0, Math.PI * 2);
      ctx.fill();
    }

    const mapGeo = (lng, lat) => ({
      x: ((lng + 180) / 360) * this.width,
      y: ((90 - lat) / 180) * this.height
    });

    const drawPoly = (coords, fillColor, strokeColor = null, shelfColor = 'rgba(40, 140, 180, 0.28)') => {
      if (!coords || coords.length < 3) return;

      // Continental shelf shallow waters
      if (shelfColor) {
        ctx.beginPath();
        const first = mapGeo(coords[0][0], coords[0][1]);
        ctx.moveTo(first.x, first.y);
        for (let i = 1; i < coords.length; i++) {
          const pt = mapGeo(coords[i][0], coords[i][1]);
          ctx.lineTo(pt.x, pt.y);
        }
        ctx.closePath();
        ctx.strokeStyle = shelfColor;
        ctx.lineWidth = 14;
        ctx.stroke();
      }

      // Main Landmass
      ctx.beginPath();
      const first = mapGeo(coords[0][0], coords[0][1]);
      ctx.moveTo(first.x, first.y);
      for (let i = 1; i < coords.length; i++) {
        const pt = mapGeo(coords[i][0], coords[i][1]);
        ctx.lineTo(pt.x, pt.y);
      }
      ctx.closePath();
      ctx.fillStyle = fillColor;
      ctx.fill();

      if (strokeColor) {
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    };

    // --- CONTINENT DEFINITIONS WITH REALISTIC BIOMES ---

    // North America
    const northAmerica = [
      [-168, 66], [-160, 71], [-140, 70], [-120, 76], [-90, 72], [-80, 62], [-65, 60],
      [-55, 52], [-60, 46], [-70, 42], [-75, 35], [-80, 25], [-82, 23], [-88, 30],
      [-97, 26], [-97, 20], [-87, 16], [-80, 8], [-84, 10], [-95, 16], [-105, 23],
      [-110, 30], [-117, 33], [-124, 40], [-125, 50], [-135, 58], [-150, 60], [-165, 60], [-168, 66]
    ];
    drawPoly(northAmerica, '#426838');

    // Boreal/Taiga zone
    const northAmericaNorth = [
      [-168, 66], [-140, 70], [-100, 74], [-70, 64], [-60, 52], [-90, 55], [-120, 60], [-160, 64]
    ];
    drawPoly(northAmericaNorth, '#3a5432', null, null);

    // Southwest Desert
    const usSouthwest = [
      [-118, 36], [-108, 37], [-102, 32], [-104, 26], [-112, 28], [-116, 32]
    ];
    drawPoly(usSouthwest, '#b89464', null, null);

    // Greenland Ice Sheet
    const greenland = [
      [-55, 60], [-40, 60], [-25, 70], [-20, 78], [-30, 83], [-50, 82], [-60, 76], [-55, 60]
    ];
    drawPoly(greenland, '#e8f0f8', 'rgba(255,255,255,0.7)', 'rgba(100,180,220,0.35)');

    // South America
    const southAmerica = [
      [-80, 8], [-74, 11], [-62, 10], [-50, 0], [-35, -5], [-35, -10], [-38, -18],
      [-48, -28], [-55, -34], [-65, -42], [-67, -54], [-74, -52], [-74, -42], [-70, -30],
      [-76, -18], [-81, -5], [-78, 2], [-80, 8]
    ];
    drawPoly(southAmerica, '#2c5928');

    // Patagonia
    const patagonia = [
      [-72, -38], [-64, -38], [-65, -50], [-72, -50]
    ];
    drawPoly(patagonia, '#96825c', null, null);

    // Eurasia
    const eurasia = [
      [-10, 36], [0, 42], [15, 38], [28, 41], [35, 31], [40, 42], [50, 40], [60, 25],
      [70, 22], [75, 12], [80, 10], [86, 20], [92, 22], [100, 15], [104, 10], [108, 4],
      [115, 2], [118, 10], [120, 22], [122, 32], [128, 38], [132, 43], [140, 50],
      [143, 60], [170, 66], [180, 68], [170, 71], [130, 74], [90, 76], [60, 72],
      [40, 70], [25, 71], [15, 60], [5, 62], [-5, 58], [-5, 48], [-10, 44], [-10, 36]
    ];
    drawPoly(eurasia, '#3d6132');

    // Siberia Taiga
    const siberianTaiga = [
      [20, 65], [60, 66], [100, 68], [140, 67], [160, 64], [140, 56], [90, 56], [40, 58], [20, 62]
    ];
    drawPoly(siberianTaiga, '#304b28', null, null);

    // Gobi Desert
    const gobiDesert = [
      [78, 44], [95, 46], [112, 44], [115, 38], [100, 36], [82, 38]
    ];
    drawPoly(gobiDesert, '#ba9866', null, null);

    // Tibet Plateau
    const tibetPlateau = [
      [80, 35], [92, 36], [98, 32], [88, 28], [80, 30]
    ];
    drawPoly(tibetPlateau, '#857864', null, null);

    // Africa
    const africa = [
      [-17, 15], [-17, 21], [-5, 36], [10, 37], [25, 32], [33, 31], [34, 27], [43, 12],
      [51, 11], [45, 0], [40, -10], [35, -24], [32, -28], [28, -34], [18, -34], [14, -22],
      [12, -8], [9, 4], [0, 6], [-12, 8], [-17, 15]
    ];
    drawPoly(africa, '#446633');

    // Sahara Desert & Sahel
    const sahara = [
      [-16, 18], [-16, 28], [-5, 35], [12, 34], [25, 31], [34, 28], [34, 20], [28, 15], [10, 16], [-5, 14], [-16, 18]
    ];
    drawPoly(sahara, '#cda76a', null, null);

    // Arabia
    const arabia = [
      [35, 30], [44, 30], [50, 26], [58, 24], [59, 22], [54, 16], [45, 13], [43, 14], [35, 28]
    ];
    drawPoly(arabia, '#c9a163', null, 'rgba(40,150,190,0.3)');

    // Australia
    const australia = [
      [114, -22], [115, -34], [120, -35], [130, -32], [138, -35], [145, -38], [150, -36],
      [153, -28], [148, -20], [142, -11], [136, -12], [130, -14], [125, -15], [114, -22]
    ];
    drawPoly(australia, '#a67246');

    // Australia East Coast
    const ausEast = [
      [145, -38], [150, -36], [153, -28], [148, -20], [145, -24], [142, -34]
    ];
    drawPoly(ausEast, '#48683a', null, null);

    // Antarctica
    const antarctica = [
      [-180, -78], [-120, -74], [-60, -64], [0, -68], [60, -66], [120, -65], [180, -78],
      [180, -90], [-180, -90]
    ];
    drawPoly(antarctica, '#f0f6fc', 'rgba(255,255,255,0.85)', 'rgba(120,200,230,0.4)');

    // Islands
    drawPoly([[-6, 50], [1.5, 51], [0, 58], [-5, 58], [-6, 50]], '#4d783d', null, null);
    drawPoly([[130, 31], [134, 34], [140, 36], [142, 44], [139, 42], [132, 33]], '#3d6132', null, null);
    drawPoly([[44, -12], [50, -15], [47, -25], [44, -24]], '#486e39', null, null);
    drawPoly([[168, -46], [173, -42], [175, -36], [178, -38], [171, -44]], '#436936', null, null);
    drawPoly([[-84, 22], [-76, 21], [-75, 20], [-83, 23]], '#44703a', null, null);

    // Mountain Ridges
    ctx.strokeStyle = 'rgba(70, 50, 35, 0.45)';
    ctx.lineWidth = 2.5;

    // Himalayas
    ctx.beginPath();
    let pt = mapGeo(74, 34); ctx.moveTo(pt.x, pt.y);
    pt = mapGeo(82, 30); ctx.lineTo(pt.x, pt.y);
    pt = mapGeo(94, 28); ctx.lineTo(pt.x, pt.y);
    ctx.stroke();

    // Andes
    ctx.beginPath();
    pt = mapGeo(-75, 5); ctx.moveTo(pt.x, pt.y);
    pt = mapGeo(-72, -15); ctx.lineTo(pt.x, pt.y);
    pt = mapGeo(-69, -32); ctx.lineTo(pt.x, pt.y);
    pt = mapGeo(-71, -50); ctx.lineTo(pt.x, pt.y);
    ctx.stroke();

    // Rockies
    ctx.beginPath();
    pt = mapGeo(-150, 64); ctx.moveTo(pt.x, pt.y);
    pt = mapGeo(-122, 52); ctx.lineTo(pt.x, pt.y);
    pt = mapGeo(-112, 40); ctx.lineTo(pt.x, pt.y);
    pt = mapGeo(-105, 30); ctx.lineTo(pt.x, pt.y);
    ctx.stroke();

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    return texture;
  }

  // 2. Procedural Bump / Topography Texture
  createBumpTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#808080';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const addMountain = (xPct, yPct, radius, height = 50) => {
      const grad = ctx.createRadialGradient(
        xPct * canvas.width, yPct * canvas.height, 0,
        xPct * canvas.width, yPct * canvas.height, radius
      );
      grad.addColorStop(0, `rgb(${128 + height}, ${128 + height}, ${128 + height})`);
      grad.addColorStop(1, '#808080');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(xPct * canvas.width, yPct * canvas.height, radius, 0, Math.PI * 2);
      ctx.fill();
    };

    for (let i = 0; i < 8; i++) addMountain(0.7 + i * 0.015, 0.35 - i * 0.005, 18, 90);
    for (let i = 0; i < 12; i++) addMountain(0.3 + (Math.sin(i) * 0.005), 0.5 + i * 0.03, 14, 75);
    for (let i = 0; i < 10; i++) addMountain(0.18 + i * 0.01, 0.28 + i * 0.02, 16, 70);
    addMountain(0.53, 0.25, 12, 65);

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    return texture;
  }

  // 3. Procedural Ocean Specular Map
  createSpecularTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const mapGeo = (lng, lat) => ({
      x: ((lng + 180) / 360) * canvas.width,
      y: ((90 - lat) / 180) * canvas.height
    });

    const maskLand = (coords) => {
      if (!coords || coords.length < 3) return;
      ctx.beginPath();
      const first = mapGeo(coords[0][0], coords[0][1]);
      ctx.moveTo(first.x, first.y);
      for (let i = 1; i < coords.length; i++) {
        const pt = mapGeo(coords[i][0], coords[i][1]);
        ctx.lineTo(pt.x, pt.y);
      }
      ctx.closePath();
      ctx.fillStyle = '#0a0a0a';
      ctx.fill();
    };

    maskLand([[-168, 66], [-120, 76], [-75, 35], [-80, 8], [-105, 23], [-124, 40], [-168, 66]]);
    maskLand([[-80, 8], [-35, -5], [-55, -34], [-67, -54], [-76, -18], [-80, 8]]);
    maskLand([[-10, 36], [35, 31], [70, 22], [104, 10], [140, 50], [170, 66], [90, 76], [15, 60], [-10, 36]]);
    maskLand([[-17, 15], [25, 32], [51, 11], [28, -34], [12, -8], [-17, 15]]);
    maskLand([[114, -22], [120, -35], [145, -38], [153, -28], [130, -14], [114, -22]]);
    maskLand([[-180, -78], [-60, -64], [60, -66], [180, -78], [180, -90], [-180, -90]]);

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    return texture;
  }

  // 4. Procedural Atmospheric Clouds Texture
  createCloudsTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'rgba(0, 0, 0, 0)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'rgba(255, 255, 255, 0.42)';
    for (let i = 0; i < 70; i++) {
      const cx = Math.random() * canvas.width;
      const cy = Math.random() * canvas.height * 0.8 + canvas.height * 0.1;
      const rx = Math.random() * 90 + 30;
      const ry = Math.random() * 22 + 8;
      ctx.beginPath();
      ctx.ellipse(cx, cy, rx, ry, (Math.random() - 0.5) * 0.35, 0, Math.PI * 2);
      ctx.fill();
    }

    const drawCyclone = (cx, cy, radius) => {
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.55)';
      ctx.lineWidth = 4;
      ctx.beginPath();
      for (let a = 0; a < Math.PI * 4; a += 0.15) {
        const r = (a / (Math.PI * 4)) * radius;
        const x = cx + Math.cos(a) * r;
        const y = cy + Math.sin(a) * (r * 0.6);
        if (a === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    };

    drawCyclone(canvas.width * 0.3, canvas.height * 0.35, 45);
    drawCyclone(canvas.width * 0.78, canvas.height * 0.4, 55);
    drawCyclone(canvas.width * 0.45, canvas.height * 0.72, 40);

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    return texture;
  }

  // 5. Progressive Loader for NASA Blue Marble HD Textures
  loadRemoteEarthTextures(onMapLoaded) {
    const loader = new THREE.TextureLoader();
    loader.setCrossOrigin('anonymous');

    const hdUrl = 'https://unpkg.com/three-globe@2.31.1/example/img/earth-blue-marble.jpg';

    loader.load(
      hdUrl,
      (texture) => {
        texture.wrapS = THREE.RepeatWrapping;
        texture.anisotropy = 8;
        if (onMapLoaded) onMapLoaded(texture);
      },
      undefined,
      (err) => {
        console.info('Offline/Sandboxed: using procedural Earth texture.');
      }
    );
  }
}

window.EarthTextureEngine = EarthTextureEngine;
