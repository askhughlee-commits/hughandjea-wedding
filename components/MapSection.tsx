"use client";

import { WEDDING_DATA } from "@/data/wedding-data";
import { Map, MapMarker, useKakaoLoader } from "react-kakao-maps-sdk";

export default function MapSection() {
  const { venue } = WEDDING_DATA;

  useKakaoLoader({
    appkey: process.env.NEXT_PUBLIC_KAKAO_APP_KEY || "",
    libraries: ["services", "clusterer"],
  });

  return (
    <div className="w-full soft-card overflow-hidden h-[360px]">
      <Map
        center={venue.coordinates}
        level={4}
        style={{ width: "100%", height: "100%" }}
      >
        <MapMarker position={venue.coordinates}>
          <div
            style={{
              padding: "2px 6px",
              color: "#111",
              fontFamily: "var(--font-sans)",
              fontSize: "12px",
              lineHeight: 1.2,
              whiteSpace: "nowrap",
              borderRadius: "999px",
              background: "white",
              border: "1px solid rgba(0,0,0,0.08)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            {venue.name}
          </div>
        </MapMarker>
      </Map>
    </div>
  );
}
