import { Button } from "@/components/ui/button";
import { Facebook, Heart, Instagram, Link as LinkIcon } from "lucide-react";
import React from "react";
import ProductStatus from "../StatusTag/ProductStatus";
import Rating from "@/components/rating/Rating";
import CurrencyText from "@/components/heading/CurrencyText";
import { productData } from "@/lib/data";
import { Separator } from "@/components/ui/separator";

function ProductDetails({ data }: { data: typeof productData }) {
  return (
    <>
      <div className="product-details md:row-span-2">
        <article className="header flex flex-col gap-8 ">
          <h2 className="text-2xl font-bold ">{data.name}</h2>
          {/* price */}
          <div className="product-state flex flex-wrap items-center gap-3 md:gap-5">
            <h3 className="text-md md:text-xl text-primary">
              <CurrencyText currency={data.price} />
            </h3>
            <Separator orientation="vertical" className="h-5" />
            <div className="rating flex gap-3 items-center">
              <Rating noOfStars={4} />
              <h4 className="flex items-center gap-1 text-xs text-nowrap md:text-sm text-gray-500 dark:text-gray-300">
                1654 <span className="hidden md:block">reviews</span>
              </h4>
            </div>
            <Separator orientation="vertical" className="h-5" />
            <ProductStatus status="in-stock" />
          </div>

          <p className="text-gray-700 dark:text-gray-300">
            Don't compromise on snack-carrying capacity with this lightweight
            and spacious bag. The drawstring top keeps all your favorite chips,
            crisps, fries, biscuits, crackers, and cookies secure.
          </p>

          <div className="buttons flex gap-2 items-center">
            <Button className="w-1/2">Add to bag</Button>
            <Button className="text-gray-500" size={"icon"} variant={"ghost"}>
              <Heart className="size-5" />
            </Button>
          </div>

          <Separator />

          <div className="flex flex-col gap-5">
            <h5>Highlights</h5>
            <ul className="text-gray-500 dark:text-gray-300 text-sm flex flex-col gap-2 ml-6 list-disc">
              <li className="pl-2">200+ SVG icons in 3 unique styles</li>
              <li className="pl-2">
                Compatible with Figma, Sketch, and Adobe XD
              </li>
              <li className="pl-2">Drawn on 24 x 24 pixel grid</li>
            </ul>
          </div>

          <Separator className="" />

          <div className="flex flex-col gap-5">
            <h5>Share</h5>
            <div className="flex items-center gap-5">
                <Button variant={'text'} size={'icon'} className="text-gray-500 size-6">
                    <Facebook />
                </Button>
                <Button variant={'text'} size={'icon'} className="text-gray-500 size-6">
                    <Instagram />
                </Button>
                <Button variant={'text'} size={'icon'} className="text-gray-500 size-6">
                    <LinkIcon />
                </Button>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}

export default ProductDetails;
