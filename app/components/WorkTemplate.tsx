
import React, { ReactNode } from "react";
interface WorkTemplateProps {
  bgColor: string; // Background color
  titleColor: string; // Title text color
  subtitleColor: string; // Subtitle text color
  title: string; // Title text
  subtitle: ReactNode; // Subtitle content (can be text or JSX)
  accentColor?: string; // Color for accents like borders, arrows
  children?: ReactNode; // Additional content
  sectionColor?: string; // Color scheme identifier for navbar
  images?: string[]; // Array of image URLs to display
}

const WorkTemplate: React.FC<WorkTemplateProps> = ({
  bgColor,
  titleColor,
  subtitleColor,
  title,
  subtitle,
  accentColor,
  children,
  sectionColor,
  // images = [], // Default to empty array if not provided
}) => {
  // Determine section color based on background
  const getSectionColorFromBg = () => {
    if (bgColor.includes("FEB3C8") || bgColor.includes("pink")) {
      return "pink";
    } else if (bgColor.includes("FFEAA0") || bgColor.includes("yellow")) {
      return "yellow";
    } else {
      return "darkBlue";
    }
  };

  // Use provided sectionColor or determine from background
  const dataColorSection = sectionColor || getSectionColorFromBg();

  return (
    <div
      className={`relative w-full h-screen ${bgColor}`}
      data-section-color={dataColorSection}
    >
      <div className="text-container w-1/3 h-full p-20">
        <h1
          className={`text-8xl font-bold leading-tight ${titleColor} border-b border-black/20 pb-1`}
        >
          {title}
        </h1>
        <div
          className={`text-xl font-medium leading-relaxed ${subtitleColor} mt-2 border-b border-black/20 pb-4`}
        >
          {subtitle}
        </div>

        <div
          className={`link flex justify-between mt-20 hover:scale-105 ${subtitleColor} hover:${titleColor} transition-all duration-150 ease-in`}
        >
          <h2 className="">Read the story</h2>

          <p>
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color={accentColor || titleColor.replace("text-", "")}
            >
              <path
                d="M3 12L21 12M21 12L12.5 3.5M21 12L12.5 20.5"
                stroke={accentColor || titleColor.replace("text-", "")}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </p>
        </div>
        {children}
      </div>

    </div>
  );
};

export default WorkTemplate;
