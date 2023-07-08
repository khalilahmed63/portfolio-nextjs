import Link from "next/link";
import React from "react";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export default function Hero() {
  return (
    <div className="max-w-screen-2xl min-h-screen px-5 md:px-10 lg:px-32 mx-auto flex items-center">
      <div className="mt-10 lg:flex items-center justify-center">
        <div className="w-full flex justify-center">
          <Image
            src={"/assets/images/khalil-ahmed-1.jpg"}
            alt="image"
            width={400}
            height={400}
            className="hidden sm:block rounded-full shadow-xl hover:shadow-[#ffb400] hover:scale-95 shadow-black duration-500"
          />
          <Image
            src={"/assets/images/khalil-ahmed-1.jpg"}
            alt="image"
            width={300}
            height={300}
            className="sm:hidden rounded-full shadow-xl hover:shadow-[#ffb400] hover:scale-95 shadow-black duration-500"
          />
        </div>
        <div className="mt-5 mx-0 ml-5 sm:my-10">
          <h1 className="text-center md:text-left font-bold text-3xl md:text-4xl tracking-widest font-outline-white-2 font-[Neuropolitical] uppercase text-[#ffb200]">
            Khalil ahmed.
          </h1>
          <h1 className="font-bold text-3xl md:text-4xl tracking-widest font-outline-white-2 font-[Neuropolitical] uppercase text-[#ffb200] text-center md:text-left">
            I&apos;m a react developer
          </h1>
          <p className="text-lg sm:text-xl md:sm:text-2xl text-center md:text-left text-gray-500 mt-4 w-full">
            I&apos;m a Pakistan based Web developer and web designer focused on
            crafting clean & user-friendly experiences, I am passionate about
            building excellent software that improve the lives of those around
            me.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link href={"/KHALIL-REACTDEVELOPER-CV.pdf"} target="_blank">
              <button className="bg-[#ffb400] border-4 border-[#9A7318] text-white shadow-xl shadow-black hover:shadow-md hover:shadow-black mt-5 py-1 px-3 rounded-full duration-300 hover:scale-95">
                Download CV
              </button>
            </Link>
          </div>
          <div className="mt-16 flex justify-center md:justify-start">
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
            <div className="">
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
