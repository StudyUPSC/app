self.addEventListener('install', event => {
    console.log('✅ Service Worker Installed');
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    console.log('✅ Service Worker Activated');
});

// Push Notification
self.addEventListener('push', function (event) {
    const data = event.data.json();

    self.registration.showNotification(data.title, {
        body: data.body,
        icon: 'icon.png',
        badge: 'icon.png'
    });
});
