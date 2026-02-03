const CACHE_NAME = 'leader-smells-v1';
const OFFLINE_URL = '/';

const PRECACHE_URLS = [
  '/',
  '/about',
  '/resources',
  '/contribute',
  '/update-addict',
  '/sync-maximalist',
  '/micromanager',
  '/priority-spinner',
  '/talent-squeezer',
  '/firefighter-hero',
  '/invisible-goalpost',
  '/calendar-tetris',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_URLS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match(event.request).then((response) => {
          return response || caches.match(OFFLINE_URL);
        });
      })
    );
  } else {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return (
          response ||
          fetch(event.request).then((fetchResponse) => {
            if (
              fetchResponse &&
              fetchResponse.status === 200 &&
              fetchResponse.type === 'basic'
            ) {
              const responseToCache = fetchResponse.clone();
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, responseToCache);
              });
            }
            return fetchResponse;
          })
        );
      })
    );
  }
});
