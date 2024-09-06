import React from "react";
import CurrencyText from "../heading/CurrencyText";
import { Button } from "../ui/button";

function CartCalculation() {
  return (
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

          <Button size={"lg"}>Checkout</Button>
        </div>
      </article>
    </section>
  );
}

export default CartCalculation;
