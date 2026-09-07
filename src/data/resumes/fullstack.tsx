import type { StackEntry } from "../../types/resume"

const fullstack: StackEntry = {
  stack: "fullstack",
  label: "Full Stack Web Developer",
  title: "Full Stack Web Developer",
  summary: (
    <p>
      Full Stack Web Developer with 10+ years of experience delivering
      end-to-end web applications across the modern JavaScript ecosystem
      (<strong>React</strong>, <strong>Next.js</strong>, <strong>Vue</strong>,{" "}
      <strong>Node.js</strong>) and enterprise Java (
      <strong>Spring Boot</strong>). Comfortable owning the full SDLC: from
      domain modeling and database design to component architecture,
      deployment, and observability.
    </p>
  ),
  experience: [
    {
      role: "Full Stack Engineer (Contractor)",
      period: "Jun 2023 - Present",
      scope: "Cross-stack delivery: React/Next.js + Vue/ElementUI + Node.js/Express APIs",
      stack: ["React", "Next.js", "Vue 3", "ElementUI", "Node.js", "Express", "MySQL"],
      bullets: [
        {
          narrative: (
            <>
              As the sole engineer on a property-management engagement, I owned
              the full stack of a slot-based elevator booking system — a{" "}
              <strong>Node.js/Express</strong> REST API with transactional slot
              allocation, a <strong>React/Next.js</strong> customer booking UI
              with <strong>Tailwind</strong>, and a <strong>Vue 3</strong> admin
              console for property staff. I cut average booking time from ~6
              minutes (phone + email) to under 30 seconds and eliminated
              double-booked slots entirely.
            </>
          ),
        },
        {
          narrative: (
            <>
              I built a live order tracking dashboard for an operations team
              suffering from no real-time visibility across two disjoint tools.
              On the frontend I used <strong>Vue 3</strong> +{" "}
              <strong>ElementUI</strong> with WebSocket-based status streaming;
              on the backend I shipped an <strong>Express</strong> service with{" "}
              <strong>Redis</strong> pub/sub for fan-out. Status lookup latency
              dropped from ~2 minutes to sub-second push updates, and
              "where is my order" support tickets fell ~80%.
            </>
          ),
        },
        {
          narrative: (
            <>
              I delivered the complete software layer for a smart lab cabinet
              product — hardware that had no existing software. I built a{" "}
              <strong>Node.js</strong> service with JWT-based role authorization,
              hardware protocol handlers, and an append-only audit log backed by{" "}
              <strong>MySQL</strong>, paired with a <strong>Vue 3</strong> +{" "}
              <strong>Ant Design Vue</strong> admin portal for inventory and
              access control. The lab passed its compliance audit on first
              inspection, and monthly reconciliation dropped from 1 day/week to
              ~10 minutes.
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
          <strong>Frontend:</strong> React / Next.js / Vue 2/3 / Tailwind / Ant Design / ElementUI
        </li>
        <li className="text-wrap">
          <strong>Backend:</strong> Node.js / Express / Java Spring / Spring Boot
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

export default fullstack
