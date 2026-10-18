import { ImageResponse } from "next/og";

export const alt = "VisiMove - control your computer with your eyes";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Link-preview card (WhatsApp, LinkedIn, X). Same eye-with-cursor mark as src/app/icon.svg.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 56,
          padding: "0 96px",
          color: "#eef2ff",
          background:
            "radial-gradient(circle at 20% 30%, rgba(110,231,255,0.22), transparent 45%), linear-gradient(135deg, #050816 0%, #0a1230 100%)",
        }}
      >
        <svg width="260" height="260" viewBox="0 0 64 64">
          <defs>
            <linearGradient id="g" x1="6" y1="14" x2="58" y2="50" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#7cf1ff" />
              <stop offset="1" stopColor="#4f8dfd" />
            </linearGradient>
          </defs>
          <path
            d="M7 32C14.5 19.5 23 14.5 32 14.5S49.5 19.5 57 32C49.5 44.5 41 49.5 32 49.5S14.5 44.5 7 32Z"
            fill="none"
            stroke="url(#g)"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <circle cx="32" cy="32" r="11.5" fill="url(#g)" />
          <path d="M28.6 24.6v14.6l3.7-3.5 2.6 5.6 2.6-1.2-2.6-5.5h5.1z" fill="#070b1d" />
        </svg>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 104, fontWeight: 800, letterSpacing: -3 }}>
            Visi<span style={{ color: "#6ee7ff" }}>Move</span>
          </div>
          <div style={{ fontSize: 40, marginTop: 12, color: "rgba(238,242,255,0.8)" }}>
            Control your computer with your eyes
          </div>
          <div style={{ fontSize: 28, marginTop: 28, color: "rgba(110,231,255,0.85)" }}>
            Any webcam · Dwell to click · 100% offline · Windows
          </div>
        </div>
      </div>
    ),
    size,
  );
}
