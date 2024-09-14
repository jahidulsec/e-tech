import { trendingProducts } from "@/lib/data";
import Image from "next/image";
import React from "react";
import CurrencyText from "../heading/CurrencyText";
import Card from "./Card";

function CheckoutOrderSummary() {
  return (
    <section className="bg-gray-50 dark:bg-blue-950 pt-5 px-10 md:px-10 md:py-[8rem] -my-6 ">
      <h3 className="text-xl font-medium mb-8">Order Summary</h3>

      <section className="card-container flex flex-col gap-5">
        {trendingProducts.slice(0, 2).map((item) => (
          <Card key={item.id} {...item} />
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
