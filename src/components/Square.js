import React from "react";

export default function Square(props) {
  return (
    <button
      className={`hover:bg-green-700 hover:text-white hover:transition duration-700 ease-in-out h-24 w-24 md:h-30 md:w-30 lg:h-40 lg:w-40 cursor-pointer relative rounded-md border-2 border-gray-500  top-0 text-4xl font-bold p-15 m-15 text-transform text-black bg-white
        ${props.value && "disabled"}`}
      onClick={props.onClick}
      value={props.value}
    >
      {props.value}
    </button>
  );
}
