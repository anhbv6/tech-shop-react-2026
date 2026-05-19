import React from "react";
import { FaInstagram, FaLinkedinIn, FaMoneyBillWave, FaRegBuilding, FaShieldAlt, FaStore, FaTruck, FaTwitter } from "react-icons/fa";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { IoBagHandleOutline } from "react-icons/io5";

class About extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeStat: 1,
            activeSlide: 2,
        };
    }
    
    story = {
        title: "Our Story",
        image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=900&auto=format&fit=crop",
        paragraphs: [
        "Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 millions customers across the region.",
        "Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assortment in categories ranging from consumer.",
        ],
    };

    stats = [
        {
            id: 1,
            icon: <FaStore />,
            value: "10.5k",
            label: "Sellers active our site",
        },
        {
            id: 2,
            icon: <FaMoneyBillWave />,
            value: "33k",
            label: "Monthly Product Sale",
            active: true,
        },
        {
            id: 3,
            icon: <IoBagHandleOutline />,
            value: "45.5k",
            label: "Customer active in our site",
        },
        {
            id: 4,
            icon: <FaRegBuilding />,
            value: "25k",
            label: "Annual gross sale in our site",
        },
    ];

    members = [
        {
            id: 1,
            name: "Tom Cruise",
            position: "Founder & Chairman",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500&auto=format&fit=crop",
        },
        {
            id: 2,
            name: "Emma Watson",
            position: "Managing Director",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop",
        },
        {
            id: 3,
            name: "Will Smith",
            position: "Product Designer",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop",
        },
    ];

    services = [
        {
            id: 1,
            icon: <FaTruck />,
            title: "FREE AND FAST DELIVERY",
            desc: "Free delivery for all orders over $140",
        },
        {
            id: 2,
            icon: <FaHeadphonesSimple />,
            title: "24/7 CUSTOMER SERVICE",
            desc: "Friendly 24/7 customer support",
        },
        {
            id: 3,
            icon: <FaShieldAlt />,
            title: "MONEY BACK GUARANTEE",
            desc: "We return money within 30 days",
        },
    ];

    renderStatCard(item, index) {
        const isActive = item.active || this.state.activeStat === index;

        return (
            <div
                key={item.id}
                onMouseEnter={() => this.setState({ activeStat: index })}
                className={`flex h-[145px] flex-col items-center justify-center rounded border text-center transition-all duration-300 ${
                isActive
                    ? "border-[#DB4444] bg-[#DB4444] text-white shadow-[0_2px_10px_rgba(219,68,68,0.25)]"
                    : "border-gray-300 bg-white text-black hover:border-[#DB4444] hover:bg-[#DB4444] hover:text-white"
                }`}
            >
                <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full text-xl ${
                    isActive ? "bg-white/35" : "bg-gray-300"
                }`}
                >
                    <div
                        className={`flex h-9 w-9 items-center justify-center rounded-full ${
                        isActive ? "bg-white text-black" : "bg-black text-white"
                        }`}
                    >
                        {item.icon}
                    </div>
                </div>
                <h3 className="text-2xl font-bold leading-none">{item.value}</h3>
                <p className="mt-2 text-xs">{item.label}</p>
            </div>
        );
    }


    renderMemberCard(member) {
        return (
        <div key={member.id}>
            <div className="mb-6 flex h-[360px] items-end justify-center overflow-hidden rounded bg-gray-100">
                <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover object-top"
                />
            </div>
            <h3 className="text-[24px] font-medium leading-none">{member.name}</h3>
            <p className="mt-2 text-sm">{member.position}</p>
            <div className="mt-4 flex items-center gap-4 text-base">
                <FaTwitter className="cursor-pointer hover:text-[#DB4444]" />
                <FaInstagram className="cursor-pointer hover:text-[#DB4444]" />
                <FaLinkedinIn className="cursor-pointer hover:text-[#DB4444]" />
            </div>
        </div>
        );
    }

    renderService(service) {
        return (
        <div key={service.id} className="flex flex-col items-center text-center">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gray-300">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-2xl text-white">
                {service.icon}
            </div>
            </div>
            <h3 className="mb-2 text-[20px] font-semibold uppercase leading-none">
            {service.title}
            </h3>
            <p className="text-sm text-gray-600">{service.desc}</p>
        </div>
        );
    }

    render() { 
        return (
            <div className="bg-white text-black">
                <div className="px-6 py-16 md:px-16 lg:px-20 xl:px-32">
                <section className="mb-32 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
                    <div className="max-w-[560px]">
                    <h1 className="mb-10 text-[54px] font-semibold leading-tight tracking-[0.04em]">
                        {this.story.title}
                    </h1>
                    <div className="space-y-6 text-[16px] leading-7">
                        {this.story.paragraphs.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                    </div>

                    <div className="h-[510px] overflow-hidden rounded bg-[#f2a0b8]">
                    <img
                        src={this.story.image}
                        alt="Shopping customers"
                        className="h-full w-full object-cover"
                    />
                    </div>
                </section>

                <section className="mb-32 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {this.stats.map((item, index) => this.renderStatCard(item, index))}
                </section>

                <section className="mb-4 grid grid-cols-1 gap-10 md:grid-cols-3">
                    {this.members.map((member) => this.renderMemberCard(member))}
                </section>

                <div className="mb-28 flex justify-center gap-3">
                    {[0, 1, 2, 3, 4].map((dot) => (
                    <button
                        key={dot}
                        onClick={() => this.setState({ activeSlide: dot })}
                        className={`h-3 w-3 rounded-full transition-all ${
                        this.state.activeSlide === dot
                            ? "border-2 border-gray-300 bg-[#DB4444]"
                            : "bg-gray-300"
                        }`}
                        aria-label={`Slide ${dot + 1}`}
                    />
                    ))}
                </div>

                <section className="grid grid-cols-1 gap-12 pb-10 md:grid-cols-3">
                    {this.services.map((service) => this.renderService(service))}
                </section>
                </div>
            </div>
        );
    }
}
 
export default About;