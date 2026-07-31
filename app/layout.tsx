import type { Metadata } from "next";
import { Manrope, Source_Serif_4 } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["cyrillic", "latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["cyrillic", "latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const imageUrl = `${protocol}://${host}/og.png`;

  return {
    title: "Belly Fit Men 60 — спокойный план для здоровья",
    description:
      "Практичный четырёхнедельный план ходьбы, силовых упражнений и питания для мужчин около 60 лет.",
    openGraph: {
      title: "Меньше живот. Больше жизни.",
      description: "Спокойный план на четыре недели для мужчин около 60 лет.",
      type: "website",
      locale: "ru_RU",
      images: [{ url: imageUrl, width: 1733, height: 907, alt: "Belly Fit Men 60" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Меньше живот. Больше жизни.",
      description: "Спокойный план на четыре недели для мужчин около 60 лет.",
      images: [imageUrl],
    },
  };
}

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
