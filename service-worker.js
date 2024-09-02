const cacheName = 'my-pwa-cache-v1';
const filesToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/LOGO_RAG_2024-2.png',
  '/splash/launch-750x1294.png',
  '/splash/launch-1125x2436.png',
  '/splash/launch-1242x2148.png',
  '/splash/launch-1536x2048.png',
  '/splash/launch-1668x2224.png',
  '/splash/launch-2048x2732.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll(filesToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
