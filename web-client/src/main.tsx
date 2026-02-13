import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "sonner";
import { QueryProvider } from "@/providers/query-provider";
import "./index.css";
import App from "./App.tsx";

// biome-ignore lint/style/noNonNullAssertion: root element is guaranteed in index.html
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<QueryProvider>
			<App />
			<Toaster richColors position="top-right" />
		</QueryProvider>
	</StrictMode>,
);
