"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent } from "../ui/sheet";
import { navCategory } from "@/lib/data";
import { ScrollArea } from "../ui/scroll-area";
import CategoryAccordion from "./CategoryAccordion";
import Link from "next/link";

function MobileMenuSection() {
  const [openSideMenu, setOpenSideMenu] = useState(false);

  return (
    <>
      <Button
        size={"icon"}
        variant={"text"}
        className="text-gray-400"
        onClick={() => setOpenSideMenu(true)}
      >
        <Menu className="size-6" />
      </Button>

      {/* side nav menu */}
      <Sheet open={openSideMenu} onOpenChange={setOpenSideMenu}>
        <SheetContent side={"left"} className="pt-14">
          <ScrollArea className="h-[90vh]">
            <section>
              <h3 className="border-b pb-3 text-sm font-medium text-primary">
                Products
              </h3>
              <ul className="text-sm flex flex-col gap-1 mx-3">
                {navCategory.map((item) => (
                  <CategoryAccordion
                    key={item.id}
                    {...item}
                    onClose={() => {
                      setOpenSideMenu(false);
                    }}
                  />
                ))}
              </ul>
            </section>
            <section className="mt-5 border-t">
              <Link
                href={""}
                onClick={() => {
                  setOpenSideMenu(false);
                }}
              >
                <h3 className=" py-2 text-sm font-medium text-primary">
                  About
                </h3>
              </Link>
              <Link
                href={""}
                onClick={() => {
                  setOpenSideMenu(false);
                }}
              >
                <h3 className=" py-2 text-sm font-medium text-primary">
                  Stores
                </h3>
              </Link>
            </section>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default MobileMenuSection;
