import { HomeHero } from "@/components/home-hero";
import { ProductCard } from "@/components/product-card";
import { featuredIngredients, lifestyleMoments, products, seoTopics } from "@/lib/site-data";

export default function HomePage() {
  const featuredProducts = products.filter((p) => p.isFeatured !== false);
  return (
    <>
      <HomeHero />

      <section id="formulas" className="relative scroll-mt-24 px-5 py-16 sm:px-6 sm:py-20 lg:px-10">
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/[0.03] to-transparent" />
        <div className="mx-auto max-w-7xl space-y-8">
          <div className="scroll-stagger flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">Explore formulas</p>
              <h2 className="mt-3 max-w-3xl text-4xl font-semibold uppercase tracking-[-0.05em] text-white lg:text-5xl">
                Browse formulas built for energy, calm, and recovery.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-white/62">
              Compare each blend by function, ingredients, and intended outcome, then move straight into the product page or WhatsApp order flow.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-6 sm:py-20 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="scroll-reveal relative overflow-hidden rounded-[38px] border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03)_44%,rgba(255,92,92,0.08)_100%)] p-8 shadow-glow lg:p-10">
            <div className="absolute right-[-10%] top-[-10%] h-56 w-56 rounded-full bg-[#FF5C5C]/15 blur-3xl" />
            <div className="scroll-stagger relative">
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">Ingredient philosophy</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-semibold uppercase tracking-[-0.06em] text-white lg:text-5xl">
                Real ingredients. Real dosages. No sleepy wellness clichés.
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-8 text-white/68 lg:text-base">
                EUNOIA VITS uses clinically meaningful doses instead of hiding behind proprietary blends. The formulas are designed to feel direct, distinct, and useful in the moments that actually matter.
              </p>
            </div>
            <div className="relative mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {featuredIngredients.map((ingredient) => (
                <span key={ingredient} className="rounded-[20px] border border-white/10 bg-black/25 px-4 py-4 text-sm uppercase tracking-[0.14em] text-white/78">
                  {ingredient}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-4">
            {lifestyleMoments.map((moment, index) => (
              <div key={moment} className="grid-lines relative overflow-hidden rounded-[28px] border border-white/10 bg-panel p-6 shadow-glow">
                <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">0{index + 1}</p>
                <h3 className="mt-8 text-2xl font-semibold uppercase tracking-[-0.04em] text-white">{moment}</h3>
                <p className="mt-3 text-sm leading-7 text-white/62">
                  Feel better. Perform better. Recover better. Every product is designed around a functional moment rather than a shelf category.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-6 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-[40px] border border-white/10 bg-[linear-gradient(180deg,rgba(26,26,31,0.98),rgba(10,10,12,0.98))] p-8 shadow-glow lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div className="scroll-stagger">
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">Science content</p>
              <h2 className="mt-4 max-w-xl text-4xl font-semibold uppercase tracking-[-0.05em] text-white lg:text-5xl">
                Build authority with content that hits as hard as the brand.
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-8 text-white/62 lg:text-base">
                The science section is positioned for SEO and trust, with ingredient-specific content that helps discovery, supports conversion, and makes the formulations feel defensible.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {seoTopics.map((topic, index) => (
                <div key={topic} className="relative overflow-hidden rounded-[24px] border border-white/10 bg-black/20 p-5">
                  <span className="text-[11px] uppercase tracking-[0.28em] text-white/35">0{index + 1}</span>
                  <p className="mt-8 text-lg font-medium uppercase tracking-[-0.03em] text-white">{topic}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}