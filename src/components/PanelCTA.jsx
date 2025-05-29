import React, { useRef } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import './PanelCTA.css'

export default function PanelCTA() {
  const btnRef = useRef(null)

  const handleClick = (e) => {
    e.preventDefault()
    const btn = btnRef.current
    if (!btn) return

    btn.classList.add('active')
    setTimeout(() => {
      btn.classList.remove('active')
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
    }, 150)
  }

  return (
    <button
      ref={btnRef}
      className="pushable"
      onClick={handleClick}
      aria-label="See Projects"
    >
      <span className="shadow" />
      <span className="edge" />
      <span className="front">
        <span className="btn-text">See Projects</span>
        <FaArrowRight />
      </span>
    </button>
  )
}