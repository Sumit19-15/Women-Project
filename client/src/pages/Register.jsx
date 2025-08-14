import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg bg-[#1f1616] rounded-2xl p-6 sm:p-8 shadow-xl">
      <h3 className="text-white text-center text-3xl sm:text-4xl font-bold mb-8 sm:mb-10">
        Welcome Back
      </h3>

      <form action="" className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-white text-base sm:text-lg font-medium mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your Name"
            className="w-full rounded-xl text-white border border-[#4f4040] bg-[#251e1e] h-12 sm:h-14 px-4 placeholder:text-[#b4a2a3] focus:outline-none focus:border-[#e8b4b7] transition-colors duration-200 text-base sm:text-lg"
          />
        </div>
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
            className="w-full rounded-xl text-white border border-[#4f4040] bg-[#251e1e] h-12 sm:h-14 px-4 placeholder:text-[#b4a2a3] focus:outline-none focus:border-[#e8b4b7] transition-colors duration-200 text-base sm:text-lg"
          />
        </div>
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
            className="w-full rounded-xl text-white border border-[#4f4040] bg-[#251e1e] h-12 sm:h-14 px-4 placeholder:text-[#b4a2a3] focus:outline-none focus:border-[#e8b4b7] transition-colors duration-200 text-base sm:text-lg"
          />
        </div>
        <div>
          <label
            htmlFor="conPassword"
            className="block text-white text-base sm:text-lg font-medium mb-2"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="conPassword"
            name="conPassword"
            placeholder="Confirm password"
            className="w-full rounded-xl text-white border border-[#4f4040] bg-[#251e1e] h-12 sm:h-14 px-4 placeholder:text-[#b4a2a3] focus:outline-none focus:border-[#e8b4b7] transition-colors duration-200 text-base sm:text-lg"
          />
        </div>
        <button
          type="submit"
          className="w-full h-12 sm:h-14 bg-[#e8b4b7] text-[#171212] font-bold text-lg sm:text-xl rounded-xl hover:bg-[#d49ea2] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#e8b4b7] focus:ring-offset-2 focus:ring-offset-[#1f1616] cursor-pointer"
        >
          Register
        </button>
      </form>
      <p className="text-[#b4a2a3] text-sm sm:text-base text-center mt-6">
        Already have an account?{" "}
        <Link
          to="/login"
          className="underline text-[#e8b4b7] hover:text-[#d49ea2] transition-colors duration-200"
        >
          Login
        </Link>
      </p>
    </div>
  );
}
