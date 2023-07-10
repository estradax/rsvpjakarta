"use client";

import { useState } from "react";
import Image from "next/image";

export default function Layout({ children } : { children: React.ReactNode }) {
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
					<li className="grid grid-cols-8 py-2 border-t border-gray-700 transition hover:bg-red-400">
						<span className="col-[3] text-[72px]">Art</span>
						<span className="col-[5_/_span_2] flex items-center text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porta dictum orci ac gravida. Aliquam vel fringilla risus. Duis vel urna non leo sodales pulvinar eu sit amet orci. Praesent quam libero, iaculis vitae vestibulum vel, vulputate a erat.</span>
					</li>
					<li className="grid grid-cols-8 py-2 border-t border-gray-700 transition hover:bg-red-400">
						<span className="col-[2_/_span_3] flex items-center text-justify">Praesent laoreet venenatis purus, et congue mauris luctus vitae. Nulla eget commodo nunc, vitae lacinia felis. Nunc faucibus placerat diam vitae auctor. Duis eleifend malesuada nisl. Quisque dapibus elit quis nisl convallis, eget tristique metus porttitor. Aenean quis dolor sed velit vulputate ornare eu nec ipsum. Aliquam erat volutpat.</span>
						<span className="col-[6] text-[72px]">Work</span>
					</li>
					<li className="grid grid-cols-8 py-2 border-y border-gray-700 transition hover:bg-red-400">
						<span className="col-[4] text-[72px]">Contact</span>
						<span className="col-[6_/_span_2] flex items-center text-justify">Aliquam vel fringilla risus. Duis vel urna non leo sodales pulvinar eu sit amet orci. Praesent quam libero, iaculis vitae vestibulum vel, vulputate a erat.</span>
					</li>
				</ul>
			</div>
			<div className="row-[5] col-span-2 flex items-center ml-16">
				<div className="h-full mr-8">
					<Image className="h-full w-full object-cover rounded-3xl" src="/an-art.jpg" width={360} height={360} alt="" />
				</div>
				<span className="text-xs text-justify">Aliquam vel fringilla risus. Duis vel urna non leo sodales pulvinar eu sit amet orci.</span>
			</div>
		</nav>

		<div className={`${isOpen ? 'visible opacity-100' : 'invisible opacity-0'} absolute inset-0 h-full grid grid-cols-8`}>
			<div className={`bg-gray-900 col-span-2 ${isOpen ? 'h-full transition-[height] delay-[75ms]' : 'h-0'}`}></div> 
			<div className={`bg-gray-900 col-span-3 ${isOpen ? 'h-full transition-[height] delay-[50ms]' : 'h-0'}`}></div> 
			<div className={`bg-gray-900 col-span-2 transition-[height] delay-[25ms] ${isOpen ? 'h-full ' : 'h-0'}`}></div> 
			<div className={`bg-gray-900 ${isOpen ? 'h-full transition-[height]' : 'h-0'}`}></div> 
		</div>

		<div className="w-screen grid grid-cols-8 grid-rows-6 bg-black">
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
