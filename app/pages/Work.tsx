import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import WorkTemplate from "../components/WorkTemplate";

// Create individual project components using the WorkTemplate
export const Klarna = () => {
  
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.1 });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const cardVariants = {
    hidden: {
      opacity: 0,
      transform: "translateX(-50%) perspective(1200px) translateY(0px)",
    },
    visible: (i: { x: number; y: number; rotate: number; delay: number }) => ({
      opacity: 1,
      transform: `translateX(-90%) perspective(1200px) translateX(${i.x}px) translateY(${i.y}px) rotate(${i.rotate}deg)`,
      transition: {
        type: "spring", 
        stiffness: 40, 
        damping: 15,
        delay: i.delay,
      }
    })
  };

  const containerVariants = {
    hidden: {
      opacity: 0,
      transform: "perspective(1200px) translateY(0px)" 
    },
    visible: {
      opacity: 1,
      transform: "perspective(1200px) translateY(-120px)",
      transition: {
        type: "spring", 
        stiffness: 30, 
        damping: 15,
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  return (
    <WorkTemplate
      bgColor="bg-[#FEB3C8]"
      titleColor="text-[#610033]"
      subtitleColor="text-[#610034bc]"
      title="Klarna"
      subtitle={
        <>
          Elevating the online shopping <br />
          experience Europe style
        </>
      }
      accentColor="#610033"
      sectionColor="pink"
    >

      {/* Framer-style card layout */}
      <motion.div 
        ref={containerRef}
        className="absolute right-50 -bottom-[80vh] w-full h-full flex pointer-events-none"
        data-framer-name="klarna cards"
        style={{ 
          willChange: "transform", 
          perspective: "1200px" 
        }}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* Card 1 - Cart info */}
        <motion.div 
          className="absolute left-1/2"
          data-framer-name="card_1"
          style={{ 
            willChange: "transform", 
            transformOrigin: "center",
          }}
          variants={cardVariants}
          custom={{ x: -400, y: 90, rotate: -8.00105, delay: 0.1 }}
        >
          <div 
            style={{
              position: "absolute",
              borderRadius: "24px",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              width: "440px",
              height: "760px",
              overflow: "hidden"
            }}
            data-framer-background-image-wrapper="true"
          >
            <Image 
              src="https://framerusercontent.com/images/P4cQoW8nLK9NZ6jkeMtUBx8.png?scale-down-to=1024"
              alt="card cart info"
              width={770}
              height={1330}
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                borderRadius: "inherit",
                objectPosition: "center",
                objectFit: "cover"
              }}
            />
          </div>
        </motion.div>

        {/* Card 5 - Checkout code */}
        <motion.div 
          className="absolute left-1/2"
          data-framer-name="card_5"
          style={{ 
            willChange: "transform", 
            transformOrigin: "center",
          }}
          variants={cardVariants}
          custom={{ x: 400, y: 90, rotate: 8.00105, delay: 0.2 }}
        >
          <div 
            style={{
              position: "absolute",
              borderRadius: "24px",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              width: "440px",
              height: "760px",
              overflow: "hidden"
            }}
            data-framer-background-image-wrapper="true"
          >
            <Image 
              src="https://framerusercontent.com/images/BGi7zUoC7eHlvYnwdxd19FP3BqA.svg"
              alt="card checkout code"
              width={475}
              height={808}
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                borderRadius: "inherit",
                objectPosition: "center",
                objectFit: "cover"
              }}
            />
          </div>
        </motion.div>

        {/* Card 2 - Product page info */}
        <motion.div 
          className="absolute left-1/2"
          data-framer-name="card_2"
          style={{ 
            willChange: "transform", 
            transformOrigin: "center",
            zIndex: 2
          }}
          variants={cardVariants}
          custom={{ x: -225, y: 40, rotate: -4, delay: 0.3 }}
        >
          <div 
            style={{
              position: "absolute",
              borderRadius: "24px",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              width: "440px",
              height: "760px",
              overflow: "hidden"
            }}
            data-framer-background-image-wrapper="true"
          >
            <Image 
              src="https://framerusercontent.com/images/J9LfzlF240RJ0MrTKIynPqOSBZ0.svg"
              alt="card product page info"
              width={475}
              height={808}
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                borderRadius: "inherit",
                objectPosition: "center",
                objectFit: "cover"
              }}
            />
          </div>
        </motion.div>

        {/* Card 4 - Checkout */}
        <motion.div 
          className="absolute left-1/2"
          data-framer-name="card_4"
          style={{ 
            willChange: "transform", 
            transformOrigin: "center",
            zIndex: 2
          }}
          variants={cardVariants}
          custom={{ x: 225, y: 40, rotate: 4, delay: 0.4 }}
        >
          <div 
            style={{
              position: "absolute",
              borderRadius: "24px",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              width: "440px",
              height: "760px",
              overflow: "hidden"
            }}
            data-framer-background-image-wrapper="true"
          >
            <Image 
              src="https://framerusercontent.com/images/4a293gmFwxVPivadNyPAIyzjPw.svg"
              alt="card checkout"
              width={472}
              height={806}
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                borderRadius: "inherit",
                objectPosition: "center",
                objectFit: "cover"
              }}
            />
          </div>
        </motion.div>

        {/* Checkout handbook - Center card */}
        <motion.div 
          className="absolute left-1/2"
          data-framer-name="checkout handbook"
          style={{ 
            willChange: "transform", 
            transformOrigin: "center",
            zIndex: 3
          }}
          variants={cardVariants}
          custom={{ x: 0, y: 0, rotate: 0, delay: 0.5 }}
        >
          <div 
            style={{
              position: "absolute",
              borderRadius: "24px",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              width: "440px",
              height: "760px",
              overflow: "hidden"
            }}
            data-framer-background-image-wrapper="true"
          >
            <Image 
              src="https://framerusercontent.com/images/R1HbpOq67pldX3FyVYBo04zaA2k.png?scale-down-to=1024"
              alt="card cover"
              width={770}
              height={1328}
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                borderRadius: "inherit",
                objectPosition: "center",
                objectFit: "cover"
              }}
            />
          </div>
        </motion.div>
      </motion.div>

    </WorkTemplate>
  );
};

export const BBC = () => {
  // BBC images
  const bbcImages = [
    "https://framerusercontent.com/images/lLG8Kf5oCl6eO5dBfA3VmQ3No.jpg?scale-down-to=1024",
    "https://framerusercontent.com/images/JL5Q9BxS7FaKMPZ8vhSwyjw2tc.jpg?scale-down-to=1024",
    "https://framerusercontent.com/images/hQVBeiRdL9WgdGbwnoVLvYP2grI.jpg?scale-down-to=1024",
  ];

  return (
    <WorkTemplate
      bgColor="bg-[#0A0E45]"
      titleColor="text-white"
      subtitleColor="text-gray-300"
      title="BBC"
      subtitle={
        <>
          Creating a new learning experience <br />
          from the legendary 80&apos;s course
        </>
      }
      accentColor="#FFFFFF"
      sectionColor="darkBlue"
    >
      
    </WorkTemplate>
  );
};

export const Briteside = () => {
  // Briteside images
  const britesideImages = [
    "https://framerusercontent.com/images/PfIhsgwZIoMJAOjvkLdOMXejM.jpg?scale-down-to=1024",
    "https://framerusercontent.com/images/4r6BQxkpztCYRJpQnBArjuHcA8.jpg?scale-down-to=1024",
    "https://framerusercontent.com/images/qJfVdNDrqgNWKAMnI0LrV6ik.jpg?scale-down-to=1024",
  ];

  return (
    <WorkTemplate
      bgColor="bg-[#FFEAA0]"
      titleColor="text-[#047659]"
      subtitleColor="text-[#047659cc]"
      title="Briteside"
      subtitle={
        <>
          Shaping the herb revolution, from <br />
          napkin to IPO
        </>
      }
      accentColor="#047659"
      sectionColor="yellow"
    >
   
    </WorkTemplate>
  );
};

export const Cabify = () => {
  // Cabify images
  const cabifyImages = [
    "https://framerusercontent.com/images/9wOppjzuWl1D1K9RqAHQuTMU0.jpg?scale-down-to=1024",
    "https://framerusercontent.com/images/vTO5q1sA5ml9wSgNQoLh1jQVls.jpg?scale-down-to=1024",
    "https://framerusercontent.com/images/JYoHRlSYAJikrQpW0aUjMoqRnOE.jpg?scale-down-to=1024",
  ];

  return (
    <WorkTemplate
      bgColor="bg-[#e1e3ee]"
      titleColor="text-[#6039C8]"
      subtitleColor="text-[#6039c8cc]"
      title="Cabify"
      subtitle={
        <>
          A tech inspired illustration system to <br />
          move millions of passengers around the world
        </>
      }
      accentColor="#6039C8"
      sectionColor="lightPurple"
    >
    </WorkTemplate>
  );
};

export const Facebook = () => {
  // Facebook images
  const facebookImages = [
    "https://framerusercontent.com/images/QVEV2DoNM4jdJnK15mIV6GEkWE.jpg?scale-down-to=1024",
    "https://framerusercontent.com/images/rtKkQiym9CpLyJ5Qa9ITjk3g7w.jpg?scale-down-to=1024",
    "https://framerusercontent.com/images/aQCVdF9vw1PbQK6RlTQNgJO0U.jpg?scale-down-to=1024",
  ];

  return (
    <WorkTemplate
      bgColor="bg-[#1F4E98]"
      titleColor="text-[#fff]"
      subtitleColor="[#1F4E98]"
      title="Facebook"
      subtitle={
        <>
          Honoring some of the women who <br /> make the world a better place
        </>
      }
      accentColor="#1F4E98"
      sectionColor="darkBlue"
    >
    </WorkTemplate>
  );
};

export const JME = () => {
  // JME images
  const jmeImages = [
    "https://framerusercontent.com/images/M0iyWvxeXQ6hwWQQ2m4NkXHXjA.jpg?scale-down-to=1024",
    "https://framerusercontent.com/images/iBbTFojRzqSxKf9KKRUu6ReF3s.jpg?scale-down-to=1024",
    "https://framerusercontent.com/images/kV8Z1O9rn3P4nVKnG9VsXpITl8.jpg?scale-down-to=1024",
  ];

  return (
    <WorkTemplate
      bgColor="bg-[#021A33]"
      titleColor="text-[#DFD0BB]"
      subtitleColor="text-[#DFD0BB]"
      title="JME"
      subtitle={
        <>
          Helping one of the top European VC <br /> firms to better tell what makes them different
        </>
      }
      accentColor="#DFD0BB"
      sectionColor="navyBlue"
    >
    </WorkTemplate>
  );
};

// This component combines all the project components
const Work = () => {
  return (
    <>
      <Klarna />
      <BBC />
      <Briteside />
      <Cabify />
      <Facebook />
      <JME />
    </>
  );
};

export default Work;
