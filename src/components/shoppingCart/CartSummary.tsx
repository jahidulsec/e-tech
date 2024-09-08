import React from "react";
import Card from "./Card";
import { trendingProducts } from "@/lib/data";

function CartSummary() {
  return (
    <section className="cart-summary flex flex-col md:max-w-2xl md:mx-auto lg:mx-0">
      {trendingProducts.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </section>
  );
}

export default CartSummary;
