"use client"

import { useParallax } from "@/hooks/use-parallax"
import type { ReactNode } from "react"

interface ParallaxHeroProps {
  children: ReactNode
  backgroundVideo: string
  className?: string
  speed?: number
  overlay?: ReactNode
}

export function ParallaxVideoHero({ children, backgroundVideo, className = "", speed = 0.5 }: ParallaxHeroProps) {
  const { transform } = useParallax({ speed })
  // Destructure overlay from props
  const args = arguments[0] as ParallaxHeroProps;
  const overlay = args.overlay;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Parallax Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover block"
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

      {/* Customizable Overlay */}
      {typeof overlay !== "undefined" && overlay}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
