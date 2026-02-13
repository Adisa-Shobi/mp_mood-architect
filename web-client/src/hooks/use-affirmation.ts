import { useMutation } from "@tanstack/react-query";
import { api } from "@/lib/axios";
import {
	type AffirmationRequest,
	type AffirmationResponse,
	affirmationResponseSchema,
} from "@/schemas/affirmation";

async function fetchAffirmation(
	data: AffirmationRequest,
): Promise<AffirmationResponse> {
	const response = await api.post("/api/affirmation", data);
	return affirmationResponseSchema.parse(response.data);
}

export function useAffirmation() {
	return useMutation({
		mutationFn: fetchAffirmation,
	});
}
