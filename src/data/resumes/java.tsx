import type { StackEntry } from "../../types/resume"

const java: StackEntry = {
  stack: "java",
  label: "Java Backend Developer",
  title: "Java Backend Developer",
  summary: (
    <p>
      Java Backend Developer with 15+ years of experience building
      enterprise-grade, transaction-heavy systems on the JVM. Deep expertise
      in <strong>Spring Boot</strong>, <strong>Spring MVC</strong>,{" "}
      <strong>Spring Cloud</strong>, and database internals (
      <strong>MySQL</strong>, <strong>Oracle</strong>,{" "}
      <strong>Elasticsearch</strong>). Strong focus on reliability, data
      consistency, and operating software under load.
    </p>
  ),
  experience: [
    {
      role: "Senior Software Engineer (Backend Lead)",
      period: "Wisedu Education Ltd. | 2014/6 - 2023/06",
      scope: "Campus commerce platform · $10M+ annual GMV",
      stack: ["Java", "Spring", "Spring MVC", "Spring Boot", "MySQL", "Elasticsearch", "Redis", "Alibaba Cloud"],
      bullets: [
        {
          narrative: (
            <>
              As the backend lead for a campus commerce platform serving 500+
              universities with $10M+ in annual GMV, I owned the full backend
              architecture: I designed a sharded <strong>MySQL</strong> schema
              for products and orders, built the catalog search on{" "}
              <strong>Elasticsearch</strong>, used <strong>Redis</strong> for
              hot-path caching, and implemented financial reconciliation as
              idempotent stored-procedure jobs in <strong>MySQL</strong>. The
              system sustained traffic through three end-of-year peaks with zero
              data-loss incidents, and search p95 stayed under 200ms across
              100K+ SKUs and 1M+ orders.
            </>
          ),
        },
        {
          narrative: (
            <>
              I automated a monthly SKU and financial close that previously
              required 3 days of manual spreadsheet work and produced constant
              audit findings. I wrote idempotent reconciliation jobs in{" "}
              <strong>Java Spring</strong> backed by <strong>MySQL</strong>{" "}
              stored procedures, added compensating-transaction logic for failed
              upstream payments, and built operator review queues on the same
              APIs. Monthly close dropped from 3 days to ~2 hours, and year-end
              audit adjustments fell to near zero.
            </>
          ),
        },
      ],
    },
    {
      role: "Junior → Mid Java Engineer",
      period: "AsiaInfo Technology Ltd. | 2008/6 - 2014/6",
      scope: "Telecom VAS platforms · billing pipelines",
      stack: ["Java", "Oracle", "PL/SQL", "JMS"],
      bullets: [
        {
          narrative: (
            <>
              I built and operated the billing pipelines for four telecom VAS
              platforms handling ring-back tones, MMS gateways, and more. I
              implemented JMS-backed billing pipelines in <strong>Java</strong>,
              with <strong>Oracle</strong> PL/SQL for batch settlement and
              idempotent retries on transient failures. Each platform handled
              5K+ concurrent subscribers at peak with stable settlement
              accuracy.
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
          <strong>Java:</strong> Java 8/11/17, Concurrency, JVM tuning, Generics
        </li>
        <li className="text-wrap">
          <strong>Spring:</strong> Spring Boot, Spring MVC, Spring Cloud, Spring Security, Spring Data
        </li>
        <li className="text-wrap">
          <strong>Persistence:</strong> MySQL (sharding, replication), Oracle, Elasticsearch, Redis, MyBatis
        </li>
        <li className="text-wrap">
          <strong>Build / Ops:</strong> Maven/Gradle, Docker, Alibaba Cloud, Git, JUnit, Mockito
        </li>
      </ul>
    </>
  ),
  fileName: "Jonathan-Java-Resume.pdf",
}

export default java
