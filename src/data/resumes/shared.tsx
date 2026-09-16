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

const EMAIL = "jonathankxm@gmail.com"

/**
 * Standard page header used on every page of the printable CV. Renders the
 * candidate's name, the stack-specific title, and contact info. The email
 * link is tagged with `data-mailto="1"` so the PDF exporter can locate it and
 * overlay a real clickable `mailto:` annotation.
 */
export const PageHeader = ({
  title,
}: {
  title: React.ReactNode
}) => (
  <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 border-b border-slate-200 pb-4 mb-5">
    <div>
      <h1 className="text-2xl font-bold text-slate-900">Jonathan Kong</h1>
      <h2 className="text-base font-semibold text-slate-700">{title}</h2>
    </div>
    <div className="flex items-start gap-3">
      <div className="text-sm text-slate-700 text-right">
        <a
          data-mailto="1"
          className="block text-blue-700 underline"
          href={`mailto:${EMAIL}`}
        >
          Email:&nbsp;&nbsp;{EMAIL}
        </a>
        <div className="flex flex-col items-end gap-0.5">
          <span>
            Based in <span className="font-semibold">China</span> | Remote
          </span>
          <span className="text-xs font-semibold text-slate-700">
            Open to International B2B / Contractor Engagements
          </span>
        </div>
      </div>
    </div>
  </header>
)
