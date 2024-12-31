import { navItems } from "@/utils/constant";
import { Button } from "./ui/button";
import { ChevronRight, MenuIcon, MoonIcon, SunIcon, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLogo, toggleTheme } from "@/slices/appConfigSlice";
import useFetchStocks from "@/hooks/useFetchStocks";
import Auth from "./Auth";

const Header = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [AuthOn, setAuthOn] = useState(false);

  const img = useSelector((store) => store.appConfig.logo);
  const theme = useSelector((state) => state.appConfig.theme);

  useFetchStocks();

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    dispatch(setLogo(theme === "dark" ? "/2.png" : "/1.png"));
  }, [theme]);

  return (
    <>
      <header>
        <div className="w-full z-20 border-b border-zinc-200 dark:border-zinc-800 px-6 flex max-w-[90rem] fixed top-0  mx-auto backdrop-blur-3xl justify-between">
          <img
            src={img}
            alt="Logo"
            className="w-36 sm:w-44 dark:bg-transparent px-2 py-1 rounded-xl"
          />
          <nav className="hidden md:flex font-semibold justify-center items-center gap-4">
            <ul className="flex items-center gap-4 text-md justify-between">
              {navItems.map((items) => (
                <li
                  key={items.id}
                  className="cursor-pointer hover:text-zinc-800 text-zinc-950 transition-all duration-300 dark:text-zinc-500 dark:hover:text-zinc-300"
                >
                  <NavLink to={items.link}>{items.title}</NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-3">
            <button
              className={`transition-transform duration-700 dark:text-white bg-transparent hover:bg-transparent ${
                theme === "dark" ? "rotate-0" : "rotate-[-90deg]"
              }`}
              onClick={handleToggle}
            >
              {theme === "dark" ? (
                <MoonIcon size="20px" />
              ) : (
                <SunIcon size="20px" />
              )}
            </button>
            <Button
              onClick={() => setAuthOn(true)}
              variant="default"
              className="sm:px-6 bg-zinc-800 hover:bg-zinc-700 sm:py-5 text-white"
            >
              Login
            </Button>
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>
      <nav
        className={`z-50 left-0 w-full top-0 fixed ${
          isOpen ? "h-screen duration-200" : "h-0 duration-200"
        } right-16 shadow-lg lg:hidden bg-white dark:bg-zinc-950 overflow-hidden transition-all`}
      >
        <div>
          <div className="flex justify-between pl-2 pr-6 pt-2 pb-4 border-b dark:bg-black bg-zinc-300 border-zinc-400">
            <img src={img} alt="Logo" className="w-36 mr-36" />
            <button
              className="dark:text-white"
              onClick={() => setIsOpen(false)}
            >
              <X />
            </button>
          </div>
          <ul className="flex flex-col w-full items-center gap-4 text-md justify-between">
            {navItems.map((items) => (
              <li
                onClick={() => setIsOpen(false)}
                key={items.id}
                className="cursor-pointer text-md font-semibold px-4 py-2 w-full border-b hover:text-zinc-800 text-zinc-950 transition-all duration-300 dark:text-zinc-500 dark:hover:text-zinc-400"
              >
                <NavLink className="flex justify-between" to={items.link}>
                  {items.title} <ChevronRight />
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      {AuthOn && <Auth AuthOn={AuthOn} setAuthOn={setAuthOn} />}
    </>
  );
};

export default Header;
