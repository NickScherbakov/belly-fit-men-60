import type { Metadata } from "next";
import { Manrope, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["cyrillic", "latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["cyrillic", "latin"],
});

const siteUrl = "https://nickscherbakov.github.io/belly-fit-men-60";

export const metadata: Metadata = {
  title: "Belly Fit Men 60 — спокойный план для здоровья",
  description:
    "Практичный четырёхнедельный план ходьбы, силовых упражнений и питания для мужчин около 60 лет.",
  openGraph: {
    title: "Меньше живот. Больше жизни.",
    description: "Спокойный план на четыре недели для мужчин около 60 лет.",
    type: "website",
    locale: "ru_RU",
    images: [{ url: `${siteUrl}/og.png`, width: 1733, height: 907, alt: "Belly Fit Men 60" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Меньше живот. Больше жизни.",
    description: "Спокойный план на четыре недели для мужчин около 60 лет.",
    images: [`${siteUrl}/og.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className={`${manrope.variable} ${sourceSerif.variable}`}>
        {children}
      </body>
    </html>
  );
}
