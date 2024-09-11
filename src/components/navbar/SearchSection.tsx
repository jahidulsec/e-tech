"use client";

import React from "react";
import { Input } from "../ui/input";
import { Search, X } from "lucide-react";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

function SearchSection({
  show = false,
  onClose,
}: {
  show: boolean;
  onClose: () => void;
}) {
  return (
    <section
      className={`${
        show ? "max-h-[10rem] border-b" : "max-h-0"
      } transition-all duration-500 origin-top mx-5 2xl:container 2xl:mx-auto flex justify-center items-center`}
    >
      <div className={`relative ${show ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-all duration-300`}>
        <Input
          type="text"
          placeholder="Search by product title or category"
          id="search"
          className={`px-12 text-center min-w-[90vw] border-none
           focus-visible:ring-0 focus-visible:ring-none focus-visible:ring-offset-0
           `}
        />
        <Label htmlFor="search">
          <Search className="absolute top-[50%] left-5 -translate-y-[50%] size-4 text-muted-foreground" />
        </Label>

        <Button
          title="Close search"
          type="button"
          size={"icon"}
          variant={"text"}
          className="absolute right-5 top-[50%] -translate-y-[50%] "
          onClick={onClose}
        >
          <X className="size-4" />
        </Button>
      </div>
    </section>
  );
}

export default SearchSection;
