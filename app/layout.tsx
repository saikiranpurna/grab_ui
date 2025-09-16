import type { ReactNode } from "react";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
      className={`${GeistSans.className} ${GeistMono.variable}`}
    >
      <body className="min-h-screen antialiased font-sans">
        <ThemeProvider defaultTheme="light" storageKey="grab-ui-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
