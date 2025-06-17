import { CrossIcon, Logo } from "~/assets/svg";
import TextButton from "../buttons/TextButton";
import { LINKS } from "~/dummy/data.dummy";
import { Link } from "react-router-dom";

type Props = {
	isOpen: boolean;
	onClose: () => void;
};

const NavbarModal = ({ isOpen, onClose }: Props) => {
	return (
		<div
			className={`fixed lg:hidden inset-0 z-50 pt-[34px] px-4 pb-[48px] transition-transform duration-500 max-h-[486px] w-full shadow-default rounded-b-[24px] ease-in-out bg-white ${
				isOpen ? "translate-y-0" : "-translate-y-full"
			}`}
		>
			<div className='flex items-center justify-between'>
				<Link to='/'>
					<img src={Logo} alt='Logo' width={117} height={34} />
				</Link>

				<img
					src={CrossIcon}
					alt='CrossIcon'
					width={40}
					height={40}
					onClick={onClose}
					className='cursor-pointer'
				/>
			</div>

			<div className='flex flex-col items-center gap-5 text-lg mt-[38px] mb-[54px]'>
				{LINKS.map((link) => (
					<Link
						key={link.href}
						to={link.href}
						className='cursor-pointer p-2 font-Poppins font-normal text-base text-black900'
						onClick={onClose}
					>
						{link.label}
					</Link>
				))}
			</div>

			<div className='flex justify-center items-center'>
				<TextButton title='Join Waitlist' />
			</div>
		</div>
	);
};

export default NavbarModal;
