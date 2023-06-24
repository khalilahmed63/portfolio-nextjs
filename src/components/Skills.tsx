import React from "react";
import { BsBootstrapFill } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { SiNextdotjs } from "react-icons/si";
import { TbBrandTypescript, TbBrandTailwind } from "react-icons/tb";

export default function Skills() {
  return (
    <div className="max-w-screen-2xl min-h-screen px-5 md:px-10 lg:px-32 mt-20 mx-auto flex items-cente">
      <div className="w-full">
        <div className=" text-2xl items-center justify-center text-center">
          <h2 className=" font-bold text-xl md:text-2xl text-white tracking-widest">
            MY <span className="text-[#ffb400]">SKILLS</span>
          </h2>
        </div>
        <div className="my-10">
          <div className="mt-6 w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="mt-4 w-fit mx-auto">
              <div className="w-fit mx-auto group border-4 md:border-8 border-[#ffb200] hover:border-[#9A7318] rounded-full p-6 md:p-10 hover:bg-[#ffb200] duration-300">
                <FaReact
                  size={60}
                  className="hidden md:block text-[#61DBFB] group-hover:text-white"
                />
                <FaReact
                  size={35}
                  className="md:hidden text-[#61DBFB] group-hover:text-white"
                />
              </div>
              <h1 className="mt-2 font-bold text-xl md:text-2xl text-center text-white">
                React js
              </h1>
            </div>
            <div className="mt-4 w-fit mx-auto">
              <div className="w-fit mx-auto group border-4 md:border-8 border-[#ffb200] hover:border-[#9A7318] rounded-full p-6 md:p-10 hover:bg-[#ffb200] duration-300">
                <SiNextdotjs
                  size={60}
                  className="hidden md:block text-[#A243E8] group-hover:text-white"
                />
                <SiNextdotjs
                  size={35}
                  className="md:hidden text-[#A243E8] group-hover:text-white"
                />
              </div>
              <h1 className="mt-2 font-bold text-xl md:text-2xl text-center text-white">
                Next js
              </h1>
            </div>
            <div className="mt-4 w-fit mx-auto">
              <div className="w-fit mx-auto group border-4 md:border-8 border-[#ffb200] hover:border-[#9A7318] rounded-full p-6 md:p-10 hover:bg-[#ffb200] duration-300">
                <TbBrandTypescript
                  size={60}
                  className="hidden md:block text-[#007acc] group-hover:text-white"
                />
                <TbBrandTypescript
                  size={35}
                  className="md:hidden text-[#007acc] group-hover:text-white"
                />
              </div>
              <h1 className="mt-2 font-bold text-xl md:text-2xl text-center text-white">
                TypeScript
              </h1>
            </div>
            <div className="mt-4 w-fit mx-auto">
              <div className="w-fit mx-auto group border-4 md:border-8 border-[#ffb200] hover:border-[#9A7318] rounded-full p-6 md:p-10 hover:bg-[#ffb200] duration-300">
                <IoLogoJavascript
                  size={60}
                  className="hidden md:block text-[#F0DB4F] group-hover:text-white"
                />
                <IoLogoJavascript
                  size={35}
                  className="md:hidden text-[#F0DB4F] group-hover:text-white"
                />
              </div>
              <h1 className="mt-2 font-bold text-xl md:text-2xl text-center text-white">
                ES6 (Javascript)
              </h1>
            </div>
            <div className="mt-4 w-fit mx-auto">
              <div className="w-fit mx-auto group border-4 md:border-8 border-[#ffb200] hover:border-[#9A7318] rounded-full p-6 md:p-10 hover:bg-[#ffb200] duration-300">
                <TbBrandTailwind
                  size={60}
                  className="hidden md:block text-[#36B7F0] group-hover:text-white"
                />
                <TbBrandTailwind
                  size={35}
                  className="md:hidden text-[#36B7F0] group-hover:text-white"
                />
              </div>
              <h1 className="mt-2 font-bold text-xl md:text-2xl text-center text-white">
                Tailwind css
              </h1>
            </div>
            <div className="mt-4 w-fit mx-auto">
              <div className="w-fit mx-auto group border-4 md:border-8 border-[#ffb200] hover:border-[#9A7318] rounded-full p-6 md:p-10 hover:bg-[#ffb200] duration-300">
                <BsBootstrapFill
                  size={60}
                  className="hidden md:block text-[#563d7c] group-hover:text-white"
                />
                <BsBootstrapFill
                  size={35}
                  className="md:hidden text-[#563d7c] group-hover:text-white"
                />
              </div>
              <h1 className="mt-2 font-bold text-xl md:text-2xl text-center text-white">
                Bootstrap
              </h1>
            </div>
            <div className="mt-4 w-fit mx-auto">
              <div className="w-fit mx-auto group border-4 md:border-8 border-[#ffb200] hover:border-[#9A7318] rounded-full p-6 md:p-10 hover:bg-[#ffb200] duration-300">
                <IoLogoHtml5
                  size={60}
                  className="hidden md:block text-[#e34c26] group-hover:text-white"
                />
                <IoLogoHtml5
                  size={35}
                  className="md:hidden text-[#e34c26] group-hover:text-white"
                />
              </div>
              <h1 className="mt-2 font-bold text-xl md:text-2xl text-center text-white">
                Html
              </h1>
            </div>
            <div className="mt-4 w-fit mx-auto">
              <div className="w-fit mx-auto group border-4 md:border-8 border-[#ffb200] hover:border-[#9A7318] rounded-full p-6 md:p-10 hover:bg-[#ffb200] duration-300">
                <IoLogoCss3
                  size={60}
                  className="hidden md:block text-[#264de4] group-hover:text-white"
                />
                <IoLogoCss3
                  size={35}
                  className="md:hidden text-[#264de4] group-hover:text-white"
                />
              </div>
              <h1 className="mt-2 font-bold text-xl md:text-2xl text-center text-white">
                Css
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
