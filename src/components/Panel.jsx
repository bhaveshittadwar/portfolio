import { motion } from 'framer-motion';
import photo from '../assets/panelPic.jpeg';
import PanelCTA from './PanelCTA';
import './PanelAnimations.css';
import { FaLinkedin, FaGithub, FaFilePdf } from 'react-icons/fa';

const socialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/bhavesh-ittadwar/', Icon: FaLinkedin },
  { name: 'Github',   href: 'https://github.com/bhaveshittadwar',           Icon: FaGithub   },
  { name: 'Resume',   href: 'https://github.com/bhaveshittadwar/portfolio/blob/main/src/assets/Resume.pdf', Icon: FaFilePdf  },
];

export default function Panel() {
  return (
    <div
      id="panel"
      className="min-h-screen w-full bg-gradient-to-r from-gray-950 to-zinc-800 flex items-center justify-center px-6 lg:px-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full max-w-7xl">
        {/* Game embed */}
        <motion.div
          className="order-2 lg:order-1 relative w-full h-[480px] rounded-xl border border-gray-700 bg-zinc-900/40 shadow-lg overflow-hidden transform transition hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(93,188,252,0.25)] backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/bhaveshittadwar/game-of-life"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-3 right-3 text-xs font-semibold text-sky-300 bg-zinc-800/70 px-3 py-1 rounded-md border border-gray-600 backdrop-blur hover:bg-sky-400 hover:text-gray-900 transition"
          >
            View Code ↗
          </a>
          <iframe
            src="https://game-of-life-withered-snow-9415.fly.dev/"
            title="Game of Life – Bhavesh Ittadwar"
            className="w-full h-full"
            loading="lazy"
            frameBorder="0"
            scrolling="no"
          />
        </motion.div>

        {/* Hero & CTA */}
        <motion.div
          className="order-1 lg:order-2 flex flex-col items-center text-center gap-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Pulsing photo */}
          <motion.img
            src={photo}
            alt="Bhavesh Ittadwar"
            className="h-32 w-32 sm:h-48 sm:w-48 object-cover rounded-full border-2 border-slate-300 pulse-image"
            style={{ objectPosition: '0% 20%' }}
            aria-hidden="true"
          />

          <h2 className="text-sky-400 text-2xl font-medium">
            Hi, I’m Bhavesh Ittadwar!
          </h2>

          {/* Sequential underlines */}
          <p className="text-white max-w-md text-5xl font-bold leading-tight tracking-tight">
            A{' '}
            <span className="underline-anim" style={{ '--delay': '0s' }}>
              front‑end
            </span>{' '}
            leaning{' '}
            <span className="underline-anim" style={{ '--delay': '2.5s' }}>
              fullstack
            </span>{' '}
            developer.
          </p>

          <p className="text-white text-lg font-medium max-w-md">
            I’m keen about the web from a packet to pixel level.
          </p>

          {/* REDUCED GAP HERE (from gap-4 → gap-2) */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mt-4">
            <PanelCTA />

            {socialLinks.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2 py-2 text-white hover:text-sky-400 transition"
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm">{name}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}