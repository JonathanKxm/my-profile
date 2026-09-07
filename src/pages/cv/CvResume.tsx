import { useState } from "react"
import { BiDownload } from "react-icons/bi"
import { Link, useParams } from "react-router-dom"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"
import { findStack } from "../../data/resumes"

const DEFAULT_STACK = "fullstack"
const EMAIL = "jonathankxm@gmail.com"

// A4 at 96dpi
const PAGE_W = 794
const PAGE_H = 1123

const pageStyle: React.CSSProperties = {
  width: PAGE_W,
  background: "#ffffff",
  color: "#1f2937",
  boxSizing: "border-box",
  padding: "40px 40px 56px",
  fontFamily:
    "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  position: "relative",
}

/** Preview page shown on-screen (uses Tailwind classes). */
const PreviewPage = ({ children }: { children: React.ReactNode }) => (
  <div
    className="bg-white shadow-lg rounded"
    style={{ ...pageStyle }}
  >
    {children}
  </div>
)

export default function CvResume() {
  const { stack = "" } = useParams<{ stack: string }>()
  const lookupKey = stack || DEFAULT_STACK
  const entry = findStack(lookupKey)

  const [isGenerating, setIsGenerating] = useState(false)

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

  // ── Build page content ───────────────────────────────────────────────────────
  // Each stack file declares its own manual page sections. The web preview
  // renders them 1:1 as PDF pages.
  const sections: React.ReactNode[] = entry.sections ?? []

  // ── PDF export ─────────────────────────────────────────────────────────────
  const downloadCV = async () => {
    if (isGenerating) return
      setIsGenerating(true)

      try {
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "pt",
        format: "a4",
      })
      const pageWidthPt = pdf.internal.pageSize.getWidth()

      // Capture the preview pages (which are already rendered and styled by
      // Tailwind/CSS). Using the visible preview as the source means the PDF
      // visually matches the screen.
      const previewPages = document.querySelectorAll<HTMLDivElement>(
        ".cv .preview-page",
      )

      if (previewPages.length === 0) {
        throw new Error("No preview pages found to export")
      }

      for (let i = 0; i < previewPages.length; i++) {
        const page = previewPages[i]
        if (i > 0) pdf.addPage()

        // Capture the page at its natural height so bottom padding is
        // preserved. Cap at A4 height so a misconfigured page can't spill
        // into the next PDF page's gutter.
        const pageHeightCss = Math.min(page.clientHeight, PAGE_H)

        const canvas = await html2canvas(page, {
          scale: 2,
          backgroundColor: "#ffffff",
          useCORS: true,
          logging: false,
          width: PAGE_W,
          height: pageHeightCss,
          windowWidth: PAGE_W,
          windowHeight: pageHeightCss,
        })

        const imgData = canvas.toDataURL("image/png")
        const ratio = pageWidthPt / PAGE_W
        const imgHeightPt = pageHeightCss * ratio

        // Overlay the email link as a clickable area on page 1.
        if (i === 0) {
          const mailtoEl = page.querySelector<HTMLAnchorElement>(
            "a[data-mailto='1']",
          )
          if (mailtoEl) {
            const r = mailtoEl.getBoundingClientRect()
            const pageRect = page.getBoundingClientRect()
            pdf.link(
              (r.left - pageRect.left) * ratio,
              (r.top - pageRect.top) * ratio,
              r.width * ratio,
              r.height * ratio,
              { url: `mailto:${EMAIL}` },
            )
          }
        }

        pdf.addImage(imgData, "PNG", 0, 0, pageWidthPt, imgHeightPt)
      }

      pdf.save(entry.fileName)
    } catch (err) {
      console.error("Failed to generate PDF", err)
      window.alert("Sorry, generating the PDF failed. Please try again.")
    } finally {
      setIsGenerating(false)
    }
  }

  // ── Render ──────────────────────────────────────────────────────────────────
  return (
    <div className="cv">
      <button
        type="button"
        onClick={downloadCV}
        disabled={isGenerating}
        className="block text-center w-48 h-12 mx-auto rounded bg-slate-600 hover:bg-slate-600/90 font-semibold cursor-pointer flex items-center justify-center sticky top-10 border-0 disabled:opacity-60 disabled:cursor-wait"
      >
        <BiDownload className="text-xl !text-white" />
        <span className="ml-2 !text-white">
          {isGenerating ? "Generating..." : "Download CV"}
        </span>
      </button>

      {/* ── On-screen preview (one card per PDF page) ──────────────────────── */}
      <div className="flex flex-col items-center gap-6 mt-8">
        {sections.map((content, i) => (
          <div key={i} className="preview-page">
            <PreviewPage>{content}</PreviewPage>
          </div>
        ))}
      </div>
    </div>
  )
}
