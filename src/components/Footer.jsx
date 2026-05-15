import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoSendOutline } from "react-icons/io5";

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <footer className="bg-black text-[#FAFAFA] mt-10">
                <div className="px-28 pt-16 pb-14 grid grid-cols-5 gap-10">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-[28px] font-semibold leading-none">Missing</h3>
                        <span className="text-xl font-medium">Subscribe</span>
                        <span className="text-sm text-[#D9D9D9]">Get 10% off your first order</span>
                        <div className="h-12 w-full max-w-[230px] border border-[#B3B3B3] flex items-center px-3 rounded-sm">
                            <input
                                type="text"
                                placeholder="Enter your email"
                                className="bg-transparent outline-none text-sm flex-1 placeholder:text-[#7C7C7C]"
                            />
                            <IoSendOutline size={22} />
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="text-2xl font-medium">Support</h4>
                        <div className="flex flex-col gap-3 text-sm text-[#E9E9E9]">
                            <span>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</span>
                            <span>missing@gmail.com</span>
                            <span>+88015-88888-9999</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="text-2xl font-medium">Account</h4>
                        <div className="flex flex-col gap-3 text-sm text-[#E9E9E9]">
                            <span>My Account</span>
                            <span>Login / Register</span>
                            <span>Cart</span>
                            <span>Wishlist</span>
                            <span>Shop</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="text-2xl font-medium">Quick Link</h4>
                        <div className="flex flex-col gap-3 text-sm text-[#E9E9E9]">
                            <span>Privacy Policy</span>
                            <span>Terms Of Use</span>
                            <span>FAQ</span>
                            <span>Contact</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="text-2xl font-medium">Download App</h4>
                        <span className="text-xs text-[#9A9A9A]">Save $3 with App New User Only</span>
                        <div className="flex gap-2 items-start">
                            <div className="w-[82px] h-[82px] border border-[#B3B3B3] bg-white text-black text-xs flex items-center justify-center font-semibold">
                                QR
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="w-[116px] h-10 border border-[#B3B3B3] rounded-sm text-[10px] px-2 flex flex-col justify-center">
                                    <span className="text-[8px] leading-none text-[#C7C7C7]">GET IT ON</span>
                                    <span className="font-medium leading-tight">Google Play</span>
                                </div>
                                <div className="w-[116px] h-10 border border-[#B3B3B3] rounded-sm text-[10px] px-2 flex flex-col justify-center">
                                    <span className="text-[8px] leading-none text-[#C7C7C7]">Download on the</span>
                                    <span className="font-medium leading-tight">App Store</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-6 pt-1 text-lg">
                            <FaFacebookF />
                            <FaTwitter />
                            <AiFillInstagram />
                            <FaLinkedin />
                        </div>
                    </div>
                </div>

                <div className="border-t border-[#1A1A1A] text-center text-[#5C5C5C] text-sm py-4">
                    © Copyright ... 2026. All right reserved
                </div>
            </footer>
        );
    }
}
 
export default Footer;
