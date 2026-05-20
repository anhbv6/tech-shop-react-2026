import React from "react";
import { FaEye, FaRegStar, FaStar, FaTrashAlt } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

class WishList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        wishlistItems: [
            {
            id: 1,
            name: "Gucci duffle bag",
            price: 960,
            oldPrice: 1160,
            discount: "-35%",
            image:
                "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=500&auto=format&fit=crop",
            },
            {
            id: 2,
            name: "RGB liquid CPU Cooler",
            price: 1960,
            image:
                "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?q=80&w=500&auto=format&fit=crop",
            },
            {
            id: 3,
            name: "GP11 Shooter USB Gamepad",
            price: 550,
            image:
                "https://images.unsplash.com/photo-1605901309584-818e25960a8f?q=80&w=500&auto=format&fit=crop",
            },
            {
            id: 4,
            name: "Quilted Satin Jacket",
            price: 750,
            image:
                "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=500&auto=format&fit=crop",
            },
        ],
        justForYouItems: [
            {
            id: 1,
            name: "ASUS FHD Gaming Laptop",
            price: 960,
            oldPrice: 1160,
            discount: "-35%",
            rating: 5,
            reviews: 65,
            image:
                "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=500&auto=format&fit=crop",
            },
            {
            id: 2,
            name: "IPS LCD Gaming Monitor",
            price: 1160,
            rating: 5,
            reviews: 65,
            image:
                "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=500&auto=format&fit=crop",
            },
            {
            id: 3,
            name: "HAVIT HV-G92 Gamepad",
            price: 560,
            badge: "NEW",
            rating: 5,
            reviews: 65,
            image:
                "https://images.unsplash.com/photo-1617096200347-cb04ae810b1d?q=80&w=500&auto=format&fit=crop",
            },
            {
            id: 4,
            name: "AK-900 Wired Keyboard",
            price: 200,
            rating: 5,
            reviews: 65,
            image:
                "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=500&auto=format&fit=crop",
            },
        ],
        };
    }

    handleRemoveWishlistItem = (id) => {
        this.setState((prevState) => ({
        wishlistItems: prevState.wishlistItems.filter((item) => item.id !== id),
        }));
    };

    renderStars(rating) {
        return (
        <div className="flex items-center gap-1 text-sm text-yellow-400">
            {[1, 2, 3, 4, 5].map((star) =>
            star <= rating ? <FaStar key={star} /> : <FaRegStar key={star} />
            )}
        </div>
        );
    }

    renderProductImage(item, type = "wishlist") {
        return (
        <div className="relative flex h-[230px] items-center justify-center overflow-hidden rounded bg-gray-100">
            {item.discount && (
            <span className="absolute left-3 top-3 rounded bg-[#DB4444] px-3 py-1 text-xs text-white">
                {item.discount}
            </span>
            )}

            {item.badge && (
            <span className="absolute left-3 top-3 rounded bg-green-400 px-3 py-1 text-xs text-white">
                {item.badge}
            </span>
            )}

            {type === "wishlist" ? (
            <button
                onClick={() => this.handleRemoveWishlistItem(item.id)}
                className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm hover:text-[#DB4444]"
            >
                <FaTrashAlt />
            </button>
            ) : (
            <button className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm hover:text-[#DB4444]">
                <FaEye />
            </button>
            )}

            <img
            src={item.image}
            alt={item.name}
            className="h-[150px] w-[190px] object-contain transition duration-300 hover:scale-105"
            />

            <button className="absolute bottom-0 left-0 flex h-10 w-full items-center justify-center gap-3 bg-black text-sm text-white hover:bg-[#DB4444]">
            <FiShoppingCart className="text-lg" />
            Add To Cart
            </button>
        </div>
        );
    }

    renderWishlistCard(item) {
        return (
        <div key={item.id}>
            {this.renderProductImage(item, "wishlist")}
            <h3 className="mb-2 mt-4 text-base font-medium">{item.name}</h3>
            <div className="flex items-center gap-3 text-base font-medium">
            <span className="text-[#DB4444]">${item.price}</span>
            {item.oldPrice && <span className="text-gray-400 line-through">${item.oldPrice}</span>}
            </div>
        </div>
        );
    }

    renderRecommendCard(item) {
        return (
        <div key={item.id}>
            {this.renderProductImage(item, "recommend")}
            <h3 className="mb-2 mt-4 text-base font-medium">{item.name}</h3>
            <div className="mb-2 flex items-center gap-3 text-base font-medium">
            <span className="text-[#DB4444]">${item.price}</span>
            {item.oldPrice && <span className="text-gray-400 line-through">${item.oldPrice}</span>}
            </div>
            <div className="flex items-center gap-2">
            {this.renderStars(item.rating)}
            <span className="text-sm text-gray-500">({item.reviews})</span>
            </div>
        </div>
        );
    }

    render() {
        return (
        <div className="min-h-screen bg-white px-6 py-20 text-black md:px-16 lg:px-24 xl:px-32">
            <section className="mb-20">
            <div className="mb-14 flex items-center justify-between">
                <h1 className="text-xl font-normal">Wishlist ({this.state.wishlistItems.length})</h1>
                <button className="h-14 rounded border border-gray-400 px-12 text-base font-medium hover:border-[#DB4444] hover:text-[#DB4444]">
                Move All To Bag
                </button>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {this.state.wishlistItems.map((item) => this.renderWishlistCard(item))}
            </div>
            </section>

            <section>
            <div className="mb-14 flex items-center justify-between">
                <div className="flex items-center gap-4">
                <span className="h-10 w-5 rounded bg-[#DB4444]" />
                <h2 className="text-xl font-normal">Just For You</h2>
                </div>

                <button className="h-14 rounded border border-gray-400 px-12 text-base font-medium hover:border-[#DB4444] hover:text-[#DB4444]">
                See All
                </button>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {this.state.justForYouItems.map((item) => this.renderRecommendCard(item))}
            </div>
            </section>
        </div>
        );
    }
}

export default WishList;
