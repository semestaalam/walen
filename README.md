
# WALEN – KEWARUNG ONLINE AJA

**WALEN** adalah aplikasi belanja dan pengelolaan warung berbasis web yang dirancang agar pelanggan dapat berbelanja dengan mudah dan pemilik warung dapat mengelola usahanya secara praktis.

🌐 Website: https://kewarung.online/

## Fitur Aplikasi

### Pelanggan
- Melihat katalog produk warung.
- Mencari dan memilih produk.
- Mengelola keranjang belanja.
- Melakukan pemesanan melalui aplikasi.
- Menghubungi pelayan digital WALEN.

### Pemilik Warung
- Mendaftarkan warung.
- Mengelola informasi warung.
- Mengelola produk dan harga.
- Memantau pesanan pelanggan.
- Mengelola status layanan aplikasi.

### Admin
- Mengelola pendaftaran warung.
- Mengatur status dan masa aktif layanan.
- Mengelola informasi promosi.
- Memantau pengguna dan operasional aplikasi.

## Paket Layanan

| Paket | Harga | Masa Aktif |
|---|---:|---:|
| Free Trial | Gratis | 14 hari |
| Pro | Rp49.000 | 30 hari |
| Premium | Rp99.000 | 30 hari |

**Keuntungan pemilik warung:** 100% pembayaran pelanggan diterima pemilik warung. WALEN tidak mengambil komisi transaksi.

## Teknologi

- HTML, CSS, dan JavaScript.
- Google Apps Script sebagai backend aplikasi.
- Supabase untuk database dan layanan pendukung.
- Progressive Web App (PWA).
- Service Worker untuk dukungan cache dan akses offline.

## Struktur Repository

```text
WALEN/
│
├── index.html
├── config.json
├── manifest.json
├── sw.js
├── offline.html
├── README.md
│
└── icons/
    ├── icon-192.png
    ├── icon-512.png
    └── icon-512-maskable.png
```

## Instalasi dan Penggunaan

1. Buka https://kewarung.online/
2. Gunakan aplikasi melalui browser.
3. Pada perangkat yang mendukung PWA, pilih menu instal aplikasi atau Add to Home Screen.
4. Setelah terinstal, WALEN dapat dibuka seperti aplikasi biasa.

## PWA

WALEN menggunakan:
- `manifest.json` untuk identitas dan pengaturan instalasi aplikasi.
- `sw.js` untuk pengelolaan cache.
- `offline.html` sebagai halaman ketika koneksi internet terputus.

Fitur transaksi, login, chat, dan sinkronisasi data tetap memerlukan koneksi internet.

## Pengembang

**WALEN – KEWARUNG ONLINE AJA**

Dikembangkan oleh SEMESTAALAM  
Under Indonesian SSD Foundation

---

© 2026 WALEN. All rights reserved.
