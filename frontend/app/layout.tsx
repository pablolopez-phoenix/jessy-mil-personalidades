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
  title: "Jessy: La de las Mil Personalidades",
  description:
    "Una biografía no autorizada… aunque completamente aprobada por la protagonista. El expediente oficial de las múltiples vidas de Jessy.",
  openGraph: {
    title: "Jessy: La de las Mil Personalidades",
    description:
      "Una biografía no autorizada… aunque completamente aprobada por la protagonista.",
    type: "website",
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
