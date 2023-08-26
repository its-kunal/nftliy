import React, { useState } from "react";
import searchSvg from "../assets/search.svg";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function SearchBox({ setSearch }) {
  const [s, setS] = useState("");
  return (
    <div className="flex md:flex-row md:justify-between px-2 flex-col gap-x-5 mb-4 gap-y-4">
      <div className="flex flex-1 max-w-xl relative">
        <input
          type="text"
          className="bg-transparent p-2 rounded bg-black bg-opacity-30 flex-1 pr-10 backdrop-blur "
          placeholder="Search Here"
          onChange={(e) => {
            setS(e.currentTarget.value);
          }}
        />
        <button
          className="  absolute right-3 top-[30%]"
          onClick={(e) => {
            setSearch(s);
          }}
        >
          <img src={searchSvg} alt="" />
        </button>
      </div>
      <ConnectButton />
    </div>
  );
}
