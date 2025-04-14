import React from "react";
import WorkTemplate from "../components/WorkTemplate";

// Create individual project components using the WorkTemplate
export const Klarna = () => {
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
    />
  );
};

export const BBC = () => {
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
    />
  );
};

export const Briteside = () => {
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
    />
  );
};

export const Cabify = () => {
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
    />
  );
};

export const Facebook = () => {
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
    />
  );
};


export const JME = () => {
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
      accentColor="#1F4E98"
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
