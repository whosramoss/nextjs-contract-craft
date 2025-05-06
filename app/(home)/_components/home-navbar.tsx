"use client";

import { Navbar } from "@/app/_core/components/navbar";
import { Button } from "@/app/_core/components/ui/button";
import useMobileCheck from "@/app/_core/hooks/use-mobile";
import Link from "next/link";

export default function HomeNavbar() {
  const isMobile = useMobileCheck();

  if (isMobile) {
    return <Navbar.Dropdown navitens={[{ name: "Github", href: "#" }]} />;
  }

  return (
    <Navbar.Root>
      <Navbar.Left />
      <Navbar.Right>
        <Link href="/" rel="noreferrer">
          <Button size="sm">Github</Button>
        </Link>
      </Navbar.Right>
    </Navbar.Root>
  );
}
