'use strict';
(() => {
  const counter = document.querySelector('[data-visitor-counter]');
  if (!counter) return;
  if (navigator.doNotTrack === '1' || navigator.globalPrivacyControl === true) return;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 6000);

  // This read-only endpoint reports the site total and requires no API secret.
  // GoatCounter caches it for up to four hours. Never invent a fallback count.
  fetch('https://wellensohn-music.goatcounter.com/counter/TOTAL.json', {
    credentials: 'omit',
    referrerPolicy: 'no-referrer',
    signal: controller.signal
  })
    .then(response => {
      if (!response.ok) throw new Error('Counter unavailable');
      return response.json();
    })
    .then(data => {
      // The documented response is an integer formatted with separators.
      const raw = String(data.count ?? '');
      if (!/^(?:\d+|\d{1,3}(?:[, .\u00a0\u202f]\d{3})+)$/.test(raw)) return;
      const total = Number(raw.replace(/[, .\u00a0\u202f]/g, ''));
      if (!Number.isSafeInteger(total) || total < 0) return;
      const number = counter.querySelector('[data-visitor-total]');
      const label = counter.querySelector('[data-visitor-label]');
      number.textContent = new Intl.NumberFormat('de-DE').format(total);
      label.textContent = total === 1 ? 'Wellensohn' : 'Wellensöhne';
      counter.hidden = false;
    })
    .catch(() => { /* Unavailable/blocked counters stay hidden. */ })
    .finally(() => clearTimeout(timeout));
})();
