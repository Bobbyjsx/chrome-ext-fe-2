import Image from "next/image";
import Link from "next/link";

const logo = () => {
	return (
		<Link href="/" className="flex gap-3 w-auto md:w-36 items-center justify-center ">
			<Image
				width={1000}
				height={1000}
				className="w-8 h-8"
				src="/assets/logo.svg"
				alt="logo"
			/>
			<p className="font-semibold font-sans text-primary text-xl sm:text-xs">
				Help Me Out
			</p>
		</Link>
	);
};

export default logo;
