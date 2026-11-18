/* Canopée — service worker : fonctionnement hors ligne.
   Page : réseau d'abord, copie en cache si hors ligne. Autres fichiers : cache d'abord.
   Incrémenter VERSION à chaque mise à jour publiée. */
const VERSION = 'canopee-v1.0.0';
const ASSETS = ['./', './index.html', './manifest.webmanifest', './icons/icon.svg', './icons/icon-192.png', './icons/icon-512.png', './icons/maskable-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(VERSION).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('canopee-') && k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const req = e.request; if (req.method !== 'GET') return;
  const url = new URL(req.url); if (url.origin !== self.location.origin) return;
  const scope = new URL(self.registration.scope).pathname; if (!url.pathname.startsWith(scope)) return;
  const isPage = req.mode === 'navigate' || url.pathname === scope || url.pathname.endsWith('/index.html');
  if (isPage) {
    e.respondWith(fetch(req, { cache: 'no-store' }).then(res => { if (res && res.ok) { const copy = res.clone(); caches.open(VERSION).then(c => c.put('./index.html', copy)); } return res; }).catch(() => caches.match('./index.html').then(r => r || caches.match('./'))));
    return;
  }
  e.respondWith(caches.match(req, { ignoreSearch: true }).then(cached => cached || fetch(req).then(res => { if (res && res.ok) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); } return res; })));
});
