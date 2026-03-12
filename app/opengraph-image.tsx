import { ImageResponse } from "next/og";

export const alt =
  "Firstline - The Commission Platform for Sellers, Agents & Affiliates";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    <div
      style={{
        background:
          "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px",
      }}
    >
      <div
        style={{
          fontSize: 72,
          fontWeight: 700,
          color: "white",
          marginBottom: 24,
          letterSpacing: "-0.02em",
        }}
      >
        Firstline
      </div>
      <div
        style={{
          fontSize: 28,
          color: "rgba(255, 255, 255, 0.72)",
          textAlign: "center",
          maxWidth: 700,
          lineHeight: 1.4,
        }}
      >
        The Commission Platform for Sellers, Agents & Affiliates
      </div>
      <div
        style={{
          display: "flex",
          gap: 32,
          marginTop: 48,
          color: "rgba(255, 255, 255, 0.5)",
          fontSize: 18,
        }}
      >
        <span>Split Payments</span>
        <span>Real-time Commissions</span>
        <span>Scale Globally</span>
      </div>
    </div>,
    { ...size },
  );
}
