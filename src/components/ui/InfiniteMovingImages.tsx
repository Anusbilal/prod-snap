import React, { useEffect, useState } from 'react'
import { cn } from '../../utils'

// Define props interface for better type checking and clarity
interface InfiniteMovingImagesProps {
  items: string[]
  direction?: 'left' | 'right' | 'up' | 'down'
  speed?: 'fast' | 'normal' | 'slow'
  pauseOnHover?: boolean
  className?: string
  imageClassName?: string // For the li element wrapping each image
  verticalHeight?: string // For custom height in vertical mode, e.g., "h-96", "h-[600px]"
}

export const InfiniteMovingImages: React.FC<InfiniteMovingImagesProps> = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
  imageClassName, // Added for individual image styling
  verticalHeight = 'h-[800px]', // Default height for vertical scroller
}: InfiniteMovingImagesProps) => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const scrollerRef = React.useRef<HTMLUListElement>(null)
  const [start, setStart] = useState(false)

  const isVertical = direction === 'up' || direction === 'down'

  useEffect(() => {
    addAnimation()
  }, [items, direction, speed, pauseOnHover, imageClassName, verticalHeight]) // Added verticalHeight and imageClassName to dependencies

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      // Clear previous content
      scrollerRef.current.innerHTML = ''

      // Create and append original items
      items.forEach((imageUrl, idx) => {
        const li = document.createElement('li')
        li.className = cn(
          'relative shrink-0 overflow-hidden rounded-lg',
          isVertical
            ? 'h-auto w-[172px] sm:w-72 lg:w-[172px] 2xl:w-72'
            : 'h-[172px] sm:h-72 lg:h-[172px] 2xl:h-72 w-auto',
          imageClassName,
        )
        const img = document.createElement('img')
        img.src = imageUrl
        img.alt = `Scrolling template image ${idx + 1}`
        img.className = 'h-full w-full object-contain'
        img.loading = 'lazy'
        if (isVertical) {
          img.width = 288 // w-72
        } else {
          img.height = 288 // h-72
        }
        li.appendChild(img)
        scrollerRef.current?.appendChild(li) // Null check for scrollerRef.current
      })

      // Duplicate for seamless scrolling
      const originalChildren = Array.from(scrollerRef.current.children)
      originalChildren.forEach((itemNode) => {
        // Renamed item to itemNode to avoid conflict
        const duplicatedItem = itemNode.cloneNode(true)
        scrollerRef.current?.appendChild(duplicatedItem) // Null check for scrollerRef.current
      })

      getDirectionAndAnimation()
      getSpeed()
      setStart(true)
    }
  }

  const getDirectionAndAnimation = () => {
    if (containerRef.current && scrollerRef.current) {
      let animationName = 'scroll'
      if (isVertical) {
        animationName = 'scroll-vertical'
      }
      scrollerRef.current.style.setProperty('animation-name', animationName)

      if (direction === 'left' || direction === 'up') {
        containerRef.current.style.setProperty('--animation-direction', 'forwards')
      } else {
        containerRef.current.style.setProperty('--animation-direction', 'reverse')
      }
    }
  }

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s')
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s')
      } else {
        containerRef.current.style.setProperty('--animation-duration', '80s')
      }
    }
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20 w-fit overflow-hidden',
        isVertical
          ? `[mask-image:linear-gradient(to_bottom,transparent,#F5F8FB_10%,#F5F8FB_90%,transparent)] h-[415px] lg:h-[800px]`
          : '[mask-image:linear-gradient(to_right,transparent,#F5F8FB_10%,#F5F8FB_90%,transparent)]',
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex w-max min-w-fit shrink-0 gap-[14px] 2xl:gap-6 py-0', // py-0 for vertical to use full height
          isVertical ? 'flex-col items-center h-max' : 'flex-nowrap items-stretch', // Ensure items stretch for horizontal
          start && (isVertical ? 'animate-scroll-vertical' : 'animate-scroll'),
          pauseOnHover && 'hover:[animation-play-state:paused]',
        )}
      >
        {/* Images are now created dynamically in addAnimation */}
      </ul>
    </div>
  )
}
