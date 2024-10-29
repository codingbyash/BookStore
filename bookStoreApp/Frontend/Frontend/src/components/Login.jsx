import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate(); // Initialize useNavigate

const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4002/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Loggedin Successfully");
          document.getElementById("my_modal_3").close();
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("Users", JSON.stringify(res.data.user));
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
          setTimeout(() => {}, 2000);
        }
      });
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box p-6 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg shadow-lg">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-2xl mb-4">Login</h3>

            <div className="mt-4 space-y-4">
              <label className="block text-sm font-medium" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-pink-500"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>

            <div className="mt-4 space-y-4">
              <label className="block text-sm font-medium" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-pink-500"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>

            <div className="flex justify-between items-center mt-6">
              <button className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-300">
                Login
              </button>
              <p>
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 hover:text-blue-700"
                >
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
