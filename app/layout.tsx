import type { Metadata } from "next";
import { logoSource } from "./guia-da-marca/guide-data";
import "./guia-da-marca/guide.css";

export const metadata: Metadata = {
  title: "Guia de marca | Cia da Terra",
  description:
    "Conheça os fundamentos, a identidade visual e as aplicações da marca Cia da Terra, farmácia de manipulação.",
  applicationName: "Guia de marca Cia da Terra",
  icons: { icon: { url: logoSource(3), type: "image/svg+xml" } },
  robots: { index: false, follow: false },
};

export default function GuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="guide-html">
      <body className="guide-body">{children}</body>
    </html>
  );
}
