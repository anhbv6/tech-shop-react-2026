import React from "react";
import { useAuthStore } from "../store/authStore";
import { withRouter } from "../app/router/withRouter";

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            loading: false,
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    goTo = (path) => {
        this.props.router.navigate(path)
    }

    handleSubmit = async (e) => {
        try {
            this.setState({
                loading: true,
                err: "",
            })

            await useAuthStore.getState().login({
                username: this.state.username,
                password: this.state.password,
            })

            this.setState({
                loading: false,
            });

            this.goTo("/home")
        } catch (err) {
            this.setState({
                loading: false,
                err: err.message || "Login failed",
            });
        }
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
                        <h1 className="text-4xl font-medium tracking-[1px] text-black pb-4">Log in to Missing</h1>
                        <p className="text-base text-black pb-12">Enter your details below</p>

                        <div className="flex flex-col gap-6 pb-7">
                            <input
                                type="username"
                                name="username"
                                placeholder="Esername or Phone Number"
                                className="w-full h-8 border-0 border-b border-[#9b9b9b] pb-2 text-base outline-none placeholder:text-[#9b9b9b]"
                                onChange={this.handleChange}
                                value={this.state.username}
                            />

                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                onChange={this.handleChange}
                                value={this.state.password}
                                className="w-full h-8 border-0 border-b border-[#9b9b9b] pb-2 text-base outline-none placeholder:text-[#9b9b9b]"
                            />
                        </div>

                        <div className="flex flex-row gap-4 pb-4 justify-between items-center">
                            <button onClick={() => this.handleSubmit()} className="min-w-[143px] h-14 bg-[#e34444] text-white text-[13px] rounded-[3px] mb-3 hover:bg-[#d63c3c] transition cursor-pointer">Log In</button>
                            <span className="text-[#e34444] cursor-pointer">Forget Password?</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default withRouter(Login);