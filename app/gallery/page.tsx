"use client"

import { useState } from "react"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { AnimatedSection } from "@/components/animated-section"
import { Lightbox } from "@/components/lightbox"

type GalleryImage = { src: string; altKey: string }
const galleryImages: GalleryImage[] = [
  { src: "/foodcenter1.jpeg", altKey: "gallery.image1.alt" },
  { src: "/foodcenter2.jpeg", altKey: "gallery.image2.alt" },
  { src: "/foodcenter3.png", altKey: "gallery.image3.alt" },
  { src: "/foodcenter4.png", altKey: "gallery.image4.alt" },
  { src: "/shop1.png", altKey: "gallery.image5.alt" },
  { src: "/shop11.jpeg", altKey: "gallery.image6.alt" },
  { src: "/shop12.png", altKey: "gallery.image7.alt" },
  { src: "/shop2.png", altKey: "gallery.image8.alt" },
  { src: "/shop21.png", altKey: "gallery.image9.alt" },
  { src: "/shop3.jpeg", altKey: "gallery.image10.alt" },
  { src: "/shop31.jpeg", altKey: "gallery.image11.alt" },
]

export default function GalleryPage() {
  const { t } = useLanguage()
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-4">{t("gallery.title")}</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">{t("gallery.subtitle")}</p>
          </div>
        </AnimatedSection>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
              <div
                className="group relative overflow-hidden rounded-lg bg-card border border-border hover:border-primary/30 transition-all duration-300 cursor-pointer hover:shadow-lg hover:scale-[1.02]"
                onClick={() => openLightbox(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                    openLightbox(index)
                  }
                }}
                aria-label={`${t("gallery.viewImage")}: ${t(image.altKey)}`}
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <Image
                    src={image.src}
                    alt={t(image.altKey)}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold text-lg mb-1">{t(image.altKey)}</h3>
                  </div>
                </div>

                {/* View indicator */}
                <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {t("gallery.clickToView")}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Call to Action */}
        <AnimatedSection animation="fade-up" delay={200}>
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-8 border border-primary/10">
              <h2 className="text-2xl font-bold text-primary mb-4">{t("gallery.cta.title")}</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">{t("gallery.cta.description")}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#get-involved"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  onClick={(e) => {
                    e.preventDefault()
                    const element = document.querySelector("#get-involved")
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                    } else {
                      window.location.href = "/#get-involved"
                    }
                  }}
                >
                  {t("gallery.cta.volunteer")}
                </a>
                <a
                  href="https://pay.tranzila.com/mitnadvim/ekpvdWF5bnp0QmhQazRHYWdwTmlaUT09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground font-medium rounded-lg hover:bg-secondary/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                >
                  {t("gallery.cta.donate")}
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Lightbox */}
      <Lightbox
        images={galleryImages.map((img) => ({ src: img.src, alt: t(img.altKey) }))}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrevious={previousImage}
      />
    </div>
  )
}
