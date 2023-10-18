import { Outlet } from "react-router-dom";
import Navbar from "../COmponents/Navbar";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <div>
      <Toaster />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Root;
