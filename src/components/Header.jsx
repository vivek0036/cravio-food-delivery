import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <div className="header bg-white shadow-xl px-24 flex flex-wrap items-center justify-between">
      <div>
        <Link to="/">
          <img className="w-24" src="/logo.svg" alt="" />
        </Link>
      </div>
      <div>
        <ul className="flex flex-wrap items-center gap-8 ">
          <li className="text-2xl py-1 px-2">
            <Link to="/">Home</Link>
          </li>

          <li className="text-2xl py-1 px-2">
            <Link to="/about">About Us</Link>
          </li>
          <li className="text-2xl py-1 px-2">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="text-2xl py-1 px-2">
            <Link to="/cart">Cart</Link>
          </li>
          <li className="text-2xl py-1 px-2">
            <button>Login</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
