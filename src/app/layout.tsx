import type { Metadata, Viewport } from "next";
import { Instrument_Sans, Syne } from "next/font/google";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const description =
  "VisiMove turns an ordinary webcam into a hands-free mouse: look to move the cursor, dwell to click. Built for people with limited mobility. Runs fully offline on Windows.";

export const metadata: Metadata = {
  title: "VisiMove - Control your computer with your eyes",
  description,
  applicationName: "VisiMove",
  keywords: ["eye tracking", "gaze control", "accessibility", "hands-free mouse", "assistive technology", "webcam"],
  openGraph: {
    title: "VisiMove - Control your computer with your eyes",
    description,
    siteName: "VisiMove",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "VisiMove", description },
};

export const viewport: Viewport = {
  themeColor: "#050816",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Font variables on <html> so the :root aliases (--font-heading, --font-body) can resolve them.
    <html lang="en" className={`dark ${instrumentSans.variable} ${syne.variable}`}>
      <body className="antialiased">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
