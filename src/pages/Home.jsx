import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FlashSaleSection from "../components/FlashSaleSection";
import { FaArrowRight, FaArrowUp, FaCamera, FaCheckCircle, FaDesktop, FaGamepad, FaHeadphones, FaKeyboard, FaLaptop, FaLongArrowAltRight, FaMobileAlt, FaMouse, FaPrint, FaRegStar, FaSpeakerDeck, FaStar, FaStarHalfAlt, FaTabletAlt, FaTruck, FaTv } from "react-icons/fa";
import { CiHeart, CiStar } from "react-icons/ci";
import { IoEyeOutline, IoWatchOutline } from "react-icons/io5";
import './style.css';
import CartItem from "../components/CartItem";

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            index: 0,
            showAllProducts: false,
            showScrollTop: false,

            countdown: {
                days: 5,
                hours: 23,
                minutes: 59,
                seconds: 35,
            },
        };

        this.images = [
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1519608487953-e999c86e7455?q=80&w=1400&auto=format&fit=crop",
        ];

        this.flashSaleProducts = [
            {
                id: 1,
                name: "HAVIT HV-G92 Gamepad",
                price: 120,
                oldPrice: 160,
                discount: 40,
                rating: 4,
                reviews: 88,
                image: "https://picsum.photos/300/300?random=1",
            },
            {
                id: 2,
                name: "AK-900 Wired Keyboard",
                price: 960,
                oldPrice: 1160,
                discount: 35,
                rating: 3.5,
                reviews: 75,
                image: "https://picsum.photos/300/300?random=2",
            },
            {
                id: 3,
                name: "IPS LCD Gaming Monitor",
                price: 370,
                oldPrice: 400,
                discount: 30,
                rating: 5,
                reviews: 99,
                image: "https://picsum.photos/300/300?random=3",
            },
            {
                id: 4,
                name: "RGB Gaming Mouse",
                price: 80,
                oldPrice: 110,
                discount: 25,
                rating: 4.5,
                reviews: 120,
                image: "https://picsum.photos/300/300?random=4",
            },
            {
                id: 5,
                name: "Wireless Headphones",
                price: 220,
                oldPrice: 300,
                discount: 27,
                rating: 4,
                reviews: 64,
                image: "https://picsum.photos/300/300?random=5",
            },
            {
                id: 6,
                name: "Smart Watch Series 8",
                price: 540,
                oldPrice: 650,
                discount: 18,
                rating: 4.5,
                reviews: 210,
                image: "https://picsum.photos/300/300?random=6",
            },
            {
                id: 7,
                name: "Portable Bluetooth Speaker",
                price: 140,
                oldPrice: 180,
                discount: 22,
                rating: 4,
                reviews: 98,
                image: "https://picsum.photos/300/300?random=7",
            },
            {
                id: 8,
                name: "Gaming Laptop RTX 4060",
                price: 1450,
                oldPrice: 1700,
                discount: 15,
                rating: 5,
                reviews: 45,
                image: "https://picsum.photos/300/300?random=8",
            },
        ];

        this.categorys = [
            {label: "Woman’s Fashion", value: "womans"},
            {label: "Men’s Fashion", value: "mens"},
            {label: "Electronics", value: ""},
            {label: "Home & Lifestyle", value: ""},
            {label: "Medicine", value: ""},
            {label: "Sports & Outdoor", value: ""},
            {label: "Baby’s & Toys", value: ""},
            {label: "Groceries & Pets", value: ""},
            {label: "Health & Beauty", value: ""},
        ];

        this.categories = [
            {
                id: 1,
                name: "Phones",
                icon: <FaMobileAlt size={36} />,
            },
            {
                id: 2,
                name: "Computers",
                icon: <FaDesktop size={36} />,
            },
            {
                id: 3,
                name: "SmartWatch",
                icon: <IoWatchOutline size={36} />,
            },
            {
                id: 4,
                name: "Camera",
                icon: <FaCamera size={36} />,
            },
            {
                id: 5,
                name: "HeadPhones",
                icon: <FaHeadphones size={36} />,
            },
            {
                id: 6,
                name: "Gaming",
                icon: <FaGamepad size={36} />,
            },
            {
                id: 7,
                name: "Laptop",
                icon: <FaLaptop size={36} />,
            },
            {
                id: 8,
                name: "Keyboard",
                icon: <FaKeyboard size={36} />,
            },
            {
                id: 9,
                name: "Mouse",
                icon: <FaMouse size={36} />,
            },
            {
                id: 10,
                name: "Tablet",
                icon: <FaTabletAlt size={36} />,
            },
            {
                id: 11,
                name: "Television",
                icon: <FaTv size={36} />,
            },
            {
                id: 12,
                name: "Speaker",
                icon: <FaSpeakerDeck size={36} />,
            },
            {
                id: 13,
                name: "Printer",
                icon: <FaPrint size={36} />,
            },
        ];

        this.bestSellings = [
            {
                id: 1,
                name: "ASUS ROG Strix G16",
                price: 1499,
                oldPrice: 1699,
                discount: 12,
                rating: 5,
                reviews: 214,
                image: "https://picsum.photos/300/300?random=21",
            },
            {
                id: 2,
                name: "Apple AirPods Pro 2",
                price: 249,
                oldPrice: 299,
                discount: 17,
                rating: 4.5,
                reviews: 532,
                image: "https://picsum.photos/300/300?random=22",
            },
            {
                id: 3,
                name: "Logitech MX Master 3S",
                price: 99,
                oldPrice: 129,
                discount: 23,
                rating: 5,
                reviews: 301,
                image: "https://picsum.photos/300/300?random=23",
            },
            {
                id: 4,
                name: "Samsung Odyssey G5 Monitor",
                price: 399,
                oldPrice: 499,
                discount: 20,
                rating: 4.5,
                reviews: 187,
                image: "https://picsum.photos/300/300?random=24",
            },
            {
                id: 5,
                name: "Sony WH-1000XM5",
                price: 349,
                oldPrice: 399,
                discount: 13,
                rating: 5,
                reviews: 410,
                image: "https://picsum.photos/300/300?random=25",
            },
        ];

        this.scrollRef = React.createRef();
        this.categoryScrollRef = React.createRef();
        this.bestSelling = React.createRef();
    }

    handleSlideChange = (i) => {
        clearInterval(this.interval);

        this.setState({ index: i });

        this.interval = setInterval(() => {
            this.setState((prev) => ({
                index: (prev.index + 1) % this.images.length,
            }));
        }, 3000);
    };

    componentDidMount() {
        // AUTO SLIDE
        this.interval = setInterval(() => {
            this.setState((prev) => ({
                index: (prev.index + 1) % this.images.length,
            }));
        }, 3000);

        // COUNTDOWN
        this.startCountdown();

        // DRAG SCROLL PRODUCTS
        this.enableDragScroll(this.scrollRef.current);

        // DRAG SCROLL CATEGORIES
        this.enableDragScroll(this.categoryScrollRef.current);

        this.enableDragScroll(this.bestSelling.current);

        window.addEventListener("scroll", this.handleScroll);

        console.log("2.component did mount Home");
    }

    // componentDidUpdate() {
    //     console.log("3.component did update Home");
    // }

    componentWillUnmount() {
        console.log("4.component will un mount Home");
    }

    enableDragScroll = (slider) => {
        if (!slider) return;

        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener("mousedown", (e) => {
            isDown = true;

            slider.classList.add("cursor-grabbing");

            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener("mouseleave", () => {
            isDown = false;
        });

        slider.addEventListener("mouseup", () => {
            isDown = false;

            slider.classList.remove("cursor-grabbing");
        });

        slider.addEventListener("mousemove", (e) => {
            if (!isDown) return;

            e.preventDefault();

            const x = e.pageX - slider.offsetLeft;

            const walk = (x - startX) * 2;

            slider.scrollLeft = scrollLeft - walk;
        });
    };

    startCountdown = () => {
        this.countdownInterval = setInterval(() => {
            this.setState((prevState) => {
                let { days, hours, minutes, seconds } = prevState.countdown;

                if (seconds > 0) {
                    seconds--;
                } else {
                    seconds = 59;

                    if (minutes > 0) {
                        minutes--;
                    } else {
                        minutes = 59;

                        if (hours > 0) {
                            hours--;
                        } else {
                            hours = 23;

                            if (days > 0) {
                                days--;
                            } else {
                                clearInterval(this.countdownInterval);
                            }
                        }
                    }
                }

                return {
                    countdown: {
                        days,
                        hours,
                        minutes,
                        seconds,
                    },
                };
            });
        }, 1000);
    };

    handleScroll = () => {
        if (window.scrollY > 300) {
            this.setState({ showScrollTop: true });
        } else {
            this.setState({ showScrollTop: false });
        }
    };  

    scrollToTop = () => {
        const start = window.scrollY;
        const duration = 2200;

        let startTime = null;

        const easeInOutCubic = (t) => {
            return t < 0.5
                ? 4 * t * t * t
                : 1 - Math.pow(-2 * t + 2, 3) / 2;
        };

        const animateScroll = (currentTime) => {
            if (!startTime) startTime = currentTime;

            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            const ease = easeInOutCubic(progress);

            window.scrollTo(0, start * (1 - ease));

            if (progress < 1) {
                requestAnimationFrame(animateScroll);
            }
        };

        requestAnimationFrame(animateScroll);
    };

    componentWillUnmount() {
        clearInterval(this.interval);
        clearInterval(this.countdownInterval);
    }

    render() { 
        // console.log("5.render Home");
        return ( 
            <div className="px-36 relative">
                <div className="flex">
                    <div className="flex flex-col w-64 gap-4 pt-10 border-r border-[#B3B3B3]">
                        {this.categorys.map((item) => {
                            return (
                                <span className="text-[15px] font-normal cursor-pointer">{item.label}</span>
                            )
                        })}
                    </div>
                    <div className="flex-1 pt-10 pl-10">
                        <div className="overflow-hidden h-[333px] relative">
                            <div
                                className="flex h-full transition-transform duration-700 ease-in-out"
                                style={{
                                    transform: `translateX(-${this.state.index * 100}%)`,
                                }}
                            >
                                {this.images.map((img, index) => {
                                    return (
                                        <img
                                            key={index}
                                            src={img}
                                            alt=""
                                            className="min-w-full h-full object-cover"
                                        />
                                    );
                                })}
                            </div>
                            <div className="flex justify-center gap-2 mt-4 absolute bottom-2.5 left-2/4 -translate-x-1/2">
                                {this.images.map((_, i) => (
                                    <div
                                        key={i}
                                        onClick={() => this.handleSlideChange(i)}
                                        className={`w-2.5 h-2.5 rounded-full duration-300 cursor-pointer ${
                                            this.state.index === i
                                                ? "bg-[#DB4444] scale-110"
                                                : "bg-gray-300"
                                        }`}
                                    />
                                ))}
                            </div>
                            <div className="absolute bottom-16 left-16 flex gap-2 items-center text-white cursor-pointer">
                                <span className="pb-1 border-b-2 border-white font-semibold">Shop Now</span> 
                                <FaArrowRight />
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Today’s */}
                <div className="pt-20 pb-[60px] border-b border-[#B3B3B3]">
                    <FlashSaleSection 
                        title={"Today’s"}
                        description={"Flash Sales"}
                        type={this.state.showAllProducts ? "" : "scroll"}
                        scrollRef={this.scrollRef}
                        time={4}
                        children={
                            <div>
                                <div 
                                    ref={this.scrollRef} 
                                    className={
                                        this.state.showAllProducts ? 
                                        "grid grid-cols-4 gap-8" : 
                                        "flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth cursor-grab select-none"
                                    }>

                                    {this.flashSaleProducts.map((item) => (
                                        <CartItem data={item}/>
                                    ))}
                                </div>

                                <div className="flex justify-center mt-8 pt-16">
                                    <button
                                        onClick={() =>
                                            this.setState({
                                                showAllProducts: !this.state.showAllProducts,
                                            })
                                        }
                                        className="bg-[#DB4444] text-white px-6 py-2 rounded cursor-pointer"
                                    >
                                        {this.state.showAllProducts
                                            ? "Show Less"
                                            : "View All Products"}
                                    </button>
                                </div>
                            </div>
                        }
                    />
                </div>

                {/* Categories */}
                <div className="pt-20 pb-[60px] border-b border-[#B3B3B3]">
                    <FlashSaleSection 
                        title={"Categories"}
                        description={"Browse By Category"}
                        children={
                            <div 
                                ref={this.categoryScrollRef}
                                className="flex gap-8
                                    overflow-x-auto
                                    scrollbar-hide
                                    scroll-smooth
                                    cursor-grab"
                            >
                                {this.categories.map((item) => {
                                    return (
                                        <div 
                                            className="
                                            min-w-[170px]
                                            h-[145px]
                                            flex flex-col
                                            items-center
                                            justify-center
                                            gap-4
                                            border border-gray-300 rounded
                                            cursor-pointer
                                            hover:bg-[#DB4444]
                                            hover:text-white
                                            transition-all duration-300"
                                        >
                                            {item.icon}
                                            <span className="text-sm font-medium">
                                                {item.name}
                                            </span>
                                        </div>
                                    )
                                })}
                            </div>
                        }
                    />
                </div>

                {/* This Month */}
                <div className="pt-20 pb-[60px]">
                    <FlashSaleSection 
                        title={"This Month"}
                        description={"Best Selling Products"}
                        type={"viewAll"}
                        children={
                            <div 
                                ref={this.bestSelling} 
                                className={
                                    // this.state.showAllProducts ? 
                                    "grid grid-cols-5 gap-8" 
                                    // : 
                                    // "flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth cursor-grab select-none"
                                }>

                                {this.bestSellings.map((item) => (
                                    <CartItem data={item}/>
                                ))}
                            </div>
                        }
                    />
                </div>

                {/* Photo brand */}
                <div className="pt-20 pb-[60px]">
                    <div className="w-full bg-black px-16 py-12 flex items-center justify-between overflow-hidden">
                        {/* LEFT */}
                        <div className="flex flex-col gap-8 z-10">
                            
                            <span className="text-[#00FF66] font-semibold">
                                Categories
                            </span>

                            <h1 className="text-white text-5xl font-semibold leading-tight">
                                Enhance Your <br />
                                Music Experience
                            </h1>

                            {/* COUNTDOWN */}
                            <div className="flex gap-4">
                                {[
                                    {
                                        value: String(this.state.countdown.days).padStart(2, "0"),
                                        label: "Days",
                                    },
                                    {
                                        value: String(this.state.countdown.hours).padStart(2, "0"),
                                        label: "Hours",
                                    },
                                    {
                                        value: String(this.state.countdown.minutes).padStart(2, "0"),
                                        label: "Minutes",
                                    },
                                    {
                                        value: String(this.state.countdown.seconds).padStart(2, "0"),
                                        label: "Seconds",
                                    },
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="
                                            w-16 h-16 rounded-full
                                            bg-white
                                            flex flex-col
                                            items-center justify-center
                                        "
                                    >
                                        <span className="font-bold text-sm">
                                            {item.value}
                                        </span>

                                        <span className="text-[10px]">
                                            {item.label}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <button
                                className="
                                    bg-[#00FF66]
                                    text-white
                                    px-8 py-4
                                    rounded
                                    w-fit
                                    hover:opacity-90
                                    transition
                                    cursor-pointer
                                "
                            >
                                Buy Now!
                            </button>
                        </div>

                        {/* RIGHT */}
                        <div className="relative flex-1 flex justify-end">
                            
                            {/* glow */}
                            <div
                                className="
                                    absolute
                                    w-[500px]
                                    h-[500px]
                                    bg-white/20
                                    blur-3xl
                                    rounded-full
                                    top-1/2
                                    right-10
                                    -translate-y-1/2
                                "
                            />

                            <img
                                src="https://pngimg.com/d/jbl_PNG4.png"
                                alt=""
                                className="
                                    relative
                                    w-[600px]
                                    object-contain
                                "
                            />
                        </div>
                    </div>
                </div>

                {/* Featured */}
                <div className="pt-20 pb-[60px]">
                    <FlashSaleSection 
                        title={"Featured"}
                        description={"New Arrival"}
                        children={
                            <div className="grid grid-cols-2 gap-8">
                                
                                {/* LEFT BIG CARD */}
                                <div className="relative bg-black rounded overflow-hidden min-h-[600px]">
                                    
                                    <img
                                        src="https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=1200&auto=format&fit=crop"
                                        alt=""
                                        className="w-full h-full object-cover opacity-90"
                                    />

                                    {/* CONTENT */}
                                    <div className="absolute bottom-10 left-10 text-white z-10">
                                        <h2 className="text-3xl font-semibold mb-4">
                                            PlayStation 5
                                        </h2>

                                        <p className="text-sm text-gray-300 leading-6 mb-4">
                                            Black and White version of the PS5
                                            coming out on sale.
                                        </p>

                                        <button className="border-b border-white font-medium cursor-pointer hover:text-gray-300 transition">
                                            Shop Now
                                        </button>
                                    </div>

                                    {/* OVERLAY */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                </div>

                                {/* RIGHT SIDE */}
                                <div className="flex flex-col gap-8">

                                    {/* TOP CARD */}
                                    <div className="relative bg-black rounded overflow-hidden h-[285px]">
                                        
                                        <img
                                            src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop"
                                            alt=""
                                            className="w-full h-full object-cover opacity-90"
                                        />

                                        <div className="absolute bottom-10 left-10 text-white z-10">
                                            <h2 className="text-3xl font-semibold mb-3">
                                                Women’s Collections
                                            </h2>

                                            <p className="text-sm text-gray-300 leading-6 mb-4">
                                                Featured woman collections that
                                                give you another vibe.
                                            </p>

                                            <button className="border-b border-white font-medium cursor-pointer hover:text-gray-300 transition">
                                                Shop Now
                                            </button>
                                        </div>

                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                    </div>

                                    {/* BOTTOM 2 CARDS */}
                                    <div className="grid grid-cols-2 gap-8">

                                        {/* SPEAKER */}
                                        <div className="relative bg-black rounded overflow-hidden h-[285px]">
                                            
                                            <img
                                                src="https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=1200&auto=format&fit=crop"
                                                alt=""
                                                className="w-full h-full object-cover opacity-90"
                                            />

                                            <div className="absolute bottom-8 left-8 text-white z-10">
                                                <h2 className="text-3xl font-semibold mb-2">
                                                    Speakers
                                                </h2>

                                                <p className="text-sm text-gray-300 mb-3">
                                                    Amazon wireless speakers
                                                </p>

                                                <button className="border-b border-white font-medium cursor-pointer hover:text-gray-300 transition">
                                                    Shop Now
                                                </button>
                                            </div>

                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                        </div>

                                        {/* PERFUME */}
                                        <div className="relative bg-black rounded overflow-hidden h-[285px]">
                                            
                                            <img
                                                src="https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1200&auto=format&fit=crop"
                                                alt=""
                                                className="w-full h-full object-cover opacity-90"
                                            />

                                            <div className="absolute bottom-8 left-8 text-white z-10">
                                                <h2 className="text-3xl font-semibold mb-2">
                                                    Perfume
                                                </h2>

                                                <p className="text-sm text-gray-300 mb-3">
                                                    GUCCI INTENSE OUD EDP
                                                </p>

                                                <button className="border-b border-white font-medium cursor-pointer hover:text-gray-300 transition">
                                                    Shop Now
                                                </button>
                                            </div>

                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    />
                </div>


                <div className="pt-20 pb-28">
                    <div className="grid grid-cols-3 gap-10">

                        {/* DELIVERY */}
                        <div className="flex flex-col items-center text-center">
                            
                            {/* ICON */}
                            <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center mb-6">
                                <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center">
                                    <FaTruck className="text-white text-2xl" />
                                </div>
                            </div>

                            <h3 className="text-[20px] font-semibold uppercase mb-2 pt-6">
                                FREE AND FAST DELIVERY
                            </h3>

                            <p className="text-sm text-gray-600">
                                Free delivery for all orders over $140
                            </p>
                        </div>

                        {/* CUSTOMER SERVICE */}
                        <div className="flex flex-col items-center text-center">
                            
                            {/* ICON */}
                            <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center mb-6">
                                <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center">
                                    <FaHeadphones className="text-white text-2xl" />
                                </div>
                            </div>

                            <h3 className="text-[20px] font-semibold uppercase mb-2 pt-6">
                                24/7 CUSTOMER SERVICE
                            </h3>

                            <p className="text-sm text-gray-600">
                                Friendly 24/7 customer support
                            </p>
                        </div>

                        {/* MONEY BACK */}
                        <div className="flex flex-col items-center text-center">
                            
                            {/* ICON */}
                            <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center mb-6">
                                <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center">
                                    <FaCheckCircle className="text-white text-2xl" />
                                </div>
                            </div>

                            <h3 className="text-[20px] font-semibold uppercase mb-2 pt-6">
                                MONEY BACK GUARANTEE
                            </h3>

                            <p className="text-sm text-gray-600">
                                We return money within 30 days
                            </p>
                        </div>
                    </div>
                </div>

                <div className="absolute right-24 bottom-12">
                    <div className="w-8 h-8 rounded-full bg-gray-200 relative cursor-pointer" onClick={this.scrollToTop}>
                        <FaArrowUp className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Home;