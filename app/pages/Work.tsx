import React from "react";
import WorkTemplate from "../components/WorkTemplate";

// Create individual project components using the WorkTemplate
export const Klarna = () => {
  // Array of Klarna showcase images
  const klarnaImages = [
    "https://framerusercontent.com/images/P4cQoW8nLK9NZ6jkeMtUBx8.png",
    "https://framerusercontent.com/images/J9LfzlF240RJ0MrTKIynPqOSBZ0.svg",
    "https://framerusercontent.com/images/R1HbpOq67pldX3FyVYBo04zaA2k.png",
    "https://framerusercontent.com/images/4a293gmFwxVPivadNyPAIyzjPw.svg",
    "https://framerusercontent.com/images/BGi7zUoC7eHlvYnwdxd19FP3BqA.svg"

  ];

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
      images={klarnaImages}
    />
  );
};

export const BBC = () => {
  // Array of BBC showcase images
  const bbcImages = [
    "https://framerusercontent.com/images/lLG8Kf5oCl6eO5dBfA3VmQ3No.jpg?scale-down-to=1024",
    "https://framerusercontent.com/images/JL5Q9BxS7FaKMPZ8vhSwyjw2tc.jpg?scale-down-to=1024",
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
      images={bbcImages}
    />
  );
};

export const Briteside = () => {
  // Array of Briteside showcase images
  const britesideImages = [
    "https://framerusercontent.com/images/PfIhsgwZIoMJAOjvkLdOMXejM.jpg?scale-down-to=1024",
    "https://framerusercontent.com/images/4r6BQxkpztCYRJpQnBArjuHcA8.jpg?scale-down-to=1024",
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
      images={britesideImages}
    />
  );
};

export const Cabify = () => {
  // Array of Cabify showcase images
  const cabifyImages = [
    "https://framerusercontent.com/images/9wOppjzuWl1D1K9RqAHQuTMU0.jpg?scale-down-to=1024",
    "https://framerusercontent.com/images/vTO5q1sA5ml9wSgNQoLh1jQVls.jpg?scale-down-to=1024",
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
      images={cabifyImages}
    />
  );
};

export const Facebook = () => {
  // Array of Facebook showcase images
  const facebookImages = [
    "https://framerusercontent.com/images/QVEV2DoNM4jdJnK15mIV6GEkWE.jpg?scale-down-to=1024",
    "https://framerusercontent.com/images/rtKkQiym9CpLyJ5Qa9ITjk3g7w.jpg?scale-down-to=1024",
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
      images={facebookImages}
    />
  );
};


export const JME = () => {
  // Array of JME showcase images
  const jmeImages = [
    "https://framerusercontent.com/images/M0iyWvxeXQ6hwWQQ2m4NkXHXjA.jpg?scale-down-to=1024",
    "https://framerusercontent.com/images/iBbTFojRzqSxKf9KKRUu6ReF3s.jpg?scale-down-to=1024",
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
      images={jmeImages}
    />
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
