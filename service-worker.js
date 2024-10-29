self.addEventListener('install', event => {
    console.log('Service Worker установлен.');
});

self.addEventListener('activate', event => {
    console.log('Service Worker активирован.');
});

self.addEventListener('fetch', event => {
    // Здесь можно кэшировать ресурсы
});
