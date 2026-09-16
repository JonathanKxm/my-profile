import { motion } from "framer-motion"
import Intro from "./Intro"
import SocialMedia from "../SocialMedia"
import TechStack from "./TechStack"
import { ShinyEffect } from "../ShinyEffect"
import { GrDocumentPdf } from "react-icons/gr"
import { Link } from "react-router-dom"

/**
 * High-end Download CV pill for the Hero section.
 *
 * Design language — "Neon Glass":
 *   Background  glass morphism  on the dark site (#212121).
 *   Glow       #14FFEC (the site's own cyan accent) — restrained,
 *              never flashy; thin halo + soft shadow.
 *   Micro-animations only — float, icon breathe, arrow drift.
 *   No rotating rings, no sparkle particles. Clean and premium.
 */

/* ── Desktop: floating top-right of the hero ─────────────────────────────── */
function DownloadCvDesktop() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50, y: -10 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, delay: 0.9, ease: "easeOut" }}
      className="hidden lg:flex absolute top-2 right-5 z-20"
    >
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        {/* Cyan glow halo */}
        <div
          aria-hidden
          className="absolute -inset-[2px] rounded-full pointer-events-none"
          style={{
            background: "linear-gradient(135deg, #14FFEC 0%, rgba(20,255,236,0.2) 50%, #0D7377 100%)",
            filter: "blur(3px)",
            opacity: 0.55,
          }}
        />
        {/* Glass background */}
        <div
          aria-hidden
          className="absolute inset-0 rounded-full bg-[#212121]/70 backdrop-blur-md border border-white/[0.07]"
        />
        {/* Thin accent ring */}
        <div
          aria-hidden
          className="absolute inset-0 rounded-full pointer-events-none border"
          style={{ borderColor: "rgba(20,255,236,0.25)" }}
        />
        {/* Ambient shadow */}
        <div
          aria-hidden
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-3 rounded-full blur-xl pointer-events-none"
          style={{ background: "rgba(20,255,236,0.18)" }}
        />

        {/* Button */}
        <Link to="/cv" target="_blank" className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 24px 4px rgba(20,255,236,0.3), 0 8px 32px rgba(0,0,0,0.5)" }}
            whileTap={{ scale: 0.96 }}
            className="relative z-10 cursor-pointer inline-flex items-center gap-3 pl-4 pr-5 py-[11px] rounded-full bg-[#1a1a1a]/80 backdrop-blur-md border border-white/[0.06] shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:border-[#14FFEC]/30 transition-all duration-300 overflow-hidden"
          >
            <motion.span
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-[#14FFEC]/10 border border-[#14FFEC]/20 flex-shrink-0"
            >
              <GrDocumentPdf className="text-[#14FFEC]" size={14} />
            </motion.span>

            <span className="text-[#e8e8e8] font-medium tracking-wide text-sm lg:text-[15px]">
              Download CV
            </span>
          </motion.button>
        </Link>
      </motion.div>
    </motion.div>
  )
}

/* ── Mobile / tablet: inline with social media, to the left ─────────────── */
function DownloadCvMobile() {
  return (
    <Link to="/cv" target="_blank" className="flex items-center gap-2">
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.04, boxShadow: "0 0 16px 3px rgba(20,255,236,0.25), 0 4px 16px rgba(0,0,0,0.4)" }}
        whileTap={{ scale: 0.96 }}
        className="relative z-10 cursor-pointer inline-flex items-center gap-2 pl-3 pr-5 py-2.5 rounded-full bg-[#1a1a1a]/80 backdrop-blur-md border border-[#14FFEC]/40 shadow-[0_4px_16px_rgba(0,0,0,0.35)] hover:border-[#14FFEC]/60 hover:shadow-[0_0_16px_3px_rgba(20,255,236,0.25),0_4px_16px_rgba(0,0,0,0.4)] transition-all duration-300 overflow-hidden"
      >
        {/* Icon */}
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#14FFEC]/10 border border-[#14FFEC]/20 flex-shrink-0">
          <GrDocumentPdf className="text-[#14FFEC]" size={13} />
        </span>

        <span className="text-[#e8e8e8] font-medium text-sm tracking-wide">
          Download CV
        </span>
      </motion.button>
    </Link>
  )
}

function Hero() {
  return (
    <div className="mt-5 md:mt-20 max-w-screen-xl mx-auto relative" id="bio">
      <div className="mx-5 lg:mx-5">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Intro />

          {/* Mobile: Download CV button sits to the left of social media */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center gap-4 my-4 lg:mb-0"
          >
            <DownloadCvMobile />
            <SocialMedia />
          </motion.div>
        </motion.div>
      </div>
      <TechStack />

      {/* Desktop: floating top-right */}
      <DownloadCvDesktop />

      <div className="absolute inset-0 hidden lg:block">
        <ShinyEffect top={0} left={0} size={1200} />
      </div>
    </div>
  )
}

export default Hero
