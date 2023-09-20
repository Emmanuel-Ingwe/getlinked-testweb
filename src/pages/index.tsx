import MainLayout from "../../Layouts/MainLayouts";
import { NextPageWithLayout } from "./_app";


const IndexPage: NextPageWithLayout = ({}) => {
	return (
		<>
			hello
		</>
	);
};

export default IndexPage;

IndexPage.getLayout = function getLayout(page) {
	return <MainLayout>{page}</MainLayout>;
};

