import { useEffect } from "react";
import { useSelector } from "react-redux";
import { barItems, navItems } from "@/utils/constant";
const Sidebar = () => {
  const theme = useSelector((store) => store.appConfig.theme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <aside className="fixed max-md:hidden  border-r border-zinc-200 dark:border-zinc-800  bg-transparent mt-14 z-10 flex flex-col  h-full w-60 py-12 ">
      <div className="">
        <ul className="w-full pr-2 pl-4 font-semibold">
          <li className="px-2">Getting Started</li>
          {barItems.map((item) => {
            return (
              <li
                className="px-2 flex  items-center gap-2 rounded-md hover:transition-all  cursor-pointer hover:bg-zinc-300 dark:hover:bg-zinc-800 my-2 py-1"
                key={item.id}
              >
                <item.icon size={20} />
                {item.title}
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
