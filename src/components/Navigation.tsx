"use client";

import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="grid grid-flow-col justify-between p-2 border-b border-gray-800">
      <span className="text-2xl">R.S.V.P Jakarta</span>
      <button onClick={() => setIsOpen((prev) => !prev)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-16 h-16"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5"
          />
        </svg>
      </button>
      <nav
        className={`${
          isOpen ? "visible" : "invisible"
        } grid w-full h-full absolute top-0 left-0 grid-cols-2`}
      >
        <div
          className={`absolute w-full h-full transition-[opacity] ease-in-out duration-0 delay-1000 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="grid grid-flow-col justify-between p-2 border-b border-gray-800">
            <span className="text-2xl">R.S.V.P Jakarta</span>
            <button onClick={() => setIsOpen((prev) => !prev)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-24 h-24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <ul className="grid place-content-stretch mt-64">
            <li className="border-t text-center border-gray-800 p-6">Menu 1</li>
            <li className="border-t text-center border-gray-800 p-6">Menu 1</li>
            <li className="border-t border-b text-center border-gray-800 p-6">Menu 1</li>
          </ul>
        </div>
        <div
          className={`transition-[height] duration-250 ease-in-out delay-500 ${
            isOpen ? "h-full" : "h-0"
          } bg-black`}
        ></div>
        <div
          className={`grid transition-[height] duration-250 ease-in-out ${
            isOpen ? "h-full" : "h-0"
          } bg-black`}
        ></div>
      </nav>
    </header>
  );
}
