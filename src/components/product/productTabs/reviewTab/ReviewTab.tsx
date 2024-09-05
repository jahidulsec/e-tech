import Rating from "@/components/rating/Rating";
import { Avatar } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { reviewData } from "@/lib/data";
import { formatDate } from "@/lib/formatter";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import React from "react";

function ReviewTab() {
  return (
    <div className="flex flex-col gap-8">
      {reviewData.map((item) => (
        <article
          className="flex gap-5 border-b [&:last-child]:border-0 pb-8"
          key={item.id}
        >
          <div className="w-fit">
            <Avatar>
              <AvatarImage src={item.imagePath} alt="@shadcn" />
              <AvatarFallback>{item.name.charAt(0)}</AvatarFallback>
            </Avatar>
          </div>

          <div className="flex flex-col gap-5">
            <div className="header text-sm">
              <h6>{item.name}</h6>
              <p className=" text-muted-foreground/70">{formatDate(item.createdAt)}</p>
            </div>
              <Rating noOfStars={item.rating} />
            <p className="text-sm text-muted-foreground">{item.comment}</p>
          </div>

        </article>
      ))}
    </div>
  );
}

export default ReviewTab;
