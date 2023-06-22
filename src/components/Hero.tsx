import Link from "next/link";
import React from "react";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="max-w-screen-2xl min-h-screen px-5 md:px-32 mx-auto flex items-center">
      <div className="mt-10 sm:flex items-center justify-center">
        <Image
          src={"/assets/images/khalil-ahmed-1.jpg"}
          alt="image"
          width={400}
          height={400}
          className="hidden sm:block rounded-full shadow-xl hover:shadow-[#FFB100] hover:scale-95 shadow-black duration-500"
        />
         <Image
          src={"/assets/images/khalil-ahmed-1.jpg"}
          alt="image"
          width={300}
          height={300}
          className="sm:hidden rounded-full shadow-xl hover:shadow-[#FFB100] hover:scale-95 shadow-black duration-500"
        />
        <div className="m-5 sm:m-10">
          <h1 className="text-6xl font-bold text-[#FFB100]">Khalil ahmed.</h1>
          <h1 className="text-6xl font-bold text-white">
            I&apos;m a react developer
          </h1>
          <p className="text-2xl text-gray-500 mt-4">
            I&apos;m a Pakistan based Web developer and web designer focused on
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
                  size={30}
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
                  size={30}
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
                  size={30}
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
                  size={30}
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
                  size={30}
                  className="text-white hover:scale-125 hover:-translate-y-1 duration-300"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
