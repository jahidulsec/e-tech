'use client'

import CurrencyText from "@/components/heading/CurrencyText";
import Rating from "@/components/rating/Rating";
import { trendingProducts } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Card({
  name,
  imagePath,
  rating,
  price,
  id
}: (typeof trendingProducts)[0]) {


  return (
    <>
      <Link key={id} role="article" href={`/product/${id}`} className="p-5 border-r border-b group hover:cursor-pointer" >
        <div className="w-full aspect-square p-10 bg-gray-50 dark:bg-accent-foreground rounded overflow-hidden mb-5">
          <div className="relative w-full mix-blend-multiply group-hover:scale-125 aspect-square transition-all duration-500">
            <Image fill objectFit="cover" src={imagePath} alt="" />
          </div>
        </div>
        <div className="info flex flex-col justify-center items-center gap-5">
          <h3
            className="group-hover:text-secondary text-gray-700 text-sm text-center font-medieum 
            line-clamp-2 h-[40px] dark:text-gray-100 dark:group-hover:text-secondary "
          >
            {name}
          </h3>
          {/* stars */}
          <div className="">
            <Rating noOfStars={rating} />
          </div>
          <h4 className="text-primary tex-sm">
            <CurrencyText currency={price} />
          </h4>
        </div>
      </Link>
    </>
  );
}

export default Card;
