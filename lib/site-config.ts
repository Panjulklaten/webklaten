// Data inti bisnis jasaweb.biz.id — ubah di sini, otomatis tersinkron di seluruh halaman.

export const site = {
  name: "jasaweb.biz.id",
  brand: "JasaWeb",
  tagline: "Jasa Pembuatan Website",
  domain: "jasaweb.biz.id",
  url: "https://jasaweb.biz.id",
  contactPerson: "Rio",
  whatsappRaw: "08131556592",
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
    name: "insulasiatapklaten.biz.id",
    url: "https://insulasiatapklaten.biz.id",
    category: "Jasa & UMKM",
    note: "Website profil usaha untuk jasa insulasi atap, dioptimasi untuk pencarian lokal.",
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
