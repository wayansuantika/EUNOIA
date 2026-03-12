import { Product } from "./site-data";
import { getSiteUrl } from "./site-url";

function parseIdrPrice(price?: string) {
  if (!price) {
    return undefined;
  }

  const numeric = Number(price.replace(/[^0-9]/g, ""));

  if (Number.isNaN(numeric) || numeric <= 0) {
    return undefined;
  }

  return numeric;
}

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
  const parsedPrice = parseIdrPrice(product.price);
  const offer = {
    "@type": "Offer",
    url: productUrl,
    availability: "https://schema.org/InStock",
    seller: {
      "@type": "Organization",
      name: "EUNOIA VITS"
    },
    ...(parsedPrice
      ? {
          priceCurrency: "IDR",
          price: parsedPrice
        }
      : {})
  };

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
    offers: offer,
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
  const offerList = products.map((product) => {
    const parsedPrice = parseIdrPrice(product.price);

    return {
      "@type": "Offer",
      name: product.name,
      url: `${siteUrl}/${product.slug}`,
      availability: "https://schema.org/InStock",
      ...(parsedPrice
        ? {
            priceCurrency: "IDR",
            price: parsedPrice
          }
        : {})
    };
  });

  return {
    "@context": "https://schema.org",
    "@type": "AggregateOffer",
    name: "EUNOIA VITS Product Collection",
    description: "Functional vitamin drinks and gummies",
    url: `${siteUrl}/shop`,
    offers: offerList,
    availability: "https://schema.org/InStock"
  };
}
