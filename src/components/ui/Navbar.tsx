import { NavbarModal, TextButton } from "..";
import { Logo, Menu } from "~/assets/svg";
import { useState } from "react";
import { LINKS } from "~/dummy/data.dummy";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<>
			<nav className='pt-[34px] px-4  lg:px-[42px] xl:px-[82px]  sticky top-0 z-50'>
				<div className='flex items-center justify-between'>
					{/* Logo Component */}
					<Link to='/'>
						<img src={Logo} alt='Logo' width={117} height={34} />
					</Link>

					<div className='items-center gap-5 px-4 py-[6px] bg-white60 rounded-xl hidden lg:flex backdrop-blur-custom '>
						{LINKS.map((link) => (
							<a
								href={link.href} // href="#section-id"
								key={link.id}
								className='cursor-pointer p-2 font-Poppins font-normal text-base text-black900'
							>
								{link.label}
							</a>
						))}
					</div>

					<TextButton title='Join Waitlist' className='hidden lg:flex' />
					<img
						src={Menu}
						alt='Menu'
						width={40}
						height={40}
						className='lg:hidden flex'
						onClick={() => setIsModalOpen(true)}
					/>
				</div>
			</nav>
			<NavbarModal onClose={() => setIsModalOpen(false)} isOpen={isModalOpen} />
		</>
	);
};
