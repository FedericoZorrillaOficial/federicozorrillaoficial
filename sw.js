// sw.js
self.addEventListener('install', (e) => {
  console.log('Service Worker Instalado');
});

// Este evento es OBLIGATORIO para que PC lo reconozca
self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});
