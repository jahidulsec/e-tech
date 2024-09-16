"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

function SortingSection() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="right">
        <DropdownMenu open={showMenu} onOpenChange={setShowMenu}>
          <DropdownMenuTrigger>
            <Button
              variant={"text"}
              className={`text-muted-foreground flex items-center text-xs ${showMenu ? "text-primary" : ''}`}
              onClick={() => setShowMenu(true)}
            >
              <span>Sort</span>
              <ChevronDown className={`size-3 ml-2 ${!showMenu ? "" : "-rotate-180"} transition-all duration-300`} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuItem className="text-xs">Newest</DropdownMenuItem>
              <DropdownMenuItem className="text-xs">Price: Lower to Highest</DropdownMenuItem>
              <DropdownMenuItem className="text-xs">Price: Highest to Lower</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}

export default SortingSection;
