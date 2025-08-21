"use client"

import { useParallax } from "@/hooks/use-parallax"
import type { ReactNode } from "react"

interface ParallaxHeroProps {
  children: ReactNode
  backgroundImage: string
  className?: string
  speed?: number
}

export function ParallaxHero({ children, backgroundImage, className = "", speed = 0.5 }: ParallaxHeroProps) {
  const { transform } = useParallax({ speed })

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Parallax Background */}
      <div
        className="absolute inset-0 w-full h-[120%] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          transform,
          willChange: "transform",
        }}
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
