import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProductPage } from "@/components/product-page";
import { getProduct, products } from "@/lib/site-data";

type ProductPageRouteProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: ProductPageRouteProps): Metadata {
  const product = getProduct(params.slug as (typeof products)[number]["slug"]);

  if (!product) {
    return {};
  }

  return {
    title: product.name,
    description: product.description,
    keywords: product.seoKeywords
  };
}

export default function ProductSlugPage({ params }: ProductPageRouteProps) {
  const product = getProduct(params.slug as (typeof products)[number]["slug"]);

  if (!product) {
    notFound();
  }

  return <ProductPage product={product} />;
}