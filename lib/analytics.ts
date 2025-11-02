// Google Analytics helper functions
// Ensures gtag is available before calling

declare global {
  interface Window {
    gtag?: (
      command: "event" | "config" | "js",
      eventName: string,
      params?: Record<string, any>
    ) => void
  }
}

export const trackEvent = (
  eventName: string,
  params?: Record<string, any>
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, params)
  } else {
    console.log(`Analytics event: ${eventName}`, params)
  }
}

// Specific event trackers
export const trackDonateClick = (location: string) => {
  trackEvent("donate_click", {
    button_location: location,
  })
}

export const trackVolunteerSubmit = (areas: string[], availability: string[]) => {
  trackEvent("volunteer_submit", {
    areas: areas.join(","),
    availability: availability.join(","),
  })
}

export const trackPhoneClick = (shopName: string, phoneNumber: string) => {
  trackEvent("tel_click", {
    location: shopName,
    phone_number: phoneNumber,
  })
}

export const trackNavigateClick = (shopName: string, address: string) => {
  trackEvent("navigate_click", {
    shop: shopName,
    address: address,
  })
}

export const trackLanguageChange = (toLanguage: "he" | "en") => {
  trackEvent("language_change", {
    to_language: toLanguage,
  })
}
