import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ProgressProvider from "@/contexts/ProgressProvider";
import { ThemeProvider } from "@/contexts/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "eTech",
  description: "Meet your need with us",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ProgressProvider>{children}</ProgressProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
