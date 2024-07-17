import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-row w-full justify-between px-5 py-4 shadow-md bg-gray-800 text-white">
      <h2 className=" text-base font-extrabold">MOVIE</h2>
      <div className="flex flex-row gap-5">
        <Link to={"/"}>Home</Link>
        <Link to="/movie">Movie</Link>
        <Link to="/tv-show">TvShow</Link>
      </div>
    </div>
  );
};

export default Navbar;
