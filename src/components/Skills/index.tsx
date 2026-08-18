import { motion } from "framer-motion"
import { RiJavaLine } from "react-icons/ri"
import {
  SiDocker,
  SiExpress,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiJenkins,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiReact,
  SiRedis,
  SiSass,
  SiSpring,
  SiTailwindcss,
  SiVuedotjs,
} from "react-icons/si"
import { DiCss3 } from "react-icons/di"
import { GrOracle } from "react-icons/gr";

import Category from "./Category"

const skills = [
  {
    category: "Frontend",
    items: [
      {
        name: "HTML",
        icon: <SiHtml5 className="text-orange-500" />,
        stars: 5,
        halfStars: 0,
      },
      {
        name: "CSS",
        icon: <DiCss3 className="text-blue-500" />,
        stars: 5,
        halfStars: 0,
      },
      {
        name: "Javascript",
        icon: <SiJavascript className="text-yellow-400" />,
        stars: 5,
        halfStars: 0,
      },
      {
        name: "React",
        icon: <SiReact className="text-cyan-500" />,
        stars: 3,
        halfStars: 1,
      },
      {
        name: "Vue",
        icon: <SiVuedotjs className="text-green-500" />,
        stars: 4,
        halfStars: 0,
      },
      {
        name: "Sass",
        icon: <SiSass className="text-pink-500" />,
        stars: 3,
        halfStars: 0,
      },
      {
        name: "Tailwindcss",
        icon: <SiTailwindcss className="text-cyan-500" />,
        stars: 3,
        halfStars: 0,
      },
    ],
  },
  {
    category: "Backend",
    items: [
      {
        name: "Node Js",
        icon: <SiNodedotjs className="text-lime-500" />,
        stars: 2,
        halfStars: 0,
      },
      {
        name: "Express",
        icon: <SiExpress className="text-yellow-300" />,
        stars: 2,
        halfStars: 0,
      },
      {
        name: "Java",
        icon: <RiJavaLine className="text-cyan-500" />,
        stars: 5,
        halfStars: 0,
      },
      {
        name: "Spring",
        icon: <SiSpring className="text-green-500" />,
        stars: 5,
        halfStars: 0,
      },
    ],
  },
  {
    category: "Database",
    items: [
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-green-600" />,
        stars: 3,
        halfStars: 1,
      },
      {
        name: "MySql",
        icon: <SiMysql className="text-cyan-600" />,
        stars: 5,
        halfStars: 0,
      },
      {
        name: "Redis",
        icon: <SiRedis className="text-red-500" />,
        stars: 4,
        halfStars: 0,
      },
      {
        name: "Oracle",
        icon: <GrOracle className="text-red-400" />,
        stars: 4,
        halfStars: 0,
      },
    ],
  },
  {
    category: "Language",
    items: [
      {
        name: "Chinese",
        icon: <span className="fi fi-cn"></span>,
        stars: 5,
        halfStars: 0,
      },
      {
        name: "English",
        icon: <span className="fi fi-us"></span>,
        stars: 3,
        halfStars: 1,
      },
    ],
  },
  {
    category: "Others",
    items: [
      {
        name: "Git",
        icon: <SiGit className="text-orange-600" />,
        stars: 5,
        halfStars: 0,
      },
      {
        name: "Docker",
        icon: <SiDocker className="text-cyan-500" />,
        stars: 3,
        halfStars: 0,
      },
      {
        name: "Jenkins",
        icon: <SiJenkins className="text-cyan-500" />,
        stars: 3,
        halfStars: 0,
      }
    ],
  },
]

function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: "-50px" }}
      whileInView={{ opacity: 1, translateY: "0px" }}
      transition={{ duration: 1, delay: 0.5 }}
      className="max-w-screen-lg mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:pt-24 split-line"
      id="skills"
    >
      <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center">
        Skills
      </h2>
      <p className="text-center mb-8">
        As a skilled full-stack developer, I specialize in building web
        applications with these technologies.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto gap-10 lg:gap-6 mt-5 w-full max-w-screen-xl">
        {skills.map((skill, index) => (
          <Category key={index} index={index} sc={skill} />
        ))}
      </div>
    </motion.div>
  )
}

export default Skills
