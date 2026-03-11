"use client";

import Image from "next/image";
import { useState } from "react";

import { ProductKey, getWhatsAppLink, products } from "@/lib/site-data";

const heroHighlights = [
  {
    number: "01",
    title: "Feel Better",
    body: "Start from the outcome, not a wall of ingredients."
  },
  {
    number: "02",
    title: "Dose Honestly",
    body: "Clinically meaningful ingredients instead of filler-heavy blends."
  },
  {
    number: "03",
    title: "Order Fast",
    body: "A direct WhatsApp path instead of slow, bloated checkout flow."
  }
];

export function HomeHero() {
  const featuredProducts = products.filter((p) => p.isFeatured !== false);
  const [activeSlug, setActiveSlug] = useState<ProductKey>("vitality");
  const activeProduct = featuredProducts.find((product) => product.slug === activeSlug) ?? featuredProducts[0];

  return (
    <section className="relative overflow-hidden px-5 pb-14 pt-8 sm:px-6 sm:pb-16 sm:pt-10 lg:px-10 lg:pb-24 lg:pt-16">
      <div
        className="absolute inset-0 transition duration-500"
        style={{
          background: `radial-gradient(circle at 20% 18%, ${withAlpha(activeProduct.glow, 0.7)}, transparent 18%), radial-gradient(circle at 78% 24%, ${withAlpha(activeProduct.glow, 0.55)}, transparent 22%), linear-gradient(135deg, rgba(255,255,255,0.02), transparent 42%)`
        }}
      />
      <div className="absolute inset-x-0 top-0 h-[720px] bg-mesh-glow opacity-70" />
      <div className="hero-beams absolute inset-x-0 top-4 h-[500px] opacity-80 sm:top-10 sm:h-[560px]" />
      <div className="absolute left-1/2 top-10 hidden -translate-x-1/2 text-center font-[family-name:var(--font-display)] text-[14vw] font-semibold uppercase leading-none tracking-[-0.08em] text-white/[0.04] lg:block">
        Eunoia
        <br />
        {activeProduct.name}
      </div>
      <div className="mx-auto grid max-w-7xl gap-8 sm:gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <div className="relative z-10 order-last space-y-6 sm:space-y-8 lg:order-first lg:pb-10">
          <div className="flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.28em] text-white/58">
            {featuredProducts.map((product) => {
              const active = product.slug === activeProduct.slug;

              return (
                <button
                  key={product.slug}
                  type="button"
                  onClick={() => setActiveSlug(product.slug)}
                  aria-pressed={active}
                  className={`rounded-full border px-4 py-2 text-left transition duration-300 ${
                    active
                      ? `border-white/40 bg-gradient-to-r ${product.gradient} text-black`
                      : "border-white/10 bg-white/5 text-white/72 hover:border-white/20 hover:text-white"
                  }`}
                >
                  {product.state}
                </button>
              );
            })}
          </div>
          <div className="space-y-4 sm:space-y-5">
            <p className="text-xs uppercase tracking-[0.38em] text-white/50">Functional drinks for how you want to feel</p>
            <div key={activeProduct.slug} className="animate-[hero-copy-in_420ms_ease-out] space-y-3">
              <h1 className="max-w-4xl text-[2.9rem] font-semibold uppercase leading-[0.84] tracking-[-0.07em] text-white sm:text-7xl lg:text-[7.4rem]">
                Eunoia
                <br />
                {activeProduct.name}
              </h1>
              <div className="space-y-3 transition duration-300">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/55">{activeProduct.functionLine}</p>
                <p className="max-w-2xl text-base leading-8 text-white/70 sm:text-lg lg:text-xl">{activeProduct.tagline}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={getWhatsAppLink(activeProduct.orderText)}
              target="_blank"
              rel="noreferrer"
              data-track-whatsapp="true"
              data-track-label={`home-hero-${activeProduct.slug}-order`}
              className={`inline-flex w-full justify-center rounded-full bg-gradient-to-r ${activeProduct.gradient} px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-black transition duration-300 hover:brightness-110 sm:w-auto`}
            >
              Order {activeProduct.name}
            </a>
            <a
              href="#formulas"
              className="inline-flex w-full justify-center rounded-full border border-white/15 px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-white/30 hover:bg-white/5 sm:w-auto"
            >
              Explore formulas
            </a>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
            {heroHighlights.map((item) => (
              <div key={item.number} className="rounded-[26px] border border-white/10 bg-black/20 p-5 backdrop-blur-xl">
                <p className="text-[11px] uppercase tracking-[0.28em] text-white/42">{item.number}</p>
                <h2 className="mt-5 text-xl font-semibold uppercase tracking-[-0.05em] text-white sm:text-2xl">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-white/62">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative order-first flex min-h-[340px] flex-col items-center justify-center sm:min-h-[520px] lg:order-last lg:min-h-[760px]">
          <div className="absolute inset-x-0 top-12 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-24 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div
            className={`absolute right-[10%] top-[10%] h-[520px] w-[520px] rounded-full bg-gradient-to-r ${activeProduct.gradient} opacity-20 blur-[130px] transition duration-500`}
          />
          <div className="absolute left-[10%] top-[28%] h-[260px] w-[260px] rounded-full border border-white/10" />
          <div className="absolute right-[12%] top-[18%] h-[120px] w-[120px] rounded-full border border-white/10" />
          <div className="absolute inset-8 rounded-[44px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))]" />
          <div className="absolute inset-10 rounded-[42px] border border-white/6" />
          <div className="relative z-10 flex h-full w-full items-center justify-center">
            <div className="relative h-[390px] w-full max-w-[330px] animate-[float_6s_ease-in-out_infinite] sm:h-[610px] sm:max-w-[500px] lg:h-[760px] lg:max-w-[560px]">
              {featuredProducts.map((product) => {
                const active = product.slug === activeProduct.slug;

                return (
                  <div
                    key={product.slug}
                    className={`absolute inset-0 transition-all duration-500 ease-out ${
                      active ? "translate-y-0 scale-100 opacity-100" : "translate-y-5 scale-[0.96] opacity-0"
                    }`}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain drop-shadow-[0_40px_85px_rgba(0,0,0,0.72)]"
                      priority={product.slug === "vitality"}
                      sizes="(max-width: 640px) 330px, (max-width: 1024px) 500px, 560px"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function withAlpha(color: string, alpha: number) {
  const match = color.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)/);

  if (!match) {
    return color;
  }

  const [, red, green, blue] = match;
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}