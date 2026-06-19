// Used only if the worker is not reloaded after changing the index, in which case change the value
const SW_VERSION = "0";


// INSTALL
self.addEventListener("install", event => {
  self.skipWaiting();
});


// ACTIVATE
self.addEventListener("activate", event => {
  event.waitUntil(clients.claim());
});

