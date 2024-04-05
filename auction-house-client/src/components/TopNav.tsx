import SearchBar from "./SearchBar";

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
  return (
    <div className="border-b flex justify-between items-center gap-4 py-2 px-4">
      <div className="flex gap-4">
        <TopNavItem href="./">Home</TopNavItem>
        <TopNavItem href="./auction">Category</TopNavItem>
        <TopNavItem href="./auction">Auction</TopNavItem>
        <TopNavItem href="./test">Test API</TopNavItem>
      </div>
      <SearchBar />
      <div className="flex items-center gap-4">
        <div>
          <i className="text-slate-500 text-lg fa-solid fa-bell relative cursor-pointer">
            <i className="absolute text-[10px] top-0 right-0 text-red-500 fa-solid fa-circle"></i>
          </i>
          <div
            id="noti-container"
            className="hidden absolute w-[240px] -translate-x-1/2 bg-white border rounded-md z-10 text-sm"
          >
            <div className="">
              <a
                href="./notification"
                className="flex justify-center w-full border-t text-blue-500 font-bold underline py-2 px-4 hover:text-blue-800"
              >
                Xem thêm
              </a>
            </div>
          </div>
        </div>
        <a href="./favorite">
          <i className="text-red-500 fa-solid fa-heart"></i>
        </a>
        <a href="./shopcart">
          <i className="text-slate-500 fa-solid fa-cart-shopping"></i>
        </a>
        <div className="relative inline-block text-left">
          <div>
            <button
              type="button"
              className="flex items-center focus:outline-none"
            >
              <img
                className="h-8 w-8 rounded-full"
                src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
                alt="Avatar"
              />
            </button>
          </div>

          <div
            id="dropdown-menu"
            className="z-10 hidden origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          >
            <div className="">
              <a
                href="./profile"
                className="bg-white block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Profile
              </a>

              <a
                href="./order"
                className="bg-white block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                My Order
              </a>

              <a
                href="./admin"
                className="bg-white block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Admin Dashboard
              </a>

              <a
                href="./logout"
                className="bg-white rounded-b-md block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
      <a
        href="./login"
        className="bg-black text-white font-bold justify-center items-center rounded-xl text-sm py-2 px-4 inline-block"
      >
        Login
      </a>
    </div>
  );
}
