import React from "react";

const NavBar = () => {
  return (
    <nav className="flex justify-end items-center p-5">
      <ul className=" flex justify-around items-center gap-4">
        
        <li className=" hover:underline hover:underline-offset-1">
           <a href="https://mail.google.com/mail">
             Gmail
           </a>
           
        </li>
        <li className=" hover:underline hover:underline-offset-1">
           <a href="https://mail.google.com/mail">
             Images
           </a>
           
        </li>
        <li>
            Icon
        </li>
        <li>
            <button className=" bg-blue-600 text-white rounded-md px-6 py-2">Sign In</button>
            
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
