"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { filterType } from "@/lib/data";
import { Filter } from "lucide-react";
import React, { useState } from "react";
import FilterAccordion from "./FilterAccordion";

function FilterSideBar() {
  const [openFilterMenu, setOpenFilterMenu] = useState(false);

  return (
    <>
      <div className="left flex gap-1 items-center">
        <Button
          variant={"text"}
          className="text-muted-foreground text-xs"
          onClick={() => setOpenFilterMenu(true)}
        >
          <Filter className="size-4 mr-2 " />
          <span>filter</span>
        </Button>

        <Separator orientation="vertical" className="h-5" />

        <Button variant={"text"} className="text-muted-foreground  text-xs">
          Clear all
        </Button>
      </div>

      {/* filter side bar */}
      <Sheet open={openFilterMenu} onOpenChange={setOpenFilterMenu}>
        <SheetContent side={"left"}>
          <SheetHeader>
            <SheetTitle>Filter</SheetTitle>
          </SheetHeader>
          <div className="my-6">
            {filterType.map(item => (
                <FilterAccordion key={item.id} {...item} />
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default FilterSideBar;
