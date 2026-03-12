import { Product, getWhatsAppLink } from "@/lib/site-data";
import { ProductHero } from "@/components/product-hero";
import { ProductCard } from "@/components/product-card";
import { getProductSchema } from "@/lib/schema";
import { products } from "@/lib/site-data";

type ProductPageProps = {
  product: Product;
};

export function ProductPage({ product }: ProductPageProps) {
  const relatedProducts = products.filter((item) => item.slug !== product.slug);
  const productSchema = getProductSchema(product);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <ProductHero product={product} />
      <section id="ingredients" className="px-6 py-20 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glow">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">Function overview</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">{product.benefitTitle}</h2>
            <p className="mt-4 text-sm leading-7 text-white/68">{product.benefitBody}</p>
            <p className="mt-8 text-xs uppercase tracking-[0.3em] text-white/50">Base</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {product.base.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/72">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-[32px] border border-white/10 bg-panel p-8 shadow-glow">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">Ingredient stack</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {product.ingredients.map((item) => (
                <div key={item} className="rounded-[24px] border border-white/10 bg-black/20 p-5">
                  <p className="text-base font-medium text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="px-6 pb-20 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-[36px] border border-white/10 bg-white/5 p-8 shadow-glow lg:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">Order</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Choose your state, then order directly.</h2>
            </div>
            <a
              href={getWhatsAppLink(product.orderText)}
              target="_blank"
              rel="noopener noreferrer"
              data-track-whatsapp="true"
              data-track-label={`${product.slug}-detail-order`}
              aria-label={`Order ${product.name} via WhatsApp (opens in a new tab)`}
              className={`inline-flex rounded-full bg-gradient-to-r ${product.gradient} px-6 py-3.5 text-sm font-semibold text-black transition hover:brightness-110`}
            >
              Order {product.name}
            </a>
          </div>
        </div>
      </section>
      <section className="px-6 pb-24 lg:px-10">
        <div className="mx-auto max-w-7xl space-y-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">Also explore</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Other states</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {relatedProducts.map((item) => (
              <ProductCard key={item.slug} product={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}