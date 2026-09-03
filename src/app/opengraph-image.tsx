import { ImageResponse } from "next/og";

export const alt = "Teeth Done in Turkey — Veneers & Dental Implants for UK Patients";
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
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 60%, #2563eb 100%)",
          color: "white",
          fontFamily: "sans-serif",
          padding: "80px",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 56, fontWeight: 800, lineHeight: 1.15, display: "flex", flexDirection: "column" }}>
          <span>Teeth Done in Turkey</span>
        </div>
        <div style={{ fontSize: 30, marginTop: 24, color: "#bfdbfe", display: "flex" }}>
          Veneers &amp; Dental Implants for UK Patients — Save up to 70%
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 24,
            fontWeight: 700,
            background: "rgba(255,255,255,0.15)",
            padding: "14px 32px",
            borderRadius: 999,
            display: "flex",
          }}
        >
          JCI-Accredited Clinics · Monthly Payment Plans
        </div>
      </div>
    ),
    { ...size }
  );
}
