import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import LayoutPage from "./Layout/LayoutPage";
import Landing from "./pages/Landing";
import PlansPage from "./pages/PlansPage";
import ErrorPage from "./pages/ErrorPage";
import NewsPage from "./pages/NewsPage";
import OnBoarding from "./pages/OnBoarding";
import ProtectedRoutes from "./components/ProtectedRoutes.jsx";
import Community from "./pages/Community";

const router = createBrowserRouter([
  {
    element: <LayoutPage />,
    children: [
      {
        path: "/",
        element: (
          <ProtectedRoutes>
            <Landing />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/plans",
        element: <PlansPage />,
      },
      {
        path: "/news",
        element: <NewsPage />,
      },
      {
        path: "/onboarding",
        element: (
          <ProtectedRoutes>
            <OnBoarding />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/community",
        element: (
          <ProtectedRoutes>
            <Community />
          </ProtectedRoutes>
        ),
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
