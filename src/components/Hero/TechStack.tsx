import { motion } from "framer-motion"
import { RiJavaLine } from "react-icons/ri"

import {
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiVuedotjs,
} from "react-icons/si"
import { DiCss3 } from "react-icons/di"
function TechStack() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 2 }}
      className="lg:flex lg:items-center lg:justify-center px-12 lg:px-0 py-10 lg:py-24"
    >
      {/* <p className="text-gray-200 text-center lg:text-left mr-6 border-b border-gray-600 pb-4 md:border-none md:pb-0">
        My Tech Stack
      </p> */}
      <div className="flex justify-center items-center text-4xl lg:text-6xl gap-4 pt-2 lg:pt-0 mt-4 md:mt-0">
        <SiHtml5 className="text-orange-500" />
        <DiCss3 className="text-blue-500" />
        <SiJavascript className="text-yellow-400" />
        <SiReact className="text-cyan-500" />
        <SiVuedotjs className="text-green-500" />
        <SiNodedotjs className="text-lime-500" />
        <RiJavaLine className="text-cyan-500" title="Java" />
      </div>
    </motion.div>
  )
}

export default TechStack
