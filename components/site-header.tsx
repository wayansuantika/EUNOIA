import Image from "next/image";
import Link from "next/link";

import { MobileNav } from "@/components/mobile-nav";

const links = [
  { href: "/shop", label: "Shop" },
  { href: "/science", label: "Science" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-10">
        <Link href="/" className="inline-flex items-center">
          <Image src="/LogoEunoiaWhite-03.png" alt="Eunoia Vits" width={220} height={44} className="h-7 w-auto sm:h-8" priority />
        </Link>
        <MobileNav links={links} />
        <nav className="hidden items-center gap-8 text-sm text-white/72 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}