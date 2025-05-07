"use client";

import React, { useMemo } from "react";
import AnimatedBar from "../ui/AnimatedBar";
import Image from "next/image";
import { useColorContext } from "../context/ColorContext";

const Links = [
  { img: '/assets/icon-1.png', text: 'work' },
  { img: '/assets/icon-2.png', text: 'contact' },
  { img: 'https://framerusercontent.com/images/9KU1pUzCKpdxFM0ATWyQF9SBrY.svg', text: 'ventures' },
  { img: 'https://framerusercontent.com/images/ENP9HwyIU3xpwehroq64DcaE.svg', text: 'about' },
];

const Navbar = () => {
  // Use the color context to get dynamic colors
  const { currentColors, isFooterVisible } = useColorContext();

  // Generate CSS filters based on the current text color
  const iconFilter = useMemo(() => {
    // If it's white, use no filter
    if (currentColors.textColor === 'rgb(255, 255, 255)') {
      return 'none';
    }

    // Create appropriate filters for each color scheme
    if (currentColors.textColor === 'rgb(25, 118, 71)') { // Green for Briteside
      return 'brightness(0) saturate(100%) invert(39%) sepia(12%) saturate(2044%) hue-rotate(114deg) brightness(95%) contrast(89%)';
    }

    if (currentColors.textColor === 'rgb(94, 23, 58)') { // Purple-red for Klarna
      return 'brightness(0) saturate(100%) invert(12%) sepia(40%) saturate(2866%) hue-rotate(298deg) brightness(90%) contrast(91%)';
    }

    if (currentColors.textColor === 'rgb(96, 57, 200)') { // Purple for Cabify
      return 'brightness(0) saturate(100%) invert(26%) sepia(72%) saturate(1861%) hue-rotate(241deg) brightness(92%) contrast(91%)';
    }

    if (currentColors.textColor === 'rgb(223, 208, 187)') { // Cream for JME
      return 'brightness(0) saturate(100%) invert(93%) sepia(13%) saturate(286%) hue-rotate(350deg) brightness(94%) contrast(91%)';
    }

    // Default fallback for other colors
    return 'brightness(0)'; // Default to black
  }, [currentColors.textColor]);

  return (
    <>
      {/* background blur for navbar */}
      <div className="w-full h-20 fixed bottom-0 blur-3xl backdrop-blur-sm z-50 "></div>
      <div className="w-full h-30 fixed bottom-0 backdrop-blur-[3px] z-50"></div>

      <div className="main px-24 py-5 h-fit w-full fixed bottom-0 z-50">
        <div className="wrapper">
          <div className="logo flex items-center gap-2">
            <h1 className="font-bold text-3xl" style={{ color: currentColors.textColor }}>Sensa</h1>
            <svg className="mt-2" width="20" height="20" viewBox="0 0 200 200">
              <g clipPath="url(#__lottie_element_68)">
                <g
                  style={{ display: "block" }}
                  transform="matrix(1,0,0,1,86,86)"
                  opacity="1"
                >
                  <g
                    opacity="1"
                    transform="matrix(1.2118300199508667,0,0,1.2118300199508667,-0.007000000216066837,0.00800000037997961)"
                  >
                    <path
                      strokeLinecap="butt"
                      strokeLinejoin="miter"
                      fillOpacity="0"
                      strokeMiterlimit="4"
                      stroke={currentColors.iconColor}
                      strokeOpacity="1"
                      strokeWidth="8"
                      d=" M0,-66.2760009765625 C36.57772445678711,-66.2760009765625 66.2760009765625,-36.57772445678711 66.2760009765625,0 C66.2760009765625,36.57772445678711 36.57772445678711,66.2760009765625 0,66.2760009765625 C-36.57772445678711,66.2760009765625 -66.2760009765625,36.57772445678711 -66.2760009765625,0 C-66.2760009765625,-36.57772445678711 -36.57772445678711,-66.2760009765625 0,-66.2760009765625z"
                    ></path>
                  </g>
                </g>
                <g
                  transform="matrix(0.5251507759094238,-0.3957294821739197,0.3957294821739197,0.5251507759094238,75.5,112.5)"
                  opacity="1"
                  style={{ display: "block" }}
                >
                  <g
                    opacity="1"
                    transform="matrix(1.2118300199508667,0,0,1.2118300199508667,-0.007000000216066837,-0.492000013589859)"
                  >
                    <path
                      strokeLinecap="butt"
                      strokeLinejoin="miter"
                      fillOpacity="0"
                      strokeMiterlimit="4"
                      stroke={currentColors.iconColor}
                      strokeOpacity="1"
                      strokeWidth="12"
                      d=" M0,-66.2760009765625 C36.57772445678711,-66.2760009765625 66.2760009765625,-36.57772445678711 66.2760009765625,0 C66.2760009765625,36.57772445678711 36.57772445678711,66.2760009765625 0,66.2760009765625 C-17.541000366210938,66.2760009765625 -33.499000549316406,59.44599914550781 -45.36000061035156,48.30400085449219"
                    ></path>
                  </g>
                </g>
                <g
                  transform="matrix(-0.5319772362709045,0.38650405406951904,-0.38650405406951904,-0.5319772362709045,96,58.5)"
                  opacity="1"
                  style={{ display: "block" }}
                >
                  <g
                    opacity="1"
                    transform="matrix(1.2118300199508667,0,0,1.2118300199508667,-0.007000000216066837,0.00800000037997961)"
                  >
                    <path
                      strokeLinecap="butt"
                      strokeLinejoin="miter"
                      fillOpacity="0"
                      strokeMiterlimit="4"
                      stroke={currentColors.iconColor}
                      strokeOpacity="1"
                      strokeWidth="12"
                      d=" M0,-66.2760009765625 C36.57772445678711,-66.2760009765625 66.2760009765625,-36.57772445678711 66.2760009765625,0 C66.2760009765625,36.57772445678711 36.57772445678711,66.2760009765625 0,66.2760009765625 C-13.059000015258789,66.2760009765625 -25.242000579833984,62.4900016784668 -35.50899887084961,55.95800018310547"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>

            <AnimatedBar />
          </div>

          <div className="links-container flex w-full h-20 items-center justify-between">
            <div className="flex items-center gap-4 w-1/3" style={{ color: currentColors.textColor }}>
              <p className="font-medium">
                in-house studio for<br />tomorrow&apos;s ideas
              </p>
              {isFooterVisible && (
                <div className="icons flex bg-blue-">
                  <p className="font-medium ml-3">
                    NYC <span className="mx-1">·</span> Seville
                  
                    <div className="links flex gap-2 ">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                      <svg className="inline-block w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <span className="">·</span>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                      <svg className="inline-block w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    </div>
                  
                  </p>
                </div>
              )}
            </div>

            <div className="links flex px-2 gap-10">
              {Links.map((link, index) => (
                <div key={index} className="link-icon flex items-center flex-col justify-center hover:cursor-pointer opacity-75 hover:opacity-100 transition-all duration-150 ease-in">
                  <Image width={27} height={27} src={link.img} alt={link.text} style={{ filter: iconFilter }} />
                  <span style={{ color: currentColors.textColor }} className="pt-2">{link.text}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Navbar;
