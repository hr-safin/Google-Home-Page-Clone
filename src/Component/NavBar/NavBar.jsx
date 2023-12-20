import React from "react";
import { CgMenuGridO } from "react-icons/cg";

const NavBar = () => {
  return (
    <nav className="flex justify-end items-center p-4 md:p-5">
      <ul className=" flex justify-around items-center gap-4">
        
        <li className="text-sm md:text-base hover:underline hover:underline-offset-1">
           <a target="_blank" href="https://google.com">
             Gmail
           </a>
           
        </li>
        <li className=" text-sm md:text-base hover:underline hover:underline-offset-1">
           <a target="_blank" href="https://google.com">
             Images
           </a>
           
        </li>
        <li className="hover:rounded-full p-2 hover:bg-gray-200 cursor-pointer">
          <span className="  text-sm md:text-2xl "><CgMenuGridO /></span>
          
        </li>
        <li>
            <button className=" bg-blue-600 text-white text-sm md:text-base  rounded-md px-4 py-2 md:px-6 md:py-2">Sign In</button>
            
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
