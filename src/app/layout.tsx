import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { CartProvider } from "@/contexts/cart-context";
import { Navbar } from "@/components/navbar";
import { ClientLayout } from "@/components/client-layout";
import "./globals.css";
import { Footer } from "@/components/footer";

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DN Magic Cosmetics",
  description: "Cosmética de lujo y belleza artesanal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${playfairDisplay.variable} ${inter.variable} font-body antialiased`}
      >
        <CartProvider>
          <ClientLayout>
            <Navbar />
            {children}
            <Footer />
          </ClientLayout>
        </CartProvider>
      </body>
    </html>
  );
}
