import { BiDownload } from "react-icons/bi"
import { saveAs } from "file-saver"

export default function CV() {
  const downloadCV = () => {
    const url =
      "https://profile.jonathancode.tech/Jonathan%20Full%20Stack%20Developer%20v1.0.1.pdf"
    saveAs(url, "Jonathan's CV.pdf")
  }
  return (
    <div className="cv">
      <a
        onClick={downloadCV}
        href="#"
        className="text-center w-48 h-12 mx-auto rounded bg-slate-600 text-white
         hover:bg-slate-600/90 font-semibold cursor-pointer flex items-center justify-center
         sticky top-10"
      >
        <BiDownload className="text-gray-300 text-xl" />
        <a className="ml-2">Download CV</a>
      </a>

      <div className="bg-white max-w-screen-lg mx-auto px-5 pt-10 pb-20 shadow-lg rounded mt-10">
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 md:gap-0">
          <div>
            <h1 className="text-xl md:text-2xl font-bold">Jonathan</h1>
            <h2 className="text-base md:text-xl font-semibold">
              Node.js Backend Developer
            </h2>
          </div>
          <div>
            <a className="block" href="mailto:jonathankxm@gmail.com">
              Email:&nbsp;&nbsp;jonathankxm@gmail.com
            </a>
            <div>Location:&nbsp;&nbsp;Jiangsu, China</div>
          </div>
        </header>

        <main>
          <h3>Summary</h3>
          <p>
            Node.js Backend Developer with deep expertise in building <strong>RESTful APIs</strong>,
            <strong>GraphQL</strong> services, and real-time applications. 10+ years experience
            with JavaScript/TypeScript on both frontend and backend. Skilled in Express, NestJS,
            <strong>MySQL</strong>, and <strong>Elasticsearch</strong>. Focus on high-performance,
            scalable server-side architecture.
          </p>

          <h3>Experience</h3>
          <h4>Full Stack Engineer | Contractor | Jun 2023 - Present</h4>
          <ul>
            <li>
              Built <strong>elevator appointment API</strong> with <strong>Node.js/Express</strong>,
              implementing booking logic, slot management, and notifications
            </li>
            <li>
              Developed <strong>order tracking service</strong> with real-time
              WebSocket updates and notifications
            </li>
            <li>
              Created <strong>smart cabinet REST API</strong> with authentication, inventory tracking,
              and audit logging
            </li>
          </ul>

          <h4>
            Senior Software Engineer | Wisedu Education Ltd. | 2014/6 - 2023/06
          </h4>
          <ul>
            <li>
              Led backend development of campus e-commerce platform processing $10M+ annually
            </li>
            <li>
              Built <strong>Node.js API gateway</strong> integrating third-party suppliers,
              payment systems, and logistics providers
            </li>
            <li>
              Implemented <strong>Elasticsearch</strong> search service for product catalog,
              handling 100K+ SKUs
            </li>
            <li>
              Designed database schema and <strong>MySQL</strong> optimization for high-traffic periods
            </li>
          </ul>

          <h4>
            Junior Software Engineer | AsiaInfo Technology Ltd. | 2008/6-2014/6
          </h4>
          <ul>
            <li>
              Developed telecom backend services using <strong>Node.js</strong> and Java
            </li>
          </ul>

          <h3>Education&Skills</h3>
          <ul>
            <li>
              Computer Science and Technology, Jiangsu University of Science and Technology
            </li>
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
        </main>
      </div>
    </div>
  )
}
