import React from "react";
import ProductCard from "./ProductCard";

const products = [
    {
        id: 1,
        name: "Nike Field General",
        gender: "Men's Shoes",
        colors: 1,
        price: 3239000,
        imageUrl: "/nike1.jpg",
    },
    {
        id: 2,
        name: "Nike Field General",
        gender: "Men's Shoes",
        colors: 1,
        price: 3239000,
        imageUrl: "/nike2.jpg",
    },
    {
        id: 3,
        name: "Nike Field General 'Denim'",
        gender: "Women's Shoes",
        colors: 1,
        price: 3239000,
        imageUrl: "/nike3.jpg",
    },
    {
        id: 4,
        name: "Luka .77 'Navidor",
        gender: "Older Kids' Basketball Shoes",
        colors: 1,
        price: 2039000,
        imageUrl: "/luka.jpg",
    },
    {
        id: 5,
        name: "Tatum 3",
        gender: "Older Kids' Basketball Shoes",
        colors: 1,
        price: 2549000,
        imageUrl: "/tatum3.jpg",
    },
    {
        id: 6,
        name: "Nike Tiempo Legend 10 Elite",
        gender: "Firm-Ground Low-Top Football Boot",
        colors: 1,
        price: 7039000,
        imageUrl: "/tempo.jpg",
    },
    {
        id: 7,
        name: "Nike Infinity Tour BOA 2",
        gender: "Golf Shoes (Wide)",
        colors: 1,
        price: 5869000,
        imageUrl: "/infinity.jpg",
    },
    {
        id: 9,
        name: "Nike Field General",
        gender: "Women's Shoes",
        colors: 1,
        price: 3519000,
        imageUrl: "/nike4.jpg",
    },
    {
        id: 10,
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
            {products.map((product) => (
                <ProductCard
                    key = {product.id}
                    {...product}
                />
            ))}
        </div>
    );
};

export default ProductList;
