// src/components/Header.jsx
import { useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'
import { motion } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../assets/logo.png'
import { Link as ScrollLink } from 'react-scroll'

const sections = ['skills', 'education', 'experience', 'projects']
const fancyLinkClass =
  'hover:-translate-y-1 hover:text-blue-400 hover:drop-shadow-[0_0_10px_rgba(93,188,252,0.4)] transition-all duration-300'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-gradient-to-r from-gray-950 to-zinc-800 sticky top-0 w-full z-10"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8 h-full py-6">
        {/* Logo + Name — NO motion wrapper */}
        <ScrollLink
          to="panel"
          smooth
          duration={500}
          className="flex items-center cursor-pointer select-none"
        >
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
          <span className="ml-2 text-white font-semibold">Bhavesh Ittadwar</span>
        </ScrollLink>

        {/* Desktop nav (unchanged) */}
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          {sections.map((section) => {
            const isProjects = section === 'projects'
            return (
              <motion.div
                key={section}
                whileHover={!isProjects ? { scale: 1.05 } : undefined}
                whileTap={!isProjects ? { scale: 0.95 } : undefined}
                animate={
                  isProjects
                    ? { scale: [1, 1.1, 1] }
                    : undefined
                }
                transition={
                  isProjects
                    ? { repeat: Infinity, repeatType: 'mirror', duration: 1.2, ease: 'easeInOut' }
                    : { type: 'spring', stiffness: 200, damping: 20 }
                }
              >
                <ScrollLink
                  to={section}
                  smooth
                  duration={500}
                  className={`p-6 text-base font-semibold leading-6 text-white rounded-md cursor-pointer ${fancyLinkClass} ${isProjects ? 'text-blue-400' : ''}`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </ScrollLink>
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
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full bg-gradient-to-r from-gray-950 to-zinc-800 p-6">
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
                    animate={
                      isProjects
                        ? { scale: [1, 1.1, 1] }
                        : undefined
                    }
                    transition={
                      isProjects
                        ? { repeat: Infinity, repeatType: 'mirror', duration: 1.2, ease: 'easeInOut' }
                        : { type: 'spring', stiffness: 200, damping: 20 }
                    }
                  >
                    <ScrollLink
                      to={section}
                      smooth
                      duration={500}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-3 py-2 text-base font-semibold text-white rounded-md ${fancyLinkClass} ${isProjects ? 'text-blue-400' : ''}`}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </ScrollLink>
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