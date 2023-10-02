import Link from "next/link";
import Logo from "./Logo";

const FruitfulNav = () => {
	return (
		<div>
			<div className="flex w-[90%] md:w-full justify-between items-center text-primary font-semibold font-sans">
				<Logo />
				<div className="hidden md:flex md:flex-row w-[20%] flex-col gap-5 justify-between items-center font-normal scroll-smooth">
					<Link href="/#features">Features</Link>
					<Link href="/#how-it-works">How it works</Link>
				</div>

				<Link href="/pages/auth">Get Started</Link>
			</div>
		</div>
	);
};

export default FruitfulNav;
