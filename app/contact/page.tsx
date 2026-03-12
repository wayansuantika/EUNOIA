import type { Metadata } from "next";

import { getTemplateWhatsAppLink } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact EUNOIA VITS for orders, delivery details, and product questions via WhatsApp."
};

export default function ContactPage() {
  return (
    <section className="px-6 py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-4xl rounded-[36px] border border-white/10 bg-panel p-8 shadow-glow lg:p-10">
        <p className="text-xs uppercase tracking-[0.35em] text-white/50">Contact</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl">Order directly. Ask directly.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">
          Every purchase runs through WhatsApp Business so orders, quantities, and delivery details stay direct and fast.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-white/45">Order template</p>
            <p className="mt-4 whitespace-pre-line text-sm leading-7 text-white/68">
              Hi, I want to order:{"\n\n"}
              Product:{"\n"}
              Quantity:{"\n"}
              Delivery location:
            </p>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-white/45">Primary action</p>
            <a
              href={getTemplateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              data-track-whatsapp="true"
              data-track-label="contact-order"
              aria-label="Open WhatsApp order template in a new tab"
              className="mt-4 inline-flex rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
            >
              Open WhatsApp order
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}