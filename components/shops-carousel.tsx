"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

interface Shop {
  id: string
  titleKey: string
  hoursKey: string
  managerKey: string
  itemsKey: string
  phoneKey: string
  color: "primary" | "secondary" | "accent"
}

interface ShopsCarouselProps {
  shops: Shop[]
}

export function ShopsCarousel({ shops }: ShopsCarouselProps) {
  const { t } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const getColorClasses = (color: "primary" | "secondary" | "accent") => {
    switch (color) {
      case "primary":
        return {
          text: "text-primary",
          bg: "bg-primary",
          bgHover: "hover:bg-primary/90",
          border: "border-primary/20",
          dot: "bg-primary",
        }
      case "secondary":
        return {
          text: "text-secondary",
          bg: "bg-secondary",
          bgHover: "hover:bg-secondary/90",
          border: "border-secondary/20",
          dot: "bg-secondary",
        }
      case "accent":
        return {
          text: "text-accent",
          bg: "bg-accent",
          bgHover: "hover:bg-accent/90",
          border: "border-accent/20",
          dot: "bg-accent",
        }
    }
  }

  const nextShop = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % shops.length)
  }

  const prevShop = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + shops.length) % shops.length)
  }

  const goToShop = (index: number) => {
    setCurrentIndex(index)
  }

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || isDragging) return

    const interval = setInterval(() => {
      nextShop()
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, currentIndex, isDragging])

  const handleInteraction = () => {
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const handleDragStart = (clientX: number) => {
    setIsDragging(true)
    setDragStart(clientX)
    setDragOffset(0)
    handleInteraction()
  }

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return
    const offset = clientX - dragStart
    setDragOffset(offset)
  }

  const handleDragEnd = () => {
    if (!isDragging) return
    setIsDragging(false)

    const threshold = 100 // Minimum drag distance to trigger slide
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        prevShop()
      } else {
        nextShop()
      }
    }
    setDragOffset(0)
  }

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    handleDragStart(e.clientX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    handleDragMove(e.clientX)
  }

  const handleMouseUp = () => {
    handleDragEnd()
  }

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    handleDragMove(e.touches[0].clientX)
  }

  const handleTouchEnd = () => {
    handleDragEnd()
  }

  const getCardStyle = (index: number) => {
    const diff = index - currentIndex
    const totalCards = shops.length

    // Handle circular positioning
    let position = diff
    if (diff > totalCards / 2) position = diff - totalCards
    if (diff < -totalCards / 2) position = diff + totalCards

    const isCenter = position === 0
    const isVisible = Math.abs(position) <= 1

    const dragOffsetPercent = isDragging ? (dragOffset / window.innerWidth) * 200 : 0
    const translateX = position * 120 + dragOffsetPercent

    return {
      transform: `translateX(${translateX}%) scale(${isCenter ? 1 : 0.85})`,
      opacity: isVisible ? (isCenter ? 1 : 0.6) : 0,
      zIndex: isCenter ? 20 : isVisible ? 10 : 0,
      filter: isCenter ? "blur(0px)" : "blur(1px)",
      pointerEvents: isCenter ? "auto" : "none",
      transition: isDragging ? "none" : "all 0.7s ease-out",
    }
  }

  return (
    <div className="relative w-full max-w-7xl mx-auto px-2">
      <div
        ref={containerRef}
        className="relative h-[650px] flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {shops.map((shop, index) => {
          const colorClasses = getColorClasses(shop.color)

          return (
            <div
              key={shop.id}
              className="absolute w-full max-w-md transition-all duration-700 ease-out"
              style={getCardStyle(index) as React.CSSProperties}
              onClick={() => {
                if (index !== currentIndex && !isDragging) {
                  handleInteraction()
                  goToShop(index)
                }
              }}
            >
              <Card
                className={`hover:shadow-xl transition-all duration-700 ${colorClasses.border} bg-white/95 backdrop-blur-sm transform hover:scale-105`}
              >
                <CardHeader>
                  <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                    <img
                      src="/placeholder.svg?height=200&width=300"
                      alt={t(shop.titleKey)}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      draggable={false}
                    />
                  </div>
                  <CardTitle className={`${colorClasses.text} text-xl`}>{t(shop.titleKey)}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-1">{t("home.shops.openingHours")}</h4>
                    <p className="text-sm">{t(shop.hoursKey)}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-1">{t("home.shops.manager")}</h4>
                    <p className="text-sm">{t(shop.managerKey)}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-1">{t("home.shops.mainItems")}</h4>
                    <p className="text-sm leading-relaxed">{t(shop.itemsKey)}</p>
                  </div>
                  <Button
                    asChild
                    className={`w-full ${colorClasses.bg} ${colorClasses.bgHover} transition-all duration-300`}
                  >
                    <a href={`tel:${t(shop.phoneKey)}`}>{t("home.shops.callManager")}</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          )
        })}
      </div>

      <div className="flex justify-center gap-3 mt-8">
        {shops.map((shop, index) => {
          const colorClasses = getColorClasses(shop.color)

          return (
            <button
              key={index}
              className={`w-4 h-4 rounded-full transition-all duration-500 transform hover:scale-125 ${
                index === currentIndex ? `${colorClasses.dot} scale-125 shadow-lg` : "bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => {
                handleInteraction()
                goToShop(index)
              }}
              aria-label={`Go to shop ${index + 1}`}
            />
          )
        })}
      </div>
    </div>
  )
}
