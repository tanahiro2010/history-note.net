import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import '@/styles/globals.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "History note",
    template: "%s / History note"
  },
  description: "Share your history with the whole world!!",

  twitter: {
    card: "summary",
    site: "@tanahiro2010",
    title: "History note",
    description:
      "Share your history with the whole world!!",
    images: [
      {
        url: "https://history-note.net/favorite.ico",
        alt: "History note's logo."
      }
    ]
  },
  openGraph: {
    type: "website",
    url: "https://www.history-note.net/",
    title: "History note",
    description:
      "Share your history with the whole world!!",
    images: [
      {
        url: "https://history-note.net/favorite.ico",
        alt: "History note's logo."
      }
    ]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" 
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=search" 
      />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
