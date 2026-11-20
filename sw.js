
const CACHE_NAME = "walen-cache-v1";

const APP_FILES = [
  "/",
  "/index.html",
  "/manifest.json",
  "/config.json",
  "/offline.html"
];

// Install: simpan file utama aplikasi
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_FILES))
      .catch((error) => {
        console.error("WALEN cache install:", error);
      })
  );

  self.skipWaiting();
});

// Activate: hapus cache versi lama
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key.startsWith("walen-cache-") && key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );

  self.clients.claim();
});

// Fetch: gunakan jaringan terlebih dahulu,
// lalu cache atau halaman offline jika jaringan gagal.
self.addEventListener("fetch", (event) => {
  const request = event.request;

  if (request.method !== "GET") return;

  const url = new URL(request.url);

  // Jangan cache permintaan ke domain lain,
  // termasuk Apps Script dan Supabase.
  if (url.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put("/", copy);
            });
          }
          return response;
        })
        .catch(async () => {
          return (
            await caches.match(request)
          ) || (
            await caches.match("/offline.html")
          );
        })
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;

      return fetch(request).then((response) => {
        if (
          response.ok &&
          response.type === "basic"
        ) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, copy);
          });
        }

        return response;
      });
    })
  );
});
