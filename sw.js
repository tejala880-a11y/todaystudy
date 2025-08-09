// This script caches the main page.
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('study-app-cache').then(cache => {
      return cache.addAll(['/', '/index.html']);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});