import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { withRouter } from "../app/router/withRouter";

class CartItem extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  }

    renderStars = (rating) => {
        const stars = [];

        for (let i = 1; i <= 5; i++) {
            if (rating >= i) {
                stars.push(<FaStar key={i} className="text-yellow-400" />);
            } else if (rating >= i - 0.5) {
                stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
            } else {
                stars.push(<FaRegStar key={i} className="text-gray-300" />);
            }
        }

        return stars;
    };

    goTo = (value, data) => {
        console.log("value", value);
        console.log("dataa", data);
        
        
        this.props.router.navigate(value);
    }

    render() { 
        const {data} = this.props;
        return ( 
            <div key={data.id} className="group min-w-[290px]">
                <div className="relative bg-[#F5F5F5] h-[250px] w-full overflow-hidden">

                    {/* Discount */}
                    <span className="absolute top-3 left-3 bg-[#DB4444] text-white text-xs px-2 py-1 rounded">
                        -{data.discount}%
                    </span>

                    {/* Icons */}
                    <div className="absolute top-3 right-3 flex flex-col gap-2">
                        <span className="bg-white p-1 rounded-full shadow cursor-pointer">
                            <CiHeart />
                        </span>
                        <span className="bg-white p-1 rounded-full shadow cursor-pointer">
                            <IoEyeOutline />
                        </span>
                    </div>

                    {/* Image */}
                    <img
                        src={data.image}
                        alt={data.name}
                        className="w-full h-full object-cover"
                    />

                    {/* Hover */}
                    <div 
                        className="absolute bottom-0 left-0 right-0 bg-black text-white text-center py-2 opacity-0 cursor-pointer group-hover:opacity-100 transition">
                        Add To Cart
                    </div>
                </div>

                {/* Info */}
                <div className="flex flex-col pt-4 gap-1">
                    <h1 className="text-sm font-medium cursor-pointer" onClick={() => this.goTo(`/detail-item/${data.id}`, data)}>{data.name}</h1>

                    <div className="flex gap-2 items-center">
                        <span className="text-[#DB4444] font-semibold">
                            ${data.price}
                        </span>
                        <span className="line-through text-gray-400">
                            ${data.oldPrice}
                        </span>
                    </div>

                    {/* Stars */}
                    <div className="flex items-center gap-2 text-sm">
                        <div className="flex">
                            {this.renderStars(data.rating)}
                        </div>
                        <span className="text-gray-500">
                            ({data.reviews})
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default withRouter(CartItem);