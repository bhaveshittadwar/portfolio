import { useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import logo from '../assets/logo.png'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-gray-900">
        <nav className="h-full mx-auto flex max-w-7xl items-center justify-between lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1 h-full py-6">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Bhavesh Ittadwar</span>
            <div className='text-xl font-semibold leading-6 text-white'>Bhavesh Ittadwar</div>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          {/* <a href="#" className="p-6 text-base font-semibold leading-6 text-white hover:bg-zinc-900">
            Skills
          </a>
          <a href="#" className="p-6 text-base font-semibold leading-6 text-white hover:bg-zinc-900">
            Experience
          </a>
          <a href="#" className="p-6 text-base font-semibold leading-6 text-white hover:bg-zinc-900">
            Projects
          </a>
          <a href="#" className="p-6 text-base font-semibold leading-6 text-white hover:bg-zinc-900">
            Education
          </a> */}
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {/* <a href="#" className="p-6 text-base font-semibold leading-6 text-white hover:bg-zinc-900">
            Contact <span aria-hidden="true">&rarr;</span>
          </a> */}
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Bhavesh Ittadwar</span>
              <div className='text-xl font-semibold leading-6 text-white'>Bhavesh Ittadwar</div>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white/10">
              <div className="space-y-2 py-6">
                {/* <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-neutral-800"
                >
                  Skills
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-neutral-800"
                >
                  Experience
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-neutral-800"
                >
                  Projects
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-neutral-800"
                >
                  Education
                </a> */}
              </div>
              <div className="py-6">
                {/* <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-neutral-800"
                >
                  Contact
                </a> */}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
