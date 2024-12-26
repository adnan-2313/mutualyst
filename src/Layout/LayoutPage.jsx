import Header from "../components/Header";
import Landing from "../pages/Landing";
import { useEffect, useState } from "react";
const LayoutPage = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <>
      <div className="background-dark transition-all duration-300">
        <Header theme={theme} setTheme={setTheme} />
        <Landing />
      </div>
    </>
  );
};

export default LayoutPage;
