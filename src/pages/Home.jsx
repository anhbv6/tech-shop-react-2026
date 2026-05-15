import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";


class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  }

    categorys = [
        {label: "Woman’s Fashion", value: "womans"},
        {label: "Men’s Fashion", value: "mens"},
        {label: "Electronics", value: ""},
        {label: "Home & Lifestyle", value: ""},
        {label: "Medicine", value: ""},
        {label: "Sports & Outdoor", value: ""},
        {label: "Baby’s & Toys", value: ""},
        {label: "Groceries & Pets", value: ""},
        {label: "Health & Beauty", value: ""},
    ]

    render() { 
        return ( 
            <div>
                <div className="flex">
                    <div>
                        <span></span>
                    </div>
                    <div>

                    </div>
                </div>
                <div>
                    Today’s
                </div>
                <div>
                    Categories
                </div>
                <div>
                    This Month
                </div>
                <div>
                    poster
                </div>
                <div>
                    Our Products
                </div>
                <div>
                    Featured
                </div>
                <div>
                    serrvice cart
                </div>
            </div>
        );
    }
}
 
export default Home;