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
              Python Backend Developer
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
            Backend Developer with strong Python skills and extensive experience building
            <strong>RESTful APIs</strong>, data processing pipelines, and system integrations.
            Familiar with <strong>Node.js</strong> for full-stack flexibility. Proficient in
            <strong>MySQL</strong>, <strong>Elasticsearch</strong>, and cloud deployment.
            Focus on scalable architecture and clean, maintainable code.
          </p>

          <h3>Experience</h3>
          <h4>Full Stack Engineer | Contractor | Jun 2023 - Present</h4>
          <ul>
            <li>
              Built <strong>REST APIs</strong> for elevator appointment system using Node.js/Express
            </li>
            <li>
              Developed <strong>order management service</strong> with scheduled tasks
              and real-time notifications
            </li>
            <li>
              Created <strong>smart cabinet backend</strong> with inventory management and
              notification systems
            </li>
            <li>
              Developed <strong>Windows ship performance monitoring client</strong> using <strong>Python</strong> and
              <strong>PyQt5</strong>, featuring real-time propulsion data visualization,
              fuel consumption tracking, trim optimization analysis, and CO2 emission
              reporting with trend analysis dashboards
            </li>
          </ul>

          <h4>
            Senior Software Engineer | Wisedu Education Ltd. | 2014/6 - 2023/06
          </h4>
          <ul>
            <li>
              Architected campus e-commerce backend with <strong>Python</strong> (Flask/Django),
              processing $10M+ annual transactions
            </li>
            <li>
              Implemented automated <strong>SKU management</strong> and financial reconciliation
              systems using MySQL stored procedures
            </li>
            <li>
              Built <strong>Elasticsearch</strong> indexing system for product search,
              reducing query time by 70%
            </li>
            <li>
              Integrated third-party payment and logistics APIs with retry logic and error handling
            </li>
          </ul>

          <h4>
            Junior Software Engineer | AsiaInfo Technology Ltd. | 2008/6-2014/6
          </h4>
          <ul>
            <li>
              Developed telecom backend services using <strong>Python</strong> and Oracle
            </li>
            <li>
              Built automated testing and deployment scripts
            </li>
          </ul>

          <h3>Education&Skills</h3>
          <ul>
            <li>
              Computer Science and Technology, Jiangsu University of Science and Technology
            </li>
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
        </main>
      </div>
    </div>
  )
}
