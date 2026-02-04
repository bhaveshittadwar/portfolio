import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import photo from '../assets/panelPic.jpeg'
import PanelCTA from './PanelCTA'
import { FaLinkedin, FaGithub, FaFilePdf, FaGamepad } from 'react-icons/fa'
import './PanelAnimations.css'
import logo from '../assets/logo.png';

function useImageTilt(imageRef) {
  const [transform, setTransform] = useState('')

  useEffect(() => {
    const image = imageRef.current
    if (!image) return

    const handleMouseMove = (e) => {
      const rect = image.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateX = ((y - centerY) / centerY) * -12
      const rotateY = ((x - centerX) / centerX) * 12

      setTransform(`perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`)
    }

    const handleMouseLeave = () => {
      setTransform('')
    }

    image.addEventListener('mousemove', handleMouseMove)
    image.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      image.removeEventListener('mousemove', handleMouseMove)
      image.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [imageRef])

  return { transform }
}


const socialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/bhavesh-ittadwar/', Icon: FaLinkedin },
  { name: 'Github', href: 'https://github.com/bhaveshittadwar', Icon: FaGithub },
  { name: 'Resume', href: 'https://github.com/bhaveshittadwar/portfolio/blob/main/src/assets/Resume.pdf', Icon: FaFilePdf },
]

export default function Panel() {
  const imageRef = useRef(null)
  const { transform } = useImageTilt(imageRef)

  return (
    <div
      id="panel"
      className="min-h-[calc(100vh-4.5rem)] w-full bg-gray-950/5 flex items-center justify-center px-6 lg:px-8 py-12"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 w-full max-w-7xl items-center">
        {/* Game embed - hidden on mobile */}
        <motion.div
          className="order-2 lg:order-1 relative w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[480px] rounded-xl border border-gray-700 bg-zinc-900/40 shadow-lg overflow-hidden transform transition hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(93,188,252,0.25)] backdrop-blur-sm hidden lg:block"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/bhaveshittadwar/game-of-life"
            target="_blank"
            rel="noopener noreferrer"
            className="z-20 absolute top-3 right-3 text-xs font-semibold text-sky-300 bg-zinc-800/70 px-3 py-1 rounded-md border border-sky-500/30 backdrop-blur hover:bg-sky-400 hover:text-gray-900 hover:drop-shadow-[0_0_12px_rgba(56,189,248,0.6)] transition"
          >
            View Code ↗
          </a>
          <div className="w-full h-full relative" id="iframe-wrapper">
            {/* Loader overlay */}
            <div
              id="iframe-loader"
              className="absolute inset-0 z-10 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            >
              <img
                src={logo}
                alt="Loading"
                className="w-12 h-12 animate-spin-slow"
              />
            </div>


            {/* Iframe */}
            <iframe
              src="https://game-of-life-withered-snow-9415.fly.dev/"
              title="Game of Life – Bhavesh Ittadwar"
              className="w-full h-full relative z-0"
              loading="lazy"
              frameBorder="0"
              scrolling="no"
              onLoad={() => {
                const loader = document.getElementById("iframe-loader");
                if (loader) {
                  setTimeout(() => {
                    loader.style.opacity = "0";
                    loader.style.pointerEvents = "none";
                    setTimeout(() => loader.remove(), 400);
                  }, 900);
                }
              }}

            />
        </div>

        </motion.div>

        {/* Hero & CTA */}
        <motion.div
          className="order-1 lg:order-2 flex flex-col items-center text-center gap-y-4 lg:gap-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div
            ref={imageRef}
            className="transition-transform duration-200 ease-out"
            style={{ transform }}
          >
            <motion.img
              src={photo}
              alt="Bhavesh Ittadwar"
              className="h-24 w-24 sm:h-32 sm:w-32 lg:h-48 lg:w-48 object-cover rounded-full border-2 border-slate-300 pulse-image-subtle"
              style={{ objectPosition: '0% 20%' }}
              aria-hidden="true"
            />
          </div>

          <h2 className="text-sky-400 text-lg sm:text-xl lg:text-2xl font-medium drop-shadow-[0_0_6px_rgba(56,189,248,0.3)]">Hi, I'm Bhavesh Ittadwar!</h2>


          <p className="text-white max-w-md text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight tracking-tight">
          A{" "}
          <span className="underline-anim underline-anim-first">
            front‑end
          </span>{" "}
          leaning{" "}
          <span className="underline-anim underline-anim-second">
            fullstack
          </span>{" "}
          developer.
        </p>

          <p className="text-white text-sm sm:text-base lg:text-lg font-medium max-w-md">
            I'm keen about the web from a packet to pixel level.
          </p>

          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-3 mt-4">
            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 order-2 lg:order-1">
              <PanelCTA />
            </div>
            {/* Social links */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 order-1 lg:order-2">
              {socialLinks.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2 py-2 text-white hover:text-sky-300 hover:drop-shadow-[0_0_8px_rgba(125,211,252,0.4)] transition"
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm">{name}</span>
                </a>
              ))}
              {/* Play Game link - mobile only */}
              <a
                href="https://game-of-life-withered-snow-9415.fly.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="lg:hidden inline-flex items-center gap-1 px-2 py-2 text-white hover:text-sky-300 hover:drop-shadow-[0_0_8px_rgba(125,211,252,0.4)] transition"
              >
                <FaGamepad className="w-5 h-5" />
                <span className="text-sm">Play Game</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
