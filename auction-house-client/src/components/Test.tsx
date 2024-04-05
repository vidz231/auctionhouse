import { Link } from "react-router-dom";
import { setCookie } from "../utils/cookie";
import { GET } from "../utils/request";
import { Button } from "@mui/material";

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

export default function Test() {
  const handleLogout = async () => {
    setCookie("accessToken", "", 0);
  };
  const handleTestApi = async () => {
    const data = await GET("/api/users/1");
    console.log(data);
  };
  const handleTestPrivateApi = async () => {
    const data = await GET("/api/users/search?name=a");
    console.log(data);
  };
  return (
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
      <Button variant="text" className="bg-red-300 hover:bg-blue-400">
        Text
      </Button>
    </div>
  );
}
