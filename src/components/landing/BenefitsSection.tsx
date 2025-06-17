import React from "react";
import { BenefitCard } from "../ui/BenefitCard";
import { BgTextShade } from "../ui/GreenBackgroundText";
import useScreenWidth from "~/hooks/useScreenWidth";
import {
	BenefitBgShade,
	BenefitBgShadeSmall,
	EcommerceTouchBuy,
	RocketIcon,
	Paintbrush,
	EconomicGrowth,
} from "~/assets/svg";
import { IconButton, TextButton } from "..";

export const BenefitsSection: React.FC = () => {
	const { width } = useScreenWidth();

	return (
		<section className='bg-lightblue lg:py-[100px] py-12 px-4 lg:px-[42px] xl:px-[82px] overflow-hidden grid lg:grid-cols-2  lg:gap-16 gap-8 w-full'>
			<div className='flex flex-col gap-6 lg:gap-10 items-center lg:items-start'>
				<IconButton title='Benefits' src={RocketIcon} />

				<div className='flex flex-col gap-4  lg:gap-6 items-center lg:items-start'>
					<h1 className='font-Poppins text-[32px] lg:text-5xl font-semibold text-black900 text-center lg:text-start'>
						With Prodsnap, stunning product images don’t slow you down — they{" "}
						<BgTextShade
							text='speed you'
							textClassName='font-Poppins text-[32px] lg:text-5xl font-semibold text-black900 text-center lg:text-start'
							src={width >= 1024 ? BenefitBgShade : BenefitBgShadeSmall}
							iconClassName='lg:-bottom-[30px] lg:left-[-10px] -bottom-[12px] left-[-12px]'
						/>{" "}
						up
					</h1>
					<p className='font-normal text-sm lg:text-base font-Poppins  text-black600 text-center lg:text-start'>
						Visuals are done in minutes, not weeks.
					</p>
				</div>

				<TextButton title='Join Waitlist' />
			</div>

			{/* Right Section - Benefit Cards */}
			<div className='flex flex-col gap-4'>
				<BenefitCard
					icon={EcommerceTouchBuy}
					title='Perfect for Marketplaces'
					description='Design photos formatted perfectly for Amazon, Shopify, Etsy, and more with platform-specific templates.'
					bgColor='bg-[#E2F8EF]'
				/>

				<BenefitCard
					icon={Paintbrush}
					title='Endless Creative Options'
					description='Start with a template, then customize backgrounds, add text, graphics, and effects to match your brand.'
					bgColor='bg-[#E5F4FC]'
				/>

				<BenefitCard
					icon={EconomicGrowth}
					title='Boost Your Sales'
					description='Create high-converting product photos that look professional and grab customer attention instantly.'
					bgColor='bg-[#F1ECFB]'
				/>
			</div>
		</section>
	);
};

export default BenefitsSection;
