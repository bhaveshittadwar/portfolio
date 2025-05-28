import { useEffect } from 'react'
import CursorEffects from 'cursor-effects'

export default function CustomCursor() {
  useEffect(() => {
    const cursor = new CursorEffects({
      type: 'circle',       // bubble-like circles
      size: 14,             // px diameter of the cursor dot
      color: '#38BDF8',      // your tail color
      speed: 1.5,           // how fast the trail moves
      duration: 800,        // lifespan of each dot in ms
      easing: 'easeOutQuad' // a nice non‑linear timing
    })
    return () => cursor.destroy()
  }, [])

  return null
}