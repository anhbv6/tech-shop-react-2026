import React from "react";

class Account extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        firstName: "Md",
        lastName: "Rimel",
        email: "rimel1111@gmail.com",
        address: "Kingston, 5236, United State",
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
        };
    }

    menuGroups = [
        {
        title: "Manage My Account",
        items: [
            { id: 1, label: "My Profile", active: true },
            { id: 2, label: "Address Book" },
            { id: 3, label: "My Payment Options" },
        ],
        },
        {
        title: "My Orders",
        items: [
            { id: 4, label: "My Returns" },
            { id: 5, label: "My Cancellations" },
        ],
        },
        {
        title: "My WishList",
        items: [],
        },
    ];

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    renderInput(label, name, type = "text", placeholder = "") {
        return (
        <div>
            <label className="mb-2 block text-base font-medium">{label}</label>
            <input
            type={type}
            name={name}
            value={this.state[name]}
            onChange={this.handleChange}
            placeholder={placeholder}
            className="h-[50px] w-full rounded bg-gray-100 px-4 text-base text-gray-500 outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-red-200"
            />
        </div>
        );
    }

    renderMenu() {
        return (
        <aside className="w-full lg:w-[240px]">
            {this.menuGroups.map((group) => (
            <div key={group.title} className="mb-8">
                <h3 className="mb-4 text-base font-semibold">{group.title}</h3>

                {group.items.length > 0 && (
                <div className="space-y-3 pl-8">
                    {group.items.map((item) => (
                    <button
                        key={item.id}
                        className={`block text-left text-base transition hover:text-[#DB4444] ${
                        item.active ? "text-[#DB4444]" : "text-gray-500"
                        }`}
                    >
                        {item.label}
                    </button>
                    ))}
                </div>
                )}
            </div>
            ))}
        </aside>
        );
    }

    render() {
        return (
        <div className="min-h-screen bg-white px-6 py-20 text-black md:px-16 lg:px-24 xl:px-32">
            <div className="mb-20 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3 text-sm">
                <span className="text-gray-400">Home</span>
                <span className="text-gray-400">/</span>
                <span>My Account</span>
            </div>

            <p className="text-sm">
                Welcome! <span className="text-[#DB4444]">Md Rimel</span>
            </p>
            </div>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[240px_1fr]">
            {this.renderMenu()}

            <section className="rounded bg-white px-8 py-10 shadow-[0_1px_14px_rgba(0,0,0,0.08)] md:px-20 md:py-12">
                <h1 className="mb-6 text-xl font-medium text-[#DB4444]">Edit Your Profile</h1>

                <div className="mb-6 grid grid-cols-1 gap-8 md:grid-cols-2">
                {this.renderInput("First Name", "firstName")}
                {this.renderInput("Last Name", "lastName")}
                </div>

                <div className="mb-6 grid grid-cols-1 gap-8 md:grid-cols-2">
                {this.renderInput("Email", "email", "email")}
                {this.renderInput("Address", "address")}
                </div>

                <div className="mb-8">
                <h2 className="mb-3 text-base font-medium">Password Changes</h2>

                <div className="space-y-4">
                    <input
                    type="password"
                    name="currentPassword"
                    value={this.state.currentPassword}
                    onChange={this.handleChange}
                    placeholder="Current Password"
                    className="h-[50px] w-full rounded bg-gray-100 px-4 text-base outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-red-200"
                    />
                    <input
                    type="password"
                    name="newPassword"
                    value={this.state.newPassword}
                    onChange={this.handleChange}
                    placeholder="New Password"
                    className="h-[50px] w-full rounded bg-gray-100 px-4 text-base outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-red-200"
                    />
                    <input
                    type="password"
                    name="confirmPassword"
                    value={this.state.confirmPassword}
                    onChange={this.handleChange}
                    placeholder="Confirm New Password"
                    className="h-[50px] w-full rounded bg-gray-100 px-4 text-base outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-red-200"
                    />
                </div>
                </div>

                <div className="flex flex-col items-stretch justify-end gap-4 sm:flex-row sm:items-center">
                <button className="h-12 px-4 text-base font-medium hover:text-[#DB4444]">
                    Cancel
                </button>
                <button className="h-14 rounded bg-[#DB4444] px-12 text-base font-medium text-white hover:bg-red-600">
                    Save Changes
                </button>
                </div>
            </section>
            </div>
        </div>
        );
    }
}

export default Account;
