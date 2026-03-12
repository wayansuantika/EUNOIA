"use client";

import { useEffect } from "react";
import { getLocalBusinessSchema, getOrganizationSchema } from "@/lib/schema";

export function SchemaScripts() {
  useEffect(() => {
    // Organization Schema
    const orgScript = document.createElement("script");
    orgScript.type = "application/ld+json";
    orgScript.textContent = JSON.stringify(getOrganizationSchema());
    document.head.appendChild(orgScript);

    // LocalBusiness Schema
    const businessScript = document.createElement("script");
    businessScript.type = "application/ld+json";
    businessScript.textContent = JSON.stringify(getLocalBusinessSchema());
    document.head.appendChild(businessScript);

    return () => {
      document.head.removeChild(orgScript);
      document.head.removeChild(businessScript);
    };
  }, []);

  return null;
}
