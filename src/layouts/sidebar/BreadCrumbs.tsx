type Tab = {
    key: string;
    label: string;
};

type BreadCrumbsProps = {
    tabs: Tab[];
    activeTab: string;
    setActiveTab: (key: string) => void;
};

const BreadCrumbs: React.FC<BreadCrumbsProps> = ({tabs, activeTab, setActiveTab}) => {
    return (
        <div className="w-full border-b bg-white">
            <div className="flex overflow-x-auto whitespace-nowrap scrollbar-hide px-4 sm:px-8 space-x-6">
                {tabs.map(({key, label}) => {
                    const isActive = activeTab === key;
                    return (
                        <button
                            key={key}
                            className={`py-4 text-sm sm:text-base font-semibold border-b-2 transition-all duration-200
                                ${isActive
                                    ? 'border-blue-500 text-[#193250]'
                                    : 'border-transparent text-[#6E7382] hover:text-blue-600 hover:border-gray-300'}
                                `}
                            onClick={() => setActiveTab(key)}
                        >
                            {label}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default BreadCrumbs;
