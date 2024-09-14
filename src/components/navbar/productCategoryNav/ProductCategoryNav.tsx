import { navCategory } from "@/lib/data";
import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";

function ProductCategoryNav() {
  return (
    <div className="border-b shadow-sm">
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
              <div className={`bg-background border rounded ${styles.subCategoryContainer}`}>
                {item.subCategory.map((cat) => (
                  <Link href={''} className={`${styles.subCategory} text-xs hover:text-primary hover:bg-blue-50 hover:px-6 rounded-full py-1 transition-all duration-300`} key={cat.id}>
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
