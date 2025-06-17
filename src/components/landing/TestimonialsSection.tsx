import {
	ArrowIcon,
	ChatIcon,
	Stars,
	TestimonialBgShade,
	TestimonialBgShadeSmall,
} from "~/assets/svg";
import IconButton from "../buttons/IconButton";
import { BgTextShade } from "../ui/GreenBackgroundText";
import useScreenWidth from "~/hooks/useScreenWidth";
import TestimonialSlider, {
	type TestimonialSliderRef,
} from "../Slider/TestimonialSlider";
import { useRef } from "react";
import {
	TestimonialsPattern1,
	TestimonialsPattern1Small,
	TestimonialsPattern2,
	TestimonialsPattern2Small,
} from "~/assets/images";

export function TestimonialsSection() {
	const { width } = useScreenWidth();
	const sliderRef = useRef<TestimonialSliderRef>(null);

	return (
		<div
			className='lg:py-[100px] py-12 px-4 lg:px-[42px] xl:px-[82px] grid lg:grid-cols-2 xl:grid-cols-3 lg:gap-16 gap-8 w-full relative overflow-hidden bg-white'
			id='testimonials'
		>
			<div className='flex flex-col gap-6 lg:gap-10 items-center lg:items-start col-span-1 z-10'>
				<IconButton
					title='Testimonials'
					src={ChatIcon}
					className='bg-lightblue text-black300'
				/>

				<div className='flex flex-col gap-4  lg:gap-6 items-center lg:items-start'>
					<h1 className='font-Poppins text-[32px] lg:text-5xl font-semibold text-black900 text-center lg:text-start'>
						What{" "}
						<BgTextShade
							text='our users'
							textClassName='font-Poppins text-[32px] lg:text-5xl font-semibold text-black900 text-center lg:text-start'
							src={width >= 1024 ? TestimonialBgShade : TestimonialBgShadeSmall}
							iconClassName='lg:-bottom-[28px] lg:left-[27px] -bottom-[10px] right-[-1px]'
						/>{" "}
						say
					</h1>
					<p className='font-normal text-sm lg:text-base font-Poppins  text-[#636363] text-center lg:text-start'>
						Real feedback from founders, marketers, and creators who use
						Prodsnap to move faster.
					</p>
				</div>

				<div className='flex items-center  justify-center lg:justify-start gap-[10px]'>
					<div className='flex items-center gap-1 pr-[6px]'>
						{Array.from({ length: 5 }).map((_, index) => (
							<img src={Stars} alt='Stars' width={20} height={20} key={index} />
						))}
					</div>
					<p className='font-Poppins text-[12px] lg:text-[14px] font-medium text-black900'>
						5.0
					</p>
					<p className='font-Poppins text-[12px] lg:text-[14px] font-normal text-black600'>
						Based on user reviews
					</p>
				</div>

				<div className='flex items-center  justify-center lg:justify-start gap-3'>
					<img
						src={ArrowIcon}
						alt='Previous'
						width={40}
						height={40}
						className='cursor-pointer'
						onClick={() => sliderRef.current?.prevSlide()}
					/>
					<img
						src={ArrowIcon}
						alt='Next'
						width={40}
						height={40}
						className='cursor-pointer rotate-180'
						onClick={() => sliderRef.current?.nextSlide()}
					/>
				</div>
			</div>

			<div className='col-span-1 xl:col-span-2 w-full h-full z-10'>
				<TestimonialSlider ref={sliderRef} />
			</div>

			<img
				src={width >= 1024 ? TestimonialsPattern1 : TestimonialsPattern1Small}
				alt='Pattern1'
				className='absolute  top-0 left-0'
			/>
			<img
				src={width >= 1024 ? TestimonialsPattern2 : TestimonialsPattern2Small}
				alt='Pattern2'
				className='absolute  top-0 right-0 '
			/>
		</div>
	);
}
