"use client";

import React, { ReactNode } from "react";
import { Button } from "../../ui/button";
import styles from "./navlink.module.css";

const NavLink = ({ children, isActive }: {isActive?: boolean, children: ReactNode }) => {
  return (
    <Button
      variant={"text"}
      className={`relative w-full ${isActive ? styles.active : ''} ${styles.button} font-normal`}
    >
      {children}
    </Button>
  );
};

export default NavLink;
