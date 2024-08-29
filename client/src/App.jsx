import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayout } from "./pages/HomeLayout";
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";
import { Toaster } from "react-hot-toast";
import { AuthContextProvider } from "./context/AuthContext";
import Signup from "./pages/Signup";
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/profile",
        element: <Profile />
      },
      {
        path: "/signup",
        element: <Signup />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      // {
      //   path: "/plan",
      //   element: <TravelForm />,
      // },
      // {
      //   path: "/about",
      //   element: <AboutUs />,
      // },
      // {
      //   path: "/contact",
      //   element: <ContactUs />,
      // },
      // {
      //   path: "/signup",
      //   element: <SignUp />,
      // },
      // {
      //   path: "/login",
      //   element: <Login />,
      // },
      // {
      //   path: "/profile",
      //   element: <Profile />,
      // }
    ],
  },
]);

function App() {
  return (
    <>
    <AuthContextProvider>
      <RouterProvider router={router} />
      <Toaster />
    </AuthContextProvider>
    </>
  );
}

export default App;
