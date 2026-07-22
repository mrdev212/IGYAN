import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import IconFontLoader from "./components/IconFontLoader";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://igyan.ai"),
  title: {
    default: "IGYAN AI | AI-Native Education Operating System",
    template: "%s | IGYAN AI",
  },
  description:
    "IGYAN AI helps schools deliver personalized learning, career pathways, and operational intelligence through an AI-native education platform.",
  keywords: [
    "IGYAN AI",
    "education AI",
    "school management platform",
    "personalized learning",
    "career pathways",
    "AI for schools",
  ],
  openGraph: {
    title: "IGYAN AI | AI-Native Education Operating System",
    description:
      "Personalized learning, career pathways, and school operations in one AI-native platform.",
    url: "https://igyan.ai",
    siteName: "IGYAN AI",
    images: [
      {
        url: "/student_engagement_hd.webp",
        width: 1024,
        height: 1024,
        alt: "IGYAN AI classroom and student engagement platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IGYAN AI | AI-Native Education Operating System",
    description:
      "AI-native software for personalized learning, student growth, and school transformation.",
    images: ["/student_engagement_hd.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=block"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-surface dark:bg-slate-900 text-on-surface dark:text-slate-100 transition-colors duration-300`}
      >
        <IconFontLoader />
        {children}
      </body>
    </html>
  );
}
