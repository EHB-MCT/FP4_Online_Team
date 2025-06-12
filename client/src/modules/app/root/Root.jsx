import { createHashRouter, RouterProvider } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


//Components
import App from "../app/App";

//Routes
import { AUTH_TEACHER_ROUTE} from "../teachervoting/authenticate/authenticate.route";
import { COUNTER_ROUTE } from "../counter/counter.route";
import { ERROR_ROUTE } from "../error/error.route";
import { HOME_ROUTE } from "../home/home.route";
import { INFO_ROUTE } from "../info/info.route";
import { PRICE_ROUTE } from "../price/price.route";
import { PRIVACY_POLICY_ROUTE } from "../privacyPolicy/privacyPolicy.route";
import { PROJECTS_ROUTE } from "../projects/projects.route";
import { PROJECTSDETAIL_ROUTE } from "../projectsDetail/projectsDetail.route";
import { REGISTER_ROUTE } from "../register/register.route";
import { VOTING_ROUTE } from "../voting/voting.route";
import { PROGRAM_ROUTE } from "../program/program.route";
import { REQUEST_TOKEN_ROUTE } from "../teachervoting/requestToken/requestToken.route";
import { AWARDS_ROUTE } from "../awards/awards.route";

export const Root = () => {

	const QUERY_CLIENT = new QueryClient();

	const ROUTE = createHashRouter([
		{
			path: "/",
			element: <App />,
			children: [
				{
					path: AWARDS_ROUTE.path,
					element: AWARDS_ROUTE.element,
				},
				{
					path: COUNTER_ROUTE.path,
					element: COUNTER_ROUTE.element,
				},
				{
					path: ERROR_ROUTE.path,
					element: ERROR_ROUTE.element,
				},
				{
					path: HOME_ROUTE.path,
					element: HOME_ROUTE.element,
				},
				// {
				// 	path: PRICE_ROUTE.path,
				// 	element: PRICE_ROUTE.element,
				// },
				// {
				// 	path: PRIVACY_POLICY_ROUTE.path,
				// 	element: PRIVACY_POLICY_ROUTE.element,
				// },
				{
					path: PROJECTS_ROUTE.path,
					element: PROJECTS_ROUTE.element
				},
				// {
				// 	path: PROJECTSDETAIL_ROUTE.path,
				// 	element: PROJECTSDETAIL_ROUTE.element,
				// },
				{
					path: REGISTER_ROUTE.path,
					element: REGISTER_ROUTE.element,
				},
				// {
				// 	path: VOTING_ROUTE.path,
				// 	element: VOTING_ROUTE.element,
				// },

				{
					path: INFO_ROUTE.path,
					element: INFO_ROUTE.element,
				},
				{
					path: PROGRAM_ROUTE.path,
					element: PROGRAM_ROUTE.element,
				},

			]
		},
		{
			path: "/voteReGRfguugXNEmMm/",
			element: <App />,
			children: [
				{
					path: AUTH_TEACHER_ROUTE.path,
					element: AUTH_TEACHER_ROUTE.element,
				},
				{
					path: REQUEST_TOKEN_ROUTE.path,
					element: REQUEST_TOKEN_ROUTE.element,
				}
			]
		}
	]);

	return (
		<QueryClientProvider client={ QUERY_CLIENT }>
			<RouterProvider router={ROUTE} />
		</QueryClientProvider>
	);
};
