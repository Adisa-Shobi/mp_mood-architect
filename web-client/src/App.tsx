import { AffirmationForm } from "@/components/affirmation/AffirmationForm";
import { AffirmationResult } from "@/components/affirmation/AffirmationResult";
import { AffirmationSkeleton } from "@/components/affirmation/AffirmationSkeleton";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { useAffirmation } from "@/hooks/use-affirmation";

function App() {
	const { mutate, data, isPending, reset } = useAffirmation();

	return (
		<div className="max-w-xl mx-auto px-6 py-20 lg:py-32">
			<main className="space-y-24">
				<Header />
				{isPending ? (
					<AffirmationSkeleton />
				) : data ? (
					<AffirmationResult affirmation={data.affirmation} onReset={reset} />
				) : (
					<AffirmationForm onSubmit={(values) => mutate(values)} />
				)}
			</main>
			<Footer />
		</div>
	);
}

export default App;
