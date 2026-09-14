"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

interface Service {
  title: string;
  tagline: string;
  description: string;
  items: string[];
}

export default function ServicesAccordion({ services }: { services: Service[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mx-auto max-w-4xl border-t border-white/16">
      {services.map((service, index) => {
        const isOpen = openIndex === index;
        return (
          <Reveal key={service.title} delay={(index % 4) * 60}>
            <div
              className={`border-b border-white/16 transition-colors ${
                isOpen ? "bg-white/[0.035]" : "hover:bg-white/[0.035]"
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center gap-6 px-4 py-7 text-left"
              >
                <span className="w-8 shrink-0 font-label text-[13px] font-semibold tracking-wide text-white/35">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 font-sans text-[19px] font-extrabold tracking-tight text-cream sm:text-[26px]">
                  {service.title}
                </span>
                <span className="hidden flex-1 text-right font-body text-[15px] text-white/50 sm:block">
                  {service.tagline}
                </span>
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-90 text-brand" : "text-white/40"
                  }`}
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div
                className="grid transition-[grid-template-rows] duration-[350ms] ease-out"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  <div className="px-4 pb-8 pl-[72px]">
                    <p className="mb-4 max-w-xl font-body text-[15px] leading-relaxed text-white/60">
                      {service.description}
                    </p>
                    <ul className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-2.5 font-body sm:grid-cols-2">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-white/68"
                        >
                          <span className="mt-1.5 h-[5px] w-[5px] shrink-0 bg-brand" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
