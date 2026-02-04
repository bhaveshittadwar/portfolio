import { useEffect, useRef } from 'react'

export default function ReactionDiffusion() {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { willReadFrequently: true })
    const scale = 12 // Higher resolution for crisper patterns, still thick grooves

    const resize = () => {
      canvas.width = Math.floor(window.innerWidth / scale)
      canvas.height = Math.floor(window.innerHeight / scale)
    }
    resize()
    window.addEventListener('resize', resize)

    const width = canvas.width
    const height = canvas.height
    const size = width * height

    // Grid buffers - using typed arrays for performance
    let grid = new Float32Array(size * 2) // [a, b] for each cell
    let next = new Float32Array(size * 2)

    // Initialize with random noise throughout
    for (let i = 0; i < size; i++) {
      grid[i * 2] = 1 // Chemical A starts at 1
      grid[i * 2 + 1] = Math.random() < 0.1 ? 1 : 0 // Sparse random B
    }

    // Add multiple seed points for continuous generation
    const numSeeds = 8
    for (let s = 0; s < numSeeds; s++) {
      const cx = Math.floor(Math.random() * width)
      const cy = Math.floor(Math.random() * height)
      const radius = Math.floor(Math.min(width, height) / 20)

      for (let y = Math.max(0, cy - radius); y < Math.min(height, cy + radius); y++) {
        for (let x = Math.max(0, cx - radius); x < Math.min(width, cx + radius); x++) {
          const dx = x - cx
          const dy = y - cy
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < radius) {
            const idx = (y * width + x) * 2
            grid[idx] = 1
            grid[idx + 1] = 0.9
          }
        }
      }
    }

    // Gray-Scott parameters for very slow, molten metal feel
    const Du = 0.16   // Diffusion rate for chemical A
    const Dv = 0.08   // Diffusion rate for chemical B
    const f = 0.037   // Feed rate
    const k = 0.06    // Kill rate
    const dt = 0.5    // Very slow time step for molten feel

    // Laplacian kernel weights
    const centerWeight = -1
    const adjacentWeight = 0.2
    const diagonalWeight = 0.05

    const step = () => {
      // Compute next state using Gray-Scott equations
      for (let y = 1; y < height - 1; y++) {
        for (let x = 1; x < width - 1; x++) {
          const idx = (y * width + x) * 2

          const a = grid[idx]
          const b = grid[idx + 1]

          // Compute Laplacian for both chemicals
          const laplaceA =
            centerWeight * a +
            adjacentWeight * (
              grid[((y - 1) * width + x) * 2] +
              grid[((y + 1) * width + x) * 2] +
              grid[(y * width + (x - 1)) * 2] +
              grid[(y * width + (x + 1)) * 2]
            ) +
            diagonalWeight * (
              grid[((y - 1) * width + (x - 1)) * 2] +
              grid[((y - 1) * width + (x + 1)) * 2] +
              grid[((y + 1) * width + (x - 1)) * 2] +
              grid[((y + 1) * width + (x + 1)) * 2]
            )

          const laplaceB =
            centerWeight * b +
            adjacentWeight * (
              grid[((y - 1) * width + x) * 2 + 1] +
              grid[((y + 1) * width + x) * 2 + 1] +
              grid[(y * width + (x - 1)) * 2 + 1] +
              grid[(y * width + (x + 1)) * 2 + 1]
            ) +
            diagonalWeight * (
              grid[((y - 1) * width + (x - 1)) * 2 + 1] +
              grid[((y - 1) * width + (x + 1)) * 2 + 1] +
              grid[((y + 1) * width + (x - 1)) * 2 + 1] +
              grid[((y + 1) * width + (x + 1)) * 2 + 1]
            )

          // Gray-Scott reaction-diffusion equations
          const abb = a * b * b
          const newA = a + (Du * laplaceA - abb + f * (1 - a)) * dt
          const newB = b + (Dv * laplaceB + abb - (k + f) * b) * dt

          // Clamp values
          next[idx] = Math.max(0, Math.min(1, newA))
          next[idx + 1] = Math.max(0, Math.min(1, newB))
        }
      }

      // Swap buffers
      const temp = grid
      grid = next
      next = temp
    }

    const render = () => {
      const imageData = ctx.createImageData(width, height)
      const data = imageData.data

      for (let i = 0; i < size; i++) {
        const a = grid[i * 2]
        const b = grid[i * 2 + 1]

        // Much subtler with less contrast
        const value = Math.pow(b, 1.2) // Lower contrast

        // Dark but visible blue palette
        const r = Math.floor(8 + value * 45)    // 8 to 53
        const g = Math.floor(12 + value * 70)   // 12 to 82
        const bl = Math.floor(18 + value * 100) // 18 to 118

        const idx = i * 4
        data[idx] = r
        data[idx + 1] = g
        data[idx + 2] = bl
        data[idx + 3] = 255
      }

      ctx.putImageData(imageData, 0, 0)
    }

    let frameCount = 0
    let feedTimer = 0
    let mouseX = -1
    let mouseY = -1

    // Track mouse position and add perturbations where cursor moves
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      // Map screen coordinates to canvas grid coordinates
      mouseX = Math.floor((e.clientX - rect.left) / rect.width * width)
      mouseY = Math.floor((e.clientY - rect.top) / rect.height * height)

      // Add perturbation at cursor position
      if (mouseX >= 0 && mouseX < width && mouseY >= 0 && mouseY < height) {
        const r = 4 // Larger radius for better visibility
        for (let dy = -r; dy <= r; dy++) {
          for (let dx = -r; dx <= r; dx++) {
            const x = mouseX + dx
            const y = mouseY + dy
            if (x >= 0 && x < width && y >= 0 && y < height) {
              const dist = Math.sqrt(dx * dx + dy * dy)
              if (dist <= r) {
                const idx = (y * width + x) * 2
                // Stronger injection for more visible effect
                grid[idx + 1] = Math.min(1, grid[idx + 1] + 0.35)
              }
            }
          }
        }
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    const animate = () => {
      // Step only every other frame for very slow, smooth molten feel
      if (frameCount % 2 === 0) {
        step()
      }

      // Periodically add small perturbations to keep it interesting
      feedTimer++
      if (feedTimer % 300 === 0) { // Every ~5 seconds at 60fps
        const rx = Math.floor(Math.random() * (width - 20)) + 10
        const ry = Math.floor(Math.random() * (height - 20)) + 10
        const r = 3

        for (let y = ry - r; y <= ry + r; y++) {
          for (let x = rx - r; x <= rx + r; x++) {
            if (x >= 0 && x < width && y >= 0 && y < height) {
              const dx = x - rx
              const dy = y - ry
              const dist = Math.sqrt(dx * dx + dy * dy)
              if (dist <= r) {
                const idx = (y * width + x) * 2
                grid[idx + 1] = Math.min(1, grid[idx + 1] + 0.3)
              }
            }
          }
        }
      }

      // Render every frame for smooth visuals
      if (frameCount % 1 === 0) {
        render()
      }
      frameCount++

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 opacity-45"
      style={{
        width: '100%',
        height: '100%'
      }}
    />
  )
}
