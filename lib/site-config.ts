// Data inti bisnis jasaweb.biz.id — ubah di sini, otomatis tersinkron di seluruh halaman.

export const site = {
  name: "jasaweb.biz.id",
  brand: "JasaWeb",
  tagline: "Jasa Pembuatan Website",
  domain: "jasaweb.biz.id",
  url: "https://jasaweb.biz.id",
  contactPerson: "Dian",
  whatsappRaw: "081270826212",
  priceFrom: 200000,
  description:
    "Jasa pembuatan website profesional mulai Rp200.000. Tanpa biaya bulanan, tanpa biaya hosting tersembunyi. Website nyata dengan performa terbukti — bukan template blogspot atau website gratisan.",
};

/** Nomor WhatsApp dalam format internasional (62...), dipakai untuk link wa.me */
export const whatsappNumber = site.whatsappRaw.replace(/^0/, "62");

export function waLink(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const defaultWaMessage =
  "Halo Rio, saya tertarik dengan jasa pembuatan website di jasaweb.biz.id. Boleh minta info lebih lanjut?";

export type PortfolioSite = {
  name: string;
  url: string;
  category: string;
  note: string;
};

/**
 * Website klien nyata — bisa langsung dicek pengunjung.
 * Setiap situs punya link kredit di footer yang mengarah balik ke jasaweb.biz.id
 * sebagai bukti keaslian portofolio.
 */
export const portfolioSites: PortfolioSite[] = [
  {
    name: "asuransibatam.com",
    url: "https://asuransibatam.com",
    category: "Broker Asuransi",
    note: "Website dwibahasa (ID/EN) dengan puluhan artikel & kalkulator premi.",
  },
  {
    name: "asuransijogja.biz.id",
    url: "https://asuransijogja.biz.id",
    category: "Broker Asuransi",
    note: "Struktur bilingual /id /en, skor PageSpeed & aksesibilitas tinggi.",
  },
  {
    name: "bengkulutravel.com",
    url: "https://bengkulutravel.com",
    category: "Travel & Transportasi",
    note: "Sistem booking dengan notifikasi WhatsApp otomatis.",
  },
  {
    name: "rpmtravel.co.id",
    url: "https://rpmtravel.co.id",
    category: "Travel & Transportasi",
    note: "Dilengkapi dashboard admin untuk kelola pemesanan.",
  },
  {
    name: "insulasiatap.biz.id",
    url: "https://insulasiatap.biz.id",
    category: "Jasa & UMKM",
    note: "Website profil usaha untuk jasa insulasi atap, dioptimasi untuk pencarian lokal.",
  },
];

export type WebsiteTypeExample = {
  siteName: string;
  siteUrl: string;
  file: string;
};

export type WebsiteType = {
  slug: string;
  title: string;
  description: string;
  examples: WebsiteTypeExample[];
};

/**
 * Jenis-jenis website yang bisa dibuat, masing-masing dengan contoh
 * screenshot dari website klien nyata. File belum ada — tempel di path
 * yang tertera, gambar otomatis tampil menggantikan placeholder.
 */
export const websiteTypes: WebsiteType[] = [
  {
    slug: "portofolio-perusahaan",
    title: "Website Portofolio Perusahaan",
    description:
      "Cocok untuk perusahaan, konsultan, atau penyedia jasa profesional yang ingin tampil kredibel di mata calon klien. Memuat profil usaha, daftar layanan, rekam jejak, dan kontak — disusun supaya pengunjung sudah percaya sebelum sempat menghubungi Anda.",
    examples: [
      {
        siteName: "asuransibatam.com",
        siteUrl: "https://asuransibatam.com",
        file: "/images/jenis-website/portofolio-perusahaan.png",
      },
    ],
  },
  {
    slug: "produk-penjualan",
    title: "Website Produk Penjualan",
    description:
      "Dirancang untuk bisnis yang menjual produk atau paket jasa secara langsung — lengkap dengan katalog, daftar harga, dan alur pemesanan yang jelas. Bisa disambungkan ke checkout otomatis, payment gateway QRIS, atau tombol pemesanan langsung ke WhatsApp, menyesuaikan model bisnis Anda.",
    examples: [
      {
        siteName: "insulasiatap.biz.id",
        siteUrl: "https://insulasiatap.biz.id",
        file: "/images/jenis-website/produk-penjualan-1.png",
      },
      {
        siteName: "kreditmotorklaten.biz.id",
        siteUrl: "https://kreditmotorklaten.biz.id",
        file: "/images/jenis-website/produk-penjualan-2.png",
      },
    ],
  },
  {
    slug: "marketing",
    title: "Website Marketing",
    description:
      "Difokuskan untuk menjaring calon pelanggan lewat pencarian Google — dilengkapi artikel, halaman layanan yang dioptimasi SEO, dan struktur yang membantu website naik peringkat. Pilihan tepat kalau tujuan utama Anda adalah mendatangkan leads baru, bukan sekadar tampil sebagai company profile.",
    examples: [
      {
        siteName: "asuransijogja.biz.id",
        siteUrl: "https://asuransijogja.biz.id",
        file: "/images/jenis-website/marketing.png",
      },
    ],
  },
  {
    slug: "jasa-travel",
    title: "Website Jasa & Travel",
    description:
      "Dibuat khusus untuk bisnis jasa perjalanan dan transportasi — dilengkapi sistem booking, pengecekan jadwal, hingga notifikasi otomatis ke WhatsApp setiap ada pemesanan baru. Bisa dikembangkan lebih jauh sampai ke dashboard admin untuk kelola seluruh pesanan dari satu tempat.",
    examples: [
      {
        siteName: "bengkulutravel.com",
        siteUrl: "https://bengkulutravel.com",
        file: "/images/jenis-website/jasa-travel-1.png",
      },
      {
        siteName: "rpmtravel.co.id",
        siteUrl: "https://rpmtravel.co.id",
        file: "/images/jenis-website/jasa-travel-2.png",
      },
    ],
  },
];

export type ProofShot = {
  slug: string;
  file: string;
  title: string;
  description: string;
};

/**
 * Slot bukti visual. File belum ada — tempel screenshot ke path berikut,
 * nama file harus persis sama, gambar akan otomatis tampil menggantikan placeholder.
 */
export const proofShots: ProofShot[] = [
  {
    slug: "pagespeed",
    file: "/images/proof/pagespeed-score.png",
    title: "Hasil Pengujian Page Speed",
    description:
      "Skor performa website klien, diuji langsung lewat PageSpeed Insights.",
  },
  {
    slug: "gsc-graph",
    file: "/images/proof/gsc-performance-graph.png",
    title: "Grafik Performa Google Search Console",
    description: "Tren impresi & posisi rata-rata di halaman pencarian Google.",
  },
  {
    slug: "gsc-clicks",
    file: "/images/proof/gsc-clicks-28days.png",
    title: "Notifikasi Klik 28 Hari Terakhir",
    description: "Bukti nyata website klien mendapat kunjungan dari Google Search.",
  },
  {
    slug: "footer-credit",
    file: "/images/proof/client-footer-credit.png",
    title: "Kredit di Footer Website Klien",
    description:
      "Klik bagian kredit di footer website klien mana pun di atas — akan mengarah ke halaman ini.",
  },
  {
    slug: "admin-dashboard",
    file: "/images/proof/admin-dashboard-rpm.png",
    title: "Dashboard Admin",
    description:
      "Contoh dashboard admin pada rpmtravel.co.id untuk kelola pesanan & konten.",
  },
];
