import Image from "next/image";
import Navbar from "../components/navbar";  

const Landing = () => {

  return (
    <>

      {/* main-content */}
      <div className="bg-black min-h-screen">

        {/* left side */}
        <div className="absolute w-70 top-1/3 left-30 text-zinc-200">
          <h1 className="text-7xl font-bold border-b  border-white/20">
            strategy
          </h1>
          <h1 className="text-7xl font-bold border-b border-white/20">
            +craft
          </h1>

          <div className="mt-4 w-80 text-xl">
            <p className="">
              to create brands, products, and messages from first-timers to
              Zara, BBC, Arco, Forbes... How? See the
            </p>

            <div className="flex gap-1">
              <p className=" opacity-80 hover:opacity-100 transition-all duration-300 ease-in-out cursor-pointer">
                work
                <Image
                  className="inline-flex ml-1"
                  src="/assets/icon-1.png"
                  width={15}
                  height={15}
                  alt=""
                />
              </p>

              <span >or get an </span>

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
          </div>
        </div>

        <div className="videos absolute top-0 right-0 w-[70vw] h-screen ">
          <video
            className="w-full h-full object-cover"
            src="/videos/sensaa.mp4"
            autoPlay
            muted
            playsInline
            loop
          />
        </div>


        <Navbar />

      </div>
    </>
  );
};

export default Landing;
