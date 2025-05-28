import { motion } from 'framer-motion';
import photo from '../assets/panelPic.jpeg';
import { Link } from 'react-router-dom';

const links = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/bhavesh-ittadwar/' },
  { name: 'Github', href: 'https://github.com/bhaveshittadwar' },
  { name: 'Resume', href: 'https://github.com/bhaveshittadwar/portfolio/blob/main/src/assets/Resume.pdf' },
];

const fancyLinkClass =
  'transition-all duration-300 hover:-translate-y-1 hover:text-blue-400 hover:drop-shadow-[0_0_10px_rgba(93,188,252,0.4)]';

export default function Panel() {
  return (
    <div
      id="panel"
      className="min-h-screen w-full bg-gradient-to-r from-gray-950 to-zinc-800 flex items-center justify-center px-6 lg:px-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 w-full max-w-7xl lg:[&>*:first-child]:order-1 [&>*:first-child]:order-2 [&>*:last-child]:order-1 lg:[&>*:last-child]:order-2">
        <motion.div
          className="relative w-full h-[480px] overflow-hidden rounded-xl border border-gray-700 bg-zinc-900/40 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(93,188,252,0.25)] backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/bhaveshittadwar/game-of-life"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-3 right-3 text-xs font-semibold text-blue-300 bg-zinc-800/70 px-3 py-1 rounded-md border border-gray-600 backdrop-blur hover:bg-blue-500 hover:text-white transition"
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
          ></iframe>
        </motion.div>

        <motion.div
          className="order-1 lg:order-2 flex flex-col items-center text-center gap-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            style={{ objectPosition: '0% 20%' }}
            className="h-32 w-32 sm:h-48 sm:w-48 object-cover rounded-full border-2 border-solid border-slate-300"
            src={photo}
            alt="Panel Pic"
          />
          <h2 className="text-sky-400 text-2xl font-medium leading-normal tracking-wide">
            Hi, I'm Bhavesh Ittadwar!
          </h2>
          <p className="text-white max-w-md text-5xl font-bold leading-tight tracking-tight">
            A front-end leaning fullstack developer.
          </p>
          <p className="text-white text-lg font-medium max-w-md tracking-wide">
            I'm keen about the web from a packet to pixel level.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:flex gap-x-8 gap-y-4 mt-4 text-base font-semibold text-white justify-center lg:justify-start">
            {links.map((link) => (
              <Link
                key={link.name}
                target="_blank"
                to={link.href}
                className={`flex justify-center gap-2 ${fancyLinkClass}`}
              >
                {link.name} <span aria-hidden="true">&rarr;</span>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
