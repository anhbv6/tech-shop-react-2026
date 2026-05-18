import React from "react";

class Signin extends React.Component {
    render() {
        return (
            <div className="px-36 py-8 w-full flex items-center bg-white">
                {/* Left image */}
                <div className="w-[52%] flex items-center justify-start">
                <img
                    src="https://lifelinemedicalsupply.net/static/media/authimg.3e68db7c28df1d985f02.png"
                    alt="Shopping"
                    className="w-full h-[565px] object-cover"
                />
                </div>

                {/* Right form */}
                <div className="w-[48%] flex items-center justify-center">
                <div className="w-[270px]">
                    <h1 className="text-[28px] font-medium tracking-[1px] text-black mb-[14px]">
                    Create an account
                    </h1>

                    <p className="text-[13px] text-black mb-7">
                    Enter your details below
                    </p>

                    <div className="flex flex-col gap-6 mb-7">
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full border-0 border-b border-[#9b9b9b] pb-2 text-[13px] outline-none placeholder:text-[#9b9b9b]"
                    />

                    <input
                        type="text"
                        placeholder="Email or Phone Number"
                        className="w-full border-0 border-b border-[#9b9b9b] pb-2 text-[13px] outline-none placeholder:text-[#9b9b9b]"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full border-0 border-b border-[#9b9b9b] pb-2 text-[13px] outline-none placeholder:text-[#9b9b9b]"
                    />
                    </div>

                    <button className="w-full h-[41px] bg-[#e34444] text-white text-[13px] rounded-[3px] mb-3 hover:bg-[#d63c3c] transition">
                    Create Account
                    </button>

                    <button className="w-full h-10 border border-[#c9c9c9] rounded-[3px] bg-white text-[#222] text-[13px] flex items-center justify-center gap-3 hover:bg-gray-50 transition">
                    <img
                        src="https://cmctelecom.vn/wp-content/uploads/2024/01/png-transparent-google-logo-google-text-trademark-logo.png"
                        alt="Google"
                        className="w-5 h-5 object-contain"
                    />
                    <span>Sign up with Google</span>
                    </button>

                    <div className="mt-7 flex justify-center gap-3 text-[13px] text-[#555]">
                    <span>Already have account?</span>
                    <a href="#" className="text-[#222] font-medium underline">
                        Log in
                    </a>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Signin;