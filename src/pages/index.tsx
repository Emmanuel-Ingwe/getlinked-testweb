import MainLayout from "../../Layouts/MainLayouts";
import { NextPageWithLayout } from "./_app";
import HeroTop from "../../components/Landing/Hero-top"
import Hero from "../../components/Landing/Hero"
import Intro from "../../components/Landing/Intro"
import Rules from "../../components/Landing/Rules"

const IndexPage: NextPageWithLayout = ({}) => {
	return (
		<>
			<HeroTop />
			<Hero />
			<Intro />
			<Rules />
		</>
	);
};

export default IndexPage;

IndexPage.getLayout = function getLayout(page) {
	return <MainLayout>{page}</MainLayout>;
};

