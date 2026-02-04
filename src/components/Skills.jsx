import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import useMedia from 'use-media'
import './Skills.css'

function useCardTilt(cardRef) {
  // Initial state: top-left position for skills
  const initialGlow = { x: 15, y: 15 }
  const initialTransform = 'perspective(1000px) rotateX(7deg) rotateY(-7deg) scale3d(1, 1, 1)'

  const [transform, setTransform] = useState(initialTransform)
  const [glowPosition, setGlowPosition] = useState(initialGlow)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateX = ((y - centerY) / centerY) * -10
      const rotateY = ((x - centerX) / centerX) * 10

      setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`)
      setGlowPosition({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 })
    }

    const handleMouseLeave = () => {
      setTransform(initialTransform)
      setGlowPosition(initialGlow)
    }

    card.addEventListener('mousemove', handleMouseMove)
    card.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      card.removeEventListener('mousemove', handleMouseMove)
      card.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [cardRef])

  return { transform, glowPosition }
}

const skills = [
  { category: 'Languages',     skillList: 'JavaScript, TypeScript, Java, HTML, CSS, SQL' },
  { category: 'Frontend',      skillList: 'React, Redux, Next.js, Tailwind, Storybook, SASS/SCSS, Svelte' },
  { category: 'Backend',       skillList: 'Node.js, Spring Boot, GraphQL, REST, JWT, gRPC' },
  { category: 'Infra/DevOps',  skillList: 'Docker, Kubernetes, GitHub, GitLab, AWS, Azure' },
  { category: 'Data & Testing',skillList: 'MongoDB, PostgreSQL, MySQL, JPA, Mocha/Chai, SonarQube' },
  { category: 'Security',      skillList: 'OWASP ZAP, JWT, RBAC, Threat Modeling' },
  { category: 'Methodologies', skillList: 'Agile, OOP, Atomic Design, Microservices' },
]

export default function Skills() {
  const ref = useRef(null)
  const cardRef = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })
  const isMobile = useMedia({ maxWidth: 768 })
  const { transform, glowPosition } = useCardTilt(cardRef)

  const [displayed, setDisplayed] = useState(skills.map(() => ''))
  const [finishedCount, setFinishedCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let alive = true

    // On mobile, show all text immediately
    if (isMobile) {
      setDisplayed(skills.map(s => s.skillList))
      return
    }

    // On desktop, animate typewriter effect
    skills.forEach(({ skillList }, idx) => {
      ;(async () => {
        for (let i = 1; i <= skillList.length; i++) {
          if (!alive) return
          setDisplayed(d => {
            const next = [...d]
            next[idx] = skillList.slice(0, i)
            return next
          })
          await new Promise(r => setTimeout(r, 50))
        }
        setFinishedCount(c => c + 1)
      })()
    })

    return () => { alive = false }
  }, [inView, isMobile])

  return (
    <motion.div
      ref={ref}
      id="skills"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative isolate min-h-[calc(100vh-4.5rem)] bg-gray-950/5 py-24 sm:py-32 flex items-center"
    >
      <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0" aria-hidden="true" />

      <div className="flex flex-col items-center mx-auto px-6 lg:px-8 w-full">
        <h1 className="text-white text-center text-5xl font-bold leading-[48px] tracking-widest mb-10">
          Skills
        </h1>

        <div
          ref={cardRef}
          className="w-full sm:w-[768px] coding inverse-toggle px-5 pt-4 shadow-lg text-gray-100
            text-sm font-mono bg-slate-950/95 pb-6 rounded-lg leading-normal break-words border border-slate-800/50
            relative overflow-hidden transition-transform duration-200 ease-out"
          style={{
            transform,
            background: `
              radial-gradient(circle at ${glowPosition.x}% ${glowPosition.y}%, rgba(56, 189, 248, 0.15) 0%, transparent 50%),
              linear-gradient(135deg, rgba(148, 163, 184, 0.05) 0%, rgba(51, 65, 85, 0.05) 100%),
              rgba(2, 6, 23, 0.95)
            `,
          }}
        >
          {/* Metallic shine overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{
              background: `linear-gradient(110deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)`,
              transform: `translateX(${(glowPosition.x - 50) * 0.5}%)`,
              transition: 'transform 0.2s ease-out',
            }}
          />
          <div className="top mb-2 flex relative z-10">
            <div className="h-3 w-3 bg-red-500 rounded-full"></div>
            <div className="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
            <div className="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
          </div>

          <div className="grid gap-y-1 relative z-10">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="grid grid-cols-[max-content_minmax(0,1fr)] gap-x-4 items-start mt-1"
              >
                <span className="text-sky-400 whitespace-nowrap drop-shadow-[0_0_4px_rgba(56,189,248,0.25)]">
                  {skill.category}:~$
                </span>
                <p className="text-gray-100 min-w-0 break-words">
                  {displayed[idx]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}