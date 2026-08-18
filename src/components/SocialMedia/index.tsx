import { motion } from "framer-motion"
import { SiGithub, SiGitee, SiMastodon } from "react-icons/si"
import { FaLinkedin } from "react-icons/fa";
export default function SocialMedia() {
  return (
    <div className="flex gap-6 text-4xl lg:text-6xl text-jonathan-light z-20">
      <motion.a
        whileHover={{ scale: 1.2, color: "gray" }}
        href="https://github.com/JonathanTube"
      >
        <SiGithub />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.2, color: "#0375b4" }}
        href="https://www.linkedin.com/in/jonathan-k-692324285/"
      >
        <FaLinkedin />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.2, color: "#c71d23" }}
        href="https://gitee.com/kongxm"
      >
        <SiGitee />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.2, color: "#6364ff" }}
        href="https://mastodon.social/@JonathanKong"
      >
        <SiMastodon />
      </motion.a>
    </div>
  )
}
