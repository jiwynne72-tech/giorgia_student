const CACHE_NAME = 'giorgia-english-v1';
const urlsToCache = [
  'index.html',
  '1giorgia.html',
  '2giorgia.html',
  'giorgia.ico',
  'manifest.json'
];

// Install Event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch Event
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});