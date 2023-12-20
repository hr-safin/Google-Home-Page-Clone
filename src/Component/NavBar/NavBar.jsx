import React, { useState } from "react";
import { CgMenuGridO } from "react-icons/cg";

const NavBar = () => {
  const [dropdown, setDropDown] = useState(false)

  const handleDropDown = () => {
    setDropDown(!dropdown)
  }
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
        <li onClick={handleDropDown} className={`hover:rounded-full p-2 hover:bg-gray-200  ${dropdown && "active:bg-gray-200 active:rounded-full" } focus:bg-gray-200 cursor-pointer`}>
          <span className="  text-sm md:text-2xl ">
            <CgMenuGridO />
          </span>
        </li>
        <div>
        <div className={`${dropdown ? "flex absolute  overflow-auto h-96 right-16 rounded-3xl top-20 w-96 bg-gray-100" : "hidden"} `}>
             <div className="  bg-gray-300 h-[570px]  w-[395px] m-3 rounded-2xl">
                <div className=" grid grid-cols-3 gap-4 p-3">
                  <div className=" p-4 cursor-pointer hover:bg-gray-200 hover:rounded-xl flex flex-col items-center gap-1">
                    <img className="w-10" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
                    <h2>Account</h2>
                  </div>
                  <div className=" p-4 cursor-pointer hover:bg-gray-200 hover:rounded-xl flex flex-col items-center gap-1">
                    <img className="w-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png" alt="" />
                    <h2>Google</h2>
                  </div>
                  <div className=" p-4 cursor-pointer hover:bg-gray-200 hover:rounded-xl flex flex-col items-center gap-1">
                    <img className="w-[58px]" src="https://i.postimg.cc/LsgLwq0C/Google-Maps-Logo-2020-svg.png" alt="" />
                    <h2>Map</h2>
                  </div>
                  <div className=" p-4 cursor-pointer hover:bg-gray-200 hover:rounded-xl flex flex-col items-center gap-1">
                    <img className="w-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Google_Meet_icon_%282020%29.svg/512px-Google_Meet_icon_%282020%29.svg.png?20221213135236" alt="" />
                    <h2>Meet</h2>
                  </div>
                  <div className=" p-4 cursor-pointer hover:bg-gray-200 hover:rounded-xl flex flex-col items-center gap-1">
                    <img className="w-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Google_News_icon.svg/2503px-Google_News_icon.svg.png" alt="" />
                    <h2>News</h2>
                  </div>
                  <div className=" p-4 cursor-pointer hover:bg-gray-200 hover:rounded-xl flex flex-col items-center gap-1">
                    <img className="w-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png" alt="" />
                    <h2>Email</h2>
                  </div>
                  <div className=" p-4 cursor-pointer hover:bg-gray-200 hover:rounded-xl flex flex-col items-center gap-1">
                    <img className="w-8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_Play_2022_icon.svg/1200px-Google_Play_2022_icon.svg.png" alt="" />
                    <h2>Play</h2>
                  </div>
                  <div className=" p-4 cursor-pointer hover:bg-gray-200 hover:rounded-xl flex flex-col items-center gap-1">
                    <img className="w-8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Google_Chat_icon_%282023%29.svg/995px-Google_Chat_icon_%282023%29.svg.png" alt="" />
                    <h2>Chat</h2>
                  </div>
                  <div className=" p-4 cursor-pointer hover:bg-gray-200 hover:rounded-xl flex flex-col items-center gap-1">
                    <img className="w-7" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Google_Contacts_icon_%282022%29.svg/800px-Google_Contacts_icon_%282022%29.svg.png" alt="" />
                    <h2>Contact</h2>
                  </div>
                  <div className=" p-4 cursor-pointer hover:bg-gray-200 hover:rounded-xl flex flex-col items-center gap-1">
                    <img className="w-8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/1200px-Google_Drive_icon_%282020%29.svg.png" alt="" />
                    <h2>Drive</h2>
                  </div>
                  <div className=" p-4 cursor-pointer hover:bg-gray-200 hover:rounded-xl flex flex-col items-center gap-1">
                    <img className="w-7" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Calendar_icon_%282020%29.svg/800px-Google_Calendar_icon_%282020%29.svg.png" alt="" />
                    <h2>Calendar</h2>
                  </div>
                  <div className=" p-4 cursor-pointer hover:bg-gray-200 hover:rounded-xl flex flex-col items-center gap-1">
                    <img className="w-7" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Google_Translate_logo.svg/2048px-Google_Translate_logo.svg.png" alt="" />
                    <h2>Translator</h2>
                  </div>
                  <div className=" p-4 cursor-pointer hover:bg-gray-200 hover:rounded-xl flex flex-col items-center gap-1">
                    <img className="w-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Photos_icon_%282020%29.svg/1200px-Google_Photos_icon_%282020%29.svg.png" alt="" />
                    <h2>Photos</h2>
                  </div>
                  <div className=" p-4 cursor-pointer hover:bg-gray-200 hover:rounded-xl flex flex-col items-center gap-1">
                    <img className="w-10" src="https://i.postimg.cc/CK9p16Kj/google-my-ad-center-icon-filled-256-removebg-preview.png" alt="" />
                    <h2>My Ad</h2>
                  </div>
                  <div className=" p-4 cursor-pointer hover:bg-gray-200 hover:rounded-xl flex flex-col items-center gap-1">
                    <img className="w-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Google_Shopping.svg/1024px-Google_Shopping.svg.png" alt="" />
                    <h2>Shopping</h2>
                  </div>
                  
                </div>
                <div className=" pt-20 pb-16 flex justify-center items-center">
                <button className=" px-4 py-2 bg-gray-300 hover:border hover:border-gray-300 border border-gray-300 text-gray-800 rounded-lg">More From Google</button>
              </div>
              </div>
              
        </div>
        
        </div>
        <li>
          <a
            target="_blank"
            href="https://accounts.google.com"
            className=" bg-blue-600 text-white text-sm md:text-base  rounded-md px-4 py-2 md:px-6 md:py-2"
          >
            Sign In
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
