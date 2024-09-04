import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

function SeeMoreButton({title}: {title: string}) {
  return (
    <Button
      variant={"text"}
      className="p-0 text-xs md:text-sm text-primary hover:text-primary/70 flex justify-end items-center gap-2 hover:gap-5 transition-all duration-500"
    >
      <span>{title}</span>
      <ArrowRight className="size-4" />
    </Button>
  );
}

export default SeeMoreButton;
