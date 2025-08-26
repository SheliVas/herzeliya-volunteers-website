"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { VolunteerForm } from "@/components/volunteer-form"
import { AnimatedSection } from "@/components/animated-section"
import { ParallaxVideoHero } from "@/components/parallax-video-hero"
import { ParallaxHero } from "@/components/parallax-hero"
import { TestimonialCarousel } from "@/components/testimonial-carousel"

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen overflow-x-hidden">
      <ParallaxVideoHero
        backgroundVideo="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_6PT9B7a4ecS2rlmIW6oywde2QjCt/1nAESb6KwFhg73onqcEkor/public/foodClothingPacking.mp4"
        className="py-20 lg:py-32 min-h-[80vh] flex items-center"
        speed={0.3}
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-up">
              <div className="space-y-6">
                <h1 className="text-3xl lg:text-5xl font-bold text-white leading-tight drop-shadow-lg">
                  {t("home.hero.headline")}
                </h1>
                <p className="text-lg text-white/90 leading-relaxed max-w-xl drop-shadow-md">
                  {t("home.hero.tagline")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 shadow-lg">
                    <Link href="https://pay.tranzila.com/mitnadvim/ekpvdWF5bnp0QmhQazRHYWdwTmlaUT09">
                      {t("home.hero.donateNow")}
                    </Link>
                  </Button>
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 shadow-lg">
                    <Link href="#get-involved">{t("home.hero.joinUs")}</Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-left" delay={200}>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 shadow-xl border border-white/20">
                  <div className="text-center space-y-4">
                    <div className="text-4xl font-bold text-white drop-shadow-lg">300+</div>
                    <p className="text-white/90 font-medium">{t("home.impact.volunteers")}</p>
                    <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
                    <p className="text-white/80 text-sm leading-relaxed">{t("home.hero.supportedFamilies")}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </ParallaxVideoHero>

      {/* About Us Section */}
      <section id="about" className="py-16 section-pattern-primary">
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection animation="fade-down">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">{t("home.about.title")}</h2>
            </div>
          </AnimatedSection>

          {/* Operational Rectangles */}
          <div className="mb-16">
            <AnimatedSection animation="fade-down">
              <h3 className="text-2xl font-bold text-primary text-center mb-8">{t("home.about.operations.title")}</h3>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {/* Thrift Shops - top left */}
              <AnimatedSection animation="slide-right" delay={100}>
                <Card className="group relative overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
                  <CardHeader>
                    <div className="w-full h-full mb-4 rounded-lg overflow-hidden">
                      <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
                        <source
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_6PT9B7a4ecS2rlmIW6oywde2QjCt/lasJciKx3z_Q-tOLEZQc7Q/public/thriftShop.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                    <CardTitle className="text-secondary group-hover:text-secondary/90 transition-colors mb-2">
                      {t("home.about.shops.title")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                      {t("home.about.shops.description")}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="slide-left" delay={200}>
                <Card className="group relative overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
                  <CardHeader>
                    <CardTitle className="text-accent group-hover:text-accent/90 transition-colors mb-2">
                      {t("home.about.donations.title")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors text-sm">
                      {t("home.about.donations.description")}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="slide-right" delay={300}>
                <Card className="group relative overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
                  <CardHeader>
                    <CardTitle className="text-primary group-hover:text-primary/90 transition-colors mb-2">
                      {t("home.about.distribution.title")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors text-sm">
                      {t("home.about.distribution.description")}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="slide-left" delay={400}>
                <Card className="group relative overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
                  <CardHeader>
                    <div className="w-full h-full mb-4 rounded-lg overflow-hidden">
                      <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
                        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_6PT9B7a4ecS2rlmIW6oywde2QjCt/3JisanrrHvtZJzT3Zm4hNQ/public/foodBoxPacking2.mp4" type="video/mp4" />
                      </video>
                    </div>
                    <CardTitle className="text-primary group-hover:text-primary/90 transition-colors mb-2">
                      {t("home.about.warehouse.title")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                      {t("home.about.warehouse.description")}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Shops Section */}
      <ParallaxHero backgroundImage="/mentor-student-learning.png" className="py-16" speed={0.4}>
        <section id="shops" className="relative">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 drop-shadow-lg">
                  {t("home.shops.title")}
                </h2>
                <p className="text-lg text-white/90 max-w-2xl mx-auto drop-shadow-md">{t("home.shops.subtitle")}</p>
              </div>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatedSection animation="fade-up" delay={100}>
                <Card className="hover:shadow-lg transition-shadow border-primary/10 bg-white/95 backdrop-blur-sm">
                  <CardHeader>
                    <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                      <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Herzeliya Center thrift store"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-primary">{t("home.shops.herzliya1.title")}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-1">
                        {t("home.shops.openingHours")}
                      </h4>
                      <p className="text-sm">{t("home.shops.herzliya1.hours")}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-1">{t("home.shops.manager")}</h4>
                      <p className="text-sm">{t("home.shops.herzliya1.manager")}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-1">{t("home.shops.mainItems")}</h4>
                      <p className="text-sm leading-relaxed">{t("home.shops.herzliya1.items")}</p>
                    </div>
                    <Button asChild className="w-full bg-primary hover:bg-primary/90">
                      <a href={`tel:${t("home.shops.herzliya1.phone")}`}>{t("home.shops.callManager")}</a>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={200}>
                <Card className="hover:shadow-lg transition-shadow border-secondary/10 bg-white/95 backdrop-blur-sm">
                  <CardHeader>
                    <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                      <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Herzliya Pituach thrift store"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-secondary">{t("home.shops.herzliya2.title")}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-1">
                        {t("home.shops.openingHours")}
                      </h4>
                      <p className="text-sm">{t("home.shops.herzliya2.hours")}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-1">{t("home.shops.manager")}</h4>
                      <p className="text-sm">{t("home.shops.herzliya2.manager")}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-1">{t("home.shops.mainItems")}</h4>
                      <p className="text-sm leading-relaxed">{t("home.shops.herzliya2.items")}</p>
                    </div>
                    <Button asChild className="w-full bg-secondary hover:bg-secondary/90">
                      <a href={`tel:${t("home.shops.herzliya2.phone")}`}>{t("home.shops.callManager")}</a>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={300}>
                <Card className="hover:shadow-lg transition-shadow border-accent/10 md:col-span-2 lg:col-span-1 bg-white/95 backdrop-blur-sm">
                  <CardHeader>
                    <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                      <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Old Herzeliya thrift store"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-accent">{t("home.shops.herzliya3.title")}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-1">
                        {t("home.shops.openingHours")}
                      </h4>
                      <p className="text-sm">{t("home.shops.herzliya3.hours")}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-1">{t("home.shops.manager")}</h4>
                      <p className="text-sm">{t("home.shops.herzliya3.manager")}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-1">{t("home.shops.mainItems")}</h4>
                      <p className="text-sm leading-relaxed">{t("home.shops.herzliya3.items")}</p>
                    </div>
                    <Button asChild className="w-full bg-accent hover:bg-accent/90">
                      <a href={`tel:${t("home.shops.herzliya3.phone")}`}>{t("home.shops.callManager")}</a>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </ParallaxHero>

      {/* Get Involved Section */}
      <section id="get-involved" className="py-16 section-pattern-secondary floating-shapes">
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">{t("home.getInvolved.title")}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("home.getInvolved.subtitle")}</p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Volunteer Form */}
            <AnimatedSection animation="slide-right" delay={100}>
              <div>
                <VolunteerForm />
              </div>
            </AnimatedSection>

            {/* Donation Section */}
            <AnimatedSection animation="slide-left" delay={200}>
              <div>
                <Card className="border-secondary/20 h-full card-enhanced">
                  <CardHeader>
                    <CardTitle className="text-secondary">{t("home.getInvolved.donation.title")}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col justify-between h-full">
                    <div className="space-y-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {t("home.getInvolved.donation.description")}
                      </p>

                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg
                              className="w-3 h-3 text-secondary"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {t("home.getInvolved.donation.benefits.tax")}
                          </p>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg
                              className="w-3 h-3 text-secondary"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {t("home.getInvolved.donation.benefits.secure")}
                          </p>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg
                              className="w-3 h-3 text-secondary"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {t("home.getInvolved.donation.benefits.impact")}
                          </p>
                        </div>
                      </div>
                    </div>

                    <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 w-full mt-6">
                      <a
                        href="https://pay.tranzila.com/mitnadvim/ekpvdWF5bnp0QmhQazRHYWdwTmlaUT09"
                        rel="noopener noreferrer"
                        aria-label={`${t("home.getInvolved.donation.button")} - ${t("accessibility.openInNewTab")}`}
                      >
                        {t("home.getInvolved.donation.button")}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          </div>

          {/* Testimonials */}
          <div>
            <AnimatedSection animation="fade-up">
              <h3 className="text-2xl font-bold text-primary text-center mb-8">
                {t("home.getInvolved.testimonials.title")}
              </h3>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={100}>
              <TestimonialCarousel
                testimonials={[
                  {
                    quote: t("home.getInvolved.testimonials.sarah"),
                    name: t("home.getInvolved.testimonials.sarah.name"),
                    color: "primary",
                  },
                  {
                    quote: t("home.getInvolved.testimonials.david"),
                    name: t("home.getInvolved.testimonials.david.name"),
                    color: "secondary",
                  },
                  {
                    quote: t("home.getInvolved.testimonials.rachel"),
                    name: t("home.getInvolved.testimonials.rachel.name"),
                    color: "accent",
                  },
                ]}
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-16 section-pattern-accent">
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">{t("home.contact.title")}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("home.contact.subtitle")}</p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <AnimatedSection animation="slide-right" delay={100}>
              <div>
                <Card className="border-primary/20 h-full card-enhanced">
                  <CardHeader>
                    <CardTitle className="text-primary">{t("home.contact.info.title")}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary mb-1">{t("home.contact.email")}</h3>
                        <a
                          href="mailto:info@herzeliyavolunteers.org"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label={`${t("home.contact.email")}: ${t("home.contact.email.value")}`}
                        >
                          {t("home.contact.email.value")}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-secondary mb-1">{t("home.contact.phone")}</h3>
                        <a
                          href="tel:+972-9-123-4567"
                          className="text-muted-foreground hover:text-secondary transition-colors"
                          aria-label={`${t("home.contact.phone")}: ${t("home.contact.phone.value")}`}
                        >
                          {t("home.contact.phone.value")}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-accent mb-1">{t("home.contact.address")}</h3>
                        <p className="text-muted-foreground">{t("home.contact.address.value")}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary mb-1">{t("home.contact.hours")}</h3>
                        <p className="text-muted-foreground">{t("home.contact.hours.value")}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>

            {/* Map */}
            <AnimatedSection animation="slide-left" delay={200}>
              <div>
                <Card className="border-secondary/20 h-full card-enhanced">
                  <CardHeader>
                    <CardTitle className="text-secondary">{t("home.contact.map.title")}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="w-full h-80 rounded-b-lg overflow-hidden">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3378.8267896394!2d34.8441!3d32.1624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4ca6193b7c1f%3A0x4e9427a2d5b8c5a0!2sHerzliya%2C%20Israel!5e0!3m2!1sen!2sus!4v1234567890123"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={t("home.contact.map.title")}
                        aria-label="Map showing Herzeliya Volunteers location in Herzliya, Israel"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  )
}
