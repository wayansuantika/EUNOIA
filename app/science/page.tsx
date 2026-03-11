import type { Metadata } from "next";

import { featuredIngredients, products, seoTopics } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Science",
  description: "Ingredient philosophy, meaningful dosages, and the science-first thinking behind EUNOIA VITS."
};

export default function SciencePage() {
  return (
    <section className="px-6 py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-white/50">Science-backed formulation</p>
          <h1 className="text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl">Built around ingredients that can do real work.</h1>
          <p className="text-lg leading-8 text-white/68">
            The formulas focus on clinically meaningful doses and direct ingredient transparency instead of padded blends and vague promises.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[32px] border border-white/10 bg-panel p-8 shadow-glow">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">Featured ingredients</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {featuredIngredients.map((ingredient) => (
                <div key={ingredient} className="rounded-[24px] border border-white/10 bg-black/20 p-5">
                  <p className="text-lg font-medium text-white">{ingredient}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glow">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">SEO content pages</p>
            <div className="mt-6 space-y-3">
              {seoTopics.map((topic) => (
                <div key={topic} className="rounded-[24px] border border-white/10 px-5 py-4 text-white/74">
                  {topic}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product.slug} className="rounded-[30px] border border-white/10 bg-white/5 p-6 shadow-glow">
              <p className="text-xs uppercase tracking-[0.3em] text-white/45">{product.name}</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">{product.functionLine}</h2>
              <p className="mt-3 text-sm leading-7 text-white/65">{product.benefitBody}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}