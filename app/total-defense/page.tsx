import type { Metadata } from "next";

import { ProductPage } from "@/components/product-page";
import { getProduct } from "@/lib/site-data";

const product = getProduct("total-defense");

export const metadata: Metadata = {
  title: "Total Defense | Eunoia Vits",
  description: product?.description,
  keywords: product?.seoKeywords
};

export default function TotalDefensePage() {
  if (!product) {
    return null;
  }

  return <ProductPage product={product} />;
}
