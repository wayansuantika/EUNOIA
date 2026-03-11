import type { Metadata } from "next";

import { ProductPage } from "@/components/product-page";
import { getProduct } from "@/lib/site-data";

const product = getProduct("zen-matrix");

export const metadata: Metadata = {
  title: "Zen Matrix | Eunoia Vits",
  description: product?.description,
  keywords: product?.seoKeywords
};

export default function ZenMatrixPage() {
  if (!product) {
    return null;
  }

  return <ProductPage product={product} />;
}
