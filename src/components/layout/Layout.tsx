import type React from "react";
import { Navbar } from "../ui/Navbar";

type TProps = {
	children: React.ReactNode;
};

const Layout = ({ children }: TProps) => {
	return (
		<div className='min-h-screen flex flex-col font-Poppins bg-lightblue'>
			{/* Header Navigation */}
			<Navbar />
			{/* Main Content Area */}
			<main className='flex-grow'>{children}</main>
		</div>
	);
};

export default Layout;
