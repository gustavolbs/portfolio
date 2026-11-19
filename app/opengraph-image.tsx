import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { publicProfile as profile } from "@/content/public-profile";

export const alt = `${profile.shortName}, Senior Frontend, Product & Forward Deployed Engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

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
          padding: "56px 64px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#f6f4ef",
          color: "#1b1d1f",
          fontFamily: "Geist",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "26px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <svg width="22" height="27" viewBox="0 0 18 22">
              <path d="M3 2v15a3 3 0 0 0 3 3h10" fill="none" stroke="#ff5b2e" strokeWidth="2.4" strokeLinecap="round" />
              <circle cx="3" cy="2.4" r="2.2" fill="#ff5b2e" />
            </svg>
            <span>gustavo bispo</span>
          </div>
          <span style={{ color: "#6b6a66", fontSize: "20px" }}>Senior Frontend, Product &amp; Forward Deployed Engineer</span>
        </div>

        {/* satori has no inline flow: one span per word so the orange period stays on the last word */}
        <div
          style={{ display: "flex", flexWrap: "wrap", columnGap: "24px", maxWidth: "1040px", fontSize: "96px", lineHeight: 0.98, letterSpacing: "-0.045em" }}
        >
          {"I build interfaces that hold up in".split(" ").map((word) => (
            <span key={word}>{word}</span>
          ))}
          <div style={{ display: "flex" }}>
            <span>production</span>
            <span style={{ color: "#ff5b2e", marginLeft: "-4px" }}>.</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "22px",
            borderTop: "1px solid rgba(27, 29, 31, 0.14)",
            color: "#6b6a66",
            fontSize: "20px",
          }}
        >
          <span>6+ years · React · TypeScript · Next.js · apps on the App Store</span>
          <span style={{ color: "#1b1d1f" }}>iam.linearcraft.dev</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Geist", data: fontData, style: "normal", weight: 400 }],
    },
  );
}
