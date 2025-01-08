import { Outlet } from "react-router-dom";
import appStore from "../store/appStore";
import { Provider } from "react-redux";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const LayoutPage = () => {
  return (
    <>
      <Provider store={appStore}>
        <div className="flex  justify-center w-full">
          <div className="background-dark transition-all duration-300  max-w-[90rem] w-full ">
            <Sidebar />
            <Header />
            <Outlet />
          </div>
        </div>
      </Provider>
    </>
  );
};

export default LayoutPage;
