import React from "react";
import Logo from "./Logo";
export default function Header() {
  
  return (
    <div className="w-full shadow-md h-16 flex items-center bg-black sm:px-40 justify-between">
      <div className="w-full flex items-center space-x-4">
        <Logo />
        <div className="text-green-700 hover:bg-green-200 hover:text-black p-2 rounded-md">
          <h4 className="text-1xl font-bold">Reach React Tic Tac Toe</h4>
        </div>
      </div>
    </div>
  );
}
