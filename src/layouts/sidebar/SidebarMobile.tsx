import React from "react";
import { SideItems } from "./SideItems";
import { useState } from "react";

const SidebarMobile = () => {
    const defaultItem = SideItems[0];
    const [activeOption, setActiveOption] = useState(defaultItem.options?.[0]?.value || "");

    return (
        <div className="md:hidden">
            <div className="w-full border-b bg-white">
                <div className="flex overflow-x-auto whitespace-nowrap scrollbar-hide px-4 sm:px-8 space-x-6">
                    {defaultItem.options?.map(({ label, value }) => {
                        const isActive = activeOption === value;
                        return (
                            <button
                                key={value}
                                className={`py-4 text-sm sm:text-base font-semibold border-b-2 transition-all duration-200
                                    ${isActive
                                    ? 'border-blue-500 text-[#193250]'
                                    : 'border-transparent text-[#6E7382] hover:text-blue-600 hover:border-gray-300'}
                                `}
                                onClick={() => setActiveOption(value)}
                            >
                                {label}
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">Nội dung: {activeOption}</h2>
                <p className="text-gray-700">
                    Đây là nội dung tương ứng với lựa chọn <strong>{activeOption}</strong>.
                </p>
            </div>
        </div>
    );
};

export default SidebarMobile;
