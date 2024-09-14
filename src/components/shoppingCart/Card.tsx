"use client";

import { trendingProducts } from "@/lib/data";
import Image from "next/image";
import React from "react";
import CurrencyText from "../heading/CurrencyText";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { range } from "@/lib/utils";
import ProductStatus from "../product/StatusTag/ProductStatus";
import { Button } from "../ui/button";
import { X } from "lucide-react";

function Card({ id, imagePath, name, price }: (typeof trendingProducts)[0]) {
  return (
    <article key={id} className="flex items-center gap-5 border-t [&:last-child:border-b] py-5">
      {/* image */}
      <div className="min-w-[100px] md:min-w-[120px] aspect-square p-3 bg-gray-50 dark:bg-accent-foreground rounded overflow-hidden mb-5">
        <div className="relative w-full aspect-square mix-blend-multiply">
          <Image src={imagePath} alt="" fill objectFit="cover" />
        </div>
      </div>

      {/* description */}
      <div className="flex flex-col justify-between gap-3 md:h-[8rem]">
        <div className="flex flex-col gap-2">
          <h4 className="line-clamp-1 font-semibold text-xs md:text-sm">{name}</h4>
          <CurrencyText className="text-xs md:text-sm" currency={price} />

          <Select defaultValue="1">
            <SelectTrigger className="w-[80px] text-xs h-8">
              <SelectValue placeholder="Unit" />
            </SelectTrigger>
            <SelectContent>
              {range(1, 8, 1).map((item) => (
                <SelectItem key={item.toString()} value={item.toString()}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <ProductStatus status="in-stock" />
      </div>
      {/* button */}
      <Button size={'icon'} variant={'text'} className="self-start ml-auto">
        <span className="sr-only">close</span>
        <X className="size-4" />
      </Button>
    </article>
  );
}

export default Card;
