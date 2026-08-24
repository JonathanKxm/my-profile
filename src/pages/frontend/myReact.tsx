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
              React.js Frontend Developer
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
            Frontend Developer with strong focus on <strong>React</strong> and modern
            JavaScript frameworks. 10+ years experience building dynamic single-page applications,
            <strong>Next.js</strong> SSR apps, and responsive interfaces. Skilled in state management,
            component architecture, and delivering pixel-perfect UIs with <strong>Ant Design</strong>
            and <strong>Tailwind CSS</strong>.
          </p>

          <h3>Experience</h3>
          <h4>Full Stack Engineer | Contractor | Jun 2023 - Present</h4>
          <ul>
            <li>
              Built <strong>elevator appointment system</strong> with React, <strong>Next.js</strong>,
              <strong>Tailwind CSS</strong>, and <strong>Ant Design</strong>, featuring
              booking calendar and real-time availability
            </li>
            <li>
              Developed <strong>order tracking dashboard</strong> with React,
              interactive charts, and live status updates
            </li>
            <li>
              Implemented smart cabinet UI with complex forms, authentication, and role-based access
            </li>
          </ul>

          <h4>
            Senior Software Engineer | Wisedu Education Ltd. | 2014/6 - 2023/06
          </h4>
          <ul>
            <li>
              Led frontend architecture for campus e-commerce platform serving 500+ universities
            </li>
            <li>
              Migrated legacy jQuery interfaces to modern <strong>React</strong> components
            </li>
            <li>
              Built automated SKU management dashboard with real-time validation and notifications
            </li>
          </ul>

          <h4>
            Junior Software Engineer | AsiaInfo Technology Ltd. | 2008/6-2014/6
          </h4>
          <ul>
            <li>
              Developed telecom service interfaces using JavaScript and AJAX
            </li>
          </ul>

          <h3>Education&Skills</h3>
          <ul>
            <li>
              Computer Science and Technology, Jiangsu University of Science and Technology
            </li>
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
        </main>
      </div>
    </div>
  )
}
