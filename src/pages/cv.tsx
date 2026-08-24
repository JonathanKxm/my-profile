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
              Full Stack Web Developer
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
            Full Stack Developer with 10+ years experience building scalable web applications.
            Skilled in modern JavaScript ecosystems (<strong>React</strong>, <strong>Vue</strong>, <strong>Node.js</strong>)
            and enterprise Java (<strong>Spring</strong>). Proven track record of leading cross-functional teams
            and delivering high-performance e-commerce solutions. Passionate about clean code,
            API design.
          </p>

          <h3>Experience</h3>
          <h4>Full Stack Engineer | Contractor | Jun 2023 - Present</h4>
          <ul>
            <li>
              Developed multiple full-stack web applications using <strong>React</strong>,
              <strong>Next.js</strong>, <strong>Vue3</strong>, and <strong>Node.js</strong>
            </li>
            <li>
              Built an elevator appointment system with React, Next.js, Tailwind CSS, and Ant Design
            </li>
            <li>
              Developed a smart cabinet management system using Vue3, Ant Design, and Java backend
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
              Led development of campus e-commerce platform serving 500+ universities,
              managing $10M+ annual transactions
            </li>
            <li>
              Architected automated SKU management and financial reimbursement system
              using Vue2, Java Spring, MySQL, Elasticsearch
            </li>
            <li>
              Built integration layer with third-party suppliers and payment systems,
              reducing manual processing by 80%
            </li>
          </ul>

          <h4>
            Junior Software Engineer | AsiaInfo Technology Ltd. | 2008/6-2014/6
          </h4>
          <ul>
            <li>
              Developed telecom value-added service systems using Java and Oracle
            </li>
            <li>
              Performed system testing and debugging, improving service reliability by 30%
            </li>
          </ul>

          <h3>Education&Skills</h3>
          <ul>
            <li>
              Computer Science and Technology, Jiangsu University of Science and Technology
            </li>
            <li className="text-wrap">
              <strong>Frontend:</strong> React/Vue/Next.js/Tailwind/Ant Design/ElementUI
            </li>
            <li className="text-wrap">
              <strong>Backend:</strong> Node.js/Java/Spring/MySQL/Elasticsearch
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
