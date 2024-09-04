import { Search } from "@/assets/icons";
import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "../ui/button";

function HeaderSearch({ className }: { className?: string }) {
  return (
    <>
      <Button size={"icon"} variant={"text"} className={cn("text-gray-500 dark:text-gray-200", className)}>
        <Search className={"size-6"} />
      </Button>
    </>
  );
}

export default HeaderSearch;
