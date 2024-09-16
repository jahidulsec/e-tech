import React from "react";
import Navbar from "../../components/navbar/Navbar";

export default async function Header() {
  return (
    <header className="sticky top-0 bg-background z-10">
      <Navbar />
    </header>
  );
}
