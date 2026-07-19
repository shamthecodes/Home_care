import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Headnav from "@/components/Headnav";
import Footer from "@/components/Footer";
import { MessageCircle } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home Care Services in Vijayanagar Bengaluru | HealthCare",

  icons: {
    icon: "/nav.png",
    shortcut: "/nav.png",
    apple: "/nav.png",
  },
  openGraph: {
    title: "Home Care Services in Vijayanagar Bengaluru",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
      },
    ],
  },
  description:
    "Professional home care services in Vijayanagar, Bengaluru. BP check, Sugar test, Injections IV/IM, Urine Catheterization, Cupping Therapy, Ladies Health Care. Call +91 93800 50238",
  keywords:
    "home care Bengaluru, home nursing Vijayanagar, BP check at home, injection at home Bengaluru, blood test at home, cupping therapy Bengaluru, ladies health care home visit",
  openGraph: {
    title: "Home Care Services in Vijayanagar Bengaluru",
    description:
      "Professional home care — Injections, BP/Sugar Tests, Catheterization, Cupping Therapy, Ladies Health Care. Available 24/7 in Bengaluru.",
    url: "https://yourdomain.vercel.app",
    siteName: "HealthCare Home Services",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Headnav />
          <main className="min-h-screen">{children}</main>
          <Footer />

          {/* Floating WhatsApp Button */}
          <a
            href="https://wa.me/919380050238?text=Hi%2C%20I%20need%20home%20care%20service.%20Can%20you%20help%20me%3F"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: "fixed",
              bottom: "1.5rem",
              right: "1.5rem",
              zIndex: 9999,
              background: "#25d366",
              color: "white",
              borderRadius: "999px",
              padding: "1rem",
              boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "transform 0.2s ease",
            }}
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle size={24} />
          </a>
        </body>
      </html>
    </ClerkProvider>
  );
}
