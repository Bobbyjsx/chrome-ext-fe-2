export const API_BASE_URL =
	"https://seashell-app-4jicj.ondigitalocean.app/api";
export async function getVideoById(id: string|null) {
	const apiUrl = `${API_BASE_URL}/video/get/${id}`;
	const response = await fetch(apiUrl);
	if (!response.ok) {
		console.log(response);
		throw new Error(
			`Error fetching video data: ${response.status}`
		);
	}
	return response.json();
}

export async function getAllVideos() {
	const apiUrl = `${API_BASE_URL}/videos`;
	const response = await fetch(apiUrl);
	if (!response.ok) {
		return null;
	}
	return response.json();
}
