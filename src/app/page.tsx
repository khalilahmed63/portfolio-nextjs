/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#272829]">
      <div className="max-w-screen-lg p-4 mx-auto">
        <div className="flex flex-col items-center justify-center">
          <Image
            src={"/assets/images/khalil ahmed.jpg"}
            alt="image"
            width={400}
            height={400}
            className="rounded-full"
          />
          <div className="text-center my-5">
            <h1 className="text-6xl font-bold text-[#FFB100]">Khalil ahmed</h1>
            <h1 className="text-6xl font-bold text-white">
              I'm a react developer
            </h1>
            <p className="text-2xl text-gray-500 mt-4">
              I'm a Pakistan based Web developer and web designer focused on
              crafting clean & user-friendly experiences, I am passionate about
              building excellent software that improve the lives of those around
              me.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-screen-lg p-10 mx-auto">
        <div className="relative text-2xl items-center justify-center">
          <h1 className="absolute fw-bold ">RESUME</h1>
          <h2 className="absolute fw-bold text-white">
            ABOUT <span className="text-[#ffb400]">ME</span>{" "}
          </h2>
        </div>
      </div>
    </main>
  );
}
