"use client";

import { navCategory } from "@/lib/data";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function CategoryAccordion({
  id,
  name,
  subCategory,
  onClose,
}: (typeof navCategory)[0] & { onClose: () => void }) {
  const [showContent, setShowContent] = useState(false);

  const router = useRouter();

  return (
    <>
      <li>
        <button
          className="header flex justify-between items-center gap-5 py-3 border-b w-full "
          onClick={() => {
            if(subCategory.length > 0) {
              setShowContent(!showContent);
            } else {
              router.push(`/category/${id}`)
              onClose()
            }
          }}
        >
          <h4 className="text-xs">{name}</h4>
          {subCategory.length > 0 && (
            <Plus
              className={`size-4 ${
                showContent ? "rotate-45" : ""
              } transition-all duration-300`}
            />
          )}
        </button>

        {/* subcateogory list */}
        <ul
          className={`${
            showContent ? "max-h-[20rem]" : "max-h-0 pointer-events-none"
          } overflow-hidden transition-all duration-300 text-muted-foreground ml-3`}
        >
          {subCategory.map((subcat) => (
            <li
              key={subcat.id}
              className="py-2 cursor-pointer hover:text-tertiary text-xs"
              onClick={() => {
                router.push(`/category/${id}`);
                onClose();
              }}
            >
              {subcat.name}
            </li>
          ))}
        </ul>
      </li>
    </>
  );
}

export default CategoryAccordion;
