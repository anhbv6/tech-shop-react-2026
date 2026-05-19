import React from "react";
import { RiVisaLine } from "react-icons/ri";
import { RiMastercardLine } from "react-icons/ri";

const cartItems = [
  {
    id: 1,
    name: "LCD Monitor",
    price: 650,
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=120&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "H1 Gamepad",
    price: 1100,
    image: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?q=80&w=120&auto=format&fit=crop",
  },
];

class CheckOut extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            billingInfo: {
                firstName: "",
                companyName: "",
                address: "",
                apartment: "",
                city: "",
                phone: "",
                email: "",
            },

            paymentMethod: "cod",
            saveInfo: true,
            couponCode: "",
            cartItems: cartItems,
        };
    }

    subtotal = () => cartItems.reduce((sum, item) => sum + item.price, 0);

    handleChange = (e) => {
        const {name, value} = e.target;

        this.setState((prevState) => ({
            billingInfo: {
                ...prevState.billingInfo,
                [name]: value,
            }
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("checkout", this.state);
    }

    renderInput(label, name, required = false) {
        return (
            <div className="pb-6">
                <label className="pb-2 block text-sm text-gray-400">
                    {label}
                    {required && <span className="text-red-400">*</span>}
                </label>
                <input
                    type="text"
                    name={name}
                    value={this.state.billingInfo[name]}
                    onChange={this.handleChange}
                    className="h-12 w-full rounded bg-gray-100 px-4 text-sm outline-none focus:ring-2 focus:ring-red-200"
                />
            </div>
        );
    }

    render() {
        const subtotal = this.subtotal();

        return (
            <div className="bg-white px-6 py-14 text-black md:px-16 lg:px-36">
                {/* <div className="mb-16 flex items-center gap-3 text-sm text-gray-400">
                    <span>Account</span>
                    <span>/</span>
                    <span>My Account</span>
                    <span>/</span>
                    <span>Product</span>
                    <span>/</span>
                    <span>View Cart</span>
                    <span>/</span>
                    <span className="text-black">CheckOut</span>
                </div> */}

                <div className="flex flex-row justify-between gap-36">
                    <section className="w-full">
                        <h1 className="pb-10 text-4xl font-medium tracking-wide">Billing Details</h1>

                        {this.renderInput("First Name", "firstName", true)}
                        {this.renderInput("Company Name", "companyName")}
                        {this.renderInput("Street Address", "address", true)}
                        {this.renderInput("Apartment, floor, etc. (optional)", "apartment")}
                        {this.renderInput("Town/City", "city", true)}
                        {this.renderInput("Phone Number", "phone", true)}
                        {this.renderInput("Email Address", "email", true)}

                        <label className="mt-1 flex items-center gap-4 text-sm">
                            <input
                                type="checkbox"
                                checked={this.state.saveInfo}
                                onChange={() => this.setState({ saveInfo: !this.state.saveInfo })}
                                className="h-5 w-5 accent-[#e34444]"
                            />
                            <span>Save this information for faster check-out next time</span>
                        </label>
                    </section>

                    <aside className="pt-24 w-full">
                        <div className="pb-8 flex flex-col gap-8">
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex items-center justify-between gap-6">
                            <div className="flex items-center gap-5">
                                <img
                                src={item.image}
                                alt={item.name}
                                className="h-10 w-10 rounded object-cover"
                                />
                                <span className="text-sm">{item.name}</span>
                            </div>
                            <span className="text-sm">${item.price}</span>
                            </div>
                        ))}
                        </div>

                        <div className="text-sm">
                            <div className="flex justify-between border-b border-gray-300 py-4">
                                <span>Subtotal:</span>
                                <span>${subtotal}</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-300 py-4">
                                <span>Shipping:</span>
                                <span>Free</span>
                            </div>
                            <div className="flex justify-between py-4">
                                <span>Total:</span>
                                <span>${subtotal}</span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 text-sm pb-4">
                            <label className="flex cursor-pointer items-center justify-between gap-5">
                                <span className="flex items-center gap-4">
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        checked={this.state.paymentMethod === "bank"}
                                        onChange={() => this.setState({ paymentMethod: "bank" })}
                                        className="h-5 w-5 accent-black"
                                    />
                                    Bank
                                </span>
                                <span className="flex items-center gap-2 text-xs font-semibold">
                                    <span className="text-blue-700">
                                        <RiVisaLine size={20}/>
                                    </span>
                                    <span className="text-orange-500">
                                        <RiMastercardLine size={20}/>
                                    </span>
                                </span>
                            </label>

                            <label className="flex cursor-pointer items-center gap-4">
                                <input
                                type="radio"
                                name="paymentMethod"
                                checked={this.state.paymentMethod === "cod"}
                                onChange={() => this.setState({ paymentMethod: "cod" })}
                                className="h-5 w-5 accent-black"
                                />
                                Cash on delivery
                            </label>
                        </div>

                        <div className="pb-8 flex flex-col gap-4 sm:flex-row">
                            <input
                                type="text"
                                placeholder="Coupon Code"
                                value={this.state.couponCode}
                                onChange={(e)=> this.setState({
                                    couponCode: e.target.value
                                })}
                                className="h-14 flex-1 rounded border border-black px-5 text-sm outline-none"
                            />
                            <button className="h-14 rounded bg-[#e34444] px-10 text-sm font-medium text-white hover:bg-red-600">
                                Apply Coupon
                            </button>
                        </div>

                        <button onClick={this.handleSubmit} className="h-14 rounded bg-[#e34444] px-12 text-sm font-medium text-white hover:bg-red-600">
                        Place Order
                        </button>
                    </aside>
                </div>
            </div>
        );
    }
}

export default CheckOut;
