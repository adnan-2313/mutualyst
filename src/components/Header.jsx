import { useState } from "react";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";
import { MoonIcon, SunIcon } from "lucide-react";
const navItems = ["Home", "Membership", "Services", "Contacts"];
const Header = ({ theme, setTheme }) => {
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="">
      <div className="w-full px-6  flex max-w-[90rem]  fixed top-0 py-3 mx-auto  backdrop-blur-xl   justify-between">
        <img src="/Logo2.png" alt="" className="w-36 sm:w-44 dark:bg-transparent  bg-black px-2 py-1 rounded-xl" />
        <nav className="hidden md:flex font-semibold  justify-center items-center gap-4">
          <ul className="flex items-center gap-4 text-md justify-between">
            {navItems.map((items, index) => {
              return (
                <li
                  key={index}
                  className="cursor-pointer text-zinc-950 hover:text-zinc-700  dark:text-zinc-300 dark:hover:text-zinc-100"
                >
                  {items}
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
            {theme === "dark" ? <MoonIcon size={"20px"} /> : <SunIcon size={"20px"} />}
          </button>
          <Button variant="default" className="sm:px-6 bg-zinc-800 hover:bg-zinc-700 sm:py-5 text-white">
            Login
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
