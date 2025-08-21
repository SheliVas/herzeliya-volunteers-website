"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"

interface TimelineEvent {
  year: string
  title: string
  description: string
  color: "primary" | "secondary" | "accent"
  details?: string
}

interface InteractiveTimelineProps {
  events: TimelineEvent[]
}

export function InteractiveTimeline({ events }: InteractiveTimelineProps) {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null)

  const getColorClasses = (color: string) => {
    const baseClasses = {
      primary: {
        node: "border-primary bg-primary/5 hover:bg-primary/10",
        line: "bg-primary",
        text: "text-primary",
      },
      secondary: {
        node: "border-secondary bg-secondary/5 hover:bg-secondary/10",
        line: "bg-secondary",
        text: "text-secondary",
      },
      accent: {
        node: "border-accent bg-accent/5 hover:bg-accent/10",
        line: "bg-accent",
        text: "text-accent",
      },
    }
    return baseClasses[color as keyof typeof baseClasses] || baseClasses.primary
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative">
        {/* Central vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent transform -translate-x-px"></div>

        {/* Timeline events */}
        <div className="space-y-12">
          {events.map((event, index) => {
            const isLeft = index % 2 === 0
            const colorClasses = getColorClasses(event.color)

            return (
              <AnimatedSection key={event.year} animation={isLeft ? "slide-right" : "slide-left"} delay={index * 100}>
                <div className={`flex items-center ${isLeft ? "flex-row" : "flex-row-reverse"}`}>
                  {/* Content node */}
                  <div className={`w-5/12 ${isLeft ? "pr-8" : "pl-8"}`}>
                    <Card
                      className={`${colorClasses.node} border-2 transition-all duration-300 cursor-pointer hover:shadow-lg`}
                      onClick={() => setSelectedEvent(selectedEvent?.year === event.year ? null : event)}
                    >
                      <CardHeader className="pb-3">
                        <div className={`text-sm font-bold ${colorClasses.text} mb-1`}>{event.year}</div>
                        <CardTitle className="text-lg leading-tight">{event.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
                        {selectedEvent?.year === event.year && event.details && (
                          <div className="mt-4 p-3 bg-muted/30 rounded-md">
                            <p className="text-xs text-muted-foreground leading-relaxed">{event.details}</p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>

                  {/* Central connector */}
                  <div className="relative flex items-center justify-center w-2/12">
                    {/* Branch line */}
                    <div
                      className={`absolute w-8 h-0.5 ${colorClasses.line} ${isLeft ? "right-1/2" : "left-1/2"}`}
                    ></div>
                    {/* Central dot */}
                    <div className={`w-4 h-4 rounded-full border-2 ${colorClasses.line} bg-background z-10`}></div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="w-5/12"></div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>

      <div className="text-center mt-8">
        <p className="text-sm text-muted-foreground">Click on any milestone to view additional details</p>
      </div>
    </div>
  )
}
