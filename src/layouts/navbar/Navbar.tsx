import NavbarMobile from "./NavbarMobile";
import NavbarDesktop from "./NavbarDesktop";
import { useState } from "react";
import { NavItems } from "./NavItems";

const Navbar = () => {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    return (
        <div>
            <NavbarMobile navItems={NavItems} />
            <NavbarDesktop
                navItems={NavItems}
                hoveredItem={hoveredItem}
                setHoveredItem={setHoveredItem}
            />
        </div>
    );
};

export default Navbar;