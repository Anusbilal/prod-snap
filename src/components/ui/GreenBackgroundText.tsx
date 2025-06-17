import React from 'react'
import { cn } from '~/utils'

interface GreenBackgroundTextProps {
  text: string
  className?: string
  textClassName?: string
  iconClassName?: string
  src: string
}

export const BgTextShade: React.FC<GreenBackgroundTextProps> = ({
  text,
  className,
  textClassName,
  iconClassName,
  src,
}) => {
  return (
    <div className={cn('relative inline-flex items-center justify-center', className)}>
      <img src={src} alt="bgShades" className={cn('absolute -bottom-6 right-[10px]', iconClassName)} />
      <span className={cn('relative z-10 text-center text-black900 ', textClassName)}>{text}</span>
    </div>
  )
}
