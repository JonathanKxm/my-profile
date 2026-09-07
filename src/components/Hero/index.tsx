import { motion } from "framer-motion"
import Intro from "./Intro"
import SocialMedia from "../SocialMedia"
import CodeDecor from "./CodeDecor"
import TechStack from "./TechStack"
import { ShinyEffect } from "../ShinyEffect"
import { GrDocumentPdf } from "react-icons/gr"
import { Link } from "react-router-dom"

function Hero() {
  return (
    <div className="mt-5 md:mt-20 max-w-screen-xl mx-auto relative" id="bio">
      <div className="grid mx-5 lg:grid-cols-2 lg:mx-5 place-items-center gap-5">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Intro />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col lg:flex-row items-center gap-6 my-4 lg:mb-0"
          >
            <motion.button
              whileHover={{
                scale: 1.04,
                boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
              }}
              className="cursor-pointer z-10 rounded-lg font-bold text-gray-200 lg:w-auto p-4 border border-cyan-200"
            >
              <Link to="/cv" target="_blank">
                <div className="flex items-center gap-2 text-jonathan-light">
                  <GrDocumentPdf />
                  <span className="text-jonathan-light font-light">
                    Download CV
                  </span>
                </div>
              </Link>
            </motion.button>

            <SocialMedia />
          </motion.div>
        </motion.div>
        <CodeDecor />
      </div>
      <TechStack />
      <div className="absolute inset-0 hidden lg:block">
        <ShinyEffect top={0} left={0} size={1200} />
      </div>
    </div>
  )
}

export default Hero
