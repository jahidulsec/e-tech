import { Search } from "@/assets/icons";
import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "../ui/button";

function HeaderSearch({
  className,
  onClick,
}: {
  className?: string;
  onClick: () => void;
}) {
  return (
    <>
      <Button
        size={"icon"}
        variant={"text"}
        className={cn("text-gray-500 dark:text-gray-200", className)}
        onClick={onClick}
      >
        <Search className={"size-6"} />
      </Button>
    </>
  );
}

export default HeaderSearch;
