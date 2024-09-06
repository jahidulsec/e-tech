import PageHeading from "@/components/heading/PageHeading";
import CartCalculation from "@/components/shoppingCart/CartCalculation";
import CartSummary from "@/components/shoppingCart/CartSummary";
import React from "react";

function ShoppingCartContainer() {
  return (
    <div className="px-4 md:px-8 xl:container mx-auto auto-rows-fr">
      <PageHeading className="my-10">Shopping Cart</PageHeading>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_450px] gap-8">
        <CartSummary />
        <CartCalculation />
      </div>
    </div>
  );
}

export default ShoppingCartContainer;
