import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
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

  useEffect(() => {
    const dot = document.querySelector('[data-cursor-dot]');
    const outline = document.querySelector('[data-cursor-outline]');
    if (!dot || !outline) return;
  
    const offset = (x, y) => `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    let initialized = false;
  
    const move = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      const position = offset(x, y);
  
      dot.style.transform = position;
  
      const iframe = document.getElementById('iframe-wrapper');
      const buffer = 60;
      const isNearIframe =
        iframe &&
        (() => {
          const rect = iframe.getBoundingClientRect();
          return (
            x > rect.left - buffer &&
            x < rect.right + buffer &&
            y > rect.top - buffer &&
            y < rect.bottom + buffer
          );
        })();

      const overCodeButton = document
        .querySelector('a[href*="github.com/bhaveshittadwar/game-of-life"]')
        ?.getBoundingClientRect();

      const isOnCodeButton =
        overCodeButton &&
        x >= overCodeButton.left &&
        x <= overCodeButton.right &&
        y >= overCodeButton.top &&
        y <= overCodeButton.bottom;

      const hideCursor = isNearIframe && !isOnCodeButton;
      if (hideCursor) {
        dot.classList.add('fading');
        dot.style.opacity = '0';
        outline.style.opacity = '0';
      } else {
        dot.classList.remove('fading');
        dot.style.opacity = '1';
        outline.style.opacity = '1';
      }

      if (!initialized) {
        outline.style.transform = position;
        dot.classList.add('visible');
        outline.classList.add('visible');
        initialized = true;
      } else {
        outline.animate({ transform: position }, { duration: 500, fill: 'forwards' });
      }
    };
  
    const press = () => {
      dot.classList.add('clicked');
      outline.classList.add('clicked');
    };
    const release = () => {
      dot.classList.remove('clicked');
      outline.classList.remove('clicked');
    };
    const enter = () => {
      dot.classList.add('hovered');
      outline.classList.add('hovered');
    };
    const leave = () => {
      dot.classList.remove('hovered');
      outline.classList.remove('hovered');
    };
  
    window.addEventListener('mousemove', move);
    window.addEventListener('mousedown', press);
    window.addEventListener('mouseup', release);
  
    const targets = document.querySelectorAll(
      "button, a, [role='button'], input[type='button'], input[type='submit']"
    );
    targets.forEach((el) => {
      el.addEventListener('mouseenter', enter);
      el.addEventListener('mouseleave', leave);
    });
  
    // Fallback to show cursor if mouse was already moved
    requestAnimationFrame(() => {
      dot.classList.add('visible');
      outline.classList.add('visible');
    });
  
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', press);
      window.removeEventListener('mouseup', release);
      targets.forEach((el) => {
        el.removeEventListener('mouseenter', enter);
        el.removeEventListener('mouseleave', leave);
      });
    };
  }, []);

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
        <div className="cursor-dot" data-cursor-dot></div>
      )}
      {!isMobile && (
        <div className="cursor-outline" data-cursor-outline></div>
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