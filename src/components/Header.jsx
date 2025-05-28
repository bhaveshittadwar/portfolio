import { useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'
import { motion } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../assets/logo.png'
import { Link } from 'react-scroll'

const fancyLinkClass = 'hover:-translate-y-1 hover:text-blue-400 hover:drop-shadow-[0_0_10px_rgba(93,188,252,0.4)] transition-all duration-300'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-gradient-to-r from-gray-950 to-zinc-800 sticky top-0 w-full z-10"
    >
      <nav className="mx-0 lg:mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8 h-full py-6" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="panel" smooth duration={500} className="-m-1.5 p-1.5 cursor-pointer">
            <span className="sr-only">Bhavesh Ittadwar</span>
            <img className="w-10 h-10" src={logo} alt="" />
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          {['skills', 'education', 'experience', 'projects'].map(section => (
            <motion.div
              key={section}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={section}
                smooth
                duration={500}
                className={`p-6 text-base font-semibold leading-6 text-white rounded-md cursor-pointer ${fancyLinkClass}`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </motion.div>
          ))}
        </Popover.Group>
      </nav>

      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full bg-gradient-to-r from-gray-950 to-zinc-800 px-6 py-6">
          <div className="flex items-center justify-between">
            <img className="w-10 h-10" src={logo} alt="Logo" />
            <button
              type="button"
              className="p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6">
            <div className="space-y-4">
              {['skills', 'education', 'experience', 'projects'].map(section => (
                <motion.div
                  key={section}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={section}
                    smooth
                    duration={500}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block rounded-md px-3 py-2 text-base font-semibold text-white cursor-pointer ${fancyLinkClass}`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </motion.header>
  )
}
