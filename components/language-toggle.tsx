"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { trackLanguageChange } from "@/lib/analytics"
import { Globe } from "lucide-react"

export function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage()

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "he" : "en"
    setLanguage(newLanguage)
    trackLanguageChange(newLanguage)
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 text-sm font-medium hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      aria-label={t("lang.toggle")}
    >
      <Globe className="h-4 w-4" />
      <span className="hidden sm:inline">{language === "en" ? "עב" : "EN"}</span>
    </Button>
  )
}
