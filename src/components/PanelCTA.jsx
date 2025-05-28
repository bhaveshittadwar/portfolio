import React, { useRef } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { scroller }    from 'react-scroll'
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
      scroller.scrollTo('projects', {
        delay: 0,
        smooth: 'easeInOutBack',
        duration: 3000,
      })
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
      <span className="edge"   />
      {/* wrap only the text in btn-text */}
      <span className="front">
        <span className="btn-text">See Projects</span>
        <FaArrowRight />
      </span>
    </button>
  )
}