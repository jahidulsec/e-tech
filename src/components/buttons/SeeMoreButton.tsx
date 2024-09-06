import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

function SeeMoreButton({ title }: { title: string }) {
  return (
    <Button
      asChild
      variant={"text"}
      className="p-0 text-xs md:text-sm text-primary hover:text-primary/70 flex justify-end items-center gap-2 hover:gap-5 transition-all duration-500"
    >
      <Link href={`/category/1`}>
        <span>{title}</span>
        <ArrowRight className="size-4" />
      </Link>
    </Button>
  );
}

export default SeeMoreButton;
