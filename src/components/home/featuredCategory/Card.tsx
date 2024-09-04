import { featuredCategory } from "@/lib/data";
import React from "react";

type CardProps = typeof featuredCategory[0]

function Card({id, title, icon}: CardProps) {
  return (
    <>
      <article
        key={id}
        className="bg-accent/50 dark:bg-transparent border border-transparent dark:border-secondary dark:hover:border-tertiary hover:border-tertiary 
            w-[10rem] aspect-square rounded flex flex-col justify-center items-center gap-5
            hover:-translate-y-2 hover:shadow-sm transition-all duration-500
            "
      >
        <div className="icon text-4xl">
          <span className={`text-secondary ri-${icon}`}></span>
        </div>
        <h3 className="text-sm text-secondary-foreground">{title}</h3>
      </article>
    </>
  );
}

export default Card;
