import { Link } from "react-router-dom";
import { GET } from "../utils/request";

export default function Home() {
  const handleTestApi = async () => {
    const user = await GET("/users/1");
    console.log(user);
  };
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="flex gap-4 ">
        <Link
          to="./login"
          className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-400 rounded-md font-bold active:bg-blue-600 cursor-pointer"
        >
          Login
        </Link>
        <Link
          to="./register"
          className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-400 rounded-md font-bold active:bg-blue-600 cursor-pointer"
        >
          Register
        </Link>
        <div
          className="px-4 py-2 bg-blue-500 text-white rounded-md font-bold active:bg-blue-600 cursor-pointer"
          onClick={handleTestApi}
        >
          Test api
        </div>
      </div>
    </div>
  );
}
