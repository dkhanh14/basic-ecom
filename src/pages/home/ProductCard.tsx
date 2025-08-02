import React from "react";
import { useFavouriteStore } from "../../stores/useFavouriteStore";
import {toast} from "react-toastify";

export type Product = {
    id: number;
    name: string;
    gender: string;
    colors: number;
    price: number;
    imageUrl: string;
};

const ProductCard: React.FC<Product> = (product) => {
    const {
        addToFavorites,
        removeFromFavorites,
        isFavorite,
    } = useFavouriteStore();

    const favoriteStatus = isFavorite(product.id);

    const onFavoriteClick = () => {
        if (favoriteStatus) {
            removeFromFavorites(product.id);
            toast.info("Đã xóa khỏi yêu thích");
        } else {
            addToFavorites(product);
            toast.success("Đã thêm vào yêu thích");
        }
    };

    return (
        <div className="w-full transition group relative">
            <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full object-contain rounded-lg"
            />
            <button
                className={`absolute top-2 right-2 text-2xl 
                  ${favoriteStatus ? "text-red-500" : "text-gray-400"} 
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible
                  transition duration-200 cursor-pointer`}
                onClick={onFavoriteClick}
            >
                ♥
            </button>

            <div className="mt-4">
                <h2 className="text-sm font-semibold">{product.name}</h2>
                <p className="text-gray-600 text-sm">{product.gender}</p>
                <p className="text-gray-500 text-sm">{product.colors} Colour</p>
                <p className="text-black font-semibold mt-1">
                    {product.price.toLocaleString()}đ
                </p>
            </div>
        </div>
    );
};

export default ProductCard;
