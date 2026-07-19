import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#10201c",
          borderRadius: 14,
        }}
      >
        <div
          style={{
            width: 20,
            height: 20,
            borderRadius: 999,
            backgroundColor: "#1b7a5c",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
