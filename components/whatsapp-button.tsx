import { getTemplateWhatsAppLink } from "@/lib/site-data";

export function WhatsAppButton() {
  return (
    <a
      href={getTemplateWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      data-track-whatsapp="true"
      data-track-label="floating-whatsapp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full border border-white/10 bg-[#1b1b22]/90 px-4 py-3 text-sm font-semibold text-white shadow-glow backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-white/25"
      aria-label="Open WhatsApp order template in a new tab"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-emerald-300 to-emerald-500 text-black">
        W
      </span>
      Order via WhatsApp
    </a>
  );
}