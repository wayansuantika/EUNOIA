import type { Metadata } from "next";

import { ProductPage } from "@/components/product-page";
import { getProduct } from "@/lib/site-data";

const product = getProduct("afterglow");

export const metadata: Metadata = {
  title: "Afterglow",
  description: product?.description,
  keywords: product?.seoKeywords
};

export default function AfterglowPage() {
  if (!product) {
    return null;
  }

  return <ProductPage product={product} />;
}