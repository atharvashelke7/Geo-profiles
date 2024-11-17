import React from "react";
import Login from "../pages/Login";
import Title from "./Title";

const Body = () => {
  return (
    <div>
      <div className="">
        {/* Radial gradient background */}
        <div className="min-h-screen inset-0 -z-10 w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
          {/* Container for Title and Login */}
          <div className="flex flex-col md:flex-row justify-center items-center md:space-x-12">
            {/* Title container */}
            <div className="w-full p-6 md:p-12">
              <Title />
            </div>

            {/* Login container */}
            <div className="w-full md:w-1/2 p-6 md:p-12 flex justify-center">
              <Login />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
