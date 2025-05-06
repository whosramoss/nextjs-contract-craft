import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NavbarLeft({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="flex h-14 max-w-screen-2xl  items-center p-8 max-xl:container">
      <Link
        href={"/"}
        className="flex cursor-pointer items-center gap-2.5"
      >

        <h2 className="text-[20px] leading-[24.2px] tracking-normal text-primary-foreground md:hidden lg:block">
        Contract Craft
        </h2>
      </Link>
      {children}
    </div>
  );
}
