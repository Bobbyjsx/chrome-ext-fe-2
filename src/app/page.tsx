import Footer from "src/app/components/Footer";
import Features from "src/app/components/module/landing/Features";
import HowItWorks from "src/app/components/module/landing/HowItWorks";
import Show from "src/app/components/module/landing/Show";
import FruitfulNav from "src/app/components/navs/FruitfulNav";

const Home = () => {
	return (
		<div className="w-full flex flex-col mx-auto gap-8 scroll-smooth snap-y snap-mandatory">
			<div className="w-[90%] flex flex-col mx-auto gap-8 py-11 snap-y snap-mandatory">
				<div className="w-full snap-always snap-center">
					<FruitfulNav />
				</div>

				<div className=""></div>
				<div className="w-full snap-always snap-center">
					<Show />
				</div>
				<div className=""></div>

				<div className="w-full snap-always snap-center">
					<Features />
				</div>

				<div className=""></div>
				<div className="w-full snap-always snap-center">
					<HowItWorks />
				</div>
			</div>
			<div className="w-ful">
				<Footer />
			</div>
		</div>
	);
};

export default Home;
