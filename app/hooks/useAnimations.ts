'use client'

import { useEffect, useRef, useState } from 'react'
import { useScroll, useTransform, useMotionValueEvent, MotionValue } from 'framer-motion'

export { useScroll } from 'framer-motion'

export function useScrollReveal(threshold = 0.1, rootMargin = '0px') {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold, rootMargin }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return { ref, isVisible }
}

export function useParallax(speed = 0.5) {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, window.innerHeight], [0, -window.innerHeight * speed])
  return y
}

export function useMouseParallax(intensity = 20) {
  const x = useRef(0)
  const y = useRef(0)
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window
      x.current = (e.clientX / innerWidth - 0.5) * 2
      y.current = (e.clientY / innerHeight - 0.5) * 2
      setMouseX(x.current * intensity)
      setMouseY(y.current * intensity)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [intensity])

  return { x: mouseX, y: mouseY }
}

export function useCounter(end: number, duration = 2000, start = 0) {
  const [count, setCount] = useState(start)
  const { ref, isVisible } = useScrollReveal(0.5)

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(start + (end - start) * eased))
      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [isVisible, end, duration, start])

  return { ref, count, isVisible }
}

export function useMagnetic<T extends HTMLElement = HTMLElement>(intensity = 0.3) {
  const ref = useRef<T>(null)
  const x = useRef(0)
  const y = useRef(0)

  const handleMouseMove = (e: React.MouseEvent<T>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.current = (e.clientX - rect.left - rect.width / 2) * intensity
    y.current = (e.clientY - rect.top - rect.height / 2) * intensity
    ref.current.style.transform = `translate(${x.current}px, ${y.current}px)`
  }

  const handleMouseLeave = () => {
    if (ref.current) {
      ref.current.style.transform = 'translate(0, 0)'
    }
  }

  return { ref, onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave }
}

export function useTilt(maxTilt = 5) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * maxTilt
    const rotateY = ((x - centerX) / centerX) * maxTilt
    ref.current.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
  }

  const handleMouseLeave = () => {
    if (ref.current) {
      ref.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)'
    }
  }

  return { ref, onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave }
}

export function useScrollProgress() {
  const { scrollY } = useScroll()
  const progress = useTransform(scrollY, [0, 1], [0, 1])
  return progress
}

export function useStaggeredReveal(count: number, baseDelay = 0.1) {
  return Array.from({ length: count }, (_, i) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: i * baseDelay, duration: 0.5, ease: 'easeOut' as const },
  }))
}