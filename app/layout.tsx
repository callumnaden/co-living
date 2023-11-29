import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Co Living Housing Australia",
  description:
    "Discover unparalleled co-living experiences with Co Living, your premier choice for shared living spaces in Melbourne. Our innovative approach combines affordability, community, and comfort, creating an unmatched lifestyle for young professionals to senior adults. Explore our diverse range of budget-friendly homes, fostering connections and independence in the heart of Melbourne. Join Co Living today and redefine city living with our exceptional co-living solutions.",
  icons: {
    icon: "../images/CoLivFav.svg",
    apple: "../images/CoLivFav.png",
  },
  verification: {
    google: "z5R-VMpMlaI5GsTEfCU5h3TI8H0kFaQ4RmLllj0sq84",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-gray-950 scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
