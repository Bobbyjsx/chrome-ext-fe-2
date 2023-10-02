import VideoRepo from "src/app/components/module/VideoRepo";

const page = ({ params }: { params: { id: string } }) => {
	return (
		<div className="w-full flex justify-center flex-col items-center py-12">
			<div className="w-[95%] md:w-[90%] flex justify-center flex-col items-center">
				<VideoRepo id={params.id} />
			</div>
		</div>
	);
};

export default page;
