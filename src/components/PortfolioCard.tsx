import React from "react";
import Image from "next/image";

export default function PortfolioCard() {
  return (
    <a href="assets/img/work-1.jpg">
      <div className="rounded-xl group bg-white w-fit h-fit overflow-hidden shadow-md shadow-black hover:scale-105 duration-200">
        <div className="group-hover:scale-100 duration-300 overflow-hidden">
          <Image
            src="/assets/images/react.jpg"
            alt="image"
            width={400}
            height={400}
          />
        </div>
        <div className="px-4 py-2">
          <h2 className="font-bold">Lorem impsum dolor</h2>
          <div className="w-more mt-1 text-xs">
            <span className="w-ctegory">Web Design</span> /{" "}
            <span className="w-date">18 Sep. 2018</span>
          </div>
        </div>
      </div>
    </a>
  );
}
