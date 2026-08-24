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
              JavaScript Full Stack Developer
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
            JavaScript Full Stack Developer with deep expertise in both frontend and backend.
            10+ years experience with <strong>React</strong>, <strong>Vue</strong>, <strong>Node.js</strong>,
            and modern build tools. Strong background in building real-time applications,
            RESTful APIs, and responsive UIs. Quick learner committed to writing maintainable,
            performant code.
          </p>

          <h3>Experience</h3>
          <h4>Full Stack Engineer | Contractor | Jun 2023 - Present</h4>
          <ul>
            <li>
              Built elevator appointment system using <strong>React</strong>,
              <strong>Next.js</strong>, Tailwind CSS, and Ant Design
            </li>
            <li>
              Developed order management system with <strong>Vue3</strong>
              and ElementUI, featuring real-time data updates
            </li>
            <li>
              Created smart cabinet management system with <strong>Vue3</strong>,
              <strong>Ant Design</strong>, and <strong>Node.js</strong> REST APIs
            </li>
          </ul>

          <h4>
            Senior Software Engineer | Wisedu Education Ltd. | 2014/6 - 2023/06
          </h4>
          <ul>
            <li>
              Led campus e-commerce platform development using <strong>Vue2</strong>,
              <strong>Node.js</strong>, MySQL, and Elasticsearch
            </li>
            <li>
              Implemented automated SKU management and reimbursement workflows,
              processing $10M+ annually
            </li>
            <li>
              Built <strong>RESTful APIs</strong> integrating third-party suppliers
              and financial systems
            </li>
          </ul>

          <h4>
            Junior Software Engineer | AsiaInfo Technology Ltd. | 2008/6-2014/6
          </h4>
          <ul>
            <li>
              Developed telecom service systems using JavaScript and Oracle databases
            </li>
          </ul>

          <h3>Education&Skills</h3>
          <ul>
            <li>
              Computer Science and Technology, Jiangsu University of Science and Technology
            </li>
            <li className="text-wrap">
              <strong>Languages:</strong> JavaScript/TypeScript/HTML5/CSS3
            </li>
            <li className="text-wrap">
              <strong>Frontend:</strong> React/Next.js/Vue/Vue3/Tailwind/Ant Design/ElementUI
            </li>
            <li className="text-wrap">
              <strong>Backend:</strong> Node.js/Express/NestJS
            </li>
            <li className="text-wrap">
              <strong>Database:</strong> MySQL/Elasticsearch/MongoDB
            </li>
          </ul>
        </main>
      </div>
    </div>
  )
}
