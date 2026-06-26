import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Glow Wellness",
  description: "Licensed acupuncture and Eastern medicine clinic serving Orange and Los Angeles counties. Two locations: Newport Beach and Hacienda Heights.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
