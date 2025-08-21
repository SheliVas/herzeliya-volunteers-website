"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Testimonial {
  quote: string
  name: string
  color: "primary" | "secondary" | "accent"
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    goToSlide(newIndex)
  }

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % testimonials.length
    goToSlide(newIndex)
  }

  const getColorClasses = (color: "primary" | "secondary" | "accent") => {
    switch (color) {
      case "primary":
        return "border-primary/10 hover:border-primary/20 text-primary"
      case "secondary":
        return "border-secondary/10 hover:border-secondary/20 text-secondary"
      case "accent":
        return "border-accent/10 hover:border-accent/20 text-accent"
      default:
        return "border-primary/10 hover:border-primary/20 text-primary"
    }
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Main carousel container */}
      <div className="overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <Card className={`transition-colors ${getColorClasses(testimonial.color)}`}>
                <CardContent className="pt-8 pb-6 text-center">
                  <blockquote className="text-lg text-muted-foreground italic mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <cite
                    className={`text-base font-medium not-italic ${getColorClasses(testimonial.color).split(" ")[2]}`}
                  >
                    {testimonial.name}
                  </cite>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-background/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 hover:bg-primary/10"
        onClick={goToPrevious}
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-background/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 hover:bg-primary/10"
        onClick={goToNext}
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-primary scale-110" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress indicator */}
      <div className="w-full bg-muted-foreground/20 rounded-full h-1 mt-4 overflow-hidden">
        <div
          className="bg-primary h-full transition-all duration-300 ease-out"
          style={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}
        />
      </div>
    </div>
  )
}
