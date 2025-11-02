import type React from "react"
import type {Metadata} from "next"
import {Inter, Poppins} from "next/font/google"
import {Header} from "@/components/header"
import {Footer} from "@/components/footer"
import {SkipLink} from "@/components/skip-link"
import {LanguageProvider} from "@/lib/language-context"
import {FloatingDonationBanner} from "@/components/floating-donation-banner"
import {HtmlWrapper} from "@/components/html-wrapper"
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
    title: "עמותת מתנדבי הרצליה - התנדבות, תרומות וחנויות יד שנייה",
    description: "עמותת מתנדבי הרצליה מחלקת מדי שבוע סלי מזון ליותר מ־300 משפחות בעיר ומפעילה שלוש חנויות יד שנייה. הצטרפו להתנדבות או תרמו עכשיו כדי לחזק את הקהילה",
    keywords: ["התנדבות הרצליה", "תרומות", "חנויות יד שנייה", "סלי מזון", "עזרה למשפחות", "קהילה"],
    authors: [{ name: "עמותת מתנדבי הרצליה" }],
    creator: "עמותת מתנדבי הרצליה",
    publisher: "עמותת מתנדבי הרצליה",
    robots: "index, follow",
    openGraph: {
        type: "website",
        locale: "he_IL",
        alternateLocale: ["en_US"],
        url: "https://herzeliya-volunteers.org.il",
        siteName: "עמותת מתנדבי הרצליה",
        title: "עמותת מתנדבי הרצליה – התנדבות, תרומות וחנויות יד שנייה",
        description: "מצטרפים לעשייה ותומכים ביותר מ־300 משפחות בהרצליה. תרמו או התנדבו – כל תרומה היא סל מזון למשפחה.",
    },
    twitter: {
        card: "summary_large_image",
        title: "עמותת מתנדבי הרצליה – התנדבות, תרומות וחנויות יד שנייה",
        description: "מצטרפים לעשייה ותומכים ביותר מ־300 משפחות בהרצליה. תרמו או התנדבו – כל תרומה היא סל מזון למשפחה.",
    },
    alternates: {
        canonical: "https://herzeliya-volunteers.org.il",
    },
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    const jsonLd = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://herzeliya-volunteers.org.il/#organization",
          "name": "עמותת מתנדבי הרצליה",
          "alternateName": "Herzeliya Volunteers Association",
          "url": "https://herzeliya-volunteers.org.il",
          "logo": "https://herzeliya-volunteers.org.il/logo.png",
          "description": "עמותה המחלקת סלי מזון ל-300+ משפחות בהרצליה ומפעילה 3 חנויות יד שנייה",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "רחוב חתם סופר 29",
            "addressLocality": "הרצליה",
            "postalCode": "4648563",
            "addressCountry": "IL"
          },
          "email": "herzliyas.volunteers@gmail.com",
          "telephone": "+972-9-123-4567",
          "sameAs": []
        },
        {
          "@type": "LocalBusiness",
          "@id": "https://herzeliya-volunteers.org.il/#shop1",
          "name": "חנות חת\"ם סופר",
          "image": "https://herzeliya-volunteers.org.il/shop1.png",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "חת\"ם סופר 29",
            "addressLocality": "הרצליה",
            "addressCountry": "IL"
          },
          "telephone": "+972-52-367-3385",
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Sunday", "Monday", "Wednesday", "Thursday"],
              "opens": "08:00",
              "closes": "13:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Tuesday",
              "opens": "08:00",
              "closes": "13:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Tuesday",
              "opens": "16:00",
              "closes": "19:00"
            }
          ]
        },
        {
          "@type": "LocalBusiness",
          "@id": "https://herzeliya-volunteers.org.il/#shop2",
          "name": "חנות הזדמנויות",
          "image": "https://herzeliya-volunteers.org.il/shop2.png",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "שדרות ירושלים 41",
            "addressLocality": "הרצליה",
            "addressCountry": "IL"
          },
          "telephone": "+972-54-635-0446",
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Sunday", "Monday", "Wednesday"],
              "opens": "09:00",
              "closes": "13:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Tuesday",
              "opens": "09:00",
              "closes": "13:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Tuesday",
              "opens": "16:00",
              "closes": "18:00"
            }
          ]
        },
        {
          "@type": "LocalBusiness",
          "@id": "https://herzeliya-volunteers.org.il/#shop3",
          "name": "חנות קטנטנים",
          "image": "https://herzeliya-volunteers.org.il/shop3.jpeg",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "שדרות ירושלים 41",
            "addressLocality": "הרצליה",
            "addressCountry": "IL"
          },
          "telephone": "+972-54-544-4389",
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday"],
            "opens": "09:00",
            "closes": "12:30"
          }
        }
      ]
    }

    return (
        <html lang="he" dir="rtl" className={`${inter.variable} ${poppins.variable}`}>
        <head>
          {/* Google Analytics */}
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-N67G24JLDJ"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-N67G24JLDJ');
            `}
          </Script>

          {/* Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </head>
        <body className="font-sans antialiased">
        <LanguageProvider>
            <HtmlWrapper className={`${inter.variable} ${poppins.variable}`}>
              <SkipLink/>
              <Header/>
              <main id="main-content" tabIndex={-1}>
                  {children}
              </main>
              <Footer/>
              <FloatingDonationBanner/>
            </HtmlWrapper>
        </LanguageProvider>
        <Script src="https://cdn.jsdelivr.net/npm/sienna-accessibility@latest/dist/sienna-accessibility.umd.js"
                strategy="afterInteractive"/>
        </body>
        </html>
    )
}
