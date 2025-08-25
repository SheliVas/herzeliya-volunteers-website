"use client"

import { useParallax } from "@/hooks/use-parallax"
import type { ReactNode } from "react"

interface ParallaxHeroProps {
  children: ReactNode
  backgroundVideo: string
  className?: string
  speed?: number
}

export function ParallaxVideoHero({ children, backgroundVideo, className = "", speed = 0.5 }: ParallaxHeroProps) {
  const { transform } = useParallax({ speed })

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Parallax Background */}
        <video
          className="absolute inset-0 w-full h-[120%] object-cover block"
          style={{
            transform,
            willChange: "transform",
          }}
          src={backgroundVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-blue-950/80" />

        {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
