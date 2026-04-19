"use client";

import { useEffect, useRef, useState } from "react";
import { withBasePath } from "@/lib/asset";

export default function BGMPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const audio = new Audio(withBasePath("/music/paulyudin-romantic-wedding-piano-160698.mp3"));
    audio.loop = true;
    audio.preload = "auto";
    audio.volume = 0;

    audioRef.current = audio;

    const fadeIn = () => {
      let vol = 0;
      const target = 0.45;

      const timer = window.setInterval(() => {
        vol += 0.03;
        audio.volume = Math.min(vol, target);

        if (vol >= target) {
          window.clearInterval(timer);
        }
      }, 180);
    };

    const tryAutoplay = async () => {
      try {
        await audio.play();
        fadeIn();
      } catch {
        setShowButton(true);
      }
    };

    tryAutoplay();

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  const handlePlay = async () => {
    if (!audioRef.current) return;

    try {
      await audioRef.current.play();

      let vol = 0;
      const target = 0.45;

      const timer = window.setInterval(() => {
        vol += 0.03;
        audioRef.current!.volume = Math.min(vol, target);

        if (vol >= target) {
          window.clearInterval(timer);
        }
      }, 180);

      setShowButton(false);
    } catch {
      // 재생 실패 시 아무 처리 안 함
    }
  };

  if (!showButton) return null;

  return (
    <button
      onClick={handlePlay}
      aria-label="배경음악 재생"
      className="fixed bottom-6 right-6 z-[100] w-12 h-12 rounded-full bg-white/80 backdrop-blur flex items-center justify-center shadow-md text-lg"
    >
      🎵
    </button>
  );
}