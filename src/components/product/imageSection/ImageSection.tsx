"use client";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { productData } from "@/lib/data";
import Image from "next/image";
import React, { useState } from "react";

function ImageSection({ data }: { data: typeof productData }) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <>
      <div className="image-section flex flex-col gap-5 h-fit">
        {/* preview image */}
        <div className="bg-gray-50 p-8 dark:bg-accent-foreground rounded overflow-hidden">
          <div className="preview-image relative w-full aspect-video mix-blend-multiply scale-75">
            <Image
              src={data.images[selectedImage].imagePath}
              alt=""
              fill
              objectFit="cover"
            />
          </div>
        </div>

        {/* thumbnail image */}
        <ScrollArea type="always" className="w-full">
          <div className="flex items-center gap-5">
            {data.images.map((item) => (
              <div
                key={item.id}
                className={`${
                  selectedImage + 1 === item.id ? "border border-primary" : null
                } bg-gray-50 w-1/4 md:w-1/5 min-w-[100px] max-w-[200px] shrink-0 p-5 dark:bg-accent-foreground rounded overflow-hidden transition-all duration-500`}
                onClick={() => {
                  setSelectedImage(item.id - 1);
                }}
              >
                <div className="relative w-full aspect-video mix-blend-multiply">
                  <Image src={item.imagePath} alt="" fill objectFit="cover" />
                </div>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </>
  );
}

export default ImageSection;
