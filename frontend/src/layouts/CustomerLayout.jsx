import { Outlet } from "react-router-dom";
import { BottomNav } from "../components/common/BottomNav";
export const CustomerLayout = () => {
  return (
    <>
      <Outlet />
      <BottomNav />
    </>
  );
};
