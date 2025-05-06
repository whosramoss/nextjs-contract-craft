import React from "react";
import ContractFormBody from "./_components/contract-form-body";
import HomeNavbar from "@/app/(home)/_components/home-navbar";

export default function HomePage() {
  return (
    <React.Fragment>
      <div className="relative min-h-screen sm:w-full">
        <div className="relative z-10">
          <HomeNavbar />
          <ContractFormBody />
        </div>
      </div>
    </React.Fragment>
  );
}
