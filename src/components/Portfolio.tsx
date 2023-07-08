import React from "react";
import Image from "next/image";
import PortfolioCard from "./PortfolioCard";

export default function Portfolio() {
  return (
    <div className="pt-20 max-w-screen-2xl min-h-screen mt-20 px-5 md:px-10 lg:px-32 mx-auto flex items-cente">
      <div className="w-full ">
        <div className="text-2xl items-center justify-center text-center">
          <h2 className="font-bold text-3xl md:text-4xl tracking-widest uppercase text-white">
            PORT<span className="text-[#ffb200]">FOLIO</span>
          </h2>
        </div>
        <div className="my-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <PortfolioCard />
            <PortfolioCard />
            <PortfolioCard />
            <PortfolioCard />
            <PortfolioCard />
            <PortfolioCard />
          </div>
        </div>
      </div>
    </div>
  );
}
