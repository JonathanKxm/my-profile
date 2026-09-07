import { BiDownload } from "react-icons/bi"
import { Link, useParams } from "react-router-dom"
import { saveAs } from "file-saver"
import { findStack } from "../../data/resumes"
import { ExperienceSection } from "../../data/resumes/shared"

const BASE_PDF_URL = "https://profile.jonathancode.tech"

const DEFAULT_STACK = "fullstack"

export default function CvResume() {
  const { stack = "" } = useParams<{ stack: string }>()
  // /cv (no :stack) falls back to the default stack.
  const lookupKey = stack || DEFAULT_STACK
  const entry = findStack(lookupKey)

  if (!entry) {
    return (
      <div className="cv">
        <div className="max-w-screen-lg mx-auto bg-white px-5 pt-10 pb-20 shadow-lg rounded mt-10 text-slate-800">
          <h1 className="text-xl md:text-2xl font-bold">Resume not found</h1>
          <p className="mt-5 text-slate-800">
            We couldn't find a resume for stack <code>{stack}</code>.
          </p>
          <p className="mt-2">
            <Link to="/cv" className="text-blue-600 underline">
              Browse all available resumes
            </Link>
          </p>
        </div>
      </div>
    )
  }

  const pdfUrl = `${BASE_PDF_URL}/${entry.fileName}`

  const downloadCV = () => {
    saveAs(pdfUrl, entry.fileName)
  }

  return (
    <div className="cv">
      <button
        type="button"
        onClick={downloadCV}
        className="block text-center w-48 h-12 mx-auto rounded bg-slate-600 hover:bg-slate-600/90 font-semibold cursor-pointer flex items-center justify-center sticky top-10 border-0"
      >
        <BiDownload className="text-xl !text-white" />
        <span className="ml-2 !text-white">Download CV</span>
      </button>

      <div className="bg-white max-w-screen-lg mx-auto px-5 pt-10 pb-20 shadow-lg rounded mt-10">
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 md:gap-0">
          <div>
            <h1 className="text-xl md:text-2xl font-bold">Jonathan</h1>
            <h2 className="text-base md:text-xl font-semibold">{entry.title}</h2>
          </div>
          <div>
            <a className="block" href="mailto:jonathankxm@gmail.com">
              Email:&nbsp;&nbsp;jonathankxm@gmail.com
            </a>
            <div>Location: <span className="font-semibold">China</span></div>
          </div>
        </header>

        <main>
          <h3>Summary</h3>
          {entry.summary}

          <h3>Experience</h3>
          <ExperienceSection entries={entry.experience} />

          <h3>Education &amp; Skills</h3>
          {entry.skills}
        </main>
      </div>
    </div>
  )
}
