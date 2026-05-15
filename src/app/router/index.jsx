import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes";

const router = createBrowserRouter(routes);

class AppRoter extends React.Component {
    render() { 
        return (
            <>
                <RouterProvider router={router} />
            </>
        );
    }
}
 
export default AppRoter;