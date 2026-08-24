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
              Vue.js Frontend Developer
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
            Frontend Developer specializing in <strong>Vue.js</strong> ecosystem with 10+ years
            of experience building responsive, user-friendly web applications. Expert in Vue 2/3,
            <strong>ElementUI</strong>, <strong>Ant Design Vue</strong>, and modern CSS frameworks.
            Proven ability to create reusable components, implement complex state management,
            and optimize frontend performance.
          </p>

          <h3>Experience</h3>
          <h4>Full Stack Engineer | Contractor | Jun 2023 - Present</h4>
          <ul>
            <li>
              Built <strong>order management dashboard</strong> with Vue3,
              ElementUI, featuring real-time updates and data visualization
            </li>
            <li>
              Developed <strong>smart cabinet management system</strong> using Vue3,
              <strong>Ant Design Vue</strong>, providing safe material storage for campus labs
            </li>
            <li>
              Created reusable component library supporting multiple client projects
            </li>
          </ul>

          <h4>
            Senior Software Engineer | Wisedu Education Ltd. | 2014/6 - 2023/06
          </h4>
          <ul>
            <li>
              Led frontend development of campus e-commerce platform using <strong>Vue2</strong>
              and <strong>ElementUI</strong>, serving 500+ universities
            </li>
            <li>
              Implemented automated SKU management interface with complex forms,
              validation, and real-time updates
            </li>
            <li>
              Built responsive admin dashboard with data tables, charts, and export functionality
            </li>
          </ul>

          <h4>
            Junior Software Engineer | AsiaInfo Technology Ltd. | 2008/6-2014/6
          </h4>
          <ul>
            <li>
              Developed telecom service interfaces using jQuery and vanilla JavaScript
            </li>
          </ul>

          <h3>Education&Skills</h3>
          <ul>
            <li>
              Computer Science and Technology, Jiangsu University of Science and Technology
            </li>
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
        </main>
      </div>
    </div>
  )
}
