import React from "react";
import { useState } from "react";
import type { NavItem } from "./NavItems";
import {useNavigate} from "react-router-dom";

const NavbarMobile = ({ navItems }: { navItems: NavItem[] }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState<string | null>(null);

    const navigate = useNavigate();

    return (
        <div className="sm:hidden">
            <div className="flex items-center justify-between px-4 border-b border-gray-200">
                <div onClick={() => navigate("/")}>
                    <img src="/ownego.jpg" alt="logo" className="w-19" />
                </div>
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="transition-transform duration-200 hover:scale-110"
                >
                    <svg
                        className={`w-6 h-6 text-gray-800 transition-transform duration-300 ${
                            isMobileMenuOpen ? "rotate-90" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>
            </div>

            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen
                        ? "max-h-screen opacity-100"
                        : "max-h-0 opacity-0"
                }`}
            >
                <div className="px-4 py-2 bg-white border-t space-y-2">
                    {navItems.map((item, index) => (
                        <div
                            key={index}
                            className="transform transition-all duration-200 hover:translate-x-1"
                        >
                            <div
                                className="flex justify-between items-center font-semibold py-2 cursor-pointer hover:bg-gray-50 rounded-md px-2 transition-colors duration-200"
                                onClick={() => setActiveItem(activeItem === item.label ? null : item.label)}
                            >
                                <span className="transition-colors duration-200 hover:text-gray-600">
                                    {item.label}
                                </span>
                                {item.children && (
                                    <svg
                                        className={`w-4 h-4 transition-all duration-300 ease-in-out ${
                                            activeItem === item.label ? "rotate-180 text-gray-600" : "text-gray-500"
                                        }`}
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                )}
                            </div>

                            {item.children && (
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                        activeItem === item.label
                                            ? "max-h-96 opacity-100 mb-2"
                                            : "max-h-0 opacity-0"
                                    }`}
                                >
                                    <div className="pl-4 space-y-2">
                                        {item.children.map((child, i) => (
                                            <div
                                                key={i}
                                                className="transform transition-all duration-200 hover:translate-x-1"
                                                style={{
                                                    animationDelay: `${i * 50}ms`,
                                                    animation: activeItem === item.label ? 'fadeInUp 0.3s ease-out forwards' : 'none'
                                                }}
                                            >
                                                <div className="font-medium py-1 px-2 rounded hover:bg-gray-50 transition-colors duration-200 hover:text-gray-600 cursor-pointer">
                                                    {child.label}
                                                </div>
                                                {child.children && (
                                                    <div className="pl-4 text-sm space-y-1 text-gray-600">
                                                        {child.children.map((sub, j) => (
                                                            <div
                                                                key={j}
                                                                className="hover:underline cursor-pointer py-1 px-2 rounded hover:bg-gray-50 transition-all duration-200 hover:text-gray-800 transform hover:translate-x-1"
                                                                style={{
                                                                    animationDelay: `${(i + j + 1) * 50}ms`,
                                                                    animation: activeItem === item.label ? 'fadeInUp 0.3s ease-out forwards' : 'none'
                                                                }}
                                                            >
                                                                {sub.label}
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
};

export default NavbarMobile;