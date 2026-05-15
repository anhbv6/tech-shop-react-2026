import React from "react";
import AnnouncementBar from "./AnnouncementBar";
import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";
import { PATHS } from "../app/router/paths";
import { withRouter } from "../app/router/withRouter";

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  }

    menu = [
        { label: "Home", path: PATHS.HOME },
        { label: "Contact", path: PATHS.CONTACT },
        { label: "About", path: PATHS.ABOUT },
        { label: "Sign Up", path: PATHS.SIGNIN },
    ]

    goTo = (path) => {
        this.props.router.navigate(path);
    }

    isActive = (path) => {
        return this.props.router.location.pathname.startsWith(path);
    }

    renderMenu = () => {
        return this.menu.map((item) => {
            const active = this.isActive(item.path);
            return (
                <span
                    key={item.path}
                    onClick={() => this.goTo(item.path)}
                    className={`font-medium cursor-pointer ${
                        active ? "border-b-2 border-black pb-1" : ""
                    }`}
                >
                    {item.label}
                </span>
            )
        })
    }

    render() { 
        
        return (
            <div>
                <AnnouncementBar />
                <div className="h-24 flex items-center justify-between px-28 border-b border-[#B3B3B3]">
                    <h1 className="font-bold text-3xl cursor-pointer" onClick={() => this.goTo(PATHS.HOME)}>Missing</h1>
                    <div className="flex gap-12">
                        {this.renderMenu()}
                    </div>
                    <div className="flex h-10 gap-6 items-center">
                        <div className="bg-[#F5F5F5] py-[7px] px-5 relative">
                            <input type="text" className="text-[12px] leading-[12px] outline-none w-[243px] rounded-sm h-full" placeholder="What are you looking for?"/> 
                            <CiSearch className="absolute top-1.5 right-2 cursor-pointer" size={26} />
                        </div>
                        <div className="flex gap-4">
                            <CiHeart size={26} className="cursor-pointer"/>
                            <CiShoppingCart size={26} className="cursor-pointer"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default withRouter(Header);
