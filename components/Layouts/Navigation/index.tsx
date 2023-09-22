import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";

const Navigation = () => {
	const [showMobileNav, setShowMobileNav] = useState(false);

	return (
		<>
			<nav className='flex items-center h-16 lg:h-[88px] fixed bg-white z-50 top-0 w-full border-b border-[#F0F0F0]'>
				<div className='container flex items-center justify-between'>
					<div>
						<Link href='/' passHref>
							<div className='w-[87px] h-8 md:h-12 xl:w-[97px]'>
							</div>
						</Link>
					</div>
					<div className='flex items-center space-x-8'>
						<ul className='space-x-12 hidden xl:flex'>
							''
						</ul>
						<div className='space-x-4 hidden xl:flex'>
							<Link href='/' target='_blank'
									className='text-xs w-[153px] lg:text-sm font-medium py-2.5'>
									Join us
							</Link>
						</div>
					</div>
					<button onClick={() => setShowMobileNav(true)} className='xl:hidden'>
					</button>
				</div>
			</nav>
		</>
	);
};

export default Navigation;
