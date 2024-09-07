import CheckoutOrderSummary from "@/components/checkout/CheckoutOrderSummary";
import CheckoutForm from "@/components/checkout/form/CheckoutForm";
import React from "react";

function CheckoutContainer() {
  return (
    <div className="2xl:container mx-auto">
      <section className="grid md:grid-cols-2 gap-10">
        {/* checkout form */}
        <CheckoutForm />
        <CheckoutOrderSummary />
      </section>
    </div>
  );
}

export default CheckoutContainer;
