import { ShinyEffect } from "../ShinyEffect"
import { motion } from "framer-motion"
import { FaLink } from "react-icons/fa"
import { SiGithub } from "react-icons/si"
import type { Project } from "../../types/project"

const projects: Project[] = [
  {
    title: "LiftHub",
    summary:
      "Create a platform connecting businesses, elevator technicians, and service providers for streamlined elevator maintenance.",
    image: "https://profile.jonathancode.tech/lifthub0.jpg",
    url: "https://lifthub.cn",
    techStack: ["react", "nextjs", "tailwindcss", "ant design"],
  },
  {
    title: "Campus Lab Smart Cabinet Management System",
    summary:
      "Develop a smart cabinet management system for campus laboratories to efficiently and securely store and manage materials, including hazardous substances.",
    image: "https://profile.jonathancode.tech/cabinet.jpg",
    url: "https://140.143.202.23:9001/chem",
    techStack: ["vue3", "vuex", "ElementUI", "java", "spring"],
  },
  {
    title: "Campus E-commerce",
    summary:
      "Unified management of supplier SKU, integrating product purchasing and expense reimbursement processes, enabling university professors to select teaching-related products from designated supplier SKUs without needing to apply for reimbursement for each purchase.",
    image: "https://profile.jonathancode.tech/E-commerce.jpg",
    url: "https://ucaigou.net/",
    techStack: ["vue", "vuex", "ElementUI", "java", "spring"],
  },
]

function Portfolio() {
  return (
    <div
      className="max-w-screen-lg mx-auto md:mt-10 pt-10 md:pt-24 relative px-4 split-line overflow-hidden"
      id="portfolio"
    >
      <h2 className="text-2xl md:text-4xl text-center font-bold text-gray-200 mb-10">
        Portfolio
      </h2>
      {projects.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row mb-12 md:gap-10 ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          <motion.div
            className="md:w-1/2 md:h-80 shadow-2xl shadow-jonathan-light/20"
            initial={{ opacity: 0, translateY: "-50px" }}
            whileInView={{ opacity: 1, translateY: "0px" }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>
          <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-gray-200 mb-4">
              {item.title}
            </h3>
            <p className="text-gray-300 mb-4">{item.summary}</p>
            <div className="flex space-x-4">
              <a
                target="_blank"
                href={item.url}
                className="px-4 py-2 bg-jonathan-main text-gray-200 rounded-lg hover:bg-jonathan-main/60 transition duration-300 flex items-center justify-center"
              >
                <FaLink />
                <span className="ml-2">Visit</span>
              </a>

              {item.github && (
                <a
                  href={item.github}
                  className="px-4 py-2 bg-jonathan-main text-gray-200 rounded-lg hover:bg-jonathan-main/60 transition duration-300 flex items-center justify-center"
                >
                  <SiGithub />
                </a>
              )}
            </div>
          </div>
        </div>
      ))}

      <div className="absolute inset-0 -z-10">
        <ShinyEffect top={-400} left={0} size={1024} />
        <ShinyEffect top={800} left={200} size={1024} />
      </div>
    </div>
  )
}

export default Portfolio
