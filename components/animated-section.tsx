"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import type { ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right"
  delay?: number
}

export function AnimatedSection({ children, className = "", animation = "fade-up", delay = 0 }: AnimatedSectionProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "-50px",
    triggerOnce: false,
  })

  const getAnimationClasses = () => {
    const baseClasses = "transition-all duration-700 ease-out"

    if (!isIntersecting) {
      switch (animation) {
        case "fade-up":
          return `${baseClasses} opacity-0 translate-y-8`
        case "fade-in":
          return `${baseClasses} opacity-0`
        case "slide-left":
          return `${baseClasses} opacity-0 -translate-x-8`
        case "slide-right":
          return `${baseClasses} opacity-0 translate-x-8`
        default:
          return `${baseClasses} opacity-0 translate-y-8`
      }
    }

    return `${baseClasses} opacity-100 translate-y-0 translate-x-0`
  }

  return (
    <div ref={ref} className={`${getAnimationClasses()} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}
