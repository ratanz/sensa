import React from "react";
import WorkTemplate from "../components/WorkTemplate";
import { useNavbar } from "../context/NavbarContext";

// Create individual project components using the WorkTemplate
export const Klarna = () => {
  const { setTextColor } = useNavbar();
  
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
      setNavbarTextColor={setTextColor}
    />
  );
};

export const Cabify = () => {
  const { setTextColor } = useNavbar();
  
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
      setNavbarTextColor={setTextColor}
    />
  );
};

export const Briteside = () => {
  const { setTextColor } = useNavbar();
  
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
      setNavbarTextColor={setTextColor}
    />
  );
};

export const BBC = () => {
  const { setTextColor } = useNavbar();
  
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
      setNavbarTextColor={setTextColor}
    />
  );
};

// This component combines all the project components
const Work = () => {
  return (
    <>
      <Klarna />
      <Cabify />
      <Briteside />
      <BBC />
    </>
  );
};

export default Work;
