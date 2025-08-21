"use client"

import type React from "react"

import { useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

interface FormData {
  name: string
  email: string
  phone: string
  area: string
  availability: string[]
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  area?: string
  availability?: string
}

export function VolunteerForm() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    area: "",
    availability: [],
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

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
    } else if (!/^[\d\s\-+$$$$]+$/.test(formData.phone)) {
      newErrors.phone = t("home.getInvolved.form.error.phone")
    }

    if (!formData.area) {
      newErrors.area = t("home.getInvolved.form.error.area")
    }

    if (formData.availability.length === 0) {
      newErrors.availability = t("home.getInvolved.form.error.availability")
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("[v0] Form submitted:", formData)
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  const handleAvailabilityChange = (value: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      availability: checked ? [...prev.availability, value] : prev.availability.filter((item) => item !== value),
    }))
  }

  if (isSubmitted) {
    return (
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
    )
  }

  return (
    <Card className="border-primary/20 transition-all duration-300 hover:border-primary/40 hover:shadow-lg" data-card>
      <CardHeader>
        <CardTitle className="text-primary transition-colors duration-200">
          {t("home.getInvolved.form.title")}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
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
            />
            {errors.name && <p className="text-sm text-red-500 transition-opacity duration-200">{errors.name}</p>}
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
            />
            {errors.email && <p className="text-sm text-red-500 transition-opacity duration-200">{errors.email}</p>}
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
            />
            {errors.phone && <p className="text-sm text-red-500 transition-opacity duration-200">{errors.phone}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="area" className="transition-colors duration-200">
              {t("home.getInvolved.form.area")}
            </Label>
            <Select value={formData.area} onValueChange={(value) => setFormData((prev) => ({ ...prev, area: value }))}>
              <SelectTrigger
                className={`transition-all duration-200 hover:border-primary/60 ${errors.area ? "border-red-500" : ""}`}
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="transition-all duration-200">
                <SelectItem value="elderly" className="transition-colors duration-200 hover:bg-primary/10">
                  {t("home.getInvolved.form.area.elderly")}
                </SelectItem>
                <SelectItem value="youth" className="transition-colors duration-200 hover:bg-secondary/10">
                  {t("home.getInvolved.form.area.youth")}
                </SelectItem>
                <SelectItem value="environment" className="transition-colors duration-200 hover:bg-accent/10">
                  {t("home.getInvolved.form.area.environment")}
                </SelectItem>
                <SelectItem value="events" className="transition-colors duration-200 hover:bg-primary/10">
                  {t("home.getInvolved.form.area.events")}
                </SelectItem>
                <SelectItem value="admin" className="transition-colors duration-200 hover:bg-secondary/10">
                  {t("home.getInvolved.form.area.admin")}
                </SelectItem>
              </SelectContent>
            </Select>
            {errors.area && <p className="text-sm text-red-500 transition-opacity duration-200">{errors.area}</p>}
          </div>

          <div className="space-y-2">
            <Label className="transition-colors duration-200">{t("home.getInvolved.form.availability")}</Label>
            <div className="space-y-2">
              {["weekdays", "weekends", "evenings", "flexible"].map((option) => (
                <div
                  key={option}
                  className="flex items-center space-x-2 transition-all duration-200 hover:bg-accent/10 rounded p-1"
                >
                  <Checkbox
                    id={option}
                    checked={formData.availability.includes(option)}
                    onCheckedChange={(checked) => handleAvailabilityChange(option, checked as boolean)}
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
  )
}
