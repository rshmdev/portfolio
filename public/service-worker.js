// Nome do cache
const CACHE_NAME = 'my-cache';

// Arquivos para armazenar em cache
const urlsToCache = [
    './',
    './public/index.html',
    './build/static/js/',
    './build/static/css/',
    './build/static/media/'
];

// Instalação do service worker
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

// Ativação do service worker
self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Fetch - recuperação de recursos
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response; // Se o recurso está em cache, retorna ele
                }
                return fetch(event.request); // Se não, busca na rede
            })
    );
})