import React from "react";
import { Heart, Search, ShoppingCart } from "lucide-react";
import type { NavItem } from "./NavItems";
import {useNavigate} from "react-router-dom";

const NavbarDesktop = ({
   navItems,
   hoveredItem,
   setHoveredItem,
}: {
    navItems: NavItem[];
    hoveredItem: string | null;
    setHoveredItem: (label: string | null) => void;
}) => {
    const selectedItem = navItems.filter(item => item.label === hoveredItem)[0] || null;

    const navigate = useNavigate();

    const renderChildren = (children: NavItem[]) => (
        <div className="flex space-x-8">
            {children.map((child, index) => (
                <div key={index}>
                    <div className="font-semibold mb-2">{child.label}</div>
                    {child.children && (
                        <div className="flex flex-col space-y-1">
                            {child.children.map((subChild, subIndex) => (
                                <div
                                    key={subIndex}
                                    className="text-sm text-gray-600 hover:underline cursor-pointer font-medium"
                                >
                                    {subChild.label}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );

    return (
        <div>
            <div className="hidden sm:grid grid-cols-12 border border-b border-gray-200 px-16">
                <div className="col-span-2 w-19 cursor-pointer" onClick={() => navigate("/")}>
                    <img src="/ownego.jpg" alt="ownego logo" className="w-full"  />
                </div>

                <div className="col-span-8 flex flex-row justify-center text-base font-semibold items-center">
                    {navItems.map((item, index) => (
                        <div
                            key={index}
                            className="mr-5 relative group"
                            onMouseEnter={() => setHoveredItem(item.label)}
                        >
                            <div
                                className={`cursor-pointer border-b-2 border-transparent hover:border-black transition duration-200`}
                            >
                                {item.label}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="col-span-2 flex flex-row  items-center">
                    <div className="flex flex-row items-center border border-gray-200 rounded-full h-10  px-3 space-x-1">
                        <Search className="w-5 h-5 text-gray-500"/>
                        <input className="w-40 outline-none text-sm " type="text" placeholder="Tìm kiếm" name="search" />
                    </div>
                    <div className="items-center mx-4 cursor-pointer" onClick={() => navigate("/favourites")}>
                        <Heart className="w-6 h-6 text-gray-500"/>
                    </div>
                    <div className="items-center">
                        <ShoppingCart className="w-6 h-6 text-gray-500"/>
                    </div>
                </div>
            </div>

            {selectedItem && selectedItem?.children && (
                <div
                    className="flex justify-center bg-white shadow-md border-t px-16 py-4 animate-in slide-in-from-top-2 duration-200 "
                    onMouseLeave={() => setHoveredItem(null)}
                >
                    {renderChildren(selectedItem.children)}
                </div>
            )}
        </div>
    );
};

export default NavbarDesktop;
