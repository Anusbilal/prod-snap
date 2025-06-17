import { cn } from '~/utils'

type TProps = {
  title: string
  className?: string
}

const TextButton = ({ title, className }: TProps) => {
  return (
    <button
      className={cn(
        'bg-black900 hover:bg-black600 text-white text-sm font-Poppins lg:text-base font-normal flex justify-center items-center py-1 rounded-xl px-5 min-w-[124px] lg:min-w-[136px] h-[52px] shadow-default',
        className,
      )}
    >
      {title}
    </button>
  )
}

export default TextButton
