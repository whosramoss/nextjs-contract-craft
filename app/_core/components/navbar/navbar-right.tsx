import React from "react";

export default function NavbarRight({
  children,
}: {
  children?: React.ReactNode;
}) {
  return <div className="mr-4 flex items-center space-x-4">{children}</div>;
}
