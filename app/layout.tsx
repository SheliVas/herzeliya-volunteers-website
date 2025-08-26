import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { LanguageProvider } from "@/lib/language-context"
import Script from "next/script"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Herzeliya Volunteers - Making a Difference Together",
  description: "Join our community of volunteers in Herzeliya and make a positive impact in our city.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" dir="ltr" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        <LanguageProvider>
          <SkipLink />
          <Header />
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </LanguageProvider>
        <Script
          src="https://website-widgets.pages.dev/dist/sienna.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
