import MainLayout from "../../Layouts/MainLayouts";
import { NextPageWithLayout } from "./_app";
import HeroTop from "../../components/Landing/Hero-top"


const IndexPage: NextPageWithLayout = ({}) => {
	return (
		<>
			<HeroTop />
		</>
	);
};

export default IndexPage;

IndexPage.getLayout = function getLayout(page) {
	return <MainLayout>{page}</MainLayout>;
};

