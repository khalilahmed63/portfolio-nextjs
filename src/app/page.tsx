/* eslint-disable react/no-unescaped-entities */
import { FaInstagram, FaLinkedinIn, FaReact, FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { SiJavascript } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#272829]">
      <div className="max-w-screen-2xl min-h-screen px-5 md:px-32 mx-auto flex items-center">
        <div className="mt-10 flex items-center justify-center">
          <Image
            src={"/assets/images/khalil-ahmed-1.jpg"}
            alt="image"
            width={400}
            height={400}
            className="rounded-full shadow-xl hover:shadow-[#FFB100] hover:scale-95 shadow-black duration-500"
          />
          <div className="m-10">
            <h1 className="text-6xl font-bold text-[#FFB100]">Khalil ahmed.</h1>
            <h1 className="text-6xl font-bold text-white">
              I'm a react developer
            </h1>
            <p className="text-2xl text-gray-500 mt-4">
              I'm a Pakistan based Web developer and web designer focused on
              crafting clean & user-friendly experiences, I am passionate about
              building excellent software that improve the lives of those around
              me.
            </p>
            <button className="bg-[#FFB100] border-4 border-[#9A7318] shadow-xl shadow-black hover:shadow-md hover:shadow-black mt-5 py-1 px-3 rounded-full duration-300 hover:scale-95">
              Download CV
            </button>
            <div className=" mt-16 flex">
              <div className="mr-8">
                <Link href={"https://github.com/khalilahmed63"} target="_blank">
                  <BsGithub
                    size={25}
                    className="text-white hover:scale-125 hover:-translate-y-1 duration-300 "
                  />
                </Link>
              </div>
              <div className="mr-8">
                <Link
                  href={"https://www.linkedin.com/in/khalil-ahmed-308a061a6"}
                  target="_blank"
                >
                  <FaLinkedinIn
                    size={25}
                    className="text-white hover:scale-125 hover:-translate-y-1 duration-300"
                  />
                </Link>
              </div>
              <div className="mr-8">
                <Link
                  href={"https://web.facebook.com/khalil.ahmedp63/"}
                  target="_blank"
                >
                  <FaFacebookF
                    size={25}
                    className="text-white hover:scale-125 hover:-translate-y-1 duration-300"
                  />
                </Link>
              </div>
              <div className="mr-8">
                <Link
                  href={"https://www.instagram.com/khalil_ahmed_panhwar"}
                  target="_blank"
                >
                  <FaInstagram
                    size={25}
                    className="text-white hover:scale-125 hover:-translate-y-1 duration-300"
                  />
                </Link>
              </div>
              <div className="mr-8">
                <Link
                  href={"https://twitter.com/khalilahmedpan5"}
                  target="_blank"
                >
                  <FaTwitter
                    size={25}
                    className="text-white hover:scale-125 hover:-translate-y-1 duration-300"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl min-h-screen px-5 md:px-32  mx-auto flex items-cente">
        <div className="mt-10 w-full ">
          <div className=" text-2xl items-center justify-center text-center">
            <h1 className="text-gray-500 text-7xl font-bold tracking-widest">
              RESUME
            </h1>
            <h2 className="-mt-14 font-bold text-3xl text-white tracking-widest">
              ABOUT <span className="text-[#ffb400]">ME</span>
            </h2>
          </div>
          <div className="my-20 flex">
            <div className="w-full">
              <div className="">
                <h3 className="text-3xl text-white font-bold mb-3">
                  PERSONAL INFO
                </h3>
                <div className="mt-10">
                  <div className="flex mb-10">
                    <p className="text-white font-bold w-[50%]">
                      First Name :<span className=" text-gray-400">Khalil</span>
                    </p>

                    <p className="text-white font-bold w-[50%]">
                      Age : <span className=" text-gray-400">20</span>
                    </p>
                  </div>
                  <div className="flex mb-10">
                    <p className="text-white font-bold w-[50%]">
                      Freelance :
                      <span className=" text-gray-400">Avaliable</span>
                    </p>

                    <p className="text-white font-bold w-[50%]">
                      Phone :
                      <span className=" text-gray-400">+923070599766</span>
                    </p>
                  </div>
                </div>
                <div className="">
                  <div className="flex mb-10">
                    <p className="text-white font-bold w-[50%]">
                      Last Name :<span className=" text-gray-400">Ahmed</span>
                    </p>
                    <p className="text-white font-bold w-[50%]">
                      Natoinality :
                      <span className=" text-gray-400">pakistan</span>
                    </p>
                  </div>
                  <div className="flex mb-10">
                    <p className="text-white font-bold w-[50%]">
                      Address :<span className=" text-gray-400">hyderabad</span>
                    </p>
                    <p className="text-white font-bold w-[50%]">
                      Language :
                      <span className=" text-gray-400">
                        English, Urdu, Sindhi
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className=" ">
                <div className="flex">
                  <div className="w-full rounded p-5 m-3 border-2 border-gray-400">
                    <h1 className="pb-2 text-4xl font-bold text-[#FFB100] border-b-2 border-gray-400 ">
                      2+
                    </h1>
                    <p className="pt-2  ml-[20px] text-white">
                      YEARS OF EXPERIENCE
                    </p>
                  </div>
                  <div className="w-full rounded p-5 m-3 border-2 border-gray-400">
                    <h1 className="pb-2 text-4xl font-bold text-[#FFB100] border-b-2 border-gray-400 ">
                      18+
                    </h1>
                    <p className="pt-2  ml-[20px] text-white">
                      COMPLETED PROJECTS
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-full rounded p-5 m-3 border-2 border-gray-400">
                    <h1 className="pb-2 text-4xl font-bold text-[#FFB100] border-b-2 border-gray-400 ">
                      87+
                    </h1>
                    <p className="pt-2  ml-[20px] text-white">
                      HAPPY COUSTOMERS
                    </p>
                  </div>
                  <div className="w-full rounded p-5 m-3 border-2 border-gray-400">
                    <h1 className="pb-2 text-4xl font-bold text-[#FFB100] border-b-2 border-gray-400 ">
                      12+
                    </h1>
                    <p className="pt-2  ml-[20px] text-white">AWARDS WON</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl min-h-screen px-5 md:px-32  mx-auto flex items-cente">
        <div className=" w-full ">
          <div className=" text-2xl items-center justify-center text-center">
            <h2 className="-mt-14 font-bold text-3xl text-white tracking-widest">
              MY <span className="text-[#ffb400]">SkILLS</span>
            </h2>
          </div>
          <div className="my-10">
            <div className="flex flex-wrap justify-evenly w-full">
              <div className="mt-4">
                <div className="w-fit mx-auto group border-8 border-[#ffb200] hover:border-[#9A7318] rounded-full p-10 hover:bg-[#ffb200] duration-300">
                  <FaReact
                    size={60}
                    className="text-[#61DBFB] group-hover:text-white"
                  />
                </div>
                <h1 className="mt-2 font-bold text-3xl text-center text-white">
                  React js
                </h1>
              </div>
              <div className="mt-4">
                <div className="w-fit mx-auto group border-8 border-[#ffb200] hover:border-[#9A7318] rounded-full p-10 hover:bg-[#ffb200] duration-300">
                  <SiNextdotjs
                    size={60}
                    className="text-[#61DBFB] group-hover:text-white"
                  />
                </div>
                <h1 className="mt-2 font-bold text-3xl text-center text-white">
                  Next js
                </h1>
              </div>
              <div className="mt-4">
                <div className="w-fit mx-auto group border-8 border-[#ffb200] hover:border-[#9A7318] rounded-full p-10 hover:bg-[#ffb200] duration-300">
                  <IoLogoJavascript
                    size={60}
                    className="text-[#61DBFB] group-hover:text-white"
                  />
                </div>
                <h1 className="mt-2 font-bold text-3xl text-center text-white">
                  ES6 (Javascript)
                </h1>
              </div>
              <div className="mt-4">
                <div className="w-fit mx-auto group border-8 border-[#ffb200] hover:border-[#9A7318] rounded-full p-10 hover:bg-[#ffb200] duration-300">
                  <FaReact
                    size={60}
                    className="text-[#61DBFB] group-hover:text-white"
                  />
                </div>
                <h1 className="mt-2 font-bold text-3xl text-center text-white">
                  React
                </h1>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap justify-evenly w-full">
              <div className="mt-4">
                <div className="group border-8 border-[#ffb200] hover:border-[#9A7318] rounded-full p-10 hover:bg-[#ffb200] duration-300">
                  <FaReact
                    size={60}
                    className="text-[#61DBFB] group-hover:text-white"
                  />
                </div>
                <h1 className="mt-2 font-bold text-3xl text-center text-white">
                  React
                </h1>
              </div>
              <div className="mt-4">
                <div className="group border-8 border-[#ffb200] hover:border-[#9A7318] rounded-full p-10 hover:bg-[#ffb200] duration-300">
                  <FaReact
                    size={60}
                    className="text-[#61DBFB] group-hover:text-white"
                  />
                </div>
                <h1 className="mt-2 font-bold text-3xl text-center text-white">
                  React
                </h1>
              </div>
              <div className="mt-4">
                <div className="group border-8 border-[#ffb200] hover:border-[#9A7318] rounded-full p-10 hover:bg-[#ffb200] duration-300">
                  <FaReact
                    size={60}
                    className="text-[#61DBFB] group-hover:text-white"
                  />
                </div>
                <h1 className="mt-2 font-bold text-3xl text-center text-white">
                  React
                </h1>
              </div>
              <div className="mt-4">
                <div className="group border-8 border-[#ffb200] hover:border-[#9A7318] rounded-full p-10 hover:bg-[#ffb200] duration-300">
                  <FaReact
                    size={60}
                    className="text-[#61DBFB] group-hover:text-white"
                  />
                </div>
                <h1 className="mt-2 font-bold text-3xl text-center text-white">
                  React
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
