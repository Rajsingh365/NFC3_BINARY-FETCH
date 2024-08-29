import { Outlet } from "react-router-dom";
import Navbar  from "../components/Navbar";
import Footer  from "../components/Footer";
import ChatBot from "../components/ChatBot";

export const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <div
        className="cursor-pointer"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1000,
        }}
      >
        <ChatBot />
      </div>
      <Footer />
    </>
  );
};