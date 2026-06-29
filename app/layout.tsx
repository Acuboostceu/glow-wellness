import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Glow Wellness",
  description: "Licensed acupuncture and Eastern medicine clinic serving Orange and Los Angeles counties. Two locations: Newport Beach and Hacienda Heights.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
