import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "@fontsource/poppins";
import "@fontsource/poppins/400";
import "@fontsource/poppins/500";
import "@fontsource/poppins/600";
import "@fontsource/poppins/700";
import "@fontsource/poppins/800";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
