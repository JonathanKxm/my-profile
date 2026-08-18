import { motion } from "framer-motion"
import TagCloud, { TagCloud as TC, TagCloudOptions } from "TagCloud"
import { useEffect, useLayoutEffect, useRef, useState } from "react"

const wordCloudTexts: string[] = [
  "HTML",
  "CSS",
  "JAVASCRIPT",
  "Tailwindcss",
  "Sass",
  "Node",
  "Java",
  "Docker",
  "Spring",
  "Express",
  "Redis",
  "MongoDB",
  "MySql",
  "Vue",
  "React",
  "Git",
  "Jenkins",
]

const DEFAULT_RADIUS = 250
function Profile() {
  const tagCloudRef = useRef<TC | null>(null)
  const [wordCloudOptions, setWordCloudOptions] = useState<TagCloudOptions>({
    radius: DEFAULT_RADIUS,
    maxSpeed: "fast",
    initSpeed: "normal",
    deceleration: 1,
    useItemInlineStyles: true,
    useContainerInlineStyles: true,
    keep: false, // Whether to keep rolling after mouse out area. Default true (decelerate to rolling init speed, and keep rolling with mouse).
  })

  useEffect(() => {
    const calcWordCloudRadius = () => {
      const { innerWidth } = window
      let radius = DEFAULT_RADIUS
      if (innerWidth < 1024) {
        radius = 150
      } else if (innerWidth < 1280) {
        radius = 200
      }
      setWordCloudOptions({
        ...wordCloudOptions,
        radius,
      })
    }

    calcWordCloudRadius()
    window.onresize = () => {
      calcWordCloudRadius()
    }
  }, [])

  useLayoutEffect(() => {
    // In React strict mode this will be executed twice, there will be show the word cloud twice either.
    // we need to destroy the previous component if it exists.
    setTimeout(() => {
      if (tagCloudRef.current !== null) tagCloudRef.current.destroy()
      tagCloudRef.current = TagCloud(
        "#word-cloud",
        wordCloudTexts,
        wordCloudOptions
      )
    }, 2500)
    // return () => {
    //   if (tagCloudRef.current !== null) tagCloudRef.current.destroy()
    // }
  }, [wordCloudOptions])

  return (
    <div className="relative pointer-events-none min-w-64 min-h-64">
      <div id="word-cloud" className="absolute inset-0 flex items-end" />

      <motion.img
        src="https://profile.jonathancode.tech/JonathanOutline.png"
        alt="Profile"
        className="w-[300px] lg:w-[400px]"
        initial={{
          opacity: 0,
          scale: 0.1,
        }}
        whileInView={{
          opacity: 0.1,
          scale: 1,
        }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          damping: 10,
          stiffness: 100,
          delay: 1,
          duration: 1,
        }}
      />
    </div>
  )
}

export default Profile
