import Image from "next/image";

const Features = () => {
	return (
		<div id="features" className="w-full flex flex-col items-center justify-center md:h-screen h-full gap-16">
			<div className="flex flex-col gap-5">
				<h1 className="text-5xl text-zinc-900 font-sans font-bold capitalize">
					Features
				</h1>
				<p className="capitalize text-lg text-zinc-600">
					key highlight of our extension
				</p>
			</div>
			<div className="grid md:grid-cols-2 grid-cols-1 space-y-14 place-items-center">
				<section className=" w-full md:w-[80%] col-span-1 flex flex-col gap-14 place-items-center">
					<div className="flex items-start justify-start gap-5 w-full text-zinc-600">
						<Image
							src={"/assets/icon.svg"}
							alt={"Video Repository"}
							width={1000}
							height={1000}
							className="w-7 h-7 object-cover object-center mt-1"
						/>
						<div className="flex flex-col items-start justify-start h-28 gap-5">
							<p className="text-3xl text-primary font-sans font-semibold capitalize">
								{" "}
								simple screen recording
							</p>
							<p className="text-base">
								{" "}
								Effortless screen recording for
								everyone. Record with ease, no tech
								expertise required.
							</p>
						</div>
					</div>
					<div className="flex items-start justify-start gap-5 w-full text-zinc-600">
						<Image
							src={"/assets/icon1.svg"}
							alt={"Video Repository"}
							width={1000}
							height={1000}
							className="w-7 h-7 object-cover object-center mt-1"
						/>
						<div className="flex flex-col items-start justify-start h-28 gap-5">
							<p className="text-3xl text-primary font-sans font-semibold capitalize">
								{" "}
								easy-to-share URL
							</p>
							<p className="text-base">
								{" "}
								Share your recordings instantly with a
								single link. No attachments, no
								downloads.
							</p>
						</div>
					</div>
					<div className="flex items-start justify-start gap-5 w-full text-zinc-600">
						<Image
							src={"/assets/icon2.svg"}
							alt={"Video Repository"}
							width={1000}
							height={1000}
							className="w-7 h-7 object-cover object-center mt-1"
						/>
						<div className="flex flex-col items-start justify-start h-28 gap-5">
							<p className="text-3xl text-primary font-sans font-semibold capitalize">
								{" "}
								revisit recording
							</p>
							<p className="text-base">
								{" "}
								Access and review your past content
								effortlessly. Your recordings, always
								at your fingertips.
							</p>
						</div>
					</div>
				</section>
				<section className=" w-[100%]  col-span-1">
					<Image
						src={"/assets/repo.svg"}
						alt={"Video Repository"}
						width={1000}
						height={1000}
						className="w-full h-full object-cover object-center "
					/>
				</section>
			</div>
		</div>
	);
};

export default Features;
