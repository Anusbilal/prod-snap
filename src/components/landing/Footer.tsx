import { Link } from "react-router-dom";
import { Logo } from "~/assets/svg";

export function Footer() {
	return (
		<footer className='px-4 lg:px-[42px] xl:px-[82px] lg:pt-[86px] lg:pb-8 pb-4 pt-[38px] flex flex-col gap-6 lg:gap-10 bg-lightblue w-full overflow-hidden'>
			<Link to='/'>
				<img src={Logo} alt='Logo' width={117} height={33} />
			</Link>

			<div className='flex flex-col lg:flex-row lg:items-center gap-4 justify-between font-Poppins text-[12px] lg:text-[14px] text-grey w-full'>
				<span>© 2025 ProdSnap. All rights reserved.</span>

				<div className='flex items-center justify-between lg:gap-16'>
					<span>Terms of Service</span>
					<span>Privacy Policy</span>
				</div>
			</div>
		</footer>
	);
}
