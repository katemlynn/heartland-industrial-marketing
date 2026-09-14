"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-white/10 bg-steel text-white">
      <div className="flex items-center justify-between gap-6 px-6 py-6 lg:px-14 xl:px-20 2xl:px-24">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <Image
            src="/heartland-logo-white.png"
            alt="Heartland Industrial Marketing"
            width={563}
            height={115}
            priority
            className="h-9 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-x-10 font-label text-[13px] font-medium tracking-[0.14em] uppercase lg:flex">
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

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-9 w-9 shrink-0 items-center justify-center lg:hidden"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      <div
        className="grid overflow-hidden border-t border-white/10 transition-[grid-template-rows] duration-300 ease-out lg:hidden"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <nav className="flex flex-col gap-1 px-6 py-6 font-label text-sm font-medium tracking-[0.14em] uppercase">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn btn-solid mt-3 justify-center"
            >
              <span>Get a Free Audit</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
