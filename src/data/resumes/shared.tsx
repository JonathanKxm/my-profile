import type { ReactNode } from "react"
import type { StarEntry, StarItem } from "../../types/resume"

/**
 * Render one S.T.A.R. bullet as a compact narrative paragraph.
 */
export const StarBullet = ({ narrative }: StarItem) => {
  if (!narrative) return null
  return (
    <li className="leading-relaxed text-slate-800">
      {narrative}
    </li>
  )
}

export const ExperienceSection = ({ entries }: { entries: StarEntry[] }) => (
  <div className="space-y-6">
    {entries.map((e, idx) => (
      <section key={`${e.role}-${idx}`}>
        <h4 className="font-bold text-slate-900">
          {e.role} <span className="font-normal text-slate-600">| {e.period}</span>
        </h4>
        {e.scope && (
          <p className="text-sm text-slate-600 italic mt-1">{e.scope}</p>
        )}
        {e.stack.length > 0 && (
          <p className="text-xs text-slate-500 mt-1">
            <span className="font-semibold text-slate-700">Stack:</span>{" "}
            {e.stack.join(" · ")}
          </p>
        )}
        <ul className="list-disc ml-5 mt-2 space-y-3">
          {e.bullets.map((b, i) => (
            <StarBullet key={i} {...b} />
          ))}
        </ul>
      </section>
    ))}
  </div>
)
