# Panduan Pengembangan — Maniak Aksesoris

## Data sebelum rilis
Minta pemilik toko mengonfirmasi identitas merek, daftar aksesori, harga, spesifikasi, foto yang sesuai/berizin, nomor WhatsApp, alamat, ongkir, dan metode pembayaran. Data saat ini hanya contoh; nomor WhatsApp kosong agar tidak ada pesan yang diarahkan ke pihak yang salah.

## Implementasi
1. Katalog dikelola di `js/data.js` dengan ID unik, kategori, nama, deskripsi, harga integer rupiah, alt text, dan aset lokal.
2. Hitung subtotal dari harga katalog × jumlah; jumlah harus integer 1–99.
3. Simpan hanya versi skema, ID produk, dan jumlah di localStorage.
4. Validasi nama dan nomor kontak; ringkasan lama dibatalkan saat pesanan berubah.
5. Susun draf WhatsApp dengan `encodeURIComponent`; pengguna mengirim sendiri.
6. Gunakan DOM API/`textContent` untuk nilai dinamis, elemen HTML semantik, label, dan fokus terlihat.
7. Jangan mengklaim stok, pembayaran, atau pesanan terkonfirmasi dari UI statis.

## Menjalankan dan menguji

```bash
python3 -m http.server 5500 --bind 127.0.0.1
npm test
python3 scripts/package_site.py
```

Gunakan `http://localhost:5500`, bukan `file://`, untuk memuat ES modules.

| Skenario | Hasil |
| --- | --- |
| Cari produk dan pilih kategori | Kedua filter berlaku; reset memulihkan katalog |
| Produk sama ditambah berulang | Satu baris dengan jumlah gabungan |
| Jumlah 0, desimal, atau 100 | Ditolak |
| Kontak tidak valid | Error terlihat dan fokus menuju field |
| Storage rusak/ditolak | Katalog tetap berfungsi, keranjang dipulihkan aman |
| Nomor toko kosong | Tombol WhatsApp nonaktif |
| 320, 360, 768, 1280 px | Tidak ada overflow horizontal |

Verifikasi aksesibilitas dan hosting HTTPS sebelum rilis.
