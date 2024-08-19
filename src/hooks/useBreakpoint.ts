import { useEffect, useState } from 'react'

export const BREAKPOINTS = {
  xs: 480,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600
}

export type Breakpoint = keyof typeof BREAKPOINTS

const useBreakpoint = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const [breakpoint, setBreakpoint] = useState<Breakpoint | null>(null)

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth
      setWidth(newWidth)

      const newBreakpoint = Object.keys(BREAKPOINTS)
        .reverse()
        .find((key) => newWidth >= BREAKPOINTS[key as Breakpoint]) as Breakpoint

      setBreakpoint(newBreakpoint)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return { width, breakpoint }
}

export { useBreakpoint }
