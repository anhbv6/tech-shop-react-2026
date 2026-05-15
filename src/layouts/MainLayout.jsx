import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RouteTracker from "../app/router/RouteTracker";

class MainLayout extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (
            <>
                <RouteTracker />
                <Header />
                <Outlet />
                <Footer />
            </>
        );
    }
}
 
export default MainLayout;