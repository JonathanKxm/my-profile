import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motion"
export default function Intro() {
  return (
    <>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-gray-200 text-5xl lg:text-7xl italic tracking-tighter mb-4"
      >
        Hi, I'm <br />
        <span className="text-jonathan-light">Jonathan</span>
        <span className="fi fi-cn text-2xl md:text-4xl ml-5 rounded"></span>
      </motion.p>

      <TypeAnimation
        preRenderFirstString={true}
        sequence={[
          "I'm a fullstack developer.",
          1000,
          "Reliable.",
          1000,
          "Detail-oriented.",
          1000,
          "Problem solver.",
          1000,
          "Team player.",
          500,
        ]}
        speed={50}
        wrapper="div"
        cursor={true}
        repeat={Infinity}
        className="font-bold text-lime-200 text-xl lg:text-5xl italic mb-4 underline underline-offset-[10px]"
      />

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-gray-200 max-w-[500px] lg:max-w-[600px] text-lg lg:text-2xl mb-6"
      >
        A fullstack developer crafting elegant solutions across frontend, backend, and everything in between.
      </motion.p>
    </>
  )
}
