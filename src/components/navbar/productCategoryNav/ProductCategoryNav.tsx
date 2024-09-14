import { navCategory } from "@/lib/data";
import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";

function ProductCategoryNav({
  showProductCategoryBar,
}: {
  showProductCategoryBar: boolean;
}) {
  return (
    <div
      className={`${
        showProductCategoryBar
          ? "max-h-[30rem] opacity-100"
          : "max-h-0 opacity-0 pointer-events-none overflow-hidden"
      } hidden md:block border-b shadow-sm transition-all duration-300`}
    >
      <ul role="list" className="container px-8 mx-auto flex gap-8 text-sm">
        {navCategory.map((item) => (
          <li key={item.id} className={`${styles.li} py-3 relative group`}>
            <Link
              href={"/category/" + item.name.replace(" ", "-").toLowerCase()}
              className=" hover:text-primary group-hover:text-primary transition-colors duration-300"
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
                    className={`${styles.subCategory} text-xs hover:text-primary dark:text-white hover:bg-blue-50 dark:hover:bg-blue-700 hover:px-6 rounded-full py-1 transition-all duration-300`}
                    key={cat.id}
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
