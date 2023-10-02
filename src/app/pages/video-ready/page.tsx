"use client";
import Two from "src/app/components/module/video-ready/Two";
import One from "src/app/components/module/video-ready/one";
import FruitfulNav from "src/app/components/navs/FruitfulNav";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { getVideoById } from "src/app/lib/api";

const Page = () => {
	const searchParams = useSearchParams();

	const id = searchParams.get("id");
	const [dataArray, setDataArray] = useState<Vit | null>(null);

	useEffect(() => {
		getVideoById(id)
			.then((data) => {
				setDataArray(data.data);
			})
			.catch((error) => {
				console.error("Error fetching all videos:", error);
			});
	}, []);
	if (dataArray === null) {
		return <div className="flex items-center justify-center text-4xl font-bold text-red-900 w-full h-screen">Video Not Found</div>;
	}
	return (
		<div className="flex-  w-full">
			<FruitfulNav />

			<div className=" grid grid-cols-5 gap-3 place-items-center w-[80%] mx-auto">
				<section className="w-full col-span-2">
					<One id={id} />
				</section>
				<div className="col-span-1 w-[1%] border-r-2 border-r-gray-200 h-full"></div>
				<section className="w-full col-span-2">
					<Two id={id} />
				</section>
			</div>
		</div>
	);
};

export default Page;
