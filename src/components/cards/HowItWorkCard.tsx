import { cn } from '~/utils'

type TProps = {
  src: string
  title: string
  description: string
  cardNo: string
  className?: string
}

const HowItWorkCard = ({ src, title, description, cardNo, className }: TProps) => {
  return (
    <div className="grid lg:grid-cols-2 gap-4 lg:gap-10 ">
      <div className="bg-white p-3 shadow-default rounded-[28px] lg:w-fit lg:place-self-end">
        <img
          src={src}
          alt="HowItWorkImages"
          className="h-[288px] lg:h-[488px] bg-cover rounded-2xl w-full lg:w-auto "
        />
      </div>

      <div className="flex flex-col justify-center gap-2 font-Poppins font-normal">
        <span className={cn('text-5xl lg:text-8xl', className)}>{cardNo}</span>
        <span className="text-[20px] lg:text-[25px] text-black900">{title}</span>
        <span className="text-[14px] lg:text-[16px] text-black900">{description}</span>
      </div>
    </div>
  )
}

export default HowItWorkCard
