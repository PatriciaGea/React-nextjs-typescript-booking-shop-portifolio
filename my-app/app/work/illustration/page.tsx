const images = [
  "/tattoo1.jpg",
  "/tattoo2.jpg",
  "/tattoo3.jpg",
];

export default function TattooPage() {
  return (
    <main className="min-h-screen px-8 py-16">
      <h1 className="text-4xl font-bold mb-10">Tattoo Work</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-2xl group cursor-pointer"
          >
            <img
              src={img}
              className="w-full h-[300px] object-cover transition group-hover:scale-110 duration-300"
            />

            <div className="p-3 text-sm text-gray-500">
              Project {i + 1}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}