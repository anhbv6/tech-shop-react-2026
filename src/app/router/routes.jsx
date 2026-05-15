import Home from "../../pages/Home";
import About from "../../pages/About";
import Cart from "../../pages/Cart";
import Category from "../../pages/Category";
import Contact from "../../pages/Contact";
import DetailItem from "../../pages/DetailItem";
import CheckOut from "../../pages/CheckOut";
import Account from "../../pages/Account";
import Login from "../../pages/Login";
import Signin from "../../pages/Signin";
import NotFound from "../../pages/NotFound";


import { PATHS } from "./paths";
import AuthLayout from "../../layouts/AuthLayout";
import MainLayout from "../../layouts/MainLayout";
import { Navigate } from "react-router-dom";

export const routes = [
    {
        path: PATHS.ROOT,
        element: <Navigate to={PATHS.HOME} replace />,
    },

    {
        element: <MainLayout />,

        children: [
            {
                path: PATHS.HOME,
                element: <Home />,
            },
            {
                path: PATHS.ABOUT,
                element: <About />,
            },

            {
                path: PATHS.CART,
                element: <Cart />,
            },

            {
                path: PATHS.CATEGORY,
                element: <Category />,
            },

            {
                path: PATHS.CONTACT,
                element: <Contact />,
            },

            {
                path: PATHS.DETAIL_ITEM,
                element: <DetailItem />,
            },

            {
                path: PATHS.CHECKOUT,
                element: <CheckOut />,
            },

            {
                path: PATHS.ACCOUNT,
                element: <Account />,
            },
        ]
    },

    {
        element: <AuthLayout />,
        children: [
            {
                path: PATHS.LOGIN,
                element: <Login />,
            },

            {
                path: PATHS.SIGNIN,
                element: <Signin />,
            },
        ],
    },
    
    {
        path: "*",
        element: <NotFound />,
    },
]