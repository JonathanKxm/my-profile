import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Hero from "./components/Hero"
import Layout from "./components/Layout"
import Portfolio from "./components/Portfolio"
import Skills from "./components/Skills"

function App() {
  return (
    <Layout>
      <Hero />
      <Skills />
      <Portfolio />
      <Experience />
      <Contact />
    </Layout>
  )
}

export default App
