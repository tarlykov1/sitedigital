import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { company } from "@/data/site-content";

export const metadata: Metadata = {
  metadataBase: new URL("https://nova-atlas.example"),
  title: {
    default: `${company.name} | Enterprise Technology`,
    template: `%s | ${company.shortName}`
  },
  description: company.description,
  openGraph: {
    title: `${company.name} | Enterprise Technology`,
    description: company.description,
    url: "https://nova-atlas.example",
    siteName: company.name,
    locale: "en_US",
    type: "website"
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
