import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useRouterStore } from "../../store/routerStore";

export default function RouteTracker() {
    const location = useLocation();

    const setRoute = useRouterStore(
        (state) => state.setRoute
    );

    useEffect(() => {
        setRoute(location.pathname);
    }, [location.pathname]);

    return null;
}