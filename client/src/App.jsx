import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayout } from "./pages/HomeLayout";
import { Toaster } from "react-hot-toast";
import { AuthContextProvider } from "./context/AuthContext";
import Dashboard from "./pages/Dashboard/Dashboard";
import MatchMaking from './pages/MatchMaking'
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      // {
      //   index: true,
      //   element: <Landing />,
      // },
      {
        path:'/matchmaking',
        element:<MatchMaking/>
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