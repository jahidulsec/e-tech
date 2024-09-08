import React from "react";
import PageHeading from "../heading/PageHeading";

function Header() {
  return (
    <div className="header text-center my-8">
      <PageHeading>Workspace</PageHeading>
      <p className="text-sm text-muted-foreground mx-auto w-[30rem]">
        The secret to a tidy desk? Don&apos;t get rid of anything, just put it in
        really really nice looking containers.
      </p>
    </div>
  );
}

export default Header;
