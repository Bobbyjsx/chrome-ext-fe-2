import Image from "next/image";

const Two = () => {
      const details = {
			title: "Untitled_Video_20232509",
			video: "/assets/vid.svg",
			videoUrl: "https://www.helpmeout/Untitled_Video_20232509",
			transcript:
				"First step. Open Facebook on your desktop or mobile device and locate &quot;Marketplace&quot; in the left-hand menu or at the top of the First step. Open Facebook on your desktop or mobile device and locate &quot;Marketplace&quot; in the left-hand menu or at the top of the ",
		};
  return (
		<div>
			<div className="w-full rounded-md">
				<Image  
					src={details.video}
					alt={details.title}
					width={1000}
					height={1000}
					className="w-full"
				/>
				{/* <video
					src={
						"file:///Users/bobby/Downloads/Screen_Recording_Demo_1696070674375.webm"
					}
					controls={true}
					className="w-full"
				/> */}
			</div>
			<div className="flex flex-col gap-5">
				<p className="font-semibold font-sans text-primary tracking-wide text-xl">
					Transcript
				</p>
				<select
					title="Transcript"
					className="px-4 py-3 text-gray-500 w-28 cursor-pointer border-2 rounded-md border-primary">
					<option selected>English</option>
					<option>French</option>
				</select>
				<div className="relative">
					<div className="overflow-y-scroll h-[300px]  flex flex-col w-full text-base text-primary font-sans shadow: gap-5 shadow-inner pb-20">
						<div className="flex items-start justify-between flex-wrap text-lg font-medium w-full">
							<p className="">0.01</p>
							<p className="w-[80%]">
								First step. Open Facebook on your
								desktop or mobile device and locate
								&quot;Marketplace&quot; in the
								left-hand menu or at the top of the
								First step. Open Facebook on your
								desktop or mobile device and locate
								&quot;Marketplace&quot; in the
								left-hand menu or at the top of the{" "}
							</p>
						</div>
						<div className="flex items-start justify-between flex-wrap text-lg font-medium w-full">
							<p className="">0.15</p>
							<p className="w-[80%]">
								First step. Open Facebook on your
								desktop or mobile device and locate
								&quot;Marketplace&quot; in the
								left-hand menu or at the top of the
								First step. Open Facebook on your
								desktop or mobile device and locate
								&quot;Marketplace&quot; in the left-ha
							</p>
						</div>
						<div className="flex items-start justify-between flex-wrap text-lg font-medium w-full">
							<p className="">0.30</p>
							<p className="w-[80%]">
								First step. Open Facebook on your
								desktop or mobile device and locate
								&quot;Marketplace&quot; in the
								left-hand menu or at the top of the
							</p>
						</div>
						<div className="flex items-start justify-between flex-wrap text-lg font-medium w-full opacity-30-">
							<p className="">1.00</p>
							<p className="w-[80%]">
								First step. Open Facebook on your
								desktop or mobile device and locate
								&quot;Marketplace&quot; in the
								left-hand menu or at the top of the
							</p>
						</div>
					</div>
					<div className="absolute inset-x-0 bottom-0 h-12  rounded-t-xl shadow-primary">
						<div className="h-full bg-white/30 backdrop-blur-sm opacity-60"></div>
					</div>
				</div>
			</div>
		</div>
  );
}

export default Two
