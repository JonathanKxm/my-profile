import type { StackEntry } from "../../types/resume"

const fullstack: StackEntry = {
  stack: "fullstack",
  label: "Senior Full-Stack Engineer",
  title: "Senior Full-Stack Engineer",
  summary: (
    <p>
      Senior Full-Stack Engineer with <strong>10+ years</strong> of experience
      building backend services, web applications, automation systems, and
      real-time desktop software.       Strong background in <strong>Java/Spring</strong>,{" "}
      <strong>JavaScript</strong>, and <strong>Python</strong>, with experience
      delivering production systems across e-commerce, education, telecom, and
      maritime operations. Experienced in{" "}
      <strong>distributed systems</strong>, <strong>REST APIs</strong>,{" "}
      <strong>databases</strong>, <strong>browser automation</strong>,{" "}
      <strong>CI/CD</strong>, and <strong>hardware/PLC integration</strong>.
      Available for international remote and B2B contract engagements.
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
              Designed and deployed a <strong>PySide6/Python</strong>{" "}
              Windows application across <strong>5 marine vessels</strong>,
              integrating <strong>Modbus</strong> protocols at{" "}
              500&nbsp;Hz for real-time torque, thrust,
              and power calculations (<strong>EEXI compliance</strong>).
            </>
          ),
        },
        {
          narrative: (
            <>
              Architected a <strong>Playwright/Node.js</strong> E2E test
              automation framework with an <strong>Express/MongoDB</strong>{" "}
              REST API and dashboard, cutting QA regression testing time by{" "}
              <strong>~5&nbsp;hours/day</strong>.
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
              services with <strong>JWT-based authorization</strong>,
              hardware protocol handlers, and an append-only{" "}
              <strong>MySQL</strong> audit log. Built a mobile web
              console for on-site staff and CI/CD pipelines with{" "}
              <strong>Jenkins</strong>.
            </>
          ),
        },
      ],
    },
    {
      role: "Senior Software Engineer",
      period: "Wisedu Ltd. | Jun 2014 - Jun 2023",
      scope: "Campus e-commerce platform · Job-seeking platform · Spring Cloud microservices",
      stack: ["Java", "Spring", "MySQL Cluster", "Elasticsearch", "Vue", "Hudson"],
      bullets: [
        {
          narrative: (
            <>
              Led a <strong>6-engineer team</strong> building a high-availability
              campus e-commerce platform handling <strong>70k+ annual orders</strong>{" "}
              and <strong>5,000+ SKUs</strong>. Migrated core database to{" "}
              <strong>MySQL Cluster</strong> and implemented{" "}
              <strong>Elasticsearch</strong> to improve query performance.
            </>
          ),
        },
        {
          narrative: (
            <>
              Built a <strong>Spring Cloud</strong>-based job-seeking platform
              for fresh graduates — similar to LinkedIn — connecting students
              with employers. Led a small team delivering the full candidate
              matching and job posting system.
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
              <strong>Java</strong>/Struct2 services against{" "}
              <strong>Oracle</strong>.
            </>
          ),
        },
        {
          narrative: (
            <>
              Developed operator-facing UIs in jQuery/AJAX{" "}
              on the JSP stack for billing,
              subscription management, and reporting modules across all
              four product lines.
            </>
          ),
        },
      ],
    },
  ],
  skills: (
    <ul className="text-sm leading-snug text-slate-800 grid grid-cols-2 gap-x-4 gap-y-1 ps-0" style={{ listStyle: 'none' }}>
      {[
        ["Languages:", "Java / JavaScript / Python"],
        ["Frontend:", "HTML / CSS / JavaScript / Vue / React"],
        ["Backend:", "Spring / Node.js / Express / REST API"],
        ["Database:", "MySQL / Oracle / Redis / MongoDB"],
        ["Systems & Automation:", "PySide6 / Modbus / PLC / Playwright"],
        ["DevOps:", "Docker / GitHub Actions / Jenkins / Alibaba Cloud"],
      ].map(([label, value]) => (
        <li key={label} style={{ listStyle: 'none' }} className="ps-0">
          <strong>{label}</strong> {value}
        </li>
      ))}
    </ul>
  ),
  fileName: "Jonathan_Kong_FullStack_Engineer.pdf",
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
      <section key={`${e.role}-${start + idx}`} className="mb-2">
        <h4 className="font-bold text-slate-900">
          {e.role}{" "}
          <span className="font-normal text-slate-600">| {e.period}</span>
        </h4>
        {e.scope && (
          <p className="text-sm text-slate-600 italic mt-0">{e.scope}</p>
        )}
        <ul className="list-disc ml-5 mt-0.5 space-y-0.5">
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
      <h3 className="text-base font-bold text-slate-900 mb-0.5">Summary</h3>
      {fullstack.summary}

      <h3 className="text-base font-bold text-slate-900 mt-2 mb-0.5">
        Experience
      </h3>
      <ExperienceBlock start={0} end={3} experience={fullstack.experience} />
    </main>
  </>,

  // ── Page 2: Education & Skills ────────────────────────────────
  <>
    <main className="text-sm leading-snug text-slate-800">
      <h3 className="text-base font-bold text-slate-900 mt-2 mb-0.5">
        Education
      </h3>
      <p>
        <strong>B.Sc.</strong> in Computer Science · Jiangsu University of
        Science and Technology · <strong>2004 – 2008</strong>
      </p>

      <h3 className="text-base font-bold text-slate-900 mt-2 mb-0.5">
        Skills
      </h3>
      {fullstack.skills}
    </main>
  </>,
]

export default fullstack
