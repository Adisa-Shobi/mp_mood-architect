import { useState } from "react";
import {
	type AffirmationRequest,
	affirmationRequestSchema,
} from "@/schemas/affirmation";

const FEELINGS = ["Happy", "Stressed", "Anxious", "Motivated"] as const;

interface AffirmationFormProps {
	onSubmit: (data: AffirmationRequest) => void;
}

export function AffirmationForm({ onSubmit }: AffirmationFormProps) {
	const [name, setName] = useState("");
	const [feeling, setFeeling] = useState("");
	const [customFeeling, setCustomFeeling] = useState("");
	const [errors, setErrors] = useState<Record<string, string>>({});
	const isOther = feeling === "other";

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setErrors({});

		const resolvedFeeling = isOther ? customFeeling : feeling;
		const result = affirmationRequestSchema.safeParse({
			name,
			feeling: resolvedFeeling,
		});

		if (!result.success) {
			const fieldErrors: Record<string, string> = {};
			for (const issue of result.error.issues) {
				const field = issue.path[0];
				if (typeof field === "string" && !fieldErrors[field]) {
					fieldErrors[field] = issue.message;
				}
			}
			setErrors(fieldErrors);
			return;
		}

		onSubmit(result.data);
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-12">
			<div className="space-y-4">
				<label
					htmlFor="name"
					className="font-sans text-[10px] uppercase tracking-widest text-journal-muted"
				>
					Today I am identifying as...
				</label>
				<input
					id="name"
					type="text"
					className="diary-input not-italic text-2xl focus:text-primary"
					placeholder="Your name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				{errors.name && (
					<p className="font-sans text-[10px] italic tracking-wide text-journal-muted">
						{errors.name}
					</p>
				)}
			</div>

			<fieldset className="space-y-6 border-0 p-0 m-0">
				<legend className="font-sans text-[10px] uppercase tracking-widest text-journal-muted">
					Within this moment, I feel...
				</legend>
				<div className="flex flex-wrap gap-x-8 gap-y-4">
					{FEELINGS.map((f) => (
						<label
							key={f}
							className="flex items-center gap-3 cursor-pointer group"
						>
							<input
								type="radio"
								name="feeling"
								value={f.toLowerCase()}
								checked={feeling === f.toLowerCase()}
								onChange={(e) => setFeeling(e.target.value)}
								className="sr-only peer"
							/>
							<span className="w-3 h-3 rounded-full border border-journal-border peer-checked:border-primary peer-checked:bg-primary transition-all" />
							<span className="text-lg italic text-journal-muted group-hover:text-journal-ink peer-checked:text-primary transition-colors">
								{f}
							</span>
						</label>
					))}
					<label className="flex items-center gap-3 cursor-pointer group">
						<input
							type="radio"
							name="feeling"
							value="other"
							checked={isOther}
							onChange={(e) => setFeeling(e.target.value)}
							className="sr-only peer"
						/>
						<span className="w-3 h-3 rounded-full border border-journal-border peer-checked:border-primary peer-checked:bg-primary transition-all" />
						<span className="text-lg italic text-journal-muted group-hover:text-journal-ink peer-checked:text-primary transition-colors">
							Other...
						</span>
					</label>
				</div>
				{isOther && (
					<input
						type="text"
						className="diary-input not-italic text-xl focus:text-primary"
						placeholder="How are you feeling?"
						value={customFeeling}
						onChange={(e) => setCustomFeeling(e.target.value)}
					/>
				)}
				{errors.feeling && (
					<p className="font-sans text-[10px] italic tracking-wide text-journal-muted">
						{errors.feeling}
					</p>
				)}
			</fieldset>

			<div className="pt-12 flex justify-center">
				<button
					type="submit"
					className="font-sans text-[10px] uppercase tracking-[0.4em] py-5 px-14 border border-primary/30 text-primary hover:bg-primary hover:text-white transition-all duration-500 rounded-full cursor-pointer"
				>
					Manifest Affirmation
				</button>
			</div>
		</form>
	);
}
