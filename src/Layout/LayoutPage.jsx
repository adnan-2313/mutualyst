import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import appStore from "../store/appStore";
import { Provider } from "react-redux";
import useFetchStocks from "@/hooks/useFetchStocks";
import Footer from "@/components/Footer";
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
      <Provider store={appStore}>
        <div className="relative background-dark transition-all duration-300">
          <Header theme={theme} setTheme={setTheme} />
          <Outlet />
          <Footer />
        </div>
        
      </Provider>
    </>
  );
};

export default LayoutPage;
