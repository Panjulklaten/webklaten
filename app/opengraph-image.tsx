import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "webklaten.biz.id — Jasa Pembuatan Website";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#f5f6f1",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              backgroundColor: "#1b7a5c",
              display: "flex",
            }}
          />
          <div style={{ fontSize: 28, color: "#55655f", letterSpacing: 2 }}>
            JASAWEB.BIZ.ID
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#10201c",
              lineHeight: 1.05,
              display: "flex",
            }}
          >
            Jasa Pembuatan Website
          </div>
          <div style={{ fontSize: 40, color: "#d9531e", fontWeight: 600, display: "flex" }}>
            Mulai Rp200.000 — Tanpa Biaya Bulanan
          </div>
        </div>
        <div style={{ display: "flex", gap: 40 }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 22, color: "#55655f" }}>Bukti</div>
            <div style={{ fontSize: 28, color: "#10201c", fontWeight: 600 }}>
              5+ Website Live
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 22, color: "#55655f" }}>Terverifikasi</div>
            <div style={{ fontSize: 28, color: "#10201c", fontWeight: 600 }}>
              Page Speed &amp; GSC
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
