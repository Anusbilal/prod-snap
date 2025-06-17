import useScreenWidth from '~/hooks/useScreenWidth'
import TextButton from '../buttons/TextButton'
import { ReadyToTransformPattern, ReadyToTransformPatternSmall } from '~/assets/images'

const ReadyToTransfrom = () => {
  const { width } = useScreenWidth()

  return (
    <div className="lg:py-[100px] w-full overflow-hidden px-6 py-11 flex flex-col items-center justify-center gap-6 bg-black900 relative">
      <div className="font-Poppins text-[32px] lg:text-5xl font-semibold text-white text-center max-w-[650px] z-10 inline-flex flex-wrap lg:gap-3 justify-center">
        <span>Ready to Transform Your</span>
        <span className="text-transparent bg-clip-text bg-gradient-to-b from-lightgreen to-sky">Product Photos?</span>
      </div>

      <span className="font-Poppins text-sm lg:text-base font-normal text-borderColor10 text-center max-w-[600px] z-10">
        Stop struggling with complex software. Start creating stunning e-commerce visuals in minutes. Join the waitlist
        for free access!
      </span>

      <TextButton
        title="Join Waitlist"
        className="z-10 mt-2 lg:mt-10 text-black900 bg-gradient-to-br from-lightgreen to-sky"
      />

      <img
        src={width >= 768 ? ReadyToTransformPattern : ReadyToTransformPatternSmall}
        alt="Pattern1"
        className="absolute  bottom-0 w-auto h-auto"
      />
    </div>
  )
}

export default ReadyToTransfrom
