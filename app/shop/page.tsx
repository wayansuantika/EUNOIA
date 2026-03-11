import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/site-data";

export const metadata = {
  title: "Shop | Eunoia Vits",
  description: "Browse all Eunoia Vits products: functional drinks and gummies for energy, calm, and recovery."
};

export default function ShopPage() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-32 lg:px-10 lg:pb-24 lg:pt-40">
        <div className="absolute inset-x-0 top-0 h-[720px] bg-mesh-glow opacity-70" />
        <div className="absolute left-1/2 top-10 hidden -translate-x-1/2 text-center font-[family-name:var(--font-display)] text-[14vw] font-semibold uppercase leading-none tracking-[-0.08em] text-white/[0.04] lg:block">
          Shop
          <br />
          All Products
        </div>

        <div className="mx-auto max-w-7xl space-y-16 sm:space-y-20">
          <div className="scroll-stagger space-y-4">
            <h1 className="max-w-4xl text-4xl font-semibold uppercase tracking-[-0.07em] text-white sm:text-6xl lg:text-7xl">
              Our Complete
              <br />
              Product Line
            </h1>
            <p className="max-w-2xl text-sm leading-8 text-white/68 sm:text-base">
              Explore all Eunoia Vits functional drinks and gummies, each designed to help you feel your best. Choose the products that match your goals.
            </p>
          </div>

          <div className="space-y-16">
            {/* Featured Drinks Section */}
            <div className="space-y-6">
              <div className="scroll-stagger space-y-2">
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">Functional Drinks</p>
                <h2 className="text-3xl font-semibold uppercase tracking-[-0.05em] text-white">Core Formulas</h2>
              </div>
              <div className="grid gap-6 lg:grid-cols-3">
                {products
                  .filter((p) => p.isFeatured !== false)
                  .map((product) => (
                    <ProductCard key={product.slug} product={product} />
                  ))}
              </div>
            </div>

            {/* Gummies Section */}
            <div className="space-y-6">
              <div className="scroll-stagger space-y-2">
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">Supplements</p>
                <h2 className="text-3xl font-semibold uppercase tracking-[-0.05em] text-white">Gummy Blends</h2>
              </div>
              <div className="grid gap-6 lg:grid-cols-3">
                {products
                  .filter((p) => p.isFeatured === false)
                  .map((product) => (
                    <ProductCard key={product.slug} product={product} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
