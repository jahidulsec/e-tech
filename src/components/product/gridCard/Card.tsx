import Rating from "@/components/rating/Rating";
import { trendingProducts } from "@/lib/data";
import { formatCurrency } from "@/lib/formatter";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Card({name, imagePath, rating, price}: typeof trendingProducts[0]) {
  return (
    <>
      <article className="p-5 border-r border-b">
        <div className="w-full aspect-square p-10 bg-gray-50 dark:bg-accent-foreground rounded overflow-hidden mb-5">
          <div className="relative w-full aspect-square">
            <Image
              fill
              objectFit="cover"
              className="mix-blend-multiply"
              src={imagePath}
              alt=""
            />
          </div>
        </div>
        <div className="info flex flex-col justify-center items-center gap-5">
          <Link
            href={``}
            className="hover:text-secondary hover:underline text-gray-700 text-sm text-center font-medieum line-clamp-2 h-[40px] dark:text-gray-100 dark:hover:text-secondary "
          >
            <h3>{name}</h3>
          </Link>
          {/* stars */}
          <div className="">
            <Rating noOfStars={rating} />
          </div>
          <h4 className="text-primary tex-sm">{formatCurrency(price)}</h4>
        </div>
      </article>
    </>
  );
}

export default Card;
