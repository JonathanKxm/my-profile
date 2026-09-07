/**
 * Resume configuration. Add a new entry here to expose a new downloadable
 * CV under /:stack/cv.
 */
export type StackEntry = {
  /** Stack slug used in the URL (kebab-case), e.g. "java". */
  stack: string
  /** Human-readable label, e.g. "Java Backend Developer". */
  label: string
  /** Display title shown in the resume header. */
  title: string
  /** Short summary paragraph. */
  summary: React.ReactNode
  /** Experience section content. */
  experience: React.ReactNode
  /** Skills section content. */
  skills: React.ReactNode
  /** Filename used when downloading the PDF. */
  fileName: string
}
