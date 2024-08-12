import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const useScrollTop = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
}

export { useScrollTop }
