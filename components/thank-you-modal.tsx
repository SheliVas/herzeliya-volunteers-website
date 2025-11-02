"use client"

import { useEffect, useState } from "react"
import { X, CheckCircle, Heart, Users, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

interface ThankYouModalProps {
  isOpen: boolean
  onClose: () => void
  name?: string
}

export function ThankYouModal({ isOpen, onClose, name }: ThankYouModalProps) {
  const { t } = useLanguage()
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setShowConfetti(true)

      // Auto-close after 10 seconds
      const timer = setTimeout(() => {
        onClose()
      }, 10000)

      // Disable body scroll
      document.body.style.overflow = "hidden"

      return () => {
        clearTimeout(timer)
        document.body.style.overflow = "unset"
        setShowConfetti(false)
      }
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <>
      {/* Confetti Effect */}
      {showConfetti && (
        <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                top: "-10%",
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor: ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"][
                    Math.floor(Math.random() * 5)
                  ],
                }}
              />
            </div>
          ))}
        </div>
      )}

      {/* Modal Overlay */}
      <div
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
        onClick={onClose}
      >
        {/* Modal Content */}
        <div
          className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 animate-in zoom-in duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors p-2 rounded-full hover:bg-accent"
            aria-label={t("accessibility.close")}
          >
            <X className="h-5 w-5" />
          </button>

          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center animate-in zoom-in duration-500 delay-100">
              <CheckCircle className="h-12 w-12 text-primary" />
            </div>
          </div>

          {/* Thank You Message */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary mb-3">
              {name ? t("modal.thankYou.titleWithName").replace("{name}", name) : t("modal.thankYou.title")}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("modal.thankYou.message")}
            </p>
          </div>

          {/* Next Steps */}
          <div className="space-y-4 mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-secondary" />
              {t("modal.thankYou.nextSteps.title")}
            </h3>

            <div className="space-y-3">
              <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <p className="text-sm text-foreground">{t("modal.thankYou.nextSteps.step1")}</p>
              </div>

              <div className="flex items-start gap-3 p-4 bg-secondary/5 rounded-lg">
                <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <p className="text-sm text-foreground">{t("modal.thankYou.nextSteps.step2")}</p>
              </div>

              <div className="flex items-start gap-3 p-4 bg-accent/5 rounded-lg">
                <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <p className="text-sm text-foreground">{t("modal.thankYou.nextSteps.step3")}</p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="border-t border-border pt-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-4 flex items-center justify-center gap-2">
                <Users className="h-4 w-4" />
                {t("modal.thankYou.social.title")}
              </p>
              <div className="flex justify-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2"
                  onClick={() => window.open("https://www.facebook.com/herzliyavolunteers", "_blank")}
                >
                  <Heart className="h-4 w-4" />
                  {t("modal.thankYou.social.follow")}
                </Button>
              </div>
            </div>
          </div>

          {/* Auto-close indicator */}
          <div className="mt-6 text-center">
            <p className="text-xs text-muted-foreground italic">{t("modal.thankYou.autoClose")}</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes confetti {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
        .animate-confetti {
          animation: confetti linear forwards;
        }
      `}</style>
    </>
  )
}
