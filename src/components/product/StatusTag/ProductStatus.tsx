import React from "react";

function ProductStatus({ status }: { status: string }) {
  return (
    <>
      {status === "in-stock" ? (
        <span className="text-[11px] text-nowrap md:text-xs px-3 rounded-full py-1 text-green-950 bg-green-200">In Stock</span>
      ) : (
        <span className="text-[11px] text-nowrap md:text-xs px-3 rounded-full py-1 text-rose-950 bg-rose-200">Out of Stock</span>
      )}
    </>
  );
}

export default ProductStatus;
