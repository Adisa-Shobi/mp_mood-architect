interface AffirmationResultProps {
	affirmation: string;
	onReset: () => void;
}

export function AffirmationResult({
	affirmation,
	onReset,
}: AffirmationResultProps) {
	return (
		<section className="space-y-16 text-center">
			<p className="text-2xl md:text-3xl italic font-light leading-relaxed text-journal-ink">
				&ldquo;{affirmation}&rdquo;
			</p>
			<div className="flex justify-center">
				<button
					type="button"
					onClick={onReset}
					className="font-sans text-[10px] uppercase tracking-[0.4em] py-5 px-14 border border-primary/30 text-primary hover:bg-primary hover:text-white transition-all duration-500 rounded-full cursor-pointer"
				>
					Reflect Again
				</button>
			</div>
		</section>
	);
}
