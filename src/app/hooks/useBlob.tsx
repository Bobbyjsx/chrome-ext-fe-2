const useBlob = async ({ blobUrl }: { blobUrl: string }) => {
	// const blobUrl = 'blob:http://localhost:3000/aa05158c-d04a-4610-9c89-cac5b31897e8';
	const blob = fetch(blobUrl).then((response) => response.blob());
	const videoUrl = URL.createObjectURL(await blob);

	return {
		videoUrl,
	};
};

export default useBlob;
