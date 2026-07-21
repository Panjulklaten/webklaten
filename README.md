# jasaweb.biz.id

Landing page jasa pembuatan website. Next.js 15.5.20, App Router, TypeScript,
Tailwind CSS v4.

## Menempel screenshot bukti nyata

Halaman ini punya 5 slot gambar yang otomatis menampilkan placeholder
sampai file aslinya ditempel di `public/images/proof/`. Nama file harus
persis sama — begitu ditempel, gambar langsung tampil menggantikan
placeholder tanpa perlu ubah kode.

| File | Isi |
|---|---|
| `public/images/proof/pagespeed-score.png` | Screenshot hasil pengujian PageSpeed Insights |
| `public/images/proof/gsc-performance-graph.png` | Grafik performa Google Search Console |
| `public/images/proof/gsc-clicks-28days.png` | Notifikasi klik 28 hari terakhir dari GSC |
| `public/images/proof/client-footer-credit.png` | Screenshot bagian kredit di footer salah satu website klien |
| `public/images/proof/admin-dashboard-rpm.png` | Screenshot dashboard admin (rpmtravel.co.id) |

## Screenshot jenis website

6 slot gambar contoh untuk section "Jenis Website", ditempel di
`public/images/jenis-website/`. Format PNG, rasio 4:3, disarankan
~1200×900px, di bawah ±500KB per file.

| File | Sumber screenshot |
|---|---|
| `public/images/jenis-website/portofolio-perusahaan.png` | asuransibatam.com |
| `public/images/jenis-website/produk-penjualan-1.png` | insulasiatap.biz.id |
| `public/images/jenis-website/produk-penjualan-2.png` | kreditmotorklaten.biz.id |
| `public/images/jenis-website/marketing.png` | asuransijogja.biz.id |
| `public/images/jenis-website/jasa-travel-1.png` | bengkulutravel.com |
| `public/images/jenis-website/jasa-travel-2.png` | rpmtravel.co.id |


## Data bisnis

Nomor WhatsApp, daftar portofolio, dan teks slot bukti semua terpusat di
`lib/site-config.ts` — ubah di satu tempat, otomatis konsisten di seluruh
halaman.

## Menjalankan lokal

```bash
npm install
npm run dev
```

## Catatan build

`next build` butuh akses ke Google Fonts (Space Grotesk, IBM Plex Sans,
IBM Plex Mono) saat build time — normal di Vercel, tapi bisa gagal di
sandbox tanpa akses fonts.googleapis.com. Validasi tipe cukup pakai:

```bash
npx tsc --noEmit
```
