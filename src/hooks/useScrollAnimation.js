// useScrollAnimation.js
// Attaches an IntersectionObserver to a ref element.
// When the element enters the viewport, sets isVisible = true.
// Animation fires ONCE — observer disconnects after first trigger.
// Usage: const { ref, isVisible } = useScrollAnimation()

import { useState, useEffect, useRef } from 'react'

export function useScrollAnimation(threshold = 0.15) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect() // animate once only
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isVisible }
}

