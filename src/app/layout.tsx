import { ClientProviders } from "@/components/shared/clients-providers";
import { cn } from "cn";
import { setDefaultOptions } from "date-fns";
import { ptBR } from "date-fns/locale";
import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import "./globals.css";

const fontSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  fallback: ["Arial", "sans-serif"],
});

const fontTitle = Nunito({
  variable: "--font-nunito-title",
  subsets: ["latin"],
  fallback: ["Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: "CvBuilder",
  icons: {
    icon: '/favicon.svg'
  }
};

setDefaultOptions({
  locale: ptBR,
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontTitle.variable,
          fontSans.variable,
        )}
      >
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
