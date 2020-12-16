const CACHE_NAME = "ver.01";
const urlsToCache = ["../offline/offline.html", 'logo512.png',  "../src/App.js", '../src/App.css', '../src/index.js', '../src/index.css', '../src/logo.svg'];

const self = this;

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(cache => {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  )
});

self.addEventListener("fetch", (event) => {
  console.log(event.request)
   event.respondWith(
     caches.match(event.request)
     .then(() => {
       return fetch(event.request)
       .catch(() => caches.match('offline.html'))
     })
   )
});

self.addEventListener("activate", (event) => {
  const cacheWhitelist = [];
  cacheWhitelist.push(CACHE_NAME);

  event.waitUntil(
    caches.keys().then(cacheNames => Promise.all(
      cacheNames.map(cacheName => {
        if(!cacheWhitelist.includes(cacheName)) {
          return caches.delete(cacheName)
        }
      })
    ))
  )
});

// https://youtu.be/IaJqMcOMuDM?t=2255