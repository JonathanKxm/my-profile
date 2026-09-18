import { useState } from "react"
import { motion } from "framer-motion"
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
          scale: 3,
          backgroundColor: "#ffffff",
          useCORS: true,
          logging: false,
          width: PAGE_W,
          height: pageHeightCss,
          windowWidth: PAGE_W,
          windowHeight: pageHeightCss,
        })

        // PNG format ensures lossless text rendering for maximum clarity
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
    <div className="cv relative">
      {/* Sticky download button — always visible while scrolling */}
      <div className="fixed top-4 right-4 md:top-6 md:right-6 z-50">
        <motion.button
          initial={{ opacity: 0, x: 30, y: -10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.04, boxShadow: "0 0 16px 3px rgba(20,255,236,0.25), 0 4px 16px rgba(0,0,0,0.4)" }}
          whileTap={{ scale: 0.96 }}
          type="button"
          onClick={downloadCV}
          disabled={isGenerating}
          aria-label="Download CV"
          className="relative z-10 cursor-pointer inline-flex items-center gap-2 pl-3 pr-5 py-2.5 rounded-full shadow-lg bg-[#1a1a1a]/80 backdrop-blur-md border border-white/20 hover:border-white/40 hover:shadow-xl transition-all duration-300 overflow-hidden disabled:opacity-70 disabled:cursor-wait disabled:hover:scale-100"
        >
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 border border-white/30 flex-shrink-0">
            <BiDownload className="text-white" size={13} />
          </span>
          <span className="text-white font-medium text-sm tracking-wide !text-white">
            {isGenerating ? "Generating..." : "Download CV"}
          </span>
        </motion.button>
      </div>

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
