import Footer from "@/components/layouts/Footer";
import Navigation from "@/components/layouts/Navigation";
import Head from "next/head";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

type MainLayoutProps = {
	title?: string;
	children: React.ReactNode;
	ignoreDefaultTitle?: boolean;
	ignoreDefaultKeywords?: boolean;
	ignoreDefaultDescriprion?: boolean;
	ignoreDefaultImage?: boolean;
};

const MainLayout = ({
	children,
	title = "Swidex | Building Financial Security Together.",
}: MainLayoutProps) => {
	useEffect(() => {
		AOS.init({
			delay: 200,
			once: true,
		});
	}, []);

	return (
		<>
			<Head>
				<>
					<title>{title}</title>
					<meta property='og:title' content={title} />
					<meta name='twitter:title' content={title} />
					<meta name='twitter:image:alt' content={title} />
					<meta
						name='viewport'
						content='width=device-width, user-scalable=no'
					/>
					<meta
						name='keywords'
						content='Financial goals, secure future, savings options, financial services, personalized solutions, retirement planning, education funding, investment opportunities, wealth management, financial success, retirement savings, financial planning, investment strategies, secure investments, financial advisors, wealth building, financial empowerment, savings accounts, investment portfolio, financial security'
					/>
					<meta
						property='og:description'
						content='At Swidex Investment Limited, we are committed to helping you achieve your financial goals and build a secure future. Our range of savings options and financial services are designed to meet your unique needs. We have the perfect solution for you!'
					/>
					<meta
						name='twitter:description'
						content='At Swidex Investment Limited, we are committed to helping you achieve your financial goals and build a secure future. Our range of savings options and financial services are designed to meet your unique needs. We have the perfect solution for you!'
					/>
					<meta property='og:image' content='/assets/images/preview.jpg' />
					<meta name='twitter:image' content='/assets/images/preview.jpg' />
				</>
			</Head>
			<>
				<Navigation />
				<main className='w-full pt-[64px] xl:pt-[88px]'>{children}</main>
				<Footer />
			</>
		</>
	);
};

export default MainLayout;