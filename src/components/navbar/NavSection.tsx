import React, { SetStateAction } from "react";
import NavLink from "./navlink/NavLink";

function NavSection({
  showProductCategoryBar,
  setShowProductCategoryBar,
}: {
  showProductCategoryBar: boolean;
  setShowProductCategoryBar: React.Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <ul className="relative items-center gap-2 hidden md:flex text-sm">
      <li
        className="relative"
        onClick={() => {
          setShowProductCategoryBar(!showProductCategoryBar);
        }}
      >
        <NavLink isActive={showProductCategoryBar}>Products</NavLink>
      </li>
      <li>
        <NavLink>About</NavLink>
      </li>
      <li>
        <NavLink>Store</NavLink>
      </li>
    </ul>
  );
}

export default NavSection;
