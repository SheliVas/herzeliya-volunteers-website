"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LanguageToggle } from "@/components/language-toggle"
import { useLanguage } from "@/lib/language-context"
import { useState, useEffect, useRef } from "react"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

const navigationKeys = [
  { href: "/", key: "nav.home" },
  { href: "#about", key: "nav.about" },
  { href: "#programs", key: "nav.programs" },
  { href: "/gallery", key: "nav.gallery" },
  { href: "#get-involved", key: "nav.getInvolved" },
  { href: "#contact", key: "nav.contact" },
]

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t } = useLanguage()
  const pathname = usePathname()
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null)

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
    setIsMobileMenuOpen(false)
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
        mobileMenuButtonRef.current?.focus()
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        !mobileMenuButtonRef.current?.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMobileMenuOpen])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-200">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Organization Logo and Name */}
          <Link
            href="/"
            className="flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm transition-all duration-200 hover:scale-105"
            aria-label={`${t("site.title")} - ${t("nav.home")}`}
          >
            <img
              src="/herzeliya-volunteers-logo-blue-and-white.png"
              alt={t("site.title")}
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="text-lg font-serif font-bold text-primary transition-colors duration-200">
              {t("site.title")}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6" aria-label={t("accessibility.mainNavigation")}>
            {navigationKeys.map((link) => {
              const isCurrentPage = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    if (link.href.startsWith("#")) {
                      e.preventDefault()
                      handleNavClick(link.href)
                    }
                  }}
                  className={`text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm px-2 py-1 hover:scale-105 ${
                    isCurrentPage ? "text-primary font-semibold" : "text-foreground hover:text-primary"
                  }`}
                  aria-current={isCurrentPage ? "page" : undefined}
                  aria-label={isCurrentPage ? `${t(link.key)} - ${t("accessibility.currentPage")}` : t(link.key)}
                >
                  {t(link.key)}
                </Link>
              )
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2">
            <LanguageToggle />
            <Button
              asChild
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2 focus:ring-offset-primary transition-all duration-200 hover:scale-105 hover:shadow-lg"
              aria-label={t("nav.donate")}
            >
              <a href="https://donate.example.com/herzeliya-volunteers" target="_blank" rel="noopener noreferrer">
                {t("nav.donate")}
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageToggle />
            <button
              ref={mobileMenuButtonRef}
              className="p-2 rounded-md hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200 hover:scale-105"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={t("accessibility.toggleMobileMenu")}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            id="mobile-menu"
            className="md:hidden border-t bg-background transition-all duration-300 animate-in slide-in-from-top-2"
            role="dialog"
            aria-modal="true"
            aria-label={t("accessibility.mainNavigation")}
          >
            <nav className="flex flex-col space-y-2 px-4 py-4">
              {navigationKeys.map((link, index) => {
                const isCurrentPage = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith("#")) {
                        e.preventDefault()
                        handleNavClick(link.href)
                      } else {
                        setIsMobileMenuOpen(false)
                      }
                    }}
                    className={`text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm px-2 py-2 hover:bg-accent/50 hover:translate-x-1 ${
                      isCurrentPage ? "text-primary font-semibold" : "text-foreground hover:text-primary"
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                    aria-current={isCurrentPage ? "page" : undefined}
                    aria-label={isCurrentPage ? `${t(link.key)} - ${t("accessibility.currentPage")}` : t(link.key)}
                  >
                    {t(link.key)}
                  </Link>
                )
              })}
              <div className="pt-2">
                <Button
                  asChild
                  size="sm"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2 focus:ring-offset-primary transition-all duration-200 hover:scale-105 hover:shadow-lg"
                  aria-label={t("nav.donate")}
                >
                  <a
                    href="https://donate.example.com/herzeliya-volunteers"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t("nav.donate")}
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
