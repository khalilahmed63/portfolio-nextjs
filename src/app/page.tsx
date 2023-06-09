/* eslint-disable react/no-unescaped-entities */
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#272829]">
      <div className="max-w-screen-2xl min-h-screen px-5 md:px-10 mx-auto flex items-center">
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
            <button className="bg-[#FFB100] border-4 border-[#9A7318]/90 shadow-xl shadow-black hover:shadow-md hover:shadow-black mt-5 py-1 px-3 rounded-full duration-300 hover:scale-95">
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

      <div className="max-w-screen-2xl min-h-screen px-5 md:px-10 mx-auto flex items-cente">
        <div className="mt-10 w-full ">
          <div className=" text-2xl items-center justify-center text-center">
            <h1 className="text-gray-500 text-7xl font-bold tracking-widest">
              RESUME
            </h1>
            <h2 className="-mt-14 font-bold text-3xl text-white tracking-widest">
              ABOUT <span className="text-[#ffb400]">ME</span>
            </h2>
          </div>
          <div className="mt-10 flex">
            <div className="w-full border-2 border-red-500">
              {" "}
              <div className="col-md-6 col-sm-12 row">
                <h3 className="text-white font-bold mb-3">PERSONAL INFO</h3>
                <div className="col-6">
                  <ul>
                    <li className="font-bold">
                      <p>
                        {" "}
                        First Name : <span className=" text-muted">Khalil</span>
                      </p>
                    </li>
                    <li className="font-bold">
                      <p>
                        {" "}
                        Age : <span className=" text-muted">20</span>
                      </p>
                    </li>
                    <li className="font-bold">
                      <p>
                        {" "}
                        Freelance :{" "}
                        <span className=" text-muted">Avaliable</span>
                      </p>
                    </li>
                    <li className="font-bold">
                      <p>
                        {" "}
                        Phone :{" "}
                        <span className=" text-muted">+923070599766</span>
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul>
                    <li className="font-bold">
                      <p>
                        {" "}
                        Last Name : <span className=" text-muted">Ahmed</span>
                      </p>
                    </li>
                    <li className="font-bold">
                      <p>
                        {" "}
                        Natoinality :{" "}
                        <span className=" text-muted">pakistan</span>
                      </p>
                    </li>
                    <li className="font-bold">
                      <p>
                        {" "}
                        Address : <span className=" text-muted">hyderabad</span>
                      </p>
                    </li>
                    <li className="font-bold">
                      <p>
                        {" "}
                        Language :{" "}
                        <span className=" text-muted">
                          English, Urdu, Sindhi
                        </span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full border-2 border-green-500">
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
    </main>
  );
}
