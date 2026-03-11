import Image from "next/image";

import { Product, getWhatsAppLink } from "@/lib/site-data";

type ProductHeroProps = {
  product: Product;
};

export function ProductHero({ product }: ProductHeroProps) {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-16 lg:px-10 lg:pt-24">
      <div className="absolute inset-x-0 top-0 h-[500px] bg-mesh-glow opacity-60" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_0.95fr]">
        <div className="relative z-10 space-y-8">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-white/55">{product.state}</p>
            <h1 className="max-w-2xl text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
              {product.functionLine}
            </h1>
            <p className="max-w-xl text-lg leading-8 text-white/68">{product.tagline}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={getWhatsAppLink(product.orderText)}
              target="_blank"
              rel="noreferrer"
              data-track-whatsapp="true"
              data-track-label={`${product.slug}-hero-order`}
              className={`inline-flex rounded-full bg-gradient-to-r ${product.gradient} px-6 py-3.5 text-sm font-semibold text-black transition hover:brightness-110`}
            >
              Order via WhatsApp
            </a>
            <a
              href="#ingredients"
              className="inline-flex rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
            >
              View formula
            </a>
          </div>
        </div>
        <div className="relative flex min-h-[520px] items-center justify-center">
          <div
            className={`absolute h-[360px] w-[360px] rounded-full bg-gradient-to-r ${product.gradient} opacity-25 blur-[100px]`}
          />
          <div className="relative h-[520px] w-full max-w-[420px]">
            <Image src={product.image} alt={product.name} fill className="object-contain drop-shadow-[0_35px_65px_rgba(0,0,0,0.55)]" priority sizes="(max-width: 1024px) 80vw, 420px" />
          </div>
        </div>
      </div>
    </section>
  );
}