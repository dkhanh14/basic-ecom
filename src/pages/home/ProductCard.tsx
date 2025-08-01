import React from "react";

interface ProductCardProps {
    name: string;
    gender: "Men's Shoes" | "Women's Shoes";
    colors: number;
    price: number;
    imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
     name,
     gender,
     colors,
     price,
     imageUrl,
 }) => {
    return (
        <div className="w-full transition">
            <img src={imageUrl} alt={name} className="w-full object-contain rounded-lg" />
            <div className="mt-4">
                <h2 className="text-sm font-semibold">{name}</h2>
                <p className="text-gray-600 text-sm">{gender}</p>
                <p className="text-gray-500 text-sm">{colors} Colour</p>
                <p className="text-black font-semibold mt-1">{price.toLocaleString()}đ</p>
            </div>
        </div>
    );
};

export default ProductCard;
