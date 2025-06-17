import { useRef } from "react";

type Props = {
	index: number;
	title: string;
	content: string;
	isOpen: boolean;
	onToggle: (index: number) => void;
};

const FeatureAccordion = ({
	index,
	title,
	content,
	isOpen,
	onToggle,
}: Props) => {
	const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

	return (
		<div
			className={`relative pl-[4px] transition-all duration-300 ${
				isOpen ? "bg-gradient-to-b from-lightgreen to-sky" : "bg-borderColor"
			}`}
			onMouseEnter={() => {
				if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
				hoverTimeout.current = setTimeout(() => {
					onToggle(index);
				}, 300);
			}}
			onMouseLeave={() => {
				if (hoverTimeout.current) {
					clearTimeout(hoverTimeout.current);
					hoverTimeout.current = null;
				}
			}}
		>
			<div
				className={`py-4 lg:py-6 pr-6 pl-8 lg:pl-10 cursor-pointer z-20 transition-all duration-300 ${
					isOpen ? "bg-gradient-to-r from-white  !to-lightblue" : "bg-lightblue"
				}`}
			>
				<h3 className='text-[20px] lg:text-[25px] font-Poppins font-normal text-black900 z-10'>
					{title}
				</h3>

				<div
					className={`grid  overflow-hidden transition-all duration-500 ease-in-out ${
						isOpen
							? "grid-rows-[1fr] opacity-100 pt-2"
							: "grid-rows-[0fr] opacity-0"
					}`}
				>
					<div className='overflow-hidden text-[14px] lg:text-[16px] font-Poppins font-normal text-wrap text-black900 z-10'>
						{content}
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeatureAccordion;
