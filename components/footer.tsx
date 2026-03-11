import Image from "next/image";
import Link from "next/link";

import { NewsletterForm } from "@/components/newsletter-form";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b0b0e]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
        <div className="space-y-4">
          <Image src="/LogoEunoiaWhite-03.png" alt="Eunoia Vits" width={220} height={44} className="h-8 w-auto" />
          <h2 className="max-w-lg text-2xl font-semibold text-white sm:text-3xl">
            Functional drinks designed around the way you want to feel.
          </h2>
          <p className="max-w-xl text-sm leading-7 text-white/60">
            Modern formulations, meaningful dosages, and a direct WhatsApp ordering flow.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="space-y-3 text-sm text-white/65">
            <p className="text-xs uppercase tracking-[0.3em] text-white/45">Links</p>
            <Link href="/" className="block hover:text-white">
              Shop
            </Link>
            <Link href="/science" className="block hover:text-white">
              Science
            </Link>
            <Link href="/about" className="block hover:text-white">
              About
            </Link>
            <Link href="/contact" className="block hover:text-white">
              Instagram
            </Link>
            <a href="#newsletter" className="block hover:text-white">
              Newsletter
            </a>
          </div>
          <NewsletterForm />
        </div>
      </div>
    </footer>
  );
}