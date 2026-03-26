import type { Metadata } from "next";
import { Noto_Serif, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto-serif",
  weight: ["400", "700"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "E-commerce Pink",
  description: "E-commerce de cosméticos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${notoSerif.variable} ${plusJakartaSans.variable} font-sans antialiased bg-neutral text-tertiary`}
      >
        {children}
      </body>
    </html>
  );
}
