import { useEffect } from "react";
import { useSelector } from "react-redux";
import { barItems, navItems } from "@/utils/constant";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  const theme = useSelector((store) => store.appConfig.theme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const img = useSelector((store) => store.appConfig.logo);

  return (
    <aside className="fixed max-md:hidden  border-r border-zinc-200 dark:border-zinc-800  bg-transparent mt-14 z-10 flex flex-col  h-full w-60  ">
      <div className="flex items-center justify-center pt-3 pb-2">
        <img
          src={img}
          alt="Logo"
          className="w-32 sm:w-40 dark:bg-transparent px-2 py-1  rounded-xl"
        />
      </div>
      <div className="py-4">
        <ul className="w-full pr-2 pl-4 font-semibold ">
          <li className="px-2 text-lg">Getting Started</li>
          {barItems.map((item) => {
            return (
              <NavLink key={item.id} to={item.link}>
                <li className="px-4 flex  items-center gap-2 rounded-md hover:transition-all  cursor-pointer hover:bg-zinc-300 dark:hover:bg-zinc-800 my-2 py-1">
                  <item.icon size={20} />
                  {item.title}
                </li>
              </NavLink>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
