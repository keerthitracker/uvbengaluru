import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #0D0D0D 0%, #171717 55%, #321110 100%)",
          color: "#FFFFFF",
          padding: "56px 64px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 28,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "#B8B8B8",
          }}
        >
          <span>Official Ultraviolette Dealership</span>
          <span>Bengaluru</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              lineHeight: 0.95,
              textTransform: "uppercase",
            }}
          >
            UV Bengaluru
          </div>
          <div
            style={{
              fontSize: 34,
              color: "#FF3B3B",
              textTransform: "uppercase",
              letterSpacing: 2,
            }}
          >
            Electric Performance • Test Rides • Nagarbhavi
          </div>
          <div
            style={{
              maxWidth: 920,
              fontSize: 28,
              lineHeight: 1.3,
              color: "#DADADA",
            }}
          >
            Explore the Ultraviolette lineup, compare models, and book your
            next ride with UV Bengaluru.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 26,
            color: "#EDEDED",
          }}
        >
          <span>{siteConfig.phoneDisplay}</span>
          <span>{siteConfig.url.replace("https://", "")}</span>
        </div>
      </div>
    ),
    size,
  );
}
