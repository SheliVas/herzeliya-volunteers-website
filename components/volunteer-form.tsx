"use client"

import type React from "react"

import { useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { trackVolunteerSubmit } from "@/lib/analytics"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ThankYouModal } from "@/components/thank-you-modal"

interface FormData {
  name: string
  email: string
  phone: string
  area: string[]
  availability: string[]
  consent: boolean
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  area?: string
  availability?: string
  consent?: string
}

export function VolunteerForm() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    area: [],
    availability: [],
    consent: false,
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formStatus, setFormStatus] = useState<string>("")
  const [showThankYouModal, setShowThankYouModal] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = t("home.getInvolved.form.error.name")
    }

    if (!formData.email.trim()) {
      newErrors.email = t("home.getInvolved.form.error.email")
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t("home.getInvolved.form.error.email")
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t("home.getInvolved.form.error.phone")
    } else if (!/^[\d\s\-+()]+$/.test(formData.phone)) {
      newErrors.phone = t("home.getInvolved.form.error.phone")
    }

    if (formData.area.length === 0) {
      newErrors.area = t("home.getInvolved.form.error.area")
    }

    if (formData.availability.length === 0) {
      newErrors.availability = t("home.getInvolved.form.error.availability")
    }

    if (!formData.consent) {
      newErrors.consent = t("home.getInvolved.form.error.consent")
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      // Focus first error field
      const firstErrorField = Object.keys(errors)[0]
      if (firstErrorField) {
        const element = document.getElementById(firstErrorField === "area" || firstErrorField === "availability" ? firstErrorField : firstErrorField)
        element?.focus()
      }
      setFormStatus(t("home.getInvolved.form.error.name"))
      return
    }

    setIsSubmitting(true)
    setFormStatus(t("home.getInvolved.form.submitting"))

    try {
      // Submit to Google Sheets API
      const response = await fetch("/api/volunteer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit form")
      }

      // Success
      console.log("Form submitted successfully:", data)
      trackVolunteerSubmit(formData.area, formData.availability)
      setFormStatus(t("home.getInvolved.form.success"))
      setIsSubmitted(true)
      setShowThankYouModal(true)
    } catch (error) {
      console.error("Error submitting form:", error)
      const errorMessage = error instanceof Error ? error.message : "Failed to submit. Please try again."
      // Show error to user
      setErrors({
        name: errorMessage,
      })
      setFormStatus(errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleAreaChange = (value: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      area: checked ? [...prev.area, value] : prev.area.filter((item) => item !== value),
    }))
  }

  const handleAvailabilityChange = (value: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      availability: checked ? [...prev.availability, value] : prev.availability.filter((item) => item !== value),
    }))
  }

  if (isSubmitted) {
    return (
      <>
        <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-lg text-primary font-medium">{t("home.getInvolved.form.success")}</p>
            </div>
          </CardContent>
        </Card>

        {/* Thank You Modal */}
        <ThankYouModal
          isOpen={showThankYouModal}
          onClose={() => setShowThankYouModal(false)}
          name={formData.name}
        />
      </>
    )
  }

  return (
    <>
    <Card className="border-primary/20 transition-all duration-300 hover:border-primary/40 hover:shadow-lg" data-card>
      <CardHeader>
        <CardTitle className="text-primary transition-colors duration-200">
          {t("home.getInvolved.form.title")}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Form Status - ARIA live region */}
        <div
          role="status"
          aria-live="polite"
          aria-atomic="true"
          className="sr-only"
        >
          {formStatus}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4" aria-busy={isSubmitting}>
          <div className="space-y-2">
            <Label htmlFor="name" className="transition-colors duration-200">
              {t("home.getInvolved.form.name")}
            </Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
              className={`transition-all duration-200 hover:border-primary/60 focus:scale-[1.02] ${errors.name ? "border-red-500 focus:border-red-500" : ""}`}
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && <p id="name-error" className="text-sm text-red-500 transition-opacity duration-200" role="alert">{errors.name}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="transition-colors duration-200">
              {t("home.getInvolved.form.email")}
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
              className={`transition-all duration-200 hover:border-primary/60 focus:scale-[1.02] ${errors.email ? "border-red-500 focus:border-red-500" : ""}`}
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && <p id="email-error" className="text-sm text-red-500 transition-opacity duration-200" role="alert">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="transition-colors duration-200">
              {t("home.getInvolved.form.phone")}
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
              className={`transition-all duration-200 hover:border-primary/60 focus:scale-[1.02] ${errors.phone ? "border-red-500 focus:border-red-500" : ""}`}
              aria-invalid={errors.phone ? "true" : "false"}
              aria-describedby={errors.phone ? "phone-error" : undefined}
            />
            {errors.phone && <p id="phone-error" className="text-sm text-red-500 transition-opacity duration-200" role="alert">{errors.phone}</p>}
          </div>

          <div className="space-y-2">
            <Label className="transition-colors duration-200">{t("home.getInvolved.form.area")}</Label>
            <div className="space-y-2">
              {["shops", "warehouse", "distribution"].map((option) => (
                <div
                  key={option}
                  className="flex items-center space-x-2 transition-all duration-200 hover:bg-accent/10 rounded p-1"
                >
                  <Checkbox
                    id={`area-${option}`}
                    checked={formData.area.includes(option)}
                    onCheckedChange={(checked: boolean) => handleAreaChange(option, checked)}
                    className="transition-all duration-200 hover:scale-110"
                  />
                  <Label htmlFor={`area-${option}`} className="text-sm transition-colors duration-200 cursor-pointer">
                    {t(`home.getInvolved.form.area.${option}`)}
                  </Label>
                </div>
              ))}
            </div>
            {errors.area && <p className="text-sm text-red-500 transition-opacity duration-200">{errors.area}</p>}
          </div>

          <div className="space-y-2">
            <Label className="transition-colors duration-200">{t("home.getInvolved.form.availability")}</Label>
            <div className="space-y-2">
              {["sunday", "monday", "tuesday", "wednesday", "thursday", "flexible"].map((option) => (
                <div
                  key={option}
                  className="flex items-center space-x-2 transition-all duration-200 hover:bg-accent/10 rounded p-1"
                >
                  <Checkbox
                    id={option}
                    checked={formData.availability.includes(option)}
                    onCheckedChange={(checked: boolean) => handleAvailabilityChange(option, checked)}
                    className="transition-all duration-200 hover:scale-110"
                  />
                  <Label htmlFor={option} className="text-sm transition-colors duration-200 cursor-pointer">
                    {t(`home.getInvolved.form.availability.${option}`)}
                  </Label>
                </div>
              ))}
            </div>
            {errors.availability && (
              <p className="text-sm text-red-500 transition-opacity duration-200">{errors.availability}</p>
            )}
          </div>

          <div className="space-y-3 pt-4 border-t border-gray-200">
            <div className="flex items-start space-x-2">
              <Checkbox
                id="consent"
                checked={formData.consent}
                onCheckedChange={(checked: boolean) => setFormData((prev) => ({ ...prev, consent: checked }))}
                className="mt-1 transition-all duration-200 hover:scale-110"
              />
              <Label htmlFor="consent" className="text-sm transition-colors duration-200 cursor-pointer leading-relaxed">
                {t("home.getInvolved.form.consent")}{" "}
                <a href="#privacy" className="text-primary hover:text-secondary transition-colors underline">
                  {t("home.privacy.title")}
                </a>
              </Label>
            </div>
            {errors.consent && <p className="text-sm text-red-500 transition-opacity duration-200" role="alert">{errors.consent}</p>}

            <p className="text-xs text-muted-foreground leading-relaxed bg-accent/5 p-3 rounded-md border border-accent/20">
              {t("home.getInvolved.form.transparency")}
            </p>
          </div>

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 transition-all duration-200 hover:scale-105 hover:shadow-lg disabled:hover:scale-100 disabled:hover:shadow-none"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                {t("home.getInvolved.form.submitting")}
              </span>
            ) : (
              t("home.getInvolved.form.submit")
            )}
          </Button>
        </form>
      </CardContent>
    </Card>

    {/* Thank You Modal */}
    <ThankYouModal
      isOpen={showThankYouModal}
      onClose={() => setShowThankYouModal(false)}
      name={formData.name}
    />
  </>
  )
}
