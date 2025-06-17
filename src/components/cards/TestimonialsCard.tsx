type TProps = {
	image: string;
	name: string;
	designation: string;
	review: string;
};

const TestimonialsCard = ({ designation, image, name, review }: TProps) => {
	return (
		<div className='lg:p-10 p-8 flex flex-col justify-between border border-white shadow-default shadow-[#2E208805] gap-8 bg-lightblue w-full h-full  min-h-[306px] lg:min-h-[286px]  rounded-[28px] overflow-hidden'>
			<span className='font-Poppins text-[14px] lg:text-[16px] font-medium text-black900'>
				“{review}"
			</span>

			<div className='flex items-center gap-3'>
				<img
					src={image}
					alt='reviewsImage'
					width={48}
					height={48}
					className='size-12 rounded-lg object-cover'
				/>

				<div className='flex flex-col gap-[5px]'>
					<span className='font-Poppins text-[16px] font-medium text-black900'>
						{name}
					</span>
					<p className='font-Poppins text-[12px] lg:text-[14px] font-medium text-[#707070]'>
						{designation}
					</p>
				</div>
			</div>
		</div>
	);
};

export default TestimonialsCard;
