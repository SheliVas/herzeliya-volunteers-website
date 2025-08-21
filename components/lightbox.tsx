"use client"

import { useEffect } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

interface LightboxProps {
  images: Array<{
    src: string
    alt: string
    caption?: string
  }>
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onNext: () => void
  onPrevious: () => void
}

export function Lightbox({ images, currentIndex, isOpen, onClose, onNext, onPrevious }: LightboxProps) {
  const { t } = useLanguage()

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return

      switch (event.key) {
        case "Escape":
          onClose()
          break
        case "ArrowLeft":
          onPrevious()
          break
        case "ArrowRight":
          onNext()
          break
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose, onNext, onPrevious])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen) return null

  const currentImage = images[currentIndex]

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
      <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
        {/* Close button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-10 text-white hover:bg-white/20 focus:bg-white/20"
          onClick={onClose}
          aria-label={t("gallery.lightbox.close")}
        >
          <X className="h-6 w-6" />
        </Button>

        {/* Previous button */}
        {images.length > 1 && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20 focus:bg-white/20"
            onClick={onPrevious}
            aria-label={t("gallery.lightbox.previous")}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>
        )}

        {/* Next button */}
        {images.length > 1 && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20 focus:bg-white/20"
            onClick={onNext}
            aria-label={t("gallery.lightbox.next")}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        )}

        {/* Image */}
        <div className="flex flex-col items-center justify-center max-w-full max-h-full">
          <img
            src={currentImage.src || "/placeholder.svg"}
            alt={currentImage.alt}
            className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
          />

          {/* Caption */}
          {currentImage.caption && (
            <div className="mt-4 max-w-2xl text-center">
              <p className="text-white text-lg font-medium mb-2">{currentImage.alt}</p>
              <p className="text-white/80 text-sm leading-relaxed">{currentImage.caption}</p>
            </div>
          )}

          {/* Image counter */}
          {images.length > 1 && (
            <div className="mt-4 text-white/60 text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          )}
        </div>

        {/* Background overlay */}
        <div className="absolute inset-0 -z-10" onClick={onClose} aria-label={t("gallery.lightbox.close")} />
      </div>
    </div>
  )
}
