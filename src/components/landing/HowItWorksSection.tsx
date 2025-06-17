import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import useScreenWidth from "~/hooks/useScreenWidth";
import IconButton from "../buttons/IconButton";
import { BgTextShade } from "../ui/GreenBackgroundText";
import {
	FeaturesBgShade,
	FeaturesBgShadeSmall,
	LoadingIcon,
} from "~/assets/svg";
import {
	HowItWorkPattern1Small,
	HowItWorkPattern2Small,
	TestimonialsPattern1,
	TestimonialsPattern2,
} from "~/assets/images";
import HowItWorkCard from "../cards/HowItWorkCard";
import { HOW_IT_WORK_DATA } from "~/dummy/data.dummy";

export function HowItWorksSection() {
	const sectionRef = useRef(null);
	const { width } = useScreenWidth();
	const [activeIndex, setActiveIndex] = useState(0);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start start", "end end"],
	});

	const totalCards = HOW_IT_WORK_DATA.length;

	const index = useTransform(scrollYProgress, (v) => {
		const segment = 1 / totalCards;
		const currentIndex = Math.floor(v / segment);
		return Math.min(currentIndex, totalCards - 1);
	});

	useEffect(() => {
		const unsubscribe = index.on("change", (v) => {
			setActiveIndex(v);
		});
		return () => unsubscribe();
	}, [index]);

	return (
		<div
			ref={sectionRef}
			style={{ height: `${(totalCards + 1) * 100}vh` }}
			className='relative w-full bg-white'
		>
			<div
				className={`sticky top-0 h-screen w-full overflow-hidden px-4 lg:px-[42px] xl:px-[82px] pt-12 lg:pt-[100px]`}
				id='howitworks'
			>
				<div className='flex flex-col gap-4 lg:gap-6 justify-center items-center mb-[56px] z-10'>
					<IconButton
						title='How it works'
						src={LoadingIcon}
						className='mb-2 bg-lightblue'
					/>
					<span className='font-Poppins text-[32px] lg:text-5xl font-semibold text-black900 text-center max-w-[650px]'>
						Create ready-to-sell visuals in{" "}
						<BgTextShade
							text='minutes'
							textClassName='font-Poppins text-[32px] lg:text-5xl font-semibold text-black900 text-center'
							src={width >= 1024 ? FeaturesBgShade : FeaturesBgShadeSmall}
							iconClassName='lg:left-[8px] lg:-bottom-[24px] left-[-11.6px] -bottom-[12px]'
						/>
					</span>
					<span className='font-Poppins text-sm lg:text-base font-normal text-black600 text-center'>
						No designers. No studios. Just fast, professional product images.
					</span>
				</div>

				<div className='relative h-[60%] lg:h-1/2 z-10 flex items-center justify-center'>
					<motion.div
						key={activeIndex}
						initial={{ opacity: 0, y: 40, scale: 0.8 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						transition={{ duration: 0.5, ease: "easeInOut" }}
						className='w-full flex items-center justify-center'
					>
						<HowItWorkCard
							src={HOW_IT_WORK_DATA[activeIndex].src}
							title={HOW_IT_WORK_DATA[activeIndex].title}
							description={HOW_IT_WORK_DATA[activeIndex].description}
							cardNo={HOW_IT_WORK_DATA[activeIndex].cardNo}
							className={HOW_IT_WORK_DATA[activeIndex]?.textColor}
						/>
					</motion.div>
				</div>

				{/* Background Patterns */}
				<img
					src={width >= 1024 ? TestimonialsPattern1 : HowItWorkPattern1Small}
					alt='Pattern1'
					className='absolute top-0 left-0 -z-10'
				/>
				<img
					src={width >= 1024 ? TestimonialsPattern2 : HowItWorkPattern2Small}
					alt='Pattern2'
					className='absolute top-0 right-0 -z-10'
				/>
			</div>
		</div>
	);
}
