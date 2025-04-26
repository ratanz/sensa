import {
  motion,
  useScroll,
  useTransform,
  cubicBezier,
  useSpring,
} from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import WorkTemplate from "../components/WorkTemplate";

// Create individual project components using the WorkTemplate
export const Klarna = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Apply spring physics to scrollYProgress for smoother transitions
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
    restDelta: 0.001,
    mass: 0.5,
  });

  // Transform values for container based on scroll with spring physics
  const containerY = useTransform(smoothProgress, [0, 0.8], [-50, -200], {
    ease: cubicBezier(0.32, 0.72, 0.35, 0.94),
  });

  // Transform values for card spreading with spring physics
  const card1X = useTransform(smoothProgress, [0, 0.8], [-100, -500], {
    ease: cubicBezier(0.32, 0.72, 0.35, 0.94),
  });
  const card1Y = useTransform(smoothProgress, [0, 0.8], [30, 120], {
    ease: cubicBezier(0.32, 0.72, 0.35, 0.94),
  });
  const card1Rotate = useTransform(smoothProgress, [0, 0.8], [-2, -12], {
    ease: cubicBezier(0.32, 0.72, 0.35, 0.94),
  });

  const card2X = useTransform(smoothProgress, [0, 0.8], [-60, -280], {
    ease: cubicBezier(0.32, 0.72, 0.35, 0.94),
  });
  const card2Y = useTransform(smoothProgress, [0, 0.8], [15, 60], {
    ease: cubicBezier(0.32, 0.72, 0.35, 0.94),
  });
  const card2Rotate = useTransform(smoothProgress, [0, 0.8], [-1, -6], {
    ease: cubicBezier(0.32, 0.72, 0.35, 0.94),
  });

  const card4X = useTransform(smoothProgress, [0, 0.8], [60, 280], {
    ease: cubicBezier(0.32, 0.72, 0.35, 0.94),
  });
  const card4Y = useTransform(smoothProgress, [0, 0.8], [15, 60], {
    ease: cubicBezier(0.32, 0.72, 0.35, 0.94),
  });
  const card4Rotate = useTransform(smoothProgress, [0, 0.8], [1, 6], {
    ease: cubicBezier(0.32, 0.72, 0.35, 0.94),
  });

  const card5X = useTransform(smoothProgress, [0, 0.8], [100, 500], {
    ease: cubicBezier(0.32, 0.72, 0.35, 0.94),
  });
  const card5Y = useTransform(smoothProgress, [0, 0.8], [30, 120], {
    ease: cubicBezier(0.32, 0.72, 0.35, 0.94),
  });
  const card5Rotate = useTransform(smoothProgress, [0, 0.8], [2, 12], {
    ease: cubicBezier(0.32, 0.72, 0.35, 0.94),
  });

  // Center card subtle movement
  const centerY = useTransform(smoothProgress, [0, 0.8], [0, -20], {
    ease: cubicBezier(0.32, 0.72, 0.35, 0.94),
  });

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
      {/* Framer-style card layout with scroll-based spreading */}
      <motion.div
        ref={containerRef}
        className="absolute right-50 -bottom-[80vh] w-full h-full flex pointer-events-none"
        data-framer-name="klarna cards"
        style={{
          willChange: "transform",
          perspective: "1200px",
          y: containerY,
        }}
      >
        {/* Card 1 - Cart info */}
        <motion.div
          className="absolute left-1/2"
          data-framer-name="card_1"
          style={{
            willChange: "transform",
            transformOrigin: "center",
            x: card1X,
            y: card1Y,
            rotate: card1Rotate,
            translateX: "-50%",
            perspective: "1200px",
          }}
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
              overflow: "hidden",
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
                objectFit: "cover",
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
            x: card5X,
            y: card5Y,
            rotate: card5Rotate,
            translateX: "-50%",
            perspective: "1200px",
          }}
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
              overflow: "hidden",
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
                objectFit: "cover",
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
            zIndex: 2,
            x: card2X,
            y: card2Y,
            rotate: card2Rotate,
            translateX: "-50%",
            perspective: "1200px",
          }}
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
              overflow: "hidden",
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
                objectFit: "cover",
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
            zIndex: 2,
            x: card4X,
            y: card4Y,
            rotate: card4Rotate,
            translateX: "-50%",
            perspective: "1200px",
          }}
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
              overflow: "hidden",
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
                objectFit: "cover",
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
            zIndex: 2,
            y: centerY,
            translateX: "-50%",
            perspective: "1200px",
          }}
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
              overflow: "hidden",
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
                objectFit: "cover",
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
    "https://framerusercontent.com/images/AkYsZUpUCQt44M7tbrHcfQJ6Yto.png",
    "https://framerusercontent.com/images/XZ9dQO5Y0Kfg5wSnMvcjQnibBEU.png",
  ];

  // Create refs for the container and elements
  const containerRef = useRef(null);

  // Use Framer Motion's useScroll hook with enhanced options
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Apply spring physics to scrollYProgress for smoother transitions
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
    restDelta: 0.001,
    mass: 0.5,
  });

  // Transform the scroll progress into y-position values with built-in easing for smoother transitions
  const image1Y = useTransform(smoothProgress, [0, 1], [50, -590]);

  const image2Y = useTransform(smoothProgress, [0, 1], [0, -690]);

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
      <div
        ref={containerRef}
        className="absolute -left-10 px-2 w-screen h-full flex"
      >
        <motion.div
          className="w-1/2 relative top-70 left-8"
          style={{ y: image1Y }}
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{
            type: "spring",
            stiffness: 30,
            damping: 50,
            mass: 1.1,
            restDelta: 0.001,
          }}
        >
          <Image src={bbcImages[0]} alt="image 1" width={750} height={100} />
        </motion.div>

        <motion.div
          className="relative top-72 -left-10 w-full h-full"
          style={{ y: image2Y }}
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{
            type: "spring",
            stiffness: 30,
            damping: 40,
            mass: 1.3,
            restDelta: 0.001,
          }}
        >
          <Image src={bbcImages[1]} alt="image 2" width={1200} height={90} />
        </motion.div>
      </div>
    </WorkTemplate>
  );
};

export const Briteside = () => {
  // Briteside images
  const britesideImages = [
    "https://framerusercontent.com/images/VU254B1mipsLwjH6l1PXVHz5lU.svg",
    "https://framerusercontent.com/images/zQdP54C4i7XKOYyqmPVNQ1Y3Q.png",
  ];

  const containerRef = useRef(null);

  // Use Framer Motion's useScroll hook with enhanced options
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Apply spring physics to scrollYProgress for smoother transitions
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
    restDelta: 0.001,
    mass: 0.5,
  });

  // Transform the scroll progress into y-position values with built-in easing for smoother transitions
  const image1Y = useTransform(smoothProgress, [0, 1], [50, -230]);
  const image2Y = useTransform(smoothProgress, [0, 1], [0, -290]);

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
      <div ref={containerRef} className="absolute left-0 w-screen h-full flex ">
        <motion.div
          className="relative top-30 left-20"
          style={{ y: image1Y }}
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{
            type: "spring",
            stiffness: 30,
            damping: 50,
            mass: 1.1,
            restDelta: 0.001,
          }}
        >
          <Image
            className="w-[370vw]"
            src={britesideImages[0]}
            alt="image 1"
            width={850}
            height={100}
          />
        </motion.div>

        <motion.div
          className="relative top-44 right-30"
          style={{ y: image2Y }}
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{
            type: "spring",
            stiffness: 30,
            damping: 50,
            mass: 1.1,
            restDelta: 0.001,
          }}
        >
          <Image
            className="w-[210vw]"
            src={britesideImages[1]}
            alt="image 1"
            width={750}
            height={100}
          />
        </motion.div>
      </div>
    </WorkTemplate>
  );
};

export const Cabify = () => {
  // Cabify images
  const cabifyImages = [
    "https://framerusercontent.com/images/0PQJwRZ9wyxxNP4N878T6JU1mI.svg",
    "https://framerusercontent.com/images/4bMdsaIizitLKhyo29AKaifsZY.png",
  ];

  const containerRef = useRef(null);

  // Use Framer Motion's useScroll hook with enhanced options
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Apply spring physics to scrollYProgress for smoother transitions
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
    restDelta: 0.001,
    mass: 0.5,
  });

  // Transform the scroll progress into y-position values with built-in easing for smoother transitions
  const imageFloat = useTransform(smoothProgress, [0, 1], [50, -510]);

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
      <div
        className="absolute left-0 px-2 w-screen h-full flex "
        ref={containerRef}
      >
        {/* normal image used as background */}
        <div className="bg-image absolute -top-14">
          <Image
            className="w-full px-10 h-[54vh] overflow-hidden object-cover"
            src={cabifyImages[0]}
            alt="image 1"
            width={750}
            height={100}
          />
        </div>

        {/* floating image */}
        <motion.div
          style={{ y: imageFloat }}
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{
            type: "spring",
            stiffness: 30,
            damping: 50,
            mass: 1.1,
            restDelta: 0.001,
          }}
          className="floting-image absolute top-10 flex w-full items-center justify-center"
        >
          <Image
            className="w-fit"
            src={cabifyImages[1]}
            alt="image 1"
            width={750}
            height={100}
          />
        </motion.div>
      </div>
    </WorkTemplate>
  );
};

export const Facebook = () => {
  // Facebook images
  const facebookImages = [
    "https://framerusercontent.com/images/bceZTH0IbcKyBW8fhubQbn8MPo0.png",
  ];

  const containerRef = useRef(null);

  // Use Framer Motion's useScroll hook with enhanced options
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Apply spring physics to scrollYProgress for smoother transitions
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
    restDelta: 0.001,
    mass: 0.3,
  });

  // Transform the scroll progress into y-position values with built-in easing for smoother transitions
  const imageFloat = useTransform(smoothProgress, [0, 1], [50, -170]);

  const coinFloat = useTransform(smoothProgress, [0, 1], [50, -440]);

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
      <div
        ref={containerRef}
        className="absolute left-0 px-2 w-screen h-full flex "
      >
        {/* normal image used as background */}
        <div className="bg-image w-full justify-center items-center mt-14">
          <Image
            className="w-full "
            src={facebookImages[0]}
            alt="image 1"
            width={750}
            height={100}
          />
        </div>

        {/* animated person image */}
        <motion.div
          style={{ y: imageFloat }}
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 90,
            mass: 1.5,
            restDelta: 0.001,
          }}
          className="person absolute flex w-full justify-center top-48 "
        >
          <Image
            className=" "
            src="/assets/person.png"
            alt="image 1"
            width={200}
            height={100}
          />
        </motion.div>

        {/* animated coin image */}
        <motion.div
          style={{ y: coinFloat }}
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{
            type: "spring",
            stiffness: 30,
            damping: 30,
            mass: 0.4,
            restDelta: 0.001,
          }}
          className="coin absolute left-1/3 top-1/2 "
        >
          <Image
            className=""
            src="/assets/coin.png"
            alt="image 1"
            width={140}
            height={100}
          />
        </motion.div>
      </div>
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
          Helping one of the top European VC <br /> firms to better tell what
          makes them different
        </>
      }
      accentColor="#DFD0BB"
      sectionColor="navyBlue"
    >
      <div className="absolute left-0 px-2 w-screen h-full flex">
        {/* normal image used as background */}
        <div className="bg-image flex w-full justify-center items-start mt-14">
          <Image
            className="w-full"
            src={jmeImages[0]}
            alt="image 1"
            width={750}
            height={100}
          />
        </div>
      </div>
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
