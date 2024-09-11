"use client";

import React, { useState } from "react";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import style from "./checkoutForm.module.css";
import { Button } from "@/components/ui/button";
import MethodButton from "../MethodButton";
import { Checkbox } from "@/components/ui/checkbox";
import PageHeading from "@/components/heading/PageHeading";

function CheckoutForm() {
  const [deliveryMethod, setDeliverMethod] = useState("cash-on-delivery");

  return (
    <section className="px-5 md:pr-0 md:pl-8">
      <form action="" className={style.form}>
        <PageHeading className="pt-5 pb-3">Checkout</PageHeading>
        <section className="border-y py-10">
          <h3 className="mb-8 text-xl font-medium">Shipping Information</h3>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
            <p className="md:col-span-3">
              <Label htmlFor="firstName ">First name</Label>
              <Input id="firstName" />
            </p>
            <p className="md:col-span-3">
              <Label htmlFor="lastName">Last name</Label>
              <Input id="lastName" />
            </p>

            <p className="md:col-span-6">
              <Label htmlFor="address">Address</Label>
              <Input id="address" />
            </p>
            <p className="md:col-span-2">
              <Label htmlFor="postCode">Post code</Label>
              <Input id="postCode" />
            </p>
            <p className="md:col-span-2">
              <Label htmlFor="district">District</Label>
              <Input id="district" />
            </p>
            <p className="md:col-span-2">
              <Label htmlFor="division">Division</Label>
              <Input id="division" />
            </p>
            <p className="md:col-span-6">
              <Label htmlFor="phone">Phone</Label>
              <Input type="tel" id="phone" />
            </p>
          </div>
        </section>

        <section className="py-10 border-b">
          <h3 className="mb-8 text-xl font-medium">Delivery Method</h3>

          <div className="flex gap-5">
            <MethodButton
              value="cash-on-delivery"
              title="Cash on delivery"
              deliveryMethod={deliveryMethod}
              onClick={() => {
                setDeliverMethod("cash-on-delivery");
              }}
            />
            <MethodButton
              title="BKash"
              value="bkash"
              onClick={() => {
                setDeliverMethod("bkash");
              }}
              deliveryMethod={deliveryMethod}
            />
          </div>
        </section>

        <section className="pt-5 md:py-10 flex flex-col gap-8">
          <div className="flex gap-3">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Accept terms and conditions
            </label>
          </div>

          <Button>Place order</Button>
        </section>
      </form>
    </section>
  );
}

export default CheckoutForm;
