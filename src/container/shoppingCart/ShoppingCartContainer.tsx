import CurrencyText from "@/components/heading/CurrencyText";
import PageHeading from "@/components/heading/PageHeading";
import Card from "@/components/shoppingCart/Card";
import { Button } from "@/components/ui/button";
import { trendingProducts } from "@/lib/data";
import React from "react";

function ShoppingCartContainer() {
  return (
    <div className="px-4 md:px-8 xl:container mx-auto auto-rows-fr">
      <PageHeading className="my-10">Shopping Cart</PageHeading>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_450px] gap-8">
        <section className="cart-summary flex flex-col md:max-w-2xl md:mx-auto lg:mx-0">
          {trendingProducts.map((item) => (
            <Card {...item} />
          ))}
        </section>

          {/* calculation */}
        <section className="cart-calculation bg-accent/40 h-fit md:min-w-[30rem] lg:min-w-full md:mx-auto lg:mx-0">
          <article className="p-8 rounded text-sm">
            <h4 className="text-lg font-medium mb-8">Order Summary</h4>

            <div className="flex flex-col gap-5">
              <div className="flex justify-between items-center gap-5 border-b pb-3">
                <p className="text-muted-foreground/90">Subtotal</p>
                <p>
                  <CurrencyText currency={9000} />
                </p>
              </div>
              <div className="flex justify-between items-center gap-5 border-b pb-3">
                <p className="text-muted-foreground/90">Shipping estimate</p>
                <p>
                  <CurrencyText currency={200} />
                </p>
              </div>
              <div className="flex justify-between items-center gap-5 border-b pb-3">
                <p className="text-muted-foreground/90">Tax estimate</p>
                <p>
                  <CurrencyText currency={100} />
                </p>
              </div>
              <div className="flex justify-between items-center gap-5">
                <p>Order total</p>
                <p>
                  <CurrencyText currency={9300} />
                </p>
              </div>

              <Button size={'lg'}>Checkout</Button>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}

export default ShoppingCartContainer;
