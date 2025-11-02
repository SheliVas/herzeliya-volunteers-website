"use client"

import type React from "react"
import { useLanguage } from "@/lib/language-context"
import { useEffect } from "react"

export function HtmlWrapper({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) {
  const { language } = useLanguage()

  useEffect(() => {
    // Update document direction and lang attribute dynamically
    document.documentElement.dir = language === "he" ? "rtl" : "ltr"
    document.documentElement.lang = language
  }, [language])

  return <>{children}</>
}
