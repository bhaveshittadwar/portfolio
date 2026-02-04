import React, { useRef, useState, useEffect } from 'react';

function useCardTilt(cardRef) {
  // Initial state: full top-left position for project cards
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
      const rotateX = ((y - centerY) / centerY) * -8
      const rotateY = ((x - centerX) / centerX) * 8

      setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`)
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

const Card = ({ title, description, projectImage, links = [] }) => {
  const cardRef = useRef(null)
  const { transform, glowPosition } = useCardTilt(cardRef)
  return (
    <div
      ref={cardRef}
      className="w-full max-w-sm border border-slate-800/50 rounded-xl shadow-md p-6 flex flex-col justify-between transition-all duration-200 ease-out group relative overflow-hidden"
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
        className="absolute inset-0 pointer-events-none opacity-30 rounded-xl"
        style={{
          background: `linear-gradient(110deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)`,
          transform: `translateX(${(glowPosition.x - 50) * 0.5}%)`,
          transition: 'transform 0.2s ease-out',
        }}
      />
      {projectImage && (
        <a href={links[0]?.url || '#'} target="_blank" rel="noopener noreferrer" className="relative z-10">
          <img className="rounded-t-lg mb-4" src={projectImage} alt={title} />
        </a>
      )}
      <div className="flex flex-col gap-3 flex-grow relative z-10">
        <h5 className="text-xl font-semibold text-white group-hover:text-sky-400 group-hover:drop-shadow-[0_0_6px_rgba(56,189,248,0.3)] transition-all duration-300">
          {title}
        </h5>
        <p className="text-sm text-gray-300 leading-relaxed">{description}</p>
      </div>
      <div className="mt-5 flex flex-wrap gap-2 relative z-10">
        {links.map(({ label, url }, i) => (
          <a
            key={i}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-md border border-gray-600 px-3 py-1.5 text-sm text-gray-200 transition-all duration-300 hover:bg-sky-500 hover:text-gray-900 hover:border-sky-500 hover:shadow-[0_0_8px_rgba(56,189,248,0.25)]"
          >
            {label}
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Card;
