import React from 'react'

interface BenefitCardProps {
  icon: string
  title: string
  description: string
  bgColor: string
}

export const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description, bgColor }) => {
  return (
    <div className={`rounded-2xl p-6 ${bgColor} border-white border-2 shadow-default`}>
      <div className="mb-4 bg-white w-[52px] h-[52px] flex items-center justify-center rounded-lg">
        <img src={icon} alt={title} width={24} height={24} />
      </div>
      <h3 className="font-normal font-Poppins text-[20px] lg:text-[25px] text-black900 mb-2">{title}</h3>
      <p className="font-normal font-Poppins text-[14px] lg:text-[16px] text-black900">{description}</p>
    </div>
  )
}

export default BenefitCard
