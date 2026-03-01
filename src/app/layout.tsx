import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tamarina - Clube de Viagens",
  description: "Descubra o mundo em boa companhia. O seu clube exclusivo de viagens para mulheres.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#5B3B1E",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          rel="preload"
          href="/fonts/OPTIBuffer-Bold.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/BabeSans.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased font-babe bg-tamarina-creme text-tamarina-marrom selection:bg-tamarina-oliva selection:text-tamarina-creme">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-tamarina-vermelho focus:text-tamarina-creme focus:px-4 focus:py-2 focus:rounded-md font-babe"
        >
          Pular para conteúdo
        </a>
        <div id="main-content">{children}</div>
      </body>
    </html>
  );
}
