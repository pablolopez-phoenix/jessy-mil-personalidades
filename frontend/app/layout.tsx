import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-bricolage",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://expediente-jessy.pages.dev"
  ),
  title: "Jessy: La de las Mil Personalidades",
  description:
    "Una biografía no autorizada… aunque completamente aprobada por la protagonista. El expediente oficial de las múltiples vidas de Jessy.",
  openGraph: {
    title: "Jessy: La de las Mil Personalidades",
    description:
      "Una biografía no autorizada… aunque completamente aprobada por la protagonista.",
    url: "/",
    siteName: "Expediente Jessy",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1264,
        height: 848,
        alt: "Expediente clasificado: Jessy, la de las mil personalidades",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jessy: La de las Mil Personalidades",
    description:
      "Una biografía no autorizada… aunque completamente aprobada por la protagonista.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${bricolage.variable} ${inter.variable}`}>
      <body className="font-body grain antialiased">{children}</body>
    </html>
  );
}
