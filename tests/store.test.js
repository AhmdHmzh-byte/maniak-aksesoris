import test from 'node:test';
import assert from 'node:assert/strict';
import { CATEGORIES, PRODUCTS, filterProducts } from '../js/data.js';
import { quote, setQuantity } from '../js/cart.js';
import { emptyState, loadState, sanitizeState, saveState } from '../js/storage.js';
import { buildMessage, buildWhatsAppUrl, normalizePhone, validBusinessNumber, validateCheckout } from '../js/checkout.js';
import { BUSINESS } from '../js/config.js';

const state = () => ({ ...emptyState(), items: [{ productId: 'kalung-bunga', quantity: 2 }, { productId: 'stiker-lucu', quantity: 1 }] });
const contact = { name: 'Pembeli <A> & "B"', phone: '+62 812-3456-7890' };

test('20 unique accessory products cover all categories and combine search/filter', () => {
  assert.equal(PRODUCTS.length, 20);
  assert.equal(new Set(PRODUCTS.map((product) => product.id)).size, 20);
  assert.equal(PRODUCTS.find((product) => product.id === 'enamel-pin-kucing').name, 'Pin Enamel Abbey Road');
  assert.ok(PRODUCTS.every((product) => /^(image\/.*\.png|assets\/images\/.*\.svg)$/.test(product.image)));
  assert.equal(PRODUCTS.find((product) => product.id === 'enamel-pin-kucing').image, 'image/Abbey_Road_Cats_Beatles.png');
  assert.deepEqual(
    Object.fromEntries(CATEGORIES.slice(1).map((category) => [
      category.id,
      PRODUCTS.filter((product) => product.category === category.id).length,
    ])),
    { kalung: 4, pin: 4, gelang: 4, cincin: 4, 'key-chain': 3, stiker: 1 },
  );
  assert.equal(filterProducts('', 'key-chain').length, 3);
  assert.equal(filterProducts('', 'stiker').length, 1);
  assert.equal(filterProducts(' KALUNG ', 'kalung').length, 4);
  assert.equal(filterProducts('kalung', 'pin').length, 0);
  assert.equal(filterProducts('', 'all').length, 20);
});

test('cart merges same ID, rejects invalid quantities, and calculates accessory totals', () => {
  let items = setQuantity([], 'kalung-bunga', 1);
  items = setQuantity(items, 'kalung-bunga', 2);
  assert.equal(items.length, 1);
  assert.equal(items[0].quantity, 2);
  for (const value of [0, -1, 1.5, 100, NaN, '2']) assert.throws(() => setQuantity(items, 'kalung-bunga', value), RangeError);
  assert.throws(() => setQuantity(items, 'unknown', 1), RangeError);
  const estimate = quote(state());
  assert.equal(estimate.total, 203000);
  assert.equal(estimate.units, 3);
  assert.deepEqual(estimate.lines.map((line) => line.subtotal), [178000, 25000]);
});

test('storage excludes contacts and prices; corrupted and denied storage recover safely', () => {
  let stored;
  const storage = { setItem: (_, value) => { stored = value; }, getItem: () => stored };
  assert.ok(saveState({ ...state(), name: 'Private', phone: '081234567890' }, () => storage));
  assert.equal(stored.includes('Private'), false);
  assert.equal(stored.includes('phone'), false);
  assert.equal(stored.includes('price'), false);
  assert.deepEqual(loadState(() => storage).state, state());
  assert.equal(loadState(() => ({ getItem: () => '{bad' })).failed, true);
  assert.equal(loadState(() => { throw Error('denied'); }).failed, true);
  assert.equal(saveState(state(), () => { throw Error('quota'); }), false);
  assert.deepEqual(sanitizeState({ schemaVersion: 2, items: state().items }), emptyState());
});

test('storage drops unknown IDs, invalid quantities, duplicate items and injected fields', () => {
  const draft = state();
  draft.items.push({ productId: 'unknown', quantity: 2 }, { productId: 'gelang-charm', quantity: 100 }, { productId: 'stiker-lucu', quantity: 5 }, null);
  draft.items[0].price = 1;
  assert.deepEqual(sanitizeState(draft), state());
});

test('contact validation supports local and international phones and rejects malformed input', () => {
  assert.equal(normalizePhone('0812 3456 7890'), '6281234567890');
  assert.equal(normalizePhone('+62 (812) 3456-7890'), '6281234567890');
  for (const value of ['123', '0812<script>', '0812+3456789', '1234567890123456']) assert.equal(normalizePhone(value), '');
  assert.equal(validateCheckout(state(), contact), null);
  assert.equal(validateCheckout(emptyState(), contact).field, 'cart-heading');
  assert.equal(validateCheckout(state(), { ...contact, name: ' ' }).field, 'customer-name');
  assert.equal(validateCheckout(state(), { ...contact, name: 'A\nB' }).field, 'customer-name');
  assert.equal(validateCheckout(state(), { ...contact, phone: 'abc' }).field, 'customer-phone');
});

test('WhatsApp draft includes accessory prices and final total', () => {
  const message = buildMessage(state(), contact);
  assert.ok(message.includes('203.000'));
  assert.ok(message.includes('Kalung Rantai Figaro × 2'));
  assert.ok(message.includes('ongkos kirim'));
  assert.ok(!message.includes('hiking'));
  const url = new URL(buildWhatsAppUrl('12025550123', state(), contact));
  assert.equal(url.hostname, 'wa.me');
  assert.equal(url.searchParams.get('text'), message);
  assert.equal(BUSINESS.whatsapp, '62895386698121');
  const configuredUrl = new URL(buildWhatsAppUrl(BUSINESS.whatsapp, state(), contact));
  assert.equal(configuredUrl.pathname, '/62895386698121');
  assert.equal(configuredUrl.searchParams.get('text'), message);
  assert.equal(validBusinessNumber(''), false);
  assert.equal(validBusinessNumber('+62812345678'), false);
  assert.throws(() => buildWhatsAppUrl('', state(), contact));
});
