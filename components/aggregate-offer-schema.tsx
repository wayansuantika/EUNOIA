"use client";

import { useEffect } from "react";
import { Product } from "@/lib/site-data";
import { getAggregateOfferSchema } from "@/lib/schema";

type ShopSchemaClientProps = {
  products: Product[];
};

export function ShopSchemaClient({ products }: ShopSchemaClientProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(getAggregateOfferSchema(products));
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [products]);

  return null;
}
