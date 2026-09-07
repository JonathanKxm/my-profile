import type { StackEntry } from "../../types/resume"
import { PageHeader } from "./shared"

const ExperienceBlock = ({
  start,
  end,
  experience,
}: {
  start: number
  end: number
  experience: StackEntry["experience"]
}) => (
  <>
    {experience.slice(start, end).map((e, idx) => (
      <section key={`${e.role}-${start + idx}`} className="mb-4">
        <h4 className="font-bold text-slate-900">
          {e.role}{" "}
          <span className="font-normal text-slate-600">| {e.period}</span>
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
        <ul className="list-disc ml-5 mt-2 space-y-2">
          {e.bullets.map((b, bi) => (
            <li key={bi} className="leading-relaxed text-slate-800">
              {b.narrative}
            </li>
          ))}
        </ul>
      </section>
    ))}
  </>
)

const javascript: StackEntry = {
  stack: "javascript",
  label: "JavaScript Full Stack Developer",
  title: "JavaScript Full Stack Developer",
  summary: (
    <p>
      JavaScript Full Stack Developer with extensive experience shipping
      product across the entire web stack. Strong across{" "}
      <strong>TypeScript</strong>, <strong>React</strong>,{" "}
      <strong>Vue</strong>, and <strong>Node.js</strong>, plus the tooling
      (Webpack, Vite, ESLint) that keeps JavaScript codebases sane at
      scale.
    </p>
  ),
  experience: [
    {
      role: "Full Stack Engineer (Contractor)",
      period: "Jun 2023 - Present",
      scope: "Cross-stack product delivery",
      stack: ["React", "Next.js", "Vue 3", "TypeScript", "Node.js", "Express", "Tailwind CSS", "Ant Design"],
      bullets: [
        {
          narrative: (
            <>
              Three concurrent product engagements needed consistent
              engineering quality across React, Vue, and Node.js codebases. I
              shipped an elevator booking app in <strong>React</strong> +{" "}
              <strong>Next.js</strong> + <strong>Tailwind</strong>, an order
              tracking dashboard in <strong>Vue 3</strong> +{" "}
              <strong>ElementUI</strong>, and the cabinet backend in{" "}
              <strong>Node.js</strong>/<strong>Express</strong>. I standardized
              on <strong>TypeScript</strong>, ESLint, and Prettier across all
              three repos, and all three products shipped on or ahead of
              schedule.
            </>
          ),
        },
      ],
    },
    {
      role: "Senior Software Engineer",
      period: "Wisedu Education Ltd. | 2014/6 - 2023/06",
      scope: "Campus commerce platform · UI + APIs",
      stack: ["JavaScript", "TypeScript", "Vue 2", "ElementUI", "Node.js", "Express", "MySQL", "Elasticsearch"],
      bullets: [
        {
          narrative: (
            <>
              Wisedu's commerce platform grew to 500+ university tenants with
              $10M+ in annual GMV on a Vue 2 / Node.js stack. I led delivery
              across both the Vue frontend and the Node.js API layer: I built
              operator UIs in <strong>Vue 2</strong> + <strong>ElementUI</strong>,
              an <strong>Express</strong> API layer, and the product catalog
              search on <strong>Elasticsearch</strong>. I introduced{" "}
              <strong>TypeScript</strong> incrementally in the API layer.
              Search latency stayed under 200ms p95, end-of-year peaks were
              absorbed without major incidents, and TypeScript adoption cut API
              regressions to near zero in new modules.
            </>
          ),
        },
      ],
    },
    {
      role: "Junior Software Engineer",
      period: "AsiaInfo Technology Ltd. | 2008/6 - 2014/6",
      scope: "Telecom VAS platforms",
      stack: ["JavaScript", "Java", "Oracle"],
      bullets: [
        {
          narrative: (
            <>
              Telecom operators needed new VAS platforms and the operator-facing
              pages to go with them. I built operator UIs in{" "}
              <strong>JavaScript</strong>/<strong>AJAX</strong> on the JSP
              stack, and small glue scripts that fed billing data into the back
              office. Four VAS platforms were delivered on schedule, each
              handling 5K+ concurrent subscribers at peak.
            </>
          ),
        },
      ],
    },
  ],
  skills: (
    <>
      <p>Education: B.Eng. Computer Science and Technology, Jiangsu University of Science and Technology (2004 - 2008)</p>
      <ul>
        <li className="text-wrap">
          <strong>Languages:</strong> JavaScript (ES2022+), TypeScript, HTML5, CSS3
        </li>
        <li className="text-wrap">
          <strong>Frontend:</strong> React, Next.js, Vue 2/3, Tailwind, Ant Design, ElementUI
        </li>
        <li className="text-wrap">
          <strong>Backend:</strong> Node.js, Express, REST, WebSocket
        </li>
        <li className="text-wrap">
          <strong>Data:</strong> MySQL, Elasticsearch, Redis, MongoDB
        </li>
      </ul>
    </>
  ),
  fileName: "Jonathan-JavaScript-Resume.pdf",
}

javascript.sections = [
  // ── Page 1: Header + Summary + Experience (Contractor + Senior) ───────────
  <>
    <PageHeader title={javascript.title} />

    <main className="text-sm leading-relaxed text-slate-800">
      <h3 className="text-base font-bold text-slate-900 mb-2">Summary</h3>
      {javascript.summary}

      <h3 className="text-base font-bold text-slate-900 mt-6 mb-2">
        Experience
      </h3>
      <ExperienceBlock start={0} end={2} experience={javascript.experience} />
    </main>
  </>,

  // ── Page 2: Experience (Junior) + Education & Skills ───────────────────────
  <>
    <main className="text-sm leading-relaxed text-slate-800">
      <h3 className="text-base font-bold text-slate-900 mb-2">Experience</h3>
      <ExperienceBlock start={2} end={3} experience={javascript.experience} />

      <h3 className="text-base font-bold text-slate-900 mt-6 mb-2">
        Education &amp; Skills
      </h3>
      {javascript.skills}
    </main>
  </>,
]

export default javascript
