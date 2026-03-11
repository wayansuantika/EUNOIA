"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function TrackingEvents() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const link = target.closest("[data-track-whatsapp]");

      if (!(link instanceof HTMLElement)) {
        return;
      }

      const label = link.dataset.trackLabel ?? "whatsapp-click";

      window.gtag?.("event", "whatsapp_click", {
        event_category: "engagement",
        event_label: label
      });

      window.fbq?.("trackCustom", "WhatsAppClick", {
        label
      });

      window.dataLayer?.push({
        event: "whatsapp_click",
        label
      });
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}