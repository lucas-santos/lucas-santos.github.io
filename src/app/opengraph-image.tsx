import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Lucas Santos";
export const size = {
  width: 1920,
  height: 1080,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#1f2937",
          padding: "0 160px",
        }}
      >
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
    ),
    {
      ...size,
    },
  );
}
