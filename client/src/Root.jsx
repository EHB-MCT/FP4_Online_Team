import { createBrowserRouter, RouterProvider } from "react-router"

//Components
import App from "./modules/app/app/App"

//Routes
import { HOME_ROUTE } from "./modules/app/home/home.route"
import { REGISTER_ROUTE } from "./modules/app/register/register.route"

export const Root = () => {

    const ROUTE = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            children: [
                {
                    path: HOME_ROUTE.path,
                    element: HOME_ROUTE.element
                },
                {
                    path: REGISTER_ROUTE.path,
                    element: REGISTER_ROUTE.element
                }
            ]
        }
    ]);

    return <RouterProvider router={ ROUTE } />

} 