import Image from "next/image";
import Link from "next/link";

import { Product, getWhatsAppLink } from "@/lib/site-data";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="scroll-reveal group relative overflow-hidden rounded-[32px] border border-white/10 bg-panel p-6 shadow-glow transition duration-300 hover:-translate-y-1 hover:border-white/20">
      <div
        className={`absolute inset-x-6 top-0 h-40 rounded-full bg-gradient-to-r ${product.gradient} opacity-25 blur-3xl transition duration-500 group-hover:opacity-40`}
      />
      <div className="scroll-stagger relative flex flex-col gap-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">{product.state}</p>
            <h3 className="mt-2 text-3xl font-semibold text-white">{product.name}</h3>
          </div>
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60">
            {product.shortLabel}
          </span>
        </div>
        <div className="bottle-reveal relative mx-auto aspect-[4/5] w-full max-w-[260px] transition duration-500 group-hover:-translate-y-2">
          <Image src={product.image} alt={product.name} fill className="object-contain" sizes="(max-width: 768px) 60vw, 260px" />
        </div>
        <p className="max-w-sm text-sm leading-7 text-white/68">{product.description}</p>
        {product.price && (
          <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-4 py-3">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/50">Price</p>
              <p className="mt-1 text-lg font-semibold text-white">{product.price}</p>
            </div>
            {product.format && (
              <div className="text-right">
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">Format</p>
                <p className="mt-1 text-sm font-medium text-white/80">{product.format}</p>
              </div>
            )}
          </div>
        )}
        <div className="flex flex-wrap gap-3">
          <Link
            href={`/${product.slug}`}
            className={`inline-flex rounded-full bg-gradient-to-r ${product.gradient} px-5 py-3 text-sm font-semibold text-black transition hover:brightness-110`}
          >
            Explore {product.name}
          </Link>
          <a
            href={getWhatsAppLink(product.orderText)}
            target="_blank"
            rel="noreferrer"
            data-track-whatsapp="true"
            data-track-label={`${product.slug}-card-order`}
            className="inline-flex rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
          >
            Order now
          </a>
        </div>
      </div>
    </article>
  );
}