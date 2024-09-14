import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import React from "react";

function SortingSection() {
  return (
    <>
      <div className="right">
        <Button
          variant={"text"}
          className="text-muted-foreground flex items-center text-xs"
        >
          <span>Sort</span>
          <ChevronDown className="size-3 ml-2" />
        </Button>
      </div>
    </>
  );
}

export default SortingSection;
