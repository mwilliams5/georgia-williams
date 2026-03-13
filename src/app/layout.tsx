import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Georgia Williams — The Official Unofficial Website",
  description:
    "A lovingly embarrassing tribute to Georgia Williams — daughter, chef-in-training, professional dog enthusiast, and the best thing to come out of January 1999.",
  openGraph: {
    title: "Georgia Williams — The Official Unofficial Website",
    description: "A lovingly embarrassing tribute to Georgia Williams.",
    url: "https://georgiawilliams.com",
    siteName: "Georgia Williams",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lato.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
