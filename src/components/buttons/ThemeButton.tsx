"use client";

import { Moon, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useEffect } from "react";
import { Button } from "../ui/button";

function ThemeButton() {
  const { setTheme, theme, systemTheme } = useTheme();

  useEffect(() => {
    console.log(systemTheme);
  }, [theme]);

  return (
    <>
      <Button
        size={"icon"}
        variant={"text"}
        className="text-gray-500 dark:text-gray-200"
        onClick={() => {
          if (theme == "dark") {
            setTheme("light");
          } else {
            setTheme("dark");
          }
        }}
      >
        {theme == "light" ? <SunMedium /> : <Moon />}
      </Button>
    </>
  );
}

export default ThemeButton;
