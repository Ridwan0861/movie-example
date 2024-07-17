import React from "react";

const Authentication = () => {
  return (
    <form className="flex flex-col justify-center items-center h-screen gap-2 ">
      <label>Authentication</label>
      <input type="text" className="border border-gray-400 rounded-sm" />
      <input type="password" className="border border-gray-400 rounded-sm" />
      <button className="bg-black text-white rounded-sm py-1 px-5">
        Login
      </button>
    </form>
  );
};

export default Authentication;
