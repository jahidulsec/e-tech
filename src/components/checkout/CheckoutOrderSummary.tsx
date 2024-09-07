import { trendingProducts } from "@/lib/data";
import Image from "next/image";
import React from "react";
import CurrencyText from "../heading/CurrencyText";

function CheckoutOrderSummary() {
  return (
    <section className="bg-gray-100 dark:bg-blue-950 pt-5 px-4 md:px-10 md:pt-[8rem]">
      <h3 className="text-xl font-medium mb-8">Order Summary</h3>

      <section className="card-container flex flex-col gap-5">
        {trendingProducts.slice(0, 2).map((item) => (
          <article
            key={item.id}
            className="flex gap-5 justify-between border-b pb-5"
          >
            <div className="flex gap-5">
              {/* image */}
              <div className="w-[80px] aspect-square p-2 bg-white rounded overflow-hidden">
                <div className="w-full aspect-square relative mix-blend-multiply">
                  <Image src={item.imagePath} fill objectFit="cover" alt="" />
                </div>
              </div>

              {/* info */}
              <div className="flex flex-col gap-1">
                <h4 className="text-xs font-medium line-clamp-1">
                  {item.name}
                </h4>
                <h5 className="text-xs text-muted-foreground">1x</h5>
              </div>
            </div>

            <div className="text-xs text-primary">
              <p>
                <CurrencyText currency={item.price} />
              </p>
            </div>
          </article>
        ))}
      </section>

      {/* calculation */}
      <section className="mb-10 md:mb-0 mt-5 flex flex-col gap-3">
        <p className="flex justify-between items-center gap-5 text-sm">
          <span className="text-muted-foreground">Subtotal</span>
          <span><CurrencyText currency={3200} /></span>
        </p>
        <p className="flex justify-between items-center gap-5 text-sm">
          <span className="text-muted-foreground">Shipping</span>
          <span><CurrencyText currency={150} /></span>
        </p>
        <p className="flex justify-between items-center gap-5 text-sm border-b pb-3">
          <span className="text-muted-foreground">Taxes</span>
          <span><CurrencyText currency={200} /></span>
        </p>
        <p className="flex justify-between items-center gap-5 text-sm font-semibold">
          <span className="">Total</span>
          <span><CurrencyText currency={3550} /></span>
        </p>
      </section>
    </section>
  );
}

export default CheckoutOrderSummary;
