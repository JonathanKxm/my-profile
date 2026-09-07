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
  title: React.ReactNode
  /** Short summary paragraph. */
  summary: React.ReactNode
  /** S.T.A.R.-formatted experience, most recent first. */
  experience: StarEntry[]
  /**
   * Skills / education section content.
   * Can be a single ReactNode (for single-page resumes) or an array
   * (one element per skills "page" when manually paginated).
   */
  skills: React.ReactNode | React.ReactNode[]
  /**
   * Explicit manual page sections. Each entry becomes one A4 page in the PDF.
   * If provided, the PDF export renders these directly without any automatic
   * pagination logic.
   *
   * Common patterns:
   *   - One section: just the Experience + Skills content
   *   - Two sections: [page1 content, page2 content]
   *   - Three sections: [page1 content, page2 content, page3 content]
   *
   * Each section should be a React fragment containing the full page content
   * (header, body, etc.) so that PDF pages look identical to the web preview.
   */
  sections?: React.ReactNode[]
  /** Filename used when downloading the PDF. */
  fileName: string
}
