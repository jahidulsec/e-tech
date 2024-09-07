import { Orbit } from "lucide-react";
import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link href={'/'} className="logo text-primary">
      <Orbit className="size-6" />
    </Link>
  );
}

export default Logo;
