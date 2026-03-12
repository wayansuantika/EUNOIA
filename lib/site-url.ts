const fallbackSiteUrl = "https://eunoiavits.com";

export function getSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (!configuredUrl) {
    return fallbackSiteUrl;
  }

  try {
    return new URL(configuredUrl).toString().replace(/\/$/, "");
  } catch {
    return fallbackSiteUrl;
  }
}

export function getSiteUrlObject() {
  return new URL(getSiteUrl());
}