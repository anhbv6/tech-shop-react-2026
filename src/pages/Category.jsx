import React from "react";
import { FaEye, FaHeart, FaRegHeart, FaSearch, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FiChevronDown, FiChevronLeft, FiChevronRight, FiFilter } from "react-icons/fi";

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        searchText: "",
        selectedCategory: "All",
        selectedBrand: "All",
        sortBy: "popular",
        minPrice: "",
        maxPrice: "",
        currentPage: 1,
        perPage: 8,
        };
    }

    categories = ["All", "Gaming", "Monitor", "Keyboard", "Laptop", "Audio", "Fashion"];

    brands = ["All", "HAVIT", "ASUS", "AK", "IPS", "Gucci", "RGB"];

    products = [
        {
        id: 1,
        name: "HAVIT HV-G92 Gamepad",
        category: "Gaming",
        brand: "HAVIT",
        price: 120,
        oldPrice: 160,
        discount: "-40%",
        rating: 5,
        reviews: 88,
        image:
            "https://images.unsplash.com/photo-1617096200347-cb04ae810b1d?q=80&w=500&auto=format&fit=crop",
        },
        {
        id: 2,
        name: "AK-900 Wired Keyboard",
        category: "Keyboard",
        brand: "AK",
        price: 960,
        oldPrice: 1160,
        discount: "-35%",
        rating: 4.5,
        reviews: 75,
        image:
            "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=500&auto=format&fit=crop",
        },
        {
        id: 3,
        name: "IPS LCD Gaming Monitor",
        category: "Monitor",
        brand: "IPS",
        price: 370,
        oldPrice: 400,
        discount: "-30%",
        rating: 5,
        reviews: 99,
        image:
            "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=500&auto=format&fit=crop",
        },
        {
        id: 4,
        name: "RGB Liquid CPU Cooler",
        category: "Gaming",
        brand: "RGB",
        price: 160,
        oldPrice: 170,
        rating: 4.5,
        reviews: 65,
        image:
            "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?q=80&w=500&auto=format&fit=crop",
        },
        {
        id: 5,
        name: "ASUS FHD Gaming Laptop",
        category: "Laptop",
        brand: "ASUS",
        price: 960,
        oldPrice: 1160,
        discount: "-35%",
        rating: 5,
        reviews: 65,
        image:
            "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=500&auto=format&fit=crop",
        },
        {
        id: 6,
        name: "Gucci Duffle Bag",
        category: "Fashion",
        brand: "Gucci",
        price: 960,
        oldPrice: 1160,
        discount: "-35%",
        rating: 4,
        reviews: 48,
        image:
            "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=500&auto=format&fit=crop",
        },
        {
        id: 7,
        name: "GP11 Shooter USB Gamepad",
        category: "Gaming",
        brand: "HAVIT",
        price: 550,
        rating: 4.5,
        reviews: 54,
        image:
            "https://images.unsplash.com/photo-1605901309584-818e25960a8f?q=80&w=500&auto=format&fit=crop",
        },
        {
        id: 8,
        name: "Quilted Satin Jacket",
        category: "Fashion",
        brand: "Gucci",
        price: 750,
        rating: 4,
        reviews: 36,
        image:
            "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=500&auto=format&fit=crop",
        },
        {
        id: 9,
        name: "Noise Cancelling Headphone",
        category: "Audio",
        brand: "RGB",
        price: 320,
        oldPrice: 420,
        discount: "-24%",
        rating: 5,
        reviews: 91,
        image:
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=500&auto=format&fit=crop",
        },
        {
        id: 10,
        name: "Ultra Wide Curved Monitor",
        category: "Monitor",
        brand: "IPS",
        price: 820,
        rating: 4.5,
        reviews: 41,
        image:
            "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=500&auto=format&fit=crop",
        },
        {
        id: 11,
        name: "Mechanical Gaming Keyboard",
        category: "Keyboard",
        brand: "AK",
        price: 200,
        rating: 5,
        reviews: 65,
        image:
            "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=500&auto=format&fit=crop",
        },
        {
        id: 12,
        name: "Slim Business Laptop",
        category: "Laptop",
        brand: "ASUS",
        price: 1250,
        rating: 4.5,
        reviews: 29,
        image:
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=500&auto=format&fit=crop",
        },
    ];

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value, currentPage: 1 });
    };

    handleSelectCategory = (category) => {
        this.setState({ selectedCategory: category, currentPage: 1 });
    };

    clearFilter = () => {
        this.setState({
        searchText: "",
        selectedCategory: "All",
        selectedBrand: "All",
        sortBy: "popular",
        minPrice: "",
        maxPrice: "",
        currentPage: 1,
        });
    };

    getFilteredProducts = () => {
        const { searchText, selectedCategory, selectedBrand, minPrice, maxPrice, sortBy } = this.state;

        let result = this.products.filter((product) => {
        const matchSearch = product.name.toLowerCase().includes(searchText.toLowerCase());
        const matchCategory = selectedCategory === "All" || product.category === selectedCategory;
        const matchBrand = selectedBrand === "All" || product.brand === selectedBrand;
        const matchMinPrice = minPrice === "" || product.price >= Number(minPrice);
        const matchMaxPrice = maxPrice === "" || product.price <= Number(maxPrice);

        return matchSearch && matchCategory && matchBrand && matchMinPrice && matchMaxPrice;
        });

        if (sortBy === "priceLow") {
        result = [...result].sort((a, b) => a.price - b.price);
        }

        if (sortBy === "priceHigh") {
        result = [...result].sort((a, b) => b.price - a.price);
        }

        if (sortBy === "rating") {
        result = [...result].sort((a, b) => b.rating - a.rating);
        }

        if (sortBy === "newest") {
        result = [...result].sort((a, b) => b.id - a.id);
        }

        return result;
    };

    getCurrentPageProducts = () => {
        const filteredProducts = this.getFilteredProducts();
        const startIndex = (this.state.currentPage - 1) * this.state.perPage;
        const endIndex = startIndex + this.state.perPage;

        return filteredProducts.slice(startIndex, endIndex);
    };

    getTotalPages = () => {
        return Math.ceil(this.getFilteredProducts().length / this.state.perPage) || 1;
    };

    changePage = (page) => {
        const totalPages = this.getTotalPages();
        const nextPage = Math.min(Math.max(page, 1), totalPages);
        this.setState({ currentPage: nextPage });
    };

    renderStars(rating) {
        return (
        <div className="flex items-center gap-1 text-sm text-yellow-400">
            {[1, 2, 3, 4, 5].map((star) => {
            if (rating >= star) return <FaStar key={star} />;
            if (rating >= star - 0.5) return <FaStarHalfAlt key={star} />;
            return <FaStar key={star} className="text-gray-300" />;
            })}
        </div>
        );
    }

    renderProductCard(product) {
        return (
        <div key={product.id} className="group">
            <div className="relative mb-4 flex h-[250px] items-center justify-center overflow-hidden rounded bg-gray-100">
            {product.discount && (
                <span className="absolute left-3 top-3 rounded bg-[#DB4444] px-3 py-1 text-xs text-white">
                {product.discount}
                </span>
            )}

            <div className="absolute right-3 top-3 flex flex-col gap-2">
                <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white hover:text-[#DB4444]">
                <FaRegHeart />
                </button>
                <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white hover:text-[#DB4444]">
                <FaEye />
                </button>
            </div>

            <img
                src={product.image}
                alt={product.name}
                className="h-[165px] w-[190px] object-contain transition duration-300 group-hover:scale-105"
            />

            <button className="absolute bottom-0 left-0 h-10 w-full translate-y-full bg-black text-sm font-medium text-white transition duration-300 group-hover:translate-y-0">
                Add To Cart
            </button>
            </div>

            <h3 className="mb-2 text-base font-medium">{product.name}</h3>
            <div className="mb-2 flex items-center gap-3 text-base font-medium">
            <span className="text-[#DB4444]">${product.price}</span>
            {product.oldPrice && <span className="text-gray-400 line-through">${product.oldPrice}</span>}
            </div>
            <div className="flex items-center gap-2">
            {this.renderStars(product.rating)}
            <span className="text-sm text-gray-500">({product.reviews})</span>
            </div>
        </div>
        );
    }

    renderSidebar() {
        return (
        <aside className="rounded bg-white p-6 shadow-[0_1px_13px_rgba(0,0,0,0.06)]">
            <div className="mb-8 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded bg-[#DB4444] text-xl text-white">
                <FiFilter />
            </span>
            <h2 className="text-xl font-semibold">Filter</h2>
            </div>

            <div className="mb-8">
            <h3 className="mb-4 text-base font-medium">Categories</h3>
            <div className="space-y-3">
                {this.categories.map((category) => (
                <button
                    key={category}
                    onClick={() => this.handleSelectCategory(category)}
                    className={`block w-full rounded px-4 py-3 text-left text-sm transition ${
                    this.state.selectedCategory === category
                        ? "bg-[#DB4444] text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-[#DB4444]"
                    }`}
                >
                    {category}
                </button>
                ))}
            </div>
            </div>

            <div className="mb-8">
            <h3 className="mb-4 text-base font-medium">Brand</h3>
            <div className="relative">
                <select
                name="selectedBrand"
                value={this.state.selectedBrand}
                onChange={this.handleInputChange}
                className="h-12 w-full appearance-none rounded border border-gray-300 bg-white px-4 text-sm outline-none focus:border-[#DB4444]"
                >
                {this.brands.map((brand) => (
                    <option key={brand} value={brand}>
                    {brand}
                    </option>
                ))}
                </select>
                <FiChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2" />
            </div>
            </div>

            <div className="mb-8">
            <h3 className="mb-4 text-base font-medium">Price Range</h3>
            <div className="grid grid-cols-2 gap-3">
                <input
                type="number"
                name="minPrice"
                value={this.state.minPrice}
                onChange={this.handleInputChange}
                placeholder="Min"
                className="h-12 rounded border border-gray-300 px-4 text-sm outline-none focus:border-[#DB4444]"
                />
                <input
                type="number"
                name="maxPrice"
                value={this.state.maxPrice}
                onChange={this.handleInputChange}
                placeholder="Max"
                className="h-12 rounded border border-gray-300 px-4 text-sm outline-none focus:border-[#DB4444]"
                />
            </div>
            </div>

            <button
            onClick={this.clearFilter}
            className="h-12 w-full rounded border border-gray-400 text-sm font-medium hover:border-[#DB4444] hover:text-[#DB4444]"
            >
            Clear Filter
            </button>
        </aside>
        );
    }

    renderPagination() {
        const totalPages = this.getTotalPages();

        return (
        <div className="mt-14 flex items-center justify-center gap-2">
            <button
            onClick={() => this.changePage(this.state.currentPage - 1)}
            className="flex h-10 w-10 items-center justify-center rounded border border-gray-300 hover:border-[#DB4444] hover:text-[#DB4444]"
            >
            <FiChevronLeft />
            </button>

            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
            <button
                key={page}
                onClick={() => this.changePage(page)}
                className={`h-10 w-10 rounded border text-sm font-medium ${
                this.state.currentPage === page
                    ? "border-[#DB4444] bg-[#DB4444] text-white"
                    : "border-gray-300 hover:border-[#DB4444] hover:text-[#DB4444]"
                }`}
            >
                {page}
            </button>
            ))}

            <button
            onClick={() => this.changePage(this.state.currentPage + 1)}
            className="flex h-10 w-10 items-center justify-center rounded border border-gray-300 hover:border-[#DB4444] hover:text-[#DB4444]"
            >
            <FiChevronRight />
            </button>
        </div>
        );
    }

    render() {
        const filteredProducts = this.getFilteredProducts();
        const currentProducts = this.getCurrentPageProducts();

        return (
        <div className="min-h-screen bg-white px-6 py-16 text-black md:px-16 lg:px-24 xl:px-32">
            <div className="mb-12 flex items-center gap-3 text-sm">
            <span className="text-gray-400">Home</span>
            <span className="text-gray-400">/</span>
            <span>Category</span>
            </div>

            <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
                <div className="mb-4 flex items-center gap-4">
                <span className="h-10 w-5 rounded bg-[#DB4444]" />
                <span className="font-semibold text-[#DB4444]">Products</span>
                </div>
                <h1 className="text-4xl font-semibold tracking-wide">Explore Our Products</h1>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
                <div className="relative">
                <input
                    type="text"
                    name="searchText"
                    value={this.state.searchText}
                    onChange={this.handleInputChange}
                    placeholder="Search product..."
                    className="h-12 w-full rounded bg-gray-100 pl-5 pr-12 text-sm outline-none focus:ring-2 focus:ring-red-200 sm:w-[300px]"
                />
                <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
                </div>

                <div className="relative">
                <select
                    name="sortBy"
                    value={this.state.sortBy}
                    onChange={this.handleInputChange}
                    className="h-12 w-full appearance-none rounded border border-gray-300 bg-white px-5 pr-10 text-sm outline-none focus:border-[#DB4444] sm:w-[220px]"
                >
                    <option value="popular">Sort by Popular</option>
                    <option value="newest">Newest</option>
                    <option value="priceLow">Price: Low to High</option>
                    <option value="priceHigh">Price: High to Low</option>
                    <option value="rating">Top Rating</option>
                </select>
                <FiChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2" />
                </div>
            </div>
            </div>

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[280px_1fr]">
            {this.renderSidebar()}

            <main>
                <div className="mb-6 flex items-center justify-between text-sm text-gray-500">
                <span>
                    Showing {currentProducts.length} of {filteredProducts.length} products
                </span>
                <span>
                    Page {this.state.currentPage} / {this.getTotalPages()}
                </span>
                </div>

                {currentProducts.length > 0 ? (
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
                    {currentProducts.map((product) => this.renderProductCard(product))}
                </div>
                ) : (
                <div className="flex h-[300px] items-center justify-center rounded bg-gray-100 text-gray-500">
                    No products found
                </div>
                )}

                {this.renderPagination()}
            </main>
            </div>
        </div>
        );
    }
}

export default Category;
