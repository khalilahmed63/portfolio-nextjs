import React from "react";
import Image from "next/image";

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
            <div className="rounded-xl group bg-white overflow-hidden shadow-lg shadow-gray-500 hover:scale-90 duration-300 hover:shadow-md hover:shadow-gray-500">
              <a href="assets/img/work-1.jpg">
                <div className="group-hover:scale-110 duration-300 overflow-hidden">
                  <Image
                    src="/assets/images/react.jpg"
                    alt="image"
                    width={400}
                    height={400}
                    className=""
                  />
                </div>
              </a>
              <div className=" p-4">
                <h2 className="font-bold">Lorem impsum dolor</h2>
                <div className="w-more mt-1 text-xs">
                  <span className="w-ctegory">Web Design</span> /{" "}
                  <span className="w-date">18 Sep. 2018</span>
                </div>
              </div>
            </div>
            <div className="rounded-xl group bg-white overflow-hidden shadow-lg shadow-gray-500 hover:scale-90 duration-300 hover:shadow-md hover:shadow-gray-500">
              <a href="assets/img/work-1.jpg">
                <div className="group-hover:scale-110 duration-300 overflow-hidden">
                  <Image
                    src="/assets/images/react.jpg"
                    alt="image"
                    width={400}
                    height={400}
                    className=""
                  />
                </div>
              </a>
              <div className=" p-4">
                <h2 className="font-bold">Lorem impsum dolor</h2>
                <div className="w-more mt-1 text-xs">
                  <span className="w-ctegory">Web Design</span> /{" "}
                  <span className="w-date">18 Sep. 2018</span>
                </div>
              </div>
            </div>
            <div className="rounded-xl group bg-white overflow-hidden shadow-lg shadow-gray-500 hover:scale-90 duration-300 hover:shadow-md hover:shadow-gray-500">
              <a href="assets/img/work-1.jpg">
                <div className="group-hover:scale-110 duration-300 overflow-hidden">
                  <Image
                    src="/assets/images/react.jpg"
                    alt="image"
                    width={400}
                    height={400}
                    className=""
                  />
                </div>
              </a>
              <div className=" p-4">
                <h2 className="font-bold">Lorem impsum dolor</h2>
                <div className="w-more mt-1 text-xs">
                  <span className="w-ctegory">Web Design</span> /{" "}
                  <span className="w-date">18 Sep. 2018</span>
                </div>
              </div>
            </div>
            <div className="rounded-xl group bg-white overflow-hidden shadow-lg shadow-gray-500 hover:scale-90 duration-300 hover:shadow-md hover:shadow-gray-500">
              <a href="assets/img/work-1.jpg">
                <div className="group-hover:scale-110 duration-300 overflow-hidden">
                  <Image
                    src="/assets/images/react.jpg"
                    alt="image"
                    width={400}
                    height={400}
                    className=""
                  />
                </div>
              </a>
              <div className=" p-4">
                <h2 className="font-bold">Lorem impsum dolor</h2>
                <div className="w-more mt-1 text-xs">
                  <span className="w-ctegory">Web Design</span> /{" "}
                  <span className="w-date">18 Sep. 2018</span>
                </div>
              </div>
            </div>
            <div className="rounded-xl group bg-white overflow-hidden shadow-lg shadow-gray-500 hover:scale-90 duration-300 hover:shadow-md hover:shadow-gray-500">
              <a href="assets/img/work-1.jpg">
                <div className="group-hover:scale-110 duration-300 overflow-hidden">
                  <Image
                    src="/assets/images/react.jpg"
                    alt="image"
                    width={400}
                    height={400}
                    className=""
                  />
                </div>
              </a>
              <div className=" p-4">
                <h2 className="font-bold">Lorem impsum dolor</h2>
                <div className="w-more mt-1 text-xs">
                  <span className="w-ctegory">Web Design</span> /{" "}
                  <span className="w-date">18 Sep. 2018</span>
                </div>
              </div>
            </div>
            <div className="rounded-xl group bg-white overflow-hidden shadow-lg shadow-gray-500 hover:scale-90 duration-300 hover:shadow-md hover:shadow-gray-500">
              <a href="assets/img/work-1.jpg">
                <div className="group-hover:scale-110 duration-300 overflow-hidden">
                  <Image
                    src="/assets/images/react.jpg"
                    alt="image"
                    width={400}
                    height={400}
                    className=""
                  />
                </div>
              </a>
              <div className=" p-4">
                <h2 className="font-bold">Lorem impsum dolor</h2>
                <div className="w-more mt-1 text-xs">
                  <span className="w-ctegory">Web Design</span> /{" "}
                  <span className="w-date">18 Sep. 2018</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
