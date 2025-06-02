import { createBrowserRouter, RouterProvider } from "react-router"

//Components
import App from "../app/App";

//Routes
import { ERROR_ROUTE } from "../error/error.route";
import { HOME_ROUTE } from "../home/home.route";
import { PRIVACY_POLICY_ROUTE } from "../privacyPolicy/privacyPolicy.route";
import { REGISTER_ROUTE } from "../register/register.route";

export const Root = () => {

    const ROUTE = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            children: [
                {
                    path: ERROR_ROUTE.path,
                    element: ERROR_ROUTE.element
                },
                {
                    path: HOME_ROUTE.path,
                    element: HOME_ROUTE.element
                },
                {
                    path: REGISTER_ROUTE.path,
                    element: REGISTER_ROUTE.element
                },
                {
                    path: PRIVACY_POLICY_ROUTE.path,
                    element: PRIVACY_POLICY_ROUTE.element
                },
                
            ]
        }
    ]);

    return <RouterProvider router={ ROUTE } />

} 