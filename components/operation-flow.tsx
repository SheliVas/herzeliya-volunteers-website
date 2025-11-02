"use client"

import { useLanguage } from "@/lib/language-context"
import { AnimatedSection } from "@/components/animated-section"
import { useEffect, useState } from "react"

export function OperationFlow() {
  const { t } = useLanguage()
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const flowSection = document.getElementById("operation-flow")
      if (!flowSection) return

      const rect = flowSection.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const scrollProgress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height)))
      const step = Math.floor(scrollProgress * 5)
      setActiveStep(step)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const steps = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
          />
        </svg>
      ),
      titleKey: "home.operation.step1.title",
      descKey: "home.operation.step1.description",
      color: "primary",
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      titleKey: "home.operation.step2.title",
      descKey: "home.operation.step2.description",
      color: "secondary",
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      ),
      titleKey: "home.operation.step3.title",
      descKey: "home.operation.step3.description",
      color: "accent",
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      titleKey: "home.operation.step4.title",
      descKey: "home.operation.step4.description",
      color: "primary",
    },
  ]

  return (
    <section
      id="operation-flow"
      className="py-20 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection animation="fade-down">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">{t("home.operation.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t("home.operation.subtitle")}</p>
          </div>
        </AnimatedSection>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent transform -translate-x-1/2 hidden md:block" />

          {steps.map((step, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
              <div className="relative mb-16 last:mb-0">
                {/* Step container */}
                <div
                  className={`flex flex-col md:flex-row items-center gap-8 transition-all duration-700 ${
                    activeStep >= index ? "opacity-100 scale-100" : "opacity-50 scale-95"
                  }`}
                >
                  {/* Content - alternates sides on desktop */}
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12 md:order-2"
                    }`}
                  >
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                      <h3
                        className={`text-xl font-bold mb-3 ${
                          step.color === "primary"
                            ? "text-primary"
                            : step.color === "secondary"
                              ? "text-secondary"
                              : "text-accent"
                        }`}
                      >
                        {t(step.titleKey)}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{t(step.descKey)}</p>
                    </div>
                  </div>

                  {/* Icon circle */}
                  <div className="relative flex-shrink-0 md:order-1">
                    <div
                      className={`w-20 h-20 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 ${
                        activeStep >= index ? "scale-110" : "scale-100"
                      } ${
                        step.color === "primary"
                          ? "bg-primary text-white"
                          : step.color === "secondary"
                            ? "bg-secondary text-white"
                            : "bg-accent text-white"
                      }`}
                    >
                      {step.icon}
                    </div>
                    {/* Pulse effect when active */}
                    {activeStep === index && (
                      <div
                        className={`absolute inset-0 rounded-full animate-ping ${
                          step.color === "primary"
                            ? "bg-primary/30"
                            : step.color === "secondary"
                              ? "bg-secondary/30"
                              : "bg-accent/30"
                        }`}
                      />
                    )}
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden md:block" />
                </div>

                {/* Arrow between steps */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center my-8 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:my-0 md:top-full md:mt-4">
                    <svg
                      className={`w-8 h-8 transition-all duration-500 ${
                        activeStep > index ? "text-primary opacity-100" : "text-gray-300 opacity-50"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-up" delay={400}>
          <div className="mt-16 text-center">
            <div className="inline-block bg-gradient-to-r from-primary via-secondary to-accent p-8 rounded-2xl shadow-xl">
              <div className="flex items-center justify-center gap-4 mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <h3 className="text-white font-bold text-2xl">{t("home.operation.step5.title")}</h3>
              </div>
              <p className="text-white/90 text-lg mb-4 max-w-2xl">{t("home.operation.step5.description")}</p>
              <p className="text-white font-semibold text-lg max-w-2xl">{t("home.operation.conclusion")}</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
