"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { filterType } from "@/lib/data";
import { Plus } from "lucide-react";
import React, { useState } from "react";

function FilterAccordion({ id, filters, name }: (typeof filterType)[0]) {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="border-b last:border-0">
      {/* header */}
      <div
        className="flex justify-between items-center gap-5 cursor-pointer"
        onClick={() => {
          setShowContent(!showContent);
        }}
      >
        <h4 className="font-medium py-3 ">{name}</h4>

        <Plus
          className={`size-4 ${
            showContent ? "rotate-45" : ""
          } transition-all duration-300`}
        />
      </div>

      {/* filter content */}
    <div className={`${showContent ? 'max-h-[10rem] opacity-100 mt-3 mb-5' : 'opacity-0 max-h-0 pointer-events-none overflow-hidden'} filter-container flex flex-col gap-3 transition-all duration-300`}>
        {filters.map(item => (
            <p key={item.id} className="text-sm flex gap-2 items-center">
                <Checkbox id={item.name} />
                <label htmlFor={item.name} className="cursor-pointer">
                    {item.name}
                </label>
            </p>
        ))}
    </div>
    </div>
  );
}

export default FilterAccordion;
