import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Heartland Industrial Marketing — Marketing Agency for Metals & Manufacturing Companies";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const logoData = await readFile(
  join(process.cwd(), "public/heartland-logo-white.png"),
  "base64"
);
const logoSrc = `data:image/png;base64,${logoData}`;

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#0c0d0f",
          padding: "80px",
        }}
      >
        <img src={logoSrc} width={420} height={86} alt="" />
        <div
          style={{
            marginTop: 48,
            fontSize: 44,
            fontWeight: 700,
            color: "white",
            maxWidth: 950,
            lineHeight: 1.25,
          }}
        >
          Stop losing sales to competitors who just market better.
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 26,
            color: "#dd4a31",
            fontWeight: 600,
            letterSpacing: 1,
            textTransform: "uppercase",
          }}
        >
          Marketing Agency for Metals &amp; Manufacturing Companies
        </div>
      </div>
    ),
    { ...size }
  );
}
