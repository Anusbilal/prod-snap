import { createBrowserRouter, Navigate } from "react-router-dom";
import { Home } from "~/views";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "*",
		element: <Navigate to='/' replace />,
	},
]);
