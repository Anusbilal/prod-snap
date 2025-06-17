import { Pattern1, Pattern1Small, Pattern2 } from "~/assets/images";
import useScreenWidth from "~/hooks/useScreenWidth";
import { BgTextShade } from "../ui/GreenBackgroundText";
import { PhotoToStoreBgShade, PhotoToStoreBgShadeFroSecs } from "~/assets/svg";

const PhotoToStore = () => {
	const { width } = useScreenWidth();

	return (
		<div className=' lg:py-[100px] py-12 px-4 lg:px-[42px] xl:px-[82px] flex flex-col items-center lg:gap-14 gap-8 w-full relative overflow-hidden'>
			<div className='flex flex-col gap-6 justify-center items-center z-10'>
				<span className='font-Poppins text-[32px] lg:text-5xl font-semibold text-black900 text-center'>
					From photo to{" "}
					{width >= 764 ? (
						<BgTextShade
							text='store-ready'
							textClassName='font-Poppins text-[32px] lg:text-5xl font-semibold text-black900 text-center'
							src={PhotoToStoreBgShade}
							iconClassName='-left-[10px] -bottom-[28px]'
						/>
					) : (
						"store-ready"
					)}{" "}
					in{" "}
					{width < 764 ? (
						<BgTextShade
							text='seconds'
							textClassName='font-Poppins text-[32px] lg:text-5xl font-semibold text-black900 text-center'
							src={PhotoToStoreBgShadeFroSecs}
							iconClassName='-left-[7px] -bottom-[10px]'
						/>
					) : (
						"seconds"
					)}
				</span>
				<span className='font-Poppins text-sm lg:text-base font-normal text-black600 text-center'>
					Watch how fast and easy it is to create stunning product visuals — no
					designer needed.
				</span>
			</div>

			<div className='bg-white shadow-default rounded-[20px] lg:rounded-[28px] py-[11px] px-3 overflow-hidden w-full h-full max-w-[1160px] z-10'>
				<video
					src='https://videos.pexels.com/video-files/5849610/5849610-hd_1920_1080_30fps.mp4'
					className='object-cover w-full md:max-h-[550px] max-h-[234px] rounded-[12px] lg:rounded-3xl'
					controls
					autoPlay
					muted
					loop
					playsInline
				/>
			</div>

			<img
				src={width >= 1024 ? Pattern1 : Pattern1Small}
				alt='Pattern1'
				className='absolute lg:top-[-155px] top-0 left-0'
			/>
			<img
				src={Pattern2}
				alt='Pattern2'
				className='absolute bottom-[-210px] right-0 hidden lg:flex'
			/>
		</div>
	);
};

export default PhotoToStore;
