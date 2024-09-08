import React, { SetStateAction } from "react";
import ThemeButton from "../buttons/ThemeButton";
import HeaderSearch from "../Search/HeaderSearch";
import { Button } from "../ui/button";
import { Cart, UserAvatar } from "@/assets/icons";
import Link from "next/link";

function RightSection({setShowSearchBar} : {setShowSearchBar: React.Dispatch<SetStateAction<boolean>>}) {
  return (
    <div className="right flex items-center gap-3 md:gap-2 md:ml-auto">
      <ThemeButton />
      <HeaderSearch
        className="hidden md:block"
        onClick={() => {
          setShowSearchBar(true);
        }}
      />
      <Button
        size={"icon"}
        variant={"text"}
        className="text-gray-500 dark:text-gray-200 hidden md:block"
      >
        <UserAvatar className="size-6" />
      </Button>

      {/* cart */}
      <Button
        asChild
        size={"icon"}
        variant={"text"}
        className="relative flex gap-0.25 text-gray-500 dark:text-gray-200"
      >
        <Link href={"/cart"}>
          <Cart className="size-6" />
          <p className="text-[12px]">0</p>
        </Link>
      </Button>
    </div>
  );
}

export default RightSection;
