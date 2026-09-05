import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-steel text-white/70">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <p className="text-sm font-medium text-white">
          Marketing built for metals and manufacturing companies.
        </p>
        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} Heartland Industrial Marketing. All rights reserved.</p>
          <nav className="flex gap-6">
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
      </div>
    </footer>
  );
}
