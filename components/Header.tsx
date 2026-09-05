import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="border-b border-white/10 bg-steel text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="shrink-0">
          <Image
            src="/heartland-logo-white.png"
            alt="Heartland Industrial Marketing"
            width={563}
            height={115}
            priority
            className="h-9 w-auto"
          />
        </Link>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-brand px-5 py-2 font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Get a Free Audit
          </Link>
        </nav>
      </div>
    </header>
  );
}
