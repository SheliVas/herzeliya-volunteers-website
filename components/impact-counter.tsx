"use client"

import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/lib/language-context"

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
}

function Counter({ end, duration = 2000, suffix = "", prefix = "" }: CounterProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLSpanElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number | null = null
    const startValue = 0

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(startValue + (end - startValue) * easeOutQuart)

      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, end, duration])

  return (
    <span ref={countRef} className="tabular-nums">
      {prefix}
      {count}
      {suffix}
    </span>
  )
}

export function ImpactCounter() {
  const { t } = useLanguage()

  const metrics = [
    {
      value: 300,
      suffix: "+",
      labelKey: "home.impact.families",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      value: 31,
      suffix: "+",
      labelKey: "home.impact.years",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      value: 3,
      suffix: "",
      labelKey: "home.impact.shops",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl mx-auto isolate">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className={`${metric.bgColor} rounded-lg p-6 text-center transition-all duration-300 hover:brightness-110 hover:shadow-lg transform-gpu`}
        >
          <div className={`text-4xl lg:text-5xl font-bold ${metric.color} mb-2`}>
            <Counter end={metric.value} suffix={metric.suffix} />
          </div>
          <p className="text-sm lg:text-base text-white font-medium">{t(metric.labelKey)}</p>
        </div>
      ))}
    </div>
  )
}
