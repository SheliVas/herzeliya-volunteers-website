"use client"

import { useEffect, useRef, useState } from "react"

interface UseParallaxOptions {
  speed?: number
  offset?: number
}

export function useParallax(options: UseParallaxOptions = {}) {
  const { speed = 0.5, offset = 0 } = options
  const [scrollY, setScrollY] = useState(0)
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const transform = `translateY(${(scrollY - offset) * speed}px)`

  return { ref: elementRef, transform }
}
