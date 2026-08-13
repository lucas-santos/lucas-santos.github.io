import { ImageResponse } from "next/og";
import { join } from "node:path";
import { readFile } from "node:fs/promises";

export const dynamic = "force-static";
export const alt = "Lucas Santos";
export const size = {
  width: 1920,
  height: 1080,
};
export const contentType = "image/png";

export default async function Image() {
  const photoData = await readFile(
    join(process.cwd(), "public", "images", "profile.jpg"),
  );
  const photoSrc = `data:image/jpeg;base64,${photoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          backgroundColor: "#1f2937",
          padding: "0 160px",
        }}
      >
        <img
          src={photoSrc}
          width={360}
          height={360}
          style={{
            borderRadius: "50%",
            objectFit: "cover",
            marginRight: 80,
          }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 130,
              fontWeight: 700,
              color: "white",
              lineHeight: "140px",
            }}
          >
            Lucas Santos
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 48,
              color: "#FFDA6B",
              marginTop: 24,
            }}
          >
            Mobile Developer · React Native
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
