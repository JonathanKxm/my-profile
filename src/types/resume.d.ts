/**
 * One bullet written using the S.T.A.R. method (Situation → Task → Action → Result),
 * stored as a single cohesive narrative paragraph for clean layout.
 */
export type StarItem = {
  narrative: React.ReactNode
}

export type StarEntry = {
  /** Company + role + period, rendered as a section heading. */
  role: string
  period: string
  /** Short tagline shown under the role, e.g. "E-commerce · Search · Payments". */
  scope?: React.ReactNode
  /** Stack tags for quick scanning (React, Spring, etc.). */
  stack: string[]
  /** S.T.A.R. bullets. Rendered as <ul>. */
  bullets: StarItem[]
}

export type StackEntry = {
  /** Stack slug used in the URL (kebab-case), e.g. "java". */
  stack: string
  /** Human-readable label, e.g. "Java Backend Developer". */
  label: string
  /** Display title shown in the resume header. */
  title: string
  /** Short summary paragraph. */
  summary: React.ReactNode
  /** S.T.A.R.-formatted experience, most recent first. */
  experience: StarEntry[]
  /** Skills section content. */
  skills: React.ReactNode
  /** Filename used when downloading the PDF. */
  fileName: string
}
