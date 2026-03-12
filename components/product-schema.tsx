"use client";

import { useEffect } from "react";
import { Product } from "@/lib/site-data";
import { getProductSchema } from "@/lib/schema";

type ProductSchemaProps = {
  product: Product;
};

export function ProductSchema({ product }: ProductSchemaProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(getProductSchema(product));
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [product]);

  return null;
}
