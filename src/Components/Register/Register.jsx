import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";

const schema = z
  .object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.string().email("Invalid email format"),
    pass: z.string().min(6, "Password must be at least 6 characters"),
    confirmPass: z.string().min(6, "Confirm Password must be at least 6 characters"),
  })
  .refine((data) => data.pass === data.confirmPass, {
    message: "Passwords must match",
    path: ["confirmPass"],
  });

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      pass: "",
      confirmPass: "",
    },
  });

  function save(data) {
    console.log("Form Submitted:", data);
  }

  return (
    <div className="w-full h-screen flex flex-col bg-gray-200">
      <div className="flex flex-col md:flex-row w-full h-full">
        {/* Left Side - Register Form */}
        <div className="md:w-7/12 flex flex-col justify-center items-center bg-white px-6 md:px-12 py-12 w-full text-[#03091E]">
          <div className="w-full max-w-md">
            <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-4">Create Account</h2>
            <p className="text-md text-center text-gray-600 mb-6">
              Create your account to access our <br />
              <span className="text-blue-600 font-semibold">Ticketing System</span>.
            </p>

            <form onSubmit={handleSubmit(save)} className="space-y-4">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700">Name</label>
                <input
                  {...register("name")}
                  type="text"
                  className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-lg"
                  placeholder="Enter your name"
                />
                {errors.name && <small className="text-red-500">{errors.name.message}</small>}
              </div>

              {/* Email Input with Icon */}
              <div>
                <label className="block text-sm font-semibold text-gray-700">Email</label>
                <div className="relative mt-2">
                  <input
                    {...register("email")}
                    type="email"
                    className="w-full px-4 pr-12 pl-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-lg"
                    placeholder="Enter your email"
                  />
                  <i className="fas fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg"></i>
                </div>
                {errors.email && <small className="text-red-500">{errors.email.message}</small>}
              </div>

              {/* Password Input with Icons */}
              <div> 
                <label className="block text-sm font-semibold text-gray-700">Password</label>
                <div className="relative mt-2">
                  <input
                    {...register("pass")}
                    type={showPassword ? "text" : "password"}
                    className="w-full px-4 pr-12 pl-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-lg"
                    placeholder="Enter your password"
                  />
                  <i className="fas fa-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg"></i>
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 text-lg"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <i className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}></i>
                  </button>
                </div>
                {errors.pass && <small className="text-red-500">{errors.pass.message}</small>}
              </div>

              {/* Confirm Password Input with Icons */}
              <div>
                <label className="block text-sm font-semibold text-gray-700">Confirm Password</label>
                <div className="relative mt-2">
                  <input
                    {...register("confirmPass")}
                    type={showConfirmPassword ? "text" : "password"}
                    className="w-full px-4 pr-12 pl-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-lg"
                    placeholder="Confirm your password"
                  />
                  <i className="fas fa-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg"></i>
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 text-lg"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    <i className={showConfirmPassword ? "fas fa-eye-slash" : "fas fa-eye"}></i>
                  </button>
                </div>
                {errors.confirmPass && <small className="text-red-500">{errors.confirmPass.message}</small>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 text-lg"
              >
                Sign Up
              </button>
            </form>

            {/* Sign In Link */}
            <div className="mt-4 text-center">
              <span className="text-gray-600">Already have an account? </span>
              <Link to="/auth/login" className="text-blue-600 font-semibold hover:underline">
                Sign In
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side - Welcome Section */}
        <div className="md:w-5/12 flex flex-col items-center justify-center bg-[#03091E] p-8 md:p-12 text-center text-white">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Hello Friend!</h1>
          <p className="text-lg leading-relaxed">
            To keep connected with us, please <br /> sign in with your personal info.
          </p>
        </div>
      </div>
    </div>
  );
}
