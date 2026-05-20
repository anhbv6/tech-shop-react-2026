import React from "react";
import { FaTimes } from "react-icons/fa";

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        couponCode: "",
        cartItems: [
            {
            id: 1,
            name: "LCD Monitor",
            price: 650,
            quantity: 1,
            image:
                "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=300&auto=format&fit=crop",
            },
            {
            id: 2,
            name: "H1 Gamepad",
            price: 550,
            quantity: 2,
            image:
                "https://images.unsplash.com/photo-1617096200347-cb04ae810b1d?q=80&w=300&auto=format&fit=crop",
            },
        ],
        };
    }

    handleQuantityChange = (id, value) => {
        const quantity = Math.max(1, Number(value));

        this.setState((prevState) => ({
        cartItems: prevState.cartItems.map((item) =>
            item.id === id ? { ...item, quantity } : item
        ),
        }));
    };

    handleRemoveItem = (id) => {
        this.setState((prevState) => ({
        cartItems: prevState.cartItems.filter((item) => item.id !== id),
        }));
    };

    handleCouponChange = (event) => {
        this.setState({ couponCode: event.target.value });
    };

    getSubtotal = () => {
        return this.state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
        );
    };

    renderCartRow(item) {
        return (
        <div
            key={item.id}
            className="grid min-h-[100px] grid-cols-4 items-center rounded bg-white px-8 shadow-[0_1px_13px_rgba(0,0,0,0.05)]"
        >
            <div className="flex items-center gap-5">
            <div className="relative h-14 w-16 shrink-0">
                <button
                onClick={() => this.handleRemoveItem(item.id)}
                className="absolute -left-2 -top-1 z-10 flex h-5 w-5 items-center justify-center rounded-full bg-[#DB4444] text-[10px] text-white"
                >
                <FaTimes />
                </button>
                <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-contain"
                />
            </div>
            <span className="text-base">{item.name}</span>
            </div>

            <div className="text-base">${item.price}</div>

            <div>
            <input
                type="number"
                min="1"
                value={String(item.quantity).padStart(2, "0")}
                onChange={(event) => this.handleQuantityChange(item.id, event.target.value)}
                className="h-11 w-16 rounded border border-gray-400 px-3 text-center text-sm outline-none focus:border-[#DB4444]"
            />
            </div>

            <div className="text-base">${item.price * item.quantity}</div>
        </div>
        );
    }

    render() {
        const subtotal = this.getSubtotal();

        return (
        <div className="min-h-screen bg-white px-6 py-16 text-black md:px-16 lg:px-24 xl:px-32">
            <div className="mb-20 flex items-center gap-3 text-sm">
            <span className="text-gray-400">Home</span>
            <span className="text-gray-400">/</span>
            <span>Cart</span>
            </div>

            <div className="mb-10 grid h-[72px] grid-cols-4 items-center rounded bg-white px-8 shadow-[0_1px_13px_rgba(0,0,0,0.05)]">
            <span>Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Subtotal</span>
            </div>

            <div className="mb-8 space-y-10">
            {this.state.cartItems.map((item) => this.renderCartRow(item))}
            </div>

            <div className="mb-20 flex flex-col justify-between gap-5 sm:flex-row">
            <button className="h-14 rounded border border-gray-400 px-12 text-base font-medium hover:border-[#DB4444] hover:text-[#DB4444]">
                Return To Shop
            </button>
            <button className="h-14 rounded border border-gray-400 px-12 text-base font-medium hover:border-[#DB4444] hover:text-[#DB4444]">
                Update Cart
            </button>
            </div>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_470px]">
            <div className="flex flex-col gap-4 sm:flex-row">
                <input
                type="text"
                value={this.state.couponCode}
                onChange={this.handleCouponChange}
                placeholder="Coupon Code"
                className="h-14 w-full rounded border border-black px-5 text-base outline-none placeholder:text-gray-500 sm:w-[300px]"
                />
                <button className="h-14 rounded bg-[#DB4444] px-12 text-base font-medium text-white hover:bg-red-600">
                Apply Coupon
                </button>
            </div>

            <div className="rounded border-2 border-black px-6 py-8">
                <h2 className="mb-6 text-xl font-medium">Cart Total</h2>

                <div className="flex justify-between border-b border-gray-400 py-4 text-base">
                <span>Subtotal:</span>
                <span>${subtotal}</span>
                </div>
                <div className="flex justify-between border-b border-gray-400 py-4 text-base">
                <span>Shipping:</span>
                <span>Free</span>
                </div>
                <div className="flex justify-between py-4 text-base">
                <span>Total:</span>
                <span>${subtotal}</span>
                </div>

                <div className="mt-4 flex justify-center">
                <button className="h-14 rounded bg-[#DB4444] px-12 text-base font-medium text-white hover:bg-red-600">
                    Procees to checkout
                </button>
                </div>
            </div>
            </div>
        </div>
        );
    }
}

export default Cart;
