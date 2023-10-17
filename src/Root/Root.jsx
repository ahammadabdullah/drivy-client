import { Outlet } from "react-router-dom";
import Navbar from "../COmponents/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar />
      <h3>Root Folder</h3>
      <Outlet />
    </div>
  );
};

export default Root;
