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
} from "@/components/ui/carousel";
import { heroData } from "@/lib/data";
import Image from "next/image";

function HeroCarousel() {
  return (
    <>
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          {heroData.map((item) => (
            <CarouselItem key={item.id}>
              <div className="relative w-full aspect-[16/7] md:aspect-[16/5]">
                <Image src={item.imagePath} fill alt="" objectFit="cover" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselDotButtons />
        <CarouselNext />
      </Carousel>
      
    </>
  );
}

export default HeroCarousel;
