import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-steel px-6 pt-16 pb-10 lg:px-14">
      <div className="mx-auto flex max-w-6xl items-center border-b border-white/8 pb-10">
        <Image
          src="/heartland-logo-white.png"
          alt="Heartland Industrial Marketing"
          width={563}
          height={115}
          className="h-7 w-auto opacity-80"
        />
      </div>
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 pt-7">
        <nav className="flex flex-wrap gap-8 font-label text-xs font-medium tracking-[0.12em] text-white/55 uppercase">
          <Link href="/services" className="transition-colors hover:text-white">
            Services
          </Link>
          <Link
            href="/marketing-agency-for-manufacturing"
            className="transition-colors hover:text-white"
          >
            For Manufacturing
          </Link>
          <Link
            href="/services/seo-for-manufacturers"
            className="transition-colors hover:text-white"
          >
            SEO
          </Link>
          <Link
            href="/services/lead-generation-for-manufacturers"
            className="transition-colors hover:text-white"
          >
            Lead Generation
          </Link>
          <Link href="/about" className="transition-colors hover:text-white">
            About
          </Link>
          <Link href="/blog" className="transition-colors hover:text-white">
            Blog
          </Link>
          <Link href="/contact" className="transition-colors hover:text-white">
            Contact
          </Link>
        </nav>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1 font-body text-xs text-white/40">
          <p>&copy; {year} Heartland Industrial Marketing. All rights reserved.</p>
          <Link href="/privacy" className="transition-colors hover:text-white/70">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
