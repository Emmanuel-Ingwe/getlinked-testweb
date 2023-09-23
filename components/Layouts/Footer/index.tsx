import { useActiveLink } from "../../../hooks/useActiveLinks";
import Link from "next/link";

const Footer = () => {
	const isActive = useActiveLink;

	const footerLinks = [
		{
			title: "About Us",
			links: [
				{
					name: "Our Team",
					href: "#our-team",
				},
				{
					name: "Careers",
					href: "#careers",
				},
				{
					name: "Contact Us",
					href: "#contact",
				},
			],
		},
		{
			title: "Products",
			links: [
				{
					name: "Savings",
					href: "#products",
				},
				{
					name: "Swidex Pos",
					href: "#pos",
				},
				{
					name: "Help Center",
					href: "#help-center",
				},
			],
		},
		{
			title: "Legal",
			links: [
				{
					name: "Terms",
					href: "#terms",
				},
				{
					name: "Privacy",
					href: "#privacy",
				},
				{
					name: "Security",
					href: "#security",
				},
			],
		},
	];

	return (
		<footer className='bg-[#00072D] text-white py-10 xl:py-24 mt-10'>
			<section className='container space-y-8 lg:space-y-0 lg:grid grid-cols-1 lg:grid-cols-6 gap-y-8 gap-10 xl:gap-x-20'>
				<div className='col-span-2'>
					<div className='space-y-4'>
						<Link href='/' passHref>
							<div className='max-xl:h-8 h-14 md:w-[87px] xl:w-[97px]'>
							</div>
						</Link>
						<p className='text-sm'>
							e
						</p>
					</div>
					<span className='hidden lg:inline-block text-xs mt-2'>
						{new Date().getFullYear()} © Swidex Pay
					</span>
				</div>
				{footerLinks.map((section) => {
					return (
						<div key={section.title} className='col-span-1'>
							<h3 className='font-bold font-SpaceGrotesk'>{section.title}</h3>
							<div className='flex flex-col mt-4 space-y-4'>
								{section.links.map((link) => {
									return (
										<a
											key={link.name}
											href={link.href}
											className={`${
												isActive(link.href) ? "text-gray-100" : "text-white"
											} transition-all hover:text-gray-100 font-light`}>
											{link.name}
										</a>
									);
								})}
							</div>
						</div>
					);
				})}
			</section>
		</footer>
	);
};

export default Footer;
