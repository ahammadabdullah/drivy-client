import { Outlet } from "react-router-dom";
import Navbar from "../COmponents/Navbar";
import { Toaster } from "react-hot-toast";
import ToggleTheme from "../COmponents/ToggleTheme";
import Footer from "../COmponents/Footer";

const Root = () => {
  return (
    <div>
      <Toaster />
      <Navbar />
      <Outlet />
      <div className="fixed top-80 right-5 ">
        {" "}
        <ToggleTheme />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
