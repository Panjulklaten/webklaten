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
