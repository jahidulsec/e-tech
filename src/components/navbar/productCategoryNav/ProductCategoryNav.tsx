"use client";

import { navCategory } from "@/lib/data";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import styles from "./styles.module.css";

function ProductCategoryNav({
  showProductCategoryBar,
  onClose,
}: {
  showProductCategoryBar: boolean;
  onClose: () => void;
}) {
  const navRef = useRef<HTMLLIElement>(null);

  useEffect(() => {

    const productNavBtn = document.getElementById('product-nav-btn-container')

    const handler = (e: any) => {
      if ((!productNavBtn?.contains(e.target) && e.target !== productNavBtn) && !navRef.current?.contains(e.target)) {
        console.log(navRef.current);
        onClose();
      }
    };


  
    document.addEventListener("click", handler);
  }, []);

  return (
    <div
      className={`${
        showProductCategoryBar
          ? "max-h-[30rem] opacity-100"
          : "max-h-0 opacity-0 pointer-events-none overflow-hidden"
      } hidden md:block border-b shadow-sm transition-all duration-300`}
    >
      <ul role="list" className="container px-8 mx-auto flex gap-8 text-sm">
        {navCategory.map((item,index) => (
          <li
            key={index}
            className={`${styles.li} py-3 relative group`}
            ref={navRef}
          >
            <Link
              href={"/category/" + item.name.replace(" ", "-").toLowerCase()}
              className=" hover:text-primary group-hover:text-primary transition-colors duration-300"
              onClick={onClose}
            >
              {item.name}
            </Link>

            {/* sub category list */}
            {item.subCategory.length > 0 && (
              <div
                className={`bg-background border rounded ${styles.subCategoryContainer}`}
              >
                {item.subCategory.map((cat) => (
                  <Link
                    href={""}
                    className={`${styles.subCategory} text-xs hover:text-primary dark:text-white 
                    hover:bg-blue-50 dark:hover:bg-blue-700 hover:px-6 rounded-full py-1 transition-all duration-300`}
                    key={cat.id}
                    onClick={onClose}
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductCategoryNav;
