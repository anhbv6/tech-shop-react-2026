import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

class FlashSaleSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            timeLeft: props.time ? (props.time || 0) * 24 * 60 * 60 : null, // convert ngày -> giây
        };
    }

    handleScroll = (direction) => {
        const { scrollRef } = this.props;

        if (!scrollRef?.current) return;

        const card = scrollRef.current.firstChild;

        const amount = card.offsetWidth + 32;

        scrollRef.current.scrollBy({
            left: direction === "left" ? -amount : amount,
            behavior: "smooth",
        });
    };

    componentDidMount() {
        if (!this.props.time) return;

        this.interval = setInterval(() => {
            this.setState((prev) => {
                if (prev.timeLeft <= 0) {
                    clearInterval(this.interval);
                    return { timeLeft: 0 };
                }

                return { timeLeft: prev.timeLeft - 1 };
            });
        }, 1000);
    }

    componentDidUpdate(prevProps) {
        // nếu props.time thay đổi -> reset countdown
        if (prevProps.time !== this.props.time) {
            clearInterval(this.interval);

            if (!this.props.time) {
                this.setState({ timeLeft: null });
                return;
            }

            this.setState({
                timeLeft: this.props.time * 24 * 60 * 60,
            });

            this.interval = setInterval(() => {
                this.setState((prev) => {
                    if (prev.timeLeft <= 0) {
                        clearInterval(this.interval);
                        return { timeLeft: 0 };
                    }

                    return { timeLeft: prev.timeLeft - 1 };
                });
            }, 1000);
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    formatTime = (seconds) => {
        const days = Math.floor(seconds / (24 * 3600));
        const hours = Math.floor((seconds % (24 * 3600)) / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;

        return {
            days: String(days).padStart(2, "0"),
            hours: String(hours).padStart(2, "0"),
            minutes: String(minutes).padStart(2, "0"),
            seconds: String(secs).padStart(2, "0"),
        };
    };

    render() {
        const { type, children, title, description, time  } = this.props;
        const { timeLeft } = this.state;

        const t = timeLeft !== null ? this.formatTime(timeLeft) : null;

        return (
            <div className="flex flex-col">
                {/* header top */}
                <div className="flex gap-4 items-center h-10">
                    <span className="w-5 h-full bg-[#DB4444] rounded"></span>
                    <span className="text-[#DB4444] font-medium text-base">{title}</span>
                </div>

                {/* title + actions */}
                <div className="flex justify-between items-center pt-4">
                    <div className="flex items-end gap-6 h-12">
                        <h1 className="text-3xl font-bold">{description}</h1>
                        {time && t && (<div className="flex gap-4 text-sm font-semibold">
                            <div className="text-center">
                                <div className="text-xs text-gray-500">Days</div>
                                <div className="text-2xl font-bold">{t.days}</div>
                            </div>
                            <span className="self-end text-2xl">:</span>
                            <div className="text-center">
                                <div className="text-xs text-gray-500">Hours</div>
                                <div className="text-2xl font-bold">{t.hours}</div>
                            </div>
                            <span className="self-end text-2xl">:</span>
                            <div className="text-center">
                                <div className="text-xs text-gray-500">Min</div>
                                <div className="text-2xl font-bold">{t.minutes}</div>
                            </div>
                            <span className="self-end text-2xl">:</span>
                            <div className="text-center">
                                <div className="text-xs text-gray-500">Sec</div>
                                <div className="text-2xl font-bold">{t.seconds}</div>
                            </div>
                        </div>)}
                    </div>

                    <div className="flex items-center gap-4">
                        {type === "viewAll" && (
                            <button className="px-4 py-2 bg-[#DB4444] text-white rounded cursor-pointer">
                                View All
                            </button>
                        )}

                        {type === "scroll" && (
                            <div className="flex gap-2">
                                <button onClick={() => this.handleScroll("left")} className="w-8 h-8 rounded-full bg-gray-200 relative cursor-pointer">
                                    <FaArrowLeft className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
                                </button>
                                <button onClick={() => this.handleScroll("right")} className="w-8 h-8 rounded-full bg-gray-200 relative cursor-pointer">
                                    <FaArrowRight className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* content */}
                <div className="pt-10">{children}</div>
            </div>
        );
    }
}

export default FlashSaleSection;