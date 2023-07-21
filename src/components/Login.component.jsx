import React, { useEffect, useState } from "react";
import ButtonComponent from "./utils/Button.component";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";

import apiModules from "../api/service.js";
import { useUserContext } from "../context/userContext";

const INITIAL_STATE = {
  username: "",
  password: "",
  isClicked: false,
};

const LoginComponent = () => {
  const { setUser } = useUserContext();
  const [login, setLogin] = useState(INITIAL_STATE);
  const navigate = useNavigate();

  const loginHandler = () => {
    setLogin({ ...login, isClicked: true });
  };

  const { isLoading, data, isError } = useQuery({
    queryKey: ["fetchUser"],
    queryFn: apiModules.fetchUser,
    enabled: login.isClicked,
  });

  useEffect(() => {
    if (data) {
      setUser(data.data.find((user) => user.username === login.username));
      navigate("/");
    }
  }, [data]);

  if (isLoading) return <p>Loading</p>;
  if (isError) return <p>Erroe</p>;

  return (
    <section className="bg-gray-50 ">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen">
        <div className="w-1/2 bg-white rounded-lg shadow ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sign in to your account
            </h1>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="name@company.com"
                  value={login.username}
                  onChange={(e) =>
                    setLogin({ ...login, username: e.target.value })
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  value={login.password}
                  onChange={(e) =>
                    setLogin({ ...login, password: e.target.value })
                  }
                />
              </div>
              <div className="flex justify-center">
                <ButtonComponent label={"Login"} clickHandler={loginHandler} />
              </div>
              <p className="text-sm font-light text-gray-500 py-0 my-0">
                Don’t have an account yet?
              </p>
              <ButtonComponent
                label={"Register"}
                clickHandler={() => navigate("/register")}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginComponent;
