# Catatan Verifikasi — Maniak Aksesoris

Tanggal perubahan: 25 Oktober 2026. Katalog aksesori diperbarui dengan produk bergaya maskulin dan retro.

## Status
- 20 aksesori dalam 6 kategori: kalung, Pin Enamel, gelang, cincin, Key Chain, dan stiker.
- Hero dan sepuluh gambar produk menggunakan ilustrasi SVG aksesori bernuansa maskulin-retro.
- Harga dan merek merupakan contoh. Nomor bisnis belum diatur; tombol WhatsApp tetap nonaktif sampai pemilik memasukkan nomor asli di `js/config.js`.
- Tidak ada backend, stok real-time, checkout, atau pembayaran.

## Pemeriksaan
- Katalog, pencarian dan filter gabungan, reset, serta ilustrasi SVG dimuat melalui browser.
- Keranjang 2 Kalung Rantai Figaro dan 1 Stiker Garage Classics menghasilkan 3 unit dan total Rp203.000.
- Ringkasan pesanan dan validasi kontak berjalan; tombol WhatsApp nonaktif dengan nomor toko kosong.
- Jumlah tidak valid ditolak; keranjang pulih setelah reload, dan localStorage hanya berisi versi, ID, serta jumlah.
- Tidak ditemukan overflow horizontal pada lebar 320, 360, 768, dan 1280 px.
- Tidak ditemukan error JavaScript atau aset gagal dimuat saat reload.
- Paket statis berhasil dibangun; packager hanya menyertakan gambar yang direferensikan situs, tanpa ilustrasi hiking yang tidak terpakai.

Suite unit dapat dijalankan jika Node.js/npm tersedia:

```bash
npm test
```

Node.js/npm tidak tersedia di lingkungan ini; suite unit belum dijalankan. Validasi interaksi dilakukan melalui browser terintegrasi. Smoke test opsional: jalankan server pada `http://127.0.0.1:5500`, buka Chrome DevTools port `9222`, lalu jalankan `node tests/browser-smoke.mjs`.

## Batas rilis
Konfirmasi identitas toko, harga, barang, foto, nomor WhatsApp, ongkir, dan metode pembayaran sebelum rilis. Ilustrasi saat ini bersifat dekoratif, bukan representasi foto atau jaminan kondisi inventaris. Audit aksesibilitas formal dan hosting produksi belum dilakukan.
