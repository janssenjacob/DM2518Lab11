// Listen for install event, set callback.
self.addEventListener('install', function(event) {
    console.log("Service worker has been installed.");
});

// Activate event.
self.addEventListener('activate', function(event) {
    console.log("Service worker has been activated.");
});

// // Fetch
// self.addEventListener('fetch', function(event) {
//     console.log("Fetch event", event);
// });

// Fetch
self.addEventListener('fetch', evt => {
    console.log("Fetch event", evt);
});