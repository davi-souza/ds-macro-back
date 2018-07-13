var cacheName = 'ds-macro-cache-name-v-8';
var filesToCache = [
  '/manifest.json',
  '/browserconfig.xml',
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
  '/img/icons/android-icon-144x144.png',
  '/img/icons/android-icon-192x192.png',
  '/img/icons/android-icon-36x36.png',
  '/img/icons/android-icon-48x48.png',
  '/img/icons/android-icon-512x512.png',
  '/img/icons/android-icon-72x72.png',
  '/img/icons/android-icon-96x96.png',
  '/img/icons/apple-icon-114x114.png',
  '/img/icons/apple-icon-120x120.png',
  '/img/icons/apple-icon-144x144.png',
  '/img/icons/apple-icon-152x152.png',
  '/img/icons/apple-icon-180x180.png',
  '/img/icons/apple-icon-57x57.png',
  '/img/icons/apple-icon-60x60.png',
  '/img/icons/apple-icon-72x72.png',
  '/img/icons/apple-icon-76x76.png',
  '/img/icons/apple-icon.png',
  '/img/icons/favicon-16x16.png',
  '/img/icons/favicon-32x32.png',
  '/img/icons/favicon-96x96.png',
  '/img/icons/favicon.ico',
  '/img/icons/ms-icon-144x144.png',
  '/img/icons/ms-icon-150x150.png',
  '/img/icons/ms-icon-310x310.png',
  '/img/icons/ms-icon-70x70.png',
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
