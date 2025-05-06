import "./globals.css";
import { cn } from "@/app/_core/lib/utils";
import type React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import AppProvider from "./_core/providers/app-provider";

const font = localFont({
  src: [
    {
      path: "../public/fonts/Otypical-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Contract Craft",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body
        className={cn(
          `${font.className} bg-background text-foreground antialiased`,
        )}
      >
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
