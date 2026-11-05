# Panduan UI/UX — Maniak Aksesoris

## Arah visual
Suasana retro-maskulin dengan palet krem, hijau hutan, karat, dan mustard. Tipografi serif pada judul, sudut tegas, aksen seperti cap vintage, dan ilustrasi bernuansa bumi memberi kesan klasik tanpa mengubah fungsi katalog.

## Susunan halaman
Header → hero aksesori → katalog → keranjang → cara pesan → FAQ → kontak dan footer. Desktop menempatkan keranjang di sisi katalog; ponsel menempatkannya di bawah daftar produk.

## Alur belanja
1. Jelajahi aksesori lewat pencarian atau filter.
2. Tambahkan produk dan atur jumlah.
3. Periksa subtotal, total, dan kontak pemesan.
4. Buka WhatsApp berisi draf detail; pengguna masih perlu mengirim pesan.

## Komponen
- Kartu produk memuat ilustrasi, kategori, nama, deskripsi, spesifikasi, harga satuan, dan tombol tambah.
- Kategori utama: kalung, Pin Enamel, gelang, cincin, Key Chain, dan stiker.
- Hasil pencarian kosong menyediakan cara untuk reset filter.
- Keranjang menampilkan jumlah, harga per unit, subtotal, dan total.
- Kontak pemesan divalidasi sebelum ringkasan; perubahan setelah tinjauan membatalkan tinjauan lama.
- Nomor toko kosong menonaktifkan tombol WhatsApp dengan penjelasan.

## Aksesibilitas
- Landmark semantik, satu `h1`, label input, alt gambar, serta fokus terlihat.
- Semua kontrol dapat digunakan dengan keyboard; error dihubungkan ke field.
- Pesan status tidak merebut fokus.
- Periksa kontras, zoom 200%, reflow hingga 320 CSS px, dan target sentuh 44 × 44 px.
- Uji pembaca layar dan browser tambahan sebelum menyatakan kepatuhan formal.
