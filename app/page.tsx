import Navbar from '@/components/navbar'
import Hero from '@/components/sections/hero'
import About from '@/components/sections/about'
import Skills from '@/components/sections/skills'
import Projects from '@/components/sections/projects'
import Writeups from '@/components/sections/writeups'
import CTFAndBugBounty from '@/components/sections/ctf-bugbounty'
import Certifications from '@/components/sections/labs'
import Achievements from '@/components/sections/achievements'
import Contact from '@/components/sections/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Writeups />
      <Certifications />
      <Achievements />
      <CTFAndBugBounty />
      <Contact />
      <Footer />
    </main>
  )
}
