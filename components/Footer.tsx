import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 bg-steel text-white/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm">
          &copy; {year} Heartland Industrial Marketing. All rights reserved.
        </p>
        <nav className="flex gap-6 text-sm">
          <Link href="/services" className="hover:text-white">
            Services
          </Link>
          <Link href="/about" className="hover:text-white">
            About
          </Link>
          <Link href="/blog" className="hover:text-white">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-white">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
