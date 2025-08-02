import { create } from 'zustand';
import {persist} from "zustand/middleware";

type Shoe = {
    id: number;
    name: string;
    gender: string;
    colors: number;
    price: number;
    imageUrl: string;
};

type FavouriteState = {
    favorites: Shoe[];
    addToFavorites: (Shoe: Shoe) => void;
    removeFromFavorites: (ShoeId: number) => void;
    isFavorite: (ShoeId: number) => boolean;
    setFavorites: (Shoes: Shoe[]) => void;
};

export const useFavouriteStore = create<FavouriteState>()(
    persist(
        (set, get) => ({
            favorites: [],
            addToFavorites: (shoe) => {
                const { favorites } = get();
                if (favorites.some((item) => item.id === shoe.id)) return;
                set({ favorites: [...favorites, shoe] });
            },
            removeFromFavorites: (shoeId) => {
                set({ favorites: get().favorites.filter((item) => item.id !== shoeId) });
            },
            isFavorite: (productId: number) =>
                get().favorites.some((item) => item.id === productId),
            setFavorites: (items) => {
                set({ favorites: items });
            },
        }),
        {
            name: 'favorites',
        }
    )
);
