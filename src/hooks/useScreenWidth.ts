import { useEffect, useState } from 'react'

const useScreenWidth = () => {
  const getWidth = () => (typeof window !== 'undefined' ? window.innerWidth : 0)
  const [width, setWidth] = useState(getWidth)

  useEffect(() => {
    const handleResize = () => setWidth(getWidth)
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return { width }
}
export default useScreenWidth
