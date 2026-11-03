import React from "react";

const Header = () => {
  return (
    <div className="header bg-purple-200 shadow-xl px-16 flex flex-wrap items-center justify-between">
      <div>
        <img className="w-24" src="./logo.svg" alt="" />
      </div>
      <div>
        <ul className="flex flex-wrap items-center gap-8 ">
          <li className="text-2xl py-1 px-2">Home</li>

          <li className="text-2xl py-1 px-2">About Us</li>
          <li className="text-2xl py-1 px-2">Contact Us</li>
          <li className="text-2xl py-1 px-2">Cart</li>
          <li className="text-2xl py-1 px-2">
            <button>Login</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
