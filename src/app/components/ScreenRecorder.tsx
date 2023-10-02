"use client";
import React, { useState } from "react";
import { Row, Col, Button, Badge } from "antd";
import { useReactMediaRecorder } from "react-media-recorder";
import Text from "antd/lib/typography/Text";
import { StopOutlined } from "@ant-design/icons";
type Props = {
	screen: boolean;
	audio: boolean;
	video: boolean;
	downloadRecordingPath: string;
	downloadRecordingType: string;
	emailToSupport: string;
};
const ScreenRecorder = ({
	screen,
	audio,
	video,
	downloadRecordingPath,
	downloadRecordingType,
	emailToSupport,
}: Props) => {
	const [recordingNumber, setRecordingNumber] = useState(0);

	const RecordView = () => {
		const {
			status,
			startRecording: startRecord,
			stopRecording: stopRecord,
			mediaBlobUrl,
		} = useReactMediaRecorder({ screen, audio, video });

		const startRecording = () => {
			return startRecord();
		};

		const stopRecording = () => {
			const currentTimeSatmp = new Date().getTime();
			setRecordingNumber(currentTimeSatmp);
			return stopRecord();
		};

		const nav = window.navigator as any;
		const win = window.open as any;

		const viewRecording = () => {
			if (window && win) {
				win(mediaBlobUrl, "_blank").focus();
			}
		};

		const downloadRecording = () => {
			const pathName = `${downloadRecordingPath}_${recordingNumber}.${downloadRecordingType}`;
			try {
				if (nav && nav.msSaveOrOpenBlob) {
					// For Internet Explorer
					nav.msSaveOrOpenBlob(mediaBlobUrl, pathName);
				} else if (mediaBlobUrl) {
					// For other browsers
					const link = document.createElement("a");
					link.href = mediaBlobUrl;
					link.download = pathName;
					document.body.appendChild(link);
					link.click();
					document.body.removeChild(link);
				}
			} catch (err) {
				console.error(err);
			}
		};

		const mailRecording = () => {
			try {
				window.location.href = `mailTo:${emailToSupport}?subject=Screen recording for an Issue number ${recordingNumber}&body=Hello%20Team,%0D%0A%0D%0A${mediaBlobUrl}`;
			} catch (err) {
				console.error(err);
			}
		};

		return (
			<Row>
				<Col
					span="12"
					style={{ lineHeight: "24px" }}>
					{status && status !== "stopped" && (
						<Text>
							Screen Recording Status:{" "}
							{status && status.toUpperCase()}
						</Text>
					)}
					{status && status === "recording" && (
						<Badge
							className="screen-recording-badge"
							color="#faad14"
							status="processing"
							offset={[2, 0]}
							style={{
								marginLeft: "5px",
							}}
						/>
					)}
				</Col>
				<Col
					span="12"
					style={{ textAlign: "right" }}>
					{status && status !== "recording" && (
						<Button
							size="small"
							onClick={startRecording}
							type="primary"
							icon="play-circle"
							className="margin-left-sm"
							ghost>
							{mediaBlobUrl
								? "Record again"
								: "Record "}
						</Button>
					)}
					{status && status === "recording" && (
						<Button
							size="small"
							onClick={stopRecording}
							danger={true}
							icon={<StopOutlined />}
							className="margin-left-sm"
							ghost>
							Stop Recording
						</Button>
					)}
					{mediaBlobUrl &&
						status &&
						status === "stopped" && (
							<Button
								size="small"
								onClick={viewRecording}
								type="primary"
								icon="picture"
								className=" ml-[30px]">
								View
							</Button>
						)}
					{downloadRecordingType &&
						mediaBlobUrl &&
						status &&
						status === "stopped" && (
							<Button
								size="small"
								onClick={downloadRecording}
								type="primary"
								icon="download"
								className="downloadRecording margin-left-sm">
								Download
							</Button>
						)}
					{emailToSupport &&
						mediaBlobUrl &&
						status &&
						status === "stopped" && (
							<Button
								size="small"
								onClick={mailRecording}
								type="primary"
								icon="mail"
								className="mailRecording margin-left-sm">
								Email To Support
							</Button>
						)}
				</Col>
			</Row>
		);
	};
	return (
		<div
			className="Scren-Record-Wrapper"
			style={{ padding: "5px 20px" }}>
			{RecordView()}
		</div>
	);
};
export default ScreenRecorder;
