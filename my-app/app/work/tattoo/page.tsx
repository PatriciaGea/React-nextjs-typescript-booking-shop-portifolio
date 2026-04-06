"use client";

import Gallery from "../../components/Gallery";

const styles = [
  {
    id: "fine-line",
    name: "Fine Line",
    desc: "Minimal and delicate linework",
    images: Array.from(
      { length: 20 },
      (_, i) => `/tattoo/fine-line/${i + 1}.jpg`
    ),
  },
  {
    id: "geometric",
    name: "Graphic Geometric",
    desc: "Bold shapes, symmetry and structure",
    images: Array.from(
      { length: 20 },
      (_, i) => `/tattoo/geometric/${i + 1}.jpg`
    ),
  },
  {
    id: "ornamental",
    name: "Ornamental",
    desc: "Flowing decorative compositions",
    images: Array.from(
      { length: 20 },
      (_, i) => `/tattoo/ornamental/${i + 1}.jpg`
    ),
  },
  {
    id: "neo-traditional",
    name: "Neo Traditional",
    desc: "Classic tattoo style with modern detail",
    images: Array.from(
      { length: 20 },
      (_, i) => `/tattoo/neo-traditional/${i + 1}.jpg`
    ),
  },
];

export default function TattooPage() {
  return (
    <main className="bg-white min-h-screen">

      <section className="px-10 py-20">
        <h1 className="text-5xl font-bold">Tattoo Work</h1>

        <p className="text-gray-600 mt-6 max-w-2xl leading-relaxed">
          A collection of tattoo projects across different styles, focusing on composition, detail and artistic identity.
        </p>

        <div className="flex flex-wrap gap-3 mt-10">
          {styles.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="px-4 py-2 border rounded-full text-sm hover:bg-black hover:text-white transition"
            >
              {s.name}
            </a>
          ))}
        </div>
      </section>

      {styles.map((style, index) => {
        const isDark = index % 2 === 1;

        return (
          <section
            key={style.id}
            id={style.id}
            className={
              isDark
                ? "bg-black text-white px-10 py-24"
                : "bg-white text-black px-10 py-24"
            }
          >

            <div className="max-w-3xl mb-12">
              <h2 className="text-4xl font-semibold tracking-tight">
                {style.name}
              </h2>

              <p
                className={
                  isDark
                    ? "text-gray-300 mt-4 leading-relaxed"
                    : "text-gray-600 mt-4 leading-relaxed"
                }
              >
                {style.desc}
              </p>
            </div>

            <Gallery images={style.images} dark={isDark} />

          </section>
        );
      })}
    </main>
  );
}