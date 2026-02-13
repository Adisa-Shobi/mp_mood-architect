export function AffirmationSkeleton() {
	return (
		<section className="space-y-16 text-center animate-pulse">
			<div className="space-y-4 flex flex-col items-center">
				<div className="h-6 w-4/5 rounded bg-journal-border/50" />
				<div className="h-6 w-3/5 rounded bg-journal-border/50" />
				<div className="h-6 w-2/5 rounded bg-journal-border/50" />
			</div>
			<div className="flex justify-center">
				<div className="h-14 w-56 rounded-full bg-journal-border/30" />
			</div>
		</section>
	);
}
