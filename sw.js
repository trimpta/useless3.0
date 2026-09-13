/* Cache-first service worker for the Esri satellite tile layer.
   Explicit app-level cache (Cache Storage API) so tiles persist across
   reloads regardless of whatever Cache-Control headers Esri happens to
   send — we don't control those, so we don't rely on them. */

const CACHE_NAME = 'tile-cache-v1';
const MAX_ENTRIES = 800; // rough cap; oldest entries get evicted past this

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  const url = event.request.url;
  if (url.includes('arcgisonline.com') && url.includes('/tile/')) {
    event.respondWith(cacheFirst(event.request));
  }
});

async function cacheFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);
  if (cached) return cached;

  try {
    const response = await fetch(request);
    // cross-origin tile requests come back as opaque responses (status 0,
    // ok:false) even on success — that's expected, still cache them
    if (response && (response.ok || response.type === 'opaque')) {
      cache.put(request, response.clone());
      trimCache(cache);
    }
    return response;
  } catch (err) {
    return cached || Response.error();
  }
}

async function trimCache(cache) {
  const keys = await cache.keys();
  if (keys.length > MAX_ENTRIES) {
    const excess = keys.length - MAX_ENTRIES;
    for (let i = 0; i < excess; i++) {
      await cache.delete(keys[i]);
    }
  }
}
