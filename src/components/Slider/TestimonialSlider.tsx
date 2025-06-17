import {
	forwardRef,
	useEffect,
	useImperativeHandle,
	useMemo,
	useRef,
	useState,
} from "react";
import { TestimonialsCard } from "..";
import { TESTIMONIAL_DATA } from "~/dummy/data.dummy";
import useScreenWidth from "~/hooks/useScreenWidth";

export type TestimonialSliderRef = {
	nextSlide: () => void;
	prevSlide: () => void;
};

const TestimonialSlider = forwardRef<TestimonialSliderRef>((_, ref) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const sliderRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const { width } = useScreenWidth();
	const [itemWidth, setItemWidth] = useState(0);

	const gap = useMemo(() => {
		return width >= 1024 ? 40 : 16;
	}, [width]);

	useEffect(() => {
		if (containerRef.current) {
			const containerWidth = containerRef.current.offsetWidth;

			const visibleItems = Math.floor(
				containerWidth / (width >= 1024 ? 486 : 326 + gap),
			);
			const itemWidth =
				(containerWidth - gap * (visibleItems - 1)) / visibleItems;
			setItemWidth(itemWidth);
		}
	}, [width, gap]);

	const maxIndex = Math.max(0, TESTIMONIAL_DATA.length - 1);

	const nextSlide = () => {
		setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
	};

	const prevSlide = () => {
		setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
	};

	useEffect(() => {
		const interval = setInterval(() => {
			nextSlide();
		}, 5000);

		return () => clearInterval(interval);
	}, [maxIndex]);

	const translation = useMemo(() => {
		return currentIndex * (itemWidth + gap);
	}, [currentIndex, itemWidth, gap]);

	useImperativeHandle(ref, () => ({
		nextSlide,
		prevSlide,
	}));

	return (
		<div ref={containerRef} className='overflow-x-hidden relative h-full'>
			<div
				ref={sliderRef}
				className='flex transition-transform duration-500 ease-in-out h-full max-w-[326px]'
				style={{
					transform: `translateX(-${translation}px)`,
					gap: `${gap}px`,
				}}
			>
				{TESTIMONIAL_DATA.map((testimonial) => (
					<div
						key={testimonial.id}
						className='flex-shrink-0 '
						style={{
							maxWidth: `${itemWidth}px`,
						}}
					>
						<TestimonialsCard {...testimonial} />
					</div>
				))}
			</div>
		</div>
	);
});

export default TestimonialSlider;
