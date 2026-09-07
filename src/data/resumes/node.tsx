import type { StackEntry } from "../../types/resume"

const node: StackEntry = {
  stack: "node",
  label: "Node.js Backend Developer",
  title: "Node.js Backend Developer",
  summary: (
    <p>
      Node.js Backend Developer focused on building high-throughput{" "}
      <strong>RESTful</strong> and <strong>real-time</strong> services with{" "}
      <strong>TypeScript</strong>. 10+ years of JavaScript experience with
      <strong> Express</strong>, and{" "}
      <strong>WebSocket</strong> systems. Comfortable owning the full
      service: schema, API contract, auth, deployment, and observability.
    </p>
  ),
  experience: [
    {
      role: "Full Stack / Node.js Engineer (Contractor)",
      period: "Jun 2023 - Present",
      scope: "Booking, orders, IoT backends",
      stack: ["Node.js", "TypeScript", "Express", "MySQL", "Redis", "WebSocket"],
      bullets: [
        {
          narrative: (
            <>
              A property-management client needed a slot-based booking API that
              could enforce no-overlap rules under contention. I implemented an{" "}
              <strong>Express</strong> booking API with transactional slot
              allocation in <strong>MySQL</strong> and a{" "}
              <strong>WebSocket</strong> channel pushing live updates to a Vue
              3 admin console, with JWT auth and structured logging. Zero
              double-bookings across the first 6 months in production, and the
              dashboard replaced a manual spreadsheet within the first week.
            </>
          ),
        },
        {
          narrative: (
            <>
              Operations needed live order status instead of polling email
              threads. I built an <strong>Express</strong> service backed by{" "}
              <strong>Redis</strong> pub/sub that fans out order events over
              WebSockets to a Vue 3 frontend, with idempotent event ingestion
              from upstream systems. Status lookup latency dropped from minutes
              to sub-second, and "where is my order" tickets fell ~80%.
            </>
          ),
        },
        {
          narrative: (
            <>
              Smart cabinet hardware needed a backend with strict role-based
              access and a tamper-evident audit log. I delivered an{" "}
              <strong>Express</strong> service with JWT authz, role-based
              middleware, hardware-command handlers, and an append-only audit
              table in <strong>MySQL</strong>. Paper-based chemical tracking was
              replaced entirely, and the lab passed its compliance audit on
              first inspection.
            </>
          ),
        },
      ],
    },
    {
      role: "Senior Software Engineer",
      period: "Wisedu Education Ltd. | 2014/6 - 2023/06",
      scope: "Campus commerce platform · APIs + search",
      stack: ["Node.js", "Express", "MySQL", "Elasticsearch", "Redis"],
      bullets: [
        {
          narrative: (
            <>
              Wisedu's commerce platform needed to integrate dozens of external
              suppliers, payment gateways, and logistics providers behind one
              internal API surface. I built an <strong>Express</strong>-based
              API gateway with per-supplier adapters, retry/circuit-breaker
              logic, and a <strong>Redis</strong> cache layer, and indexed the
              product catalog on <strong>Elasticsearch</strong>. Search p95
              stayed under 200ms across 100K+ SKUs, and supplier outages no
              longer cascaded into order failures.
            </>
          ),
        },
      ],
    },
    {
      role: "Junior Software Engineer",
      period: "AsiaInfo Technology Ltd. | 2008/6 - 2014/6",
      scope: "Telecom VAS support services",
      stack: ["JavaScript", "Node.js", "Oracle"],
      bullets: [
        {
          narrative: (
            <>
              Operations needed lightweight internal services to glue{" "}
              <strong>Oracle</strong> billing data into operator-facing reports.
              I wrote <strong>Node.js</strong> services that consumed billing
              events from <strong>Oracle</strong> queues and exposed simple
              internal APIs. This replaced a fragile set of shell scripts with
              versioned services the on-call team could actually debug.
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
          <strong>Runtime:</strong> Node.js 18/20, TypeScript, ESM, CommonJS, npm/pnpm
        </li>
        <li className="text-wrap">
          <strong>Frameworks:</strong> Express, Fastify, Koa
        </li>
        <li className="text-wrap">
          <strong>API / Realtime:</strong> REST, GraphQL, WebSocket, OpenAPI, Joi/Zod
        </li>
        <li className="text-wrap">
          <strong>Data:</strong> MySQL, Elasticsearch, Redis, MongoDB, Prisma, TypeORM
        </li>
      </ul>
    </>
  ),
  fileName: "Jonathan-Node-Resume.pdf",
}

export default node
