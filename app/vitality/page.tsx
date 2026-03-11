import type { Metadata } from "next";

import { ProductPage } from "@/components/product-page";
import { getProduct } from "@/lib/site-data";

const product = getProduct("vitality");

export const metadata: Metadata = {
  title: "Vitality",
  description: product?.description,
  keywords: product?.seoKeywords
};

export default function VitalityPage() {
  if (!product) {
    return null;
  }

  return <ProductPage product={product} />;
}