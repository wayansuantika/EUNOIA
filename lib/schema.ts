import { Product } from "./site-data";
import { getSiteUrl } from "./site-url";

export function getOrganizationSchema() {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "EUNOIA VITS",
    description: "Functional vitamin drinks for energy, relaxation, and recovery with clinically meaningful dosages",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    contact: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      url: siteUrl,
      availableLanguageID: ["en"]
    },
    sameAs: [
      // Add your social media URLs here
      // "https://www.instagram.com/eunoiavits",
      // "https://www.facebook.com/eunoiavits"
    ]
  };
}

export function getLocalBusinessSchema() {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "EUNOIA VITS",
    description: "Functional vitamin drinks and gummies for how you want to feel",
    url: siteUrl,
    telephone: "+6281339451454",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Order Support",
      url: siteUrl,
      telephone: "+6281339451454",
      availableLanguageID: ["en", "id"]
    },
    areaServed: {
      "@type": "Country",
      name: "Indonesia"
    },
    priceRange: "IDR 99.000 - IDR 250.000"
  };
}

export function getProductSchema(product: Product) {
  const siteUrl = getSiteUrl();
  const productUrl = `${siteUrl}/${product.slug}`;
  const image = `${siteUrl}${product.image}`;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    url: productUrl,
    image: image,
    brand: {
      "@type": "Brand",
      name: "EUNOIA VITS"
    },
    manufacturer: {
      "@type": "Organization",
      name: "EUNOIA VITS"
    },
    category: "Functional Beverage",
    offers: {
      "@type": "Offer",
      url: productUrl,
      priceCurrency: "IDR",
      price: product.price || "Price on request",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "EUNOIA VITS"
      }
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "0",
      bestRating: "5",
      worstRating: "1"
    },
    potentialAction: {
      "@type": "TradeAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `https://wa.me/6281339451454?text=${encodeURIComponent(product.orderText)}`,
        actionPlatform: ["DesktopWebPlatform", "MobileWebPlatform"]
      }
    }
  };
}

export function getBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

export function getAggregateOfferSchema(products: Product[]) {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "AggregateOffer",
    name: "EUNOIA VITS Product Collection",
    description: "Functional vitamin drinks and gummies",
    url: `${siteUrl}/shop`,
    priceCurrency: "IDR",
    offers: products.map((product) => ({
      "@type": "Offer",
      name: product.name,
      url: `${siteUrl}/${product.slug}`,
      price: product.price || "Price on request",
      availability: "https://schema.org/InStock"
    })),
    availability: "https://schema.org/InStock"
  };
}
