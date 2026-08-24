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
              Fullstack Web Developer
            </h2>
          </div>
          <div>
            <a className="block" href="mailto:jonathankxm@gmail.com">
              Email:&nbsp;&nbsp;jonathankxm@gmail.com
            </a>
            {/* <a className="block" href="tel:+8617602553940">
              (+86)17602553940
            </a> */}
            <div>Location:&nbsp;&nbsp;Jiangsu, China</div>
          </div>
        </header>

        <main>
          <h3>Summary</h3>
          <p>
            Full Stack Developer with 10+ years' experience in
            <strong>HTML</strong>,<strong>CSS</strong>,
            <strong>JavaScript</strong>,<strong>Node.js</strong> and Java,and
            Skill in <strong>React</strong> and <strong>Vue</strong>. Proactive
            problem-solver committed to mastering new technologies. Thrives in
            fast-paced environments, delivering innovative solutions and
            collaborating within cross-functional teams.
          </p>

          <h3>Experience</h3>
          <h4>Full Stack Engineer | Contractor | Jun 2023 - Present</h4>
          <ul>
            <li>
              Focus on developing web applications using <strong>React</strong>
              and Node.js ecosystem.
            </li>
            <li>
              Contributed to an elevator appointment system using React,
              <strong>Next.js</strong>, Tailwind Css, and Ant Design.
            </li>
            <li>
              Built a photovoltaic power monitoring system with
              <strong>Vue</strong>and ElementUI.
            </li>
            <li>
              Contributed to a smart cabinet system with Vue3,
              <strong>Antd</strong>, and Java, ensuring secure material storage
              in campus labs and reducing hazardous incidents.
            </li>
          </ul>

          <h4>
            Senior Software Engineer | Wisedu Education Ltd. | 2014/6 - 2023/06
          </h4>
          <ul>
            <li>
              Led the development of a campus e-commerce system, integrating
              third-party suppliers and financial systems.
            </li>
            <li>
              Implemented automated SKU management and reimbursement processes
              with Vue2, ElementUI, Java, Spring, MySQL, Elasticsearch, and
              Alibaba Cloud.
            </li>
          </ul>

          <h4>
            Junior Software Engineer | AsiaInfo Technology Ltd. | 2008/6-2014/6
          </h4>
          <ul>
            <li>
              Contributed to value-added service systems by developing
              solutions, performing testing, and debugging, enhancing customer
              satisfaction and telecom functionality
            </li>
          </ul>

          <h3>Education&Skills</h3>
          <ul>
            <li>
              Computer Science and Technology, Jiangsu University of Science and
              Technology
            </li>
            <li className="text-wrap">
              HTML/CSS/TypeScript/JavaScript/Vue/React/jQuery/Tailwind
              Css/AntDesign/ElementUI/Node/Java
            </li>
          </ul>
        </main>
      </div>
    </div>
  )
}
