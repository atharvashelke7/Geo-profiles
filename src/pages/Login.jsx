import React from "react";

const Login = () => {
  return (
    <div className="max-w-xl w-full md:w-[28vw] mx-auto rounded-2xl md:rounded-lg p-8 md:p-10 shadow-xl bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600">
      <h1 className="font-thin text-3xl font-['Helvetica'] text-white text-center mb-8">
        Sign In
      </h1>
      <form className="space-y-8">
        <div className="space-y-6">
          {/* Email Field */}
          <div>
            <label className="block text-white text-lg leading-normal font-thin mb-2">
              Email
            </label>
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="email"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Email"
                required
              />
            </div>
          </div>
          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-white text-lg font-thin leading-normal mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 px-4 bg-[#0c56f5] text-lg rounded-lg text-white font-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Login In
        </button>
        {/* Sign Up Link */}
        <div className="flex justify-center gap-2 mt-4">
          <span className="text-white font-md">Don't have an account?</span>
          <span className="text-blue-400 font-md hover:underline cursor-pointer">Sign up</span>
        </div>
      </form>
    </div>
  );
};

export default Login;
