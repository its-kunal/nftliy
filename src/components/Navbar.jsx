import { useState } from "react";
import LogoSvg from "../assets/logo.svg";
import LogoTextSvg from "../assets/logotext.svg";
import pairSvg from "../assets/pair.svg";
import tokenSvg from "../assets/token.svg";
import twitterSvg from "../assets/twitter.svg";
import facebookSvg from "../assets/facebook.svg";
import linkedinSvg from "../assets/linkedin.svg";

export default function Navbar() {
  const options = [
    { name: "Token Address", image: tokenSvg },
    { name: "Pair Address", image: pairSvg },
  ];
  const [show, setShow] = useState(true);
  const socials = [twitterSvg, facebookSvg, linkedinSvg];
  const [active, setActive] = useState(0);
  return (
    <div
      className={`md:bg-darkGrey md:min-h-screen ${
        show ? "md:w-[800px]" : "md:w-[200px]"
      } flex flex-col rounded-tr-xl`}
    >
      <div className="flex gap-x-4 justify-start pl-3 min-w-full pt-4">
        <img
          src={LogoSvg}
          alt=""
          onClick={() => setShow(!show)}
          className={`${show ? "" : "mx-auto"}`}
        />
        <img src={LogoTextSvg} alt="" className={`${!show ? "hidden" : ""}`} />
      </div>

      <div className="hidden md:flex flex-col gap-y-4 mt-20">
        {options.map((option, idx) => (
          <div
            key={idx}
            className={`${
              active == idx ? "bg-bubblePink" : ""
            } py-2 pl-3 font-sans text-lg text-white`}
            onClick={(e) => {
              setActive(idx);
            }}
          >
            <span className={`flex gap-x-4 ${show ? "" : "justify-center"}`}>
              <img src={option.image} alt="" />
              <span className={`${!show ? "hidden" : ""}`}>{option.name}</span>
            </span>
          </div>
        ))}
      </div>

      <div className="hidden md:flex h-20"></div>

      <div
        className={`hidden md:flex ${
          show ? "md:flex-row" : "md:flex-col"
        } flex-col gap-x-3 pl-4 gap-y-4`}
      >
        {socials.map((v, idx) => {
          return <img src={v} className="h-8" key={idx}></img>;
        })}
      </div>

      <div className="hidden md:flex flex-1 min-h-[100px]"></div>
      <div className="hidden md:flex bg-bubblePink h-10 "></div>
    </div>
  );
}
