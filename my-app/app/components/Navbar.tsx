export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6 border-b">
      <a href="/" className="text-xl font-semibold tracking-wide">
        Patrícia Gea
      </a>

      <div className="hidden md:flex gap-8 text-sm">
        <a href="/work" className="hover:opacity-60">Work</a>
        <a href="/about" className="hover:opacity-60">About</a>
        <a href="/contact" className="hover:opacity-60">Contact</a>
      </div>

      <div className="flex gap-3 items-center">
        <a href="/shop" className="text-sm font-medium">
          Shop
        </a>

        <a
          href="/booking"
          className="bg-black text-white text-sm px-4 py-2 rounded-full hover:opacity-80"
        >
          Book
        </a>
      </div>
    </nav>
  );
}