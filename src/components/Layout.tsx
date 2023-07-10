"use client";

import { useState } from "react";
import Image from "next/image";

export default function Layout({ children } : { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
			<nav className={`${isOpen ? 'visible opacity-100 transition-[opacity] delay-500' : 'invisible opacity-0'} z-10 absolute inset-0 h-full grid grid-cols-8 grid-rows-6`}>
				<div className="col-span-3 p-2">
					<span className="text-[42px]">RSVP Jakarta</span>
				</div>
			<div className={`col-[8] flex justify-end items-center ${isOpen ? 'mr-2 transition-[margin] delay-500' : '-mr-32'}`}>
          <button onClick={() => setIsOpen(false)} className="group">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24 transition group-hover:text-red-400">
  						<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
          </button>
        </div>	
				<div className="w-full h-full row-[3_/_span_3] md:row-[2_/_span_3] col-span-8">
					<ul className="w-full h-full flex flex-col items-strecth justify-center text-center">
						<li className="grid md:grid-cols-8 py-2 border-t border-gray-700 transition hover:bg-red-400">
							<span className="md:col-[3] text-[72px] uppercase">Art</span>
							<span className="col-[5_/_span_2] hidden md:flex items-center text-justify">Lorem ipsum dolor sit amet</span>
						</li>
						<li className="grid md:grid-cols-8 py-2 border-t border-gray-700 transition hover:bg-red-400">
							<span className="col-[2_/_span_3] hidden md:flex items-center text-justify">Praesent laoreet venenatis purus</span>
							<span className="md:col-[6] text-[72px] uppercase">Work</span>
						</li>
						<li className="grid md:grid-cols-8 py-2 border-y border-gray-700 transition hover:bg-red-400">
							<span className="md:col-[2] lg:col-[3] text-[72px] uppercase">Contact</span>
							<span className="col-[6_/_span_2] hidden md:flex items-center text-justify">Aliquam vel fringilla risus.</span>
						</li>
					</ul>
				</div>
				<div className="hidden md:block col-[4_/_span_2]">
					<p className="text-center">1600 Amphitheatre Parkway</p>
					<p className="text-center">Mountain View, CA 94043, USA</p>
					<p className="text-center">(650) 253-0000</p>
				</div>
			</nav>

     	<div className={`${isOpen ? 'visible opacity-100' : 'invisible opacity-0'} absolute inset-0 h-full grid grid-cols-8`}>
       	<div className={`bg-black col-span-2 ${isOpen ? 'h-full transition-[height] delay-[75ms]' : 'h-0'}`}></div> 
       	<div className={`bg-black col-span-3 ${isOpen ? 'h-full transition-[height] delay-[50ms]' : 'h-0'}`}></div> 
       	<div className={`bg-black col-span-2 transition-[height] delay-[25ms] ${isOpen ? 'h-full ' : 'h-0'}`}></div> 
       	<div className={`bg-black ${isOpen ? 'h-full transition-[height]' : 'h-0'}`}></div> 
      </div>

      <div className="w-screen h-screen grid grid-cols-8 grid-rows-6 bg-black">
        <header className="col-span-3 p-2">
          <span className="text-[42px]">RSVP Jakarta</span>
        </header>
        <button onClick={() => setIsOpen(true)} className="col-[8] flex justify-end items-center transition hover:bg-red-400">
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
				<div className="col-span-8 row-span-5">
					{children}
				</div>
      </div>
    </>
  );
}
