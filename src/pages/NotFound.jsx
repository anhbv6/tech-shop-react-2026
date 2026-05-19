import React from "react";
import Footer from "../components/Footer";
import { withRouter } from "../app/router/withRouter";
import { PATHS } from "../app/router/paths";

class NotFound extends React.Component {
    constructor(props) {
        super(props);
    }

    goToHome = () => {
        this.props.router.navigate(PATHS.HOME);
    }

    render() { 
        return (
            <>
                <div className="px-36 py-36 pb-[182px] h-[calc(100%-667px)]">
                    <div className="text-8xl place-self-center">404 Not Found</div>
                    <span className="pt-6 pb-12 block text-center font-medium">Your visited page not found. You may go home page.</span>
                    <span className="block h-[56px] w-[256px] place-self-center text-center content-center rounded-xs bg-[#BD4444] text-[#ffffff] cursor-pointer" onClick={this.goToHome}>Back to home page</span>
                </div>
                <Footer />
            </>
        );
    }
}
 
export default withRouter(NotFound);