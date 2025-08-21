"use client"

import { useLanguage } from "@/lib/language-context"
import { LanguageToggle } from "@/components/language-toggle"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-background border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright and Credits */}
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground mb-1">{t("footer.copyright")}</p>
            <p className="text-xs text-muted-foreground">{t("footer.credits")}</p>
          </div>

          <div className="flex items-center">
            <LanguageToggle />
          </div>
        </div>
      </div>
    </footer>
  )
}
