import { useState } from "react"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import { Link as RouterLink } from "react-router-dom"
import { motion } from "framer-motion"

export default function Navbar() {
  const [nav, setNav] = useState<boolean>(false)

  const toggleNav = () => {
    setNav(!nav)
  }

  const closeNav = () => {
    setNav(false)
  }

  const menuVariants = {
    open: {
      y: 0,
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
    closed: {
      y: "-100%",
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
  }

  const handleNavClick = () => {
    closeNav()
  }

  return (
    <div className="sticky top-0 left-0 w-full bg-opacity-70 backdrop-blur-md z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between text-gray-100 text-xl items-center px-6 h-20">
        <RouterLink to="/" onClick={handleNavClick} className="flex items-center focus:outline-none">
          <img alt="logo" src="/code.svg" className="w-6 mr-4" />
          <span>Jonathan</span>
        </RouterLink>

        <ul className="hidden lg:flex gap-12 z-10">
          <li className="hover:text-jonathan-light">
            <RouterLink to="/#bio" onClick={handleNavClick} className="focus:outline-none">
              Profile
            </RouterLink>
          </li>
          <li className="hover:text-jonathan-light">
            <RouterLink to="/#skills" onClick={handleNavClick} className="focus:outline-none">
              Skills
            </RouterLink>
          </li>
          <li className="hover:text-jonathan-light">
            <RouterLink to="/#portfolio" onClick={handleNavClick} className="focus:outline-none">
              Portfolio
            </RouterLink>
          </li>
          <li className="hover:text-jonathan-light">
            <RouterLink to="/applications" onClick={handleNavClick} className="focus:outline-none">
              Applications
            </RouterLink>
          </li>
          <li className="hover:text-jonathan-light">
            <a href="https://jonathankxm.github.io" target="_blank" rel="noopener noreferrer" className="focus:outline-none">
              Blog
            </a>
          </li>
          <li className="hover:text-jonathan-light">
            <RouterLink to="/#contact" onClick={handleNavClick} className="focus:outline-none">
              Contact
            </RouterLink>
          </li>
        </ul>

        <div onClick={toggleNav} className="lg:hidden z-50 text-gray-800">
          {nav ? (
            <AiOutlineClose color="white" size={30} />
          ) : (
            <AiOutlineMenu color="white" size={30} />
          )}
        </div>

        <motion.div
          initial={false}
          animate={nav ? "open" : "closed"}
          variants={menuVariants}
          className="fixed inset-0 w-screen h-screen bg-gray-900 z-40 cursor-pointer scroll-none overflow-hidden lg:hidden"
        >
          <ul className="font-semibold text-2xl space-y-8 mt-24 text-center">
            <li>
              <RouterLink to="/#bio" onClick={handleNavClick} className="focus:outline-none">
                Profile
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/#skills" onClick={handleNavClick} className="focus:outline-none">
                Skills
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/#portfolio" onClick={handleNavClick} className="focus:outline-none">
                Portfolio
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/applications" onClick={handleNavClick} className="focus:outline-none">
                Applications
              </RouterLink>
            </li>
            <li>
              <a href="https://jonathankxm.github.io" target="_blank" rel="noopener noreferrer" className="focus:outline-none">
                Blog
              </a>
            </li>
            <li>
              <RouterLink to="/#contact" onClick={handleNavClick} className="focus:outline-none">
                Contact
              </RouterLink>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  )
}
