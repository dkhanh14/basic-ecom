import {ChevronDown} from "lucide-react";
import { SideItems } from "./SideItems";
import {useState} from "react";
import SidebarMobile from "./SidebarMobile";





const Sidebar = () => {
    const [isOpen, setIsOpen] = useState({ 0: true});

    const handleSelect = (index) => {
        setIsOpen(prev => ({
            ...prev,
            [index]: !prev[index],
        }));
    }


    return (
      <div>
          {/*desktop*/}
          <div className="hidden md:block">
              <div className="sticky left-0 top-0 h-screen overflow-y-auto border border-white rounded-lg shadow-sm px-4 py-3 bg-white">
                  {SideItems.map((item,index) => (
                      <div
                          key={index}
                          className="py-3 w-[261px] border-b-1 border-gray-200"
                          onClick={() => handleSelect(index)}
                      >
                          <div className="flex flex-row items-center justify-between px-2">
                              <span>{item.label}</span>
                              <ChevronDown
                                  className={`w-5 h-5 text-gray-700 transform transition-transform duration-300 ${
                                      isOpen[index] ? "rotate-180" : "rotate-0"
                                  }`}
                              />

                          </div>

                          {isOpen[index] && item.options && (
                              <div>
                                  {item.options.map((option, subIndex) => (
                                      <div key={subIndex} className="py-1 px-2">
                                          {option.label}
                                      </div>
                                  ))}
                              </div>
                          )}
                      </div>
                  ))}
              </div>
          </div>

          {/*mobile*/}
          <div className="md:hidden">
            <SidebarMobile />

          </div>

      </div>

)
}

export default Sidebar