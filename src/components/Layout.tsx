"use client";

import { useState } from "react";

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
			<nav className={`${isOpen ? 'visible opacity-100 transition-[opacity] delay-500' : 'invisible opacity-0'} z-10 absolute inset-0 grid grid-cols-8 grid-rows-6`}>
				<div className="col-span-3 p-2">
					<span className="text-[42px]">RSVP Jakarta</span>
				</div>
				<div className={`col-[8] flex justify-end items-center ${isOpen ? 'mr-2 transition-[margin] delay-500' : '-mr-32'}`}>
          <button onClick={() => setIsOpen(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24">
  						<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
          </button>
        </div>	
				<div className="w-full h-full row-[2_/_5] col-span-8">
					<ul className="w-full h-full flex flex-col items-strecth justify-center text-center">
						<li className="py-2 border-t border-gray-700 text-[72px]">Menu</li>
						<li className="py-2 border-t border-gray-700 text-[72px]">Menu</li>
						<li className="py-2 border-y border-gray-700 text-[72px]">Menu</li>
					</ul>
				</div>
			</nav>

     	<div className={`${isOpen ? 'visible opacity-100' : 'invisible opacity-0'} absolute inset-0 h-full grid grid-cols-8`}>
       	<div className={`bg-gray-900 col-span-2 ${isOpen ? 'h-full transition-[height] delay-[75ms]' : 'h-0'}`}></div> 
       	<div className={`bg-gray-900 col-span-3 ${isOpen ? 'h-full transition-[height] delay-[50ms]' : 'h-0'}`}></div> 
       	<div className={`bg-gray-900 col-span-2 transition-[height] delay-[25ms] ${isOpen ? 'h-full ' : 'h-0'}`}></div> 
       	<div className={`bg-gray-900 ${isOpen ? 'h-full transition-[height]' : 'h-0'}`}></div> 
      </div>

      <div className="w-screen h-screen grid grid-cols-8 grid-rows-6 bg-black">
        <header className="col-span-3 p-2">
          <span className="text-[42px]">RSVP Jakarta</span>
        </header>
        <div className="col-[8] flex justify-end items-center mr-2">
          <button onClick={() => setIsOpen(true)}>
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
        </div>
      </div>
    </>
  );
}
