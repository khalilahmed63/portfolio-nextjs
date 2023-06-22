import React from "react";
import Image from "next/image";
import PortfolioCard from "./PortfolioCard";

export default function Portfolio() {
  return (
    <div className="pt-20 max-w-screen-2xl min-h-screen px-5 md:px-32  mx-auto flex items-cente">
      <div className="w-full ">
        <div className="text-2xl items-center justify-center text-center">
          <h2 className="pb-6 font-bold text-3xl text-white tracking-widest">
            PORT<span className="text-[#ffb400]">FOLIO</span>
          </h2>
        </div>
        <div className="my-10">
          <div className="grid grid-cols-3 gap-10">
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
