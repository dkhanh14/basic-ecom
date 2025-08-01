import React from "react";
import ProductCard from "./ProductCard";

const products = [
    {
        name: "Nike Field General",
        gender: "Men's Shoes",
        colors: 1,
        price: 3239000,
        imageUrl: "/nike1.jpg",
    },
    {
        name: "Nike Field General",
        gender: "Men's Shoes",
        colors: 1,
        price: 3239000,
        imageUrl: "/nike2.jpg",
    },
    {
        name: "Nike Field General",
        gender: "Women's Shoes",
        colors: 1,
        price: 3519000,
        imageUrl: "/nike3.jpg",
    },
    {
        name: "Nike Field General",
        gender: "Women's Shoes",
        colors: 1,
        price: 3519000,
        imageUrl: "/nike4.jpg",
    },
    {
        name: "Nike Field General",
        gender: "Women's Shoes",
        colors: 1,
        price: 3519000,
        imageUrl: "/nike5.jpg",
    },
];

const ProductList: React.FC = () => {
    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product, index) => (
                <ProductCard
                    key={index}
                    {...product}
                />
            ))}
        </div>
    );
};

export default ProductList;
