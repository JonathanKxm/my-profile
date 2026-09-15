import type { StackEntry } from "../../types/resume"

const fullstack: StackEntry = {
  stack: "fullstack",
  label: "Full Stack Developer",
  title: "Full Stack Developer",
  summary: (
    <p>
      Full Stack Developer with extensive experience in{" "}
      <strong>Java</strong> (longest tenure) and modern web technologies
      (<strong>React</strong>, <strong>Next.js</strong>, <strong>Node.js</strong>,
      <strong>Vue</strong>). Also develops desktop applications using{" "}
      <strong>Python + PySide6</strong> and <strong>Electron</strong>. Comfortable owning the full SDLC: from
      domain modeling and database design to component architecture,
      deployment, and observability.
    </p>
  ),
  experience: [
    {
      role: "Full Stack Engineer (Contractor)",
      period: "Jun 2023 - Present",
      scope: "Cross-stack delivery: React/Next.js + Vue/ElementUI + Node.js/Express + Python desktop",
      stack: ["React", "Next.js", "Vue", "ElementUI", "Node.js", "Express", "MySQL", "Python", "PySide6", "Electron", "UniApp"],
      bullets: [
        {
          narrative: (
            <>
              Developed a Windows desktop application for the maritime industry
              using <strong>Python</strong> and <strong>PySide6</strong>. The
              app acquires strain gauge data from <strong>JM3846 TCP
              Modbus</strong> sources and computes torque, thrust, and
              rotational speed. Provides <strong>EEXI compliance</strong>{" "}
              power monitoring, voyage report generation, and integrates with{" "}
              <strong>PLC</strong> and <strong>GPS</strong> devices.
            </>
          ),
        },
        {
          narrative: (
            <>
              Built a Playwright E2E automation test framework on{" "}
              <strong>Node.js</strong> and <strong>Express</strong> that
              provides a unified REST API and dashboard for triggering
              cross-browser test runs (<strong>Chromium</strong>,{" "}
              <strong>Firefox</strong>, <strong>WebKit</strong>). Captures
              screenshots, videos, and traces on failure; generates detailed{" "}
              <strong>HTML/Allure</strong> reports. Supports parallel
              execution, environment-based configuration, scheduled CI jobs, and
              integrates with <strong>GitHub Actions</strong>. Dashboard built
              with <strong>Vue</strong> and <strong>ElementUI</strong>.
            </>
          ),
        },
        {
          narrative: (
            <>
              <em>(Volunteer project)</em> Contributed to a slot-based elevator
              booking system for a property-management platform. I owned the{" "}
              <strong>React/Next.js</strong> customer booking UI with{" "}
              <strong>Tailwind</strong>, while the backend{" "}
              <strong>Node.js/Express</strong> REST API was primarily handled
              by another team member.
            </>
          ),
        },
        {
          narrative: (
            <>
              Developed a Campus Lab Smart Cabinet Management System for
              campus laboratories to efficiently and securely store and manage
              materials, including hazardous substances. Built a{" "}
              <strong>Node.js</strong> service featuring JWT-based role
              authorization, hardware protocol handlers, and an append-only
              audit log backed by <strong>MySQL</strong>, paired with a{" "}
              <strong>Vue</strong> + <strong>ElementUI</strong> mobile web
              console and a <strong>UniApp</strong> mobile app for on-site
              staff.
            </>
          ),
        },
      ],
    },
    {
      role: "Senior Software Engineer",
      period: "Wisedu Education Ltd. | 2014/6 - 2023/06",
      scope: "Campus e-commerce platform · SKU + payment + search",
      stack: ["Vue 2", "ElementUI", "Java", "Spring", "MySQL", "Elasticsearch", "Redis"],
      bullets: [
        {
          narrative: (
            <>
              As the backend lead for a campus commerce platform serving 500+
              universities and processing $10M+ in annual GMV, I owned the
              architecture end-to-end: I designed a sharded{" "}
              <strong>MySQL</strong> schema for products and orders, built the
              product catalog search on <strong>Elasticsearch</strong>, and
              implemented financial reconciliation as idempotent stored-procedure
              jobs. The system sustained 100K+ SKUs and 1M+ orders, with search
              p95 under 200ms, and absorbed three end-of-year traffic peaks
              without major incidents.
            </>
          ),
        },
        {
          narrative: (
            <>
              I replaced a 3-day/month manual SKU and reimbursement reconciliation
              workflow that was a constant source of audit findings. I wrote
              idempotent <strong>MySQL</strong> stored-procedure jobs with
              compensating-transaction logic for failed upstream payments, and
              paired them with a Vue admin UI for review and exception handling.
              Monthly close dropped from 3 days to ~2 hours, and year-end audit
              adjustments fell to near zero.
            </>
          ),
        },
      ],
    },
    {
      role: "Junior Software Engineer",
      period: "AsiaInfo Technology Ltd. | 2008/6 - 2014/6",
      scope: "Telecom value-added services · billing pipelines",
      stack: ["Java", "JavaScript", "Oracle"],
      bullets: [
        {
          narrative: (
            <>
              On a tight government-mandated timeline, I built the backend
              services and operator-facing web UIs for four new telecom VAS
              (value-added service) platforms. I implemented services in{" "}
              <strong>Java</strong> against <strong>Oracle</strong> and built
              the operator UIs in JavaScript/AJAX on the JSP stack. Each
              platform handled 5K+ concurrent subscribers at peak with stable
              settlement accuracy.
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
          <strong>Frontend:</strong> React / Next.js / Vue / Tailwind / Ant Design / ElementUI / UniApp
        </li>
        <li className="text-wrap">
          <strong>Backend:</strong> Node.js / Express / Java Spring / Spring Boot
        </li>
        <li className="text-wrap">
          <strong>Desktop:</strong> Electron / Python / PySide6
        </li>
        <li className="text-wrap">
          <strong>Database:</strong> MySQL / Elasticsearch / Redis / Oracle / MongoDB
        </li>
        <li className="text-wrap">
          <strong>DevOps:</strong> Docker / Alibaba Cloud / Git / GitHub Actions / Linux
        </li>
      </ul>
    </>
  ),
  fileName: "Jonathan-FullStack-Resume.pdf",
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

fullstack.sections = [
  // ── Page 1: Header + Summary + Experience (Contractor role) ─────────────
  <>
    <PageHeader title={fullstack.title} />

    <main className="text-sm leading-relaxed text-slate-800">
      <h3 className="text-base font-bold text-slate-900 mb-2">Summary</h3>
      {fullstack.summary}

      <h3 className="text-base font-bold text-slate-900 mt-6 mb-2">
        Experience
      </h3>
      <ExperienceBlock start={0} end={1} experience={fullstack.experience} />
    </main>
  </>,

  // ── Page 2: Experience (Senior + Junior) + Education & Skills ────────────
  <>
    <main className="text-sm leading-relaxed text-slate-800">
      <ExperienceBlock start={1} end={3} experience={fullstack.experience} />

      <h3 className="text-base font-bold text-slate-900 mt-6 mb-2">
        Education &amp; Skills
      </h3>
      {fullstack.skills}
    </main>
  </>,
]

export default fullstack
