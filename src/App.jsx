import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import LayoutPage from "./Layout/LayoutPage";
import Landing from "./pages/Landing";
import PlansPage from "./pages/PlansPage";
import ErrorPage from "./pages/ErrorPage";
import NewsPage from "./pages/NewsPage";

const router = createBrowserRouter([
  {
    element: <LayoutPage />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/plans",
        element: <PlansPage />,
      },
      {
        path: "/news",
        element: <NewsPage />,
      },
    ],
  },
  {
    element: <ErrorPage />,
    path: "/*",
  },
]);
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
