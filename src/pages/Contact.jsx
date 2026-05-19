import React from "react";
import { FaPhone, FaRegEnvelope } from "react-icons/fa";

class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            phone: "",
            message: "",
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit contact", this.state);
    }

    render() { 
        return (
            <div className="bg-white px-6 py-20 text-black md:px-16 lg:px-24 xl:px-36">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[340px_1fr]">
                    <aside className="rounded bg-white px-8 py-10 shadow-[0_1px_14px_rgba(0,0,0,0.08)]">
                        <div className="pb-8">
                            <div className="pb-6 flex items-center gap-4">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-white">
                                <FaPhone size={20}/>
                                </div>
                                <h3 className="text-base font-medium">Call To Us</h3>
                            </div>

                            <p className="pb-4 text-sm leading-6">We are available 24/7, 7 days a week.</p>
                            <p className="text-sm leading-6">Phone: +8801611112222</p>
                        </div>

                        <div className="h-px w-full bg-gray-300" />

                        <div className="pt-8">
                            <div className="pb-6 flex items-center gap-4">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-white">
                                <FaRegEnvelope size={20}/>
                                </div>
                                <h3 className="text-base font-medium">Write To US</h3>
                            </div>

                            <p className="pb-4 max-w-[230px] text-sm leading-6">
                                Fill out our form and we will contact you within 24 hours.
                            </p>
                            <p className="pb-4 text-sm leading-6">Emails: customer@exclusive.com</p>
                            <p className="text-sm leading-6">Emails: support@exclusive.com</p>
                        </div>
                    </aside>

                    <section className="rounded bg-white px-8 py-10 shadow-[0_1px_14px_rgba(0,0,0,0.08)]">
                        <div className="pb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                            <input
                                type="text"
                                name="name"
                                value={this.state.name}
                                onChange={this.handleChange}
                                placeholder="Your Name *"
                                className="h-14 rounded bg-gray-100 px-4 text-sm outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-red-200"
                            />
                            <input
                                type="email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                placeholder="Your Email *"
                                className="h-14 rounded bg-gray-100 px-4 text-sm outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-red-200"
                            />
                            <input
                                type="text"
                                name="phone"
                                value={this.state.phone}
                                onChange={this.handleChange}
                                placeholder="Your Phone *"
                                className="h-14 rounded bg-gray-100 px-4 text-sm outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-red-200"
                            />
                        </div>

                        <textarea
                            name="message"
                            value={this.state.message}
                            onChange={this.handleChange}
                            placeholder="Your Massage"
                            className="pb-8 h-48 w-full resize-none rounded bg-gray-100 px-4 py-4 text-sm outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-red-200 md:h-56"
                        />

                        <div className="flex justify-end pt-5">
                            <button className="h-14 rounded bg-[#DB4444] px-12 text-sm font-medium text-white hover:bg-red-600" onClick={this.handleSubmit}>
                                Send Massage
                            </button>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}
 
export default Contact;