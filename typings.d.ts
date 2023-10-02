interface VideoItem {
	vId: string;
	video: string;
	createdAt: string;
}

// Define an interface for the entire API response
interface ApiResponse {
	message: string;
	data: VideoItem[];
}

interface Vit {
    id: string;
    videoPath: string;
    createAt: string;
}