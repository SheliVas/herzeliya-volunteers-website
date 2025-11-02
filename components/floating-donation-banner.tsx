"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { trackDonateClick } from "@/lib/analytics"

export function FloatingDonationBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const { t, language } = useLanguage()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  const isRTL = language === "he"

  return (
    <div
      className={`fixed ${isRTL ? "left-6" : "right-6"} bottom-24 z-40 transition-all duration-500 ease-in-out animate-in slide-in-from-bottom-5`}
      style={{ maxWidth: "200px" }}
    >
      <div className="card-enhanced rounded-xl shadow-lg p-3 border border-border/50 backdrop-blur-md relative">
        <button
          onClick={() => setIsVisible(false)}
          className={`absolute ${isRTL ? "left-1" : "right-1"} -top-2 text-muted-foreground hover:text-foreground transition-colors p-1 rounded-full bg-background/80 backdrop-blur-sm shadow-sm hover:bg-muted/50`}
          aria-label="Close"
        >
          <X className="h-3 w-3" />
        </button>

        {/* Donation button only */}
        <Button
          className="w-full btn-primary font-semibold text-sm py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          onClick={() => {
            trackDonateClick("floating")
            window.open("https://pay.tranzila.com/mitnadvim/ekpvdWF5bnp0QmhQazRHYWdwTmlaUT09", "_blank")
          }}
        >
          {t("home.getInvolved.donation.button")}
        </Button>
      </div>
    </div>
  )
}
