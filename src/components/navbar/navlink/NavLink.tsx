"use client"

import React, { ReactNode } from 'react'
import { Button } from '../../ui/button';
import styles from './navlink.module.css';

const NavLink = ({ children }: { children: ReactNode }) => {
    return <Button variant={"text"} className={`relative w-full ${styles.button} font-normal`}>
      {children}
      </Button>;
  };
  

export default NavLink