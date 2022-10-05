import { useState } from "react";
import { AuthInput } from "../components/auth/AuthInput";

const Login = () => {
  const [pageType, setPageType] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    if (pageType === "login") {
      // login
    } else {
      // signup
    }
  };

  return (
    <div
      className={`
      flex items-center justify-center h-screen w-full
    `}
    >
      <div className={`hidden md:block md:w-full`}>
        <picture>
          <img
            src="https://source.unsplash.com/random"
            alt="Login screen"
            className={`h-screen w-full object-cover`}
          />
        </picture>
      </div>
      <div
        className={`
          flex-col items-center w-full md:w-1/2 m-10
          bg-gray-200 p-5 rounded-lg
      `}
      >
        <h1
          className={`
          text-xl font-bold mb-5
          `}
        >
          {pageType === "login" ? "Login" : "Sign Up"}
        </h1>

        <AuthInput
          label="Email"
          type="email"
          value={email}
          valueChange={setEmail}
        />
        <AuthInput
          label="Password"
          type="password"
          value={password}
          valueChange={setPassword}
        />

        <button
          onClick={submit}
          className={`
        w-full bg-indigo-500 hover:bg-indigo-400 text-white
        rounded-lg px-4 py-3 mt-6 font-semibold
        transition duration-500
      `}
        >
          {pageType === "login" ? "Login" : "Signup"}
        </button>
        <button
          className={`
          w-full bg-white hover:bg-gray-300 text-black
        rounded-lg px-4 py-3 font-semibold mt-2 border-2 border-gray-300
        transition duration-500
          `}
        >
          Login with Google
        </button>

        {pageType === "login" ? (
          <p className={`mt-8 text-sm`}>
            {"Don't have an account? "}
            <a
              onClick={() => setPageType("signup")}
              className={`
                          text-blue-500 hover:text-blue-700
                          font-semibold cursor-pointer
                      `}
            >
              Create an account
            </a>
          </p>
        ) : (
          <p className={`mt-8 text-sm`}>
            {"Already have an account? "}
            <a
              onClick={() => setPageType("login")}
              className={`
                          text-blue-500 hover:text-blue-700
                          font-semibold cursor-pointer
                      `}
            >
              Login
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
