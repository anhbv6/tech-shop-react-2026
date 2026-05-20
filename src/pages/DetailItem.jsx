import React from "react";
import {
  FaEye,
  FaHeart,
  FaMinus,
  FaPlus,
  FaRegHeart,
  FaStar,
  FaStarHalfAlt,
  FaTruck,
  FaUndo,
} from "react-icons/fa";

class DetailItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        activeImage: 0,
        quantity: 2,
        selectedColor: "#A0BCE0",
        selectedSize: "M",
        };
    }

    product = {
        name: "Havic HV G-92 Gamepad",
        price: 192,
        rating: 4.5,
        reviews: 150,
        status: "In Stock",
        description:
        "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
        colors: ["#A0BCE0", "#E07575"],
        sizes: ["XS", "S", "M", "L", "XL"],
        images: [
        "https://images.unsplash.com/photo-1592840496694-26d035b52b48?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1605901309584-818e25960a8f?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1617096200347-cb04ae810b1d?q=80&w=600&auto=format&fit=crop",
        ],
    };

    relatedItems = [
        {
        id: 1,
        discount: "-40%",
        name: "HAVIT HV-G92 Gamepad",
        price: 120,
        oldPrice: 160,
        rating: 5,
        reviews: 88,
        image:
            "https://images.unsplash.com/photo-1617096200347-cb04ae810b1d?q=80&w=500&auto=format&fit=crop",
        },
        {
        id: 2,
        discount: "-35%",
        name: "AK-900 Wired Keyboard",
        price: 960,
        oldPrice: 1160,
        rating: 4,
        reviews: 75,
        image:
            "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=500&auto=format&fit=crop",
        hasCart: true,
        },
        {
        id: 3,
        discount: "-30%",
        name: "IPS LCD Gaming Monitor",
        price: 370,
        oldPrice: 400,
        rating: 5,
        reviews: 99,
        image:
            "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=500&auto=format&fit=crop",
        },
        {
        id: 4,
        name: "RGB liquid CPU Cooler",
        price: 160,
        oldPrice: 170,
        rating: 4.5,
        reviews: 65,
        image:
            "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?q=80&w=500&auto=format&fit=crop",
        },
    ];

    changeQuantity = (type) => {
        this.setState((prevState) => ({
        quantity:
            type === "increase"
            ? prevState.quantity + 1
            : Math.max(1, prevState.quantity - 1),
        }));
    };

    renderStars(rating, size = "text-sm") {
        const stars = [];

        for (let i = 1; i <= 5; i++) {
        if (rating >= i) {
            stars.push(<FaStar key={i} />);
        } else if (rating >= i - 0.5) {
            stars.push(<FaStarHalfAlt key={i} />);
        } else {
            stars.push(<FaStar key={i} className="text-gray-300" />);
        }
        }

        return <div className={`flex items-center gap-1 text-yellow-400 ${size}`}>{stars}</div>;
    }

    renderRelatedCard(item) {
        return (
        <div key={item.id} className="group">
            <div className="relative mb-4 flex h-[250px] items-center justify-center overflow-hidden rounded bg-gray-100">
            {item.discount && (
                <span className="absolute left-3 top-3 rounded bg-[#DB4444] px-3 py-1 text-xs text-white">
                {item.discount}
                </span>
            )}

            <div className="absolute right-3 top-3 flex flex-col gap-2">
                <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white hover:text-[#DB4444]">
                <FaRegHeart />
                </button>
                <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white hover:text-[#DB4444]">
                <FaEye />
                </button>
            </div>

            <img
                src={item.image}
                alt={item.name}
                className="h-[170px] w-[190px] object-contain transition duration-300 group-hover:scale-105"
            />

            {item.hasCart && (
                <button className="absolute bottom-0 left-0 h-10 w-full bg-black text-sm font-medium text-white">
                Add To Cart
                </button>
            )}
            </div>

            <h3 className="mb-2 text-base font-medium">{item.name}</h3>
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
        const { activeImage, quantity, selectedColor, selectedSize } = this.state;
        const activeImageUrl = this.product.images[activeImage];

        return (
        <div className="bg-white px-6 py-16 text-black md:px-16 lg:px-24 xl:px-36">
            <section className="mb-36 grid grid-cols-1 gap-16 lg:grid-cols-[700px_1fr]">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-[170px_1fr]">
                <div className="grid grid-cols-4 gap-4 md:grid-cols-1">
                {this.product.images.map((image, index) => (
                    <button
                    key={index}
                    onClick={() => this.setState({ activeImage: index })}
                    className={`flex h-[138px] items-center justify-center rounded bg-gray-100 p-4 transition ${
                        activeImage === index ? "ring-2 ring-[#DB4444]" : "hover:ring-1 hover:ring-gray-300"
                    }`}
                    >
                    <img
                        src={image}
                        alt={`${this.product.name} ${index + 1}`}
                        className="h-full w-full object-contain"
                    />
                    </button>
                ))}
                </div>

                <div className="flex h-[600px] items-center justify-center rounded bg-gray-100 p-12">
                <img
                    src={activeImageUrl}
                    alt={this.product.name}
                    className="max-h-full max-w-full object-contain"
                />
                </div>
            </div>

            <div className="max-w-[420px]">
                <h1 className="mb-4 text-2xl font-semibold tracking-wide">{this.product.name}</h1>

                <div className="mb-4 flex items-center gap-3 text-sm">
                {this.renderStars(this.product.rating)}
                <span className="text-gray-400">({this.product.reviews} Reviews)</span>
                <span className="text-gray-400">|</span>
                <span className="text-green-500">{this.product.status}</span>
                </div>

                <div className="mb-5 text-2xl">${this.product.price}.00</div>

                <p className="mb-6 text-sm leading-6">{this.product.description}</p>

                <div className="mb-6 h-px w-full bg-gray-400" />

                <div className="mb-6 flex items-center gap-5">
                <span className="text-xl">Colours:</span>
                <div className="flex items-center gap-2">
                    {this.product.colors.map((color) => (
                    <button
                        key={color}
                        onClick={() => this.setState({ selectedColor: color })}
                        className={`h-5 w-5 rounded-full border-2 ${
                        selectedColor === color ? "border-black" : "border-transparent"
                        }`}
                    >
                        <span
                        className="block h-full w-full rounded-full border border-white"
                        style={{ backgroundColor: color }}
                        />
                    </button>
                    ))}
                </div>
                </div>

                <div className="mb-6 flex items-center gap-6">
                <span className="text-xl">Size:</span>
                <div className="flex items-center gap-3">
                    {this.product.sizes.map((size) => (
                    <button
                        key={size}
                        onClick={() => this.setState({ selectedSize: size })}
                        className={`h-8 min-w-8 rounded border px-2 text-sm transition ${
                        selectedSize === size
                            ? "border-[#DB4444] bg-[#DB4444] text-white"
                            : "border-gray-400 hover:border-[#DB4444]"
                        }`}
                    >
                        {size}
                    </button>
                    ))}
                </div>
                </div>

                <div className="mb-8 flex items-center gap-4">
                <div className="flex h-11 overflow-hidden rounded border border-gray-400">
                    <button
                    onClick={() => this.changeQuantity("decrease")}
                    className="flex w-10 items-center justify-center border-r border-gray-400 hover:bg-gray-100"
                    >
                    <FaMinus />
                    </button>
                    <span className="flex w-16 items-center justify-center text-xl font-medium">{quantity}</span>
                    <button
                    onClick={() => this.changeQuantity("increase")}
                    className="flex w-10 items-center justify-center bg-[#DB4444] text-white hover:bg-red-600"
                    >
                    <FaPlus />
                    </button>
                </div>

                <button className="h-11 rounded bg-[#DB4444] px-12 text-sm font-medium text-white hover:bg-red-600">
                    Buy Now
                </button>

                <button className="flex h-11 w-11 items-center justify-center rounded border border-gray-400 text-xl hover:border-[#DB4444] hover:text-[#DB4444]">
                    <FaHeart />
                </button>
                </div>

                <div className="rounded border border-gray-400">
                <div className="flex gap-5 border-b border-gray-400 p-5">
                    <FaTruck className="mt-1 text-3xl" />
                    <div>
                    <h3 className="mb-2 text-base font-medium">Free Delivery</h3>
                    <p className="text-xs font-medium underline">
                        Enter your postal code for Delivery Availability
                    </p>
                    </div>
                </div>

                <div className="flex gap-5 p-5">
                    <FaUndo className="mt-1 text-3xl" />
                    <div>
                    <h3 className="mb-2 text-base font-medium">Return Delivery</h3>
                    <p className="text-xs font-medium">
                        Free 30 Days Delivery Returns. <span className="underline">Details</span>
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </section>

            <section>
            <div className="mb-14 flex items-center gap-4">
                <span className="h-10 w-5 rounded bg-[#DB4444]" />
                <h2 className="font-semibold text-[#DB4444]">Related Item</h2>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {this.relatedItems.map((item) => this.renderRelatedCard(item))}
            </div>
            </section>
        </div>
        );
    }
}

export default DetailItem;
