import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [active, setActive] = useState("home");
  return (
    <div className="navbar flex flex-col backdrop-blur-sm shadow-lg shadow-black/10">
      <div className="nav-top flex items-center justify-between border border-b border-black/10 px-[4rem] py-[1rem]">
        <div className="left-nav flex items-center gap-3">
          <Link to="/">
            <img width={30} height={30} src="/logo.svg" alt="logo" />
          </Link>
          <span className="text-[#3bc944] text-[1.5rem] font-bold">
            Green World
          </span>
        </div>
        <div className="flex items-center gap-4">
          <button
            className="text-center text-[1rem] cursor-pointer font-medium text-[#43a047] px-4 py-2 border-[2px] 
          border-[#43a047] rounded-full transition-all hover:bg-[#43a0471a] hover:scale-105"
          >
            Login
          </button>
          <button
            className="text-center text-[1rem] cursor-pointer font-medium text-white border-[2px] border-[#43a047] bg-[#43a047] px-4 py-2
          rounded-full transition-all hover:bg-[#2e7d32] hover:scale-105 hover:border-[#2e7d32]"
          >
            Sign Up
          </button>
        </div>
      </div>
      <div className="nav-bottom flex items-center justify-start px-[4rem] py-[1rem] gap-5">
        <Link
          to="/"
          onClick={() => setActive("home")}
          className={`nav-tab relative cursor-pointer text-[#2e7d32]  ${
            active === "home" ? "active" : ""
          }`}
        >
          Home
        </Link>
        <Link
          to="/"
          onClick={() => setActive("plant care")}
          className={`nav-tab relative cursor-pointer text-[#2e7d32]  ${
            active === "plant care" ? "active" : ""
          }`}
        >
          Plant Care
        </Link>
        <Link
          to="/"
          onClick={() => setActive("about us")}
          className={`nav-tab relative cursor-pointer text-[#2e7d32]  ${
            active === "about us" ? "active" : ""
          }`}
        >
          About Us
        </Link>
      </div>
    </div>
  );
}
