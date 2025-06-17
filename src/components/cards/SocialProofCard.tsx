type TProps = {
  images: string[]
  title: string
  description: string
}

const SocialProofCard = ({ images, title, description }: TProps) => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center">
        {images.map((image, index) => (
          <div key={index} className={`w-11 h-11 rounded-full border border-white overflow-hidden -ml-3 first:ml-0 `}>
            <img src={image} alt="Social Proof" width={44} height={44} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-1 font-Poppins text-sm">
        <span className="font-medium text-black900">{title}</span>
        <span className="font-normal text-black600">{description}</span>
      </div>
    </div>
  )
}

export default SocialProofCard
