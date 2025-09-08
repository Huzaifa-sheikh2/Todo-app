import React from "react";

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <div className="logo cursor-pointer">
        <span className="font-black">Total Task</span>
      </div>
      <div className="flex gap-10 justify-end">
        <span className="cursor-pointer hover-underline">Home</span>
        <span className="cursor-pointer hover-underline">About us</span>
      </div>
    </nav>
  );
}

export default Navbar;
