'use strict';
(() => {
  // Owner confirmed this GoatCounter account on 2026-10-06.
  // This is a public site identifier, never an API key or password.
  const siteCode = 'wellensohn-music';
  if (!/^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/.test(siteCode)) return;
  if (location.hostname !== 'wellensohn-packman.github.io' ||
      !location.pathname.startsWith('/wellensohn-music/')) return;
  if (navigator.doNotTrack === '1' || navigator.globalPrivacyControl === true) return;
  if (document.querySelector('script[data-goatcounter]')) return;

  // Keep query strings, search text and fragments out of analytics.
  const path = location.pathname.replace(/\/index\.html$/, '/');
  let referrer = '';
  try {
    const source = new URL(document.referrer);
    if (/^https?:$/.test(source.protocol) && source.origin !== location.origin) {
      referrer = source.origin;
    }
  } catch (_) { /* Direct visits have no referrer. */ }
  window.goatcounter = { path, title: document.title, referrer, no_events: true };
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://gc.zgo.at/count.js';
  script.dataset.goatcounter = `https://${siteCode}.goatcounter.com/count`;
  document.head.appendChild(script);
})();
