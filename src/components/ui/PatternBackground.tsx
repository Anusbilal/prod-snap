import React from 'react'
import { cn } from '../../utils' // Assuming you have a cn utility for classnames

interface PatternBackgroundProps {
  children?: React.ReactNode
  className?: string
  // Add any other props you might need, e.g., for controlling background size or position
}

export const PatternBackground: React.FC<PatternBackgroundProps> = ({ children, className }) => {
  return (
    <div
      className={cn('relative', className)} // Added 'relative' for potential absolute positioning of children
      style={{
        backgroundImage: "url('/pattern.svg')",
        backgroundRepeat: 'repeat', // Ensure the pattern tiles
        backgroundSize: 'auto', // Use the SVG's natural size for the pattern
        // You might want to add other background properties like backgroundPosition if needed
      }}
    >
      {children}
    </div>
  )
}
