import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { useEffect, useState } from "react";
const LayoutPage = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <>
      <div className="background-dark transition-all duration-300">
        <Header theme={theme} setTheme={setTheme} />
        <Outlet />
      </div>
    </>
  );
};

export default LayoutPage;
