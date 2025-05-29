import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useRef, useState } from 'react'
import AnimatedCursor from 'react-animated-cursor'
import useMedia from 'use-media'

import Header from './components/Header.jsx'
import Panel from './components/Panel.jsx'
import Skills from './components/Skills.jsx'
import Education from './components/Education.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Footer from './components/Footer.jsx'
import NoPage from './components/NoPage.jsx'
import './App.css'

function AppLayout() {
  const scrollContainerRef = useRef(null)
  const [snapEnabled, setSnapEnabled] = useState(true)
  const isMobile = useMedia({ maxWidth: 768 })

  const handleNavClick = (sectionId) => {
    setSnapEnabled(false)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })

    clearTimeout(window.snapTimeout)
    window.snapTimeout = setTimeout(() => {
      setSnapEnabled(true)
    }, 3200)
  }

  return (
    <>
      {!isMobile && (
        <AnimatedCursor
          innerSize={12}
          outerSize={32}
          color="255,255,255"
          outerAlpha={0.2}
          innerScale={0.8}
          outerScale={2}
          trailingSpeed={8}
          clickables={['a', 'button', '.pushable']}
          innerStyle={{
            boxShadow: '0 0 8px 4px rgba(255,255,255,0.4)',
            backdropFilter: 'blur(2px)',
          }}
        />
      )}

      <div className="sticky top-0 z-50 bg-gradient-to-r from-gray-950 to-zinc-800">
        <Header onNavClick={handleNavClick} />
      </div>

      <div
        id="scroll-container"
        ref={scrollContainerRef}
        className={`h-[calc(100vh-4.5rem)] overflow-y-auto scroll-smooth ${
          snapEnabled ? 'snap-y snap-mandatory' : ''
        }`}
      >
        <section id="panel" className="snap-start"><Panel /></section>
        <section id="skills" className="snap-start"><Skills /></section>
        <section id="education" className="snap-start"><Education /></section>
        <section id="experience" className="snap-start"><Experience /></section>
        <section id="projects" className="snap-start"><Projects /></section>
        <section id="footer" className="snap-start"><Footer onNavClick={handleNavClick} /></section>
      </div>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}