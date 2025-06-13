import { createHashRouter, RouterProvider } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { VerifiedProvider } from "../../shared/const/context/VerifiedContext/VerifiedContext";
import React, { useState, useEffect } from "react";


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
import { VOTING_DASHBOARD_ROUTE } from "../teachervoting/votingDashboard/VotingDashboard.route";
import { PROGRAM_ROUTE } from "../program/program.route";

export const Root = () => {

	const [verified, setVerified] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');

    if (token) {
      fetch(`https://api.shiftfestival.be/api/verify-token?token=${token}`, {
        credentials: 'include',
      })
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            setVerified(true);
          }
        });
    } else {
      fetch('https://api.shiftfestival.be/api/user-status', {
        credentials: 'include',
      })
        .then(res => res.json())
        .then(data => {
          if (data.verified) {
            setVerified(true);
          }
        });
    }
  }, []);

	const QUERY_CLIENT = new QueryClient();

	const ROUTE = createHashRouter([
		{
			path: "/",
			element: <App />,
			children: [
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
				{
					path: PROGRAM_ROUTE.path,
					element: PROGRAM_ROUTE.element
				},
				// {
				// 	path: PROJECTS_ROUTE.path,
				// 	element: PROJECTS_ROUTE.element
				// },
				// {
				// 	path: PROJECTSDETAIL_ROUTE.path,
				// 	element: PROJECTSDETAIL_ROUTE.element,
				// },
				{
					path: REGISTER_ROUTE.path,
					element: REGISTER_ROUTE.element,
				},
				{
					path: VOTING_DASHBOARD_ROUTE.path,
					element: VOTING_DASHBOARD_ROUTE.element
				},
				// {
				// 	path: VOTING_ROUTE.path,
				// 	element: VOTING_ROUTE.element,
				// },
				{
					path: INFO_ROUTE.path,
					element: INFO_ROUTE.element,
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
			]
		}
	]);

	return (
		<QueryClientProvider client={ QUERY_CLIENT }>
			<VerifiedProvider>
				<RouterProvider router={ROUTE} />
			</VerifiedProvider>
		</QueryClientProvider>
	);
};