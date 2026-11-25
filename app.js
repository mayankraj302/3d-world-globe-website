/**
 * MAIN UI & INTERACTION CONTROLLER
 * Apple-Style Minimalist Overlay, Live IANA Timezone Ticker & Country Card Logic
 */

(function () {
  'use strict';

  let globe = null;
  let activeCountry = null;
  let liveClockInterval = null;
  let isAutoRotateActive = true;

  // DOM Elements
  const container = document.getElementById('webgl-canvas-container');
  const searchInput = document.getElementById('search-input');
  const searchDropdown = document.getElementById('search-dropdown');
  const heroBadge = document.getElementById('hero-poetic-badge');
  const countryCard = document.getElementById('country-card');
  const closeCardBtn = document.getElementById('close-card-btn');
  const returnOrbitBtn = document.getElementById('return-orbit-btn');
  const autoRotateBtn = document.getElementById('auto-rotate-btn');
  const zoomInBtn = document.getElementById('zoom-in-btn');
  const zoomOutBtn = document.getElementById('zoom-out-btn');
  const resetOrbitBtn = document.getElementById('reset-orbit-btn');
  const solarTimeDisplay = document.getElementById('solar-time-display');

  function init() {
    // 1. Initialize 3D Globe Engine
    globe = new AppleEarthGlobe({
      containerId: 'webgl-canvas-container',
      countries: COUNTRIES_DATA,
      onSelectCountry: (country) => displayCountryCard(country),
      onResetView: () => onResetToOrbit()
    });

    // 2. Attach UI Listeners
    setupSearch();
    setupCardControls();
    setupBottomControls();
    setupSolarClock();
  }

  /* -------------------------------------------------------------------------- */
  /* 1. COUNTRY CARD PRESENTATION & REAL-TIME IANA CLOCK                        */
  /* -------------------------------------------------------------------------- */
  function displayCountryCard(country) {
    activeCountry = country;

    // Fade out poetic initial badge
    if (heroBadge) heroBadge.classList.add('is-hidden');

    // Populate Country Header
    document.getElementById('card-country-flag').textContent = country.flag;
    document.getElementById('card-country-name').textContent = country.name;
    document.getElementById('card-native-name').textContent = `${country.nativeName} • Capital: ${country.capital}`;

    // Update Live Clock Immediately & start ticker
    updateLiveClock(country.timezone);
    if (liveClockInterval) clearInterval(liveClockInterval);
    liveClockInterval = setInterval(() => {
      if (activeCountry) updateLiveClock(activeCountry.timezone);
    }, 1000);

    // Populate Historical Legacy
    document.getElementById('card-history-text').textContent = country.history;

    // Populate Landmarks
    const landmarksContainer = document.getElementById('card-landmarks-list');
    landmarksContainer.innerHTML = country.landmarks.map((landmark) => `
      <div class="landmark-item-card">
        <div class="landmark-header">
          <span class="landmark-name">${landmark.name}</span>
          <span class="landmark-badge">${landmark.type}</span>
        </div>
        <p class="landmark-desc">${landmark.desc}</p>
      </div>
    `).join('');

    // Populate Quick Facts
    document.getElementById('fact-population').textContent = country.quickFacts.population;
    document.getElementById('fact-area').textContent = country.quickFacts.area;
    document.getElementById('fact-elevation').textContent = country.quickFacts.elevation;

    // Slide In Apple Card
    countryCard.classList.add('is-open');
  }

  function updateLiveClock(timezone) {
    const timeEl = document.getElementById('card-live-time');
    const dateEl = document.getElementById('card-live-date');
    const tzEl = document.getElementById('card-tz-offset');
    if (!timeEl) return;

    try {
      const now = new Date();

      // Time string (24h with seconds: e.g., "15:45:12")
      const timeFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      });
      timeEl.textContent = timeFormatter.format(now);

      // Date string (e.g., "Wednesday, 25 Nov 2026")
      const dateFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      });
      dateEl.textContent = dateFormatter.format(now);

      // Timezone Offset / Code
      const tzFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        timeZoneName: 'short'
      });
      const parts = tzFormatter.formatToParts(now);
      const tzName = parts.find(p => p.type === 'timeZoneName')?.value || timezone;
      tzEl.textContent = tzName;
    } catch (e) {
      timeEl.textContent = '--:--:--';
    }
  }

  function hideCountryCard() {
    countryCard.classList.remove('is-open');
    if (liveClockInterval) clearInterval(liveClockInterval);
    activeCountry = null;
  }

  function onResetToOrbit() {
    hideCountryCard();
    if (heroBadge) heroBadge.classList.remove('is-hidden');
  }

  /* -------------------------------------------------------------------------- */
  /* 2. SEARCH AUTOCOMPLETE & COUNTRY JUMP                                      */
  /* -------------------------------------------------------------------------- */
  function setupSearch() {
    if (!searchInput || !searchDropdown) return;

    const renderResults = (query) => {
      const trimmed = query.trim().toLowerCase();
      if (!trimmed) {
        searchDropdown.classList.remove('is-open');
        return;
      }

      const matches = COUNTRIES_DATA.filter((c) =>
        c.name.toLowerCase().includes(trimmed) ||
        c.capital.toLowerCase().includes(trimmed) ||
        c.continent.toLowerCase().includes(trimmed)
      );

      if (matches.length === 0) {
        searchDropdown.innerHTML = `<div style="padding: 12px; font-size: 0.8rem; color: var(--text-tertiary); text-align: center;">No territories found</div>`;
        searchDropdown.classList.add('is-open');
        return;
      }

      searchDropdown.innerHTML = matches.map((c) => `
        <div class="search-result-item" data-id="${c.id}">
          <div class="search-item-left">
            <span class="search-flag">${c.flag}</span>
            <span class="search-country-name">${c.name}</span>
          </div>
          <span class="search-continent">${c.continent}</span>
        </div>
      `).join('');

      searchDropdown.classList.add('is-open');

      searchDropdown.querySelectorAll('.search-result-item').forEach((item) => {
        item.addEventListener('click', () => {
          const id = item.dataset.id;
          const country = COUNTRIES_DATA.find((c) => c.id === id);
          if (country) {
            globe.focusCountry(country);
            searchInput.value = '';
            searchDropdown.classList.remove('is-open');
          }
        });
      });
    };

    searchInput.addEventListener('input', (e) => renderResults(e.target.value));

    window.addEventListener('click', (e) => {
      if (!searchInput.contains(e.target) && !searchDropdown.contains(e.target)) {
        searchDropdown.classList.remove('is-open');
      }
    });
  }

  /* -------------------------------------------------------------------------- */
  /* 3. CARD & ORBIT CONTROLS                                                   */
  /* -------------------------------------------------------------------------- */
  function setupCardControls() {
    if (closeCardBtn) {
      closeCardBtn.addEventListener('click', () => {
        globe.resetOrbitView();
      });
    }

    if (returnOrbitBtn) {
      returnOrbitBtn.addEventListener('click', () => {
        globe.resetOrbitView();
      });
    }
  }

  function setupBottomControls() {
    if (resetOrbitBtn) {
      resetOrbitBtn.addEventListener('click', () => {
        globe.resetOrbitView();
      });
    }

    if (autoRotateBtn) {
      autoRotateBtn.addEventListener('click', () => {
        isAutoRotateActive = !isAutoRotateActive;
        globe.ambientSpeed = isAutoRotateActive ? 0.0012 : 0;
        autoRotateBtn.classList.toggle('is-active', isAutoRotateActive);
      });
    }

    if (zoomInBtn) {
      zoomInBtn.addEventListener('click', () => {
        const curDist = globe.camera.position.length();
        const targetDist = Math.max(globe.minZoomDist, curDist - 0.7);
        if (window.gsap) {
          gsap.to(globe.camera.position, {
            x: globe.camera.position.x * (targetDist / curDist),
            y: globe.camera.position.y * (targetDist / curDist),
            z: globe.camera.position.z * (targetDist / curDist),
            duration: 0.6,
            ease: 'power2.out'
          });
        }
      });
    }

    if (zoomOutBtn) {
      zoomOutBtn.addEventListener('click', () => {
        const curDist = globe.camera.position.length();
        const targetDist = Math.min(globe.maxZoomDist, curDist + 0.7);
        if (window.gsap) {
          gsap.to(globe.camera.position, {
            x: globe.camera.position.x * (targetDist / curDist),
            y: globe.camera.position.y * (targetDist / curDist),
            z: globe.camera.position.z * (targetDist / curDist),
            duration: 0.6,
            ease: 'power2.out'
          });
        }
      });
    }
  }

  function setupSolarClock() {
    if (!solarTimeDisplay) return;
    setInterval(() => {
      const now = new Date();
      const utcHrs = String(now.getUTCHours()).padStart(2, '0');
      const utcMins = String(now.getUTCMinutes()).padStart(2, '0');
      const utcSecs = String(now.getUTCSeconds()).padStart(2, '0');
      solarTimeDisplay.textContent = `${utcHrs}:${utcMins}:${utcSecs} UTC`;
    }, 1000);
  }

  // Bootstrap
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
