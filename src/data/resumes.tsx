import { StackEntry } from "../types/resume"

const SHARED_EXPERIENCE_INTRO = (
  <>
    <h4>Full Stack Engineer | Contractor | Jun 2023 - Present</h4>
    <ul>
      <li>
        Built elevator appointment system using{" "}
        <strong>React</strong>, <strong>Next.js</strong>, Tailwind CSS, and
        Ant Design
      </li>
      <li>
        Developed order management system with <strong>Vue3</strong> and
        ElementUI, featuring real-time data updates
      </li>
      <li>
        Created smart cabinet backend with <strong>Java Spring</strong>,
        including security controls, inventory management, and audit trails
      </li>
    </ul>

    <h4>Senior Software Engineer | Wisedu Education Ltd. | 2014/6 - 2023/06</h4>
    <ul>
      <li>
        Led backend architecture of campus e-commerce platform using{" "}
        <strong>Java Spring</strong>, processing $10M+ annual transactions
      </li>
      <li>
        Implemented automated <strong>SKU management</strong> and financial
        reconciliation with transaction processing and error handling
      </li>
      <li>
        Built <strong>Elasticsearch</strong> search cluster for product
        catalog, supporting complex queries and facets
      </li>
      <li>
        Designed <strong>MySQL</strong> sharding strategy handling 100K+
        products and 1M+ orders
      </li>
    </ul>

    <h4>Junior Software Engineer | AsiaInfo Technology Ltd. | 2008/6 - 2014/6</h4>
    <ul>
      <li>
        Developed telecom value-added service systems using{" "}
        <strong>Java</strong> and Oracle databases
      </li>
      <li>
        Built high-performance data processing pipelines for billing systems
      </li>
    </ul>
  </>
)

const EDUCATION = (
  <li>
    Computer Science and Technology, Jiangsu University of Science and
    Technology
  </li>
)

export const STACKS: StackEntry[] = [
  {
    stack: "fullstack",
    label: "Full Stack Web Developer",
    title: "Full Stack Web Developer",
    summary: (
      <p>
        Full Stack Web Developer with 10+ years experience building scalable,
        end-to-end web applications. Strong expertise across the modern
        JavaScript ecosystem (<strong>React</strong>, <strong>Vue</strong>,{" "}
        <strong>Node.js</strong>) and enterprise Java (
        <strong>Spring Boot</strong>, <strong>Spring MVC</strong>). Proven
        track record leading campus e-commerce platforms and delivering
        reliable, maintainable software.
      </p>
    ),
    experience: SHARED_EXPERIENCE_INTRO,
    skills: (
      <ul>
        {EDUCATION}
        <li className="text-wrap">
          <strong>Languages:</strong> JavaScript/TypeScript/Java/HTML5/CSS3
        </li>
        <li className="text-wrap">
          <strong>Frontend:</strong> React/Next.js/Vue/Vue3/Tailwind/Ant
          Design/ElementUI
        </li>
        <li className="text-wrap">
          <strong>Backend:</strong> Node.js/Express/NestJS/Java Spring/Spring
          Boot
        </li>
        <li className="text-wrap">
          <strong>Database:</strong>
          MySQL/Elasticsearch/Redis/Oracle/MongoDB
        </li>
        <li className="text-wrap">
          <strong>DevOps:</strong> Docker/Alibaba Cloud/Git/GitHub Actions
        </li>
      </ul>
    ),
    fileName: "Jonathan-FullStack-Resume.pdf",
  },
  {
    stack: "java",
    label: "Java Backend Developer",
    title: "Java Backend Developer",
    summary: (
      <p>
        Java Backend Developer with 15+ years experience building
        enterprise-grade applications. Expert in{" "}
        <strong>Spring Boot</strong>, <strong>Spring MVC</strong>, and
        distributed system design. Strong background in{" "}
        <strong>MySQL</strong>, <strong>Elasticsearch</strong>, and Alibaba
        Cloud. Proven track record of building scalable e-commerce and
        financial systems.
      </p>
    ),
    experience: SHARED_EXPERIENCE_INTRO,
    skills: (
      <ul>
        {EDUCATION}
        <li className="text-wrap">
          <strong>Java:</strong> Spring Boot/Spring MVC/Spring Cloud/Java 17
        </li>
        <li className="text-wrap">
          <strong>Database:</strong> MySQL/Elasticsearch/Redis/Oracle
        </li>
        <li className="text-wrap">
          <strong>Architecture:</strong> Microservices/REST/JMS/Cache
        </li>
        <li className="text-wrap">
          <strong>Cloud:</strong> Alibaba Cloud/Docker/Git
        </li>
      </ul>
    ),
    fileName: "Jonathan-Java-Resume.pdf",
  },
  {
    stack: "python",
    label: "Python Backend Developer",
    title: "Python Backend Developer",
    summary: (
      <p>
        Backend Developer with strong Python skills and extensive experience
        building <strong>RESTful APIs</strong>, data processing pipelines,
        and system integrations. Familiar with <strong>Node.js</strong> for
        full-stack flexibility. Proficient in <strong>MySQL</strong>,{" "}
        <strong>Elasticsearch</strong>, and cloud deployment. Focus on
        scalable architecture and clean, maintainable code.
      </p>
    ),
    experience: (
      <>
        <h4>Full Stack Engineer | Contractor | Jun 2023 - Present</h4>
        <ul>
          <li>
            Built <strong>REST APIs</strong> for elevator appointment system
            using Node.js/Express
          </li>
          <li>
            Developed <strong>order management service</strong> with
            scheduled tasks and real-time notifications
          </li>
          <li>
            Created <strong>smart cabinet backend</strong> with inventory
            management and notification systems
          </li>
          <li>
            Developed{" "}
            <strong>Windows ship performance monitoring client</strong> using{" "}
            <strong>Python</strong> and <strong>PyQt5</strong>, featuring
            real-time propulsion data visualization, fuel consumption
            tracking, trim optimization analysis, and CO2 emission reporting
            with trend analysis dashboards
          </li>
        </ul>

        <h4>
          Senior Software Engineer | Wisedu Education Ltd. | 2014/6 - 2023/06
        </h4>
        <ul>
          <li>
            Architected campus e-commerce backend with{" "}
            <strong>Python</strong> (Flask/Django), processing $10M+ annual
            transactions
          </li>
          <li>
            Implemented automated <strong>SKU management</strong> and
            financial reconciliation systems using MySQL stored procedures
          </li>
          <li>
            Built <strong>Elasticsearch</strong> indexing system for product
            search, reducing query time by 70%
          </li>
          <li>
            Integrated third-party payment and logistics APIs with retry
            logic and error handling
          </li>
        </ul>

        <h4>
          Junior Software Engineer | AsiaInfo Technology Ltd. | 2008/6 -
          2014/6
        </h4>
        <ul>
          <li>
            Developed telecom backend services using <strong>Python</strong>{" "}
            and Oracle
          </li>
          <li>Built automated testing and deployment scripts</li>
        </ul>
      </>
    ),
    skills: (
      <ul>
        {EDUCATION}
        <li className="text-wrap">
          <strong>Python:</strong> Flask/Django/FastAPI/Scrapy/Pandas/PyQt5
        </li>
        <li className="text-wrap">
          <strong>Database:</strong> MySQL/Elasticsearch/Redis/MongoDB
        </li>
        <li className="text-wrap">
          <strong>Backend:</strong> Node.js/Express/REST/GraphQL
        </li>
        <li className="text-wrap">
          <strong>DevOps:</strong> Docker/Alibaba Cloud/Git/GitHub Actions
        </li>
      </ul>
    ),
    fileName: "Jonathan-Python-Resume.pdf",
  },
  {
    stack: "node",
    label: "Node.js Backend Developer",
    title: "Node.js Backend Developer",
    summary: (
      <p>
        Node.js Backend Developer with deep expertise in building{" "}
        <strong>RESTful APIs</strong>, <strong>GraphQL</strong> services, and
        real-time applications. 10+ years experience with
        JavaScript/TypeScript on both frontend and backend. Skilled in
        Express, NestJS, <strong>MySQL</strong>, and{" "}
        <strong>Elasticsearch</strong>. Focus on high-performance, scalable
        server-side architecture.
      </p>
    ),
    experience: (
      <>
        <h4>Full Stack Engineer | Contractor | Jun 2023 - Present</h4>
        <ul>
          <li>
            Built <strong>elevator appointment API</strong> with{" "}
            <strong>Node.js/Express</strong>, implementing booking logic,
            slot management, and notifications
          </li>
          <li>
            Developed <strong>order tracking service</strong> with real-time
            WebSocket updates and notifications
          </li>
          <li>
            Created <strong>smart cabinet REST API</strong> with
            authentication, inventory tracking, and audit logging
          </li>
        </ul>

        <h4>
          Senior Software Engineer | Wisedu Education Ltd. | 2014/6 - 2023/06
        </h4>
        <ul>
          <li>
            Led backend development of campus e-commerce platform processing
            $10M+ annually
          </li>
          <li>
            Built <strong>Node.js API gateway</strong> integrating
            third-party suppliers, payment systems, and logistics providers
          </li>
          <li>
            Implemented <strong>Elasticsearch</strong> search service for
            product catalog, handling 100K+ SKUs
          </li>
          <li>
            Designed database schema and <strong>MySQL</strong> optimization
            for high-traffic periods
          </li>
        </ul>

        <h4>
          Junior Software Engineer | AsiaInfo Technology Ltd. | 2008/6 -
          2014/6
        </h4>
        <ul>
          <li>
            Developed telecom backend services using{" "}
            <strong>Node.js</strong> and Java
          </li>
        </ul>
      </>
    ),
    skills: (
      <ul>
        {EDUCATION}
        <li className="text-wrap">
          <strong>Node.js:</strong> Express/NestJS/Fastify
        </li>
        <li className="text-wrap">
          <strong>Database:</strong> MySQL/Elasticsearch/Redis/MongoDB
        </li>
        <li className="text-wrap">
          <strong>API:</strong> REST/GraphQL/WebSocket/OpenAPI
        </li>
        <li className="text-wrap">
          <strong>DevOps:</strong> Docker/Kubernetes/Alibaba Cloud
        </li>
      </ul>
    ),
    fileName: "Jonathan-Node-Resume.pdf",
  },
  {
    stack: "react",
    label: "React.js Frontend Developer",
    title: "React.js Frontend Developer",
    summary: (
      <p>
        Frontend Developer with strong focus on <strong>React</strong> and
        modern JavaScript frameworks. 10+ years experience building dynamic
        single-page applications, <strong>Next.js</strong> SSR apps, and
        responsive interfaces. Skilled in state management, component
        architecture, and delivering pixel-perfect UIs with{" "}
        <strong>Ant Design</strong> and <strong>Tailwind CSS</strong>.
      </p>
    ),
    experience: (
      <>
        <h4>Full Stack Engineer | Contractor | Jun 2023 - Present</h4>
        <ul>
          <li>
            Built <strong>elevator appointment system</strong> with React,{" "}
            <strong>Next.js</strong>, <strong>Tailwind CSS</strong>, and{" "}
            <strong>Ant Design</strong>, featuring booking calendar and
            real-time availability
          </li>
          <li>
            Developed <strong>order tracking dashboard</strong> with React,
            interactive charts, and live status updates
          </li>
          <li>
            Implemented smart cabinet UI with complex forms, authentication,
            and role-based access
          </li>
        </ul>

        <h4>
          Senior Software Engineer | Wisedu Education Ltd. | 2014/6 - 2023/06
        </h4>
        <ul>
          <li>
            Led frontend architecture for campus e-commerce platform serving
            500+ universities
          </li>
          <li>
            Migrated legacy jQuery interfaces to modern{" "}
            <strong>React</strong> components
          </li>
          <li>
            Built automated SKU management dashboard with real-time validation
            and notifications
          </li>
        </ul>

        <h4>
          Junior Software Engineer | AsiaInfo Technology Ltd. | 2008/6 -
          2014/6
        </h4>
        <ul>
          <li>
            Developed telecom service interfaces using JavaScript and AJAX
          </li>
        </ul>
      </>
    ),
    skills: (
      <ul>
        {EDUCATION}
        <li className="text-wrap">
          <strong>React:</strong> React 18/Hooks/Context/Next.js/React Router
        </li>
        <li className="text-wrap">
          <strong>State:</strong> Redux/Zustand/React Query/SWR
        </li>
        <li className="text-wrap">
          <strong>UI:</strong> Ant Design/Material UI/Tailwind CSS/Chakra UI
        </li>
        <li className="text-wrap">
          <strong>Build:</strong> Vite/Webpack/TypeScript
        </li>
      </ul>
    ),
    fileName: "Jonathan-React-Resume.pdf",
  },
  {
    stack: "vue",
    label: "Vue.js Frontend Developer",
    title: "Vue.js Frontend Developer",
    summary: (
      <p>
        Frontend Developer specializing in <strong>Vue.js</strong> ecosystem
        with 10+ years of experience building responsive, user-friendly web
        applications. Expert in Vue 2/3, <strong>ElementUI</strong>,{" "}
        <strong>Ant Design Vue</strong>, and modern CSS frameworks. Proven
        ability to create reusable components, implement complex state
        management, and optimize frontend performance.
      </p>
    ),
    experience: (
      <>
        <h4>Full Stack Engineer | Contractor | Jun 2023 - Present</h4>
        <ul>
          <li>
            Built <strong>order management dashboard</strong> with Vue3,
            ElementUI, featuring real-time updates and data visualization
          </li>
          <li>
            Developed{" "}
            <strong>smart cabinet management system</strong> using Vue3,{" "}
            <strong>Ant Design Vue</strong>, providing safe material storage
            for campus labs
          </li>
          <li>
            Created reusable component library supporting multiple client
            projects
          </li>
        </ul>

        <h4>
          Senior Software Engineer | Wisedu Education Ltd. | 2014/6 - 2023/06
        </h4>
        <ul>
          <li>
            Led frontend development of campus e-commerce platform using{" "}
            <strong>Vue2</strong> and <strong>ElementUI</strong>, serving
            500+ universities
          </li>
          <li>
            Implemented automated SKU management interface with complex forms,
            validation, and real-time updates
          </li>
          <li>
            Built responsive admin dashboard with data tables, charts, and
            export functionality
          </li>
        </ul>

        <h4>
          Junior Software Engineer | AsiaInfo Technology Ltd. | 2008/6 -
          2014/6
        </h4>
        <ul>
          <li>
            Developed telecom service interfaces using jQuery and vanilla
            JavaScript
          </li>
        </ul>
      </>
    ),
    skills: (
      <ul>
        {EDUCATION}
        <li className="text-wrap">
          <strong>Vue:</strong> Vue2/Vue3/Composition API/Pinia/Vue Router
        </li>
        <li className="text-wrap">
          <strong>UI Libraries:</strong> ElementUI/Ant Design Vue/Vuetify
        </li>
        <li className="text-wrap">
          <strong>CSS:</strong> Tailwind CSS/SCSS/CSS3/Flexbox/Grid
        </li>
        <li className="text-wrap">
          <strong>Tools:</strong> Vite/Webpack/Git/DevTools
        </li>
      </ul>
    ),
    fileName: "Jonathan-Vue-Resume.pdf",
  },
  {
    stack: "javascript",
    label: "JavaScript Full Stack Developer",
    title: "JavaScript Full Stack Developer",
    summary: (
      <p>
        JavaScript Full Stack Developer with deep expertise in both frontend
        and backend. 10+ years experience with <strong>React</strong>,{" "}
        <strong>Vue</strong>, <strong>Node.js</strong>, and modern build
        tools. Strong background in building real-time applications, RESTful
        APIs, and responsive UIs. Quick learner committed to writing
        maintainable, performant code.
      </p>
    ),
    experience: (
      <>
        <h4>Full Stack Engineer | Contractor | Jun 2023 - Present</h4>
        <ul>
          <li>
            Built elevator appointment system using{" "}
            <strong>React</strong>, <strong>Next.js</strong>, Tailwind CSS,
            and Ant Design
          </li>
          <li>
            Developed order management system with <strong>Vue3</strong> and
            ElementUI, featuring real-time data updates
          </li>
          <li>
            Created smart cabinet management system with{" "}
            <strong>Vue3</strong>, <strong>Ant Design</strong>, and{" "}
            <strong>Node.js</strong> REST APIs
          </li>
        </ul>

        <h4>
          Senior Software Engineer | Wisedu Education Ltd. | 2014/6 - 2023/06
        </h4>
        <ul>
          <li>
            Led campus e-commerce platform development using{" "}
            <strong>Vue2</strong>, <strong>Node.js</strong>, MySQL, and
            Elasticsearch
          </li>
          <li>
            Implemented automated SKU management and reimbursement workflows,
            processing $10M+ annually
          </li>
          <li>
            Built <strong>RESTful APIs</strong> integrating third-party
            suppliers and financial systems
          </li>
        </ul>

        <h4>
          Junior Software Engineer | AsiaInfo Technology Ltd. | 2008/6 -
          2014/6
        </h4>
        <ul>
          <li>
            Developed telecom service systems using JavaScript and Oracle
            databases
          </li>
        </ul>
      </>
    ),
    skills: (
      <ul>
        {EDUCATION}
        <li className="text-wrap">
          <strong>Languages:</strong> JavaScript/TypeScript/HTML5/CSS3
        </li>
        <li className="text-wrap">
          <strong>Frontend:</strong> React/Next.js/Vue/Vue3/Tailwind/Ant
          Design/ElementUI
        </li>
        <li className="text-wrap">
          <strong>Backend:</strong> Node.js/Express/NestJS
        </li>
        <li className="text-wrap">
          <strong>Database:</strong> MySQL/Elasticsearch/MongoDB
        </li>
      </ul>
    ),
    fileName: "Jonathan-JavaScript-Resume.pdf",
  },
]

/**
 * Look up a resume by stack slug. Returns null when the slug is unknown so
 * the page can render a 404.
 */
export const findStack = (stackSlug: string) =>
  STACKS.find((s) => s.stack === stackSlug) ?? null
