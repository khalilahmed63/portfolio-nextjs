import React from "react";

export default function About() {
  return (
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
        <div className="my-20 sm:flex">
          <div className="w-full">
            <div className="">
              <h3 className="text-3xl text-white font-bold mb-3">
                PERSONAL INFO
              </h3>
              <div className="mt-10">
                <div className="flex mb-10">
                  <p className="text-white font-bold w-[50%]">
                    Name : <span className=" text-gray-400">Khalil ahmed</span>
                  </p>

                  <p className="text-white font-bold w-[50%]">
                    Age : <span className=" text-gray-400">23</span>
                  </p>
                </div>
                <div className="flex mb-10">
                  <p className="text-white font-bold w-[50%]">
                    Freelance :
                    <span className=" text-gray-400"> Avaliable</span>
                  </p>

                  <p className="text-white font-bold w-[50%]">
                    Phone :
                    <span className=" text-gray-400"> +923070599766</span>
                  </p>
                </div>
              </div>
              <div className="">
                <div className="flex mb-10">
                  <p className="text-white font-bold w-[50%]">
                    Consultation : <span className=" text-gray-400">Free</span>
                  </p>
                  <p className="text-white font-bold w-[50%]">
                    Natoinality :
                    <span className=" text-gray-400"> Pakistani</span>
                  </p>
                </div>
                <div className="flex mb-10">
                  <p className="text-white font-bold w-[50%]">
                    Address :<span className=" text-gray-400"> Islamabad </span>
                  </p>
                  <p className="text-white font-bold w-[50%]">
                    Language :
                    <span className=" text-gray-400">
                      English, Urdu, Hindi, Sindhi
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
              <div className="sm:flex">
                <div className="w-full rounded p-5 sm:m-3 mb-4 border-2 border-gray-400">
                  <h1 className="pb-2 text-4xl font-bold text-[#FFB100] border-b-2 border-gray-400 ">
                    2+
                  </h1>
                  <p className="pt-2  ml-[20px] text-white">
                    YEARS OF EXPERIENCE
                  </p>
                </div>
                <div className="w-full rounded p-5 sm:m-3 mb-4 border-2 border-gray-400">
                  <h1 className="pb-2 text-4xl font-bold text-[#FFB100] border-b-2 border-gray-400 ">
                    18+
                  </h1>
                  <p className="pt-2  ml-[20px] text-white">
                    COMPLETED PROJECTS
                  </p>
                </div>
              </div>
              <div className="sm:flex">
                <div className="w-full rounded p-5 sm:m-3 mb-4 border-2 border-gray-400">
                  <h1 className="pb-2 text-4xl font-bold text-[#FFB100] border-b-2 border-gray-400 ">
                    87+
                  </h1>
                  <p className="pt-2  ml-[20px] text-white">HAPPY COUSTOMERS</p>
                </div>
                <div className="w-full rounded p-5 sm:m-3 mb-4 border-2 border-gray-400">
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
  );
}