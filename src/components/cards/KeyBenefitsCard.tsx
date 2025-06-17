type TProps = {
	src: string;
	title: string;
	description: string;
};

const KeyBenefitsCard = ({ description, src, title }: TProps) => {
	return (
		<div className='bg-lightblue rounded-[28px] p-6 lg:p-10 text-center flex flex-col items-center border-white border shadow-purpleShadow'>
			<div className='flex items-center justify-center w-[72px] h-[72px] lg:w-20 lg:h-20 p-5 bg-white rounded-[20px] mb-8'>
				<img
					src={src}
					alt='KeyBenefitsCardImage'
					width={40}
					height={40}
					className='size-8 lg:size-10'
				/>
			</div>
			<h3 className='font-normal font-Poppins text-[20px] lg:text-[25px] text-black900 mb-2 lg:mb-3'>
				{title}
			</h3>
			<p className='font-normal font-Poppins text-[14px] lg:text-[16px] text-black900'>
				{description}
			</p>
		</div>
	);
};

export default KeyBenefitsCard;
