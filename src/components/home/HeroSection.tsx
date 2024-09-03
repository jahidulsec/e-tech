"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDotButtons,
} from "../ui/carousel";
import { heroData } from "@/lib/data";
import Image from "next/image";

function HeroSection() {
  return (
    <section className="">
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          {heroData.map((item) => (
            <CarouselItem key={item.id}>
              <div className="relative w-full aspect-[3/2] md:aspect-[16/5]">
                <Image src={item.imagePath} fill alt="" objectFit="cover" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselDotButtons/>
        <CarouselNext />
      </Carousel>
    </section>
  );
}

export default HeroSection;
