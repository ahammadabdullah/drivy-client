import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <h3>Root Folder</h3>
      <Outlet />
    </div>
  );
};

export default Root;
