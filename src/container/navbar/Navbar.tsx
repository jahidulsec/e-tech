import { Cart, UserAvatar } from "@/assets/icons";
import { Menu } from "lucide-react";
import HeaderSearch from "../../components/Search/HeaderSearch";
import ThemeButton from "../../components/buttons/ThemeButton";
import { Button } from "../../components/ui/button";
import NavLink from "@/components/navbar/navlink/NavLink";
import Logo from "@/components/logo/Logo";

export default function Navbar() {
  return (
    <>
      <header className="sticky top-0 bg-background z-10">
        <nav className="py-3 flex justify-between items-center border-b mx-5">
          <div className="left">
            <div className="icons text-gray-400 flex items-center gap-5 md:hidden">
              <Button size={"icon"} variant={"text"} className="text-gray-400">
                <Menu className="size-6" />
              </Button>
              <HeaderSearch />
            </div>
            <ul className="items-center gap-2 hidden md:flex text-sm">
              <li>
                <NavLink>Products</NavLink>
              </li>
              <li>
                <NavLink>About</NavLink>
              </li>
              <li>
                <NavLink>Store</NavLink>
              </li>
            </ul>
          </div>

          {/* logo */}
          <Logo />

          {/* right side */}
          <div className="right flex items-center gap-3 md:gap-2">
            <ThemeButton />
            <HeaderSearch className="hidden md:block" />
            <Button
              size={"icon"}
              variant={"text"}
              className="text-gray-500 dark:text-gray-200 hidden md:block"
            >
              <UserAvatar className="size-6" />
            </Button>

            {/* cart */}
            <Button
              size={"icon"}
              variant={"text"}
              className="relative flex gap-0.25 text-gray-500 dark:text-gray-200"
            >
              <Cart className="size-6" />
              <p className="text-[12px]">0</p>
            </Button>
          </div>
        </nav>
      </header>
    </>
  );
}
