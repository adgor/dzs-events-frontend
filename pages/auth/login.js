import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState, useContext } from "react";
import AuthContext from "@/context/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, error } = useContext(AuthContext);

  useEffect(() => error && toast.error(error));

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <>
      <div className="container h-full px-4 py-16 mx-auto">
        <div className="flex items-center content-center justify-center h-full">
          <div className="w-full px-4 lg:w-4/12">
            <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-blue-100 border-0 rounded-lg shadow-lg">
              <ToastContainer />
              <div className="flex-auto px-4 py-10 pt-0 lg:px-10">
                <div className="my-6 text-xl font-bold text-center text-blue-600 sm:text-2xl">
                  Login To Your Account
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="relative w-full py-3 mb-3">
                    <label
                      className="block mb-2 text-xs font-bold text-blue-600 uppercase"
                      htmlFor="email"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-3 text-sm text-blue-600 placeholder-blue-300 transition-all duration-150 ease-linear bg-white border-0 rounded shadow focus:outline-none focus:ring"
                      placeholder="Email Address"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block mb-2 text-xs font-bold text-blue-600 uppercase"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-3 py-3 text-sm text-blue-600 placeholder-blue-300 transition-all duration-150 ease-linear bg-white border-0 rounded shadow focus:outline-none focus:ring"
                      placeholder="Password"
                    />
                  </div>

                  <div className="mt-6 text-center">
                    <input
                      type="submit"
                      value="Login"
                      className="w-full px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-800 rounded shadow outline-none active:bg-blue-600 hover:shadow-lg focus:outline-none"
                    ></input>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
