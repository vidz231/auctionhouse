import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import ChatBox from "../components/ChatBox";

export default function HomeLayout() {
  return (
    <div className="relative">
      <TopNav />
      <div className="m-4">
        <Outlet />
      </div>
      <Footer />
      <ChatBox />
    </div>
  );
}
