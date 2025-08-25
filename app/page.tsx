"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { VolunteerForm } from "@/components/volunteer-form"
import { AnimatedSection } from "@/components/animated-section"
import { ParallaxVideoHero } from "@/components/parallax-video-hero"
import { ParallaxHero } from "@/components/parallax-hero"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { InteractiveTimeline } from "@/components/interactive-timeline"

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen overflow-x-hidden">
      <ParallaxVideoHero
        backgroundVideo="/foodClothingPacking.mp4"
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
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary hover:bg-primary/90 shadow-lg"
                  >
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
                    <p className="text-white/80 text-sm leading-relaxed">
                      {t("home.hero.supportedFamilies")}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </ParallaxVideoHero>

      {/* About Us Section */}
      <section id="about" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">{t("home.about.title")}</h2>
            </div>
          </AnimatedSection>

          {/* Mission Statement */}
          <AnimatedSection animation="fade-up" delay={100}>
            <div className="max-w-4xl mx-auto mb-16">
              <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-primary">{t("home.about.mission.title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground leading-relaxed text-center">
                    {t("home.about.mission.description")}
                  </p>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>

          {/* Core Values */}
          <div className="mb-16">
            <AnimatedSection animation="fade-up">
              <h3 className="text-2xl font-bold text-primary text-center mb-8">{t("home.about.values.title")}</h3>
            </AnimatedSection>
            <div className="grid md:grid-cols-3 gap-6">
              <AnimatedSection animation="slide-left" delay={100}>
                <Card className="text-center border-primary/20 hover:border-primary/40 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-primary">{t("home.about.values.compassion")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{t("home.about.values.compassion.desc")}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
              <AnimatedSection animation="fade-up" delay={200}>
                <Card className="text-center border-secondary/20 hover:border-secondary/40 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-secondary">{t("home.about.values.integrity")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{t("home.about.values.integrity.desc")}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
              <AnimatedSection animation="slide-right" delay={300}>
                <Card className="text-center border-accent/20 hover:border-accent/40 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-accent">{t("home.about.values.community")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{t("home.about.values.community.desc")}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>

          {/* Milestones Timeline */}
          <div>
            <AnimatedSection animation="fade-up">
              <h3 className="text-2xl font-bold text-primary text-center mb-8">{t("home.about.milestones.title")}</h3>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={100}>
              <InteractiveTimeline
                events={[
                  {
                    year: "2016",
                    title: t("home.about.milestones.2016.title") || "Foundation Established",
                    description: t("home.about.milestones.2016"),
                    color: "primary",
                    details:
                      "Started with just 5 volunteers and a vision to make Herzeliya a better place for everyone.",
                  },
                  {
                    year: "2018",
                    title: t("home.about.milestones.2018.title") || "First Major Program",
                    description: t("home.about.milestones.2018"),
                    color: "secondary",
                    details: "Launched our elderly support program, serving over 50 seniors in the community.",
                  },
                  {
                    year: "2020",
                    title: t("home.about.milestones.2020.title") || "Pandemic Response",
                    description: t("home.about.milestones.2020"),
                    color: "accent",
                    details:
                      "Adapted our services during COVID-19, providing essential support to vulnerable community members.",
                  },
                  {
                    year: "2022",
                    title: t("home.about.milestones.2022.title") || "Youth Programs Launch",
                    description: t("home.about.milestones.2022"),
                    color: "primary",
                    details:
                      "Expanded to include youth mentorship and environmental programs, reaching over 200 young people.",
                  },
                  {
                    year: "2024",
                    title: t("home.about.milestones.2024.title") || "Community Recognition",
                    description: t("home.about.milestones.2024"),
                    color: "secondary",
                    details: "Received the Herzeliya Community Excellence Award for outstanding volunteer service.",
                  },
                ]}
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <ParallaxHero backgroundImage="/mentor-student-learning.png" className="py-16" speed={0.4}>
        <section id="programs" className="relative">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 drop-shadow-lg">
                  {t("home.programs.title")}
                </h2>
                <p className="text-lg text-white/90 max-w-2xl mx-auto drop-shadow-md">{t("home.programs.subtitle")}</p>
              </div>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatedSection animation="fade-up" delay={100}>
                <Card className="hover:shadow-lg transition-shadow border-primary/10 bg-white/95 backdrop-blur-sm">
                  <CardHeader>
                    <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                      <img
                        src="/elderly-volunteer-smile.png"
                        alt="Senior support program"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-primary">{t("home.programs.elderly.title")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 leading-relaxed">
                      {t("home.programs.elderly.description")}
                    </CardDescription>
                    <Button
                      asChild
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                    >
                      <Link href="/programs">{t("home.programs.learnMore")}</Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={200}>
                <Card className="hover:shadow-lg transition-shadow border-secondary/10 bg-white/95 backdrop-blur-sm">
                  <CardHeader>
                    <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                      <img
                        src="/mentor-student-learning.png"
                        alt="Youth mentorship program"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-secondary">{t("home.programs.youth.title")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 leading-relaxed">
                      {t("home.programs.youth.description")}
                    </CardDescription>
                    <Button
                      asChild
                      variant="outline"
                      className="border-secondary text-secondary hover:bg-secondary hover:text-white bg-transparent"
                    >
                      <Link href="/programs">{t("home.programs.learnMore")}</Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={300}>
                <Card className="hover:shadow-lg transition-shadow border-accent/10 md:col-span-2 lg:col-span-1 bg-white/95 backdrop-blur-sm">
                  <CardHeader>
                    <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                      <img
                        src="/placeholder-xxpdb.png"
                        alt="Environmental care program"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-accent">{t("home.programs.environment.title")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 leading-relaxed">
                      {t("home.programs.environment.description")}
                    </CardDescription>
                    <Button
                      asChild
                      variant="outline"
                      className="border-accent text-accent hover:bg-accent hover:text-white bg-transparent"
                    >
                      <Link href="/programs">{t("home.programs.learnMore")}</Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </ParallaxHero>

      {/* Get Involved Section */}
      <section id="get-involved" className="py-16 bg-background">
        <div className="container mx-auto px-4">
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
                <Card className="border-secondary/20 h-full">
                  <CardHeader>
                    <CardTitle className="text-secondary">{t("home.getInvolved.donation.title")}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col justify-between h-full">
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {t("home.getInvolved.donation.description")}
                    </p>
                    <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 w-full">
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
      <section id="contact" className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
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
                <Card className="border-primary/20 h-full">
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
                <Card className="border-secondary/20 h-full">
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
