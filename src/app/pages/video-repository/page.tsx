"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import VideoList from "src/app/components/module/VideoList";
import Nav from "src/app/components/navs/Nav";
import { Input } from "src/app/components/Input";
import { getAllVideos } from "src/app/lib/api";
import { useState, useEffect } from "react";



const Page = () => {
	const [dataArray, setDataArray] = useState<VideoItem[] | []>([]);

	useEffect(() => {
		// Fetch all videos and update the 'videos' state with the response data
		getAllVideos()
			.then((data) => {
				setDataArray(data.data); // Set the 'videos' state to the response data
			})
			.catch((error) => {
				console.error("Error fetching all videos:", error);
			});
	}, []);

	const {
		register,
		handleSubmit,
		formState: {  isSubmitSuccessful },
	} = useForm<{ search: string }>();

	const submit: SubmitHandler<{ search: string }> = async (
		values
	) => {
		if (isSubmitSuccessful) {
			alert(`Submited. \n searchTerm : ${values.search}`);
		}
	};

	return (
		<main className="w-[85%] flex flex-col justify-center mx-auto gap-8 py-10 ">
			<div className="w-full">
				<Nav />
			</div>

			<section className="w-full flex md:flex-row flex-col gap-y-4 md:justify-between justify-start items-start md:items-center">
				<aside className="flex flex-col gap-2">
					<p className="text-primary font-bold text-xl ">
						Hello, John Mark
					</p>
					<p className="text-sm text-gray-500">
						Here are your recorded videos
					</p>
				</aside>
				<form
					className="md:w-[50%] w-full"
					onSubmit={handleSubmit(submit)}>
					<Input
						className="py-3 px-4  bg-gray-200 cursor-text"
						type="text"
						placeholder="Search for a particular video"
						{...register("search")}
						leadingIcon={
							<button
								type="submit"
								title="search"
								className="">
								<svg
									width="20"
									height="21"
									viewBox="0 0 20 21"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M9.58268 18.0001C13.9549 18.0001 17.4993 14.4557 17.4993 10.0834C17.4993 5.71116 13.9549 2.16675 9.58268 2.16675C5.21043 2.16675 1.66602 5.71116 1.66602 10.0834C1.66602 14.4557 5.21043 18.0001 9.58268 18.0001Z"
										stroke="#C3C3C3"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M18.3327 18.8334L16.666 17.1667"
										stroke="#C3C3C3"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</button>
						}
					/>
				</form>
			</section>

			<div className="w-full">
				<hr />
			</div>
			<p className="text-gray-600 font-sans">Recent files</p>
			<section className="grid md:grid-cols-2 grid-cols-1 place-items-center gap-y-7 h-screen w-full">
				{dataArray?.map((data, index) => {
					return (
						<div
							className="s"
							key={index}>
							<VideoList vId={data.vId} createdAt={data.createdAt} video={data.video} />    
						</div>
					);
				})}
			</section>
		</main>
	);
};

export default Page;
