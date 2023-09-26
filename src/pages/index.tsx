import MainLayout from "../../Layouts/MainLayouts";
import { NextPageWithLayout } from "./_app";
import HeroTop from "../../components/Landing/Hero-top"
import Hero from "../../components/Landing/Hero"


const IndexPage: NextPageWithLayout = ({}) => {
	return (
		<>
			<HeroTop />
			<Hero />
		</>
	);
};

export default IndexPage;

IndexPage.getLayout = function getLayout(page) {
	return <MainLayout>{page}</MainLayout>;
};

