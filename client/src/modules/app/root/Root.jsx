import { createHashRouter, RouterProvider } from "react-router"

//Components
import App from "../app/App";

//Routes
import { ERROR_ROUTE } from "../error/error.route";
import { HOME_ROUTE } from "../home/home.route";
import { PRIVACY_POLICY_ROUTE } from "../privacyPolicy/privacyPolicy.route";
import { PROJECTS_ROUTE } from "../projects/projects.route";
import { REGISTER_ROUTE } from "../register/register.route";
import { VOTING_ROUTE } from "../voting/voting.route";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const Root = () => {

	const QUERY_CLIENT = new QueryClient();

	const ROUTE = createHashRouter([
		{
			path: "/",
			element: <App />,
			children: [
				{
					path: ERROR_ROUTE.path,
					element: ERROR_ROUTE.element,
				},
				{
					path: HOME_ROUTE.path,
					element: HOME_ROUTE.element,
				},
				{
					path: REGISTER_ROUTE.path,
					element: REGISTER_ROUTE.element,
				},
				{
					path: PRIVACY_POLICY_ROUTE.path,
					element: PRIVACY_POLICY_ROUTE.element,
				},
				{
					path: VOTING_ROUTE.path,
					element: VOTING_ROUTE.element,
				},
				{
					path: PROJECTS_ROUTE.path,
					element: PROJECTS_ROUTE.element
				}
			],
		},
	]);

	return (
		<QueryClientProvider client={ QUERY_CLIENT }>
			<RouterProvider router={ROUTE} />
		</QueryClientProvider>
	);
};
