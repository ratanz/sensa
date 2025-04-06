import React, { useState, useEffect } from "react";
import Image from "next/image";

const videos = [
  "/videos/video1.mp4",
  "/videos/video2.mp4",
  "/videos/video3.mp4",
]

const Landing = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  useEffect(() => {
    // Set up timer to change videos
    const videoTimer = setTimeout(() => {
      setIsTransitioning(true);
      
      // Wait for fade out transition before changing video
      setTimeout(() => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
        setIsTransitioning(false);
      }, 1000); // 1 second for fade out transition
      
    }, 5000); // Change video every 5 seconds
    
    return () => {
      clearTimeout(videoTimer);
    };
  }, [currentVideoIndex]);
  
  return (
    <>


      <div className=" relative bg-image">
        <Image
          src="/assets/bg-sensa.avif"
          alt=""
          className="w-full h-full bg-center bg-cover opacity-20"
          width={1000}
          height={1000}
        />

      </div>


      {/* main-text */}
      <div className=" absolute top-0 text-container flex w-full h-screen">
        {/* left side */}
        <div className="absolute w-70 top-1/3 left-30 text-white">
          <h1 className="text-7xl font-bold border-b  border-white/20">
            strategy
          </h1>
          <h1 className="text-7xl font-bold border-b border-white/20">
            +craft
          </h1>

          <div className="mt-4 w-80 text-xl">
            <p>
              to create brands, products, and messages from first-timers to Zara,
              BBC, Arco, Forbes... How? See the
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
          </div>
        </div>


        <div className="videos absolute right-0 w-[70vw] h-full z-50">
          <div 
            className={`transition-opacity duration-1000 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
          >
            <video 
              className="w-full h-full object-cover" 
              src={videos[currentVideoIndex]} 
              autoPlay 
              muted 
              onEnded={() => setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length)}
            />
          </div>
        </div>


      </div>

      {/* right side */}


    </>
  );
};

export default Landing;
