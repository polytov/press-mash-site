import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ПРЕССМАШ — гидравлические прессы",
  description:
    "Гидравлические прессы 35, 50, 100 тонн и протяжной станок ПР-35 для сервиса, цехов и производства.",
  openGraph: {
    title: "ПРЕССМАШ — гидравлические прессы",
    description:
      "Технический лендинг для подбора пресса по усилию, ходу штока и задаче.",
    images: ["/hero-press.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
