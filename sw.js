// Service worker Kios Presensi Guru: membuat aplikasi tetap terbuka tanpa internet.
// Aset inti disimpan saat pemasangan; halaman diperbarui diam-diam di latar belakang setiap kali online
// (versi baru tampil pada pembukaan berikutnya). Nama cache khusus aplikasi ini agar tidak bertabrakan
// dengan aplikasi lain pada alamat github.io yang sama.
const AWALAN = 'presensi-';
const VERSI = 'v1';            // naikkan (v2, v3, ...) bila ingin memaksa semua aset diunduh ulang
const CACHE = AWALAN + VERSI;
const ASET = ['./', 'index.html', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png',
  'icon-maskable-512.png', 'apple-touch-icon.png', 'favicon-32.png', 'favicon-48.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE)
    .then(c => Promise.all(ASET.map(a => c.add(new Request(a, { cache: 'reload' })))))
    .then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k.startsWith(AWALAN) && k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  const navigasi = req.mode === 'navigate';
  const kunci = navigasi ? new Request(new URL('./', self.registration.scope).href) : req;   // semua pembukaan halaman memakai satu salinan
  e.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const tersimpan = await cache.match(kunci, { ignoreSearch: true });
    // 'no-cache' = selalu tanya server (304 bila tak berubah), tidak memakai salinan cache HTTP yang bisa tertahan 10 menit di GitHub Pages
    const jaringan = fetch(navigasi ? kunci.url : req, { cache: 'no-cache' }).then(res => { if (res && res.ok) cache.put(kunci, res.clone()); return res; }).catch(() => null);
    e.waitUntil(jaringan);
    return tersimpan || (await jaringan) || (navigasi ? await cache.match('index.html') : null) || Response.error();
  })());
});
