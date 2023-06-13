import React from "react";
import Image from "next/image";

export default function Portfolio() {
  return (
    <div>
      <div className="max-w-screen-2xl min-h-screen px-5 md:px-32  mx-auto flex items-cente">
        <div className="w-full ">
          <div className="text-2xl items-center justify-center text-center">
            <h2 className="pb-6 font-bold text-3xl text-white tracking-widest">
              PORT<span className="text-[#ffb400]">FOLIO</span>
            </h2>
          </div>
          <div className="my-10">
            <div className="grid grid-cols-3 gap-6">
              <div className="rounded-xl group bg-white overflow-hidden shadow-lg shadow-gray-500 hover:scale-90 duration-300 hover:shadow-md hover:shadow-gray-500">
                <a
                  href="assets/img/work-1.jpg"
                >
                  <div className="group-hover:scale-110 duration-300">
                    <Image
                      src="/assets/images/react.jpg"
                      alt="image"
                      width={500}
                      height={500}
                      className="img-fluid"
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
              <div className="">
                <div className="work-box">
                  <a
                    href="assets/img/work-2.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                  >
                    <div className="work-img">
                      <Image
                        src="/assets/images/react.jpg"
                        alt="image"
                        width={50}
                        height={50}
                        className="img-fluid"
                      />
                    </div>
                  </a>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Loreda Cuno Nere</h2>
                        <div className="w-more">
                          <span className="w-ctegory">Web Design</span> /{" "}
                          <span className="w-date">18 Sep. 2018</span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <a href="portfolio-details.html">
                            {" "}
                            <span className="bi bi-plus-circle"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="work-box">
                  <a
                    href="assets/img/work-3.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                  >
                    <div className="work-img">
                      <Image
                        src="/assets/images/react.jpg"
                        alt="image"
                        width={50}
                        height={50}
                        className="img-fluid"
                      />
                    </div>
                  </a>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Mavrito Lana Dere</h2>
                        <div className="w-more">
                          <span className="w-ctegory">Web Design</span> /{" "}
                          <span className="w-date">18 Sep. 2018</span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <a href="portfolio-details.html">
                            {" "}
                            <span className="bi bi-plus-circle"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="work-box">
                  <a
                    href="assets/img/work-4.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                  >
                    <div className="work-img">
                      <Image
                        src="/assets/images/react.jpg"
                        alt="image"
                        width={50}
                        height={50}
                        className="img-fluid"
                      />
                    </div>
                  </a>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Bindo Laro Cado</h2>
                        <div className="w-more">
                          <span className="w-ctegory">Web Design</span> /{" "}
                          <span className="w-date">18 Sep. 2018</span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <a href="portfolio-details.html">
                            {" "}
                            <span className="bi bi-plus-circle"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="work-box">
                  <a
                    href="assets/img/work-5.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                  >
                    <div className="work-img">
                      <Image
                        src="/assets/images/react.jpg"
                        alt="image"
                        width={50}
                        height={50}
                        className="img-fluid"
                      />
                    </div>
                  </a>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Studio Lena Mado</h2>
                        <div className="w-more">
                          <span className="w-ctegory">Web Design</span> /{" "}
                          <span className="w-date">18 Sep. 2018</span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <a href="portfolio-details.html">
                            {" "}
                            <span className="bi bi-plus-circle"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="work-box">
                  <a
                    href="/assets/imgage/react.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                  >
                    <div className="work-img">
                      <Image
                        src="/assets/images/react.jpg"
                        alt="image"
                        width={50}
                        height={50}
                        className="img-fluid"
                      />
                    </div>
                  </a>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Studio Big Bang</h2>
                        <div className="w-more">
                          <span className="w-ctegory">Web Design</span> /{" "}
                          <span className="w-date">18 Sep. 2017</span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <a href="portfolio-details.html">
                            {" "}
                            <span className="bi bi-plus-circle"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
