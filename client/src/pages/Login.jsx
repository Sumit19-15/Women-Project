import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
  };

  return (
    <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg bg-[#1f1616] rounded-2xl p-6 sm:p-8 shadow-xl">
      <h3 className="text-white text-center text-3xl sm:text-4xl font-bold mb-8 sm:mb-10">
        Welcome Back
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-white text-base sm:text-lg font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl text-white border border-[#4f4040] bg-[#251e1e] h-12 sm:h-14 px-4 placeholder:text-[#b4a2a3] focus:outline-none focus:border-[#e8b4b7] transition-colors duration-200 text-base sm:text-lg"
          />
        </div>

        {/* Password Field */}
        <div>
          <label
            htmlFor="password"
            className="block text-white text-base sm:text-lg font-medium mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl text-white border border-[#4f4040] bg-[#251e1e] h-12 sm:h-14 px-4 placeholder:text-[#b4a2a3] focus:outline-none focus:border-[#e8b4b7] transition-colors duration-200 text-base sm:text-lg"
          />
        </div>

        {/* Remember Me / Forgot Password */}
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 text-white text-sm sm:text-base cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-[#4f4040] bg-transparent rounded checked:bg-[#e8b4b7] checked:border-[#e8b4b7] focus:ring-0 focus:outline-none cursor-pointer"
            />
            Remember Me
          </label>
          <a
            href="#"
            className="text-[#e8b4b7] hover:underline text-sm sm:text-base"
          >
            Forgot Password?
          </a>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full h-12 sm:h-14 bg-[#e8b4b7] text-[#171212] font-bold text-lg sm:text-xl rounded-xl hover:bg-[#d49ea2] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#e8b4b7] focus:ring-offset-2 focus:ring-offset-[#1f1616] cursor-pointer"
        >
          Login
        </button>
      </form>

      {/* Register Link */}
      <p className="text-[#b4a2a3] text-sm sm:text-base text-center mt-6">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="underline text-[#e8b4b7] hover:text-[#d49ea2] transition-colors duration-200"
        >
          Register
        </Link>
      </p>
    </div>
  );
}
