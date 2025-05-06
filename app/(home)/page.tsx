import Hero from "@/app/(home)/_components/hero";
import Features from "@/app/(home)/_components/features";
import CTA from "@/app/(home)/_components/cta";
import Footer from "@/app/(home)/_components/footer";
import React from "react";
import HomeNavbar from "./_components/home-navbar";
import MouseMoveEffect from "../_core/components/mouse-move-effect";

export default function HomePage() {
  return (
    <React.Fragment>
      <MouseMoveEffect />
      <div className="relative min-h-screen sm:w-full">
        <div className="relative z-10">
          <HomeNavbar />
          <Hero />
          <Features />
          <CTA />
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}
