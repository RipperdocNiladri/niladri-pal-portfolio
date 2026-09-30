import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Niladri Pal | ECE Student • Developer • Builder",
  description:
    "Personal engineering portfolio of Niladri Pal. Exploring the intersection of hardware and software, computer vision, AI, embedded systems, and robotics.",
  keywords: [
    "Niladri Pal",
    "ECE",
    "Developer",
    "Builder",
    "Embedded Systems",
    "Computer Vision",
    "OpenCV",
    "Robotics",
    "Linux",
  ],
  authors: [{ name: "Niladri Pal" }],
  creator: "Niladri Pal",
  icons: {
    icon: "/favicon.ico?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="font-sans bg-void bg-grid-cyber text-slate-200 antialiased selection:bg-cyan-glow selection:text-black min-h-screen">
        {children}
      </body>
    </html>
  );
}
