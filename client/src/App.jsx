import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayout } from "./pages/HomeLayout";
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";
import { Toaster } from "react-hot-toast";
import { AuthContextProvider } from "./context/AuthContext";
import { SocketContextProvider } from './context/SocketContext.jsx';
import ProtectedRoute from "./components/Protectedroute.jsx";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CommunityChat from "./pages/CommunityChat.jsx";

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
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "/community-chat",
        element: (
          <ProtectedRoute>
            <CommunityChat />
          </ProtectedRoute>
        ),
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
        <SocketContextProvider>
          <RouterProvider router={router} />
          <Toaster />
        </SocketContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
