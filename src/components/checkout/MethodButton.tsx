"use client";

import { CircleCheck, Truck } from "lucide-react";
import React from "react";

function MethodButton({
  deliveryMethod,
  title,
  onClick,
  value,
}: {
  deliveryMethod: string;
  title: string;
  value: string;
  onClick: () => void;
}) {
  return (
    <div
      className={`radio grow w-[10.5rem] md:w-[13rem] text-sm p-3 border cursor-pointer rounded transition-all duration-500 ${
        deliveryMethod === value
          ? `border-primary text-primary`
          : "text-muted-foreground"
      }`}
      onClick={onClick}
    >
      <div className="flex items-center gap-5">
        <CircleCheck className="size-6 fill-current stroke-background" />
        <span className="flex flex-col">
          <h6 className="text-xs md:text-sm">{title}</h6>
        </span>
      </div>
    </div>
  );
}

export default MethodButton;
