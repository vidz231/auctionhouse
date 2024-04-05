import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";
import AccountMenu from "./AccountMenu";
import { getCookie } from "../utils/cookie";

const TopNavItem = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <a
      className="border rounded-md py-1 px-3 font-semibold text-sm hover:bg-blue-300 transition-all"
      href={href}
    >
      {children}
    </a>
  );
};

export default function TopNav() {
  const isLoged = useSelector((state: any) => state.auth.isLoged);
  console.log(isLoged);
  console.log("access: " + getCookie("accessToken"));

  return (
    <div className="border-b flex justify-between items-center gap-4 py-2 px-4">
      <div className="flex gap-4">
        <TopNavItem href="./">Home</TopNavItem>
        <TopNavItem href="./auction">Category</TopNavItem>
        <TopNavItem href="./auction">Auction</TopNavItem>
        <TopNavItem href="./test">Test API</TopNavItem>
      </div>
      <SearchBar />
      {isLoged && (
        <div className="flex items-center gap-4">
          <div>
            <i className="text-slate-500 text-lg fa-solid fa-bell relative cursor-pointer">
              <i className="absolute text-[10px] top-0 right-0 text-red-500 fa-solid fa-circle"></i>
            </i>
          </div>
          <a href="./favorite">
            <i className="text-red-500 fa-solid fa-heart"></i>
          </a>
          <a href="./shopcart">
            <i className="text-slate-500 fa-solid fa-cart-shopping"></i>
          </a>
          {/* Avatar here */}
          <AccountMenu />
        </div>
      )}
      {!isLoged && (
        <a
          href="./login"
          className="bg-black text-white font-bold justify-center items-center rounded-md text-sm py-1 px-4 inline-block"
        >
          Login
        </a>
      )}
    </div>
  );
}
