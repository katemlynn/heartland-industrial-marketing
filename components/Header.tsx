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
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-6 lg:px-14">
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
        <nav className="flex flex-wrap items-center gap-x-10 gap-y-2 font-label text-[13px] font-medium tracking-[0.14em] uppercase">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative pb-1 text-white/70 transition-colors hover:text-white"
            >
              {link.label}
              <span className="absolute inset-x-0 -bottom-px h-px origin-left scale-x-0 bg-brand transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
          <Link href="/contact" className="btn btn-solid">
            <span>Get a Free Audit</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
