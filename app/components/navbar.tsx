import React from "react";
import AnimatedBar from "../ui/AnimatedBar";
import Image from "next/image";


const Links = [
    { img: '/assets/icon-1.png', text: 'work' },
    { img: '/assets/icon-2.png', text: 'contact' },
    { img: 'https://framerusercontent.com/images/9KU1pUzCKpdxFM0ATWyQF9SBrY.svg', text: 'ventures' },
    { img: 'https://framerusercontent.com/images/ENP9HwyIU3xpwehroq64DcaE.svg', text: 'about' },
];

const Navbar = () => {
  return (
    <>
    {/* background blur for navbar */}
    <div className="w-full h-20 fixed bottom-0 blur-3xl backdrop-blur-sm "></div>
    <div className="w-full h-30 fixed bottom-0 backdrop-blur-[3px]"></div>

    <div className="main px-24 py-5 h-fit w-full fixed bottom-0">
      <div className="wrapper">
          <div className="logo flex items-center gap-2">
            <h1 className="font-bold text-3xl">Sensa</h1>
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
                      stroke="rgb(255,255,255)"
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
                      stroke="rgb(255,255,255)"
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
                      stroke="rgb(255,255,255)"
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
          <p className="font-medium text-zinc-200 w-1/4">
            in-house studio for <br /> tomorrow&apos;s ideas
          </p>

            <div className="links flex px-2 gap-10">
                {Links.map((link, index) => (
                    <div key={index} className="link-icon flex items-center flex-col justify-center hover:cursor-pointer opacity-75 hover:opacity-100 transition-all duration-150 ease-in">
                        <Image width={27} height={27} src={link.img} alt={link.text} />
                        <span className="text-zinc-200 pt-2">{link.text}</span>
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
