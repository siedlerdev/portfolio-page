import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Andreas Siedler | Senior Full-Stack Developer",
  description:
    "Portfolio of Andreas Siedler, a senior full-stack developer for React, AI and mobile products.",
  metadataBase: new URL("https://andreas-siedler.dev"),
  openGraph: {
    title: "Andreas Siedler | Senior Full-Stack Developer",
    description:
      "React, TypeScript, AI and mobile product work by Andreas Siedler.",
    type: "website",
    images: [
      {
        url: "/andreas-portfolio-field.png",
        width: 1400,
        height: 1000,
        alt: "Abstract technical field artwork for Andreas Siedler portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
