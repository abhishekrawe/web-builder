import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import NextTopLoader from "nextjs-toploader";
import DesignerContextProvider from "@/components/context/DesignerContext";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fibr AI - Personalize your Landing Page",
  description: "Fibr AI - Personalize your Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body className={inter.className}>
          <NextTopLoader />
          <DesignerContextProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
              {children}
              <Toaster />
            </ThemeProvider>
          </DesignerContextProvider>
        </body>
      </html>
   
  );
}
