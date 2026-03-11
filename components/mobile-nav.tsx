"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type NavLink = {
  href: string;
  label: string;
};

type MobileNavProps = {
  links: NavLink[];
};

export function MobileNav({ links }: MobileNavProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="relative md:hidden">
      <div
        className={`fixed inset-0 z-40 bg-black/45 backdrop-blur-md transition duration-300 ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((current) => !current)}
        className="relative z-[70] inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/78 transition duration-300 hover:border-white/20 hover:bg-white/10"
      >
        Menu
        <span className="flex w-4 flex-col gap-1">
          <span className={`h-px bg-white transition duration-300 ${open ? "translate-y-[5px] rotate-45" : ""}`} />
          <span className={`h-px bg-white transition duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`h-px bg-white transition duration-300 ${open ? "-translate-y-[5px] -rotate-45" : ""}`} />
        </span>
      </button>
      <div
        id="mobile-navigation"
        className={`absolute right-0 top-[calc(100%+0.75rem)] z-[60] w-[calc(100vw-2.5rem)] max-w-[22rem] origin-top-right overflow-hidden transition-all duration-300 sm:w-[22rem] ${
          open
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none -translate-y-3 scale-[0.97] opacity-0"
        }`}
      >
        <nav className="grid gap-2 rounded-[24px] border border-white/10 bg-[#131318]/95 p-3 shadow-[0_24px_80px_rgba(0,0,0,0.55)] backdrop-blur-xl">
          {links.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-[18px] px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] transition ${
                  active
                    ? "border border-white bg-gradient-to-r from-white to-white/85 text-black shadow-[0_12px_30px_rgba(255,255,255,0.18)]"
                    : "border border-transparent bg-white/5 text-white/72 hover:border-white/10 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}