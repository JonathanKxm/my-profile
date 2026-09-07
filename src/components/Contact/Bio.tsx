import { BiSmile } from "react-icons/bi"
import { motion } from "framer-motion"

const stats = [
  {
    value: "10",
    label: "years of full-stack experience",
    gradient: "from-jonathan-gray to-jonathan-dark",
  },
  {
    value: "5",
    label: "years in Java backend",
    gradient: "from-jonathan-gray to-jonathan-dark",
  },
  {
    value: "10",
    label: "projects delivered",
    gradient: "from-jonathan-gray to-jonathan-dark",
    rounded: "rounded-2xl",
  },
]

function Bio() {
  return (
    <div>
      <div className="text-gray-300 my-10 md:my-0">
        <h3 className="text-2xl md:text-4xl font-semibold mb-5 flex items-center gap-4">
          <span>Bio</span>
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            <BiSmile className="text-green-400" />
          </motion.div>
        </h3>
        <p className="text-justify leading-7 mx-auto">
          I'm Jonathan, a full-stack developer with 10+ years of experience
          building scalable web applications across frontend, backend, and
          everything in between. Skilled in the modern JavaScript ecosystem
          (React, Vue, Node.js) and enterprise Java (Spring). Passionate about
          clean code, API design, and shipping reliable products that users
          love.
        </p>
      </div>

      <div className="flex items-center mt-5 md:mt-10 gap-2 md:gap-7">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className={`bg-gray-800/40 p-5 rounded-lg bg-gradient-to-tr ${stat.gradient} ${stat.rounded ?? ""}`}
          >
            <h3 className="md:text-4xl text-2xl font-semibold text-white">
              {stat.value}
              <span className="text-jonathan-light ml-1">+</span>
            </h3>
            <p className="text-sm md:text-base">
              <span className="text-jonathan-light">{stat.label}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Bio
