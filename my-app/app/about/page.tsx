"use client";

import { useEffect, useState } from "react";

export default function AboutPage() {
  const [imageIndex, setImageIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const images = [
    "/about/me-1.jpg",
    "/about/me-2.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipping(true);

      // duração da rotação (2 giros visuais)
      setTimeout(() => {
        setIsFlipping(false);

        setImageIndex((prev) => (prev === 0 ? 1 : 0));
      }, 2000);

    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-black">

      {/* AVATAR */}
      <div className="relative w-60 h-60">

        <div
          className={`w-full h-full rounded-full overflow-hidden border transition-transform duration-2000 ${
            isFlipping ? "rotate-y-[720deg]" : "rotate-y-0"
          }`}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <img
            src={images[imageIndex]}
            className="w-full h-full object-cover"
          />
        </div>

      </div>

      {/* TEXTO */}
      <div className="mt-10 text-center max-w-xl">
        <h1 className="text-3xl font-semibold">About me</h1>
        <p className="text-gray-600 mt-4">
          Tattoo artist, designer and illustrator based in Stockholm.
        </p>
      </div>

    </main>
  );
}