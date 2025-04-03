import React from "react";
import Image from "next/image";

const landing = () => {
  return (
    <>
      <div className="w-full h-full relative">
        <Image
          src="/assets/bg-sensa.avif"
          alt=""
          className="w-full h-full bg-center bg-cover opacity-20"
          width={1000}
          height={1000}
        />
      </div>

      <div className="text-container ">
        <div className="absolute w-70 top-1/3 left-30 text-white">
          <h1 className="text-7xl font-bold border-b  border-white/20">
            strategy
          </h1>
          <h1 className="text-7xl font-bold border-b border-white/20">
            +craft
          </h1>

          <p className="mt-4 w-80 text-xl">
            to create brands, products, and messages from first-timers to Zara,
            BBC, Arco, Forbes... How? See the
            <div className="flex gap-1">
              <p className=" opacity-70 hover:opacity-100 transition-all duration-300 ease-in-out cursor-pointer">
                work
                <Image
                  className="inline-flex ml-1"
                  src="/assets/icon-1.png"
                  width={15}
                  height={15}
                  alt=""
                />
              </p>

              <span>or get an </span>
              
              <p className="opacity-70 hover:opacity-100 transition-all duration-300 ease-in-out cursor-pointer">
                intro
                <Image
                  className="inline-flex ml-1"
                  src="/assets/icon-2.png"
                  width={15}
                  height={15}
                  alt=""
                />
              </p>
            </div>
          </p>
        </div>
      </div>
    </>
  );
};

export default landing;
