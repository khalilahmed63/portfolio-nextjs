import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";
import { GoMail } from "react-icons/go";

export default function ContactMe() {
  return (
    <div className="pt-20 max-w-screen-2xl min-h-screen px-5 mt-20 md:px-10 lg:px-32 mx-auto flex items-cente">
      <div className="w-full ">
        <div className="text-2xl items-center justify-center text-center">
          <h2 className="pb-6 font-bold text-3xl text-white tracking-widest drop-shadow-2xl">
            CONTACT <span className="text-[#ffb400]">ME</span>
          </h2>
        </div>
        <div className="my-10">
          <div className="lg:flex pt-6">
            <div className="w-full lg:w-[40%]">
              <h1 className="pb-6 font-bold text-3xl text-white tracking-widest">
                (: DON&apos;T BE <span className="text-[#ffb400]"> SHY !</span>
              </h1>
              <p className="text-white">
                I&lsquo;m open to discussing new projects, creative ideas, and
                opportunities to be part of your vision. Let&lsquo;s connect and
                explore possibilities together. Feel free to reach out for a
                free consultation using the contact information below.
              </p>
              <div className="flex items-center mt-8">
                <div className="">
                  <HiOutlineLocationMarker
                    className="text-[#ffb400] mr-4"
                    size={40}
                  />
                </div>
                <div className="">
                  <h2 className=" font-bold text-xl text-white tracking-widest">
                    Address Point
                  </h2>
                  <p className="text-white">Islamabad, Punjab, Pakistan .</p>
                </div>
              </div>
              <div className="flex items-center mt-8">
                <div className="">
                  <GoMail className="text-[#ffb400] mr-4" size={40} />
                </div>
                <div className="">
                  <h2 className=" font-bold text-xl text-white tracking-widest">
                    Mail Me
                  </h2>
                  <p className="text-white">panhwarkhalilahmed@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center mt-8">
                <div className="">
                  <BsWhatsapp className="text-[#ffb400] mr-4" size={40} />
                </div>
                <div className="">
                  <h2 className=" font-bold text-xl text-white tracking-widest">
                    Whatsapp
                  </h2>
                  <p className="text-white">+923070599766</p>
                </div>
              </div>
            </div>
            <div className="w-full mt-10 lg:mt-0 lg:pl-4 lg:w-[60%]">
              <form action="#">
                <div className="flex">
                  <input
                    type="text"
                    className="shadow-lg shadow-black focus:shadow-black outline-none focus:shadow-md duration-300 border-4 border-[#333B43] bg-[#45505B] w-[50%] p-2 rounded-full text-white"
                    placeholder="Enter your name"
                  />
                  <input
                    type="email"
                    className="shadow-lg shadow-black focus:shadow-black focus:shadow-md outline-none duration-300 border-4 border-[#333B43] bg-[#45505B] w-[50%] p-2 rounded-full text-white ml-4"
                    placeholder="Enter your email"
                  />
                </div>
                <input
                  type="text"
                  className="shadow-lg shadow-black focus:shadow-black focus:shadow-md outline-none duration-300 border-4 border-[#333B43] bg-[#45505B] w-full p-2 mt-4 rounded-full text-white"
                  placeholder="Your subject"
                />
                <textarea
                  rows={7}
                  className="shadow-lg shadow-black focus:shadow-black focus:shadow-md outline-none duration-300 first-letter border-4 border-[#333B43] bg-[#45505B] w-full p-2 mt-4 rounded-2xl text-white"
                  placeholder="Write your message here..."
                />
                <button
                  type="submit"
                  className="bg-[#ffb400] border-4 border-[#9A7318] shadow-xl shadow-black hover:shadow-md hover:shadow-black mt-3 py-1 px-3 rounded-full duration-300 hover:scale-95"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
