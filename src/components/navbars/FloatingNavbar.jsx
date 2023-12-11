import { useEffect, useState } from "react";
import "./customCssFloatingNavbar.css";
import componentIcon from "./assets/icons/componentIcon.svg";
import aboutUs from "./assets/icons/aboutUs.svg"; //replace with your own icon
import questions from "./assets/icons/FAQ.svg"; //replace with your own icon
import contact from "./assets/icons/contact.svg"; //replace with your own icon
import CTAimg from "./assets/icons/CTA.svg"; //replace with your own icon
import useHandleScreenSize from "./useHandleScreenSixe";

//todo GÖR RESPONSIV
//todo | Visa ikonerna på mobil ej på dator

export default function FloatingNavBar() {
  const screenSize = useHandleScreenSize();
  const [showNavbar, setShowNavbar] = useState(false);

  console.log(screenSize.width);
  //add your links here
  const links = [
    {
      textContent: "Components",
      url: "/components",
      iconPath: componentIcon,
    },
    {
      textContent: "About us",
      url: "/about",
      iconPath: aboutUs,
    },
    {
      textContent: "FAQ",
      url: "/faq",
      iconPath: questions,
    },
    {
      textContent: "Contact",
      url: "/contact",
      iconPath: contact,
    },
  ];

  return (
    <div className="flex justify-center my-7">
      <nav className="relative flex flex-col justify-center mx-auto w-11/12">
        <div className="relative z-10 flex justify-between items-center w-full px-6 sm:px-2 py-2 rounded-full bg-gray-900 shadow-xl shadow-slate-800/40">
          <div>
            <h1 className="font-black text-md text-green-400 sm:pl-4">
              Front-End Fun
            </h1>
          </div>
          <div className="grid grid-cols-2 grid-row-2 gap-1 lg:gap-10 sm:mr-12 md:mr-5 lg:mr-0 lg:flex lg:items-center lg:font-xl text-white">
            {links.map((link, index) => {
              return (
                <div
                  key={index}
                  className=" lg:links flex flex-wrap gap-2 lg:justify-center "
                  onClick={(e) => {
                    e.preventDefault();
                    showNavbar ? setShowNavbar(false) : setShowNavbar(true);
                  }}
                >
                  <a href={link.url} className="relative  lg:text-xs">
                    {screenSize.width < 1023 ? (
                      <img
                        src={link.iconPath}
                        alt=""
                        className="cursor-context-menu filter brightness-0 invert w-4"
                      />
                    ) : (
                      ""
                    )}

                    {screenSize.width > 1023 ? link.textContent : ""}
                  </a>
                </div>
              );
            })}
          </div>
          {screenSize.width > 639 ? (
            <div>
              {/* //-> CALL TO ACTION SECTION */}
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  alert("You need to add a Link it with React Router");
                }}
                className="CalBtn flex justify-centeer sm:w-18 sm:round-r-xl md:-m-2 font-semibold p-4 text-slate-50  bg-gradient-to-r from-green-400 to-blue-500 rounded-full"
              >
                {screenSize.width > 767 ? (
                  "Call to action"
                ) : (
                  <img
                    src={CTAimg}
                    alt=""
                    className="filter brightness-0 invert"
                  />
                )}
              </a>
            </div>
          ) : (
            ""
          )}
        </div>

        {/* //# | DROPDOWN MENU */}
        {showNavbar && screenSize.width < 1024 && (
          <div className="absolute top-0 z-0 bg-gray-900 text-white w-full p-5 rounded-t-[1.4rem] rounded-b-lg transition ease-in-out">
            <div className="mt-12">
              <ul>
                {links.map((link, index) => {
                  return (
                    <div key={index} className="flex gap-3 my-2">
                      <img
                        src={link.iconPath}
                        alt=""
                        className="filter brightness-0 invert"
                      />
                      <li className="links">
                        <a>{link.textContent}</a>
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
