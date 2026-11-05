export const CATEGORIES = Object.freeze([
  { id: 'all', name: 'Semua produk' },
  { id: 'kalung', name: 'Kalung' },
  { id: 'pin', name: 'Pin Enamel' },
  { id: 'gelang', name: 'Gelang' },
  { id: 'cincin', name: 'Cincin' },
  { id: 'key-chain', name: 'Key Chain' },
  { id: 'stiker', name: 'Stiker' },
]);

// Produk dan harga hanya contoh; ganti dengan katalog usaha sebelum peluncuran.
export const PRODUCTS = Object.freeze([
  { id: 'kalung-bunga', name: 'Kalung Rantai Figaro', category: 'kalung', description: 'Rantai klasik bertekstur tegas, cocok dipakai sendiri atau dilapis.', specification: 'Stainless steel · panjang 55 cm', price: 89000, image: 'image/kalungrantaifigaro.png', imageAlt: 'Foto produk kalung rantai Figaro', tag: 'Favorit' },
  { id: 'kalung-mutiara', name: 'Kalung Dog Tag Klasik', category: 'kalung', description: 'Liontin dog tag bergaya utilitarian dengan sentuhan vintage.', specification: 'Stainless steel · rantai 60 cm', price: 125000, image: 'image/kalung_dog_tag_classic.png', imageAlt: 'Foto produk kalung dog tag klasik', tag: 'Gaya klasik' },
  { id: 'kalung-daisy', name: 'Kalung Salib', category: 'kalung', description: 'Liontin salib baja bergaya klasik dengan rantai kokoh untuk tampilan maskulin.', specification: 'Stainless steel · rantai 60 cm', price: 75000, image: 'image/Kalung_Salib.png', imageAlt: 'Foto produk kalung salib baja', tag: 'Klasik' },
  { id: 'kalung-mutiara-aksen', name: 'Kalung Petir', category: 'kalung', description: 'Liontin petir metal berdesain tegas untuk aksen gaya retro pria.', specification: 'Stainless steel · rantai 55 cm', price: 95000, image: 'image/Kalung_Petir.png', imageAlt: 'Foto produk kalung petir metal', tag: 'Berkarakter' },
  { id: 'enamel-pin-kucing', name: 'Pin Enamel Abbey Road', category: 'pin', description: 'Pin Enamel bertema Abbey Road untuk jaket, topi, atau tas.', specification: 'Enamel hard · pengunci metal', price: 35000, image: 'image/Abbey_Road_Cats_Beatles.png', imageAlt: 'Foto produk Pin Enamel Abbey Road', tag: 'Pilihan' },
  { id: 'enamel-pin-bunga', name: 'Pin Enamel Elang Klasik', category: 'pin', description: 'Pin Enamel bergambar elang bergaya retro sebagai aksen yang berkarakter.', specification: 'Enamel hard · lapisan glossy', price: 32000, image: 'image/Pin_Elang_Klasik.png', imageAlt: 'Foto produk Pin Enamel Elang Klasik', tag: 'Retro' },
  { id: 'pin-bunga', name: 'Pin Enamel I Love Mom', category: 'pin', description: 'Pin Enamel bertuliskan I Love Mom dengan gaya klasik untuk jaket atau tas.', specification: 'Enamel hard · pengunci metal', price: 30000, image: 'image/Pin_Enamel_I_Love_Mom.png', imageAlt: 'Foto produk Pin Enamel I Love Mom', tag: 'Klasik' },
  { id: 'pin-kompas', name: 'Pin Enamel Oasis UK', category: 'pin', description: 'Pin Enamel bertema bendera UK dengan palet retro untuk koleksi dan aksesori.', specification: 'Enamel · pengunci metal', price: 33000, image: 'image/Pin_Enamel_Oasis_UK.png', imageAlt: 'Foto produk Pin Enamel Oasis UK', tag: 'Retro' },
  { id: 'gelang-manik', name: 'Gelang Kulit Anyam', category: 'gelang', description: 'Gelang kulit anyam dengan tampilan kasual dan maskulin.', specification: 'Kulit sintetis · kunci magnetik baja', price: 45000, image: 'image/Gelang_Kulit_Anyam.png', imageAlt: 'Foto produk Gelang Kulit Anyam', tag: 'Kulit klasik' },
  { id: 'gelang-charm', name: 'Gelang Cuff Baja', category: 'gelang', description: 'Gelang cuff minimal dengan garis tegas dan finishing matte.', specification: 'Stainless steel · ukuran adjustable', price: 79000, image: 'image/Gelang_Cuff_Baja.png', imageAlt: 'Foto produk Gelang Cuff Baja', tag: 'Minimalis' },
  { id: 'gelang-manik-warna', name: 'Gelang Paracord', category: 'gelang', description: 'Gelang tali paracord anyam bergaya outdoor dengan warna hijau army.', specification: 'Paracord anyam · ukuran adjustable', price: 39000, image: 'image/Gelang_Paracord.png', imageAlt: 'Foto produk gelang paracord', tag: 'Outdoor' },
  { id: 'gelang-charm-retro', name: 'Gelang Rantai', category: 'gelang', description: 'Gelang rantai baja berdesain kokoh dengan tampilan klasik maskulin.', specification: 'Stainless steel · pengunci lobster', price: 55000, image: 'image/Gelang_Rantai.png', imageAlt: 'Foto produk gelang rantai baja', tag: 'Klasik' },
  { id: 'cincin-gelombang', name: 'Cincin Signet Onyx', category: 'cincin', description: 'Cincin signet kokoh dengan aksen batu hitam yang elegan.', specification: 'Stainless steel · aksen onyx sintetis', price: 59000, image: 'image/Cincin_Signet_Onyx.png', imageAlt: 'Foto produk Cincin Signet Onyx', tag: 'Paling dicari' },
  { id: 'cincin-batu', name: 'Cincin Polos Titanium', category: 'cincin', description: 'Cincin berprofil bersih dengan kilau metal yang understated.', specification: 'Titanium · finishing brushed', price: 69000, image: 'image/Cincin_Polos_Titanium.png', imageAlt: 'Foto produk Cincin Polos Titanium', tag: 'Everyday' },
  { id: 'cincin-gelombang-metal', name: 'Cincin Tengkorak', category: 'cincin', description: 'Cincin baja dengan detail tengkorak bergaya biker untuk tampilan berani.', specification: 'Stainless steel · detail relief tengkorak', price: 49000, image: 'image/Cincin_Tengkorak.png', imageAlt: 'Foto produk cincin tengkorak', tag: 'Biker' },
  { id: 'cincin-batu-hitam', name: 'Cincin Titanium Hitam', category: 'cincin', description: 'Cincin titanium hitam berprofil minimal dengan finishing matte maskulin.', specification: 'Titanium · finishing hitam matte', price: 65000, image: 'image/Cincin_Titanium_Hitam.png', imageAlt: 'Foto produk cincin titanium hitam', tag: 'Minimalis' },
  { id: 'stiker-lucu', name: 'Stiker Garage Classics', category: 'stiker', description: 'Paket stiker tipografi retro untuk laptop, botol, atau toolbox.', specification: '6 stiker vinyl · tahan percikan', price: 25000, image: 'image/Stiker_Garage_Classics.png', imageAlt: 'Foto produk Stiker Garage Classics', tag: 'Isi 6 pcs' },
  { id: 'gantungan-bunga', name: 'Key Chain Kulit', category: 'key-chain', description: 'Tag kulit sederhana untuk kunci atau tas favoritmu.', specification: 'Kulit sintetis · ring metal', price: 39000, image: 'image/Gantungan_Kunci_Kulit.png', imageAlt: 'Foto produk key chain kulit', tag: 'Klasik' },
  { id: 'stiker-retro-lucu', name: 'Key Chain Yu-Gi-Oh Charm', category: 'key-chain', description: 'Key Chain charm bertema kartu koleksi dengan bingkai metal bergaya retro.', specification: 'Charm dekoratif · Key Chain metal', price: 22000, image: 'image/Key_Chain_Yu-Gi-Oh_Charm.png', imageAlt: 'Foto produk Key Chain Yu-Gi-Oh Charm', tag: 'Koleksi' },
  { id: 'gantungan-kunci-bunga', name: 'Key Chain Slytherin Charm', category: 'key-chain', description: 'Key Chain charm hijau-perak dengan batu dekoratif dan desain klasik.', specification: 'Charm dekoratif · Key Chain metal', price: 35000, image: 'image/Keychain_Slytherin_Charm.png', imageAlt: 'Foto produk Key Chain Slytherin Charm', tag: 'Hijau-perak' },
]);

export const findProduct = (id) => PRODUCTS.find((product) => product.id === id);
export const filterProducts = (query, category) => {
  const keyword = query.trim().toLocaleLowerCase('id-ID');
  return PRODUCTS.filter((product) =>
    (category === 'all' || product.category === category) &&
    product.name.toLocaleLowerCase('id-ID').includes(keyword));
};
