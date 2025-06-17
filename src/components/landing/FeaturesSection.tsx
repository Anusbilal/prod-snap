import { useState } from "react";
import { BgTextShade } from "../ui/GreenBackgroundText";
import { Diamond, FeaturesBgShade, FeaturesBgShadeSmall } from "~/assets/svg";
import IconButton from "../buttons/IconButton";
import useScreenWidth from "~/hooks/useScreenWidth";
import { FeatureAccordion } from "..";
import { FEATURES_DATA } from "~/dummy/data.dummy";

const FeaturesSection = () => {
	const { width } = useScreenWidth();
	const [openIndex, setOpenIndex] = useState<number>(0);

	const toggle = (index: number) => {
		setOpenIndex(index);
	};

	return (
		<div
			className=' lg:py-[100px] py-12 px-4 lg:px-[42px] xl:px-[82px] flex flex-col items-center lg:gap-16 gap-8 w-full relative overflow-hidden'
			id='features'
		>
			<div className='flex flex-col gap-4 lg:gap-6 justify-center items-center z-10'>
				<IconButton
					title='Features'
					src={Diamond}
					iconClassName='size-[14px]'
					className='mb-2 lg:mb-4'
				/>

				<span className='font-Poppins text-[32px] lg:text-5xl font-semibold text-black900 text-center'>
					All the tools{" "}
					<BgTextShade
						text='you need'
						textClassName='font-Poppins text-[32px] lg:text-5xl font-semibold text-black900 text-center'
						src={width >= 1024 ? FeaturesBgShade : FeaturesBgShadeSmall}
						iconClassName='lg:left-[30px] lg:-bottom-[28px] left-[15px] -bottom-[12px]'
					/>
				</span>
				<span className='font-Poppins text-sm lg:text-base font-normal text-black600 text-center'>
					Edit your images with ease with all the tools you need to create
					professional product photos
				</span>
			</div>

			<div className='grid lg:grid-cols-2 gap-6 lg:gap-8 w-full'>
				<div className='order-2 lg:order-1 lg:max-h-[611px] overflow-auto custom-scrollbar'>
					{FEATURES_DATA.map((feature, index) => (
						<FeatureAccordion
							key={index}
							index={index}
							title={feature.title}
							content={feature.content}
							isOpen={openIndex === index}
							onToggle={toggle}
						/>
					))}
				</div>

				<img
					src={FEATURES_DATA[openIndex]?.image}
					alt='FeatureImage'
					className='h-full w-full order-1 lg:order-2 lg:max-h-[611px] object-contain'
				/>
			</div>
		</div>
	);
};

export default FeaturesSection;
