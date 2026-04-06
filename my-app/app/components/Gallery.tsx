"use client";

import { useState } from "react";

type Props = {
  images: string[];
  dark?: boolean;
};

export default function Gallery({ images, dark }: Props) {
  const [visible, setVisible] = useState(10);

  const loadMore = () => {
    setVisible((prev) => Math.min(prev + 5, images.length));
  };

  return (
    <div className="mt-10">

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {images.slice(0, visible).map((img, i) => (
          <div key={i} className="overflow-hidden rounded-xl group">
            <img
              src={img}
              className="w-full h-[170px] object-cover group-hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>

      {/* BOTÃO */}
      {visible < images.length && (
        <button
          onClick={loadMore}
          className={
            dark
              ? "mt-8 px-6 py-2 border border-white rounded-full text-sm hover:bg-white hover:text-black transition"
              : "mt-8 px-6 py-2 border border-black rounded-full text-sm hover:bg-black hover:text-white transition"
          }
        >
          Load more
        </button>
      )}

    </div>
  );
}