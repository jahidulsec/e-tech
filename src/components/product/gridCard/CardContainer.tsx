import { cn } from "@/lib/utils";
import React from "react";

function CardContainer({ children, className }: { children: React.ReactNode, className?:string }) {
  return (
    <div className={cn("cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5 border-t border-l", className)}>
      {children}
    </div>
  );
}

export default CardContainer;
