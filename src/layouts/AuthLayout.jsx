import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import React from "react";

class AuthLayout extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (
            <>
                <Outlet />
                <Footer />
            </>
        );
    }
}
 
export default AuthLayout;