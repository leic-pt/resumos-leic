// Keep this endpoint so legacy Gatsby workers can retire instead of serving stale pages.
self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    self.registration.unregister().then(async () => {
      const clients = await self.clients.matchAll();
      await Promise.all(clients.map((client) => client.navigate(client.url)));
    })
  );
});
