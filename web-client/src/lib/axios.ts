import axios from "axios";
import { toast } from "sonner";

export const api = axios.create({
	baseURL: import.meta.env.VITE_API_URL || "http://localhost:8000",
	headers: {
		"Content-Type": "application/json",
	},
});

api.interceptors.response.use(
	(response) => response,
	// Intercept error and show toast notification
	(error) => {
		let message = "An error occurred";

		if (error.response) {
			message = error.response.data?.message || error.response.statusText;
		} else if (error.request) {
			message = "Couldn't connect. Please check your network.";
		}

		toast.error(message);

		return Promise.reject(error);
	},
);
