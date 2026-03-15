"use client";

import { WEDDING_DATA } from "@/data/wedding-data";
import { Map, MapMarker, useKakaoLoader } from "react-kakao-maps-sdk";

export default function MapSection() {
  const { venue } = WEDDING_DATA;

  const [loading, error] = useKakaoLoader({
    appkey: "71fb1a03f2b03cb5f6f697f5a3c5303b",
    libraries: ["services", "clusterer"],
  });

  if (loading) {
    return (
      <div className="w-full soft-card overflow-hidden h-[360px] flex items-center justify-center">
        지도 불러오는 중...
      </div>
    );
  }

  if (error) {
    console.error("Kakao map load error:", error);
    return (
      <div className="w-full soft-card overflow-hidden h-[360px] flex items-center justify-center">
        카카오맵 로드 실패
      </div>
    );
  }

  return (
    <div className="w-full soft-card overflow-hidden h-[360px]">
      <Map
        center={venue.coordinates}
        level={4}
        style={{ width: "100%", height: "100%" }}
      >
        <MapMarker position={venue.coordinates} />
      </Map>
    </div>
  );
}
