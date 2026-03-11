import type { Metadata } from "next";

import { ProductPage } from "@/components/product-page";
import { getProduct } from "@/lib/site-data";

const product = getProduct("unwind");

export const metadata: Metadata = {
  title: "Unwind",
  description: product?.description,
  keywords: product?.seoKeywords
};

export default function UnwindPage() {
  if (!product) {
    return null;
  }

  return <ProductPage product={product} />;
}