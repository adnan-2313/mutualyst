import { navItems } from "@/utils/constant";
import { Button } from "./ui/button";
import { ChevronRight, MenuIcon, MoonIcon, SunIcon, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

import useFetchStocks from "@/hooks/useFetchStocks";
import Auth from "./Auth";

const Header = ({ theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [AuthOn, setAuthOn] = useState(false);

  useFetchStocks();

  const handleThemeSwitch = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <header className="">
        <div className="w-full px-6  flex max-w-[90rem]  fixed top-0 py-3 mx-auto  backdrop-blur-3xl   justify-between">
          <img
            src="/New_Logo.png"
            alt=""
            className="w-20 sm:w-32 dark:bg-transparent  bg-black px-2 py-1 rounded-xl"
          />
          <nav className="hidden md:flex font-semibold  justify-center items-center gap-4">
            <ul className="flex items-center gap-4 text-md justify-between">
              {navItems.map((items) => {
                return (
                  <li
                    key={items.id}
                    className="cursor-pointer hover:text-zinc-800 text-zinc-950 transition-all duration-300  dark:text-zinc-500 dark:hover:text-zinc-3 00"
                  >
                    <NavLink to={items.link}>{items.title}</NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="flex items-center gap-3">
            <button
              className={`transition-transform duration-300 dark:text-white bg-transparent hover:bg-transparent  ${
                theme === "dark" ? "rotate-0" : " rotate-90"
              }`}
              onClick={handleThemeSwitch}
            >
              {theme === "dark" ? (
                <MoonIcon size={"20px"} />
              ) : (
                <SunIcon size={"20px"} />
              )}
            </button>
            <Button
              onClick={() => setAuthOn(true)}
              variant="default"
              className="sm:px-6 bg-zinc-800 hover:bg-zinc-700 sm:py-5 text-white"
            >
              Login
            </Button>
            <button
              className={` md:hidden `}
              onClick={() => setIsOpen(!isOpen)}
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>
      <nav
        className={`z-50 left-0 w-full top-0 fixed ${
          isOpen ? "h-screen" : "h-0"
        } right-16  shadow-lg lg:hidden bg-white  dark:bg-zinc-950  overflow-hidden transition-all duration-500 `}
      >
        <div className="">
          <div className="flex justify-between px-4 pt-2 pb-10 border-b  bg-black border-zinc-800 ">
            <img src="/Logo2.png" alt="" className="w-44 mr-36 " />
            <button className="text-white" onClick={() => setIsOpen(false)}>
              <X />
            </button>
          </div>
          <ul className="flex flex-col  w-full items-center gap-4 text-md justify-between">
            {navItems.map((items) => {
              return (
                <li
                  onClick={() => setIsOpen(false)}
                  key={items.id}
                  className="cursor-pointer text-md px-4 py-2 w-full border-b hover:text-zinc-800 text-zinc-950 transition-all duration-300  dark:text-zinc-500 dark:hover:text-zinc-400"
                >
                  <NavLink className="flex justify-between" to={items.link}>
                    {items.title} <ChevronRight />{" "}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
      {AuthOn && <Auth AuthOn={AuthOn} setAuthOn={setAuthOn} />}
    </>
  );
};

export default Header;
