import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

import "./globals.css";

import { Analytics } from "@/components/analytics";
import { Footer } from "@/components/footer";
import { SiteHeader } from "@/components/site-header";
import { TrackingEvents } from "@/components/tracking-events";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { primaryKeywords } from "@/lib/site-data";
import { getSiteUrlObject } from "@/lib/site-url";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  metadataBase: getSiteUrlObject(),
  title: {
    default: "EUNOIA VITS | Functional Drinks For How You Want To Feel",
    template: "%s | EUNOIA VITS"
  },
  description:
    "Functional vitamin drinks for energy, relaxation, and recovery with clinically meaningful dosages and direct WhatsApp ordering.",
  keywords: primaryKeywords,
  openGraph: {
    title: "EUNOIA VITS",
    description: "Functional drinks for how you want to feel.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} bg-background text-foreground antialiased`}>
        <Analytics />
        <TrackingEvents />
        <div className="relative min-h-screen overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_24%),radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.05),transparent_22%)]" />
          <SiteHeader />
          <main className="relative">{children}</main>
          <Footer />
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}