import MainLayout from "../../Layouts/MainLayouts";
import { NextPageWithLayout } from "./_app";
import HeroTop from "../../components/Landing/Hero-top"
import Hero from "../../components/Landing/Hero"
import Intro from "../../components/Landing/Intro"
import Rules from "../../components/Landing/Rules"
import Judging from "../../components/Landing/Judging"
import Question from "../../components/Landing/Question"
import Timeline from "../../components/Landing/Timeline"

const IndexPage: NextPageWithLayout = ({}) => {
	return (
		<>
			<HeroTop />
			<Hero />
			<Intro />
			<Rules />
			<Judging />
			<Question />
			<Timeline />
		</>
	);
};

export default IndexPage;

IndexPage.getLayout = function getLayout(page) {
	return <MainLayout>{page}</MainLayout>;
};


{/* <div className="pt-48">
{items.map((item, index) => {
  return(
	<div
		className={`grid grid-cols-3 ${
			index % 2 === 0 ? 'order-1' : ''
		  }`}>
		<div key={index} className="flex flex-col text-right">
		  <h1 className="text-[24px] text-fuchsia-500 font-bold">{item.leftTexth1}</h1>
		  <p className="text-[14px]">{item.leftTextp} <br /> {item.leftspan}</p>
		</div>
		<div className="flex justify-center relative">  
		  <div className="h-[96px] w-[4px] bg-fuchsia-500 absolute top-0 -mt-[106px]"></div>
		  <div className="rounded-full bg-gradient-general text-white w-10 h-10 flex items-center justify-center text-2xl font-semibold mb-[125px]">
			{item.number}
		  </div>
		</div>
		<div className="flex text-left">
		  <h1 className="text-[24px] text-fuchsia-500 font-bold">{item.rightText}</h1>
		</div>
	</div>
   )})}
</div> */}