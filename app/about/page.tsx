import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About EUNOIA VITS and the idea of functional states instead of generic supplement shopping."
};

export default function AboutPage() {
  return (
    <section className="px-6 py-20 lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-white/50">About EUNOIA VITS</p>
          <h1 className="text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl">Functional drinks designed to change how people feel.</h1>
        </div>
        <div className="rounded-[32px] border border-white/10 bg-panel p-8 shadow-glow">
          <p className="text-lg leading-8 text-white/68">
            EUNOIA VITS is positioned more like a premium technology product than a traditional supplement store. The experience starts with state selection: energy, relaxation, or recovery.
          </p>
          <p className="mt-6 text-sm leading-7 text-white/62">
            That framing shapes the entire brand system, from product naming to page flow, so customers move toward a desired outcome instead of being forced to decode ingredient labels first.
          </p>
          <p className="mt-6 text-sm leading-7 text-white/62">
            The result is a cleaner, more modern commerce experience backed by transparent formulas, minimal design, and a direct WhatsApp order path.
          </p>
        </div>
      </div>
    </section>
  );
}