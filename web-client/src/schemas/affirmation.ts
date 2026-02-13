import { z } from "zod/v4";

export const affirmationRequestSchema = z.object({
	name: z
		.string()
		.min(1, "Name is required")
		.max(50, "Name must be 50 characters or less"),
	feeling: z
		.string()
		.min(1, "Please select or describe how you feel")
		.max(500, "Feeling must be 500 characters or less"),
});

export type AffirmationRequest = z.infer<typeof affirmationRequestSchema>;

export const affirmationResponseSchema = z.object({
	affirmation: z.string(),
});

export type AffirmationResponse = z.infer<typeof affirmationResponseSchema>;
