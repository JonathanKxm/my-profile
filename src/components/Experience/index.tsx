import { motion } from "framer-motion"

const experiences = [
  {
    company: "Full Stack Engineer / Contractor",
    period: "2023 ~ Present",
    description: [
      "Focus on developing web applications using React and Node.js ecosystem.",
      "Developed an elevator maintenance appointment system using React, Next.js, Tailwind CSS, and Ant Design.",
      "Built a photovoltaic power monitoring system with Vue and ElementUI.",
      "Created a smart cabinet system with Vue3, Ant Design, and Java, ensuring secure material storage in campus labs.",
      "Developed a Windows ship performance monitoring client using Python and PyQt5, featuring real-time propulsion data visualization, fuel consumption tracking, trim optimization analysis, and CO2 emission reporting with trend analysis dashboards.",
    ],
  },
  {
    company: "Wisedu Education Ltd.",
    period: "2014 ~ 2023",
    description: [
      "Senior Software Engineer leading the campus e-commerce platform serving 500+ universities, managing $10M+ annual transactions.",
      "Architected automated SKU management and financial reimbursement system using Vue2, Java Spring, MySQL, and Elasticsearch.",
      "Built integration layer with third-party suppliers and payment systems, reducing manual processing by 80%.",
    ],
  },
  {
    company: "AsiaInfo Technology Ltd.",
    period: "2008 ~ 2014",
    description: [
      "Developed telecom value-added service systems using Java and Oracle.",
      "Performed system testing and debugging, improving service reliability by 30%.",
    ],
  },
]

function Experience() {
  return (
    <div className="px-8 max-w-screen-md mx-auto split-line my-0 pt-0 md:my-24 md:pt-24">
      <h1 className="text-2xl md:text-4xl text-gray-200 font-bold text-center mb-12">
        Experience
      </h1>
      <motion.div className="space-y-8" initial="hidden" animate="visible">
        {experiences.map((item, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="border border-jonathan-light p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-gradient-to-tr from-jonathan-main/80 to-jonathan-light/5"
          >
            <div className="flex flex-col md:flex-row gap-1 justify-between">
              <h2 className="text-white text-base md:text-2xl font-semibold">
                {item.company}
              </h2>
              <p className="text-gray-200">{item.period}</p>
            </div>
            <div className="mt-4 text-gray-300">
              {item.description.map((desc, idx) => (
                <p key={idx}>{desc}</p>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Experience
