'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.5, // Increased from 1.15 to 2.5 for slower scrolling
      easing: (t) => 1 - Math.pow(1 - t, 3), // Cubic ease-out for smooth deceleration
      smoothWheel: true,
      wheelMultiplier: 0.8, // Reduced from default for slower wheel response
      touchMultiplier: 0.6, // Reduced for slower touch response
      anchors: true,
      // smoothTouch: true,
    })

    let frame = 0
    const raf = (time: number) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
    }
  }, [])

  return null
}