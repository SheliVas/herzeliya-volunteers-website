export const ANIMATION_DURATIONS = {
  fast: 200,
  normal: 300,
  slow: 500,
  slower: 700,
  slowest: 1000,
} as const

export const ANIMATION_EASINGS = {
  easeOut: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  easeInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
} as const

export const STAGGER_DELAYS = {
  short: 100,
  medium: 150,
  long: 200,
} as const
