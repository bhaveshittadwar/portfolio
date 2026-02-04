import { useState, useRef, useEffect } from 'react'
import { Dialog, Popover } from '@headlessui/react'
import { motion } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../assets/logo.png'

function useHeaderTilt(headerRef) {
  // Initial state: subtle top-left position for header
  const initialGlow = { x: 20, y: 20 }
  const initialTransform = 'perspective(1000px) rotateX(2deg) rotateY(-2deg) scale3d(1, 1, 1)'

  const [transform, setTransform] = useState(initialTransform)
  const [glowPosition, setGlowPosition] = useState(initialGlow)

  useEffect(() => {
    const header = headerRef.current
    if (!header) return

    const handleMouseMove = (e) => {
      const rect = header.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateX = ((y - centerY) / centerY) * -4
      const rotateY = ((x - centerX) / centerX) * 4

      setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`)
      setGlowPosition({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 })
    }

    const handleMouseLeave = () => {
      setTransform(initialTransform)
      setGlowPosition(initialGlow)
    }

    header.addEventListener('mousemove', handleMouseMove)
    header.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      header.removeEventListener('mousemove', handleMouseMove)
      header.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [headerRef])

  return { transform, glowPosition }
}

const sections = ['panel', 'skills', 'education', 'experience', 'projects', 'footer']
const fancyLinkClass =
  'drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] hover:-translate-y-1 hover:text-sky-400 hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.4)] transition-all duration-300'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const headerRef = useRef(null)
  const { transform, glowPosition } = useHeaderTilt(headerRef)

  const moveTo = (anchor) => {
    const target = document.getElementById(anchor)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      ref={headerRef}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="backdrop-blur-xl border-b lg:border border-sky-500/15 lg:shadow-[0_0_20px_rgba(56,189,248,0.08)] sticky top-0 lg:top-6 w-full lg:w-[calc(100%-4rem)] lg:mx-auto lg:rounded-full z-10 relative overflow-hidden transition-transform duration-200 ease-out"
      style={{
        '--header-height': '4.5rem',
        transform,
        background: `
          radial-gradient(circle at ${glowPosition.x}% ${glowPosition.y}%, rgba(56, 189, 248, 0.06) 0%, transparent 50%),
          linear-gradient(135deg, rgba(148, 163, 184, 0.03) 0%, rgba(51, 65, 85, 0.03) 100%),
          rgba(3, 7, 18, 0.6)
        `,
      }}
    >
      {/* Metallic shine overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 lg:rounded-full"
        style={{
          background: `linear-gradient(110deg, transparent 30%, rgba(255, 255, 255, 0.08) 50%, transparent 70%)`,
          transform: `translateX(${(glowPosition.x - 50) * 0.5}%)`,
          transition: 'transform 0.2s ease-out',
        }}
      />
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-4 h-[var(--header-height)] relative z-10">
        {/* Logo + Name */}
        <button
          onClick={() => moveTo('panel')}
          className="flex items-center cursor-pointer select-none"
        >
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
          <span className="ml-2 text-white font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Bhavesh Ittadwar</span>
        </button>

        {/* Desktop nav */}
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          {sections.slice(1, -1).map((section) => {
            const isProjects = section === 'projects'
            return (
              <motion.div
                key={section}
                whileHover={!isProjects ? { scale: 1.05 } : undefined}
                whileTap={!isProjects ? { scale: 0.95 } : undefined}
                animate={isProjects ? { scale: [1, 1.1, 1] } : undefined}
                transition={isProjects
                  ? { repeat: Infinity, repeatType: 'mirror', duration: 1.2, ease: 'easeInOut' }
                  : { type: 'spring', stiffness: 200, damping: 20 }}
              >
                <button
                  onClick={() => moveTo(section)}
                  className={`text-base font-semibold leading-6 text-white rounded-md ${fancyLinkClass} ${isProjects ? 'text-sky-400 drop-shadow-[0_0_6px_rgba(56,189,248,0.35)]' : ''}`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </motion.div>
            )
          })}
        </Popover.Group>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button className="p-2.5 text-white" onClick={() => setMobileMenuOpen(true)}>
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile menu panel */}
        <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden">
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full bg-gray-950/95 backdrop-blur-md p-6">
            <div className="flex items-center justify-between mb-6">
              <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
              <button onClick={() => setMobileMenuOpen(false)} className="p-2.5 text-white">
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="space-y-4">
              {sections.map((section) => {
                const isProjects = section === 'projects'
                return (
                  <motion.div
                    key={section}
                    whileHover={!isProjects ? { scale: 1.05 } : undefined}
                    whileTap={!isProjects ? { scale: 0.95 } : undefined}
                    animate={isProjects ? { scale: [1, 1.1, 1] } : undefined}
                    transition={isProjects
                      ? { repeat: Infinity, repeatType: 'mirror', duration: 1.2, ease: 'easeInOut' }
                      : { type: 'spring', stiffness: 200, damping: 20 }}
                  >
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false)
                        moveTo(section)
                      }}
                      className={`block px-3 py-2 text-base font-semibold text-white rounded-md ${fancyLinkClass} ${isProjects ? 'text-sky-400 drop-shadow-[0_0_6px_rgba(56,189,248,0.35)]' : ''}`}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </button>
                  </motion.div>
                )
              })}
            </div>
          </Dialog.Panel>
        </Dialog>
      </nav>
    </motion.header>
  )
}