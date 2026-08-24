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
              Java Backend Developer
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
            Java Backend Developer with 15+ years experience building enterprise-grade applications.
            Expert in <strong>Spring Boot</strong>, <strong>Spring MVC</strong>, and distributed
            system design. Strong background in <strong>MySQL</strong>, <strong>Elasticsearch</strong>,
            and Alibaba Cloud. Proven track record of building scalable e-commerce and
            financial systems.
          </p>

          <h3>Experience</h3>
          <h4>Full Stack Engineer | Contractor | Jun 2023 - Present</h4>
          <ul>
            <li>
              Built <strong>smart cabinet backend</strong> with <strong>Java Spring</strong>,
              implementing security controls, inventory management, and audit trails
            </li>
            <li>
              Developed real-time order processing service with scheduled tasks and alerts
            </li>
            <li>
              Created REST APIs supporting Vue.js and React frontend applications
            </li>
          </ul>

          <h4>
            Senior Software Engineer | Wisedu Education Ltd. | 2014/6 - 2023/06
          </h4>
          <ul>
            <li>
              Led backend architecture of campus e-commerce platform using
              <strong>Java Spring</strong>, processing $10M+ annual transactions
            </li>
            <li>
              Implemented automated <strong>SKU management</strong> and financial reconciliation
              with transaction processing and error handling
            </li>
            <li>
              Built <strong>Elasticsearch</strong> search cluster for product catalog,
              supporting complex queries and facets
            </li>
            <li>
              Designed <strong>MySQL</strong> sharding strategy handling 100K+ products
              and 1M+ orders
            </li>
          </ul>

          <h4>
            Junior Software Engineer | AsiaInfo Technology Ltd. | 2008/6-2014/6
          </h4>
          <ul>
            <li>
              Developed telecom value-added service systems using <strong>Java</strong>
              and Oracle databases
            </li>
            <li>
              Built high-performance data processing pipelines for billing systems
            </li>
          </ul>

          <h3>Education&Skills</h3>
          <ul>
            <li>
              Computer Science and Technology, Jiangsu University of Science and Technology
            </li>
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
        </main>
      </div>
    </div>
  )
}
