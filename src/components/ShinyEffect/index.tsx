type Params = {
  /** Horizontal offset in pixels from the left edge. */
  left?: number
  /** Width and height of the shiny element. Defaults to 500px. */
  size?: number
  /** Vertical offset in pixels from the top edge. Required. */
  top: number
}

/**
 * A decorative glowing element positioned absolutely on the page.
 * Renders behind content (zIndex: -1) and is used to add subtle ambient lighting.
 */
export const ShinyEffect = ({ left = 0, top, size = 500 }: Params) => {
  return (
    <div
      className="shiny-effect"
      style={{
        top: `${top}px`,
        left: `${left}px`,
        width: `${size}px`,
        height: `${size}px`,
        zIndex: -1,
      }}
    />
  )
}
