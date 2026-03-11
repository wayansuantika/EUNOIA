import type { Metadata } from "next";

import { ProductPage } from "@/components/product-page";
import { getProduct } from "@/lib/site-data";

const product = getProduct("cellular-energy");

export const metadata: Metadata = {
  title: "Cellular Energy | Eunoia Vits",
  description: product?.description,
  keywords: product?.seoKeywords
};

export default function CellularEnergyPage() {
  if (!product) {
    return null;
  }

  return <ProductPage product={product} />;
}
