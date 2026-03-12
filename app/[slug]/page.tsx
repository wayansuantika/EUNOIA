import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProductPage } from "@/components/product-page";
import { getProduct, products } from "@/lib/site-data";

type ProductPageRouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageRouteProps): Promise<Metadata> {
  const resolvedParams = await params;
  const product = getProduct(resolvedParams.slug as (typeof products)[number]["slug"]);

  if (!product) {
    return {};
  }

  return {
    title: product.name,
    description: product.description,
    keywords: product.seoKeywords
  };
}

export default async function ProductSlugPage({ params }: ProductPageRouteProps) {
  const resolvedParams = await params;
  const product = getProduct(resolvedParams.slug as (typeof products)[number]["slug"]);

  if (!product) {
    notFound();
  }

  return <ProductPage product={product} />;
}