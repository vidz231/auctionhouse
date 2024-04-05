import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import { useForm, SubmitHandler } from "react-hook-form";
import { POST } from "../utils/request";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";

type Inputs = {
  email: string;
  password: string;
};

const ErrorText = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="text-red-400 text-sm inline-block mt-1">{children}</span>
  );
};

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const response = await POST("/auth/login", data);
    if (response.accessToken) {
      document.cookie = `accessToken=${response.accessToken}`;
      dispatch(login());
      navigate("/");
    }
  };
  return (
    <div className="h-screen w-screen flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Logo />
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          className="space-y-6"
          action=""
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label
              htmlFor="email"
              className="text-left block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="flex flex-col mt-2 items-start">
              <input
                id="email"
                type="text"
                // type="email"
                autoComplete="email"
                placeholder="Email"
                className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                defaultValue="customer1"
                {...register("email", { required: true })}
              />
              {errors.email && <ErrorText>This field is required</ErrorText>}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="flex flex-col mt-2 items-start">
              <input
                id="password"
                type="password"
                placeholder="Password"
                autoComplete="current-password"
                className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                defaultValue="1"
                {...register("password", { required: true })}
              />
              {errors.password && <ErrorText>This field is required</ErrorText>}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <Link
            to="/register"
            className="pl-1 font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
