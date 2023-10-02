import ScreenRecorder from "../../components/ScreenRecorder";

const Screener = () => {
	return (
		<div>
			<ScreenRecorder
				screen={true}
				audio={false}
				video={false}
				downloadRecordingPath="Screen_Recording_Demo"
				downloadRecordingType="webm"
				emailToSupport="support@xyz.com"
			/>
		</div>
	);
};

export default Screener;
