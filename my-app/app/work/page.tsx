import Link from "next/link";

const categories = [
  { name: "Tattoo", href: "/work/tattoo" },
  { name: "Illustration", href: "/work/illustration" },
  { name: "Painting", href: "/work/painting" },
  { name: "Decoration", href: "/work/decoration" },
  { name: "Studio Projects", href: "/work/studio" },
  { name: "Entrepreneurship", href: "/work/entrepreneurship" },
  { name: "UX Design", href: "/work/ux" },
  { name: "Frontend Dev", href: "/work/frontend" },
];

export default function WorkPage() {
  return (
    <main className="min-h-screen px-8 py-16">
      <h1 className="text-4xl font-bold mb-10">Selected Work</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {categories.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="border rounded-2xl p-6 hover:scale-[1.02] transition bg-white shadow-sm hover:shadow-md"
          >
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-sm text-gray-500 mt-2">
              View projects
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}