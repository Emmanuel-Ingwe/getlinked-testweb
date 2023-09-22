export type NavigationLinkType = {
	title: string;
	href?: string;
	children?: {
		title: string;
		href?: string;
		param?: string;
		description: string;
		action?: () => void;
	}[];
	param?: string;
	action?: () => void;
};

export const navigationLinks: NavigationLinkType[] = [
	{
		title: "About Us",
		href: "#about",
	},
	{
		title: "Products",
		href: "#products",
	},
	{
		title: "Contact Us",
		href: "#contact",
	},
];