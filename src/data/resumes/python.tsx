import type { StackEntry } from "../../types/resume"

const python: StackEntry = {
  stack: "python",
  label: "Python Backend Developer",
  title: "Python Backend Developer",
  summary: (
    <p>
      Python Backend Developer with strong experience building{" "}
      <strong>RESTful APIs</strong>, data processing pipelines, and{" "}
      <strong>desktop tooling</strong>. Comfortable across{" "}
      <strong>Flask</strong>, <strong>Django</strong>,{" "}
      <strong>FastAPI</strong>, and <strong>PyQt5</strong>. Background in
      integrating third-party systems and turning messy operational data
      into reliable, queryable services.
    </p>
  ),
  experience: [
    {
      role: "Full Stack / Python Engineer (Contractor)",
      period: "Jun 2023 - Present",
      scope: "Desktop monitoring tools + lightweight backends",
      stack: ["Python", "PyQt5", "Flask", "FastAPI", "Node.js", "MySQL", "Redis"],
      bullets: [
        {
          narrative: (
            <>
              A ship-operator client needed a Windows desktop tool to monitor
              propulsion performance in near real-time and produce compliance
              reports for fuel and CO2. I built a <strong>Python</strong> +{" "}
              <strong>PyQt5</strong> desktop application that pulls propulsion
              telemetry, visualizes fuel consumption and trim in real time, and
              exports CO2 reports automatically for every voyage. I backed it
              with a <strong>FastAPI</strong> ingest service and{" "}
              <strong>MySQL</strong>/<strong>Redis</strong> for trend storage.
              The crew can now spot fuel-inefficient trim in seconds instead of
              waiting for end-of-voyage reports.
            </>
          ),
        },
        {
          narrative: (
            <>
              Schools using a smart cabinet product needed alerting when
              inventory dropped below safety thresholds. I added a notification
              service alongside the existing Node.js backend by writing a
              <strong> Python Flask</strong> service that polls inventory levels,
              evaluates rule-based thresholds, and dispatches email/SMS
              notifications through existing channels. Stock-out incidents dropped
              to near-zero across pilot schools, and the alerting logic became
              reusable for the next product line.
            </>
          ),
        },
      ],
    },
    {
      role: "Senior Software Engineer",
      period: "Wisedu Education Ltd. | 2014/6 - 2023/06",
      scope: "Campus commerce platform · integrations + search",
      stack: ["Python", "Flask", "Django", "MySQL", "Elasticsearch"],
      bullets: [
        {
          narrative: (
            <>
              Wisedu integrated dozens of third-party suppliers, payment
              gateways, and logistics providers, each with their own quirks
              and failure modes. I built a <strong>Python</strong> ({" "}
              <strong>Flask</strong> / <strong>Django</strong>) integration
              layer with retry/circuit-breaker logic, idempotent webhooks, and
              an <strong>Elasticsearch</strong> indexing pipeline for product
              data. Search query latency dropped ~70%, supplier sync failures
              became self-healing, and onboarding a new supplier went from ~2
              weeks to ~2 days.
            </>
          ),
        },
      ],
    },
    {
      role: "Junior Software Engineer",
      period: "AsiaInfo Technology Ltd. | 2008/6 - 2014/6",
      scope: "Telecom VAS support tooling",
      stack: ["Python", "Shell", "Oracle"],
      bullets: [
        {
          narrative: (
            <>
              Operations needed internal scripts to mine{" "}
              <strong>Oracle</strong> billing data for VAS usage patterns.
              I wrote <strong>Python</strong> scripts around cx_Oracle and
              cron-based pipelines to produce daily and weekly usage reports
              for product managers. This replaced a manual 1-day-per-week
              reporting chore with an automated overnight job, freeing the team
              to act on the data instead of compiling it.
            </>
          ),
        },
      ],
    },
  ],
  skills: (
    <>
      <p>Education: <strong>B.Sc.</strong> Computer Science, Jiangsu University of Science and Technology (<strong>2004 – 2008</strong>)</p>
      <ul>
        <li className="text-wrap">
          <strong>Python:</strong> Python 3, asyncio, typing, Flask, Django, FastAPI
        </li>
        <li className="text-wrap">
          <strong>Desktop:</strong> PyQt5, Qt Designer, packaging (PyInstaller)
        </li>
        <li className="text-wrap">
          <strong>Data:</strong> Pandas, NumPy, openpyxl, ETL scripts
        </li>
        <li className="text-wrap">
          <strong>Database:</strong> MySQL, Elasticsearch, Redis, cx_Oracle, SQLAlchemy
        </li>
      </ul>
    </>
  ),
  fileName: "Jonathan-Python-Resume.pdf",
}

export default python
