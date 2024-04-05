import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function HomeLayout() {
  return (
    <div>
      <TopNav />
      <div className="m-4 border h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
