import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { publicProfile as profile } from "@/content/public-profile";

export const alt = `${profile.shortName}, Senior Frontend & Product Engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const fontData = await readFile(
    join(process.cwd(), "node_modules/next/dist/compiled/@vercel/og/Geist-Regular.ttf"),
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          padding: "44px 48px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#f8f8f8",
          color: "#090909",
          fontFamily: "Geist",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: "24px",
            borderBottom: "1px solid rgba(67, 119, 210, 0.28)",
            fontSize: "22px",
          }}
        >
          <span>{profile.shortName}</span>
          <span style={{ color: "#0b57f4", fontSize: "16px" }}>
            Senior Frontend &amp; Product Engineer
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              width: "54px",
              height: "6px",
              display: "flex",
              backgroundColor: "#0b57f4",
            }}
          />
          <div
            style={{
              maxWidth: "1060px",
              display: "flex",
              fontSize: "82px",
              lineHeight: 0.92,
              letterSpacing: "-0.055em",
            }}
          >
            I engineer interfaces that survive production.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "20px",
            borderTop: "1px solid rgba(67, 119, 210, 0.28)",
            color: "#0b57f4",
            fontSize: "15px",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          <span>6+ years / React / TypeScript / Next.js</span>
          <span>gustavobispo.com</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Geist", data: fontData, style: "normal", weight: 500 }],
    },
  );
}
