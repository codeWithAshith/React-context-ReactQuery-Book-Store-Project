import React, { useState } from "react";
import ButtonComponent from "./utils/Button.component";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import apiModules from "../api/service";

const INITIAL_STATE = {
  username: "",
  password: "",
  isClicked: false,
};

const RegisterComponent = () => {
  const [register, setRegister] = useState(INITIAL_STATE);
  const navigate = useNavigate();

  const registerHandler = () => {
    mutate({
      id: Date.now(),
      name: "Something",
      username: register.username,
      password: register.password,
    });
  };

  const { isLoading, mutate, isError } = useMutation({
    mutationKey: ["registerUser"],
    mutationFn: (user) => apiModules.registerUser(user),
    onError: (err) => console.log(err),
    onSuccess: (res) => {
      if (res.status === 201) {
        navigate("/login");
      }
    },
  });

  if (isLoading) return <p>Loading</p>;
  if (isError) return <p>Erroe</p>;

  return (
    <section className="bg-gray-50 ">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen">
        <div className="w-1/2 bg-white rounded-lg shadow ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sign up to your account
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
                  required=""
                  value={register.username}
                  onChange={(e) =>
                    setRegister({ ...register, username: e.target.value })
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
                  required=""
                  value={register.password}
                  onChange={(e) =>
                    setRegister({ ...register, password: e.target.value })
                  }
                />
              </div>
              <div className="flex justify-center">
                <ButtonComponent
                  label={"Register"}
                  clickHandler={registerHandler}
                />
              </div>
              <p className="text-sm font-light text-gray-500 py-0 my-0">
                Have an account yet?
              </p>
              <ButtonComponent
                label={"Login"}
                clickHandler={() => navigate("/login")}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterComponent;
