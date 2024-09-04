"use client";

import { Star, StarHalf } from "lucide-react";
import React from "react";

function Rating({ noOfStars = 0 }: { noOfStars: number }) {
  return (
    <div className="flex justify-center items-center gap-1">
      {/* active star */}
      {Array.from({ length: noOfStars }).map((item, index) => (
        <span key={index}>
          <Star className="size-4 fill-yellow-400 stroke-yellow-400" />
        </span>
      ))}

      {/* half star */}
      {(noOfStars - Math.floor(noOfStars) !== 0) &&  Array.from({ length: 1 }).map((item, index) => (
        <span key={index}>
          <StarHalf className="size-4 fill-yellow-400 stroke-yellow-400" />
        </span>
      ))}

      {/* remain star */}
      {Array.from({ length: 5 - Math.ceil(noOfStars) }).map((item, index) => (
        <span key={index}>
          <Star className="size-4 fill-gray-200 stroke-gray-200" />
        </span>
      ))}
    </div>
  );
}

export default Rating;
