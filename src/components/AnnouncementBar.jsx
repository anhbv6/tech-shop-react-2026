import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

class AnnouncementBar extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (
            <div className="bg-black text-[#FAFAFA] h-12 justify-between px-28 items-center flex">
                <span className=""></span>
                <div className="flex gap-2 items-center ">
                    <span className="text-sm">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
                    <span className="font-medium underline">Shop now</span>
                </div>
                <div className="flex items-center gap-2">
                    <span>Viet Nam</span> 
                    <MdKeyboardArrowDown size={24}/>
                </div>
            </div>
        );
    }
}
 
export default AnnouncementBar;