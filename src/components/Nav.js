import React from "react";

import { useRouter } from "next/router";
function Nav() {
  const router = useRouter();
  return (
    <nav className='flex bg-yellow-500 justify-between w-full gap-20 px-20 py-2'>
      {/* <div className='flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide'>
        {Object.entries(request).map(([key, { title, url }]) => (
          <h2
            onClick={() => router.push(`/?genre=${key}>`)}
            key={key}
            className=' last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500'
          >
            {title}
          </h2>
        ))}
      </div>

      <div className='absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12'></div> */}

      <div>logo</div>
      <div>
        <button
          className='py-2 bg-red-500 px-8'
          onClick={() => router.push("/tasks/new")}
        >
          New Task
        </button>
      </div>
    </nav>
  );
}

export default Nav;
