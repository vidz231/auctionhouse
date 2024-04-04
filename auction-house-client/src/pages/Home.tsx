import { Link } from "react-router-dom";
import { GET } from "../utils/request";
import { setCookie } from "../utils/cookie";

const TempButton = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <Link
      to={href}
      className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-400 rounded-md font-bold active:bg-blue-600 cursor-pointer"
    >
      {children}
    </Link>
  );
};

export default function Home() {
  const handleLogout = async () => {
    setCookie("accessToken", "", 0);
  };
  const handleTestApi = async () => {
    const data = await GET("/users/1");
    console.log(data);
  };
  const handleTestPrivateApi = async () => {
    const data = await GET("/users/search?name=a");
    console.log(data);
  };
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="flex gap-4 ">
        <TempButton href="./login">Login</TempButton>
        <TempButton href="./register">Register</TempButton>
        <div
          className="px-4 py-2 bg-blue-500 text-white rounded-md font-bold active:bg-blue-600 cursor-pointer"
          onClick={handleLogout}
        >
          Logout
        </div>
        <div
          className="px-4 py-2 bg-blue-500 text-white rounded-md font-bold active:bg-blue-600 cursor-pointer"
          onClick={handleTestApi}
        >
          Test api
        </div>
        <div
          className="px-4 py-2 bg-blue-500 text-white rounded-md font-bold active:bg-blue-600 cursor-pointer"
          onClick={handleTestPrivateApi}
        >
          Test private api
        </div>
      </div>
    </div>
  );
}
