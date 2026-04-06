export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6">
      
      <p className="uppercase tracking-widest text-gray-500 text-sm">
        Tattoo Artist & Frontend Developer
      </p>

      <h1 className="text-5xl md:text-6xl font-bold mt-6">
        Minimal work.<br />
        Strong identity.
      </h1>

      <p className="mt-6 text-gray-600 max-w-xl">
        Tattoo, illustration, painting and digital design based in Stockholm.
      </p>

      <div className="flex gap-4 mt-10">
        <a
          href="/booking"
          className="bg-black text-white px-6 py-3 rounded-full"
        >
          Book a session
        </a>

        <a href="/work" className="underline">
          View work
        </a>
      </div>

    </main>
  );
}