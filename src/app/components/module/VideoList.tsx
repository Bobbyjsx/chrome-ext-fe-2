import dayjs from "dayjs";
import Link from "next/link";

const VideoList = ({ vId, createdAt, video }: VideoItem) => {
	return (
		<div>
			{
				<Link
					href={`/pages/video-repository/${vId}`}
					className="WebCard md:w-[557px] w-full px-4 pt-4 pb-6 bg-neutral-50 bg-opacity-50 rounded-3xl border border-gray-400 border-opacity-60 flex-col justify-center items-center gap-6 inline-flex">
					<div className="VideoFrame md:w-[525px] w-full h-52 rounded-md border border-gray-200 justify-end items-center flex flex-col overflow-hidden relative">
						<img
							src={video}
							alt={vId}
							width={1000}
							height={1000}
							className="w-full inset-x-0 h-52 object-cover object-center"
						/>
						<div className="absolute w-full h-12  inset-x-0 bg-transparent  justify-end items-center inline-flex pb-3 pr-2">
							<div className=" text-slate-950 text-sm font-medium font-sans rounded w-[72px] h-full flex flex-col justify-center items-center text-center bg-gray-200">
								00:34
							</div>
						</div>
					</div>
					<div className="Details self-stretch justify-between items-start inline-flex">
						<div className="TitleDate grow shrink basis-0 flex-col justify-center items-start gap-2 inline-flex">
							<div className="Title text-neutral-900 text-xl font-medium font-sans">
								{vId}.webm
							</div>
							<div className="Date text-gray-400 text-base font-normal font-sans uppercase">
								{dayjs(createdAt)
									.locale("en")
									.format("MMMM, D YYYY")}
							</div>
						</div>
					</div>
				</Link>
			}
		</div>
	);
};

export default VideoList;
