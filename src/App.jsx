import './App.css'
import Navbar from "./layouts/navbar/Navbar"
import {ChevronDown } from "lucide-react"
import Sidebar from "./layouts/sidebar/Sidebar";
// import ListItems from "./pages/ListItems";
import ProductList from "./pages/home/ProductList.js";

function App() {

  return (
    <div className="font-inter">
        <Navbar />

        <div className="flex flex-row justify-between items-center px-4 sm:px-16 py-3 sm:py-4 gap-2 ">
            <div className="text-xl sm:text-2xl font-bold">Giày (2025)</div>
            <button className="text-base font-medium flex items-center gap-1">
                <span>Bộ lọc</span>
                <ChevronDown className="w-5 h-5 text-gray-700" />
            </button>

        </div>

        {/*<div className="flex flex-row">*/}
        {/*    <Sidebar />*/}
        {/*    <ProductList />*/}
        {/*</div>*/}

        <div className="flex flex-row gap-6 max-w-[1777px] mx-auto">
            <div className="hidden md:block">
                <Sidebar />
            </div>
            <div className="flex-1">
                <ProductList />
            </div>
        </div>

    </div>
  )
}

export default App
