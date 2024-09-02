const cacheName = 'my-pwa-cache-v1';
const filesToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/LOGO_RAG_2024-2.png'
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
