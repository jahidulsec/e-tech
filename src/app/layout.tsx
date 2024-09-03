import type { Metadata } from "next";
import "./globals.css";
import ProgressProvider from "@/contexts/ProgressProvider";
import { ThemeProvider } from "@/contexts/ThemeProvider";

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
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ProgressProvider>{children}</ProgressProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
