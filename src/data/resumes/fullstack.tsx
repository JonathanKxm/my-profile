import type { StackEntry } from "../../types/resume"

const fullstack: StackEntry = {
  stack: "fullstack",
  label: "Full-Stack Developer",
  title: "Full-Stack Developer",
  summary: (
    <p>
      Full-Stack Developer with 10+ years across <strong>Java</strong>{" "}
      (longest tenure), <strong>React</strong>, <strong>Vue</strong>, and{" "}
      <strong>Python</strong> desktop. Shipped production systems in
      e-commerce, telecom, maritime, and lab operations — owning the full
      SDLC from schema to deployment.
    </p>
  ),
  experience: [
    {
      role: "Full-Stack Engineer (Contractor)",
      period: "Jun 2023 - Present",
      scope: "Cross-domain delivery: maritime, lab ops, e-commerce, internal tools",
      stack: [
        "Python", "PySide6", "Node.js", "Express", "MongoDB",
        "Java", "Spring", "MySQL", "Playwright",
      ],
      bullets: [
        {
          narrative: (
            <>
              Designed and developed a Windows desktop application for
              the maritime industry using <strong>Python</strong> and{" "}
              <strong>PySide6</strong>. Deployed across{" "}
              <strong>5 vessels</strong>, the app acquires strain gauge
              data from <strong>Modbus</strong> sources at{" "}
              <strong>500&nbsp;Hz</strong> and computes torque, thrust,
              and rotational speed. Provides{" "}
              <strong>EEXI compliance</strong> power monitoring, voyage
              report generation, and integrates with{" "}
              <strong>PLC</strong> and <strong>GPS</strong> devices.
            </>
          ),
        },
        {
          narrative: (
            <>
              Designed and developed a <strong>Playwright</strong> E2E
              automation framework on <strong>Node.js</strong>,{" "}
              <strong>Express</strong>, and <strong>MongoDB</strong> with a
              unified REST API and dashboard. Replaced manual regression
              work for a <strong>5-engineer QA team</strong>, saving
              roughly <strong>5&nbsp;hours/day</strong> of testing time.
              Captures screenshots, videos, and traces on failure,
              generates detailed reports, supports parallel execution,
              and deploys to <strong>Alibaba Cloud</strong>.
            </>
          ),
        },
        {
          narrative: (
            <>
              Built a Campus Lab Smart Cabinet Management System serving
              <strong>2,000+ students and staff</strong> across{" "}
              <strong>70+ hazardous-material categories</strong>,
              enforcing safe storage and full traceability of regulated
              substances. Implemented <strong>Java/Spring</strong>{" "}
              services with <strong>JWT</strong> role authorization,
              hardware protocol handlers, and an append-only audit log on{" "}
              <strong>MySQL</strong>. Paired with a mobile web console
              for on-site staff; pipeline on <strong>Jenkins</strong>.
            </>
          ),
        },
      ],
    },
    {
      role: "Senior Software Engineer",
      period: "Wisedu Ltd. | Jun 2014 - Jun 2023",
      scope: "Campus e-commerce platform · SKU + payment + search",
      stack: ["Java", "Spring", "MySQL Cluster", "Elasticsearch", "Vue", "Hudson"],
      bullets: [
        {
          narrative: (
            <>
              Team lead and core developer for a campus e-commerce
              platform serving <strong>10+ universities</strong> — selling
              teaching supplies and lab chemical reagents — built on{" "}
              <strong>Alibaba Cloud</strong>. Catalog grew to{" "}
              <strong>5,000+ SKUs</strong> with{" "}
              <strong>70,000+ orders/year</strong>. Led a team of 6 and
              owned backend architecture: designed{" "}
              <strong>MySQL Cluster</strong> schema for products and
              orders, built product catalog search on{" "}
              <strong>Elasticsearch</strong>, and implemented financial
              reconciliation as stored-procedure jobs paired with a{" "}
              <strong>Vue</strong> admin UI for review and exception
              handling. Owned the CI/CD pipeline with{" "}
              <strong>Hudson</strong>. Focused on stability and high
              availability for production workloads.
            </>
          ),
        },
        {
          narrative: (
            <>
              Led infrastructure upgrades as the platform scaled:
              migrated from a single MySQL instance to a MySQL Cluster
              for order throughput, and replaced LIKE-based search with
              Elasticsearch to support category and fuzzy queries across
              a growing SKU catalog.
            </>
          ),
        },
      ],
    },
    {
      role: "Java Software Engineer",
      period: "AsiaInfo Technology Ltd. | Jul 2008 - May 2014",
      scope: "Telecom VAS: consumer subscription platforms",
      stack: ["Java", "Struct2", "Oracle", "JSP", "jQuery"],
      bullets: [
        {
          narrative: (
            <>
              Built backend services and operator-facing web UIs for four
              consumer telecom subscription platforms delivered to a
              top-3 domestic telecom operator. Implemented{" "}
              <strong>Java/Struct2</strong> services against{" "}
              <strong>Oracle</strong>.
            </>
          ),
        },
        {
          narrative: (
            <>
              Developed operator-facing UIs in <strong>jQuery/AJAX</strong>{" "}
              on the <strong>JSP</strong> stack for billing,
              subscription management, and reporting modules across all
              four product lines.
            </>
          ),
        },
      ],
    },
  ],
  skills: (
    <ul className="text-sm leading-snug text-slate-800 grid grid-cols-2 gap-x-4 gap-y-1">
      <li>
        <strong>Languages:</strong> Java / JavaScript / TypeScript / Python
      </li>
      <li>
        <strong>Frontend:</strong> React / Vue / jQuery / Electron / Tailwind
        CSS
      </li>
      <li>
        <strong>Backend:</strong> Node.js / Express / Spring / Struct2 / JWT / REST API
      </li>
      <li>
        <strong>Database:</strong> MySQL Cluster / Oracle / PostgreSQL /
        Redis / MongoDB
      </li>
      <li>
        <strong>DevOps:</strong> Docker / Alibaba Cloud / CentOS / Jenkins /
        Hudson / GitHub Actions
      </li>
      <li>
        <strong>Domain:</strong> PySide6 / Modbus / PLC / Elasticsearch /
        Playwright
      </li>
    </ul>
  ),
  fileName: "Jonathan(Full-Stack).pdf",
}

// ── Manual page split ──────────────────────────────────────────────────────────
// Each section is one A4 page in the PDF. The web preview mirrors these
// pages as cards. Adjust contents here when you want to reflow the resume.
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
      <section key={`${e.role}-${start + idx}`} className="mb-3">
        <h4 className="font-bold text-slate-900">
          {e.role}{" "}
          <span className="font-normal text-slate-600">| {e.period}</span>
        </h4>
        {e.scope && (
          <p className="text-sm text-slate-600 italic mt-0.5">{e.scope}</p>
        )}
        <ul className="list-disc ml-5 mt-1 space-y-1">
          {e.bullets.map((b, bi) => (
            <li key={bi} className="leading-snug text-slate-800">
              {b.narrative}
            </li>
          ))}
        </ul>
      </section>
    ))}
  </>
)

fullstack.sections = [
  // ── Page 1: Header + Summary + Experience (Contractor role) ─────────────
  <>
    <PageHeader title={fullstack.title} />

    <main className="text-sm leading-snug text-slate-800">
      <h3 className="text-base font-bold text-slate-900 mb-1">Summary</h3>
      {fullstack.summary}

      <h3 className="text-base font-bold text-slate-900 mt-4 mb-1">
        Experience
      </h3>
      <ExperienceBlock start={0} end={2} experience={fullstack.experience} />
    </main>
  </>,

  // ── Page 2: Experience (AsiaInfo) + Education & Skills ────────────
  <>
    <main className="text-sm leading-snug text-slate-800">
      <ExperienceBlock start={2} end={3} experience={fullstack.experience} />

      <h3 className="text-base font-bold text-slate-900 mt-4 mb-1">
        Education
      </h3>
      <p>
        <strong>B.Sc.</strong> in Computer Science · Jiangsu University of
        Science and Technology · <strong>2004 – 2008</strong>
      </p>

      <h3 className="text-base font-bold text-slate-900 mt-4 mb-1">
        Skills
      </h3>
      {fullstack.skills}
    </main>
  </>,
]

export default fullstack
