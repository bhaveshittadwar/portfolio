import { useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import logo from '../assets/logo.png'
import { Link } from 'react-scroll';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-gradient-to-r from-gray-950 to-zinc-800 absolute w-full z-10 sticky top-0">
        <nav className="h-full mx-0 lg:mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1 h-full py-6">
          <Link to="panel" smooth={true} duration={500} className="-m-1.5 p-1.5 cursor-pointer">
            <span className="sr-only">Bhavesh Ittadwar</span>
            <img className='w-10 h-10' src={logo} alt="" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex -m-2.5 items-center justify-center rounded-md-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link to="skills" smooth={true} duration={500} className="p-6 text-base font-semibold leading-6 text-white rounded-md cursor-pointer">
            Skills
          </Link>
          <Link to="education" smooth={true} duration={500} className="p-6 text-base font-semibold leading-6 text-white rounded-md cursor-pointer">
            Education
          </Link>
          <Link to="experience" smooth={true} duration={500} className="p-6 text-base font-semibold leading-6 text-white rounded-md cursor-pointer">
            Experience
          </Link>
          <Link to="projects" smooth={true} duration={500} className="p-6 text-base font-semibold leading-6 text-white rounded-md cursor-pointer">
            Projects
          </Link>
        </Popover.Group>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full bg-gradient-to-r from-gray-950 to-zinc-800 px-6 py-6  sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Bhavesh Ittadwar</span>
              <img className='w-10 h-10' src={logo} alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white/10">
              <div className="space-y-2 py-6">
                <Link to="skills" smooth={true} duration={500}
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-md-lg px-3 py-2 text-base font-semibold leading-7 text-white rounded-md cursor-grab hover:text-neutral-800"
                >
                  Skills
                </Link>
                <Link to="education" smooth={true} duration={500}
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-md-lg px-3 py-2 text-base font-semibold leading-7 text-white rounded-md cursor-grab hover:text-neutral-800"
                >
                  Education
                </Link>
                <Link to="experience" smooth={true} duration={500}
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-md-lg px-3 py-2 text-base font-semibold leading-7 text-white rounded-md cursor-grab hover:text-neutral-800"
                >
                  Experience
                </Link>
                <Link to="projects" smooth={true} duration={500}
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-md-lg px-3 py-2 text-base font-semibold leading-7 text-white rounded-md cursor-grab hover:text-neutral-800"
                >
                  Projects
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
