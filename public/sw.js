var cacheName = 'ds-macro-cache-name-v-3';
var filesToCache = [
  '/index.html',
  '/',
  '/macro/add',
  '/css/app.48ba6a45.css',
  '/css/chunk-vendors.c24fed64.css',
  '/js/app.08962f8b.js',
  '/js/app.08962f8b.js.map',
  '/js/chunk-vendors.0503b410.js',
  '/js/chunk-vendors.0503b410.js.map',
  'https://fonts.googleapis.com/css?family=Roboto:400,500,700|Material+Icons',
  'https://fonts.gstatic.com/s/materialicons/v38/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2',
  'https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fBBc4AMP6lQ.woff2',
  '/favicon.ico',
];

self.addEventListener('install',async (e) => {
  console.log('[ServiceWorker] Install')
  e.waitUntil(
    caches.open(cacheName).then( (cache) => {
      console.log('[ServiceWorker] Caching app shell')
      return cache.addAll(filesToCache)
    })
  )
})

self.addEventListener('activate', (e) => {
  console.log('[ServiceWorker] Activate')
  e.waitUntil(
    caches.keys().then( (keyList) => {
      return Promise.all(keyList.map( (key) => {
        if (key !== cacheName) {
          console.log('[ServiceWorker] Removing old cache', key)
          return caches.delete(key)
        }
      }))
    })
  )
  return self.clients.claim()
})

self.addEventListener('fetch', (e) => {
  console.log('[ServiceWorker] Fetch', e.request.url)
  e.respondWith(
    caches.match(e.request).then( (response) => {
      return response || fetch(e.request)
    })
  )
})
