import { ArrowRightOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";

const Show = () => {
	return (
		<div className="w-full">
			<div className="md:grid grid-cols-2  place-items-center h-full md:h-screen flex flex-col-reverse">
				<section className="flex flex-col gap-9 w-[90%]">
					<p className="text-7xl text-zinc-900 font-sans font-bold ">
						Show Them Don&apos;t Just Tell
					</p>
					<p className="text-lg text-zinc-800 ">
						Help your friends and loved ones by creating
						and sending videos on how to get things done
						on a website.
					</p>
					<Link
						href="#"
						className=" bg-primary text-white px-6 py-5 w-full md:w-1/2 flex gap-3 items-center justify-center rounded-md">
						Install HelpMeOut <ArrowRightOutlined />
					</Link>
				</section>
				<section className="relative w-full flex justify-center items-center">
					<div className="grid grid-cols-2 -z-10 w-[85%] h-full gap-5">
						{/* First Image */}
						<div className="s"></div>
						<div className="col-span-1 lg:col-span-1">
							<Image
								width={1000}
								height={1000}
								className="w-full rounded-md"
								alt="grid"
								src="/assets/grid2.svg"
							/>
						</div>

						{/* Second Image */}
						<div className="col-span-1 lg:col-span-1">
							<Image
								width={1000}
								height={1000}
								className="w-full rounded-md"
								alt="grid"
								src="/assets/grid1.svg"
							/>
						</div>
					</div>
					<div className="flex md:w-full w-[80%]  absolute inset-x-0  z-20 mx-auto">
						<div className="flex flex-col justify-between items-center  mr-5 ">
							{/* First Stacked Image */}
							<div className="w-full flex flex-col justify-start items-start">
								<Image
									width={1000}
									height={1000}
									className="w-full rounded-md"
									alt="grid"
									src="/assets/stack2.svg"
								/>
							</div>

							{/* Second Stacked Image */}
							<div className="w-full flex flex-col justify-end items-end">
								<Image
									width={1000}
									height={1000}
									className="w-full rounded-md"
									alt="grid"
									src="/assets/stack1.svg"
								/>
							</div>
						</div>

						{/* Third Stacked Image */}
						<div className="flex  justify-center items-center ">
							<div className="w-full">
								<Image
									width={1000}
									height={1000}
									className="w-full rounded-md"
									alt="grid"
									src="/assets/stack3.svg"
								/>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Show;
