import { InfiniteMovingImages } from "../ui/InfiniteMovingImages";
import { BgTextShade } from "../ui/GreenBackgroundText";
import IconButton from "../buttons/IconButton";
import {
	HeroSectionBgShade,
	HeroSectionBgShadeSmall,
	StarsIcon,
} from "~/assets/svg";
import TextButton from "../buttons/TextButton";
import { HERO_TEMPLATES, SOCIAL_PROOF } from "~/dummy/data.dummy";
import SocialProofCard from "../cards/SocialProofCard";
import useScreenWidth from "~/hooks/useScreenWidth";

export function HeroSection() {
	const { width } = useScreenWidth();

	return (
		<section
			className='pt-[37.5px] lg:pt-[65.5px] px-4 lg:px-[42px] xl:px-[82px] grid lg:grid-cols-2 gap-[58.5px] lg:gap-[45px] '
			id='home'
		>
			<div className='lg:gap-8 gap-6 flex flex-col lg:mb-[150px]'>
				<IconButton
					src={StarsIcon}
					title='Turn products into bestsellers — visually'
				/>

				<div className='flex flex-col gap-4  lg:gap-6 lg:max-w-[750px]'>
					<h1 className='font-semibold text-[40px] lg:text-[63px] font-Poppins tracking-[-1%] text-black900'>
						Pro-Quality Product Photos{" "}
						<BgTextShade
							text='in a Snap'
							textClassName='font-semibold text-[40px] lg:text-[63px] font-Poppins tracking-[-1%] text-black900'
							src={width >= 1024 ? HeroSectionBgShade : HeroSectionBgShadeSmall}
							iconClassName='lg:-bottom-[26px] lg:right-[12px] -bottom-[8px] right-[0px]'
						/>
					</h1>
					<p className='font-normal text-sm lg:text-base font-Poppins  text-black600'>
						Create stunning product photos for your e-commerce store in minutes.
						Use our easy template editor to create professional visuals – it's
						like Canva, but built for product photos!
					</p>
				</div>

				<div className='flex items-center gap-6 mt-4'>
					<TextButton title='Join Waitlist' />
					<TextButton
						title='Learn More'
						className='bg-white hover:bg-white/60 text-black900'
					/>
				</div>

				<div className='mt-6 lg:mt-4'>
					<SocialProofCard
						images={SOCIAL_PROOF}
						description='making high-quality content'
						title='Join 2,000+ creators'
					/>
				</div>
			</div>

			<div className=' lg:-mt-40 flex items-center justify-center lg:justify-end gap-[14px] lg:gap-[22px] min-h-[415px] lg:min-h-[800px]'>
				<InfiniteMovingImages items={HERO_TEMPLATES} direction='up' />
				<InfiniteMovingImages items={HERO_TEMPLATES} direction='down' />
			</div>
		</section>
	);
}
