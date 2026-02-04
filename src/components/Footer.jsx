import { motion } from 'framer-motion'
import logo from '../assets/logo.png'

const Footer = ({ onNavClick }) => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-col justify-between bg-gray-950/5"
    >
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <button
              onClick={() => onNavClick('panel')}
              className="flex items-center cursor-pointer"
            >
              <img src={logo} className="h-8 me-3" alt="Portfolio Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                Bhavesh Ittadwar
              </span>
            </button>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">Navigate</h2>
              <ul className="text-gray-400 font-medium">
                {['skills', 'education', 'experience', 'projects'].map((section) => (
                  <li key={section} className="mb-4">
                    <button
                      onClick={() => onNavClick(section)}
                      className="hover:underline capitalize"
                    >
                      {section}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">Social Media</h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/bhaveshittadwar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/bhavesh-ittadwar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-700 sm:mx-auto" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-400 sm:text-center">
            © 2023{' '}
            <a href="https://bhavesh-ittadwar.vercel.app/" className="hover:underline">
              Bhavesh Ittadwar™
            </a>. All Rights Reserved.
          </span>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer