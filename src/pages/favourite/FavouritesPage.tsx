import React from "react";
import {useFavouriteStore} from "../../stores/useFavouriteStore";

const FavouritesPage = () => {
    const { favorites, removeFromFavorites } = useFavouriteStore();

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Sản phẩm yêu thích</h1>

            {favorites.length === 0 ? (
                <p className="text-gray-500">Bạn chưa thêm sản phẩm nào vào danh sách yêu thích.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {favorites.map((item) => (
                        <div key={item.id} className=" rounded-lg p-4 shadow-sm relative">
                            <img src={item.imageUrl} alt={item.name} className="w-full h-48 object-contain mb-2" />
                            <h2 className="text-sm font-semibold">{item.name}</h2>
                            <p className="text-gray-600 text-sm">{item.gender}</p>
                            <p className="text-gray-500 text-sm">{item.colors} màu</p>
                            <p className="text-black font-semibold mt-1">
                                {item.price.toLocaleString()}đ
                            </p>

                            <button
                                onClick={() => removeFromFavorites(item.id)}
                                className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-xl"
                                title="Bỏ yêu thích"
                            >
                                ♥
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FavouritesPage;