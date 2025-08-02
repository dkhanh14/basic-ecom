import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/home/HomePage";
import FavouritesPage from "./pages/favourite/FavouritesPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="favourites" element={<FavouritesPage />} />
            </Route>
        </Routes>
    );
}

export default App;
