import React from "react";
import { FcGoogle } from "react-icons/fc";
import { withRouter } from "../app/router/withRouter";
import { PATHS } from "../app/router/paths";

class Signin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            password: "",
        }
    }

    goToLogin = () => {
        this.props.router.navigate(PATHS.LOGIN)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("signin", this.state);
    }

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
                <div className="min-w-[340px]">
                    <h1 className="text-4xl font-medium tracking-[1px] text-black pb-4">Create an account</h1>
                    <p className="text-base text-black pb-12">Enter your details below</p>

                    <div className="flex flex-col gap-6 pb-7">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            onChange={this.handleChange}
                            value={this.state.name}
                            className="w-full h-8 border-0 border-b border-[#9b9b9b] pb-2 text-base outline-none placeholder:text-[#9b9b9b]"
                        />

                        <input
                            type="text"
                            name="email"
                            onChange={this.handleChange}
                            value={this.state.email}
                            placeholder="Email or Phone Number"
                            className="w-full h-8 border-0 border-b border-[#9b9b9b] pb-2 text-base outline-none placeholder:text-[#9b9b9b]"
                        />

                        <input
                            type="password"
                            name="password"
                            onChange={this.handleChange}
                            value={this.state.password}
                            placeholder="Password"
                            className="w-full h-8 border-0 border-b border-[#9b9b9b] pb-2 text-base outline-none placeholder:text-[#9b9b9b]"
                        />
                    </div>

                    <div className="flex flex-col gap-4 pb-4">
                        <button onClick={this.handleSubmit} className="w-full h-14 bg-[#e34444] text-white text-[13px] rounded-[3px] mb-3 hover:bg-[#d63c3c] transition cursor-pointer">Create Account</button>
                        <button className="w-full h-14 border border-[#c9c9c9] rounded-[3px] bg-white text-[#222] text-[13px] flex items-center justify-center gap-3 hover:bg-gray-50 transition cursor-pointer">
                            <FcGoogle size={20}/>
                            <span>Sign up with Google</span>
                        </button>
                    </div>

                    <div className="mt-7 flex justify-center gap-3 text-[13px] text-[#555]">
                    <span>Already have account?</span>
                    <div className="text-[#222] font-medium underline cursor-pointer" onClick={this.goToLogin}>
                        Log in
                    </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Signin);