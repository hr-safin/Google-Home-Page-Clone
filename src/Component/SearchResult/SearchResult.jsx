import React from "react";
import { FaClockRotateLeft } from "react-icons/fa6";
const SearchResult = ({ searchResult }) => {
  console.log(searchResult);
  return (
    <div className=" flex flex-col gap-2 pt-4">
      {searchResult.slice(0,7).map((item) => {
        return (
          <>
            
            <a target="_blank" href={item.link} className=" cursor-pointer hover:bg-gray-200 p-2 flex items-center gap-4">
              <span className=" text-gray-500 text-sm">
                <FaClockRotateLeft />
              </span>
              <h2 className="text-sm text-gray-500">{item.title}</h2>
            </a>
          </>
        );
      })}
    </div>
  );
};

export default SearchResult;
