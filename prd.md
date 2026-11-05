# Product Requirement Document — Maniak Aksesoris

Status: katalog demonstrasi dengan 10 aksesori. Nomor WhatsApp tujuan sudah dikonfigurasi; detail toko, produk, harga, dan alamat masih perlu dikonfirmasi pemilik.

## Visi
Memudahkan pembeli menemukan aksesori kecil untuk gaya sehari-hari maupun hadiah: kalung, Pin Enamel, gelang, cincin, stiker, dan Key Chain.

## Cakupan MVP
1. Halaman utama yang memperkenalkan toko dan mengarahkan pengguna ke katalog.
2. Katalog produk dengan nama, kategori, deskripsi, spesifikasi, gambar lokal, serta harga per unit.
3. Pencarian nama dan filter kategori aksesori.
4. Keranjang untuk menambah, mengubah jumlah, menghapus produk, serta menghitung subtotal dan total.
5. Formulir nama dan nomor WhatsApp, validasi pesanan, serta draf pesan WhatsApp yang dapat diperiksa pembeli.
6. localStorage hanya untuk memulihkan ID produk dan jumlah.
7. Informasi bahwa harga, stok, ongkir, serta pembayaran perlu dikonfirmasi toko.
8. Tampilan responsif dan kontrol yang dapat digunakan dengan keyboard.

Di luar MVP: akun, panel admin, stok real-time, ongkir otomatis, checkout/pembayaran online, penyimpanan transaksi, dan ulasan.

## Aturan bisnis
- Harga rupiah per unit; subtotal = harga × jumlah, total = jumlah seluruh subtotal.
- Jumlah teknis 1–99 per produk dan bukan informasi ketersediaan.
- Total katalog hanya mencakup harga produk; ongkir/biaya tambahan dikonfirmasi toko.
- Membuka WhatsApp menyiapkan draf saja. Pengguna mengirim sendiri dan menunggu konfirmasi.
- Nomor WhatsApp toko yang belum diatur menonaktifkan tombol pemesanan.
- Data kontak tidak disimpan di localStorage. Harga selalu dibaca dari katalog terkini.

## Alur
Jelajahi aksesori → cari/filter → tambah ke keranjang → atur jumlah → periksa total → isi kontak → buka dan tinjau draf WhatsApp → kirim → toko mengonfirmasi stok, ongkir, dan pembayaran.

## Kriteria penerimaan
- Pencarian dan filter bekerja bersama; keadaan kosong menyediakan tombol reset.
- Produk dengan ID yang sama digabung dalam satu baris.
- Jumlah selain integer 1–99 ditolak dengan pesan jelas.
- Draf WhatsApp memuat nama, kontak, produk, jumlah, harga satuan, subtotal, total, dan permintaan konfirmasi ongkir/stok.
- Keranjang pulih setelah reload; data rusak atau storage ditolak tidak menghentikan katalog.
- Tidak muncul gulir horizontal pada lebar 360 px; alur dapat digunakan dengan keyboard.

## Dependensi sebelum rilis
Pemilik perlu menyediakan identitas toko, katalog dan harga aktual, foto produk yang sesuai/berizin, nomor WhatsApp, alamat, opsi pengiriman, dan metode pembayaran.
