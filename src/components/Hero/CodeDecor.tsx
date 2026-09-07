import { motion } from "framer-motion"

const codeSnippets = [
  { label: "Frontend", code: "React • Vue • JavaScript" },
  { label: "Backend", code: "Node • Java • Spring" },
  { label: "DevOps", code: "Docker • CI/CD" },
  { label: "Database", code: "PostgreSQL • Redis • MongoDB" },
]

function CodeDecor() {
  return (
    <div className="hidden lg:flex flex-col justify-center min-h-[400px]">
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="font-mono text-sm"
      >
        <div className="bg-gray-900/80 backdrop-blur rounded-xl p-6 border border-gray-700/50 shadow-2xl">
          <div className="flex gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="space-y-3">
            {codeSnippets.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <span className="text-gray-500">// {item.label}</span>
                <div className="text-emerald-400/90">{item.code}</div>
              </motion.div>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-2">
            <span className="text-emerald-400/90">›</span>
            <span className="w-2 h-5 bg-emerald-400/90 animate-pulse" />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default CodeDecor
