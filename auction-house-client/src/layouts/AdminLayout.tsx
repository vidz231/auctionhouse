import { Outlet } from "react-router-dom";
import SideNav from "../pages/admin/components/SideNav";
import SearchBar from "../components/SearchBar";
import AccountMenu from "../components/AccountMenu";

export default function AdminLayout() {
  return (
    <div className="grid grid-cols-12 h-screen">
      <SideNav />
      <div className="col-span-10 w-full">
        <div className="py-2 px-4 w-full flex justify-between">
          <SearchBar />
          <AccountMenu />
        </div>
        <div className="px-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
