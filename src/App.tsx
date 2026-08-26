import { useState } from 'react'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { CvDocument } from './components/CvDocument'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { MissionDossier } from './components/MissionDossier'
import { Nav } from './components/Nav'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { AgentThemeProvider } from './context/AgentThemeContext'
import type { Project } from './data/projects'

export default function App() {
  const [dossier, setDossier] = useState<Project | null>(null)
  const [cvOpen, setCvOpen] = useState(false)

  return (
    <AgentThemeProvider>
      <Nav />
      <main>
        <Hero onOpenCv={() => setCvOpen(true)} />
        <About />
        <Experience />
        <Skills />
        <Projects onOpen={setDossier} />
        <Education />
        <Contact />
      </main>
      <Footer />
      <MissionDossier project={dossier} onClose={() => setDossier(null)} />
      <CvDocument open={cvOpen} onClose={() => setCvOpen(false)} />
    </AgentThemeProvider>
  )
}
