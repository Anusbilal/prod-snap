import { cn } from '~/utils'

type TProps = {
  title: string
  className?: string
  src: string
  iconClassName?: string
}

const IconButton = ({ title, className, src, iconClassName }: TProps) => {
  return (
    <button
      className={cn(
        'bg-white text-black600 text-[14px] font-Poppins font-normal flex  items-center gap-2 py-2  px-3  h-[34px] rounded-full w-fit',
        className,
      )}
    >
      <img src={src} alt="icon" width={16} height={16} className={cn(iconClassName)} />
      <span>{title}</span>
    </button>
  )
}

export default IconButton
