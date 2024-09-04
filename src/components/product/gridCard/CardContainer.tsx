import React from "react";

function CardContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5 border-t border-l">
      {children}
    </div>
  );
}

export default CardContainer;
