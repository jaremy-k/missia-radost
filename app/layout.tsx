import type { Metadata } from "next";
import { Manrope, Russo_One } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["cyrillic", "latin"],
  variable: "--font-body",
});

const russo = Russo_One({
  weight: "400",
  subsets: ["cyrillic", "latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Миссия-радость — экспресс-поздравления",
  description:
    "Яркие поздравления с любимыми героями, шариками и праздничными сюрпризами.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${manrope.variable} ${russo.variable}`}>
        {children}
      </body>
    </html>
  );
}
