export default function Footer() {
  return (
    <footer className="border-t p-6 mt-10 flex justify-between text-sm">
      <p>© {new Date().getFullYear()} Patrícia Gea</p>

      <div className="flex gap-4">
        <a href="https://instagram.com">Instagram</a>
        <a href="mailto:email@email.com">Email</a>
      </div>
    </footer>
  );
}