import { BgTextShade } from "../ui/GreenBackgroundText";
import useScreenWidth from "~/hooks/useScreenWidth";
import {
	FeaturesBgShade,
	FeaturesBgShadeSmall,
	TriangleIcon,
} from "~/assets/svg";
import IconButton from "../buttons/IconButton";
import { KEY_BENEFITS_DATA } from "~/dummy/data.dummy";
import KeyBenefitsCard from "../cards/KeyBenefitsCard";
import {
	KeyBenefitPattern1Small,
	KeyBenefitPattern2,
	KeyBenefitPattern2Small,
	TestimonialsPattern1,
} from "~/assets/images";

export function KeyBenefitsSection() {
	const { width } = useScreenWidth();
	return (
		<div className=' bg-white lg:py-[100px] py-12 px-4 lg:px-[42px] xl:px-[82px] overflow-hidden flex flex-col  lg:gap-16 gap-8 w-full relative'>
			<div className='flex flex-col gap-4 lg:gap-6 justify-center items-center z-10'>
				<IconButton
					title='Problems we solve'
					src={TriangleIcon}
					className='mb-2 bg-lightblue'
				/>

				<span className='font-Poppins text-[32px] lg:text-5xl font-semibold text-black900  text-center max-w-[1000px]'>
					<BgTextShade
						text='Goodbye'
						textClassName='font-Poppins text-[32px] lg:text-5xl font-semibold text-black900 text-center'
						src={width >= 1024 ? FeaturesBgShade : FeaturesBgShadeSmall}
						iconClassName='lg:left-[-15px] lg:-bottom-[22px] left-[-12px] -bottom-[9px]'
					/>{" "}
					boring photos, delays, and messy visuals
				</span>
				<span className='font-Poppins text-sm lg:text-base font-normal text-black600 text-center'>
					When creating content means juggling time, quality, and cost
				</span>
			</div>

			{/* Cards */}
			<div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 z-10'>
				{KEY_BENEFITS_DATA.map((item, index) => {
					return (
						<KeyBenefitsCard
							description={item?.content}
							title={item?.title}
							src={item?.image}
							key={index}
						/>
					);
				})}
			</div>

			<img
				src={width >= 1024 ? TestimonialsPattern1 : KeyBenefitPattern1Small}
				alt='Pattern1'
				className='absolute  top-0 left-0'
			/>
			<img
				src={width >= 1024 ? KeyBenefitPattern2 : KeyBenefitPattern2Small}
				alt='Pattern2'
				className='absolute  bottom-0 right-0 '
			/>
		</div>
	);
}
