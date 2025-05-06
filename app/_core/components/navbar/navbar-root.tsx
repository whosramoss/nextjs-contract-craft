import React from "react";

export default function NavbarRoot({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <header className="sticky top-0 z-50 flex w-full justify-between border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {children}
    </header>
  );
}
