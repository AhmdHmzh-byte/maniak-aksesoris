# Maniak Aksesoris

Katalog penjualan aksesori seperti kalung, Pin Enamel, gelang, cincin, stiker, dan Key Chain. Dibuat dengan HTML, CSS, dan JavaScript murni tanpa proses build atau dependensi runtime.

## Menjalankan

```bash
python3 -m http.server 5500 --bind 127.0.0.1
```

Buka http://localhost:5500. Jangan membuka melalui `file://` karena aplikasi menggunakan ES modules.

## Fitur

- Katalog 20 aksesori dalam 6 kategori, pencarian, dan filter kategori.
- Ilustrasi vektor orisinal untuk hero dan setiap produk.
- Keranjang belanja dengan jumlah 1–99, subtotal, dan total.
- Formulir pemesan yang memvalidasi detail pesanan lalu membuka draf WhatsApp.
- Keranjang tersimpan di localStorage; data kontak tidak disimpan.
- Tampilan responsif dan navigasi keyboard.

Nama merek, produk, dan harga adalah data contoh. Nomor WhatsApp tujuan dikonfigurasi di `js/config.js`. Stok, ongkos kirim, pembayaran, dan pesanan perlu dikonfirmasi langsung ke toko. Situs ini tidak memproses pembayaran atau menyimpan transaksi.

## Konfigurasi

Edit identitas toko di `index.html` dan `js/config.js`, serta nomor WhatsApp internasional (digit saja) di `js/config.js`. Nomor kosong membuat tombol pemesanan nonaktif. Setelah formulir valid, situs membuka draf pesan di WhatsApp; pembeli tetap perlu memeriksa dan mengirimnya sendiri. Perbarui katalog dan harga di `js/data.js`, lalu ganti ilustrasi contoh dengan foto produk toko bila tersedia.

Nama dan nomor pemesan hanya berada di memori formulir sampai pengguna membuka WhatsApp. Keranjang hanya menyimpan ID produk dan jumlah; harga dibaca dari katalog.

## Pemeriksaan dan paket

```bash
npm test
python3 scripts/package_site.py
```

Paket statis ada di `artifacts/maniak-aksesoris.zip`. Batas verifikasi dicatat di `verification.md`.
